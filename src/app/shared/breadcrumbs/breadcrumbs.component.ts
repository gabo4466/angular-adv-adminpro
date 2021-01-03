import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';

import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from "rxjs/operators";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public title: string;
  public titleSubs$: Subscription;

  constructor(
    private router: Router
  ) {
    this.titleSubs$ = this.getTitleRoute()
    .subscribe( ({ title }) => {
      this.title = title
      document.title = `AdminPro - ${title}`
    });
  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  getTitleRoute() {
    return this.router.events
    .pipe(
      filter( event => event instanceof ActivationEnd ),
      filter( (event:ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event:ActivationEnd) => event.snapshot.data )
    );
  }

}
