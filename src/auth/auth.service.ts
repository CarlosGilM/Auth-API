import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { signInDTO, signUpDTO } from './dtos/auth';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(private prismaService: PrismaService, private jwtService: JwtService) { }

  async signup(data: signUpDTO) {
    const userAlreadyExists = await this.prismaService.user.findUnique({
      where: {
        email: data.email,
      }
    })
    if (userAlreadyExists) {
      throw new UnauthorizedException('User already exists')
    }

    const hashPassword = await bcrypt.hash(data.password, 10);
    console.log(hashPassword)

    const user = await this.prismaService.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashPassword,
      }
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }

  async signin(data: signInDTO) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: data.email,
      }
    })
    if (!user) {
      throw new UnauthorizedException('Invalid credentials')
    }
    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials')
    }

    const acessToken = await this.jwtService.signAsync({
      id: user.id,
      email: user.email,
      name: user.name,
    });

    return { acessToken };
  }
}
