import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingactivitiesComponent } from './upcomingactivities.component';

describe('UpcomingactivitiesComponent', () => {
  let component: UpcomingactivitiesComponent;
  let fixture: ComponentFixture<UpcomingactivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingactivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
