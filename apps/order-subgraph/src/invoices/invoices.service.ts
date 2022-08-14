import { Injectable } from '@nestjs/common';
import { OrderStatus } from '../orders/entities/order.entity';
import {
  Invoice,
  InvoiceStatus,
  PaymentMethodsTypes,
} from './entities/invoice.entity';

@Injectable()
export class InvoicesService {
  invoices: Invoice[] = [
    {
      discount: 0,
      orders: [
        {
          id: '1',
          paid: true,
          price: 3000,
          receiver: {
            id: '1',
          },
          sender: {
            id: '2',
          },
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
          status: OrderStatus.PENDING,
        },
      ],
      price: 3000,
      id: '1',
      paymentMethod: PaymentMethodsTypes.DEBIT,
      status: InvoiceStatus.PROCESSING,
      tax: 0,
    },
  ];

  findById(id: string): Invoice {
    return this.invoices.find((invoice) => invoice.id === id);
  }
}
