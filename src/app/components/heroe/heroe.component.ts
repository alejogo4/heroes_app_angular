import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesServices, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  Heroe:Heroe;
  constructor(private _HeroesService:HeroesServices,private _activateRoute:ActivatedRoute) {
    this._activateRoute.params.subscribe(params => {
      this.Heroe = _HeroesService.getHeroe(params['id']);
      
    })
   }

  ngOnInit() {
  }

}
