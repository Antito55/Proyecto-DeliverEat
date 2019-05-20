import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { PedidoComponent } from './components/pedido/pedido.component';

const routes: Routes = [
    { path: 'carrito', component: CarritoComponent },
    { path: 'pedido', component: PedidoComponent },
    { path: '**', pathMatch:"full", redirectTo:"carrito" },
];

export const APP_ROUTING = RouterModule.forRoot(routes);