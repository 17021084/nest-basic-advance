import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'Please enter email address' })
  @IsDefined()
  email: string;

  @IsString({ message: 'Name phai string;' })
  @IsDefined()
  name: string;
}
