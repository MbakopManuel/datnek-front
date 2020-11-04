import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Langue } from 'src/app/shared/models/langue.model';

@Component({
  selector: 'app-add-lang',
  templateUrl: './add-lang.component.html',
  styleUrls: ['./add-lang.component.scss']
})
export class AddLangComponent implements OnInit {

  @Input('nombreLangue') nombreLangue: Number = 0
  @Output('langue') langue = new EventEmitter<Langue>()

  langues: string[] = [
    'Français',
    'Anglais',
    'Nèerlandais'
  ]

  niveau: string[] = [
    'Courant',
    'Pré-intermédiaire',
    'Intermédiaire',
    'Elémentaire'
  ]

  langueForm: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.langueForm = this.fb.group(
      {
        intitule: ['',[Validators.required, Validators.minLength(2)]],
        parle: ['',[Validators.required, Validators.minLength(2)]],
        ecrit: ['',[Validators.required, Validators.minLength(2)]],
        comprehension: ['',[Validators.required, Validators.minLength(2)]]
      }
    )
  }

  /**
   * ajout d'une nouvelle langue
   */
  addLangue(): void{
    let _langue = new Langue(
                          this.langueForm.controls['intitule'].value,
                          this.langueForm.controls['ecrit'].value,
                          this.langueForm.controls['parle'].value,
                          this.langueForm.controls['comprehension'].value
                        )
      this.langue.emit(_langue)
  }

  /**
   * récupérer la valeur du select dans le form control (intitule)
   * @param event
   */
  changeLangue(event): void{
    this.langueForm.controls['intitule'].setValue(event.target.value.split(' ')[1], {
      onlySelf: true
    })
  }

  /**
   * récupérer la valeur du select dans le form control (parle)
   * @param event
   */
  changeParle(event): void{
    this.langueForm.controls['parle'].setValue(event.target.value.split(' ')[1], {
      onlySelf: true
    })
  }

  /**
   * récupérer la valeur du select dans le form control (ecrit)
   * @param event
   */
  changeEcrit(event): void{
    this.langueForm.controls['ecrit'].setValue(event.target.value.split(' ')[1], {
      onlySelf: true
    })
  }

  /**
   * récupérer la valeur du select dans le form control (comprehension)
   * @param event
   */
  changeComprehension(event): void{
    this.langueForm.controls['comprension'].setValue(event.target.value.split(' ')[1], {
      onlySelf: true
    })
  }

}
