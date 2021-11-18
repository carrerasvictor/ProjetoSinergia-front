import { Postagem } from './Postagem';

export class Usuario {
  public idUsuario: number;
  public nomeCompleto: string;
  public email: string;
  public senha: string;
  public tipo: string;
  public foto: string;
  public postagens: Postagem[];
}
