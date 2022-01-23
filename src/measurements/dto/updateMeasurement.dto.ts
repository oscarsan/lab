import { IsString, IsNotEmpty } from 'class-validator';
 
export class UpdateMeasurementDto {
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