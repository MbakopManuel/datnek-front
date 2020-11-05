import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LINK } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Langue } from '../models/langue.model';

@Injectable({
  providedIn: 'root'
})
export class LangueServiceService {

  constructor(private http: HttpClient) { }

  /**
   * récupération de toutes les langues
   */
  public  getLangues(): Observable<any>{
      return this.http.get<any>(`${LINK._langue_all}`);
  }

  /**
   * ajout d'une langue et de ses performances
   * @param data
   */
  public addLangue(data): Observable<any>{
      return this.http.post<any>(LINK._langue_all, data);
  }

  public delete(id){
    return this.http.delete<any>(`${LINK._langue_all}/${id}`)
  }
}
