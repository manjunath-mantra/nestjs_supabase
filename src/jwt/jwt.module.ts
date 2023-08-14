import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: "mvjhjkvghjgcfhbxgfh", 
      signOptions: { expiresIn: '1h' },
    }),
  ],
})
export class AuthModule {}
