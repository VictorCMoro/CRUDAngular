import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListLivrosComponent } from './components/list-livros/list-livros.component';
import { FormLivroComponent } from './components/form-livro/form-livro.component';
import { EditLivroComponent } from './components/edit-livro/edit-livro.component';
import { ListAreasComponent } from './components/list-areas/list-areas.component';
import { ListAutoresComponent } from './components/list-autores/list-autores.component';
import { AreaDetailsComponent } from './components/area-details/area-details.component';
import { AddAreaComponent } from './components/add-area/add-area.component';

const routes: Routes = [
  {path: '', component: FormLivroComponent},
  {path: 'list-livros', component: ListLivrosComponent},
  {path: 'list-livros/edit-livro', component: EditLivroComponent},
  {path: 'list-areas', component: ListAreasComponent},
  {path: 'autor-list', component: ListAutoresComponent},
  {path: 'list-areas/details', component: AreaDetailsComponent},
  {path: 'list-areas/cadastrar', component: AddAreaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
