import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gstcalculation',
  templateUrl: './gstcalculation.page.html',
  styleUrls: ['./gstcalculation.page.scss'],
})
export class GstcalculationPage implements OnInit {
  orignal_amount: any;
  tax: any;
  gst: any;
  total_amount: any;
  invoice_orignal_amount: any;
  invoice_total_amount: any;

  constructor() { }

  ngOnInit() {
  }

  loadAmount(event , value){
    if(value == 'amount'){
      this.orignal_amount = event.detail.value
    }
    if(value == 'tax'){
      this.tax = event.detail.value
    }
    this.gst =  Number((this.orignal_amount) * (this.tax) / 100);
    this.total_amount = this.gst ? (Number(this.orignal_amount) + this.gst).toFixed(2) : this.orignal_amount
    this.invoice_orignal_amount = this.gst ? (Number(this.orignal_amount) - this.gst).toFixed(2) : this.orignal_amount
    
  }

}
