import {ApiProperty} from "@nestjs/swagger";
import * as Joi from "joi";

export class CreateGenreDto {
    @ApiProperty({
        description: 'Название жанра'
    })
    name:string
}

export const CreateGenreSchema = Joi.object({
    name: Joi.string().required(),
});