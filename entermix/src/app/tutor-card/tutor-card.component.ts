import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { InterMixModelService } from 'src/app/services/inter-mix-model.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutor-card',
  templateUrl: './tutor-card.component.html',
  styleUrls: ['./tutor-card.component.css']
})
export class TutorCardComponent implements OnChanges {

  @Input() tutor: InterMixModelService;

  location: string;
  name: string;
  photo: string;
  services: string;
  zodiac: string;
  yoga: string;

  constructor() { }

  ngOnChanges(): void {

    if (this.tutor != null) {

      this.location = this.tutor.location;
      this.name = this.tutor.name;
      this.photo = this.tutor.photo;
      this.services = this.tutor.services;
      this.zodiac = this.tutor.zodiac;
    }
  }


}
