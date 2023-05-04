import { Component, OnInit } from '@angular/core';
import { Demand } from '../../models/demand';
import { DemandService } from '../../demand.service';
import { Appel } from '../../models/appel';
import { AppelService } from '../../appel.service';

@Component({
  selector: 'admin-demand',
  templateUrl: './demand.component.html',
 
})
export class DemandComponent implements OnInit {
  demands: Demand[];
  appels: Appel[];
  selectedDemand: Demand;
  operation: string;
  showAddDialog = false;
  globalFilterValue: string;
  

  constructor(
    private demandService: DemandService,
    private appelService: AppelService,

    ) { }

  ngOnInit(): void {
    this.getDemands();
    this.getAppels();
      
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

// eslint-disable-next-line @typescript-eslint/member-ordering
newDemand: Demand = {
  id: null,
  datedemand:new Date,
  prixunite: null,
  appelDemand: null,
    user: null
};

  // Ajouter une nouvelle demande
  addDemand(demand: Demand): void {
    this.demandService.addDemand(demand).subscribe(
      (createdDemand: Demand) => {
        // Handle success
        console.log('demand created:', createdDemand);
        this.showAddDialog = false; // Close the dialog
        this.getDemands(); // Refresh the question list
      },
      (error: any) => {
        console.error(error);
      }
    );
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
