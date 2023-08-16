import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { RouterModule } from '@nestjs/core';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersResolver } from './user/user.resolver';
import { APIModule } from './route/api/api.module';
import { APIRoutes } from './route/api/api.route';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt.strategy';
import { AuthController } from './auth/auth.controller';
import { SupabaseService } from './supabase/supabase.service';
import { JwtAuthService } from './jwt/jwt.service';
import { AuthModule } from './jwt/jwt.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true
    }),
    ConfigModule.forRoot(),
    PassportModule,
    SupabaseModule,
    JwtModule,
    AuthModule,
    RouterModule.register([
      {
        path: 'api',
        module: APIModule,
        children: APIRoutes,
      },
    ]),
    APIModule,
  ],
  controllers: [AppController],
  providers: [AppService,SupabaseService,UsersResolver, JwtStrategy,SupabaseService,JwtAuthService, ConfigService],
})
export class AppModule {}
