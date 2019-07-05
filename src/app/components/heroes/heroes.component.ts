import { Component, OnInit } from '@angular/core';
import { HeroesServices, Heroe } from '../../services/heroes.service';
import {Router} from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  Heroes:Heroe[] = [];
  constructor(private _HeroesService:HeroesServices, private _RouterNav:Router) { 

  }

  ngOnInit() {
    this.Heroes = this._HeroesService.getHeroes();

  }

  verHeroe(index:number){
    this._RouterNav.navigate(['/heroe',index]);
  }

}
