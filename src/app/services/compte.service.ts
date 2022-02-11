import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(public http:HttpClient) { }

  getCompteById(id:any){
    return this.http.get('http://localhost:8088/compteClient/'+id);
  }
  getCompteByNumCompte(id:any){
    return this.http.get('http://localhost:8088/comptes/'+id);

  }
  getAll():Observable<any>{
    return this.http.get('http://localhost:8088/listcomptes');
  }
}
