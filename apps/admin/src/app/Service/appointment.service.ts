import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appointment } from '../Model/appointment.model';
import { map } from 'rxjs/operators';


@Injectable(
    {
        providedIn: 'root'
    }
)

export class appointmentService {
  private apiUrl = '/Appointment'

  constructor(private http: HttpClient) { }

  //Get all appointments
  getappointments(): Observable<appointment[]>{
    return this.http.get<appointment[]>(this.apiUrl);
  }

// Create a appointment
createappointment(appointment: appointment): Observable<appointment> {
  return this.http.post<appointment>(this.apiUrl, appointment);
}

// Update a appointment
updateappointment(appointment: appointment): Observable<appointment> {
  const url = `${this.apiUrl}/${appointment.id}`;
  return this.http.put<appointment>(url, appointment);
}

// Delete a appointment
deleteappointment(id: number): Observable<void> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.delete<void>(url);
}


}




