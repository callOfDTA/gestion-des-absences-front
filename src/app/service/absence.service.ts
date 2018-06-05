import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable, Subject, ReplaySubject } from "rxjs";
import { Absence, EnumStatut, EnumType, Collaborateur, Ferie, Colors } from "../model";

import { map, filter, tap } from "rxjs/operators";
import { environment } from "../../environments/environment";

const URL_BACKEND = environment.apiUrl;

@Injectable()
export class AbsenceService {
  private subjectAbsence = new ReplaySubject<Absence>(3);

  get subjectAbsenceObs() {
    return this.subjectAbsence.asObservable();
  }

  constructor(private _http: HttpClient) { }

  listerAbsence(): Observable<Absence[]> {
    return this._http.get<Absence[]>(`${URL_BACKEND}/absences`);
  }

  listerAbsenceEmploye(matricule: string): Observable<Absence[]> {
    return this._http.get<Absence[]>(
      `${URL_BACKEND}/absences?collaborateur=${matricule}`
    );
  }

  listerCollaborateur(): Observable<Collaborateur[]> {
    return this._http.get<Collaborateur[]>(`${URL_BACKEND}/collaborateurs`);
  }

  listerAbsenceID(id: number): Observable<Absence> {
    return this._http.get<Absence>(`${URL_BACKEND}/absences/${id}`);
  }

  listerAbsenceRTTEmployeur(typeConge: EnumType): Observable<Absence[]> {
    return this._http.get<Absence[]>(`${URL_BACKEND}/absences?conge=${typeConge}`);
  }

  supprimerParAbsence(id): Observable<any> {
    return this._http.post<any>(`${URL_BACKEND}/absences/${id}`, id.valueOf());
  }

  ajouterAbsence(absence: Absence, matricule: string): Observable<Absence> {
    return this._http.post<Absence>(
      `${URL_BACKEND}/absences/${matricule}/nouvelle`,
      absence
    );
  }

  /*ajouterAbsenceRTT(absence: Absence, ): Observable<Absence> {
    return this._http
      .post<Absence>(`${URL_BACKEND}/absences/${collaborateurs.matricule}/nouvelle}`,
        absence)
      .pipe(
        tap(col => {
          this.subjectAbsence.next(new Absence());
        })
      );
  */

  modifierAbsence(absence: Absence): Observable<Absence> {
    return this._http.put<Absence>(`${URL_BACKEND}/absences/${absence.collaborateur.matricule}/modifier/${absence.id}`, absence);
  }
}
