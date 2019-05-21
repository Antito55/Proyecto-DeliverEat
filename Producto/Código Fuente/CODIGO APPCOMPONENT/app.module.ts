import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { APP_ROUTING } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FinComponent } from './components/fin/fin.component';  

@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    PedidoComponent,
    FinComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
