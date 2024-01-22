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

  public ngOnInit() {
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
    if(!autor.autorNome){
      alert('Preencha o nome do autor para editar.')
      return
    }

   
    this.autor.autorNome = autor.autorNome;

    this.continuarEdicaoAutor(autor);
  }

  private continuarEdicaoAutor(autor: Autor): void {
    console.log('Continuando edição do autor:', autor);

    this.autoresService.editAutor(autor).subscribe((autores: Autor) => {
      alert('Autor editado com sucesso. ');
      this.autorUpdated.emit(autor);
    });
  }
}
