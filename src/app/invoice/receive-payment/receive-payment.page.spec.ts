import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReceivePaymentPage } from './receive-payment.page';

describe('ReceivePaymentPage', () => {
  let component: ReceivePaymentPage;
  let fixture: ComponentFixture<ReceivePaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivePaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReceivePaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
