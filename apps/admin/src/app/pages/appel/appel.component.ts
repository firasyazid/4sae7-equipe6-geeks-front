import { Component, OnInit } from '@angular/core';
import { Appel } from '../../models/appel';
import { AppelService } from '../../appel.service';
import { Demand } from '../../models/demand';
import { DemandService } from '../../demand.service';

@Component({
  selector: 'admin-appel',
  templateUrl: './appel.component.html',
  styleUrls: ['./appel.component.scss']

})
export class AppelComponent implements OnInit {
  appels: Appel[];
  demands:Demand[];
  showAddDialog = false;
  globalFilterValue: string;
  

 
  constructor(
    private appelService: AppelService,
    private demandService:DemandService
  ) { }

  ngOnInit(): void {
   
      this.getAppels();
      
    }
   
 
  // Récupérer la liste des appels
  getAppels(): void {
    this.appelService.getAppels()
    .subscribe(appels => this.appels = appels);
}


   
// eslint-disable-next-line @typescript-eslint/member-ordering
newAppel: Appel = {
  id: null,
  datedebut:new Date,
  datefin:new Date,
  description: '',
  quantity: null,

  materials: [],
    demands: [],
    user: null
};
  

  // Ajouter un nouvel appel
  addAppel(appel: Appel): void {
    this.appelService.addAppel(appel).subscribe(
      (createdAppel: Appel) => {
        // Handle success
        console.log('Appel created:', createdAppel);
        this.showAddDialog = false; 
        this.getAppels(); 
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  // Mettre à jour un appel existant
  updateAppel(appel: Appel): void {
    this.appelService.updateAppel(appel)
      .subscribe(() => {
        const index = this.appels.findIndex(a => a.id === appel.id);
        this.appels[index] = appel;
      });
  }

  // Supprimer un appel existant
  deleteAppel(appel: Appel): void {
    this.appels = this.appels.filter(a => a !== appel);
    this.appelService.deleteAppel(appel.id).subscribe();
  }
}
