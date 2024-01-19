import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListLivrosComponent } from './components/list-livros/list-livros.component';
import { FormLivroComponent } from './components/form-livro/form-livro.component';
import { EditLivroComponent } from './components/edit-livro/edit-livro.component';
import { ListAreasComponent } from './components/list-areas/list-areas.component';
import { ListAutoresComponent } from './components/list-autores/list-autores.component';
import { AreaDetailsComponent } from './components/list-areas/area-details/area-details.component';
import { AddAreaComponent } from './components/list-areas/add-area/add-area.component';
import { AddAutorComponent } from './components/list-autores/add-autor/add-autor.component';
import { EditAreaComponent } from './components/list-areas/edit-area/edit-area.component';
import { EditAutoresComponent } from './components/list-autores/edit-autores/edit-autores.component';

const routes: Routes = [
  {path: '', component: FormLivroComponent},
  {path: 'list-livros', component: ListLivrosComponent},
  {path: 'list-livros/edit-livro/:id', component: EditLivroComponent},
  {path: 'list-areas', component: ListAreasComponent},
  {path: 'autor-list', component: ListAutoresComponent},
  {path: 'autor-list/add-autor', component: AddAutorComponent},
  {path: 'list-areas/details', component: AreaDetailsComponent},
  {path: 'list-areas/cadastrar', component: AddAreaComponent},
  {path: 'list-areas/edit-area/:id', component: EditAreaComponent},
  {path: 'autor-list/edit-autor/:id', component: EditAutoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
