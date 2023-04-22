        import { Component, OnInit } from '@angular/core';
        import { Location } from '@angular/common';
        import { FormBuilder, FormGroup , Validators} from '@angular/forms';
        import {Claim,ClaimService } from '@eshop/orders';
        import { MessageService } from 'primeng/api';
        import { timer } from 'rxjs';
        import { ActivatedRoute } from '@angular/router';
          
        @Component({
          selector: 'admin-categories-form',
          templateUrl: './categories-form.component.html',
          styles: [
          ]
        })
        export class CategoriesFormComponent implements OnInit {

          form!: FormGroup;
          isSubmitted  = false; 
          editmode=false; 
          currentClaimID: string | undefined;
          claim: Claim[] = [];

          constructor(private messageService : MessageService ,
            private formBuilder: FormBuilder ,
            private claimService: ClaimService, 
            private location: Location,
            private route : ActivatedRoute,
            ) {} 

          ngOnInit(): void {

            this._initForm();

            this._checkEditMode() ; 

            }

            get claimForm () { 

              return this.form.controls;
           }
   
        _initForm(){ 
          this.form=this.formBuilder.group({
            description: ['', Validators.required],
            title: ['', Validators.required],
            date: ['', Validators.required],
            status: ['', Validators.required],
          });
        }
        
        onSubmit() {
          this.isSubmitted = true;
          if (this.form.invalid) {
            return;
          }
          const claim: Claim = {
            id: this.currentClaimID,
            description: this.claimForm['description'].value,
            title: this.claimForm['title'].value,
            date: this.claimForm['date'].value,
            status: this.claimForm['status'].value,
      
          };
          if (this.editmode) {
            this._updateClaim(claim);
          } else {
            this._addClaim(claim);
          }
        }
          
          onCancle() {
            this.location.back();
          }

          
          _addClaim(claim: Claim) {
            this.claimService.createClaim(claim).subscribe(() => {
              this.messageService.add({
                severity: 'success',
                summary: 'Success!',
                detail: 'Claim is added successfully',
                life: 3000,
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
              detail: 'claim is not added!'
              });
            });
          }
          
          private _updateClaim(claim  : Claim) {
            this.claimService.updateClaim(claim).subscribe(
              () => {
                this.messageService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: 'claim is updated!'
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
                  detail: 'claim is not updated!'
                });
              }
            );
          }


        private _checkEditMode(){ 
        this.route.params.subscribe(params =>{ 
        if (params['id']){ 
        this.editmode=true;
        this.currentClaimID= params['id'];
        this.claimService.getclaimByid(params['id']).subscribe(claim => {
        this.claimForm['description'].setValue(claim.description) ;  
        this.claimForm['title'].setValue(claim.title) ;  
        this.claimForm['date'].setValue(claim.date) ;  
        this.claimForm['status'].setValue(claim.status) ;  

         }

          )

        }
       
        })

          }
            
          

        }
          
