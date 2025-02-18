import { IsOptional, IsString, IsUUID, IsInt, Min } from 'class-validator';

export class CreateMenuDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsUUID()
  parentId?: string;

  @IsOptional()
  @IsInt()
  depth?: number = 1; 
}
