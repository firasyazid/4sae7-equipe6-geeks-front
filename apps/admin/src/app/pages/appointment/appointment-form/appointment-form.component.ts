import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';
import { Location } from '@angular/common';
 
@Component({
  selector: 'admin-appointment-form',
  templateUrl: './appointment-form.component.html',
  styles: [
  ]
})
export class appointmentFormComponent implements OnInit {
  editmode = false;
  form!: FormGroup;
  isSubmitted  = false; 
  imageDisplay!: string | ArrayBuffer;
  currentProductId!: string;


  constructor(private formBuilder: FormBuilder ,private router: Router, 
      
      private location: Location,
      private route: ActivatedRoute,) { }

  ngOnInit(): void {
     this._initForm();
  
  }
  private _initForm() { 
  
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
     

      });

  }
 
 



  
 

  
 
  




}
