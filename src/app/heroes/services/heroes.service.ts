import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
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
    return this.httpClient.get<heroe[]>(`${ this.baseUrl }/heroes?q=${ query }&_limit=6`)
  }

}
