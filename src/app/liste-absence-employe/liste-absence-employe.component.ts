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
  collaborateur: Collaborateur;
  RTT: number = 0;
  matricule: string = "";
  constructor(
    private absenceService: AbsenceService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.matricule = this._route.snapshot.paramMap.get("matricule");
    this.absenceService.listerAbsenceEmploye(this.matricule).subscribe(
      abs => {
        this.absences = abs;
        abs.map(abs => (this.collaborateur = abs._collaborateur));
        this.RTT = this.collaborateur.jourRTT;
      },

      err => console.log(err)
    );
  }
}

//console.log(this.absences);
/*this.collaborateur = abs
            .map(abs => abs._collaborateur)
            .find(
              col =>
                col.matricule ==
                this._route.snapshot.paramMap.get("matricule")
            );
          console.log(this.collaborateur);

          //console.log(this.collab);
          this.RTT = this.collaborateur.jourRTT;*/
