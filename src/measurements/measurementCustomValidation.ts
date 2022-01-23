import { ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { Injectable, PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

@Injectable()
export class MeasurementCustomValidationPipe implements PipeTransform {
    transform(value: any, {metatype}: ArgumentMetadata) {


        const object = plainToInstance(metatype, value);
        
        if (isNaN(object.lower_limit) || isNaN(object.upper_limit)){
            throw new BadRequestException('Invalid limit Input Data')
        }

        if (object.lower_limit >= object.upper_limit){
            throw new BadRequestException('Lower limit should be lower than upper')
        }


        return value;
    }
}