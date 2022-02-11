import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MailModule} from "./mail/mail.module";
import {NotificationModule} from "./notification/notification.module";
import { NaveschoologyComponent } from './naveschoology/naveschoology.component';



@NgModule({
  declarations: [
    NaveschoologyComponent
  ],
  exports: [
    NaveschoologyComponent

  ],
    imports: [
        CommonModule,
        MailModule,
        NotificationModule
    ]
})
export class NavschoologyModule { }
