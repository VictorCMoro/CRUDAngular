export class Jogo{
    JogoId: number
    jogoNome = ""
    ano: number
    Genero = ""
    EmpresaId: number
    JogoGeneros: JogosGenero[]


    constructor(jogoId: number, ano: number, empresaId: number, jogoGeneros: JogosGenero[]){
        this.JogoId = jogoId
        this.ano = ano
        this.EmpresaId = empresaId
        this.JogoGeneros = jogoGeneros
    }
}

export class Empresa{
    EmpresaId: number
    Nome: string 
    Jogos: Jogo[]

    constructor(empresaId:number, nome:string, jogos: Jogo[]){
        this.EmpresaId = empresaId
        this.Nome = nome
        this.Jogos = jogos
    }
}

export class Genero{
    GeneroId: number
    Nome: string

    constructor(generoId: number, nome: string){
        this.GeneroId = generoId
        this.Nome = nome
    }
}

export class JogosGenero{
    JogoId: number;
    Jogo: Jogo;
    GeneroId: number;
    Genero: Genero;

    constructor(jogoId:number, jogo: Jogo, generoId: number, genero: Genero){
        this.JogoId = jogoId
        this.Jogo = jogo
        this.GeneroId = generoId
        this.Genero = genero
    }
}
