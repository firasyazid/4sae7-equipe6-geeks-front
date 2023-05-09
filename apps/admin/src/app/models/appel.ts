import { AppUser } from "./appuser";
import { Demand } from "./demand";
import { Material } from "./material";

export class Appel {
    id: number;
    quantity: number;
    description: string;
    datedebut: Date;
    datefin: Date;
    materials: Material[];
    demands: Demand[];
    user: AppUser;
    [key: string]: any;
  }
  
  