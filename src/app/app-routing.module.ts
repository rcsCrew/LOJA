import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HubComponent} from "./pages/hub/hub.component";
import {LoginComponent} from "./pages/login/login.component";

const routes: Routes = [
  { path: "", redirectTo: "hub", pathMatch:"full" },
  { path: "hub", component: HubComponent},
  { path: "login", component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
