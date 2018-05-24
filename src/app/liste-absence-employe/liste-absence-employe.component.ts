import { Component, OnInit } from "@angular/core";
import { Absence, EnumStatut, EnumType, Collaborateur } from "../model";
import { AbsenceService } from "../service/absence.service";
import {
  RouterModule,
  Routes,
  ActivatedRoute,
  ParamMap
} from "@angular/router";

@Component({
  selector: "app-liste-absence-employe",
  templateUrl: "./liste-absence-employe.component.html",
  styleUrls: ["./liste-absence-employe.component.css"]
})
export class ListeAbsenceEmployeComponent implements OnInit {
  absences: Absence[] = [];
  constructor(
    private absenceService: AbsenceService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    /*this.absences = [
      new Absence(
        "10-12-2018",
        "30-12-2018",
        EnumType.CONGE_SANS_SOLDE,
        EnumStatut.EN_ATTENTE
      ),
      new Absence("01-12-2018", "10-12-2018", EnumType.RTT, EnumStatut.REJETEE)
    ];*/
    /*this.absenceService.listerAbsence().subscribe(abs => (this.absences = abs)),
      err => console.log(err);*/
    console.log(this._route.snapshot.paramMap.get("matricule"));
    this.absenceService
      .listerAbsenceEmploye(this._route.snapshot.paramMap.get("matricule"))
      .subscribe(abs => (this.absences = abs), err => console.log(err));
  }
}
