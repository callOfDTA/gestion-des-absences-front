import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable, Subject, ReplaySubject } from "rxjs";
import { Absence, EnumStatut, EnumType, Collaborateur, Ferie, Colors } from "../model";

import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";

const URL_BACKEND = environment.apiUrl;

@Injectable()
export class FerieService {

  constructor(private _http: HttpClient) {}

  listerFerie(): Observable<Ferie[]> {
    return this._http.get<Ferie[]>(`${URL_BACKEND}/feries`);
  }

  supprimerParJourFerie(id): Observable<any> {
    return this._http.post<any>(`${URL_BACKEND}/feries/${id}`, id.valueOf());
  }

  ajouterJourFerie(ferie:Ferie):Observable<Ferie> {
    return this._http.post<Ferie>(`${URL_BACKEND}/feries/nouveau`, ferie);
  }
  listerFerieID(id: number): Observable<Ferie> {
    return this._http.get<Ferie>(`${URL_BACKEND}/feries/${id}`);
  }

  modifierFerier(ferie: Ferie): Observable<Ferie> {
    return this._http.put<Ferie>(`${URL_BACKEND}/feries/modifier/${ferie.id}`, ferie);
  }
}
