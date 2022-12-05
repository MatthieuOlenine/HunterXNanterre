import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstrosolarsystemeComponent } from './astrosolarsysteme/astrosolarsysteme.component';
import { FalsecompasswayComponent } from './falsecompassway/falsecompassway.component';
import { LostsignalComponent } from './lostsignal/lostsignal.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ManagerdeskComponent } from './managerdesk/managerdesk.component';
import { NomathsequenceComponent } from './nomathsequence/nomathsequence.component';
import { Qrcode1Component } from './qrcode1/qrcode1.component';
import { Qrcode2Component } from './qrcode2/qrcode2.component';
import { Qrcode3Component } from './qrcode3/qrcode3.component';
import { Qrcode4Component } from './qrcode4/qrcode4.component';

const routes: Routes = [
  {path: 'mainpage', component: MainpageComponent},
  {path: 'managerdesk', component: ManagerdeskComponent},
  {path: 'nomathsequence', component: NomathsequenceComponent},
  {path: 'falsecompassway', component: FalsecompasswayComponent},
  {path: 'lostsignal', component: LostsignalComponent},
  {path: 'astrosolarsysteme', component: AstrosolarsystemeComponent},
  {path: 'qrcode1', component: Qrcode1Component},
  {path: 'qrcode2', component: Qrcode2Component},
  {path: 'qrcode3', component: Qrcode3Component},
  {path: 'qrcode4', component: Qrcode4Component},
  {path: '', redirectTo: 'mainpage', pathMatch: 'full'},
  {path: '**', component: MainpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
