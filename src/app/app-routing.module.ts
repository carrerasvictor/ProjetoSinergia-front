import { PostagemComponent } from './postagem/postagem.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { InicioLandingComponent } from './inicio-landing/inicio-landing.component';
import { ProjetoLandingComponent } from './projeto-landing/projeto-landing.component';
import { SobreComponent } from './sobre/sobre.component';



const routes: Routes = [
  {path: '', redirectTo: 'inicio-landing', pathMatch: 'full'},

  {path: 'inicio-landing', component: InicioLandingComponent},
  {path: 'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent},

  {path: 'inicio', component: InicioComponent},
  {path: 'tema', component: TemaComponent},
  {path: 'postagem', component: PostagemComponent},
  {path: 'projeto-landing', component: ProjetoLandingComponent},
  {path: 'sobre', component: SobreComponent},

  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent},

  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent},
  {path: 'usuario-edit/:id', component: UsuarioEditComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {}
