import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterMixModelService } from './inter-mix-model.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterMixServiceService  {

  constructor(private httpClient: HttpClient) { }

  public List(): Observable<InterMixModelService[]> {
    return this.httpClient.get<InterMixModelService[]>('http://localhost:3000/profissionais');
  }
}
