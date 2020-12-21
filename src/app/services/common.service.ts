import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  required(value) {
    if (value != null && value != undefined && value != '') return true;
    else return false;
  }
}
