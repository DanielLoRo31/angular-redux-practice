import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from 'src/app/services/calculadora/calculadora.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent implements OnInit {
  contents: String[]  

  constructor(private service: CalculadoraService) {}

  ngOnInit(): void {
    this.contents = this.service.getAllData()
  }

}
