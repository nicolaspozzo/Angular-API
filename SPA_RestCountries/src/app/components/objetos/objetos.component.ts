import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { Countrie } from "../../models/countrie";
import { Router } from "@angular/router";


@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrls: ['./objetos.component.css']
})
export class ObjetosComponent implements OnInit {

  datos:Array<Countrie>;
  //datos:Array<any>;
  constructor(private dataService:DataService,
              private router:Router) { 

    this.datos = new Array<Countrie>();
    //this.datos = new Array<any>();
    
  }

  ngOnInit(): void {
    this.showDatos();
  }

  showDatos(){
    this.dataService.getData().subscribe((data) => {
      console.log(data);
      this.datos = data;
    })
  }

  // showObject(code:string){
  //   this.router.navigate(['/objeto',code]);
  // }

}
