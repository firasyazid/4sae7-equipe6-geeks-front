import { Appel } from "./appel";
import { AppUser } from "./appuser";

export class Demand {
    id: number;
    prixunite: number;
    datedemand: Date;
    appelDemand: Appel;
    user: AppUser;
  }