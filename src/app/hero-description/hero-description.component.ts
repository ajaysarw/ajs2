import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { catchError, map, tap } from 'rxjs/operators';



@Component({
  selector: 'app-hero-description',
  templateUrl: './hero-description.component.html',
  styleUrls: ['./hero-description.component.scss']
})
export class HeroDescriptionComponent implements OnInit {

  @Input() heroList;
  private heroes: Hero[];

  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    // this.gng serve --port 44400etHeroes();
  }

  public getHeroes(): void {
    // console.log(this.heroService.getHeroesFromApi());
    this.heroService.getHeroesFromApi()
      .subscribe(data => {
        console.log(data );
        for(const obj of data){
            console.log(obj);
        }
        this.heroList = data;
      }); 
  }

  // private transferormation(heroArray: Hero[]): [] {
  //   //
  //   return [];
  // }
}
