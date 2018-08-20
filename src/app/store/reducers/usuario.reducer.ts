import { Usuario } from './../../models/usuario.model';
import * as fromUsuariosActions from '../actions';

export interface IUserState {
    user: Usuario;
    loadedUser: boolean;
    loading: boolean;
    error: any;
};

const initialState: IUserState = {    
    user: null,
    loadedUser:false,
    loading: false,
    error: null
        
};

export function UsuarioReducer(
    state = initialState, 
    action: fromUsuariosActions.UsuarioActions ): IUserState {
    switch (action.type) {
        case fromUsuariosActions.UsuarioActionTypes.CARGAR_USUARIO: 
            return {
                ...state,
                loading:true,
                error: null
            };
        case fromUsuariosActions.UsuarioActionTypes.CARGAR_USUARIO_SUCCESS:
            return {
                ...state,
                loading: false,
                loadedUser:true,
                user: {...action.usuario}
            };
        case fromUsuariosActions.UsuarioActionTypes.CARGAR_USUARIO_FAIL:
            return {
                ...state,
                loadedUser:false,
                loading:false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                },
                user: null

                
            }
        

        default: return state;
        
    }
}