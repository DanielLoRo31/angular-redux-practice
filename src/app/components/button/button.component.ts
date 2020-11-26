import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import {
  AddNumberAction,
  AddOperatorAction,
  AddResultAction,
  ResetAction,
} from 'src/app/models/calculadora/calculadora.redux';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() content: String;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onClick() {
    if (
      this.content != '+' &&
      this.content != '-' &&
      this.content != 'C' &&
      this.content != '=' &&
      this.content != '/' &&
      this.content != 'X'
    ) {
      this.store.dispatch(new AddNumberAction(Number(this.content)));
    } else if (this.content != '=' && this.content != 'C') {
      this.store.dispatch(new AddOperatorAction(this.content));
    } else if (this.content != 'C') {
      this.store.dispatch(new AddResultAction());
    } else {
      this.store.dispatch(new ResetAction());
    }
  }

  addBackgroundColor() {
    if (
      this.content != '+' &&
      this.content != '-' &&
      this.content != 'C' &&
      this.content != '=' &&
      this.content != '/' &&
      this.content != 'X'
    ) {
      return true;
    } else {
      return false;
    }
  }
}
