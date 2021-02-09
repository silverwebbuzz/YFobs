import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonService } from '../global/common_service';
import { NotificationService } from '../global/notification.service';
import { environment } from 'src/environments/environment';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notificationArray: any = [];
  imageUrl = environment.image_url;
  user_not_found_place_holder = 'assets/imgs/placeholder.png';

  constructor(private navCtrl: NavController,
    private api: CommonService,
    private notify: NotificationService,
    private iab: InAppBrowser,
  ) {
    this.notify.notification.subscribe(val => {
      if (val) {
        let reverseArray = val.reverse();
        this.notificationArray = reverseArray;
      }
    });
    this.notify.unReadCount.subscribe(val => {
    })
  }

  ngOnInit() { }

  notification(link) {
    if (link != '') {
      this.iab.create(link, '_system', 'location=yes');
    }
  }

  markAsRead(index) {
    this.notificationArray[index].IsRead = true;
    let notificationId = this.notificationArray[index].id;
    let localStorage = JSON.parse(window.localStorage.getItem('readNotification'));
    if (localStorage) {
      if (!localStorage.includes(notificationId)) {
        localStorage.push(notificationId);
        window.localStorage.setItem('readNotification', JSON.stringify(localStorage));
      }
    } else {
      window.localStorage.setItem('readNotification', JSON.stringify([notificationId]));
    }
    if (this.notificationArray) {
      let countUnread = this.notificationArray.filter((x) => { return !x.IsRead }).length;
      this.notify.unReadCount.next(countUnread);
    }
  }

  back() {
    this.navCtrl.back();
  }

}
