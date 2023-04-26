import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable, lastValueFrom } from 'rxjs';

interface ChatService {
  chat(data: { chatId: number; message: string }): Observable<any>;
}

@Injectable()
export class GrpcClientService implements OnModuleInit {
  private chatService: ChatService;
  constructor(@Inject('CHAT_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.chatService = this.client.getService('ChatService');
  }

  chat(data: { chatId: number; message: string }): Promise<any> {
    return lastValueFrom(this.chatService.chat(data));
  }
}
