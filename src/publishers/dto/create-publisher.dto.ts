import {ApiProperty} from "@nestjs/swagger";
import * as Joi from "joi";

export class CreatePublisherDto {
    @ApiProperty({
        description: 'Название издателя'
    })
    name:string
}

export const CreatePublisherSchema = Joi.object({
    name: Joi.string().required(),
});