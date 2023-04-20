import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, Routes } from '@angular/router';
 import { MatBadgeModule } from '@angular/material/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BadgeModule } from 'primeng/badge';
  import {ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
 import { HttpClientModule } from '@angular/common/http';

export const ordersRoutes: Route[] = [];


const routes: Routes=[ 

  
]

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forChild(routes),
    MatBadgeModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
     ReactiveFormsModule,
    BadgeModule,
    InputMaskModule,  
    DropdownModule,
    InputNumberModule, 
    FormsModule,
    HttpClientModule
  ],
  declarations: [ ],
  exports: [],
})
export class OrdersModule {
  constructor( ) {
   }
}
