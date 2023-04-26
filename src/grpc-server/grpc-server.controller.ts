import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
// import * as guard from '@nestjs/core';

@Controller('grpc-server')
export class GrpcServerController {
  @GrpcMethod('ChatService', 'Chat')
  chat(data) {
    console.log(data);
    return {
      id: 1,
      message: {
        id: 1,
        message: 'Denis is here',
        createdAt: new Date().toISOString(),
      },
      createdAt: new Date().toISOString(),
    };
  }
}
