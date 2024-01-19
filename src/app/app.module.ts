import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListLivrosComponent } from './components/list-livros/list-livros.component';
import { FormLivroComponent } from './components/form-livro/form-livro.component';
import { FormsModule } from '@angular/forms';
import { EditLivroComponent } from './components/edit-livro/edit-livro.component';
import { ListAreasComponent } from './components/list-areas/list-areas.component';
import { ListAutoresComponent } from './components/list-autores/list-autores.component';
import { AreaDetailsComponent } from './components/list-areas/area-details/area-details.component';
import { AddAreaComponent } from './components/list-areas/add-area/add-area.component';
import { AddAutorComponent } from './components/list-autores/add-autor/add-autor.component';
import { EditAutoresComponent } from './components/list-autores/edit-autores/edit-autores.component';
import { EditAreaComponent } from './components/list-areas/edit-area/edit-area.component';


@NgModule({
  declarations: [
    AppComponent,
    ListLivrosComponent,
    FormLivroComponent,
    EditLivroComponent,
    ListAreasComponent,
    ListAutoresComponent,
    AreaDetailsComponent,
    AddAreaComponent,
    AddAutorComponent,
    EditAreaComponent,
    EditAutoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
