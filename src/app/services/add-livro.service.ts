import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Livro } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class AddLivroService {
  private url = 'https://localhost:7198/api/Cadastro/AddLivro';
  constructor(private http: HttpClient) {}
  private imagensLivrosSource = new Map<number, string>(); // Usar um Map para associar imagens a livros
  imagemLivroAtual = new BehaviorSubject<string>('');

  atualizarImagemLivro(livroId: number, imagem: string) {
    this.imagensLivrosSource.set(livroId, imagem);
    this.imagemLivroAtual.next(imagem);
  }

  obterImagemLivro(livroId: number): string {
    return this.imagensLivrosSource.get(livroId) || '';
  }

  public addLivro(livro: Livro): Observable<Livro[]> {
    return this.http.post<Livro[]>(this.url, livro);
  }
}
