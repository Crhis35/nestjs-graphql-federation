import { Location } from '@lib/core/entities';
import {
  Directive,
  ObjectType,
  Field,
  registerEnumType,
  ID,
} from '@nestjs/graphql';
import { Person } from '../../common/entities/person.entity';

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  DRIVER = 'DRIVER',
}

registerEnumType(Role, {
  name: 'Role',
});

@ObjectType()
export class BankAccount {
  @Field(() => String)
  accountId: string;

  @Field(() => String)
  bankName: string;

  @Field(() => String)
  bankNameId: string;
}

@ObjectType()
@Directive('@key(fields: "id")')
export class Internal extends Person {
  @Field(() => ID)
  id: string;

  @Field(() => Role)
  role: Role;

  @Field(() => BankAccount)
  account: BankAccount;

  @Field(() => Location)
  location: Location[];
}
