import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, Platform, NavController } from '@ionic/angular';
import { CommonService } from 'src/app/global/common_service';
import { ApiService } from 'src/app/services/api.service';
import { timeout } from 'rxjs/operators';

// declare var SMSReceive: any;

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  OtpForm: FormGroup;
  isOtp = 0;
  phone : number;
  OTP: string = '';
  attemptRemaining : any;
  sendStatus : boolean = false;
  str_getmobile: any;
  string_getMOBILE: any;
  counttime: number = 0;
  verify: string;

  constructor(
    private modalCtrl: ModalController,
    public formBuilder: FormBuilder,
    private router: Router,
    private api: CommonService,
    public apiService: ApiService,
    private plt: Platform,
    private route : ActivatedRoute,
    private navCtrl: NavController,
    ) {
      this.otp_fb();
     }

  ngOnInit() {
    this.phone =  this.route.snapshot.queryParams.phone
   this.str_getmobile = this.route.snapshot.queryParams.phone.slice(0, -7);
    var str_getMOBILE = this.route.snapshot.queryParams.phone.slice(0, -4);
    this.string_getMOBILE = str_getMOBILE.substring(3);
    this.attemptRemaining =  this.route.snapshot.queryParams.attemptRemaining;
    
    this.str_getmobile = this.route.snapshot.queryParams.phone.slice(0, -7);
    var str_getMOBILE = this.route.snapshot.queryParams.phone.slice(0, -4);
    this.string_getMOBILE = str_getMOBILE.substring(3);
  }

  handleEvent(event){
    if(event.action == 'done'){
    this.counttime = 1
    }
    }

  otp_fb() {
    this.OtpForm = this.formBuilder.group({
      otp: ['', Validators.required],
    });
  }
  
  // start() {
  //   SMSReceive.startWatch(
  //     () => {
  //       document.addEventListener('onSMSArrive', (e: any) => {
  //         var IncomingSMS = e.data;
  //         this.processSMS(IncomingSMS);
  //       });
  //     },
  //     () => { console.log('watch start failed') }
  //   )
  // }

  // stop() {
  //   SMSReceive.stopWatch(
  //     () => { /* stop Success */ },
  //     () => { /* stop faild */ }
  //   )
  // } 
  // processSMS(data) {
  //   if(data.body){
  //     this.OTP = data.body.split(':')[1].replace(/[\s]/g, '');
  //     this.OtpForm.patchValue({
  //       otp: this.OTP
  //     });
  //     this.stop();
  //   }
  // }

  async isVerifyOtp() {
    for (let v in this.OtpForm.controls) {
      this.OtpForm.controls[v].markAsTouched();
    }
    if (this.OtpForm.valid) {
      this.api.presentLoading();
      var body = {
        phone: this.phone,
        otp: this.OtpForm.value.otp,
        device_token: localStorage.getItem('notification_id')
      };
      this.api.signin(body).pipe(timeout(this.api.API_TIMEOUT)).subscribe(user => {
        if (user['status'] == 1) {
          localStorage.setItem("token",user['token']); 
          localStorage.setItem("user_id", user["data"]["userInfo"].id);
          localStorage.setItem("ActiveUser",JSON.stringify(user["data"]["userInfo"]));
          if (user['verified'] == 0) {
            this.api.dismissLoading();
            this.router.navigate(['/create-business']);
          }
          if (user['verified'] == 1) {
            localStorage.setItem("businessId",user["data"]["business_unique_id"]);
            if(user["data"]["business"] != null && user["data"]["business"] != ""){
              let bussiness = JSON.stringify(user["data"]["business"]);
              localStorage.setItem('ActiveBusiness', bussiness);
            }
            this.apiService.allApi(true).subscribe(res => {
              if(res['status'] == 1){
                this.api.presentToastWithOptions(user['message']);
                this.api.dismissLoading();
                localStorage.setItem("verify",'1')
                this.router.navigate(['/dashboard']);    
              }else{
                this.api.presentToastWithOptions(user['message']);
                this.api.dismissLoading();
              }
            });
          }
        }
        else {
          if(user['message'] == 'Mobile number verification failed'){
            this.api.dismissLoading();
            this.isOtp = 1
          }
          else{
            this.api.dismissLoading();
            this.api.presentToastWithOptions(user['message']);
          }
        }
      },
        err => {
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        }
      )
    }
  }
  
  resendOtp() {
    this.counttime = 0;
    var body = { phone: this.phone};
    this.sendStatus = true;
    this.api.sendOtp(body).pipe(timeout(this.api.API_TIMEOUT)).subscribe(data => {
      if (data['status'] == 1) {
        this.attemptRemaining = data['attemptRemaining']
        this.sendStatus = false;
        if(this.attemptRemaining >= 0)
        {
          return true;
        }else{
          this.navCtrl.navigateBack(['/signin']);
        }
      }else{
        this.navCtrl.navigateBack(['/signin']);
      }
    });
  }
  
  back() {
    this.navCtrl.navigateBack(['/signin']);
  }

}