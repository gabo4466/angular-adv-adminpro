import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [
    './progress.component.css'
  ]
})
export class ProgressComponent {

  progreso1: number;
  progreso2: number;

  constructor(){
    this.progreso1 = 0;
    this.progreso2 = 0;
  }

  getProgreso1() {
    return `${ this.progreso1 }%`;
  }

  getProgreso2() {
    return `${ this.progreso2 }%`;
  }
  
}
