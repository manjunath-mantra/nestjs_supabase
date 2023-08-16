import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { V1Module } from './v1/v1.module';
import { APIController } from './api.controller';
import { V1Routes } from './v1/v1.route';

@Module({
  controllers: [APIController],
  providers: [],
  exports: [],
  imports: [
    V1Module,
  ],
})
export class APIModule {}