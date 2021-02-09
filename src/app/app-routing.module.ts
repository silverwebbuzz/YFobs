import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './global/authguard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/invoice-list',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    loadChildren: () => import('./auth/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'create-business',canActivate:[AuthguardGuard],
    loadChildren: () => import('./auth/create-business/create-business.module').then( m => m.CreateBusinessPageModule)
  },
  {
    path: 'invoice-list',
    loadChildren: () => import('./invoice/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'create-invoice',canActivate:[AuthguardGuard],
    loadChildren: () => import('./invoice/add/create-invoice.module').then( m => m.CreateInvoicePageModule)
  },
  {
    path: 'edit-invoice',canActivate:[AuthguardGuard],
    loadChildren: () => import('./invoice/edit/edit-invoice.module').then( m => m.EditInvoicePageModule)
  },
  {
    path: 'invoice-options',
    loadChildren: () => import('./invoice/invoice-options/invoice-options.module').then( m => m.InvoiceOptionsPageModule)
  },
  {
    path: 'preview-invoice',canActivate:[AuthguardGuard],
    loadChildren: () => import('./invoice/preview/preview-invoice.module').then( m => m.PreviewInvoicePageModule)
  },
  {
    path: 'invoice-view',
    loadChildren: () => import('./invoice/view/invoice-view.module').then( m => m.InvoiceViewPageModule)
  },
  {
    path: 'receive-payment',canActivate:[AuthguardGuard],
    loadChildren: () => import('./invoice/receive-payment/receive-payment.module').then( m => m.ReceivePaymentPageModule)
  },
  {
    path: 'payment-history',
    loadChildren: () => import('./invoice/payment-history/payment-history.module').then( m => m.PaymentHistoryPageModule)
  },
  {
    path: 'create-customer',canActivate:[AuthguardGuard],
    loadChildren: () => import('./create-customer/create-customer.module').then( m => m.CreateCustomerPageModule)
  },
  {
    path: 'create-item',canActivate:[AuthguardGuard],
    loadChildren: () => import('./create-item/create-item.module').then( m => m.CreateItemPageModule)
  },
  {
    path: 'business-info-update',canActivate:[AuthguardGuard],
    loadChildren: () => import('./business-info-update/business-info-update.module').then( m => m.BusinessInfoUpdatePageModule)
  },
  {
    path: 'expense-list',
    loadChildren: () => import('./expense/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'signature-pad',canActivate:[AuthguardGuard],
    loadChildren: () => import('./signature-pad/signature-pad.module').then( m => m.SignaturePadPageModule)
  },
  {
    path: 'dashboard',canActivate:[AuthguardGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'customers-list',
    loadChildren: () => import('./customers/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'products-list',
    loadChildren: () => import('./products/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'customers-add',
    loadChildren: () => import('./customers/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'customers-edit',
    loadChildren: () => import('./customers/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'expense-add',
    loadChildren: () => import('./expense/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'expense-edit',
    loadChildren: () => import('./expense/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'products-add',
    loadChildren: () => import('./products/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'products-edit',
    loadChildren: () => import('./products/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./auth/otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'notification-bell',
    loadChildren: () => import('./notification-bell/notification-bell.module').then( m => m.NotificationBellPageModule)
  },
  {
    path: 'recurring',
    loadChildren: () => import('./invoice/recurring/recurring.module').then( m => m.RecurringPageModule)
  },
  {
    path: 'gstcalculation',
    loadChildren: () => import('./gstcalculation/gstcalculation.module').then( m => m.GstcalculationPageModule)
  },
  {
    path: 'vendors-list',
    loadChildren: () => import('./vendors/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'vendors-add',
    loadChildren: () => import('./vendors/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'vendors-edit',
    loadChildren: () => import('./vendors/edit/edit.module').then( m => m.EditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
