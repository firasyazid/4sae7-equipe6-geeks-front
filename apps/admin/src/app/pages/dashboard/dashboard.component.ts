import { Component, OnInit } from '@angular/core';
import { OrdersService } from '@eshop/orders';
import { ProductsService, UsersService,CollaboraterService } from '@eshop/products';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 statistics: any []= [];
 statisticsS: any []= [];
 statisticsC: any []=[]; 
 statisticsOrder: any []=[]; 
  constructor(
    private userService:  UsersService,
    private productService: ProductsService,
    private CollaboraterService: CollaboraterService,
    private ordersService:OrdersService,
    
   ) {}

  ngOnInit(): void {
    combineLatest([
       this.userService.getUsersCount(),
      ]).subscribe((values) => {
      this.statistics = values;
 
    });

    combineLatest([
      this.productService.getServiceCount(),
   ]).subscribe((values) => {
    this.statisticsS = values;
  });

  combineLatest([
    this.CollaboraterService.getUsersCount(),
 ]).subscribe((values) => {
  this.statisticsC = values;
});

combineLatest([
  this.ordersService.getUsersCount(),
]).subscribe((values) => {
this.statisticsOrder = values;
});
 }

  }

 
