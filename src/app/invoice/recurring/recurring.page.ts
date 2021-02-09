import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, Platform, NavController } from '@ionic/angular';
import { timeout } from 'rxjs/operators';
import { CommonService } from 'src/app/global/common_service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-recurring',
  templateUrl: './recurring.page.html',
  styleUrls: ['./recurring.page.scss'],
})
export class RecurringPage implements OnInit {

  Recuring: FormGroup;
  date: string;
  constructor(
    public formBuilder: FormBuilder,
    private api: CommonService,
    private route: ActivatedRoute,
    public apiService: ApiService,
    private plt: Platform,
    private router: Router,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    ) {
    this.recuring_fb()
    this.Recuring.patchValue({
      start_date: new Date().toISOString(),
    })
    this.date = new Date().toISOString()
  }

  ngOnInit() {
  }

  recuring_fb() {
    this.Recuring = this.formBuilder.group({
      start_date: ['', Validators.required],
      recuring_method: ['', Validators.required],
      end_date: ['', Validators.required],
    });
  }

  submit() {
    for (let v in this.Recuring.controls) {
      this.Recuring.controls[v].markAsTouched();
    }
    if (this.Recuring.valid) {
      this.api.presentLoading();
      var body = {
        recurring_start: this.Recuring.value.start_date,
        frequency: this.Recuring.value.recuring_method,
        recurring_end: this.Recuring.value.end_date,
        id: this.route.snapshot.queryParams.InvoiceId
      };
      this.api.Post("invoice/setRecurring", body).subscribe(data => {
        if (data.status == 1) {
          this.api.presentToastWithOptions(data['message']);
          this.router.navigate(['/invoice-list']);
        }
        else{
          this.api.presentToastWithOptions(data['message']);
        }
        this.api.dismissLoading();
      }, err => {
        this.api.dismissLoading();
        this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
      })
    }
  }

  modalClose() {
    this.navCtrl.back();
  }
}
