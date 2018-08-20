

import { Action } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum UsuarioActionTypes {
    CARGAR_USUARIO = '[Usuario] CARGAR_USUARIO',
    CARGAR_USUARIO_FAIL = '[Usuario] CARGAR_USUARIO_FAIL',
    CARGAR_USUARIO_SUCCESS = '[Usuario] CARGAR_USUARIO_SUCCESS',
};


export class CargarUsuario implements Action {
    readonly type = UsuarioActionTypes.CARGAR_USUARIO;

    constructor(public id: string) {}
}
export class CargarUsuarioFail implements Action {
    readonly type = UsuarioActionTypes.CARGAR_USUARIO_FAIL;

    constructor(public payload: any) { }
}
export class CargarUsuarioSuccess implements Action {
    readonly type = UsuarioActionTypes.CARGAR_USUARIO_SUCCESS;

    constructor(public usuario: Usuario) { }
}




/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type UsuarioActions
                        = CargarUsuario
                        | CargarUsuarioFail
                        | CargarUsuarioSuccess;
