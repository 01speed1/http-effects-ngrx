import { Usuario } from './../../models/usuario.model';
import { CargarUsuario } from './../../store/actions/usuario.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAppState }  from '../../store/app.reducer'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  user: Usuario
  loading: boolean;
  error: any = null;

  constructor(
    private router: ActivatedRoute,
    private store: Store< IAppState >) { }

  ngOnInit() {
    this.router.params
      .subscribe(params =>  {
        const id = params['id']
        this.store.dispatch( new CargarUsuario(id) )
      })

    this.store.select('usuario').subscribe( payload => {
      this.user = payload.user
      this.loading = payload.loading
      this.error = payload.error
    })
  }

}
