import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent {

  a=0;
  //
// nombte:..'', required, minLegin 3, mostra el texto condicional solo al entrar y salir,
  // crear metodo guardar, el boton lo se bloqueara al darle clic saldra el error de campo error
  // e imprimir valor del formulario solo si es valido 
  miFormulario:FormGroup= this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array( [
      ['Metal Fear'], //['Metal Fear', Validators.required]
      ['Zelda']
    ], Validators.required  )
  });

  nuevoFavorito:FormControl = this.fb.control('',Validators.required);

  constructor(private fb: FormBuilder){}

  get favoritosArr() {
    // esto tambien funciona     return this.miFormulario.controls["favoritos"] as FormArray;

    return this.miFormulario.get("favoritos") as FormArray;
  }

  campoNoValido(campo:string){
    return this.miFormulario.controls[campo].errors &&
            this.miFormulario.controls[campo].touched
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid){return;}

    // this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
    
  }

  borrarFavorito (index : number){
    this.favoritosArr.removeAt(index);
  }

  Guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
