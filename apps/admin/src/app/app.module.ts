import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { InputSwitchModule } from 'primeng/inputswitch';
import { EditorModule } from 'primeng/editor';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { UsersFormComponent } from './pages/users/users-form/users-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { ProductsFormComponent } from './pages/products/products-form/products-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
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
import { UsersModule } from '@eshop/users';
import { CollaboratersListComponent } from './pages/collaboraters/collaboraters-list/collaboraters-list.component';
import { CollaboratersFormComponent } from './pages/collaboraters/collaboraters-form/collaboraters-form.component';
import { OrderListComponent } from './pages/orders/order-list/order-list.component';
import { OrderDetailsComponent } from './pages/orders/order-details/order-details.component';
import { FieldsetModule } from 'primeng/fieldset';
import { CodePromoListComponent } from './pages/CodepromoComp/code-promo-list/code-promo-list.component';
import { CodeformComponent } from './pages/CodepromoComp/codeform/codeform.component';
import { AppelComponent } from './pages/appel/appel.component';
import { DemandComponent } from './pages/demand/demand.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete'; 
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatRadioModule } from '@angular/material/radio'; 
import { MatSelectModule } from '@angular/material/select'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; 
import { MatSliderModule } from '@angular/material/slider'; 
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'categories',
        component: CategoriesListComponent,
      },
      {
        path: 'categories/form',
        component: CategoriesFormComponent,
      },
      {
        path: 'categories/form/:id',
        component: CategoriesFormComponent,
      },
      {
        path: 'products',
        component: ProductsListComponent,
      },
      {
        path: 'products/form',
        component: ProductsFormComponent,
      },

      {
        path: 'collab',
        component: CollaboratersListComponent,
      },
      {
        path: 'collab/form',
        component: CollaboratersFormComponent,
      },

      {
        path: 'collab/form/:id',
        component: CollaboratersFormComponent,
      },
      {
        path: 'products/form/:id',
        component: ProductsFormComponent,
      },

      {
        path: 'users',
        component: UsersListComponent,
      },
      {
        path: 'users/form',
        component: UsersFormComponent,
      },
      {
        path: 'users/form/:id',
        component: UsersFormComponent,
      },
      {
        path: 'orders',
        component: OrderListComponent,
      },
      {
        path: 'orders/form/:id',
        component: OrderDetailsComponent,
      },
      {
        path: 'codepromo',
        component: CodePromoListComponent,
      },
      {
        path: 'codepromo/form',
        component: CodeformComponent,
      },
      {
        path: 'codepromo/form/:id',
        component: CodeformComponent,
      },
      {
        path: 'appel',
        component: AppelComponent,
      },
      {
        path: 'demand',
        component: DemandComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    DashboardComponent,
    ShellComponent,
    SidebarComponent,
    CategoriesListComponent,
    CategoriesFormComponent,
    ProductsListComponent,
    ProductsFormComponent,
    UsersListComponent,
    UsersFormComponent,
    CollaboratersListComponent,
    CollaboratersFormComponent,
    OrderListComponent,
    OrderDetailsComponent,
    CodePromoListComponent,
    CodeformComponent,
    AppelComponent,
    DemandComponent,
    
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
    DialogModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    FieldsetModule,
    InputSwitchModule,
    UsersModule,
    TableModule,
    MatAutocompleteModule, 
    MatCheckboxModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatRadioModule, 
    MatSelectModule, 
    MatSlideToggleModule, 
    MatSliderModule ,
    MatTableModule,
    CommonModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [CategoriesService, MessageService],
  bootstrap: [AppComponent],
  exports: [
    CollaboratersListComponent,
    CollaboratersFormComponent,
    OrderListComponent,
    OrderDetailsComponent,
    CodePromoListComponent,
    CodeformComponent,
    TableModule,
  ],
})
export class AppModule {}
