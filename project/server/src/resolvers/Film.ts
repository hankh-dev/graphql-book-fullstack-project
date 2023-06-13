import {
  Arg,
  Field,
  FieldResolver,
  Int,
  ObjectType,
  Query,
  Resolver,
  Root,
} from 'type-graphql';
import ghibliData from '../data/ghibli';
// import { Director } from '../entities/Director';
import { Film } from '../entities/Film';


@Resolver(Film)
export class FilmResolver {
  @Query(() => [Film])
  films(): Film[] {
    return ghibliData.films;
  }
}
