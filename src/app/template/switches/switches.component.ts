import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent  {

  persona = {
    genero: 'FS',
    notificaciones: true
  }

  terminosYCondiciones:boolean = false;


}
