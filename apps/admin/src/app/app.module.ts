import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { InputSwitchModule } from 'primeng/inputswitch';
import { EditorModule } from 'primeng/editor';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { CategoriesService } from '@eshop/products';
import { InputNumberModule } from 'primeng/inputnumber';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { AuthGuardService, UsersModule } from '@eshop/users';
import { appointmentsListComponent } from './pages/appointment/appointment-list/appointment-list.component';
import { appointmentFormComponent } from './pages/appointment/appointment-form/appointment-form.component';

const routes: Routes = [

      {
        path: 'appoint',
        component: appointmentsListComponent,
      },
      {
        path: 'appoint/form',
        component: appointmentFormComponent,
      },

      {
        path: 'appoint/form/:id',
        component: appointmentFormComponent,
      }
    ]
;

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    DashboardComponent,
  
    CategoriesListComponent,
    CategoriesFormComponent,
   
    appointmentsListComponent,
    appointmentFormComponent
  ],
  imports: [
    TagModule,
    BrowserModule,
    EditorModule,
    ColorPickerModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    InputNumberModule,
    CardModule,
    DropdownModule,
    ToastModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
   
    InputSwitchModule,
    UsersModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [CategoriesService, MessageService],
  bootstrap: [AppComponent],
  exports: [
   
  ]
})
export class AppModule {}
