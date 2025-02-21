import { Component, OnInit } from '@angular/core';
import { heroe } from '../../interfaces/hero.interface'
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: [
  ]
})
export class HeroPageComponent implements OnInit{
  public hero!: heroe
  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router){

  }

  ngOnInit(): void{
    /*if (!this.hero) throw new Error("No está")*/
    console.log(this.activatedRoute.params);
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.heroesService.getHeroById( id ))
      ).subscribe( hero => {
        if(!hero) return this.router.navigate(['/heroes/list']);

        this.hero= this.hero;
        console.log(hero);

        return;
      })
  }

}

//params => {console.log({params})}

