import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'Please enter email address' })
  @IsDefined()
  email: string;

  @IsString({ message: 'Name phai string;' })
  @IsDefined()
  name: string;
}
