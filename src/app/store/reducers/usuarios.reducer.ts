import { Usuario } from './../../models/usuario.model';
import * as fromUariosActions from '../actions';

export interface IUsuarioState {
    users: Usuario[];
    loadedUsers: boolean;
    loading: boolean;
    error: any;
};

const initialState: IUsuarioState = {    
    users: [],
    loadedUsers:false,
    loading: false,
    error: null
        
};

export function UsuariosReducer(
    state = initialState, 
    action: fromUariosActions.UsuariosActions ): IUsuarioState {
    switch (action.type) {
        case fromUariosActions.UsuariosActionTypes.CARGAR_USUARIOS: 
            return {
                ...state,
                loading:true
            };
        case fromUariosActions.UsuariosActionTypes.CARGAR_USUARIO_SUCCESS:
            return {
                ...state,
                loading: false,
                loadedUsers:true,
                users: [...action.usuarios]
            };
        case fromUariosActions.UsuariosActionTypes.CARGAR_USUARIO_FAIL:
            return {
                ...state,
                loadedUsers:false,
                loading:false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                }
                
            }
        

        default: return state;
        
    }
}