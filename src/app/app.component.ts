import { Component, EventEmitter, Output } from '@angular/core';
import { Empresa, Genero, Jogo } from './models/models';
import { JogosListService } from './services/jogos-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jogos.UI';
  jogos: Jogo[] = []
  empresas: Empresa[] = []
  genero: Genero[] = []

  @Output() jogosUpdated = new EventEmitter<Jogo[]>();

  constructor(private JogosListService: JogosListService){}

  ngOnInit(): void{
    this.JogosListService.getJogos().subscribe(
      (result: Jogo[]) => {
        
        this.jogos = result;
        console.log('Dados recebidos:', this.jogos);
      }
    );
    
  }

  updateJogos(jogos: Jogo[]){
    this.jogos = jogos;
  }

  deleteJogo(jogo: Jogo) {
    this.JogosListService.deleteJogo(jogo.JogoId).subscribe((jogos: Jogo[]) => this.jogosUpdated.emit(jogos));
  }
}

