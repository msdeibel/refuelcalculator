import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../../node_modules/bootstrap/dist/css/bootstrap.min.css'  
  ]
})
export class AppComponent {
  title = 'tankrechner';
  consumptionPer100km: number = 6.7;

  name1: string = ""; 
  detour1: number = 1;

  name2: string = "";
  detour2: number = 1;

  distance: number = 0;

  price1: number = 1.25;
  price2: number = 1.25;
  
  public estimatedRefill(){
    return (this.distance * this.consumptionPer100km)/100;
  }

  public totalCost1(){
    return this.totalCost(this.price1, this.detour1);
  }

  public totalCost2(){
    return this.totalCost(this.price2, this.detour2);
  }

  private totalCost(price: number, detour: number) {
    var refillCost = this.distance * this.consumptionPer100km / 100 * price;
    var detourCost = detour * this.consumptionPer100km / 100 * price
    var unroundedCost =  refillCost + detourCost;
                        
    return Math.round(unroundedCost * 100) / 100
  }
}
