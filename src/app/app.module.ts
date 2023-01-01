import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerdeskComponent } from './managerdesk/managerdesk.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FormsModule } from '@angular/forms';
import { NomathsequenceComponent } from './nomathsequence/nomathsequence.component';
import { FalsecompasswayComponent } from './falsecompassway/falsecompassway.component';
import { RedLoginDoor98456Component } from './redlogindoor/redlogindoor.component';
import { BlueLoginDoor21980Component } from './bluelogindoor/bluelogindoor.component';
import { PurpleLoginDoor01231Component } from './purplelogindoor/purplelogindoor.component';
import { YellowLoginDoor73202Component } from './yellowlogindoor/yellowlogindoor.component';
import { LostsignalComponent } from './lostsignal/lostsignal.component';
import { AstrosolarsystemeComponent } from './astrosolarsysteme/astrosolarsysteme.component';
import { HunterboardComponent } from './hunterboard/hunterboard.component';
import { HunterloginpageComponent } from './hunterloginpage/hunterloginpage.component';
import { LastsceneComponent } from './lastscene/lastscene.component';
import { HttpClientModule } from '@angular/common/http';
import { HunterdetailsComponent } from './hunterdetails/hunterdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerdeskComponent,
    MainpageComponent,
    NomathsequenceComponent,
    FalsecompasswayComponent,
    RedLoginDoor98456Component,
    BlueLoginDoor21980Component,
    PurpleLoginDoor01231Component,
    YellowLoginDoor73202Component ,
    LostsignalComponent,
    AstrosolarsystemeComponent,
    HunterboardComponent,
    HunterloginpageComponent,
    LastsceneComponent,
    HunterdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
