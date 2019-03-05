import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrls: [
    './consumption.component.css'
  ]
})
export class ConsumptionComponent implements OnInit {
  @Input() consumption: { per100km: number, carCostPerKm: number };
  
  constructor() { }

  ngOnInit() {
  }
}
