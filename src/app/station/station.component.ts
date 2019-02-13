import { Component, OnInit, Optional, Input } from '@angular/core';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: [
    './station.component.css',
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class StationComponent implements OnInit {
  @Input() station: {index: number, name: string, detourKm: number, price: number};
 
  constructor(){}

  ngOnInit() {
  }

}
