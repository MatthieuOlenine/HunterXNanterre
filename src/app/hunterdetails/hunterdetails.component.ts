import { Component, OnInit } from '@angular/core';
import { BackendserviceService } from '../services/backendservice.service';
import { SubscribedataService } from '../services/subscribedata.service';

@Component({
  selector: 'app-hunterdetails',
  templateUrl: './hunterdetails.component.html',
  styleUrls: ['./hunterdetails.component.css']
})
export class HunterdetailsComponent implements OnInit {

  public selfdata : string = this.sub.getdata();
  public alldataown : any = {};
  constructor(private sub : SubscribedataService, private serv : BackendserviceService) { }

  ngOnInit(): void {
    history.replaceState({}, '', `/hunterdetails/${this.selfdata}`);
    this.serv.getteamdataone(this.selfdata).subscribe(data => this.alldataown = data)
  }

}