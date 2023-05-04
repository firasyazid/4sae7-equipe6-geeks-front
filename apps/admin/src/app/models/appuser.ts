import { Demand } from "./demand";

export class AppUser {
    idu: number;
    userName: string;
    password: string;
   // role: UserRole;
    nom: string;
    prenom: string;
    phone: number;
    email: string;
    salaire: number;
    work_day_number: number;
    holiday_number: number;
    social_number: string;
    adresse: string;
   // specialite: Specialite;
    demands: Demand[];
  }
  