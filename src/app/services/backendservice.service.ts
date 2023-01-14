import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Data } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BackendserviceService {

  public errMsg : string = "";

  constructor(private http : HttpClient) {}

  addteam(teamname : any){
<<<<<<< HEAD
    return this.http.post("http://localhost:4815/api/register", {
=======
    return this.http.post("http://hunterxnanterreserver.com:4815/api/register", {
>>>>>>> 635c7b4361d80beac4e1ec29f8566a8cacc485c7
      teamname,
      red_door: "close",
      blue_door: "close",
      purple_door: "close",
      yellow_door: "close",
      green_door: "close",
      team_prog: 0,
      password: "",
      input: false,
      verif_right: 3
    })
  }

  getteamdata(): Observable<Data[]>{
<<<<<<< HEAD
    return this.http.get<Data[]>("http://localhost:4815/api/data").pipe(
=======
    return this.http.get<Data[]>("http://hunterxnanterreserver.com:4815/api/data").pipe(
>>>>>>> 635c7b4361d80beac4e1ec29f8566a8cacc485c7
      catchError((err) => {
        this.errMsg = err;
        return of([])
      })
    )
  }

  getteamdataone(item:any): Observable<Data[]>{
<<<<<<< HEAD
    return this.http.get<Data[]>(`http://localhost:4815/api/dataone/${item}`).pipe(
=======
    return this.http.get<Data[]>(`http://hunterxnanterreserver.com:4815/api/dataone/${item}`).pipe(
>>>>>>> 635c7b4361d80beac4e1ec29f8566a8cacc485c7
      catchError((err) => {
        this.errMsg = err;
        return of([])
      })
    )
  }

  login(teamname:any, password:any){
<<<<<<< HEAD
    return this.http.get<{name:any}>(`http://localhost:4815/api/logindata/${teamname}/${password}`).pipe(
=======
    return this.http.get<{name:any}>(`http://hunterxnanterreserver.com:4815/api/logindata/${teamname}/${password}`).pipe(
>>>>>>> 635c7b4361d80beac4e1ec29f8566a8cacc485c7
      catchError((err) => {
        this.errMsg = err;
        return of([])
      })
    )
  }

  logincolor(teamname:any, password:any, color:any){
<<<<<<< HEAD
    return this.http.put('http://localhost:4815/api/logincolordata', {
=======
    return this.http.put('http://hunterxnanterreserver.com:4815/api/logincolordata', {
>>>>>>> 635c7b4361d80beac4e1ec29f8566a8cacc485c7
      name : teamname,
      pass : password,
      color : color
    })
  }

  submissioninput(sub:any, name:any){
<<<<<<< HEAD
    return this.http.get<{resforsub:any}>(`http://localhost:4815/api/sub/${sub}/${name}`).pipe(
=======
    return this.http.get<{resforsub:any}>(`http://hunterxnanterreserver.com:4815/api/sub/${sub}/${name}`).pipe(
>>>>>>> 635c7b4361d80beac4e1ec29f8566a8cacc485c7
      catchError((err) => {
        this.errMsg = err;
        return of([])
      })
    )
  }

  gettotal(){
<<<<<<< HEAD
    return this.http.get<{leng:any}>("http://localhost:4815/api/total").pipe(
=======
    return this.http.get<{leng:any}>("http://hunterxnanterreserver.com:4815/api/total").pipe(
>>>>>>> 635c7b4361d80beac4e1ec29f8566a8cacc485c7
      catchError((err) => {
        this.errMsg = err;
        return of([])
      })
    )
  }

  initialone(id:any){
<<<<<<< HEAD
    return this.http.delete(`http://localhost:4815/api/initone/${id}`).subscribe()
  }

  initial(){
    return this.http.delete("http://localhost:4815/api/init").subscribe()
=======
    return this.http.delete(`http://hunterxnanterreserver.com:4815/api/initone/${id}`).subscribe()
  }

  initial(){
    return this.http.delete("http://hunterxnanterreserver.com:4815/api/init").subscribe()
>>>>>>> 635c7b4361d80beac4e1ec29f8566a8cacc485c7
  }
}
