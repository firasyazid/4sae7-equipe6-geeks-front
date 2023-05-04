import { Appel } from "./appel";
import { AppUser } from "./appuser";

export class Material {
    id: number;
    ref: string;
    nommateriel: string;
    typemateriel: string; // ou enum si vous en avez défini un
    stock: number;
    prixunite: number;
    users: AppUser;
    appels: Appel;
  }