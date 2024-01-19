import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Autor } from '../../../models/models';
import { AutoresService } from '../../../services/autores.service';

@Component({
  selector: 'app-edit-autores',
  templateUrl: './edit-autores.component.html',
  styleUrls: ['./edit-autores.component.css']
})
export class EditAutoresComponent {
  autor: Autor = new Autor(0, 0);

  @Output() public autorUpdated = new EventEmitter<Autor>();

  constructor(
    private autoresService: AutoresService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => {
        const autorId = +params['id'];
        return this.autoresService.getAutorById(autorId);
      })
    ).subscribe((autor: Autor) => {
      this.autor = autor;
    });
  }

  public editAutor(autor: Autor): void {
    

    console.log('Autor encontrado para edição:', autor);

    // Atualiza os dados necessários do autor
    autor.autorNome = this.autor.autorNome;

    this.continuarEdicaoAutor(autor);
  }

  private continuarEdicaoAutor(autor: Autor): void {
    console.log('Continuando edição do autor:', autor);

    this.autoresService.editAutor(autor).subscribe((autores: Autor) => {
      console.log('Autor editado com sucesso. Novos autores:', autores);
      this.autorUpdated.emit(autor);
    });
  }
}
