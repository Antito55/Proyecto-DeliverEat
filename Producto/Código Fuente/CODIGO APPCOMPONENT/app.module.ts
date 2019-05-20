import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { APP_ROUTING } from './app.routes';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    PedidoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
