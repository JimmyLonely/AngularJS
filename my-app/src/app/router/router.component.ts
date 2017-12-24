import { Component, OnInit } from "@angular/core";
import { Route, RouterState, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'router',
  templateUrl: './router.component.html'
})

export class RouterComponent implements OnInit {
  constructor (
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    window.alert('on Init')
  }
}