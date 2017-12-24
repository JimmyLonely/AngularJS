import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService
  ) { }

  title = 'Tour of heroes';
  selectedHero: Hero;
  heroes: Hero[];
  selectedHeroId: Number;

  ngOnInit(): void {
    this.activatedRoute.paramMap.switchMap((params: ParamMap) => {
      this.selectedHeroId = + params.get('id');
      return this.heroService.getHeroes();
    }).subscribe((heroes) => {
      this.heroes = heroes;
    })
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes;
    });
  }

  add(name: string): void {
    name = name.trim();
    this.heroService.create(name).then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    })
  }

  delete(hero: Hero): void {
    this.heroService.delete(hero).then(respone => {
      this.heroes = this.heroes.filter(h => h !== hero);
    })
  }
}
