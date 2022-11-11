import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicTipsComponent } from './organic-tips.component';

describe('OrganicTipsComponent', () => {
  let component: OrganicTipsComponent;
  let fixture: ComponentFixture<OrganicTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganicTipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganicTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
