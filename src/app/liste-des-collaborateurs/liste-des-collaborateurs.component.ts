import { Component, OnInit } from "@angular/core";
import { Absence, EnumStatut, EnumType, Collaborateur, EnumRole } from "../model";
import { AbsenceService } from "../service/absence.service";
import {
  RouterModule,
  Routes,
  ActivatedRoute,
  ParamMap,
  Router
} from "@angular/router";
@Component({
  selector: 'app-liste-des-collaborateurs',
  templateUrl: './liste-des-collaborateurs.component.html',
  styleUrls: ['./liste-des-collaborateurs.component.css']
})
export class ListeDesCollaborateursComponent implements OnInit {
  collaborateurs: Collaborateur[] = [];
  matricule: string = "";
  constructor(
    private absenceService: AbsenceService,
    private _route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.absenceService
      .listerCollaborateur()
      .subscribe(cols => (this.collaborateurs = cols), err => console.log(err));
  }
}
