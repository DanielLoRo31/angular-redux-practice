import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

export interface IRUser {
  users: any[];
  selectedId: number;
}

export class AddUserAction {
  public static type = '[User] Add';
  constructor(public user: any) {}
}

// export class UpdateUserAction {
//   public static type = '[User] Update';
//   constructor(public id: number, public user: Partial<IUser>) {}
// }

export class UpdateUserAction {
  public static type = '[User] Update';
  constructor(public user: any) {}
}

export class DeleteUserAction {
  public static type = '[User] Delete';
  constructor(public id: number) {}
}

@State<IRUser>({
  name: 'userState',
  defaults: {
    users: [],
    selectedId: null,
  },
})
@Injectable()
export class CalculadoraState {
  constructor() {}

  @Selector()
  static getAllUsers(state: IRUser) {
    return state.users;
  }

  @Selector()
  static getSelectedUser(state: IRUser) {
    const index = state.users.findIndex((u) => u.id === state.selectedId);

    if (index !== -1) {
      return state.users[index];
    }
  }

  @Action(AddUserAction)
  add(ctx: StateContext<IRUser>, action: AddUserAction) {
    //ctx.dispatch //se manda llamar cualquier action ( cambio de estado )
    //ctx.getState() // nos va a traer lo que tengamos en el estado
    //ctx.patchState() //Meter un parcial de un estado, solo los elementos que queramos
    //ctx.setState() //interfaz completa, u objeto completo, sustituir el estado

    //Set
    ctx.setState({
      users: [...ctx.getState().users, action.user],
      selectedId: action.user.id,
    });
    /*
      //Patch
      ctx.patchState({ users: [...ctx.getState().users, action.user] });
    */
  }

  @Action(UpdateUserAction)
  update(state: StateContext<IRUser>, action: UpdateUserAction) {
    const users = [...state.getState().users];
    const index = users.findIndex((u) => u.id == action.user.id);

    if (index !== -1) {
      users[index] = action.user;
    }
    state.setState({
      users: users,
      selectedId: action.user.id,
    });
  }

  @Action(DeleteUserAction)
  delete(state: StateContext<IRUser>, action: DeleteUserAction) {
    const users = [...state.getState().users];
    const index = users.findIndex((u) => u.id === action.id);

    console.log(action.id, index)
    if (index !== -1) {
      users.splice(index, 1);
    }

    state.setState({
      users,
      selectedId: action.id,
    });
  }
}
