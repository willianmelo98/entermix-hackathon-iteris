import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passa-tempos',
  templateUrl: './passa-tempos.component.html',
  styleUrls: ['./passa-tempos.component.css']
})
export class PassaTemposComponent implements OnInit {

  einsten:string='https://rachacuca.com.br/teste-de-einstein/';
  rachaCuca:string='https://rachacuca.com.br/';
  imageEinsten:string='https://rachacuca.com.br/media/cache/70/78/7078d20d3626848597c62a122e35c56d.png';
  rachaCucaImage:string='https://rachacuca.com.br/static/imagens/logo-racha-cuca.png';
  quaseNadaImg:string='https://rachacuca.com.br/media/cache/64/82/6482869010f982b9fc9ab79e8067766d.png';
  raboxImg:string='https://rachacuca.com.br/media/cache/f1/ee/f1ee65e59b3db0c1dc43c66eb4617907.png';
  ultimoImg:string='https://rachacuca.com.br/static/jogos/imagens/jogo-do-cupido_180x111.png';

  constructor() { }

  ngOnInit(): void {
  }

}
