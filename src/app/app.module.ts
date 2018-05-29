import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
//npm i angular-calendar@0.24.1
import { CalendarModule } from 'angular-calendar';
import { FormsModule } from '@angular/forms';
//npm install --save @ng-bootstrap/ng-bootstrap
import { NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from "./app.component";
import { ListeAbsenceEmployeComponent } from "./liste-absence-employe/liste-absence-employe.component";
import { DemoComponent } from "./demo/demo.component";
import { PlanningAbsencesComponent } from './planning-absences/planning-absences.component';
import { CalendrierHeaderComponent } from './calendrier-header/calendrier-header.component';

import { DemandeAbsenceComponent } from "./demande-absence/demande-absence.component";

import { AbsenceService } from "./service/absence.service";
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ModificationAbsenceComponent } from './modification-absence/modification-absence.component';

registerLocaleData(localeFr);

const appRoutes: Routes = [
  //{ path: "accueil", component: AccueilComponent },

  { path: "demo", component: DemoComponent },
  { path: "absence/nouveau", component: DemandeAbsenceComponent },
  { path: "absences/:matricule", component: ListeAbsenceEmployeComponent },
  { path: "absences/:matricule/nouvelle", component: DemandeAbsenceComponent},

  { path: "planning", component: PlanningAbsencesComponent },

  { path: "", redirectTo: "/demo", pathMatch: "full" },

  { path: "**", redirectTo: "/demo", pathMatch: "full" } // page non trouvée
];

@NgModule({
  declarations: [
    AppComponent,
    ListeAbsenceEmployeComponent,
    DemoComponent,
    PlanningAbsencesComponent,
    CalendrierHeaderComponent,
    DemandeAbsenceComponent,
    DateTimePickerComponent,
    ModificationAbsenceComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { onSameUrlNavigation: "reload" }),
    NgbDatepickerModule.forRoot(),
    NgbTimepickerModule.forRoot(),
    CalendarModule.forRoot()],
  providers: [AbsenceService],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));
