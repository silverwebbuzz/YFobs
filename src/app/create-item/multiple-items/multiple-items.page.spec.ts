import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MultipleItemsPage } from './multiple-items.page';

describe('MultipleItemsPage', () => {
  let component: MultipleItemsPage;
  let fixture: ComponentFixture<MultipleItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleItemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MultipleItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
