import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  //todo mover metodo


  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.pattern(nombreApellidoPattern)]],
    email: ['',[Validators.required, Validators.pattern(emailPattern)]],
    username:['',[Validators.required, noPuedeSerStrider] ]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Itzel Alonso',
      email:'test1@test.com',
      username:'altagracia97'
    })
  }

  campoNoValido( campo:string){

    return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched;

  }

  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
