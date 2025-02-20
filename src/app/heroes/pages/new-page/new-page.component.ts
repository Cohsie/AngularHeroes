import { Component } from '@angular/core';
import { heroe } from '../../interfaces/hero.interface'


@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent {
  public hero!: heroe

  ngOnInit(): void{
    if (!this.hero) throw new Error("No está")
    }
}
