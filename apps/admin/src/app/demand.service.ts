import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Demand } from './models/demand';
import { AppUser } from './models/appuser';

@Injectable({
  providedIn: 'root'
})
export class DemandService {

  private apiUrl = 'http://localhost:3308/Demands';

  constructor(private http: HttpClient) { }

  getDemands(): Observable<Demand[]> {
    return this.http.get<Demand[]>(this.apiUrl+'/list-demand');
  }

  getDemand(id: number): Observable<Demand> {
    const url = `${this.apiUrl+''}/${id}`;
    return this.http.get<Demand>(url);
  }

  addDemand(demand: Demand): Observable<Demand> {
    return this.http.post<Demand>(this.apiUrl+'/add-demand', demand);
  }

  updateDemand(demand: Demand): Observable<void> {
    const url = `${this.apiUrl}/${demand.id}`;
    return this.http.put<void>(url, demand);
  }

  deleteDemand(id: number): Observable<void> {
    const url = `${this.apiUrl+'/delete-demand'}/${id}`;
    return this.http.delete<void>(url);
  }
  ajouterEtaffecterDemand(demand: Demand,id: number): Observable<Demand> {
    const url = `${this.apiUrl+'/add-listeDemand'}/${id}`;
    return this.http.post<Demand>(url, demand);
  }
  getDescription(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/descriptions');
  }

  getId( desc:any): Observable<number> {
    const url = `${this.apiUrl+'/descriptionid'}/${desc}`;
    return this.http.get<number>(url);
  }

}
