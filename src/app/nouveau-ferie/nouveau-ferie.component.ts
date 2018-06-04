import { Component, OnInit } from '@angular/core';
import { Absence, Ferie, EnumType, Collaborateur } from "../model";
import { AbsenceService } from "../service/absence.service";
import { FerieService } from "../service/ferie.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-nouveau-ferie',
  templateUrl: './nouveau-ferie.component.html',
  styleUrls: ['./nouveau-ferie.component.css']
})
export class NouveauFerieComponent implements OnInit {
  ferie: Ferie = new Ferie();
  absence: Absence = new Absence();
  collaborateurs: Collaborateur[] = [];
  typeConge: EnumType = EnumType.RTT_EMPLOYEUR;
  jourSemaine: string;
  submitted = false;
  msgError:any ={
    date : "",
    motif : ""
  }

  constructor(
    private ferieService: FerieService,
    private absenceService: AbsenceService,
  ) { }

  ngOnInit() {
  }

  submit() {
    this.absenceService
      .listerCollaborateur()
      .subscribe(cols => (this.collaborateurs = cols), err => console.log(err));

    this.ferieService
      .ajouterJourFerie(this.ferie)
      .subscribe(a => {
        console.log(this.ferie);
       this.ferie = a;
      }, (err: HttpErrorResponse) => {
        if (err.error == "Erreur : La date doit être au moins supérieur d'un jour au jour actuel"){
          this.msgError.date = err.error;
        }
      });

      this.absenceService
      .ajouterAbsence(this.absence)
      .subscribe(a => {
        console.log(this.absence);
       this.absence = a;
      }, (err: HttpErrorResponse) => {
        if (err.error == "Erreur : La date de fin doit être supérieur à la date de début"){
          this.msgError.date = err.error;
        } else if (err.error == "Erreur : le type de congé est CONGE SANS SOLDE donc le motif est obligatoire"){
          this.msgError.motif = err.error;
        }
        else if (err.error == "Erreur : La date de début doit être au moins supérieur d'un jour au jour actuel"){
          this.msgError.date = err.error;
        }
      });
  }
}
