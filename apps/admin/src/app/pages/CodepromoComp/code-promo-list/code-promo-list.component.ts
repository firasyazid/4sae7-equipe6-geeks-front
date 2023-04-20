import { Component, OnInit } from '@angular/core';
 import { Code, CodeService } from '@eshop/orders';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-code',
  templateUrl: './code-promo-list.component.html',
  styles: [],
})
export class CodePromoListComponent implements OnInit {

  codepromo: Code[] = [];

  constructor(private codeService :CodeService ,  private router: Router,
    ) {}

  ngOnInit(): void {

    this._geCode();

  }


  private _geCode() {
    this.codeService.getCode().subscribe((codepromo) => {
      this.codepromo = codepromo;
    });
  }
  
  updateUser(codeid: string) {
    this.router.navigateByUrl(`codepromo/form/${codeid}`);
  }

}
