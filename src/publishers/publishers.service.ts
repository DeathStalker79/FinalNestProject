import { Injectable } from '@nestjs/common';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Publisher} from "./entities/publisher.entity";
import {Repository} from "typeorm";
import * as moment from "moment";

@Injectable()
export class PublishersService {
  constructor(
     @InjectRepository(Publisher)
     private repository: Repository<Publisher>
  ) {}
  
  create(data: CreatePublisherDto) {
    return this.repository.save({
      ...data,
      created_at:moment().format('YYYY-MM-DD HH:mm:ss'),
      updated_at:moment().format('YYYY-MM-DD HH:mm:ss')
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, data: UpdatePublisherDto) {
    return this.repository.save({...data,id});
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
