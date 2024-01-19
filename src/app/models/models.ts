export class Livro{
    livroId: number
    livroNome = ""
    ano: number
    areaNome = ""
    autorId: number
    autor = ""
    areaId: number



    constructor(LivroId: number, ano: number, areaId: number, AutorId: number){
        this.livroId = LivroId
        this.autorId = AutorId
        this.ano = ano
        this.areaId = areaId }
}

export class AreaDeConhecimento{
    areaId?: number
    areaNome = ""
    livros?: Livro[]

    constructor(AreaId:number, livros: Livro[]){
        this.areaId = AreaId
        this.livros = livros
    }
}

export class Autor{
    autorId: number
    autorNome= ""
    numeroLivros?: number

    constructor(autorId: number, numeroLivros: number ){
        this.autorId = autorId,
        this.numeroLivros = numeroLivros
    }
}


