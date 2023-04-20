import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  import { RouterModule, Routes } from '@angular/router';
  import { ButtonModule } from 'primeng/button';
 import {CheckboxModule} from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import {RatingModule} from 'primeng/rating';
import {InputNumberModule} from 'primeng/inputnumber';
  

const routes : Routes = [ 
  

  

]
@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes),ButtonModule,
    CheckboxModule,FormsModule,ReactiveFormsModule,RatingModule,InputNumberModule, ],
    
  declarations: [
      
    
     
  ],
  exports:[      ]
})
export class ProductsModule {}
