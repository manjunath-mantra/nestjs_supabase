import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {

	constructor(
		private readonly userService: UserService,
		
	) {}

  @Get()
  findAll(): string {
    return 'This action returns all user';
  }

  @Get('/get')
  async getUserData() {
		const { data, error } = await this.userService.getUserData();

		/* Throwing an error */
    if (error) {
			console.error({error})
      throw new Error("Unable to get all users!");
    }

    return data;
  }

  @Post('/create')
  async createUser(@Body() payload) {
		
    const { error } = await this.userService.createUser(payload)

    if (error) {
			console.error({error});
      throw new Error(error.message);
    }

    return {
      statusCode:200,
      message:"User created successfully!",
    };
  }

  @Put('/update')
  async updateUser(@Body() payload) {
    let id = payload.id
    delete payload.id
    const { error } = await this.userService.updateUser(id, payload)

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
		const { error } = await this.userService.deleteUser(payload.id) 

    if (error) {
      throw new Error(error.message);
    }

    return {
      statusCode:200,
      message:"User deleted successfully!",
    };
  }
}