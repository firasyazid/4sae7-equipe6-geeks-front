 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Order } from '../../models/order';
import { OrderItem } from '../../models/orderI-item';
  
 


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
 
  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:3000/api/v1/orders/');
  }

  getOrder(orderId: string): Observable<Order> {
    return this.http.get<Order>(`${'http://localhost:3000/api/v1/orders/'}/${orderId} `);
  }

 
  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>('http://localhost:3000/api/v1/orders/', order);
  }

  updateOrder(orderStaus: { status: string }, orderId: string): Observable<Order> {
    return this.http.put<Order>(`${'http://localhost:3000/api/v1/orders/'}/${orderId}`, orderStaus);
  }

  deleteOrder(orderId: string): Observable<object> {
    return this.http.delete<object>(`http://localhost:3000/api/v1/orders/${orderId}`);
  }

  

  
  getUsersCount(): Observable<number> {
    return this.http
      .get<number>(`http://localhost:3000/api/v1/orders/get/count`)
      .pipe(map((objectValue: any) => objectValue.userCount));
  }

  getTotalSales(): Observable<number> {
    return this.http
      .get<number>(`${'http://localhost:3000/api/v1/orders/'}/get/totalsales`)
      .pipe(map((objectValue: any) => objectValue.totalsales));
  }

  getProduct(productId: string): Observable<any> {
    return this.http.get<any>(`${'http://localhost:3000/api/v1/services/'}/${productId}`);
  }

  
  }



