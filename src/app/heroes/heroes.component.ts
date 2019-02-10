import { Component, HostListener } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent
{
  /** @deprecated: mocked heroes array of objects */
  private heroes = HEROES;

  /** hold data from service */
  private heroesS: Hero[];

  public heroList: Hero[];

  private selectedHero: Hero = new Hero();

  public title2: string;

  public phone = "882278156";
  public address = "address";

  public isActive = false;

  // # // dependency injection in the constructor
  constructor(
    private heroService: HeroService
  ) {
    this.heroService
      .getHeroesFromApi()
      .subscribe(
        (response) => {
          this.heroesS = response.data;
        }
      );
      this.title2 = 'Hero list from service';
  }

  /**
   * //#// All the dom events bubbles up the dom tree until a handlor along the way prevents further bubbling.
   */  
  public say($event)
  {
    $event.stopPropagation();
    this.isActive = !this.isActive;
    console.log($event);
  }

  public say2(value)
  {
    // $event.stopPropagation();
    console.log(value);
    value = "";
  }

  public onButtonContainerClick($event)
  {
    console.log('Container clicked!');
  }

  public submitInput()
  {
    // console.log('Input submitted.');
    console.log('Input submitted.');
  }

  public onPropBind()
  {
    console.log(this.phone);
  }

  public twoWayBinding1()
  {
    console.log(this.address);
  }

  public twoWayBinding2(address)
  {
    console.log(address);
  }

  public twoWayBindingOriginal()
  {
    console.log(this.address);
  }
}
