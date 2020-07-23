import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FAQPage } from './faq.page';

describe('FAQPage', () => {
  let component: FAQPage;
  let fixture: ComponentFixture<FAQPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FAQPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FAQPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
