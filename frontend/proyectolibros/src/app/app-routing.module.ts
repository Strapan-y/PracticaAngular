import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLibroComponent } from './create-libro/create-libro.component';
import { ReadLibrosComponent } from './read-libros/read-libros.component';

const routes: Routes = [
 {
  path:'create-libro',
  component: CreateLibroComponent
 },
 {
  path:'read-libros',
  component: ReadLibrosComponent
 },
 {
  path:'**',
  redirectTo:'read-libros'
 }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
