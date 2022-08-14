import { Injectable } from '@nestjs/common';
import { Order, OrderStatus } from './entities/order.entity';

@Injectable()
export class OrdersService {
  orders: Order[] = [
    {
      id: '1',
      paid: true,
      price: 3000,
      receiver: { id: '1' },
      sender: { id: '2' },
      shipping: {
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
      status: OrderStatus.PAYMENT_DUE_DATE,
    },
    {
      id: '2',
      paid: true,
      price: 7000,
      receiver: { id: '1' },
      sender: { id: '2' },
      shipping: {
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
      status: OrderStatus.PAYMENT_DUE_DATE,
    },
    {
      id: '3',
      paid: true,
      price: 5000,
      receiver: { id: '1' },
      sender: { id: '2' },
      shipping: {
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
      status: OrderStatus.PAYMENT_DUE_DATE,
    },
  ];

  findById(id: string): Order {
    return this.orders.find((order) => order.id === id);
  }
}
