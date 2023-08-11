// src/graphql/users/users.resolver.ts
import { Resolver, Query, Args } from '@nestjs/graphql';
import { User } from './user.entity';

@Resolver(() => User)
export class UsersResolver {
  private readonly users: User[] = [
    { id: '1', name: 'user1', age: 'user1@example.com', created_at: '' },
  ];

  @Query(() => User)
  getUser(@Args('id') id: string): User {
    return this.users.find((user) => user.id === id);
  }
}
