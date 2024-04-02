import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mix-card',
  templateUrl: './mix-card.component.html',
  styleUrls: ['./mix-card.component.css']
})
export class MixCardComponent implements OnInit {

  titulo: string = "Seja bem vindo ao EnterMix";
  descricao: string = "Aqui você encontra um mix de entretenimento e qualidade de vida sem precisar sair de casa."
  menu: string ="No menu lateral você encontra por tópicos todo o nosso conteúdo e os profissionais que irão te acompanhar"
  fim: string = "Tenha uma boa experiência!"

  imgUrl: string ="https://www.spdm.org.br/media/k2/items/cache/a2d28d1cf2e8376bd36df6ba0c6ef1f6_XL.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
