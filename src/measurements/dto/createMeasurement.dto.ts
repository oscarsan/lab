import { IsString, IsNotEmpty } from 'class-validator';
 
export class CreateMeasurementDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  unit: string;

  @IsNotEmpty()
  upper_limit: string;

  @IsNotEmpty()
  lower_limit: string;
}