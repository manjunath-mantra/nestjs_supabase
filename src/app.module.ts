
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { SupabaseModule } from './supabase/supabase.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt.strategy';
import { AuthController } from './auth/auth.controller';
import { SupabaseService } from './supabase/supabase.service';
import { JwtAuthService } from './jwt/jwt.service';
import { AuthModule } from './jwt/jwt.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    PassportModule,
    SupabaseModule,
    JwtModule,
    AuthModule
  ],
  controllers: [AuthController],
  providers: [JwtStrategy,SupabaseService,JwtAuthService,ConfigService],
})
export class AppModule {}

