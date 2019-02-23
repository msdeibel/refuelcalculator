import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrls: [
    './consumption.component.css',
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class ConsumptionComponent implements OnInit {
  @Input() consumption: { per100km: number, carCostPerKm: number };
  
  constructor() { }

  ngOnInit() {
  }
}
