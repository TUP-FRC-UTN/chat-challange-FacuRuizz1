import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMensajeComponent } from './chat-mensaje.component';

describe('ChatMensajeComponent', () => {
  let component: ChatMensajeComponent;
  let fixture: ComponentFixture<ChatMensajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatMensajeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
