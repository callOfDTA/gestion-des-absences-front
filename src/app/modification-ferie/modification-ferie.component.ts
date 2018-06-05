import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ferie } from '../model';
import { FerieService } from '../service/ferie.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-modification-ferie',
  templateUrl: './modification-ferie.component.html',
  styleUrls: ['./modification-ferie.component.css']
})
export class ModificationFerieComponent implements OnInit {
  ferie:Ferie = new Ferie();
  id: number;
  msgError:any ={
    date : "",
    motif : ""
  }
  constructor(private _FerServ: FerieService,
    private _route: ActivatedRoute,
    private router: Router) {

     }

  ngOnInit() {
    this.id = +this._route.snapshot.paramMap.get("id");
    this._FerServ.listerFerieID(this.id).subscribe((f:Ferie) => {
      this.ferie = f;

    });
  }
  submit() {
    this._FerServ
      .modifierFerier(this.ferie)
      .subscribe((f:Ferie) => {
        console.log(this.ferie);
       this.ferie = f;
       this.onClickRedirect();
      }, (err: HttpErrorResponse) => {
        if (err.error == "Erreur : La date doit être au moins supérieur d'un jour au jour actuel"){
          this.msgError.date = err.error;
        }
      });
  }
  onClickRedirect (){
    this.router.navigate(["/ferie/"]);
  }
}
