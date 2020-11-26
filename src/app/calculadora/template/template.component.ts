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

  @Select(CalculadoraState.getResult) result$: Observable<Number>

  

  constructor() {}

  ngOnInit(): void {}

  async onValidate() {
    try {
      const result = await this.result$.toPromise()
      if (result === null) {
        return false
      } else {
        return true
      }

    } catch (error) {
      console.log(error)
    }
    
  }
}
