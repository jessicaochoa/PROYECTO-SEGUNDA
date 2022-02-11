import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavschoologyModule} from "./navschoology/navschoology.module";
import {MailModule} from "./navschoology/mail/mail.module";
import {NotificationModule} from "./navschoology/notification/notification.module";
import {MenuschoologyModule} from "./menuschoology/menuschoology.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavschoologyModule,
    MailModule,
    NotificationModule,
    MenuschoologyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
