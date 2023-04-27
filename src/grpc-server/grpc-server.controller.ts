import {
  Body,
  Controller,
  UseFilters,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthGuard } from '../auth/auth.guard';
import { ChatDTO } from '../chat.dto';
import { ValidationExceptionFilter } from '../validation.exception-filter';
// import * as guard from '@nestjs/core';

@UseFilters(new ValidationExceptionFilter())
@UseGuards(AuthGuard)
@Controller('grpc-server')
export class GrpcServerController {
  @GrpcMethod('ChatService', 'Chat')
  chat(@Body(new ValidationPipe()) data: ChatDTO, metadata, call) {
    // do something with the request
    console.log(data);

    // return the response to the client
    return {
      id: 1,
      message: {
        id: 1,
        message: `I, the server, am answering the message '${data.message}'`,
        createdAt: new Date().toISOString(),
      },
      createdAt: new Date().toISOString(),
    };
  }
}
