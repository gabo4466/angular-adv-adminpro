import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  intervalSub: Subscription;

  constructor() {

    /* this.returnObs().pipe(
      retry(1)
    )
    .subscribe(
      valor => console.log('Sub: ', valor),
      error => console.warn('Error: ', error),
      ()    => console.info('obs$ ha terminado')
    ); */
    this.intervalSub = this.returnInterval()
    .subscribe( console.log )

   }

   ngOnDestroy(): void {
     this.intervalSub.unsubscribe();
   }

   returnInterval(): Observable<number>  {  
    return interval(100)
    .pipe(
      map( valor => valor+1 ),
      filter( valor => (valor % 2 == 0 ) ? true: false), 
      //take(10)
    );
   }

   returnObs(): Observable<number> {
    
    return new Observable<number>( observer => {
      
      let i;
      const intervalo = setInterval( () => {
        i = Math.floor(Math.random()* 5 + 1);
        observer.next(i);
        if( i == 5 ){
          clearInterval( intervalo );
          observer.complete();
        }
        if( i == 1 ){
          clearInterval( intervalo );
          observer.error('i llego a 1');
        }
      }, 1000 )

    } );
   }
  
}
