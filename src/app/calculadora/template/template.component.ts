import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CalculadoraState } from 'src/app/models/calculadora/calculadora.redux';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent implements OnInit {
  contents: String[] = [
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

 

  

  constructor() {}

  ngOnInit(): void {}

}
