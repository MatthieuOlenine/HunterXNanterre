import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from '../services/backendservice.service';
import { SubscribedataService } from '../services/subscribedata.service';

@Component({
  selector: 'app-hunterboard',
  templateUrl: './hunterboard.component.html',
  styleUrls: ['./hunterboard.component.css']
})
export class HunterboardComponent implements OnInit {

  public data : any = [];
  public container : boolean = false;
  public valueTerms : any = '';
  public selfdata : string = this.sub.getdata();
  public alldataown : any = {};
  isLoading = false;
  constructor(private router: Router, private sub : SubscribedataService, private serv : BackendserviceService) { }

  ngOnInit(): void {
    // crée un url modifié pour l'utilisateur
    history.replaceState({}, '', `/hunterboard/${this.selfdata}`);
    this.serv.getteamdataone(this.selfdata).subscribe(data => this.alldataown = data);
    // Appel de la méthode getteamdata lorsque le composant est initialisé
    this.getdetails();
  }

getdetails(){
  this.serv.getteamdata().subscribe(data => this.data = data);
}

setcontainer1(){
  this.container = false;
  document.getElementById('door')?.classList.remove("box");
  document.getElementById('door')?.classList.add("boxhover");
  document.getElementById('input')?.classList.remove("boxhover");
  document.getElementById('input')?.classList.add("box");
}

setcontainer2(){
  this.container = true;
  document.getElementById('door')?.classList.remove("boxhover");
  document.getElementById('door')?.classList.add("box");
  document.getElementById('input')?.classList.remove("box");
  document.getElementById('input')?.classList.add("boxhover");
}

OpenLinkInNewTabRed(){
  window.open('https://hunterxnanterre.fr/#/nomathsequence')
}

OpenLinkInNewTabBlue(){
  window.open('https://hunterxnanterre.fr/#/lostsignal')
}

OpenLinkInNewTabPurple(){
  window.open('https://hunterxnanterre.fr/#/falsecompassway')
}

OpenLinkInNewTabYellow(){
  window.open('https://hunterxnanterre.fr/#/astrosolarsysteme')
}

OpenLinkInNewTabGreen(){
  window.open('https://hunterxnanterre.fr/#/lastscene')
}

verifvalueinput(event : any){
  this.valueTerms = (event.target as HTMLInputElement).value;
}

async submitbtn(){
  this.isLoading = true;
  if(this.valueTerms.length > 3 && this.valueTerms.length < 5){
    this.serv.submissioninput(this.valueTerms, this.alldataown["teamname"]).subscribe();
    await new Promise(resolve => setTimeout(resolve, 500));
    this.serv.getteamdataone(this.selfdata).subscribe(data => this.alldataown = data);
    this.getdetails();
  }
}

}
