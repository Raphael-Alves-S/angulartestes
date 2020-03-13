import { Injectable } from '@angular/core';
import { Observable, of, throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import {Pessoa} from 'src/model/pessoa';
import { Endereco } from 'src/model/enderecos';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

const apiUrl = 'http://localhost:8095/pessoa';
const apiUrlend = 'http://localhost:8095/endereco';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(apiUrl)
    .pipe(
      tap(pessoas => console.log('visualizou pessoas')),
      catchError(this.handleError('getPessoas', []))
    );
  }

  getPessoa(id: number): Observable<Pessoa> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Pessoa>(url).pipe(
      tap(_ => console.log(`Resultado para a pessoa com id=${id}`)),
      catchError(this.handleError<Pessoa>(`getPessoa id=${id}`))
    );
  }

  addPessoa(pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(apiUrl, pessoa, httpOptions).pipe(
      // tslint:disable-next-line: no-shadowed-variable
      tap((pessoa: Pessoa) => console.log(`Pessoa cadastrada com o id=${pessoa.id}`)),
      catchError(this.handleError<Pessoa>('addPessoa'))
    );
  }

  updatePessoa(id, pessoa): Observable<any> {
    const url =  `${apiUrl}/${id}`;
    return this.http.put(url, pessoa, httpOptions).pipe(
      tap(_ => console.log(`atualizar a pessoa com id=${id}`),
      catchError(this.handleError<any>('updatePessoa')))
    );
  }

  deletePessoa(id): Observable<Pessoa> {
    const url = `${apiUrl}/delete/${id}`;
    return this.http.delete<Pessoa>(url, httpOptions).pipe(
      tap(_ => console.log(`deletar a pessoa com o id=${id}`)),
      catchError(this.handleError<Pessoa>('deletePessoa'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  // metodos para manipular endereco

  getEnderecos(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(apiUrlend)
    .pipe(
      tap(enderecos => console.log('visualizou enderecos')),
      catchError(this.handleError('getEnderecos', []))
    );
  }

  getEndereco(id: number): Observable<Endereco> {
    const url = `${apiUrlend}/${id}`;
    return this.http.get<Endereco>(url).pipe(
      tap(_ => console.log(`Resultado para endereco com id=4{id}`)),
      catchError(this.handleError<Endereco>(`getEndereco id=${id}`))
    );
  }

  addEndereco(endereco): Observable<Endereco> {
    return this.http.post<Endereco>(apiUrlend, endereco, httpOptions).pipe(
      // tslint:disable-next-line: no-shadowed-variable
      tap((endereco: Endereco) => console.log(`Endereco cadastrado com o id=${endereco.id}`),
      catchError(this.handleError<Endereco>('addEndereco')))
    );
  }

  updateEndereco(id, endereco): Observable<any> {
    const url = `${apiUrlend}/${id}`;
    return this.http.put(url, endereco, httpOptions).pipe(
      tap(_ => console.log(`atualizar endereco com o id=${id}`),
      catchError(this.handleError<any>('updateEndereco')))
    );
  }

  deleteEndereco(id): Observable<Endereco> {
    const url = `${apiUrlend}/delete/${id}`;
    return this.http.delete<Endereco>(url, httpOptions).pipe(
      tap(_ => console.log(`deletar endereco com id=${id}`)),
      catchError(this.handleError<Endereco>('deleteEndereco'))
    );
  }



}
