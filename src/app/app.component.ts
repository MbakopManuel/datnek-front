import { Component } from '@angular/core';
import { Langue } from './shared/models/langue.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'datnek';

  langue: Langue
  langues: Langue[]

  addLangue(event): void{
    this.langue = event
  }



}
