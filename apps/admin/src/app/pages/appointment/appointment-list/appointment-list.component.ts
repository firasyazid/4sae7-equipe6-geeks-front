import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { appointment } from '../../../Model/appointment.model';
import {appointmentService} from '/Users/nourlabidi/Desktop/4sae7-equipe6-geeks-front/apps/admin/src/app/Service/appointment.service'

@Component({
  selector: 'admin-appointment-list',   
  templateUrl: './appointment-list.component.html',
  styles: [
  ]
})
export class appointmentsListComponent implements OnInit {

appointements : appointment[] 
  constructor(    private appointmentService: appointmentService,   private messageService : MessageService,   private router: Router) { 
 }

  ngOnInit(): void {
   this.getCourses();

  }
  getCourses(): void {
    this.appointmentService.getappointments().subscribe
    ( (apps) => {
      console.log(apps) ; 
      this.appointements = apps ; 
    });
    
  }
  

}
