import { Controller, Post, Body } from '@nestjs/common';
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
    console.log({data})
    const { email, password } = data;
    const response = await this.supabaseService.getSupabaseClient().auth.signInWithPassword({ email, password }) as AuthTokenResponse;
    console.log({response})
    if (response.error) {
      throw new Error(response.error.message || 'Login failed');
    }
    
    if (!response.data.user) {
      throw new Error('User not found in response');
    }

    const { user } = response.data;
    const token = await this.jwtAuthService.generateJwtToken(user as User);
    
    return { user, token };
  }
}
