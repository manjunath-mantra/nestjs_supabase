import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { UserModule } from './user/user.module';
import { V1Controller } from './v1.controller';

@Module({
  controllers: [V1Controller],
  providers: [],
  exports: [],
  imports: [
    UserModule,
  ],
})
export class V1Module {}