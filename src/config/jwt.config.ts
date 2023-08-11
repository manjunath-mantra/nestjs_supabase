import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET || 'mvjhjkvghjgcfhbxgfh',
  expiresIn: '7d',
}));
