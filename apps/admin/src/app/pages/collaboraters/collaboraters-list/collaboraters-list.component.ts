import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collaborater, CollaboraterService } from '@eshop/products';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'admin-collaboraters-list',   
  templateUrl: './collaboraters-list.component.html',
  styles: [
  ]
})
export class CollaboratersListComponent implements OnInit {
  collabs: Collaborater[] = [];


  constructor(private collabservice: CollaboraterService,    private messageService : MessageService,

    private router: Router) { 
 }

  ngOnInit(): void {
    this._getcollab();

  }
  private _getcollab(){ 

    this.collabservice.getCollabs().subscribe( (p) => { 


      this.collabs = p;
    }
      
      
      )
  }

  deleteCollab(userId: string) {
  
    this.collabservice.deleteCollab(userId).subscribe( () => { 
      this._getcollab();
      this.messageService.add({severity:'success', summary:' success', detail:'collaborater deleted'});
    });

  
  }
  updateCollab(collabid: string) {
    this.router.navigateByUrl(`collab/form/${collabid}`);
  }
}
