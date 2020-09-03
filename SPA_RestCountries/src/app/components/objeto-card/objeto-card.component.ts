import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-objeto-card',
  templateUrl: './objeto-card.component.html',
  styleUrls: ['./objeto-card.component.css']
})
export class ObjetoCardComponent implements OnInit {

  @Input() objeto:any = {};

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  showObject(code:string){
    this.router.navigate(['/objeto', this.objeto.alpha3Code]);
  }

}
