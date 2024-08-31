import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-chat-mensaje',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-mensaje.component.html',
  styleUrl: './chat-mensaje.component.css'
})
export class ChatMensajeComponent {
 @Input() usuario : string = '';
 @Output() nuevoMensaje = new EventEmitter<{usuario:string,texto:string}>();
 mensaje = '';

 enviarMensaje(){
  if (this.mensaje.trim()) {
    this.nuevoMensaje.emit({ usuario: this.usuario, texto: this.mensaje });
    this.mensaje = ''; 
  }
}
}
