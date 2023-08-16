import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/auth/auth.controller';
import { SupabaseService } from 'src/supabase/supabase.service';
import { JwtAuthService } from './jwt.service';
import { SupabaseModule } from 'src/supabase/supabase.module';

@Module({
  imports: [
    JwtModule.register({
      secret: "mvjhjkvghjgcfhbxgfh", 
      signOptions: { expiresIn: '1h' },
    }),
    SupabaseModule
  ],
  controllers: [AuthController],
  providers: [SupabaseService,ConfigService,JwtAuthService],

})
export class AuthModule {}
