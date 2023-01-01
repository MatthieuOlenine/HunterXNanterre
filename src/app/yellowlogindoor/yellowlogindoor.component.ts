import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from '../services/backendservice.service';
import { SubscribedataService } from '../services/subscribedata.service';

@Component({
  selector: 'app-yellowlogindoor',
  templateUrl: './yellowlogindoor.component.html',
  styleUrls: ['./yellowlogindoor.component.css']
})
export class YellowLoginDoor73202Component implements OnInit {

  public searchTermname : string = '';
  public searchTermpsswrd : string = '';
  public color : string = 'yellow'
  public verif : any = {};
  isLoading = false;
  constructor(private router: Router, private serv: BackendserviceService, private sub : SubscribedataService) { }

  ngOnInit(): void {
  }

  async login(){
    this.isLoading = true;
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
