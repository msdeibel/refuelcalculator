import { Component } from '@angular/core';
import { StationComponent } from './station/station.component';
import { ConsumptionComponent } from './consumption/consumption.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../../node_modules/bootstrap/dist/css/bootstrap.min.css'  
  ]
})
export class AppComponent {
  title = 'Refuel Calculator';
  consumption = {"per100km": 6.8, "carCostPerKm": 0.39}
  stations = [
              {"index": 1, "name": "", "detourKm": 1, "price": 1.25},
              {"index": 2, "name": "", "detourKm": 1, "price": 1.25},
              {"index": 3, "name": "", "detourKm": 1, "price": 1.25}
  ]

  distance: number;

  constructor() {  
    this.distance = 300;
  }

  public estimatedRefill(){
    return (this.distance * this.consumption.per100km)/100;
  }

  public totalCostFor(station: {index: number, name: string, detourKm: number, price: number}){
    return this.totalCost(station.price, station.detourKm);
  }

  private totalCost(price: number, detour: number) {
    var refillCost = this.distance * this.consumption.per100km / 100 * price;
    var detourFuelCost = detour * this.consumption.per100km / 100 * price;
    var detourCarCost = detour * this.consumption.carCostPerKm - detourFuelCost;
    var unroundedCost =  refillCost + detourCarCost;
                        
    return Math.round(unroundedCost * 100) / 100
  }
}
