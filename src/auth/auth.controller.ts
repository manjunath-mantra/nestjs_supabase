import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { JwtAuthService } from '../jwt/jwt.service';
import { AuthResponse, AuthTokenResponse, User } from '@supabase/supabase-js'; 

@Controller('auth')
export class AuthController {
  constructor(
    private readonly supabaseService: SupabaseService,
    private readonly jwtAuthService: JwtAuthService,
  ) {}

  @Post('register')
  async register(@Body() data: { email: string, password: string }) {
    const { email, password } = data;
    const response = await this.supabaseService.getSupabaseClient().auth.signUp({ email, password }) as AuthResponse;
    
    if (response.error) {
      throw new Error(response.error.message || 'Registration failed');
    }
    
    if (!response.data.user) {
      throw new Error('User not found in response');
    }
    
    return response.data.user;
  }

 
  @Post('login')
  async login(@Body() data: { email: string, password: string }) {
    try {
      const { email, password } = data;
      
      // Authenticate user with Supabase
      const response = await this.supabaseService.getSupabaseClient().auth.signInWithPassword({ email, password }) as AuthTokenResponse;
      
      if (response.error) {
        throw new HttpException(response.error.message || 'Login failed', HttpStatus.UNAUTHORIZED);
      }
      
      if (!response.data.user) {
        throw new HttpException('User not found in response', HttpStatus.NOT_FOUND);
      }

      // Generate JWT token
      const { user } = response.data;
      console.log({user})
      const token = await this.jwtAuthService.generatejwttoken(user as User);
      
      return { user, token };
    } catch (error) {
      console.log({error})
      throw new HttpException('Login failed', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
