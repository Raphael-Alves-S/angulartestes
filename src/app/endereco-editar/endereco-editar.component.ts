import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-endereco-editar',
  templateUrl: './endereco-editar.component.html',
  styleUrls: ['./endereco-editar.component.scss']
})
export class EnderecoEditarComponent implements OnInit {
  id: number = null;
  enderecoForm: FormGroup;
  logradouro = '';
  bairro = '';
  cidade = '';
  cep = '';
  uf = '';
  idpessoa: number = null;
  isLoadingresults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getEndereco(this.route.snapshot.params['id']);
    this.enderecoForm = this.formBuilder.group({
      'logradouro' : [null, [Validators.required]],
      'bairro' : [null, [Validators.required]],
      'cidade' : [null, [Validators.required]],
      'cep' : [null, [Validators.required]],
      'uf' : [null, [Validators.required]]
    });
  }

    getEndereco(id) {
      this.api.getEndereco(id).subscribe(data => {
        this.id =  data.id;
        this.enderecoForm.setValue({
          logradouro: data.logradouro,
          bairro: data.bairro,
          cidade: data.cidade,
          cep: data.cep,
          uf: data.uf
        });
      });
    }

    updateEndereco(form: NgForm) {
      this.isLoadingresults = true;
      this.api.updateEndereco(this.id, form)
      .subscribe(res => {
        this.isLoadingresults = false;
        this.router.navigate(['/endereco-detalhe/' + this.id]);
      },
      (err) => {
        console.log(err);
        this.isLoadingresults = false;
      }
      );
    }

  }


