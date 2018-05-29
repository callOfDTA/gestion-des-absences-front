import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { Demo006Component } from "./demo006/demo006.component";
import { DemandeAbsenceComponent } from "./demande-absence/demande-absence.component";
import { AppComponent } from "./app.component";
import { ListeAbsenceEmployeComponent } from "./liste-absence-employe/liste-absence-employe.component";
import { DemoComponent } from "./demo/demo.component";
import { FormsModule } from "@angular/forms";

import { AbsenceService } from "./service/absence.service";

const appRoutes: Routes = [
  //{ path: "accueil", component: AccueilComponent },

  { path: "demo", component: DemoComponent },
  { path: "demo", component: Demo006Component },
  { path: "absence/nouveau", component: DemandeAbsenceComponent },
  { path: "absences/:matricule", component: ListeAbsenceEmployeComponent },
  { path: "absences/:matricule/nouvelle", component: DemandeAbsenceComponent},

  { path: "", redirectTo: "/demo", pathMatch: "full" },

  { path: "**", redirectTo: "/demo", pathMatch: "full" } // page non trouvée
];

@NgModule({
  declarations: [AppComponent, ListeAbsenceEmployeComponent, DemoComponent, Demo006Component,DemandeAbsenceComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { onSameUrlNavigation: "reload" }),
    FormsModule
  ],
  providers: [AbsenceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
