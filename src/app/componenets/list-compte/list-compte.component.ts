import { Component, OnInit } from '@angular/core';
import {Compte} from "../../model/Compte";
import {CompteService} from "../../services/compte.service";
import {Client} from "../../model/client";

@Component({
  selector: 'app-list-compte',
  templateUrl: './list-compte.component.html',
  styleUrls: ['./list-compte.component.css']
})
export class ListCompteComponent implements OnInit {

  compte:Compte[]=[];
  private client:Client={

  };

  constructor(public compteServ:CompteService) { }

  ngOnInit(): void {
    this.getCompte();

  }

  getCompte(){
    this.compteServ.getAll().subscribe(res=>{

      this.compte=res as Compte[]
      this.compte.forEach(a=>{
        console.log(a) ;
      })
      console.log(this.client) ;

    })
  }
}
