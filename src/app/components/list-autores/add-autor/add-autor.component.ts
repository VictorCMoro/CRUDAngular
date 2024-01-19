import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Autor } from '../../../models/models';
import { AutoresService } from '../../../services/autores.service';

@Component({
  selector: 'app-add-autor',
  templateUrl: './add-autor.component.html',
  styleUrl: './add-autor.component.css'
})
export class AddAutorComponent {
  @Input() autor: Autor = new Autor(0, 0)
  @Output() autoresUpdated = new EventEmitter<Autor[]>()


  constructor(private autorService: AutoresService){}

  addAutor(autor: Autor):void{
    autor.autorId = Math.floor(Math.random() * 101) 

    this.autorService.addAutor(autor).subscribe((autores: Autor[]) => this.autoresUpdated.emit(autores))
  }
}
