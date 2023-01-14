import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BackendserviceService {

  public errMsg : string = "";
  constructor(private http : HttpClient) {}

  addteam(teamname : any){
    return this.http.post("http://localhost:4815/api/register", {
      teamname,
      red_door : "close",
      blue_door : "close",
      purple_door : "close",
      yellow_door : "close",
      green_door : "close",
      team_prog : 0,
      password : "",
      input : false,
      verif_right : 3
    })
  }

  getteamdata(): Observable<Data[]>{
    return this.http.get<Data[]>("http://localhost:4815/api/data").pipe(
      catchError((err) => {
        this.errMsg = err;
        return of([])
      })
    )
  }

  getteamdataone(item:any): Observable<Data[]>{
    return this.http.get<Data[]>(`http://localhost:4815/api/dataone/${item}`).pipe(
      catchError((err) => {
        this.errMsg = err;
        return of([])
      })
    )
  }

  login(teamname:any, password:any){
    return this.http.get<{name:any}>(`http://localhost:4815/api/logindata/${teamname}/${password}`).pipe(
      catchError((err) => {
        this.errMsg = err;
        return of([])
      })
    )
  }

  logincolor(teamname:any, password:any, color:any){
    return this.http.put('http://localhost:4815/api/logincolordata', {
      name : teamname,
      pass : password,
      color : color
    })
  }

  submissioninput(sub:any, name:any){
    return this.http.get<{resforsub:any}>(`http://localhost:4815/api/sub/${sub}/${name}`).pipe(
      catchError((err) => {
        this.errMsg = err;
        return of([])
      })
    )
  }

  gettotal(){
    return this.http.get<{leng:any}>("http://localhost:4815/api/total").pipe(
      catchError((err) => {
        this.errMsg = err;
        return of([])
      })
    )
  }

  initialone(id:any){
    return this.http.delete(`http://localhost:4815/api/initone/${id}`).subscribe()
  }

  initial(){
    return this.http.delete("http://localhost:4815/api/init").subscribe()
  }
}
