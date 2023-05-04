import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appel } from './models/appel';

@Injectable({
  providedIn: 'root'
})
export class AppelService {
  private apiUrl = 'http://localhost:3308/Appels';

  constructor(private http: HttpClient) { }

  getAppels(): Observable<Appel[]> {
    return this.http.get<Appel[]>(this.apiUrl+'/list-appel');
  }

  getAppelById(id: number): Observable<Appel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Appel>(url);
  }

  addAppel(appel: Appel): Observable<Appel> {
    return this.http.post<Appel>(this.apiUrl+'/add-appel', appel);
  }

  updateAppel(appel: Appel): Observable<any> {
    const url = `${this.apiUrl}/${appel.idc}`;
    return this.http.put(url, appel);
  }

  deleteAppel(id: number): Observable<any> {
    const url = `${this.apiUrl+'/delete-appel'}/${id}`;
    return this.http.delete(url);
  }
}
