import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriesService, Category, Collaborater, CollaboraterService } from '@eshop/products';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';
import { Location } from '@angular/common';
 
@Component({
  selector: 'admin-collaboraters-form',
  templateUrl: './collaboraters-form.component.html',
  styles: [
  ]
})
export class CollaboratersFormComponent implements OnInit {
  editmode = false;
  form!: FormGroup;
  isSubmitted  = false; 
  catagories: Category[] = [];
  imageDisplay!: string | ArrayBuffer;
  currentProductId!: string;


  constructor(private formBuilder: FormBuilder ,private router: Router, 
      private categoriesService : CategoriesService,
      private collabservice: CollaboraterService,
      private messageService: MessageService,
      private location: Location,
      private route: ActivatedRoute,) { }

  ngOnInit(): void {
     this._initForm();
    this._getCategories();
    this._checkEditMode();
  }
  private _initForm() { 
  
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      location: ['', Validators.required],
      category: ['', Validators.required],
      phone: ['', Validators.required],
      image: ['', Validators.required],

      });

  }
 
  onCancle() {
    this.location.back();
  }
  get ColabForm() {
    return this.form.controls;
  }


  onImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      this.form.patchValue({ image: file });
       const fileReader = new FileReader();
      fileReader.onload = () => {
         this.imageDisplay != fileReader.result;
      }
      fileReader.readAsDataURL(file);
    }
  }

  
  private _getCategories() {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.catagories = categories;
    });
  }

  
 
  
  private _addcollab(collab: FormData) {
    this.collabservice.createCollab(collab).subscribe(
      (collab: Collaborater) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: `collaborater ${collab.name} is created!`
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
          detail: 'collaborater is not created!'
        });
      }
    );
  }


  private _updateCollab(productFormData: FormData) {
    this.collabservice.updateCollab(productFormData,this.currentProductId).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'collaborater is updated!'
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
          detail: 'collaborater is not updated!'
        });
      }
    );
  }
  private _checkEditMode() {
    this.route.params.subscribe((params) => {
         if (params['id'] ){
          this.editmode = true;
          this.currentProductId = params['id'];
           this.collabservice.getCollab(params['id']).subscribe((collab) => {
          this.ColabForm['name'].setValue(collab.name);
          this.ColabForm['lastname'].setValue(collab.lastname);
          this.ColabForm['phone'].setValue(collab.phone);
          this.ColabForm['location'].setValue(collab.location);
           this.ColabForm['category'].setValue(collab.category?.id);
           this.imageDisplay != collab.image;
           this.ColabForm['image'].setValidators([]);
           this.ColabForm['image'].updateValueAndValidity();

         });
      }
    });
  }
 

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) return;
  
    const productFormData = new FormData();
    Object.keys(this.ColabForm).map((key) => {
      productFormData.append(key, this.ColabForm[key].value);
    });
  
    if (this.editmode) {
      this._updateCollab(productFormData);
    } else {
      this._addcollab(productFormData);
    }
  
  
  }
}
