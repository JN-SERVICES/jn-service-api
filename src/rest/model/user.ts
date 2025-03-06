import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEmail, IsString, IsUUID } from 'class-validator';

export class User {
  @IsUUID()
  @ApiProperty({ format: 'uuid' })
  id: string;

  @IsString()
  @ApiProperty()
  firebaseUID: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  username: string;

  @IsString()
  @ApiProperty()
  firstName: string;

  @IsString()
  @ApiProperty({ nullable: true })
  lastName: string;

  @IsString()
  @ApiProperty({ nullable: true })
  avatar: string;

  @IsDateString()
  @ApiProperty({ format: 'date-time' })
  createdAt: string;

  @IsDateString()
  @ApiProperty({ format: 'date-time' })
  updatedAt: string;
}
