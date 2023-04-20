 import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService , Category, Service, ProductsService} from '@eshop/products';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';
import { Location } from '@angular/common';



@Component({
  selector: 'admin-products-form',
  templateUrl: './products-form.component.html',
  styles: [
  ]
})
export class ProductsFormComponent implements OnInit {

  editmode = false;
  form!: FormGroup;
  isSubmitted  = false; 
  catagories: Category[] = [];
  imageDisplay!: string | ArrayBuffer;
  currentProductId!: string;

   

  constructor( private formBuilder: FormBuilder ,private router: Router, 
    private categoriesService : CategoriesService,
    private productsService: ProductsService,
    private messageService: MessageService,
    private location: Location,
    private route: ActivatedRoute,


    ) { 
    
  }

  ngOnInit(): void {

    this._initForm();
    this._getCategories();
    this._checkEditMode();
  }


  private _initForm() { 

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
       price: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],

     });

  }
  get productForm() {
    return this.form.controls;
  }
 
   

   
  private _getCategories() {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.catagories = categories;
    });
  }


  onSubmit() {
  this.isSubmitted = true;
  if (this.form.invalid) return;

  const serv: Service = {
    id: this.currentProductId,
    name: this.productForm['name'].value,
    price: this.productForm['price'].value,
    category: this.productForm['category'].value,
    description: this.productForm['description'].value,

  };
  if (this.editmode) {
    this._updateProduct(serv);
  } else {
    this._addProduct(serv);
  }
}
 
 
private _addProduct(productData: Service) {
  this.productsService.createProduct(productData).subscribe(
    (product: Service) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: `Service ${product.name} is created!`
      });
      timer(2000)
        .toPromise()
        .then(() => {
          this.location.back();
        });
    },
    () => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Service is not created!'
      });
    }
  );
}

 
 
private _updateProduct(serv: Service) {
  this.productsService.updateProduct(serv).subscribe(
    () => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Service is updated!'
      });
      timer(2000)
        .toPromise()
        .then(() => {
          this.location.back();
        });
    },
    () => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Service is not updated!'
      });
    }
  );
}


private _checkEditMode() {
  this.route.params.subscribe((params) => {
    if (params['id'] ){
      this.editmode = true;
      this.currentProductId = params['id'];
      this.productsService.getProduct(params['id']).subscribe((product) => {
        this.productForm['name'].setValue(product.name);
         this.productForm['price'].setValue(product.price);
          this.productForm['category'].setValue(product.category?.id);
          this.productForm['description'].setValue(product.description);

 
       });
    }
  });
}
onCancle(){
  this.location.back();

 }
 }

