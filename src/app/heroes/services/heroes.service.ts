import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { heroe } from '../interfaces/hero.interface';
import { environment } from 'src/environment/environments';


@Injectable({providedIn: 'root'})
export class HeroesService {
  private baseUrl: string = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getHeroes(): Observable<heroe[]>{
    return this.httpClient.get<heroe[]>(`${ this.baseUrl }/heroes`);
  }
}
