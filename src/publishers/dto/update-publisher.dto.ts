import { PartialType } from '@nestjs/mapped-types';
import { CreatePublisherDto } from './create-publisher.dto';
import {ApiProperty} from "@nestjs/swagger";

export class UpdatePublisherDto extends PartialType(CreatePublisherDto) {
    @ApiProperty({
        description: 'Название издателя'
    })
    name:string
}
