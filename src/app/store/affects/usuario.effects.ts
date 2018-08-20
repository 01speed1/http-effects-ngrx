import { CargarUsuarioSuccess, CargarUsuarioFail } from './../actions/usuario.actions';
import { Injectable } from "@angular/core";
import { Actions, Effect } from '@ngrx/effects'

import {of} from 'rxjs'

import * as usuarioActions from '../actions'
import { map, switchMap, catchError } from "rxjs/operators";
import { UsuarioService } from "../../services/usuario.service";


@Injectable()
export class UsuarioEffects {

    constructor(
        private Actions$: Actions,
        private sUsuarios: UsuarioService
    ) {}

    @Effect({dispatch: true})
    cargarUsuario$ = this.Actions$
        .ofType(usuarioActions
                .UsuarioActionTypes
                .CARGAR_USUARIO )
        .pipe(switchMap( (action: usuarioActions.CargarUsuario ) => this.sUsuarios.getUserById(action.id)
            .pipe(
                map(user => new CargarUsuarioSuccess( user )),
                catchError( error => of(new CargarUsuarioFail(error)) )) 
        ))
    
}

 