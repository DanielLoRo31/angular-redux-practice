import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

export interface IRNumber {
  FirstNumber: Number;
  SecondNumber: Number;
  Operator: String;
  Result: number;
}

export class AddNumberAction {
  public static type = '[Number] Add Number';
  constructor(public number: Number) {}
}

export class AddOperatorAction {
  public static type = '[Number] Add Operator';
  constructor(public operator: String) {}
}

export class AddResultAction {
  public static type = '[Number] Add Result';
  constructor() {}
}

export class ResetAction {
  public static type = '[Number] Reset';
  constructor() {}
}

@State<IRNumber>({
  name: 'calculadoraState',
  defaults: {
    FirstNumber: null,
    SecondNumber: null,
    Operator: null,
    Result: null,
  },
})
@Injectable()
export class CalculadoraState {
  constructor() {}

  @Selector()
  static getResult(state: IRNumber) {
    return state.SecondNumber;
  }

  @Action(AddNumberAction)
  add(ctx: StateContext<IRNumber>, action: AddNumberAction) {
    const numbers = ctx.getState();
    if (numbers.Operator !== null && numbers.FirstNumber === null) {
      if (numbers.FirstNumber === null && numbers.SecondNumber === null) {
        ctx.patchState({ SecondNumber: action.number });
      } else {
        ctx.patchState({
          FirstNumber: numbers.SecondNumber,
          SecondNumber: action.number,
        });
      }
    } else {
      if (numbers.SecondNumber !== null) {
        const second = '' + numbers.SecondNumber + action.number;
        ctx.patchState({ SecondNumber: Number(second) });
      } else {
        ctx.patchState({ SecondNumber: action.number });
      }
    }
  }

  @Action(AddOperatorAction)
  addOperator(ctx: StateContext<IRNumber>, action: AddOperatorAction) {
    ctx.patchState({ Operator: action.operator });
  }

  @Action(AddResultAction)
  addResult(ctx: StateContext<IRNumber>, action: AddResultAction) {
    const numbers = ctx.getState();
    var operator = null;
    switch (numbers.Operator) {
      case '+':
        operator = +numbers.FirstNumber + +numbers.SecondNumber;
        break;
      case '-':
        operator = +numbers.FirstNumber - +numbers.SecondNumber;
        break;
      case '/':
        operator = +numbers.FirstNumber / +numbers.SecondNumber;
        break;
      case 'X':
        operator = +numbers.FirstNumber * +numbers.SecondNumber;
        break;
    }

    //ctx.patchState({ Result: operator });
    ctx.patchState({ SecondNumber: operator, Operator: null });
  }

  @Action(ResetAction)
  reset(ctx: StateContext<IRNumber>, action: ResetAction) {
    ctx.setState({
      FirstNumber: null,
      SecondNumber: null,
      Operator: null,
      Result: null,
    });
  }
}
