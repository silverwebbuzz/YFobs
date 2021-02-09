import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NumberOnlyService } from '../../../Services/number-only.service';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController, Platform, ModalController } from '@ionic/angular';
import { CommonService } from '../../global/common_service';
import { ApiService } from 'src/app/services/api.service';
import { timeout } from 'rxjs/operators';

// declare var SMSReceive: any;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  SignInForm: FormGroup;
  attemptRemaining : any;
  
  constructor(
    public formBuilder: FormBuilder,
    public numberonly: NumberOnlyService,
    private router: Router,
    private api: CommonService,
    public apiService: ApiService,
    private statusBar: StatusBar,
    ) {
      this.signin_fb();
    }
 
  ionViewWillEnter() {
    // this.getSimData();
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFF');
  }

  ngOnInit() {}

  signin_fb() {
    this.SignInForm = this.formBuilder.group({
      phone: ['', Validators.required],
    });
  }
  
  async fnSignin()
  {
    for (let v in this.SignInForm.controls) {
      this.SignInForm.controls[v].markAsTouched();
    }
    if (this.SignInForm.valid) {
      this.api.presentLoading();
      var body = { phone: this.SignInForm.value.phone};
      this.attemptRemaining = await this.sendOtp(body);
      this.api.dismissLoading();
      this.router.navigate(['/otp'], { queryParams: { phone: this.SignInForm.value.phone,attemptRemaining: this.attemptRemaining } })
    }
  }

  async sendOtp(body)
  {
    return new Promise((resolve,reject)=> {
        this.api.sendOtp(body).pipe(timeout(this.api.API_TIMEOUT)).subscribe(data => {
          if (data['status'] == 1) {
            resolve(data['attemptRemaining']);
          }else{
            this.api.dismissLoading();
            this.api.presentToastWithOptions(data['message']);
          }
        },err => {
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        });
    })
  }

  // async getSimData() {
  //   let simPermission = await this.sim.requestReadPermission();
  //   if (simPermission == "OK") {
  //     let simData = await this.sim.getSimInfo();
  //     if (simData.cards[0].phoneNumber.length == 12) {
  //       var str_getMOBILE = simData.cards[0].phoneNumber.substring(2);
  //     }
  //     else {
  //       var str_getMOBILE = simData.cards[0].phoneNumber
  //     }
  //     this.SignInForm.patchValue({
  //       phone: str_getMOBILE,
  //     });
  //   }
  // }

}
