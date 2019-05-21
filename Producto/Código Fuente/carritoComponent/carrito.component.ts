import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styles: []
})
export class CarritoComponent implements OnInit {
  productos = ['Hamburguesa Clásica','Hamburguesa de campo','Hamburguesa patagónica']
  constructor() { 
    
  }

  ngOnInit() {
  }

  quitarElemento(i:number){
    console.log(this.productos);
    this.productos.splice(i,1);
    console.log(this.productos);
    
  }

  agregar(){
    this.productos.push('Hamburguesa clásica');
  }

}
