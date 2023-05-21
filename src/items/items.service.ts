import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: 'kdhahdhal',
      name: 'Item 1',
      qty: 100,
      description: 'This is Item One',
    },
    {
      id: 'sjdsojajsa',
      name: 'Item 2',
      qty: 50,
      description: 'This is Item Two',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
