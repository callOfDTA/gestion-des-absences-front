import { Component, OnInit } from "@angular/core";
import { Absence, EnumStatut, EnumType, Collaborateur } from "../model";
import { AbsenceService } from "../service/absence.service";
import {
  RouterModule,
  Routes,
  ActivatedRoute,
  ParamMap,
  Router
} from "@angular/router";

@Component({
  selector: "app-liste-absence-employe",
  templateUrl: "./liste-absence-employe.component.html",
  styleUrls: ["./liste-absence-employe.component.css"]
})
export class ListeAbsenceEmployeComponent implements OnInit {
  absences: Absence[] = [];
  collaborateurs: Collaborateur[] = [];
  matricule: string = "";
  collaborateurForm: any = {};
  flag: boolean = false;
  constructor(
    private absenceService: AbsenceService,
    private _route: ActivatedRoute,
    private router: Router
  ) {}
  onClickNewAbsence() {
    this.router.navigate(["/absences/" + this.matricule + "/nouvelle"]);
  }
  onClickmodifie(id) {
    this.router.navigate(["/absences/" + this.matricule + "/modifie/" + id]);
  }
  onClicksupprimer(id) {
    this.absenceService
      .supprimerparabsence(id)
      .subscribe(err => console.log(err));
    this.router.navigate(["/absences/" + this.matricule]);
  }

  ngOnInit() {
    this.matricule = this._route.snapshot.paramMap.get("matricule");
    this.absenceService
      .listerAbsenceEmploye(this.matricule)
      .subscribe(abs => (this.absences = abs), err => console.log(err));

    this.absenceService
      .listerCollaborateur()
      .subscribe(cols => (this.collaborateurs = cols), err => console.log(err));
  }
}
