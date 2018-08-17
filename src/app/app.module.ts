import { NgModule } from '@angular/core';
import { environment } from './../environments/environment';

//modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

//custom modules
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';

//NgrX - storeModule
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule  } from '@ngrx/store-devtools'
//NgrX - reducers
import { AppReducers } from './store/app.reducer';
//NgrX - effects
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/affects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //reducers
    StoreModule.forRoot(AppReducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge:25,
      logOnly:environment.production
    }), 
    // custom modules
    SharedModule,
    UsuariosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
