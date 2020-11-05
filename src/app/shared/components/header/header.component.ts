import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  langue: string = "Français";
  @Input() modal;

  open = false
  constructor() { }

  ngOnInit(): void {
  }

  getLangue(lang: string): void{
    this.langue = lang
  }

}
