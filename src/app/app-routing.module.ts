import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListLivrosComponent } from './components/list-livros/list-livros.component';
import { FormLivroComponent } from './components/form-livro/form-livro.component';
import { EditLivroComponent } from './components/edit-livro/edit-livro.component';

const routes: Routes = [
  {path: '', component: FormLivroComponent},
  {path: 'list-livros', component: ListLivrosComponent},
  {path: 'list-livros/edit-livro', component: EditLivroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
