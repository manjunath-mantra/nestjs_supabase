// import { Module } from '@nestjs/common';
// import { GraphQLModule } from '@nestjs/graphql';
// import { join } from 'path';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { SupabaseService } from './supabase/supabase.service';
// import { UsersResolver } from './user/user.resolver';

// @Module({
//   imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
//     driver: ApolloDriver,
//     autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
//     playground: true
//   })],
//   controllers: [AppController],
//   providers: [AppService,SupabaseService,UsersResolver],
// })
// export class AppModule {}


import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { SupabaseModule } from './supabase/supabase.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt.strategy';
import { AuthController } from './auth/auth.controller';
import { SupabaseService } from './supabase/supabase.service';
import { JwtAuthService } from './jwt/jwt.service';


@Module({
  imports: [
    ConfigModule.forRoot(),
    PassportModule,
    SupabaseModule,
    JwtModule,
  ],
  controllers: [AuthController],
  providers: [JwtStrategy,SupabaseService,JwtAuthService,ConfigService],
})
export class AppModule {}

