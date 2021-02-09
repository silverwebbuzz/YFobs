import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-gstall',
  templateUrl: './gstall.page.html',
  styleUrls: ['./gstall.page.scss'],
})
export class GstallPage implements OnInit {

  
  @Input() allReports: any [];
  gstAllReports : any = [];
  grossTotal : any = [];

  constructor(
    private navCtrl: NavController,
    private statusBar: StatusBar,
    ) { }

  ngOnInit() {
    this.gstAllReports = this.allReports['reports'];
    this.grossTotal = this.allReports['grossTotal'];
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFF');
  }

  goBack() {
    this.navCtrl.back();
  }

}
