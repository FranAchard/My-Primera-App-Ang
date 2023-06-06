import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona';
@Injectable({
providedIn: 'root'
})
export class PersonaService {
personas: Persona[] = []
constructor() { }
getAllPersonas(): Persona[] {
  let persona1= new Persona("Francisco", "Achard", 21)
  this.personas.push(persona1)
  this.personas.push(new Persona("Lionel", "Messi", 35))
  this.personas.push(new Persona("Nicky", "Nicole", 22))
return this.personas
}

removePersona(persona:Persona):void {

}
}
