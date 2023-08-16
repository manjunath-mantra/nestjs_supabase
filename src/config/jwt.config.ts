import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  secret: "mvjhjkvghjgcfhbxgfh" || process.env.JWT_SECRET ,
  expiresIn: '7d',
}));
