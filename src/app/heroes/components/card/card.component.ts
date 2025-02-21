import { Component, Input, OnInit } from '@angular/core';
import { heroe, Publisher } from '../../interfaces/hero.interface';


@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
  styleUrls: []
})
export class CardComponent implements OnInit{
  @Input()
  public hero!: heroe

  ngOnInit(): void{
    if(!this.hero) throw new Error('heroe property is required');
  }
}
