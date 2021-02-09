import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../global/common_service';
import { NotificationService } from '../global/notification.service';

@Component({
  selector: 'app-notification-bell',
  templateUrl: './notification-bell.page.html',
  styleUrls: ['./notification-bell.page.scss'],
})
export class NotificationBellPage implements OnInit {

  newNotify = false;
  
  constructor(private router: Router,private notify: NotificationService,private api: CommonService) { }

  ngOnInit() {
    this.notify.checkUnReadCount();
  }

  notification() {
    this.router.navigate(['/notifications']);
  }

  ionViewWillEnter() {
  }

}
