import { Component, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { CommonService } from './global/common_service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NetworkService, ConnectionStatus } from './services/network.service';
import { OfflineManagerService } from './services/offline-manager.service';
import { Platform, NavController, MenuController, ToastController, AlertController, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';
import { AppRate } from '@ionic-native/app-rate/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  imageUrl = environment.image_url;
  businessLogo: any = "";
  isMenu: any;
  setBusiness: any;

  pages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'grid',
    },
    {
      title: 'Invoice',
      url: '/invoice-list',
      icon: 'document-text',
    },
    {
      title: 'Expense',
      url: '/expense-list',
      icon: 'newspaper',
    },
    {
      title: 'Customers',
      url: '/customers-list',
      icon: 'people',
    },
    {
      title: 'Products',
      url: '/products-list',
      icon: 'cube',
    },
    {
      title: 'Vendors',
      url: '/vendors-list',
      icon: 'people-circle',
    },
    {
      title: 'Reports',
      url: '/reports',
      icon: 'analytics',
    },
    {
      title: 'GST Calculate',
      url: '/gstcalculation',
      icon: 'notifications',
    },
  ]

  OptionValue: any;
  OptionValuelist: any;
  url = 'https://yfobs.in/page/about-us';
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private router: Router,
    private network: Network,
    private api: CommonService,
    private toastController: ToastController,
    private menuctrl: MenuController,
    private offlineManager: OfflineManagerService,
    private networkService: NetworkService,
    private alertCtrl: AlertController,
    private iab: InAppBrowser,
    private oneSignal: OneSignal,
    private location: Location,
    private alertController: AlertController,
    private appRate: AppRate,
    private FirebasePlugin: Firebase
  ) {

    this.initializeApp();
    this.network.onDisconnect().subscribe(() => {
      this.presentToast();
    });
    this.isMenu = localStorage.getItem("token");
    this.setBusiness = localStorage.getItem("ActiveBusiness");
    if (localStorage.getItem("token") != null && localStorage.getItem("ActiveBusiness") != null) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/signin']);
    }
    this.backButtonEvent();
    this.initializePush();
    this.initializeAnalytics();

  }
  initializeAnalytics() {
    this.FirebasePlugin.setAnalyticsCollectionEnabled(true); // Enables analytics collection
    this.FirebasePlugin.logEvent("select_content", { content_type: "page_view", item_id: "signin" });

    // window.FirebasePlugin.setUserId("user_id");
    // window.FirebasePlugin.setUserProperty("name", "value");
}

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      this.routerOutlets.forEach(async (outlet: IonRouterOutlet) => {
        if (localStorage.getItem("token")) {
          if (this.router.url != '/dashboard') {
            // await this.router.navigate(['/']);
            await this.location.back();
          }
          else if (this.router.url === '/dashboard') {
            if (this.router.url === '/dashboard') {
              this.presentAlertConfirm();
            }
            else {
              navigator['app'].exitApp();
            }
          }
        }
      });
    });
  }

  rate() {
    this.menuctrl.close();
    window.open("https://play.google.com/store/apps/details?id=com.com.yfobs&hl=en","_system");
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      // header: 'Confirm!',
      message: 'Are you sure you want to exit the app?',
      buttons: [{
        text: 'cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => { }
      }, {
        text: 'Close App',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    });

    await alert.present();
  }


  editProfile() {
    this.menuctrl.close();
    this.router.navigate(['/business-info-update'], { queryParams: { returnUrl: 'dashboard' } });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Network was disconnected..!',
      duration: 2000,
      position: 'top',
      cssClass : 'toast_'
    });
    toast.present();
  }
  
  help()
  {
    this.menuctrl.close();
    this.iab.create('https://yfobs.in/help', '_system', 'location=yes');
  }

  support()
  {
    this.menuctrl.close();
    this.iab.create('https://yfobs.in/support', '_system', 'location=yes');
  }

  async logout() {
    this.menuctrl.close();
    const alert = await this.alertCtrl.create({
      header: 'Confirm !',
      message: 'Are you sure you want to logout ?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
          }
        },
        {
          text: 'Logout',
          handler: () => {
            localStorage.clear();
            this.router.navigate(['/signin']);
          }
        },
      ]
    });
    await alert.present();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.show();
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#FFF');
      this.splashScreen.hide();

      this.networkService.onNetworkChange().subscribe((status: ConnectionStatus) => {
        if (status == ConnectionStatus.Online) {
          this.offlineManager.checkForEvents().subscribe();
        }
      });
    });
  }

  initializePush() {
    if (this.platform.is('android')) {
      this.oneSignal.startInit('f06b8ec7-0b78-435a-a27f-9c43f6272608', '1053547774111');
    }
    if (this.platform.is('ios')) {
      this.oneSignal.startInit('onseSignalAppId');
    }
    //this.oneSignal.startInit('a6146470-8d9e-475a-8bba-cf7d6e11e8d7', '1071070652424');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    // Notifcation was received in general
    this.oneSignal.handleNotificationReceived().subscribe(data => {
      let msg = data.payload.body;
      let title = data.payload.title;
      let additionalData = data.payload.additionalData;
    });

    // Notification was really clicked/opened
    this.oneSignal.handleNotificationOpened().subscribe(data => {
      //let additionalData = data.notification.payload.additionalData;
      // this.showAlert('Notification opened', 'You already read this before', additionalData.task);
      let additionalData = data.notification.payload.additionalData;
      if (additionalData.link) {
        window.open(additionalData.link,"_system");
      }
    });

    this.oneSignal.getIds().then((id) => {
      localStorage.setItem("notification_id", id.userId)
    })

    this.oneSignal.endInit();
  }

}
