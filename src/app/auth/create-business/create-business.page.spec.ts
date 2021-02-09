import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateBusinessPage } from './create-business.page';

describe('BusinessInfoPage', () => {
  let component: CreateBusinessPage;
  let fixture: ComponentFixture<CreateBusinessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBusinessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateBusinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
