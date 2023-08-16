import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { UserModule } from './user/user.module';
import { V1Controller } from './v1.controller';
import { AuthModule } from 'src/jwt/jwt.module';

@Module({
  controllers: [V1Controller],
  providers: [],
  exports: [],
  imports: [
    UserModule,
    AuthModule
  ],
})
export class V1Module {}