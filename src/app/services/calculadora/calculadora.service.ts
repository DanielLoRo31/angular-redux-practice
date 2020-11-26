import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  
  data: String[] = [
    '1',
    '2',
    '3',
    '+',
    '4',
    '5',
    '6',
    '-',
    '7',
    '8',
    '9',
    'X',
    'C',
    '0',
    '/',
    '=',
  ];

  constructor() { }



  getAllData(): String[] {
    return this.data
  }
}
