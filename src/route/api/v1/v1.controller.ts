import { Controller, Get } from '@nestjs/common';

@Controller()
export class V1Controller {

	constructor() {}

	@Get()
	welcome(): string {
		return 'Its /api/v1';
	}
}