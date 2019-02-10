import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// will use later
// import { Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';



@Injectable({
  providedIn: 'root'
})
export class HeroService
{
  constructor(private http: HttpClient)
  {
    // empty
  }

  /**
   * @deprecated
   */
  public getHeroes(): Hero[]
  {
    // Deprecated
    return HEROES;
  }

  /**
   * fetch heroes list data from endpoint
   */
  public getHeroesFromApi(): Observable<any>
  {
    return this.http.get('http://helloworld1.com/heroes/getList')
      .pipe(
        map(
          (res) => res
        )
      );
  }
}
