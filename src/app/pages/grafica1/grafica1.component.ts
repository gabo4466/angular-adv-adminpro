import { Component } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  labels1: string[] = ['CyberPunk', 'WoW', 'AC Valhalla'];
  data1: number[] = [150, 700, 150];

}
