import { FilterableField } from '@nestjs-query/query-graphql';
import {
  ObjectType,
  Int,
  ID,
  Field,
  GraphQLISODateTime,
} from '@nestjs/graphql';

@ObjectType('TodoItem')
export class TodoItemDTO {
  @FilterableField(() => ID)
  id!: number;

  @FilterableField()
  title!: string;

  @FilterableField()
  completed!: boolean;

  @Field(() => GraphQLISODateTime)
  created!: Date;

  @Field(() => GraphQLISODateTime)
  updated!: Date;
}
