import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CalculadoraState } from 'src/app/models/calculadora/calculadora.redux';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Select(CalculadoraState.getResult) result$: Observable<Number>

  constructor() { }

  ngOnInit(): void {
  }

}
