import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service, ProductsService } from '@eshop/products';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'admin-products-list',
  templateUrl: './products-list.component.html',
  styles: [
  ]
})
export class ProductsListComponent implements OnInit {
   products: Service[] = [];
 

  constructor(

    private productsService: ProductsService,
    private router: Router,
    private messageService : MessageService

  ){}

  ngOnInit(): void {

    this._getproducts();
  }


  private _getproducts(){ 

    this.productsService.getProducts().subscribe( (p) => { 


      this.products = p;
    }
      
      
      )
  }
  updateProduct(productid: string) {
    this.router.navigateByUrl(`products/form/${productid}`);
  }


  deleteService(categoryId: string) {
    this.productsService.deleteService(categoryId).subscribe( () => { 
      this._getproducts();
      this.messageService.add({severity:'success', summary:' success', detail:'service deleted'});
    
    });
    }
}
