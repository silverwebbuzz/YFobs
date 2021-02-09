import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreviewInvoicePage } from './preview-invoice.page';

describe('PreviewInvoicePage', () => {
  let component: PreviewInvoicePage;
  let fixture: ComponentFixture<PreviewInvoicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewInvoicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreviewInvoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
