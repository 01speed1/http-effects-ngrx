import { CargarUsuarios } from './../../store/actions/usuarios.actions';
import { IAppState } from './../../store/app.reducer';
import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  usersList: Usuario[] = [];
  loading: boolean;

  constructor( private store:Store<IAppState> ) {  }

  ngOnInit() {
    this.store
      .select('usuarios')
      .subscribe( usuarios => {
        this.usersList = usuarios.users
        this.loading = usuarios.loading
      } )
    
    this.store.dispatch( new CargarUsuarios() )
  }



}
