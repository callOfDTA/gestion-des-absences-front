export class Absence {
  _dateDebut: Date;
  _dateFin: Date;
  _typeConge: EnumType;
  _statut: EnumStatut;
  _collaborateur: Collaborateur;

  constructor(dateDebut, dateFin, typeConge, statut, collaborateur) {
    this._dateDebut = dateDebut;
    this._dateFin = dateFin;
    this._typeConge = typeConge;
    this._statut = statut;
    this._collaborateur = collaborateur;
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
  _matricule: string;

  constructor(matricule) {
    this._matricule = matricule;
  }
}
