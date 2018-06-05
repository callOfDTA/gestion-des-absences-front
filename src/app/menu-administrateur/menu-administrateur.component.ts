import { Component, OnInit } from "@angular/core";
import { Collaborateur } from "../model";
import {
  RouterModule,
  Routes,
  ActivatedRoute,
  ParamMap,
  Router
} from "@angular/router";
import { AbsenceService } from "../service/absence.service";

@Component({
  selector: 'app-menu-administrateur',
  templateUrl: './menu-administrateur.component.html',
  styleUrls: ['./menu-administrateur.component.css']
})
export class MenuAdministrateurComponent implements OnInit {
  collaborateur: Collaborateur;
  matricule: string = "";
  constructor(
    private absenceService: AbsenceService,
    private _route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.matricule = this._route.snapshot.paramMap.get("matricule");
    this.absenceService
      .listerCollaborateur()
      .subscribe((cols) => (
      cols.forEach(c => {
        if(c.matricule==this.matricule){
          this.collaborateur=c;
        }
      })

      ), err => console.log(err));
  }
  onClickListeAbsenceEmploye() {
    this.router.navigate(["/absences/" + this.matricule]);
  }
  onClickPanningAbsenceEmploye(){
    this.router.navigate(["/absences/" + this.matricule + "/planning/"]);
  }
  onClickJourFerie(){
    this.router.navigate(["/ferie/" + this.matricule]);
  }
  deconnexion(){
    this.router.navigate(["/accueil"]);
  }
}
