import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailComponent } from './mail.component';



@NgModule({
  declarations: [
    MailComponent
  ],
  exports: [
    MailComponent
  ],
  imports: [
    CommonModule

  ]
})
export class MailModule { }
