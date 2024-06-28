import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];

  constructor() {
  }

  get tagsHistory() {
    return [...this._tagsHistory];
    //Se realiza para no afectar la data principal del servicio aunque si se modifican las posiciones.
  }

  searchTag(tag: string): void {
    this._tagsHistory.unshift(tag);
  }

}
