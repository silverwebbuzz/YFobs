import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { CommonService } from './common_service';



@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notificationArray = new BehaviorSubject(null);
  notification = new BehaviorSubject(null);
  IsRead = false;
  unReadCount = new BehaviorSubject(0);
  constructor(private services: CommonService, private localnotification: LocalNotifications) {
    this.getNotification();
    this.notificationArray.subscribe(val =>{
      if(val){
        let countUnread = val.filter((x) =>{ return !x.IsRead}).length;
        this.unReadCount.next(countUnread);
        this.notification.next(val);
      } 
    })
   }
  
   
   async getNotification(){
    await this.services.Get("Notification/list").subscribe(val=>{
      let localStorage = JSON.parse(window.localStorage.getItem('readNotification'));
      let localStorageNotification = JSON.parse(window.localStorage.getItem('Notification'));
      let notificationArray = []; 
      
      if(notificationArray){
        this.localnotification.schedule(notificationArray);
      }
      if(notificationArray){
        this.localnotification.schedule(notificationArray);
      }
      if(val['data']){
        window.localStorage.setItem('Notification', JSON.stringify(val['data']));
        let valArray = val['data'].map(x => {  
          if(localStorage){
            if(localStorage.includes(x.id)){
              x.IsRead = true;
            }
          }else{
            x.IsRead = false;
          }
          return x;})
        this.notificationArray.next(valArray);
      }

    });
   }
   
   async checkUnReadCount()
   {
     this.getNotification();
     this.unReadCount.subscribe(val =>{
      if(val > 0){
        localStorage.setItem('newNotify', "true");
      }else if(val == 0){
        localStorage.setItem('newNotify', "false");
      }
    })
   }


   getNotificationStatus()
  {
    if(localStorage.getItem('newNotify') == "true")
    {
      return true;
    }else{
      return false;
    }
  }
}
