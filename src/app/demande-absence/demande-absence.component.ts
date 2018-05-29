import { Component, OnInit } from "@angular/core";
import { Absence } from "../models";
import { AbsenceService } from "../services/absence.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-demande-absence",
  templateUrl: "./demande-absence.component.html",
  styleUrls: ["./demande-absence.component.css"]
})
export class DemandeAbsenceComponent implements OnInit {
  absence: Absence = new Absence("", "", null, null, "", null);
  submitted = false;
  msgError:any ={
    date : "",
    motif : ""
  }
  constructor(private _absServ: AbsenceService) {}

  ngOnInit() {}
  submit() {
    this._absServ
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
