import { Module } from '@nestjs/common';
import { SupabaseService } from './supabase.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtAuthService } from 'src/jwt/jwt.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [ConfigModule],
  providers: [SupabaseService,JwtAuthService,JwtService, ConfigService],
  exports: [SupabaseService],
})
export class SupabaseModule {}
