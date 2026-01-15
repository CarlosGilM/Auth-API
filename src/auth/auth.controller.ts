import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { signInDTO, signUpDTO } from './dtos/auth';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post("signup")
    async signup(@Body() data: signUpDTO) {
        return this.authService.signup(data);
    }

    @Post("signin")
    async signin(@Body() data: signInDTO) {
        return this.authService.signin(data);;
    }

    @UseGuards(AuthGuard)
    @Get("me")
    async me(@Request() request) {
        return request.user;
    }

}
