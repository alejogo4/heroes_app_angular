import { Component, OnInit } from '@angular/core';
import { HeroesServices, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe-searched',
  templateUrl: './heroe-searched.component.html',
  styleUrls: ['./heroe-searched.component.css']
})
export class HeroeSearchedComponent implements OnInit {
  Heroes:Heroe;
  constructor(private _HeroesService:HeroesServices,private _activateRoute:ActivatedRoute) { 
    
  }

  ngOnInit() {
    this._activateRoute.params.subscribe(params => {
      this.Heroes = this._HeroesService.buscarHeroes(params['termino']);
    })
  }

}
