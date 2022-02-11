import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentactivityComponent } from './recentactivity/recentactivity.component';
import { CoursedashboardComponent } from './coursedashboard/coursedashboard.component';
import { MenuschoologyComponent } from './menuschoology.component';
import { LateComponent } from './late/late.component';
import { RemindersComponent } from './reminders/reminders.component';
import { UpcomingactivitiesComponent } from './upcomingactivities/upcomingactivities.component';



@NgModule({
  declarations: [
    RecentactivityComponent,
    CoursedashboardComponent,
    MenuschoologyComponent,
    LateComponent,
    RemindersComponent,
    UpcomingactivitiesComponent
  ],
  exports: [
    MenuschoologyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MenuschoologyModule { }
