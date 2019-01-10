import {Entity, model, property} from '@loopback/repository';

@model()
export class Parking extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'number',
  })
  lat?: number;

  @property({
    type: 'number',
  })
  lon?: number;

  @property({
    type: 'number',
  })
  pricePerHour?: number;

  @property({
    type: 'number',
  })
  capacity?: number;

  constructor(data?: Partial<Parking>) {
    super(data);
  }
}
