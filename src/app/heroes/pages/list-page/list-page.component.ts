import { Component, OnInit } from '@angular/core';
import { heroe } from '../../interfaces/hero.interface'
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit {
  heroes: heroe[] = []

  constructor(private heroesService: HeroesService){}

  ngOnInit(): void{
    this.heroesService.getHeroes().subscribe((data) =>{
      this.heroes = data;
    });
  }
}
