import { Component, Input, OnInit } from '@angular/core';
import { Langue } from 'src/app/shared/models/langue.model';

@Component({
  selector: 'app-list-lang',
  templateUrl: './list-lang.component.html',
  styleUrls: ['./list-lang.component.scss']
})
export class ListLangComponent implements OnInit {

  //tableau de langue récupéré depuis la base de donnée
  @Input() langues: Langue[]

  constructor() { }

  ngOnInit(): void {
  }

}
