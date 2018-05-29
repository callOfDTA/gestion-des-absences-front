import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { ListeAbsenceEmployeComponent } from "./liste-absence-employe/liste-absence-employe.component";
import { DemoComponent } from "./demo/demo.component";

import { AbsenceService } from "./service/absence.service";

const appRoutes: Routes = [
  //{ path: "accueil", component: AccueilComponent },

  { path: "demo", component: DemoComponent },

  { path: "absences/:matricule", component: ListeAbsenceEmployeComponent },

  {
    path: "absences/:matricule/nouvelle",
    component: DemoComponent
  },

  { path: "", redirectTo: "/demo", pathMatch: "full" },

  { path: "**", redirectTo: "/demo", pathMatch: "full" } // page non trouvée
];

@NgModule({
  declarations: [AppComponent, ListeAbsenceEmployeComponent, DemoComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { onSameUrlNavigation: "reload" })
  ],
  providers: [AbsenceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
