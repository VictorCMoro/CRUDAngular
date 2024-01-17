import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListLivrosComponent } from './components/list-livros/list-livros.component';
import { FormLivroComponent } from './components/form-livro/form-livro.component';
import { FormsModule } from '@angular/forms';
import { EditLivroComponent } from './components/edit-livro/edit-livro.component';

@NgModule({
  declarations: [
    AppComponent,
    ListLivrosComponent,
    FormLivroComponent,
    EditLivroComponent
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
