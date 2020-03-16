import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-endereco-novo',
  templateUrl: './endereco-novo.component.html',
  styleUrls: ['./endereco-novo.component.scss']
})
export class EnderecoNovoComponent implements OnInit {
  enderecoForm: FormGroup;
  isLoadingResults = false;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.enderecoForm =  this.formBuilder.group({
      'logradouro': [null, [Validators.required]],
      'bairro': [null, [Validators.required]],
      'cidade': [null, [Validators.required]],
      'cep': [null, [Validators.required]],
      'uf': [null,[Validators.required]]
    });
  }

  addEndereco(form: NgForm) {
    this.isLoadingResults =  true;
    this.api.addEndereco(form)
    .subscribe(res => {
      // tslint:disable-next-line: no-string-literal
      const id = res['id'];
      this.isLoadingResults =  false;
      this.router.navigate(['/endereco-detalhe', id]);
    },
    (err) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
