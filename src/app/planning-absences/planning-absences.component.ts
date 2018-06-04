import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Absence, EnumStatut, EnumType, Collaborateur, Colors } from "../model";
import { AbsenceService } from "../service/absence.service";
import {
  RouterModule,
  Routes,
  ActivatedRoute,
  ParamMap
} from "@angular/router";
import { setHours, setMinutes, setDayOfYear, setDay } from 'date-fns';
import { CalendarEvent, CalendarDateFormatter } from 'angular-calendar';
import { CustomDateFormatter } from './custom-date-formatter.provider';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-planning-absences',
  templateUrl: './planning-absences.component.html',
  styleUrls: ['./planning-absences.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ]
})

export class PlanningAbsencesComponent implements OnInit {
  absences: Absence[] = [];
  collaborateurs: Collaborateur[] = [];
  RTT: number = 0;
  cmpt: boolean = false;
  matricule: string = "";

  locale: string = 'fr';

  view: string = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  color: any;

  constructor(
    private absenceService: AbsenceService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.matricule = this._route.snapshot.paramMap.get("matricule");
    this.absenceService
    .listerAbsenceEmploye(this.matricule)
    .subscribe(abs => {
      this.absences = abs
      this.absences.forEach(
        absence => {
          if(absence.typeConge == "CONGE_SANS_SOLDE") {
            this.color=Colors.CONGE_SANS_SOLDE;
          }
          if(absence.typeConge == "CONGE_PAYE") {
            this.color=Colors.CONGE_PAYE;
          }
          if(absence.typeConge == "RTT") {
            this.color=Colors.RTT;
          }
          /*si le type conge FERIE est rajouté
          if(absence.typeConge == "FERIE") {
            this.color=Colors.FERIE;
          }*/
          this.events.push(
          {
            title: absence.typeConge,
            start: new Date(absence.dateDebut),
            end: new Date(absence.dateFin),
            color: this.color
          }
        )
      }
      )
    }
     , err => console.log(err));

    this.absenceService
      .listerCollaborateur()
      .subscribe(cols => (this.collaborateurs = cols).forEach, err => console.log(err));
    }
}
