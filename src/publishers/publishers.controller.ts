import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UsePipes, ParseIntPipe} from '@nestjs/common';
import { PublishersService } from './publishers.service';
import {CreatePublisherDto, CreatePublisherSchema} from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import {Roles} from "../decorators/roles.decorator";
import {Role} from "../enums/role.enum";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {RolesGuard} from "../roles/roles.guard";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {JoiValidationPipe} from "../pipes/ValidationPipe";

@ApiTags('Publishers')
@ApiBearerAuth()
@Controller('publishers')
@UseGuards(JwtAuthGuard,RolesGuard)
export class PublishersController {
  constructor(private readonly publishersService: PublishersService) {}

  @Post()
  @Roles(Role.Admin)
  @UsePipes(new JoiValidationPipe(CreatePublisherSchema))
  create(@Body() createPublisherDto: CreatePublisherDto) {
    return this.publishersService.create(createPublisherDto);
  }

  @Get()
  @Roles(Role.Admin, Role.Author)
  findAll() {
    return this.publishersService.findAll();
  }

  @Get(':id')
  @Roles(Role.Admin)
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.publishersService.findOne(+id);
  }

  @Patch(':id')
  @Roles(Role.Admin)
  update(@Param('id', ParseIntPipe) id: string, @Body() updatePublisherDto: UpdatePublisherDto) {
    return this.publishersService.update(+id, updatePublisherDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.publishersService.remove(+id);
  }
}
