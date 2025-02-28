import { Component } from '@angular/core';
import { heroe, Publisher } from '../../interfaces/hero.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent {

  public heroForm = new FormGroup({
    id: new FormControl<string>('', {nonNullable: true}),
    superhero: new FormControl<string>('', {nonNullable: true}),
    publisher: new FormControl<Publisher>(Publisher.DCComics, {nonNullable: true}),
    alter_ego: new FormControl<string>('', {nonNullable: true}),
    first_appearance: new FormControl<string>('', {nonNullable: true}),
    characters: new FormControl<string>('', {nonNullable: true}),
    alt_img: new FormControl<string>('', {nonNullable: true}),
  });

  public publishers = [
    {id: 'DC Comics', desc: 'DC - Comics'},
    {id: 'Marvel Comics', desc: 'Marvel - Comics'}
  ]
  constructor(
    private heroesService: HeroesService,
    private router: Router)
    {}

    ngOnInit(): void {
      if (!this.router.url.includes('edit')) return;

      const heroId = this.router.url.split('/');
      const id = heroId[heroId.length -1];

      if (id){
        this.heroesService.getHeroById(id).subscribe(heroe => {
        this.heroForm.reset( heroe );
      });
      }else{
        this.router.navigate(['/heores/list']);
      }
    }


  get currentHero(): heroe{
    const hero = this.heroForm.value as heroe;
    return hero;
  }

  onSubmit(): void{
    if(this.heroForm.invalid) return;

    if(this.currentHero.id){
      this.heroesService.updateHero(this.currentHero)
        .subscribe( hero =>{
        //TODO: mostrar snackbar
        });
        return;
    }

    this.heroesService.addHero(this.currentHero)
      .subscribe (hero => {
        //TODO: mostrar snackbar y navegar a /heores/edit/hero.id
      })

    console.log({
      formIsValid: this.heroForm.valid,
      value: this.heroForm.value
    });
  }

  /*public hero!: heroe*/



}
