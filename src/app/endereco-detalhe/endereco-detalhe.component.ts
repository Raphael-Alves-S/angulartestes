import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Endereco } from 'src/model/enderecos';


@Component({
  selector: 'app-endereco-detalhe',
  templateUrl: './endereco-detalhe.component.html',
  styleUrls: ['./endereco-detalhe.component.scss']
})
export class EnderecoDetalheComponent implements OnInit {
  endereco: Endereco = { id: null, uf: '', bairro: '', cep: '', cidade: '', logradouro: ''  };
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.getEndereco(this.route.snapshot.params['id']);
  }
    getEndereco(id) {
      this.api.getEndereco(id)
      .subscribe(data => {
        this.endereco = data;
        console.log(this.endereco);
        this.isLoadingResults = false;
      });
    }

    deleteEndereco(id) {
      this.isLoadingResults = true;
      this.api.deleteEndereco(id)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/endereco']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
      );
    }
}
