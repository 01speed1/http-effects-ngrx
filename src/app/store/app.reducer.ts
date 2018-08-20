import { IUserState } from './reducers/usuario.reducer';
import { IAppState } from './app.reducer';

import * as  reducers from './reducers'
import { ActionReducerMap } from '@ngrx/store';

export interface IAppState {
    usuarios:reducers.IUsuarioState,
    usuario: reducers.IUserState
}

export const AppReducers:ActionReducerMap<IAppState> = {
    usuarios: reducers.UsuariosReducer,
    usuario: reducers.UsuarioReducer
} 