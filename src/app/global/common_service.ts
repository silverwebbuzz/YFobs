import { Injectable } from '@angular/core';
import { ToastController, LoadingController, ModalController,AlertController } from '@ionic/angular';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, forkJoin, Observable, throwError } from 'rxjs';


const BASE_URL = environment.base_url;
const imageUrl = environment.image_url;

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  isLoading = false;
  isModalOpen = false;
  token: string;
  invoice: any;
  invoicelist: any;
  response: any;
  residentialCategory: any;

  NetworkStatus = true;
  INDIA = 79;
  API_TIMEOUT = 15000;

  
  constructor(public toastCtrl: ToastController,
    public loadingController: LoadingController,
    private http: HttpClient,
    public modal: ModalController,
    private alertCtrl: AlertController,
    ) { 
     
    }

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
      } else {
      }
      return throwError(error.error);
    }

    async  showErrorToast(data: any) {
      const test = await this.toastCtrl.create({
        cssClass: 'err_pay',
        message: data,
        duration: 3000,
        position: 'top'
      });
  
      test.present();
    }

  async presentToastWithOptions(message?, cssClass?, position?) {
    const toast = await this.toastCtrl.create({
      message: message ? message : null,
      duration: 3000,
      position: position ? position : 'top',
      cssClass: cssClass ? cssClass : 'toast_',
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    toast.present();
  }

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Please wait...',
      translucent: true,
      cssClass: 'loader_'
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    });
  }

  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }

  async presentModal(PageName) {
    this.isModalOpen = true;
    return await this.modal.create({
      component: PageName,
    }).then(a => {
      a.present().then(() => {
        if (!this.isModalOpen) {
          a.dismiss();
        }
      })
    });
  }

  async dismissModal() {
    this.isModalOpen = false;
    return await this.modal.dismiss();
  }

  getUserId() {
    return localStorage.getItem('user_id') ? localStorage.getItem('user_id') : null;
  };

  getToken() {
    return localStorage.getItem('token') ? localStorage.getItem('token') : null;
  };

  getBusinessId()
  {
    return localStorage.getItem('businessId') ? localStorage.getItem('businessId') : null;
  }

  getBusinessDetails()
  {
    if(localStorage.getItem('ActiveBusiness') != null && localStorage.getItem('ActiveUser') != 'undefined'){
      var business = localStorage.getItem('ActiveBusiness');
      let ActiveBusiness = JSON.parse(business);
      return ActiveBusiness;
    }
  }

  getBusinessLogo()
  {
    var business = localStorage.getItem('ActiveBusiness');
    let ActiveBusiness = JSON.parse(business);
    if(ActiveBusiness && ActiveBusiness != null)
    {
      if(ActiveBusiness.logo != "" && ActiveBusiness.logo != null)
      {
        return  imageUrl + this.getBusinessDetails().logo; 
      }else{
        return '../assets/imgs/placeholder.png';
      }
    }
  }

  getFooterNote(){
    var business = localStorage.getItem('ActiveBusiness');
    let ActiveBusiness = JSON.parse(business);
    if(ActiveBusiness && ActiveBusiness != null)
    {
      if(ActiveBusiness.footer_note != "" && ActiveBusiness.footer_note != null)
      {
        return  ActiveBusiness.footer_note; 
      }else{
        return 'This is an electronically generated document, no signature is required';
      }
    }
  }


  
  getUserDetails()
  {
    if(localStorage.getItem('ActiveUser') != null && localStorage.getItem('ActiveUser') != 'undefined'){
      var user = localStorage.getItem('ActiveUser');
      let ActiveUser = JSON.parse(user);
      return ActiveUser;
    }
  }
 
  getHttp_Header() {
    var httpOptions;
    ( this.getToken()) ? httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.getToken(),
      })
    } : null;
    return httpOptions;
  };

  signin(body) {
    return this.http.post(environment.base_url + 'Authentication/login', body)
  }

  sendOtp(body) {
    return this.http.post(environment.base_url + 'Authentication/sendOtp', body)
  }

  Get(URL){
    return this.http.get(environment.base_url + URL,this.getHttp_Header());
  };

  GetArray(URL_array) {
    var ObservableBatch = [];
    URL_array.forEach((url) => {
      ObservableBatch.push(this.http.get(environment.base_url + url, this.getHttp_Header()));
    });
    return forkJoin(ObservableBatch);
  };

  Post(URL: any, body: any): Observable<any> {
    return this.http
    .post(BASE_URL + URL, body, this.getHttp_Header())
    .pipe(map(data => { return data; }), catchError(this.handleError))
  }

  Update(URL, body, id) {
    return this.http.put(BASE_URL + URL + id, body, this.getHttp_Header());
  };

  Delete(URL, id) {
    return this.http.delete(BASE_URL + URL + id,this.getHttp_Header());
  };
  
  async PackageLimitMessage(InvoiceTotal)
  {
    const alert = await this.alertCtrl.create({
      header: 'Warning !',
      message: 'You already created ' + InvoiceTotal + ' Invoices. Please upgrade your package to unlock the features..',
      buttons: [ 
        {
          text: 'Cancel',
          handler: () => {
          }
        },
        // {
        //   text: 'Upgrade your plan',
        //   handler: () => {
        //     console.log("Upgrade your plan");
        //   }
        // },
      ]
    });
    await alert.present();
  }

}