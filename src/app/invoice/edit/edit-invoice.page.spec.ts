import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditInvoicePage } from './edit-invoice.page';

describe('EditInvoicePage', () => {
  let component: EditInvoicePage;
  let fixture: ComponentFixture<EditInvoicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInvoicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditInvoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
