import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeGuard } from '../api-authorization/authorize.guard';
import { HomeComponent } from './home/home.component';
import { TokenComponent } from './token/token.component';
import { TableComponent } from './module/AngularMaterial/component/table/table.component';
import { AngularMaterialComponent } from './module/AngularMaterial/AngularMaterial.component';
import { AmchartComponent } from './module/Amchart/Amchart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'token', component: TokenComponent, canActivate: [AuthorizeGuard] },

  { path: 'angular-material', component: AngularMaterialComponent, pathMatch: 'full' },
  { path: 'amcharts', component: AmchartComponent, pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
