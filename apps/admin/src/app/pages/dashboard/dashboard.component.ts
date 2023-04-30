import { Component, OnInit } from '@angular/core';
import { ClaimService, OrdersService } from '@eshop/orders';
import { ProductsService, UsersService,CollaboraterService } from '@eshop/products';
import { combineLatest } from 'rxjs';
import { Article, ArticleService } from '@eshop/products';

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
    private art:ArticleService,
    private claim : ClaimService

   ) {}

  ngOnInit(): void {
    combineLatest([
       this.art.getArticlsCount(),
      ]).subscribe((values) => {
      this.statistics = values;
      console.log(values)
 
    });
    combineLatest([
      this.claim.getClaimsCount(),
     ]).subscribe((values) => {
     this.statisticsS = values;
     console.log(values)

   });


 }

  }


