import { Etudiant } from "./etudiant";



export class Contrat{
  idContrat: number;
  dateDebutContrat:Date=new Date();
  dateFinContrat:Date=new Date();
  archive: boolean;
  specialite:string;
  etudiant:Etudiant;


}
