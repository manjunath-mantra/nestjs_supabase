import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { RouterModule } from '@nestjs/core';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupabaseService } from './supabase/supabase.service';
import { UsersResolver } from './user/user.resolver';
import { APIModule } from './route/api/api.module';
import { APIRoutes } from './route/api/api.route';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true
    }),
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
  providers: [AppService,SupabaseService,UsersResolver],
})
export class AppModule {}
