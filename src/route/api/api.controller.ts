import { Controller, Get } from '@nestjs/common';

@Controller()
export class APIController {

	constructor() {}

	@Get()
	welcome(): string {
		return 'Its /api';
	}
}