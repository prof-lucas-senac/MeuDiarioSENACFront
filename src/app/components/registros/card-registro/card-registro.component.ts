import { Component, Input } from '@angular/core';
import { Registro } from './Registro';

@Component({
  selector: 'app-card-registro',
  standalone: true,
  imports: [],
  templateUrl: './card-registro.component.html',
  styleUrl: './card-registro.component.css'
})
export class CardRegistroComponent {
  @Input()
  registroDestino: Registro = {
    titulo: '',
    conteudo: '',
    data: new Date('1990-01-01')
  };
}
