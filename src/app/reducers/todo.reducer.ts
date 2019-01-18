import { createEntityAdapter, EntityState, EntityAdapter } from "@ngrx/entity";

import { Todo } from "../models/todo.model";

import * as todoActions from "../actions/todo.actions";

export interface State extends EntityState<Todo> {}

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: State = todoAdapter.getInitialState();

export function todoReducer(
  state: State = initialState,
  action: todoActions.TodoActions
) {
  switch (action.type) {
    case todoActions.ADD_TODO:
      return todoAdapter.addOne(action.payload.todo, state);
    case todoActions.TOGGLE_DONE:
      return todoAdapter.updateOne(
        { id: action.payload.id, changes: { done: action.payload.done } },
        state
      );
    case todoActions.UPDATE_TODO:
      return todoAdapter.updateOne(
        { id: action.payload.id, changes: { value: action.payload.newValue } },
        state
      );
    case todoActions.DELETE_TODO:
      return todoAdapter.removeOne(action.payload.id, state);
    default:
      return state;
  }
}
