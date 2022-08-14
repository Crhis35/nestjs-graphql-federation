import { Injectable } from '@nestjs/common';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  customers: Customer[] = [
    {
      id: '1',
      name: 'John',
      lastName: 'Doe',
      nationalId: '444444',
      creditCard: [
        {
          cvv: '123',
          expireYear: '2022',
          expiryDate: '2022-05-03',
          expiryMonth: '12',
          number: 122343434,
          zipCode: '123444',
        },
      ],
      shipping: [
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
      nationalId: '444444',
      creditCard: [
        {
          cvv: '123',
          expireYear: '2022',
          expiryDate: '2022-05-03',
          expiryMonth: '12',
          number: 122343434,
          zipCode: '123444',
        },
      ],
      shipping: [
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
      nationalId: '444444',
      creditCard: [
        {
          cvv: '123',
          expireYear: '2022',
          expiryDate: '2022-05-03',
          expiryMonth: '12',
          number: 122343434,
          zipCode: '123444',
        },
      ],
      shipping: [
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

  findById(id: string): Customer {
    return this.customers.find((customer) => customer.id === id);
  }
}
