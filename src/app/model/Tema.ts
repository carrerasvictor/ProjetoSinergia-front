import { Postagem } from "./Postagem"

export class Tema{
    public idTema: number
    public tema: string
    public descricao: string
    public postagens: Postagem
}