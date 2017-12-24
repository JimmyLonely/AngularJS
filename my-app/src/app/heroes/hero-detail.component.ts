//  Lib
import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

//  Service
import { HeroService } from './hero.service';

//  Component
import { Hero } from './hero';

@Component({
  templateUrl: './hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) {}

  @Input() hero: Hero;

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.update(this.hero).then(response => {
      this.goBack()
    })

    window.alert('save ')
  }

  goHeroes() {
    let heroId = this.hero.id || '';
    this.router.navigate(['/heroes', {id:heroId, foo: 'foo'}]);
  }
}