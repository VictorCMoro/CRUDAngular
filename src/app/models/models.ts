export class Livro{
    livroId: number
    livroNome = ""
    ano: number
    areaNome = ""
    autor = ""
    areaId: number



    constructor(LivroId: number, ano: number, areaId: number){
        this.livroId = LivroId
        this.ano = ano
        this.areaId = areaId }
}

export class AreaDeConhecimento{
    areaId?: number
    areaNome = ""
    Livros: Livro[]

    constructor(AreaId:number, livros: Livro[]){
        this.areaId = AreaId
        this.Livros = livros
    }
}

export class Autor{
    AutorId: number
    Nome: string

    constructor(AutorId: number, nome: string){
        this.AutorId = AutorId
        this.Nome = nome
    }
}


