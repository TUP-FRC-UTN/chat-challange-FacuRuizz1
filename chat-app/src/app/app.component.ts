import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatSalaComponent } from "./chat-sala/chat-sala.component";
import { ChatMensajeComponent } from './chat-mensaje/chat-mensaje.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatSalaComponent, ChatMensajeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chat-app';
}
