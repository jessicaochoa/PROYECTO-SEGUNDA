import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaveschoologyComponent } from './naveschoology.component';

describe('NaveschoologyComponent', () => {
  let component: NaveschoologyComponent;
  let fixture: ComponentFixture<NaveschoologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaveschoologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaveschoologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
