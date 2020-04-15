import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePizzaPage } from './home-pizza.page';

describe('HomePizzaPage', () => {
  let component: HomePizzaPage;
  let fixture: ComponentFixture<HomePizzaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePizzaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePizzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
