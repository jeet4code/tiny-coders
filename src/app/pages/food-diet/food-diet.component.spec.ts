import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDietComponent } from './food-diet.component';

describe('FoodDietComponent', () => {
  let component: FoodDietComponent;
  let fixture: ComponentFixture<FoodDietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodDietComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
