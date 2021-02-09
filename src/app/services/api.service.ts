import { OfflineManagerService } from './offline-manager.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NetworkService, ConnectionStatus } from './network.service';
import { Storage } from '@ionic/storage';
import { Observable, from } from 'rxjs';
import { tap, map, catchError } from "rxjs/operators";
import { environment } from '../../environments/environment';
import { CommonService } from '../global/common_service';
import { Router } from '@angular/router';
 
const API_STORAGE_KEY = 'specialkey';

 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private router: Router,private http: HttpClient, private networkService: NetworkService, private storage: Storage, private offlineManager: OfflineManagerService,private api: CommonService) { }
 
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
  
  getToken() {
    return localStorage.getItem('token') ? localStorage.getItem('token') : null;
  };
  
  /* Get PackageLimit List */
  getPackageLimit(forceRefresh: boolean = false){
      if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline || !forceRefresh) {
        return from(this.getLocalData("PackageLimit"));
      }else{
        let body = { businessId: this.api.getBusinessId() }
        return this.http.post(environment.base_url + "common/packageLimit",body,this.getHttp_Header()).pipe(
          map(res => res),
          tap(res => {
            this.setLocalData('PackageLimit', res);
          })
        )
      }
  }

  /* Get all Common Api */
  allApi(forceRefresh: boolean = false){
    if(this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline || !forceRefresh) {
      return from(this.getLocalData("allApi"));
    }else{
      let body = {
        businessId: this.api.getBusinessId(),
        businessRowId : this.api.getBusinessDetails().id
      }
      return this.http.post(environment.base_url + "common/allApi",body,this.getHttp_Header()).pipe(
        map(res => res),
        tap(res => {
            this.setLocalData('allApi', res);
        })
      )
    }
  }
  
  /* Get All Invoice List */
  getInvoice(forceRefresh: boolean = false){
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline || !forceRefresh) {
      return from(this.getLocalData("InvoiceList"));
    }else{
      let body = { businessId: this.api.getBusinessId() }
      return this.http.post(environment.base_url + "invoice/list",body,this.getHttp_Header()).pipe(
        map(res => res),
        tap(res => {
          this.setLocalData('InvoiceList', res);
        })
      )
    }
  }
  
  /* Get Edit Invoice Data */
  getEditInvoice(InvoiceId,forceRefresh: boolean = false){
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline || !forceRefresh) {
      //return from(this.getLocalData("InvoiceList"));
    }else{
      let body = { businessId: this.api.getBusinessId(),business_state_id: this.api.getBusinessDetails().state_id }
      return this.http.post(environment.base_url + "invoice/invoiceEdit/" + InvoiceId,body,this.getHttp_Header()).pipe(
        map(res => res),
        tap(res => {
          //this.setLocalData('InvoiceList', res);
        })
      )
    }
  }

  /* Get All Expense List */
  getExpense(forceRefresh: boolean = false){
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline || !forceRefresh) {
      return from(this.getLocalData("ExpenseList"));
    }else{
      let body = { businessId: this.api.getBusinessId() }
      return this.http.post(environment.base_url + "expense/list",body,this.getHttp_Header()).pipe(
        map(res => res),
        tap(res => {
          this.setLocalData('ExpenseList', res);
        })
      )
    }
  }

   /* Get All Expense List */
   getVendor(forceRefresh: boolean = false){
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline || !forceRefresh) {
      return from(this.getLocalData("VendorList"));
    }else{
      let body = { businessId: this.api.getBusinessId() }
      return this.http.post(environment.base_url + "Vendor/list",body,this.getHttp_Header()).pipe(
        map(res => res),
        tap(res => {
          this.setLocalData('VendorList', res);
        })
      )
    }
  }


  /* Get GST Reports List */
  getGstReports(forceRefresh: boolean = false){
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline || !forceRefresh) {
      return from(this.getLocalData("GstReportList"));
    }else{
      let body = { businessId: this.api.getBusinessId(),report_types:4 }
      return this.http.post(environment.base_url + "reports/generate",body,this.getHttp_Header()).pipe(
        map(res => res),
        tap(res => {
          this.setLocalData('GstReportList', res);
        })
      )
    }
  }

  getExpenseReports(forceRefresh: boolean = false){
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline || !forceRefresh) {
      return from(this.getLocalData("GstReportList"));
    }else{
      let body = { businessId: this.api.getBusinessId(),report_types:3 }
      return this.http.post(environment.base_url + "reports/generate",body,this.getHttp_Header()).pipe(
        map(res => res),
        tap(res => {
          this.setLocalData('GstReportList', res);
        })
      )
    }
  }
 
  /* Get Active Business Details */
  getBusinessDetails(forceRefresh: boolean = false){
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline || !forceRefresh) {
      return from(this.getLocalData("ActiveBusinessDetails"));
    }else{
      let body = { businessRowId : this.api.getBusinessDetails().id }
      return this.http.post(environment.base_url + "common/getBusinessDetails",body,this.getHttp_Header()).pipe(
        map(res => res),
        tap(res => {
          this.setLocalData('ActiveBusinessDetails', res);
        })
      )
    }
  }


  /* Get All Product */
  getProduct(forceRefresh: boolean = false){
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline || !forceRefresh) {
      return from(this.getLocalData("ProductList"));
    }else{
      let body = { businessId: this.api.getBusinessId() }
      return this.http.post(environment.base_url + "common/getProduct",body,this.getHttp_Header()).pipe(
        map(res => res),
        tap(res => {
          this.setLocalData('ProductList', res);
        })
      )
    }
  }

  /* Get All Product */
  getCustomer(forceRefresh: boolean = false){
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline || !forceRefresh) {
      return from(this.getLocalData("CustomerList"));
    }else{
      let body = { businessId: this.api.getBusinessId() }
      return this.http.post(environment.base_url + "common/getCustomer",body,this.getHttp_Header()).pipe(
        map(res => res),
        tap(res => {
          this.setLocalData('CustomerList', res);
        })
      )
    }
  }

  
  /* Get All Product */
  getDashboardData(forceRefresh: boolean = false){
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline || !forceRefresh) {
      return from(this.getLocalData("DashboardData"));
    }else{
      let body = { businessId: this.api.getBusinessId() }
      return this.http.post(environment.base_url + "common/getDashboardData",body,this.getHttp_Header()).pipe(
        map(res => res),
        tap(res => {
          this.setLocalData('DashboardData', res);
        })
      )
    }
  }

  
  /* Update Active Business Details */
  updateBusiness(businessUrl, data): Observable<any> {
    let url = `${environment.base_url}${businessUrl}`;
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
      return from(this.offlineManager.storeRequest(url, 'POST', data));
    } else {
      return this.http.post(url, data).pipe(
        catchError(err => {
          //this.offlineManager.storeRequest(url, 'POST', data);
          throw new Error(err);
        })
      );
    }
  }
  
  updateUser(user, data): Observable<any> {
    let url = `${environment.base_url}/users/${user}`;
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
      return from(this.offlineManager.storeRequest(url, 'PUT', data));
    } else {
      return this.http.put(url, data).pipe(
        catchError(err => {
          this.offlineManager.storeRequest(url, 'PUT', data);
          throw new Error(err);
        })
      );
    }
  }
 
  // Save result of API requests
  private setLocalData(key, data) {
    this.storage.set(`${API_STORAGE_KEY}-${key}`, data);
  }
 
  // Get cached API result
  public getLocalData(key) {
    return this.storage.get(`${API_STORAGE_KEY}-${key}`);
  }
}