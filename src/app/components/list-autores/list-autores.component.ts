import { Component, EventEmitter, Output } from '@angular/core';
import { Autor } from '../../models/models';
import { AutoresService } from '../../services/autores.service';

@Component({
  selector: 'app-list-autores',
  templateUrl: './list-autores.component.html',
  styleUrl: './list-autores.component.css'
})
export class ListAutoresComponent {
  autores: Autor[] = []
  @Output() autorUpdated = new EventEmitter<Autor[]>()

  constructor(private autorService: AutoresService){}

  public ngOnInit(){
    this.getAutores();
  }

  
  getAutores(){
    this.autorService.getAutores().subscribe((autorLivro) => this.autores = autorLivro )
  }

  

  deleteAutores(autor: Autor){
    this.autorService.deleteAutor(autor).subscribe((autores: Autor[]) => {
      this.autorUpdated.emit(autores)
      this.getAutores()
    })
  }
}
