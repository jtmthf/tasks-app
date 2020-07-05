import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { TodoItemEntity } from './todo-item.entity';
import { TodoItemDTO } from './todo-item.dto';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],
      resolvers: [{ DTOClass: TodoItemDTO, EntityClass: TodoItemEntity }],
    }),
  ],
})
export class TodoItemModule {}
