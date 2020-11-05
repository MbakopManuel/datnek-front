import { Component } from '@angular/core';
import { Langue } from './shared/models/langue.model';
import { LangueServiceService } from './shared/services/langue-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'datnek';

  langue: Langue
  langues: Langue[]

  constructor(private langueService: LangueServiceService){
    this.getLangues()
  }

  /**
   * ajout d'une langue
   * @param event
   */
  addLangue(event): void{
    this.langue = event
    this.langueService.addLangue(this.langue)
                      .subscribe((lang) => {
                          this.langue = lang.data;
                          this.getLangues()
                      })
  }

  /**
   * récupération de toutes les langue
   */
  getLangues(): void{
      this.langueService.getLangues()
                        .subscribe( langs => {
                            this.langues = langs.data;
                        }, error =>{
                            console.log(error);
                        })
  }

  deleteLangue(event): void{
      if(event === true){
        this.getLangues()
      }
  }


}
