import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamentos } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'api'

  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamentos[]> {
    return this.http.get<Pensamentos[]>(this.API + '/' + 'listar')
  }

  criar(pensamento: Pensamentos): Observable<Pensamentos> {
    return this.http.post<Pensamentos>(this.API, pensamento)
  }

  editar(pensamento: Pensamentos): Observable<Pensamentos> {
    return this.http.put<Pensamentos>(this.API, pensamento )

  }

  excluir(id: number): Observable<Pensamentos> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamentos>(url)
  }

  buscarPorId(id: number): Observable<Pensamentos> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamentos>(url)
  }

}
