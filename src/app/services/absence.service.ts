import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Absence, EnumStatut, EnumType } from '../models';

const URL_BACKEND = environment.apiUrl;

@Injectable()
export class AbsenceService {

  constructor(private _http:HttpClient) { }

  ajouterAbsence(absence:Absence):Observable<Absence> {
    return this._http.post<Absence>(`${URL_BACKEND}/absences/nouveau`, absence);
  }

}
