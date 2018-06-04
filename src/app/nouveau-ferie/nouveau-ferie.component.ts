import { Component, OnInit } from '@angular/core';
import { Absence, Ferie, EnumType } from "../model";
import { AbsenceService } from "../service/absence.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-nouveau-ferie',
  templateUrl: './nouveau-ferie.component.html',
  styleUrls: ['./nouveau-ferie.component.css']
})
export class NouveauFerieComponent implements OnInit {
  ferie: Ferie = new Ferie;
  absence: Absence = new Absence();
  typeConge: EnumType = EnumType.RTT_EMPLOYEUR;
  jourSemaine: string;
  submitted = false;
  msgError:any ={
    date : "",
    motif : ""
  }

  constructor(
    private absenceService: AbsenceService,
  ) { }

  ngOnInit() {
  }

  submit() {
    this.absenceService
      .ajouterJourFerie(this.ferie)
      .subscribe(a => {
        console.log(this.absence);
       this.ferie = a;
      }, (err: HttpErrorResponse) => {
        if (err.error == "Erreur : La date doit être au moins supérieur d'un jour au jour actuel"){
          this.msgError.date = err.error;
        }
      });
  }
}
