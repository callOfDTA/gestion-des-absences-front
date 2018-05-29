import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Demo006Component } from "./demo006/demo006.component";
import { DemandeAbsenceComponent } from "./demande-absence/demande-absence.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AbsenceService } from "./services/absence.service";

const appRoutes: Routes = [
  { path: "demo", component: Demo006Component },
  { path: "absence/nouveau", component: DemandeAbsenceComponent } //collaborateurs/:matricule/nouveau
];

@NgModule({
  declarations: [AppComponent, Demo006Component, DemandeAbsenceComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [AbsenceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
