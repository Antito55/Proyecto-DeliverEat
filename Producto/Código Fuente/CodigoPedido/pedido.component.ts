import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  pago:string = '';
  seleccionado:string = '';
  numTjta:string;
  nuevo: string;
  public valido: boolean;
  public esta = "esta";
  constructor() { 

  }

  ngOnInit() {
    console.log(f.valid);
  }


  capturar(pago:string) {
    this.pago = pago;
    this.valido = null;
    // Pasamos el valor seleccionado a la variable verSeleccion
    
    console.log(this.pago);
}
validarTarjeta(tarjeta:string){
  this.numTjta = tarjeta;
  this.nuevo = this.numTjta.substr(0,1);
  if(this.nuevo === '4'){
      console.log('Es Visa');
      this.valido = true;
  }
  else{
    this.valido = false;
  }
}

volver(){
  this.valido = null;
}

onSubmit(f) {
        console.log(f.value);
    }
}
