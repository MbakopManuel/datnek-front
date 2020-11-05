import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Langue } from 'src/app/shared/models/langue.model';
import { LangueServiceService } from 'src/app/shared/services/langue-service.service';

@Component({
  selector: 'app-list-lang',
  templateUrl: './list-lang.component.html',
  styleUrls: ['./list-lang.component.scss']
})
export class ListLangComponent implements OnInit {

  //tableau de langue récupéré depuis la base de donnée
  @Input() langues: Langue[];
  @Output('deleted') deleted = new EventEmitter<Boolean>()
  @Output('opened') opened = new EventEmitter<Boolean>()
  _langue: Langue;
  constructor(private langueService: LangueServiceService) { }

  ngOnInit(): void {
  }

  delete(id: string): void{
    this.langueService.delete(id)
                    .subscribe((lang) => {
                        this.deleted.emit(true)
                    })
  }

  modal(langue: Langue): void{
    this._langue = langue;
    this.opened.emit(true);
  }

  closeModal(): void{
    this.opened.emit(false);
  }

}
