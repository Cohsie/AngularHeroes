import { Component } from '@angular/core';
import { heroe } from '../../interfaces/hero.interface'


@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: [
  ]
})
export class HeroPageComponent {
  public hero!: heroe

  ngOnInit(): void{
  if (!this.hero) throw new Error("No está")
  }
}


