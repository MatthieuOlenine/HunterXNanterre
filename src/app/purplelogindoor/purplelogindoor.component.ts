import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from '../services/backendservice.service';
import { SubscribedataService } from '../services/subscribedata.service';

@Component({
  selector: 'app-purplelogindoor',
  templateUrl: './purplelogindoor.component.html',
  styleUrls: ['./purplelogindoor.component.css']
})
export class PurpleLoginDoor01231Component implements OnInit {

  public searchTermname : string = '';
  public searchTermpsswrd : string = '';
  public color : string = 'purple'
  public verif : any = {};
  isLoading = false;
  constructor(private router: Router, private serv: BackendserviceService, private sub : SubscribedataService) { }

  ngOnInit(): void {
  }

  async login(){
    this.isLoading = true;
    this.searchTermname = this.searchTermname.toLowerCase();
    this.searchTermpsswrd = this.searchTermpsswrd.toLowerCase();
    this.searchTermname = this.searchTermname.replace(/\s+/g, '');
    this.searchTermpsswrd = this.searchTermpsswrd.replace(/\s+/g, '');
    this.serv.login(this.searchTermname, this.searchTermpsswrd).subscribe(name => this.verif = name);
    await new Promise(resolve => setTimeout(resolve, 500));
    if(this.verif['teamname'] == this.searchTermname){
      this.serv.logincolor(this.searchTermname, this.searchTermpsswrd, this.color).subscribe();
      await new Promise(resolve => setTimeout(resolve, 500));
      this.router.navigateByUrl(`hunterboard`);
      this.sub.setdata(this.searchTermname);
    };
    this.isLoading = false;
  }


}
