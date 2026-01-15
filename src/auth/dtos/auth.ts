import { IsEmail, IsNotEmpty } from "class-validator";

export class signUpDTO {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    name: string;
}

export class signInDTO {
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;
}