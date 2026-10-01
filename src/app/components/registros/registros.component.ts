import { Component } from '@angular/core';
import { CardRegistroComponent } from './card-registro/card-registro.component';
import { Registro } from './card-registro/Registro';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-registros',
  standalone: true,
  imports: [CardRegistroComponent, NgFor],
  templateUrl: './registros.component.html',
  styleUrl: './registros.component.css'
})
export class RegistrosComponent {

  registrosOrigem: Registro[] = [
    {
      titulo: 'Hi Natieli',
      conteudo: 'tESTE SOM 123',
      data: new Date('2024-01-01')
    },
    {
      titulo: 'Hi Leandro',
      conteudo: 'How are you?',
      data: new Date('2024-01-01')
    },
    {
      titulo: 'Quero café',
      conteudo: 'É!',
      data: new Date('2024-01-01')
    }
  ]
}
