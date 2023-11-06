import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {ApiProperty} from "@nestjs/swagger";

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({
        description: 'Роль пользователя'
    })
    role:string

    @ApiProperty({
        description: 'ФИО пользователя'
    })
    name:string

    @ApiProperty({
        description: 'Email пользователя'
    })
    email:string

    @ApiProperty({
        description: 'Пароль пользователя'
    })
    password:string
}
