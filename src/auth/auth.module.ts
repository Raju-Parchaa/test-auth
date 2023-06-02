import { DynamicModule, Module } from '@nestjs/common';
import { ParchaaAuthService } from './auth.service';
import { ClientModule } from '../client/client.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt'
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule } from '@nestjs/config'
import { ClientService } from 'src/client/client.service';
import { ParchaaAuthGuard } from './parchaa-auth.guard';

@Module({})
export class ParchaaAuthModule {
  static register(options: { jwtSecret: string, expiresIn:string }): DynamicModule {
    return {
      module: ParchaaAuthModule,
      imports: [
        ConfigModule.forRoot(),
        ClientModule, 
        PassportModule, 
        JwtModule.register({
          secret: options.jwtSecret,
          signOptions: { expiresIn: options.expiresIn },
        }),
      ],
      providers: [
        {
          provide: ParchaaAuthService,
          useFactory: (clientService: ClientService, jwtService: JwtService) => {
            return new ParchaaAuthService(clientService, jwtService, options.jwtSecret);
          },
          inject: [ClientService, JwtService],
        },
        {
          provide: JwtStrategy,
          useFactory: () => {
            return new JwtStrategy(options.jwtSecret);
          },
        },
        ParchaaAuthGuard
      ],
      exports: [ParchaaAuthService, ParchaaAuthGuard],
    };
  }
}
