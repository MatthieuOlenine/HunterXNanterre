import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstrosolarsystemeComponent } from './astrosolarsysteme/astrosolarsysteme.component';
import { FalsecompasswayComponent } from './falsecompassway/falsecompassway.component';
import { HunterboardComponent } from './hunterboard/hunterboard.component';
import { HunterdetailsComponent } from './hunterdetails/hunterdetails.component';
import { HunterloginpageComponent } from './hunterloginpage/hunterloginpage.component';
import { LastsceneComponent } from './lastscene/lastscene.component';
import { LostsignalComponent } from './lostsignal/lostsignal.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ManagerdeskComponent } from './managerdesk/managerdesk.component';
import { NomathsequenceComponent } from './nomathsequence/nomathsequence.component';
import { RedLoginDoor98456Component } from './redlogindoor/redlogindoor.component';
import { BlueLoginDoor21980Component } from './bluelogindoor/bluelogindoor.component';
import { PurpleLoginDoor01231Component } from './purplelogindoor/purplelogindoor.component';
import { YellowLoginDoor73202Component } from './yellowlogindoor/yellowlogindoor.component';

const routes: Routes = [
  {path: 'mainpage', component: MainpageComponent},
  {path: 'managerdesk', component: ManagerdeskComponent},
  {path: 'hunterdetails', component: HunterdetailsComponent},
  {path: 'hunterloginpage', component: HunterloginpageComponent},
  {path: 'hunterboard', component: HunterboardComponent},
  {path: 'nomathsequence', component: NomathsequenceComponent},
  {path: 'falsecompassway', component: FalsecompasswayComponent},
  {path: 'lostsignal', component: LostsignalComponent},
  {path: 'astrosolarsysteme', component: AstrosolarsystemeComponent},
  {path: 'lastscene', component: LastsceneComponent},
  {path: 'redlogindoor98456', component: RedLoginDoor98456Component},
  {path: 'bluelogindoor21980', component: BlueLoginDoor21980Component},
  {path: 'purplelogindoor01231', component: PurpleLoginDoor01231Component},
  {path: 'yellowlogindoor73202', component: YellowLoginDoor73202Component},
  {path: '', redirectTo: 'hunterloginpage', pathMatch: 'full'},
  {path: '**', component: HunterloginpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
