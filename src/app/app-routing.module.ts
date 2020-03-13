import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaDetalheComponent } from './pessoa-detalhe/pessoa-detalhe.component';
import { PessoaNovoComponent } from './pessoa-novo/pessoa-novo.component';
import { PessoaEditarComponent } from './pessoa-editar/pessoa-editar.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { EnderecoDetalheComponent } from './endereco-detalhe/endereco-detalhe.component';
import { EnderecoNovoComponent } from './endereco-novo/endereco-novo.component';
import { EnderecoEditarComponent } from './endereco-editar/endereco-editar.component';
import { Title } from '@angular/platform-browser';


const routes: Routes = [
  {
    path: 'pessoa',
    component: PessoaComponent,
    data: { title: 'Lista de Pessoas' }
  },
  {
    path: 'pessoa-detalhe/:id',
    component: PessoaDetalheComponent,
    data: {title: 'Detalhes da Pessoa'}
  },
  {
    path: 'pessoa-editar/:id',
    component: PessoaEditarComponent,
    data: {title: 'Editar Pessoa'}
  },
  {
    path: 'pessoa-novo',
    component: PessoaNovoComponent,
    data: {title: 'Adicionar Pessoa'}
  },

  { path: '',
  redirectTo: '/pessoa',
  pathMatch: 'full'
},

{
  path: 'endereco',
  component: EnderecoComponent,
  data: { title: 'Lista de Endereços' }
},
{
  path: 'endereco-detalhe/:id',
  component: EnderecoDetalheComponent,
  data: { title: 'Detalhe de Endereços' }
},
{
  path: 'endereco-editar/:id',
  component: EnderecoEditarComponent,
  data: { title: 'Editar Endereço' }
},
{
path: 'endereco-novo',
component: EnderecoNovoComponent,
data: { title: 'Adicionar Endereço' }
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
