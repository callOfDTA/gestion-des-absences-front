import { Component, OnInit } from '@angular/core';
import { Absence, Ferie, EnumType } from "../model";
import { AbsenceService } from "../service/absence.service";
import { HttpErrorResponse } from "@angular/common/http";
import { ActivatedRoute, Router } from '@angular/router';
import { FerieService } from '../service/ferie.service';

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
    private ferieServ: FerieService,
    private _route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit() {
    this.ferieServ
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
  onClickRedirect (){
    this.router.navigate(["/ferie/" + this._route.snapshot.paramMap.get("matricule")]);
  }
}
