import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profissionais } from './inter-mix-model.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterMixServiceService  {

  constructor(private httpClient: HttpClient) { }

  public List(): Observable<Profissionais[]> {
    return this.httpClient.get<Profissionais[]>('https://api-de-profissionais-de-bem-estar-e-saude.glitch.me/profissionais');
  }

  public  CadastraProfissional(profissional: Profissionais): Observable<Profissionais> {
    let response = this.httpClient.post<Profissionais>(
      'https://api-de-profissionais-de-bem-estar-e-saude.glitch.me/profissionais',
      profissional
    );
    return  response;
  }

}
