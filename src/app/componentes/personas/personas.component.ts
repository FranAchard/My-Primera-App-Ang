import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
    personas:Persona[]=[]
    constructor(){}
    ngOnInit(): void {
      let persona1= new Persona("Francisco", "Achard", 21)
      this.personas.push(persona1)
      this.personas.push(new Persona("Lionel", "Messi", 35))
    }
}
