import { UserModule } from "./user/user.module";

export const V1Routes = [
    {
      path: 'user',
      module: UserModule,
    },
];