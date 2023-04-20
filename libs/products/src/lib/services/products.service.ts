import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
 import { Service } from '../models/service';
 import { map } from 'rxjs/operators';
 

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 
  constructor(private http: HttpClient) {}

  getProducts(categoriesFilter?: string[]): Observable<Service[]> {
    let params = new HttpParams();
    if (categoriesFilter) {
      params = params.append('categories', categoriesFilter.join(','));
    }
    return this.http.get<Service[]>('http://localhost:3000/api/v1/services/',{ params: params });
  }
  
  createProduct(productData: Service): Observable<Service> {
    return this.http.post<Service>('http://localhost:3000/api/v1/services/', productData);
  }
   
  deleteService(productId: string): Observable<object> {
    return this.http.delete<object>(`http://localhost:3000/api/v1/services/${productId}`)
  }
  getProduct(productId: string): Observable<Service> {
    return this.http.get<Service>(`http://localhost:3000/api/v1/services/${productId}`);
  }
   
  updateProduct(productData: Service): Observable<Service> {
    return this.http.put<Service>(`http://localhost:3000/api/v1/services/${productData.id}`, productData);
  }
  
  getProductsCount(): Observable<number> {
    return this.http
      .get<number>(`http://localhost:3000/api/v1/services/get/count`)
      .pipe(map((objectValue: any) => objectValue.productCount));
  }
  getServiceCount(): Observable<number> {
    return this.http
      .get<number>(`http://localhost:3000/api/v1/services/get/count`)
      .pipe(map((objectValue: any) => objectValue.userCount));
  }

}
