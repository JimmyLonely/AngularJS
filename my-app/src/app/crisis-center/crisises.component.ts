import { Component, OnInit } from '@angular/core';
import { Crisis } from './crisis';
import { CrisisService } from './crisis.service';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  templateUrl: './crisises.component.html',
  styleUrls: ['./crisises.component.css']
})

export class CrisisesComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private crisisService: CrisisService
  ) { }

  title = 'Tour of crisises';
  selectedCrisis: Crisis;
  crisises: Crisis[];
  selectedCrisisId: Number;

  ngOnInit(): void {
    this.activatedRoute.paramMap.switchMap((params: ParamMap) => {
      this.selectedCrisisId = + params.get('id');
      return this.crisisService.getCrisises();
    }).subscribe((crisises) => {
      this.crisises = crisises;
    })
  }

  onSelect(crisis: Crisis): void {
    this.selectedCrisis = crisis;
  }
  getCrisises(): void {
    this.crisisService.getCrisises().then(crisises => {
      this.crisises = crisises;
    });
  }

  add(name: string): void {
    name = name.trim();
    this.crisisService.create(name).then(crisis => {
      this.crisises.push(crisis);
      this.selectedCrisis = null;
    })
  }

  delete(crisis: Crisis): void {
    this.crisisService.delete(crisis).then(respone => {
      this.crisises = this.crisises.filter(h => h !== crisis);
    })
  }
}
