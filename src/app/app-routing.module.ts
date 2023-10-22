import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TypecanactivateGuard } from './typecanactivate.guard';

const routes: Routes = [
//   {path: "forms", component: ReactiveformComponent, canActivate: [TypecanactivateGuard],
//   children: [
//   {path: "pipes", component: PipesComponent}
// ]},
// {path: "crud", component: CrudComponent}
 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
