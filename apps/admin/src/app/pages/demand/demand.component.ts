import { Component, OnInit } from '@angular/core';
import { Demand } from '../../models/demand';
import { DemandService } from '../../demand.service';
import { Appel } from '../../models/appel';
import { AppelService } from '../../appel.service';

@Component({
  selector: 'admin-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.css']
 
})
export class DemandComponent implements OnInit {
  demands: Demand[];
  appels: Appel[];
  selectedDemand: Demand;
  operation: string;
  showAddDialog = false;
  globalFilterValue: string;
  desc:any;
  newDemand:any ;
  id : number ;
  

  constructor(
    private demandService: DemandService,
    private appelService: AppelService,

    ) { 
      this.newDemand ={
        id: this.id,
        datedemand:new Date,
        prixunite: null,
        appelDemand: null,
          user: null,
          description:null 
      };
       this.id=this.newDemand.id;
    }

  ngOnInit(): void {
    this.getDemands();
    this.getAppels();
    this.getDescriptions();
   
      
    this.operation = 'Add';
  }

  // Récupérer la liste des demandes
  getDemands(): void {
    this.demandService.getDemands()
      .subscribe(demands => this.demands = demands);
  }

  getAppels(): void {
    this.appelService.getAppels()
    .subscribe(appels => this.appels = appels);
}
getDescriptions():void{
  this.demandService.getDescription()
  .subscribe(descriptions => this.desc = descriptions);
}

// eslint-disable-next-line @typescript-eslint/member-ordering


  // Ajouter une nouvelle demande
  addDemand(demand: Demand): void {
    this.demandService.addDemand(demand).subscribe(
      (createdDemand: Demand) => {
        // Handle success
        console.log('demand created:', createdDemand);
        this.showAddDialog = false; // Close the dialog
        this.getDemands();
        this.newDemand=demand; // Refresh the question list
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  addassign(demand: Demand): void {
    this.demandService.getId(demand.description).subscribe((response: number) => {
      this.id = response;
      console.log(demand);
      console.log("id :", this.id);
      this.demandService.ajouterEtaffecterDemand(demand, this.id).subscribe((createdDemand: Demand) => {
        // Handle success
       
        this.showAddDialog = false; // Close the dialog
        this.getDemands();
        this.newDemand = demand; // Refresh the question list
      },
      (error: any) => {
        console.error(error);
      });
    });
  }
  

  // Mettre à jour une demande existante
  updateDemand(demand: Demand): void {
    if (!demand || !demand.id) { return; }
    this.demandService.updateDemand(demand)
      .subscribe(() => {
        const index = this.demands.findIndex(d => d.id === demand.id);
        this.demands[index] = demand;
        this.selectedDemand = null;
      });
  }

  // Supprimer une demande existante
  deleteDemand(demand: Demand): void {
    if (!demand || !demand.id) { return; }
    this.demands = this.demands.filter(d => d !== demand);
    this.demandService.deleteDemand(demand.id).subscribe();
    this.selectedDemand = null;
  }

  // Sélectionner une demande pour la modifier ou la supprimer
  selectDemand(demand: Demand): void {
    if (!demand || !demand.id) { return; }
    this.selectedDemand = Object.assign({}, demand);
    this.operation = 'Update';
  }

  // Annuler la sélection d'une demande
  cancel(): void {
    this.selectedDemand = null;
    this.operation = 'Add';
  }
}
