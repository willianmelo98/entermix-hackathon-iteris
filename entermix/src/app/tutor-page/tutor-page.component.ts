import { Component, OnInit, OnChanges } from '@angular/core';
import { InterMixModelService } from 'src/app/services/inter-mix-model.service'
import { InterMixServiceService } from 'src/app/services/inter-mix-service.service'

@Component({
  selector: 'app-tutor-page',
  templateUrl: './tutor-page.component.html',
  styleUrls: ['./tutor-page.component.css']
})
export class TutorPageComponent implements OnInit {

  listaTutores: InterMixModelService[];

  constructor(public tutorApi: InterMixServiceService) { }

  ngOnInit(): void {

    this.tutorApi.List().subscribe((lista) => {
      this.listaTutores = lista;
    })
  }

}
