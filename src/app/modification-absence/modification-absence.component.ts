import { Component, OnInit } from '@angular/core';
import { Absence } from '../model';
import { AbsenceService } from '../service/absence.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modification-absence',
  templateUrl: './modification-absence.component.html',
  styleUrls: ['./modification-absence.component.css']
})
export class ModificationAbsenceComponent implements OnInit {
  absence: Absence = new Absence();
  id: number;
  submitted = false;
  msgError: any = {
    date: "",
    motif: ""
  }
  constructor(private _absServ: AbsenceService,
    private _route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = +this._route.snapshot.paramMap.get("id");
    this._absServ.listerAbsenceID(this.id).subscribe((a:Absence) => {
      this.absence = a;
    });
  }
  submit() {
    this._absServ
      .modifierAbsence(this.absence)
      .subscribe((a:Absence) => {
        this.absence = a;
        this.onClickRedirect();
      }, (err: HttpErrorResponse) => {
        if (err.error == "Erreur : La date de fin doit être supérieur à la date de début"){
          this.msgError.date = err.error;
        } else if (err.error == "Erreur : le type de congé est CONGE SANS SOLDE donc le motif est obligatoire"){
          this.msgError.motif = err.error;
        }
        else if (err.error == "Erreur : La date de début doit être au moins supérieur d'un jour au jour actuel"){
          this.msgError.date = err.error;
        }
        else if (err.error == "Erreur : status de votre demande incorrect " + this.absence.statut){
          this.msgError.date = err.error;
        }
      });

  }
  onClickCancel(matricule:string){
    this.router.navigate(["/absences/"+ matricule]);
  }

  onClickRedirect(){
    this.router.navigate(["/absences/"+ this.absence.collaborateur.matricule]);
  }
}
