import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent  {
  pago:string = '';
  seleccionado:string = '';
  numTjta:string;
  nuevo: string;
  public valido: boolean;
  public esta = "esta";
  
  // forma:FormGroup;
  constructor() { 
    // this.forma = new FormGroup({
    //   'calle': new FormControl('',Validators.required),
    //   'ciudad': new FormControl('', Validators.required),
    //   'hora': new FormControl ('', Validators.required),
    //   'formaPago': new FormControl('',Validators.required),
    //   'numeroTjta': new FormControl('', Validators.required),
    // })

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

guardarCambios(forma: NgForm ){
  console.log(forma.value)
}


}
