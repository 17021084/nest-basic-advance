import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class UserParamsDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @IsDefined()
  email: string;
  
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
