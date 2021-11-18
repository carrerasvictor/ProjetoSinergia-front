import { Postagem } from './Postagem';

export class Tema {
  public idTema: number;
  public tema: string;
  public subTema: string;
  public postagens: Postagem[];
}
