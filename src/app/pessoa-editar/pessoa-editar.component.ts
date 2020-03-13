import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-pessoa-editar',
  templateUrl: './pessoa-editar.component.html',
  styleUrls: ['./pessoa-editar.component.scss']
})
export class PessoaEditarComponent implements OnInit {
  id: number = null;
  pessoaForm: FormGroup;
  nome = '';
  cpf = '';
  idade: number = null;
  isLoadingresults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getPessoa(this.route.snapshot.params['id']);
    this.pessoaForm = this.formBuilder.group({
      'nome' : [null, [Validators.required]],
      'cpf' : [null, [Validators.required]],
      'idade' : [null, [Validators.required]]
    });

  }

  getPessoa(id){
    this.api.getPessoa(id).subscribe(data =>{
      this.id = data.id;
      this.pessoaForm.setValue({
        nome: data.nome,
        cpf: data.cpf,
        idade: data.idade
      });
    });
  }

  updatePessoa(form: NgForm) {
    this.isLoadingresults = true;
    this.api.updatePessoa(this.id, form)
    .subscribe(res => {
      this.isLoadingresults = false;
      this.router.navigate(['/pessoa-detalhe/' + this.id]);
    },
    (err) => {
      console.log(err);
      this.isLoadingresults = false;
    }
    );
  }
}
