import { Injectable } from '@nestjs/common';
import { Internal, Role } from './entities/internal.entity';

@Injectable()
export class InternalsService {
  users: Internal[] = [
    {
      id: '1',
      name: 'John',
      lastName: 'Doe',
      role: Role.DRIVER,
      nationalId: '444444',
      account: {
        accountId: '123',
        bankName: 'BankName',
        bankNameId: '55555',
      },
      location: [
        {
          addressLine1: '1 Main Street',
          city: 'San Francisco',
          country: 'CA',
          phone: {
            countryCode: '123',
            number: 122,
          },
          postalCode: '123',
          state: 'CA',
        },
      ],
    },
    {
      id: '2',
      name: 'Marie',
      lastName: 'Mark',
      role: Role.ADMIN,
      nationalId: '444444',
      account: {
        accountId: '123',
        bankName: 'BankName',
        bankNameId: '55555',
      },
      location: [
        {
          addressLine1: '1 Main Street',
          city: 'San Francisco',
          country: 'CA',
          phone: {
            countryCode: '123',
            number: 122,
          },
          postalCode: '123',
          state: 'CA',
        },
      ],
    },
    {
      id: '3',
      name: 'Clark',
      lastName: 'Monroe',
      role: Role.USER,
      nationalId: '444444',
      account: {
        accountId: '123',
        bankName: 'BankName',
        bankNameId: '55555',
      },
      location: [
        {
          addressLine1: '1 Main Street',
          city: 'San Francisco',
          country: 'CA',
          phone: {
            countryCode: '123',
            number: 122,
          },
          postalCode: '123',
          state: 'CA',
        },
      ],
    },
  ];

  findById(id: string): Internal {
    return this.users.find((user) => user.id === id);
  }
}
