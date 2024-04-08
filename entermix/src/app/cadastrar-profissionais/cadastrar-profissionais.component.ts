import { Component, OnInit } from '@angular/core';
import { Profissionais } from '../services/inter-mix-model.service';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { InterMixServiceService } from '../services/inter-mix-service.service';
import { generate } from 'rxjs';

@Component({
  
  selector: 'app-cadastrar-profissionais',
  templateUrl: './cadastrar-profissionais.component.html',
  styleUrls: ['./cadastrar-profissionais.component.css'],
  
})
export class CadastrarProfissionaisComponent implements OnInit {

  constructor(public service:InterMixServiceService) {}
  profissional: Profissionais;
  form: FormGroup;
  retorno:Profissionais;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      location: new FormControl('',Validators.required),
      photo: new FormControl(''),
      services: new FormControl('',Validators.required),
      zodiac:new FormControl('',Validators.required),
      contact: new FormControl('',Validators.required)

    });
  }
 async submitCadastro() {
      this.retorno = undefined;
      this.profissional = this.form.value;
      console.log(this.profissional);
      this.retorno = await this.service.CadastraProfissional(this.profissional).toPromise();
    }
}
