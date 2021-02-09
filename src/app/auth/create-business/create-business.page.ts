import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from '../../global/common_service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-business',
  templateUrl: './create-business.page.html',
  styleUrls: ['./create-business.page.scss'],
})

export class CreateBusinessPage implements OnInit {
  
  CreateBusinessForm: FormGroup;  
  BusinessCategory : any = [];
  emailvalue = 0;

  constructor(public formBuilder: FormBuilder,
    private router: Router,
    private api: CommonService,
    private statusBar: StatusBar,
    public apiService: ApiService,
    ) {
      this.info_fb();
      this.Optionlist()
    }

  ngOnInit() {}

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFF');
  }

  Optionlist() {
    this.api.Get("common/OptionValue").subscribe(data => {
      if(data['status'] == 1)
      {
        this.BusinessCategory = data['data'].businessCategory;
      }
    },
    );
  }

  info_fb() {
    this.CreateBusinessForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: [null, Validators.compose([
        Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.required
      ])],
      businessname: ['', Validators.required],
      businesstype: ['', Validators.required]
    });
  }

  fnHome() {
    for (let v in this.CreateBusinessForm.controls) {
      this.CreateBusinessForm.controls[v].markAsTouched();
    }
    if (this.CreateBusinessForm.valid) {
      this.api.presentLoading();
      
      var body = {
        name: this.CreateBusinessForm.value.name,
        email: this.CreateBusinessForm.value.email,
        business_name: this.CreateBusinessForm.value.businessname,
        business_type: this.CreateBusinessForm.value.businesstype,

      };
      this.api.Post("Authentication/createBusiness/",body).subscribe(business => {
        
        if(business['status'] == 1) {
          
          localStorage.setItem("businessId",business['business_unique_id']);

          if(business["data"] != null && business["data"] != ""){
            let bussiness = JSON.stringify(business["data"]);
            localStorage.setItem('ActiveBusiness', bussiness);

            let userInfo = JSON.stringify(business["userInfo"]);
            localStorage.setItem('ActiveUser', userInfo);
          }
          this.apiService.allApi(true).subscribe(res => {
            if(res['status'] == 1){
              this.api.dismissLoading();
              this.api.presentToastWithOptions(business['message']);
              this.router.navigate(['/invoice-list']);    
            }else{
              this.api.presentToastWithOptions(business['message']);
              this.api.dismissLoading();
            }
          });
        }
        else if (business['status'] == 0 && business['email']){
          if (business['email']) {
            this.CreateBusinessForm.controls['email'].setErrors({ 'incorrect': true });
            this.CreateBusinessForm.controls['email'].markAsTouched();
          } else {
            this.CreateBusinessForm.controls['email'].setErrors({ 'incorrect': true });
            this.CreateBusinessForm.controls['email'].markAsTouched();
          } 
          this.api.dismissLoading();  
        }else{
          this.api.presentToastWithOptions(business['message']);
          this.api.dismissLoading();
        }
      },
        err => {
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        }
      )
    }
  }
}
