import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import sha256 from "fast-sha256";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  private corporateid : any = [137, 61, 139, 77, 169, 97, 207, 182, 216, 139, 100, 158, 180, 73, 2, 134, 174, 70, 77, 222, 153, 225, 220, 93, 84, 37, 116, 2, 29, 169, 252, 117];
  private newid : any = [];
  public searchTerm : any = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }  
  
corporate_evidence(event : any){
  this.newid = [];
  this.searchTerm = (event.target as HTMLInputElement).value;
}

login(){
  for (var i in sha256(this.searchTerm))
    this.newid.push(sha256(this.searchTerm)[i])
  if (this.newid.toString() == this.corporateid.toString()){
    this.router.navigateByUrl('managerdesk')
  }
}

}
