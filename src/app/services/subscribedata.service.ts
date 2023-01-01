import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribedataService {

  datatoall : any = "";
  constructor() { }

  getdata(){
    return this.datatoall;
  }

  setdata(id:string){
    this.datatoall = id;
  }

}
