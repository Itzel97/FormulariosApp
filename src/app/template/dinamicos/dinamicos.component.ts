import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}
interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent  {

  nuevoJuego:string="";

  persona:Persona = {
    nombre:'Dante',
    favoritos:[
      {
        id:1,
        nombre:'kirby'
      },
      {
        id:2,
        nombre:'Mario'
      }
    ]
  }

  @ViewChild('miFormularioNombre') miFormularioNombre!: NgForm;


  validarNombre(): boolean {
    return this.miFormularioNombre?.controls['nombre']?.invalid
      && this.miFormularioNombre?.controls['nombre']?.touched;
  }

  guardar() {
    console.log('formulario posteado', this.miFormularioNombre);
  }

  eliminar(index:number){
    this.persona.favoritos.splice(index,1);

  }

  agregarJuego(){
    const nuevoFavorito : Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre:this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';

  }
}
