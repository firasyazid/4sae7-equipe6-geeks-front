import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Material } from './models/material';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  private baseUrl = 'http://localhost:3308/api/materials';

  constructor(private http: HttpClient) { }

  getMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>(`${this.baseUrl}`);
  }

  getMaterialById(id: number): Observable<Material> {
    return this.http.get<Material>(`${this.baseUrl}/${id}`);
  }

  createMaterial(material: Material): Observable<Material> {
    return this.http.post<Material>(`${this.baseUrl}`, material);
  }

  updateMaterial(id: number, material: Material): Observable<Material> {
    return this.http.put<Material>(`${this.baseUrl}/${id}`, material);
  }

  deleteMaterial(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
