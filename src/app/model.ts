export class Absence {
  _dateDebut: string;
  _dateFin: string;
  _typeConge: EnumType;
  _statut: EnumStatut;
  _collaborateur: Collaborateur;
  _id: number;

  constructor(id, dateDebut, dateFin, typeConge, statut, collaborateur) {
    this._dateDebut = dateDebut;
    this._dateFin = dateFin;
    this._typeConge = typeConge;
    this._statut = statut;
    this._collaborateur = collaborateur;
    this._id = id;
  }
}
export enum EnumStatut {
  EN_ATTENTE = "EN_ATTENTE",
  INITIALE = "INITIALE",
  VALIDEE = "VALIDEE",
  REJETEE = "REJETEE"
}
export enum EnumType {
  CONGE_PAYER = "Congés payés",
  RTT = "RTT",
  CONGE_SANS_SOLDE = "Congés sans solde"
}

export class Collaborateur {
  matricule: string;
  jourRTT: number;
  jourCongePaye: number;

  constructor(matricule, RTT, CP) {
    this.matricule = matricule;
    this.jourRTT = RTT;
    this.jourCongePaye = CP;
  }
}
