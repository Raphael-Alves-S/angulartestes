import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Endereco } from 'src/model/enderecos';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {
  displayedColumns: string[] = ['logradouro', 'bairro', 'cidade', 'cep', 'uf', 'acao'];
  dataSource: Endereco[];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getEnderecos()
    .subscribe(res => {
      this.dataSource =  res;
      console.log(this.dataSource);
      // this.isLoadingResults = false;
    }, err => {
      console.log(err);
      // this.isLoadingResults = false;
    });
  }

}
