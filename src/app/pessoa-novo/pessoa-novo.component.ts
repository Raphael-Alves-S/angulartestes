import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-pessoa-novo',
  templateUrl: './pessoa-novo.component.html',
  styleUrls: ['./pessoa-novo.component.scss']
})
export class PessoaNovoComponent implements OnInit {
  pessoaForm: FormGroup;
  isLoadingResults = false;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.pessoaForm = this.formBuilder.group({
      'nome': [null, [Validators.required]],
      'cpf': [null, [Validators.required]],
      'idade': [null, [Validators.required]]
    });
  }
  addPessoa(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addPessoa(form)
    .subscribe(res => {
      // tslint:disable-next-line: no-string-literal
      const id = res['id'];
      this.isLoadingResults = false;
      this.router.navigate(['/pessoa-detalhe', id]);
    },
    (err) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
