import { Controller, Get,Post,Body, Delete, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { SupabaseService } from './supabase/supabase.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly supabaseService: SupabaseService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/get')
  async getUserData() {
    const supabase = this.supabaseService.getSupabaseClient();
    const { data, error } = await supabase
      .from('users')
      .select('*');

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  @Post('/create')
  async createUser(@Body() payload) {
    const supabase = this.supabaseService.getSupabaseClient();
    const { data, error } = await supabase
    .from('users')
    .insert(payload)

    if (error) {
      throw new Error(error.message);
    }

    return {
      statusCode:200,
      message:"User created successfully!",
      data
    };
  }

  @Put('/update')
  async updateUser(@Body() payload) {
    const supabase = this.supabaseService.getSupabaseClient();
    let id = payload.id
    delete payload.id
    const { error } = await supabase
    .from('users')
    .update({ age: 28 })
    .eq('id', id)

    if (error) {
      throw new Error(error.message);
    }

    return {
      statusCode:200,
      message:"User updated successfully!",
    };
  }


  @Delete('/delete')
  async deleteUser(@Body() payload) {
    const supabase = this.supabaseService.getSupabaseClient();
    const { error } = await supabase
    .from('users')
    .delete()
    .eq('id', payload.id)

    if (error) {
      throw new Error(error.message);
    }

    return {
      statusCode:200,
      message:"User deleted successfully!",
    };
  }
}
