import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';
import { BackendserviceService } from '../services/backendservice.service';
import { SubscribedataService } from '../services/subscribedata.service';

@Component({
  selector: 'app-managerdesk',
  templateUrl: './managerdesk.component.html',
  styleUrls: ['./managerdesk.component.css']
})
export class ManagerdeskComponent implements OnInit {

  public data : any = [];
  public initdel : any = "";
  public initialtext : any = "";
  public footer : any = 1;
  public sorting : any = 0;
  public currentteam : any = {};
  public newteamname : any = "";
  isLoading = false;
  constructor(private router: Router, private serv : BackendserviceService, private sub : SubscribedataService) {}

  ngOnInit(): void {
    // Appel de la méthode getteamdata lorsque le composant est initialisé
    this.getdetails();
  }

  setfooter1(){
    this.footer = 1
  }

  setfooter2(){
    this.footer = 2
  }

  setfooter3(){
    this.footer = 3
  }

  setsortingtonull(){
    const container = document.getElementById('sorting');
    if (container) {
      const els = Array.from(container.children);
      for (const el of els) {
        el.classList.remove('chosen');
      }
    }
  }

  setsorting0(){
    this.sorting = 0;
    this.setsortingtonull();
    document.getElementById('all')?.classList.add("chosen");
  }

  setsorting1(){
    this.sorting = 1;
    this.setsortingtonull();
    document.getElementById('red')?.classList.add("chosen");
  }

  setsorting2(){
    this.sorting = 2;
    this.setsortingtonull();
    document.getElementById('blue')?.classList.add("chosen");
  }

  setsorting3(){
    this.sorting = 3;
    this.setsortingtonull();
    document.getElementById('purple')?.classList.add("chosen");
  }

  setsorting4(){
    this.sorting = 4;
    this.setsortingtonull();
    document.getElementById('yellow')?.classList.add("chosen");
  }

  setsorting5(){
    this.sorting = 5;
    this.setsortingtonull();
    document.getElementById('green')?.classList.add("chosen");
  }

  getdetails(){
    this.serv.getteamdata().subscribe(data => this.data = data);
    this.serv.gettotal().subscribe(total => this.currentteam = total);
    
  }

  getmoredetails(userId:string){
    this.router.navigateByUrl(`hunterdetails`);
    this.sub.setdata(userId);
  }

  async addteam(){
    this.isLoading = true;
    if(this.newteamname !== ""){
      this.serv.addteam(this.newteamname).subscribe();
      this.getdetails();
    };
    await new Promise(resolve => setTimeout(resolve, 500));
    this.isLoading = false;
  }

  async initialone(){
    this.isLoading = true;
    this.serv.initialone(this.initdel);
    this.getdetails();
    await new Promise(resolve => setTimeout(resolve, 500));
    this.isLoading = false;
  }

  async initial(){
    this.isLoading = true;
    if (this.initialtext == 'init'){
      this.serv.initial();
      this.getdetails();
    };
    await new Promise(resolve => setTimeout(resolve, 500));
    this.isLoading = false;
  }

}
