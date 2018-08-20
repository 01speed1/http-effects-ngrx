import { CargarUsuariosSuccess, CargarUsuariosFail } from './../actions/usuarios.actions';
import { Injectable } from "@angular/core";
import { Actions, Effect } from '@ngrx/effects'

import {of} from 'rxjs'

import * as usuariosActions from '../actions'
import { map, switchMap, catchError } from "rxjs/operators";
import { UsuarioService } from "../../services/usuario.service";


@Injectable()
export class UsuariosEffects {

    constructor(
        private Actions$: Actions,
        private sUsuarios: UsuarioService
    ) {}

    @Effect({dispatch: true})
    cargarUsuarios$ = this.Actions$
        .ofType(usuariosActions
            .UsuariosActionTypes.CARGAR_USUARIOS )
        .pipe(switchMap( ()=> this.sUsuarios.getUsers()
            .pipe(
                map(users => new CargarUsuariosSuccess(users)),
                catchError( error => of(new CargarUsuariosFail(error)) )) 
        ))
    
}

 