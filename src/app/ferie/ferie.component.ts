import { Component, OnInit } from '@angular/core';
import { Absence, Ferie, EnumType } from "../model";
import { AbsenceService } from "../service/absence.service";
import { FerieService } from "../service/ferie.service";
import { HttpErrorResponse } from "@angular/common/http";
import {
  RouterModule,
  Routes,
  ActivatedRoute,
  ParamMap,
  Router
} from "@angular/router";

@Component({
  selector: 'app-ferie',
  templateUrl: './ferie.component.html',
  styleUrls: ['./ferie.component.css']
})
export class FerieComponent implements OnInit {
  feries: Ferie[] = [];
  absences: Absence[] = [];
  typeConge: EnumType = EnumType.RTT_EMPLOYEUR;
  jourSemaine: string;
  submitted = false;
  msgError:any ={
    date : "",
    motif : ""
  }

  constructor(
    private absenceService: AbsenceService,
    private ferieService: FerieService,
    private _route: ActivatedRoute,
    private router: Router
  ) { }

  onClickNewFerie() {
    this.router.navigate(["/ferie/nouveau"]);
  }

  onClickModifie(id) {
    this.router.navigate(["/ferie/modifie/", id]);
  }
  onClickSupprimer(id) {
    this.ferieService
      .supprimerParJourFerie(id)
      .subscribe(err => console.log(err));
    this.router.navigate(["/ferie"]);
  }

  ngOnInit() {
    // Récupération des jours fériés pour les insérer dans le tableau feries
    this.ferieService
      .listerFerie()
      .subscribe(cols => {
        cols.forEach(
          ferie => {
            this.feries.push(
            {
              id: ferie.id,
              date: ferie.date,
              type: EnumType.FERIE,
              jour: new Date(ferie.date),
              commentaire: ferie.commentaire
            })
          // Tri des jours fériés par date
          this.feries.sort(function(a: any, b: any) {
            return a.jour - b.jour;
          })}
        )
      }, err => console.log(err));

    // Récupération des RTT employeur pour les insérer dans le tableau feries
    this.absenceService
      .listerAbsenceRTTEmployeur(this.typeConge)
      .subscribe(abs => {
        this.absences = abs
        this.absences.forEach(
          absence => {
            this.feries.push(
            {
              id: absence.id,
              date: absence.dateDebut,
              type: absence.typeConge,
              jour: new Date(absence.dateDebut),
              commentaire: absence.motif
            });
            // Tri des RTT par date
            this.feries.sort(function(a: any, b: any) {
              return a.jour - b.jour;
            })
          }
        )
      }, err => console.log(err));
  }
}
