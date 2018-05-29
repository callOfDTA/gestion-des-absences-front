export class Absence {
  constructor(dateDebut:string,dateFin:string,typeConge:EnumType,statut:EnumStatut,motif:string, collaborateur:Collaborateur) {
  }
}

export class Collaborateur{
  constructor(matricule:string){}
}
export enum EnumStatut {
  EN_ATTENTE = "EN_ATTENTE",
  INITIALE = "INITIALE",
  VALIDEE = "VALIDEE",
  REJETEE = "REJETEE"
}
export enum EnumType {
  CONGE_PAYE = "CONGE_PAYE",
  RTT = "RTT",
  CONGE_SANS_SOLDE = "CONGE_SANS_SOLDE"
}
