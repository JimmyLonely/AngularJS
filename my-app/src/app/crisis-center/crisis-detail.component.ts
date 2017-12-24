//  Lib
import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

//  Service
import { CrisisService } from './crisis.service';

//  Component
import { Crisis } from './crisis';

@Component({
  templateUrl: './crisis-detail.component.html'
})

export class CrisisDetailComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private crisisService: CrisisService
  ) {}

  @Input() crisis: Crisis;

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .switchMap((params: ParamMap) => this.crisisService.getCrisis(+params.get('id')))
      .subscribe(crisis => this.crisis = crisis);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.crisisService.update(this.crisis).then(response => {
      this.goBack()
    })

    window.alert('save ')
  }

  goCrisises() {
    let crisisId = this.crisis.id || '';
    this.router.navigate(['../', {id:crisisId, foo: 'foo'}], {relativeTo: this.activatedRoute});
  }
}