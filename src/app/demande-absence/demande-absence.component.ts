import { Component, OnInit } from "@angular/core";
import { Absence } from "../model";
import { AbsenceService } from "../service/absence.service";
import { HttpErrorResponse } from "@angular/common/http";
import {
  RouterModule,
  Routes,
  ActivatedRoute,
  ParamMap,
  Router
} from "@angular/router";

@Component({
  selector: "app-demande-absence",
  templateUrl: "./demande-absence.component.html",
  styleUrls: ["./demande-absence.component.css"]
})
export class DemandeAbsenceComponent implements OnInit {
  absence: Absence = new Absence();
  submitted = false;
  matricule: string = "";
  msgError: any = {
    date: "",
    motif: ""
  };
  constructor(
    private _absServ: AbsenceService,
    private _route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.matricule = this._route.snapshot.paramMap.get("matricule");
  }

  submit() {
    this._absServ.ajouterAbsence(this.absence, this.matricule).subscribe(
      a => {
        this.absence = a;
        this.router.navigate(["/absences/" + this.matricule]);
      },
      (err: HttpErrorResponse) => {
        if (
          err.error ==
          "Erreur : La date de fin doit être supérieur à la date de début"
        ) {
          this.msgError.date = err.error;
        } else if (
          err.error ==
          "Erreur : le type de congé est CONGE SANS SOLDE donc le motif est obligatoire"
        ) {
          this.msgError.motif = err.error;
        } else if (
          err.error ==
          "Erreur : La date de début doit être au moins supérieur d'un jour au jour actuel"
        ) {
          this.msgError.date = err.error;
        }
      }
    );
  }
}
