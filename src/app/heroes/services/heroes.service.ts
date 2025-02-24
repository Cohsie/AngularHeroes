import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { heroe } from '../interfaces/hero.interface';
import { environment } from 'src/environment/environments';


@Injectable({providedIn: 'root'})
export class HeroesService {
  private baseUrl: string = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getHeroes(): Observable<heroe[]>{
    return this.httpClient.get<heroe[]>(`${ this.baseUrl }/heroes`);
  }

  getHeroById(id: string):  Observable<heroe|undefined>{
    return this.httpClient.get<heroe>(`${ this.baseUrl }/heroes/${ id}`).
      pipe(catchError(error => of(undefined)));

  }

  getSuggestions(query:string): Observable<heroe[]>{
    return this.httpClient.get<heroe[]>(`${ this.baseUrl }/heroes?q=${ query }&_limit=6`);
  }

  addHero(hero: heroe): Observable<heroe>{
    return this.httpClient.post<heroe>(`${this.baseUrl}/heroes`, hero)
  }

  updateHero(hero: heroe): Observable<heroe>{
    if(!hero.id) throw Error('Hero id is required');
    return this.httpClient.patch <heroe>(`${this.baseUrl}/heroes/${hero.id}`, hero)
  }

  deleteHeroById(id: string): Observable<boolean>{
    return this.httpClient.delete(`${this.baseUrl }/heroes/${ id }`)
      .pipe(
        map( response => true),
        catchError(error=>of(false) )
      )
  }

}
