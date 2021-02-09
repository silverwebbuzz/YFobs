import { Component,ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-signature-pad',
  templateUrl: './signature-pad.page.html',
  styleUrls: ['./signature-pad.page.scss'],
})
export class SignaturePadPage {
  signatureImage : any;
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
 
  private signaturePadOptions: Object = { 
    'minWidth': 3,
    'canvasWidth': 340,
    'canvasHeight': 300
  };
  constructor(private modelctrl : ModalController) { }

  drawComplete() {
    let canvas : any; 
   canvas = document.querySelector("canvas");
   var image = new Image();
   image.src = canvas.toDataURL("image/png");
   this.signatureImage = image.src;
  this.modelctrl.dismiss({data : this.signatureImage});
  }

  Cancel(){
    this.modelctrl.dismiss();
  }
  Modalclose(){
    this.modelctrl.dismiss();
  }
}
