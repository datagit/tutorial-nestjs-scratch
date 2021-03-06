import { IsInt, IsString, IsOptional } from 'class-validator';
export class CreateCatDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  @IsOptional()
  readonly breed: string;
}
