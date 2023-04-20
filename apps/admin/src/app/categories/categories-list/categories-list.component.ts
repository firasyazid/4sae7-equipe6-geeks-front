import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import {Claim,ClaimService } from '@eshop/orders';


@Component({
  selector: 'admin-categories-list',
  templateUrl: './categories-list.component.html',
  styles: [
  ]
})
export class CategoriesListComponent implements OnInit {
  claims: Claim[] = [];





  constructor(private claimsServicece : ClaimService,
             private messageService : MessageService,
            private router: Router) { }
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
}}
