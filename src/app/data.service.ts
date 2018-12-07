import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  handleClick() {
    return console.log('clicked');
  }
}
