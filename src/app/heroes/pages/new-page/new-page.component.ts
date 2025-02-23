import { Component } from '@angular/core';
import { heroe, Publisher } from '../../interfaces/hero.interface'
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent {

  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>(''),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl<string>(''),
    first_appearance: new FormControl<string>(''),
    characters: new FormControl<string>(''),
    alt_img: new FormControl<string>(''),
  });

  public publishers = [
    {id: 'DC Comics', desc: 'DC - Comics'},
    {id: 'Marvel Comics', desc: 'Marvel - Comics'}
  ]

  onSubmit(): void{
    console.log({
      formIsValid: this.heroForm.valid,
      value: this.heroForm.value
    });
  }

  /*public hero!: heroe

  ngOnInit(): void{
    if (!this.hero) throw new Error("No está")
    }*/

}
