export class Absence {
  id: number;
  dateDebut: string;
  dateFin: string;
  typeConge: EnumType;
  statut: EnumStatut;
  collaborateur: Collaborateur;
  motif: string;
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

export class Collaborateur {
  constructor(matricule: string, jourRTT: number, jourCongePaye: number) {}
}

export const Colors: any = {
  // En rouge
  CONGE_SANS_SOLDE: {
    primary: "#ad2121",
    secondary: "#FAE3E3"
  },
  // En bleu
  CONGE_PAYE: {
    primary: "#1e90ff",
    secondary: "#D1E8FF"
  },
  // En jaune
  RTT: {
    primary: "#e3bc08",
    secondary: "#FDF1BA"
  },
  // En vert
  FERIE: {
    primary: "#00FF00",
    secondary: "#76FF6B"
  }
};
