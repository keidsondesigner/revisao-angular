import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

export interface Cep {
  cep:         string;
  logradouro:  string;
  complemento: string;
  unidade:     string;
  bairro:      string;
  localidade:  string;
  uf:          string;
  ibge:        string;
  gia:         string;
  ddd:         string;
  siafi:       string;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  protected baseUrl = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient) { }

  getCEP(cep: string): Observable<Cep> {
    return this.http.get<Cep>(`${this.baseUrl}${cep}/json/`).pipe(
      take(1)
    );
  }
}
