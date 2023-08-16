import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';

interface UserModel {
  id?: string;
  name: string;
  age: number;
}

@Injectable()
export class UserService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async getUserData() {
    const supabase = this.supabaseService.getSupabaseClient();
    return await supabase.from('users').select('*');
  }

  async createUser(payload) {
    const supabase = this.supabaseService.getSupabaseClient();
    return await supabase.from('users').insert(payload);
  }

  async updateUser(id: string, payload: UserModel) {
    const supabase = this.supabaseService.getSupabaseClient();
    return await supabase.from('users').update(payload).eq('id', id);
  }

  async deleteUser(id: string) {
    const supabase = this.supabaseService.getSupabaseClient();
    return await supabase.from('users').delete().eq('id', id);
  }
}
