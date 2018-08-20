

import { Action } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum UsuariosActionTypes {
    CARGAR_USUARIOS = '[Usuarios] CARGAR_USUARIOS',
    CARGAR_USUARIO_FAIL = '[Usuarios] CARGAR_USUARIO_FAIL',
    CARGAR_USUARIO_SUCCESS = '[Usuarios] CARGAR_USUARIO_SUCCESS',
};


export class CargarUsuarios implements Action {
    readonly type = UsuariosActionTypes.CARGAR_USUARIOS;
}
export class CargarUsuariosFail implements Action {
    readonly type = UsuariosActionTypes.CARGAR_USUARIO_FAIL;

    constructor(public payload: any) { }
}
export class CargarUsuariosSuccess implements Action {
    readonly type = UsuariosActionTypes.CARGAR_USUARIO_SUCCESS;

    constructor(public usuarios: Usuario[]) { }
}




/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type UsuariosActions
                        = CargarUsuarios
                        | CargarUsuariosFail
                        | CargarUsuariosSuccess;
