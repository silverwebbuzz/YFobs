import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GstcalculationPage } from './gstcalculation.page';

describe('GstcalculationPage', () => {
  let component: GstcalculationPage;
  let fixture: ComponentFixture<GstcalculationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstcalculationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GstcalculationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
