import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadoraRoutingModule } from './calculadora-routing.module';
import { TemplateComponent } from './template/template.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [TemplateComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    CalculadoraRoutingModule
  ]
})
export class CalculadoraModule { }
