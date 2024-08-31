import { Component } from '@angular/core';
import { ChatMensajeComponent } from "../chat-mensaje/chat-mensaje.component";

@Component({
  selector: 'app-chat-sala',
  standalone: true,
  imports: [ChatMensajeComponent],
  templateUrl: './chat-sala.component.html',
  styleUrl: './chat-sala.component.css'
})
export class ChatSalaComponent {
 mensajes: {usuario:string,texto:string}[] = [];
 actualizarMensajes(mensaje:{usuario:string,texto:string}){
   this.mensajes.push(mensaje);
 }
}
