import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../services/data.service";
import { Router } from "@angular/router";
import { Countrie } from 'src/app/models/countrie';


@Component({
  selector: 'app-objeto',
  templateUrl: './objeto.component.html',
  styleUrls: ['./objeto.component.css']
})
export class ObjetoComponent implements OnInit {

  objeto: any = {};
  codigo: string = '';

  constructor(private activateRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router) {

  }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(params => {
      this.objeto = this.dataService.getObject(params['code']);

      this.codigo = params['code'];
    })


    console.log('cod = ' + this.codigo);
    this.showDatos();
  }

  backTo() {
    this.router.navigate(['objetos']);
  }

  showDatos() {
    this.dataService.getObject(this.codigo).subscribe((data) => {
      console.log(data);
      this.objeto = data;
    })
  }

}
