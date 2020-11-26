import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ResultComponent } from './result/result.component';



@NgModule({
  declarations: [ButtonComponent, ResultComponent],
  exports: [
    ButtonComponent, ResultComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
