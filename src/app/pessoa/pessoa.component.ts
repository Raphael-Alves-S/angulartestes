import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Pessoa } from 'src/model/pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'cpf', 'idade', 'acao'];
  dataSource: Pessoa[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getPessoas()
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
