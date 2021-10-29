import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  activarMsj:boolean=false;
  formulario:FormGroup;

  constructor(public Form:FormBuilder) {
    this.formulario=Form.group({
      nombre: ["",[Validators.required,Validators.maxLength(10)]],
      telefono: ["",[Validators.required,Validators.maxLength(9),Validators.pattern("^[0-9]*$")]],
      correo: ["",[Validators.required,Validators.email]],
      dirigido:["",Validators.required],
      mensaje:["",Validators.required]
    })
   }

  ngOnInit(): void {
  }

  validacion(){
    this.activarMsj=true;
  }
}
