import { Component, EventEmitter, Output } from '@angular/core';
import { Autor } from '../../models/models';
import { AutoresService } from '../../services/autores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-autores',
  templateUrl: './list-autores.component.html',
  styleUrl: './list-autores.component.css',
})
export class ListAutoresComponent {
  autores: Autor[] = [];
  @Output() autorUpdated = new EventEmitter<Autor[]>();

  constructor(private autorService: AutoresService, private router: Router) {}

  public ngOnInit() {
    this.getAutores();
  }

  public getAutores() {
    this.autorService
      .getAutores()
      .subscribe((autorLivro) => (this.autores = autorLivro));
  }

  public navigateToEditPage(autorId: number): void {
    this.router.navigate(['/autor-list/edit-autor', autorId]);
  }

  public deleteAutores(autor: Autor) {
    this.autorService.deleteAutor(autor).subscribe((autores: Autor[]) => {
      this.autorUpdated.emit(autores);
      this.getAutores();
    });
  }
}
