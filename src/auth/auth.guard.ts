import { Metadata, status } from '@grpc/grpc-js';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const metadata: Metadata = context.switchToRpc().getContext();
    const token = metadata.get('authorization')[0];

    // just to example a validation
    if (token === '1234567') {
      return true;
    }

    // throw error if token is not valid
    throw new RpcException({
      messsage: 'Unauthorized',
      code: status.UNAUTHENTICATED
    })
  }
}
