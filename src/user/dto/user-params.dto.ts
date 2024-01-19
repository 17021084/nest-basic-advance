import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserParamsDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @IsDefined()
  email: string;
}
