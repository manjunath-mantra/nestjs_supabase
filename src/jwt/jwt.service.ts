
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthService {
    constructor(
        private jwtService: JwtService,
        ) { }

    async generatejwttoken(user: any) {
        const payload = { username: user.username, sub: user.userId,email:user.email,mobile:user.mobile, role:user.role };
        const jwtConstants = { secret:'mvjhjkvghjgcfhbxgfh',
            expiresIn: '60m',
         }
        return {
            access_token: this.jwtService.sign(payload,jwtConstants)
        }
    }
}
