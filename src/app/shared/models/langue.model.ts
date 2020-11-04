export class Langue {

  //intitule de la langue
  intitule: string;
  //niveau écrit
  ecrit: string;
  //niveau parlé
  parle: string;
  //niveau compréhension
  comprehension: string;

  //contructeur
  constructor(_intitule: string, _ecrit: string, _parle:string, _comprehension: string){
      this.intitule = _intitule;
      this.ecrit = _ecrit;
      this.parle = _parle;
      this.comprehension  = _comprehension;
  }

}
