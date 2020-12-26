import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

  @Input('valor') progreso: number = 10;
  @Input('color') btnClass: string = 'btn btn-primary';

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();
  
  cambiarValor ( valor: number ) {
    if ((this.progreso + valor <= 100) && (this.progreso + valor >= 0) ){
      this.progreso = this.progreso + valor;
      this.valorSalida.emit(this.progreso);
    }
  }

  onChange( valor: number ) {

    if( valor >= 100 ) {
      this.progreso = 100;
    }else if ( valor <= 0 || valor == null ) {
      this.progreso = 0;
    }else{
      this.progreso = valor;
    }
    this.valorSalida.emit(this.progreso);
  }
}
