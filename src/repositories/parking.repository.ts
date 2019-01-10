import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Parking} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ParkingRepository extends DefaultCrudRepository<
  Parking,
  typeof Parking.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Parking, dataSource);
  }
}
