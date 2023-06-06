import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
@Input() persona: Persona = new Persona()
@Output() deletePersona :EventEmitter<Persona>=new EventEmitter()
constructor() { }
ngOnInit(): void {
}
festejo(persona:Persona){
  persona.cumplirAnios()
}
resta(persona:Persona){
  persona.restarAnios()
}
borrarPersona(personaParaBorrar:Persona){
  this.deletePersona.emit(personaParaBorrar)
}
}
