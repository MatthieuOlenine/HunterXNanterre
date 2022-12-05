import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerdeskComponent } from './managerdesk/managerdesk.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FormsModule } from '@angular/forms';
import { NomathsequenceComponent } from './nomathsequence/nomathsequence.component';
import { FalsecompasswayComponent } from './falsecompassway/falsecompassway.component';
import { Qrcode1Component } from './qrcode1/qrcode1.component';
import { Qrcode2Component } from './qrcode2/qrcode2.component';
import { Qrcode3Component } from './qrcode3/qrcode3.component';
import { Qrcode4Component } from './qrcode4/qrcode4.component';
import { LostsignalComponent } from './lostsignal/lostsignal.component';
import { AstrosolarsystemeComponent } from './astrosolarsysteme/astrosolarsysteme.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerdeskComponent,
    MainpageComponent,
    NomathsequenceComponent,
    FalsecompasswayComponent,
    Qrcode1Component,
    Qrcode2Component,
    Qrcode3Component,
    Qrcode4Component,
    LostsignalComponent,
    AstrosolarsystemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
