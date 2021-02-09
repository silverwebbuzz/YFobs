import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecurringPage } from './recurring.page';

describe('RecurringPage', () => {
  let component: RecurringPage;
  let fixture: ComponentFixture<RecurringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecurringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecurringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
