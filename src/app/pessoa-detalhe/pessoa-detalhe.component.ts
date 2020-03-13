import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Pessoa } from 'src/model/pessoa';

@Component({
  selector: 'app-pessoa-detalhe',
  templateUrl: './pessoa-detalhe.component.html',
  styleUrls: ['./pessoa-detalhe.component.scss']
})
export class PessoaDetalheComponent implements OnInit {
  pessoa: Pessoa = {id: null, nome: '', cpf: '', idade: null};
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.getPessoa(this.route.snapshot.params['id']);
  }

  getPessoa(id) {
    this.api.getPessoa(id)
    .subscribe(data => {
      this.pessoa = data;
      console.log(this.pessoa);
      this.isLoadingResults = false;
    });
  }

  deletePessoa(id) {
    this.isLoadingResults = true;
    this.api.deletePessoa(id)
    .subscribe(res => {
      this.isLoadingResults = false;
      this.router.navigate(['/pessoa']);
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    }
    );
  }

}
