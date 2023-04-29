import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import {Claim,ClaimService } from '@eshop/orders';
import { ToastrService } from 'ngx-toastr';
import { timer } from 'rxjs';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

 
@Component({
  selector: 'admin-categories-list',
  templateUrl: './categories-list.component.html',
  styles: [
  ]
})
export class CategoriesListComponent implements OnInit {
  claims: Claim[] = [];
  displayDialog = false;
  isModal = false;
   displayDialog2 = false;
  displayUpdateDialog = false;
  selectedClaim: Claim;
  showDeleteModal = false;


  newClaim: Claim = {
    description: '',
    title: '',
    date: '',
    status: null
  };



  constructor(private claimsServicece : ClaimService,
             private messageService : MessageService,
            private router: Router,
             private location: Location,

            ) { }


  ngOnInit(): void {
    this._getClaims() ; 
  }

  deleteClaim(claimId: string) {
this.claimsServicece.deleteClaim(claimId).subscribe( () => { 

   this._getClaims();
   
  this.messageService.add({severity:'success', summary:' success', detail:'Claim deleted'});
});
}


updateClaim(ClaimId: string) {
  this.router.navigateByUrl(`categories/form/${ClaimId}`);
}

private _getClaims() {
this.claimsServicece.getClaim().subscribe(cats => { 
  this.claims=cats ; 


 }); 
}
 
_addClaim(claim: Claim) {
  this.claimsServicece.createClaim(claim).subscribe(() => {
    this.messageService.add({
      severity: 'success',
      summary: 'Success!',
      detail: 'Claim is added successfully',
      life: 3000,
    });
    timer(2000)
    .toPromise()
    .then(() => {
       this.displayDialog = false; // close the dialog
      this._getClaims(); // refresh the claims list
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
 
  _updateClaim(claim  : Claim) {
  this.claimsServicece.updateClaim(claim).subscribe(
    () => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'claim is updated!'
      });
      timer(2000)
      .toPromise()
      .then(() => {
         this._getClaims(); // refresh the claims list
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
_showUpdateDialog(claim: Claim) {
  this.selectedClaim = { ...claim };
  this.displayUpdateDialog = true;
}

}