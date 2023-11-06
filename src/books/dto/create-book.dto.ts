import { ApiProperty } from "@nestjs/swagger";
import * as Joi from "joi";

export class CreateBookDto {
    @ApiProperty({
        description: 'Название книги'
    })
    name:string

    @ApiProperty({
        description: 'Краткое описание книги'
    })
    description:string

    @ApiProperty({
        description: 'ID жанра'
    })
    genreId:number

    @ApiProperty({
        description: 'ID автора'
    })
    userId:number

    @ApiProperty({
        description: 'ID издателя'
    })
    publisherId:number
}

export const CreateBookSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required().max(100),
    genre: Joi.number().required().min(1),
    user: Joi.number().required().min(1),
    publisher: Joi.number().required().min(1),
});