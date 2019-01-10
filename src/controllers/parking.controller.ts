import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Parking} from '../models';
import {ParkingRepository} from '../repositories';

export class ParkingController {
  constructor(
    @repository(ParkingRepository)
    public parkingRepository : ParkingRepository,
  ) {}

  @post('/parkings', {
    responses: {
      '200': {
        description: 'Parking model instance',
        content: {'application/json': {schema: {'x-ts-type': Parking}}},
      },
    },
  })
  async create(@requestBody() parking: Parking): Promise<Parking> {
    return await this.parkingRepository.create(parking);
  }

  @get('/parkings/count', {
    responses: {
      '200': {
        description: 'Parking model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Parking)) where?: Where,
  ): Promise<Count> {
    return await this.parkingRepository.count(where);
  }

  @get('/parkings', {
    responses: {
      '200': {
        description: 'Array of Parking model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Parking}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Parking)) filter?: Filter,
  ): Promise<Parking[]> {
    return await this.parkingRepository.find(filter);
  }

  @patch('/parkings', {
    responses: {
      '200': {
        description: 'Parking PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() parking: Parking,
    @param.query.object('where', getWhereSchemaFor(Parking)) where?: Where,
  ): Promise<Count> {
    return await this.parkingRepository.updateAll(parking, where);
  }

  @get('/parkings/{id}', {
    responses: {
      '200': {
        description: 'Parking model instance',
        content: {'application/json': {schema: {'x-ts-type': Parking}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Parking> {
    return await this.parkingRepository.findById(id);
  }

  @patch('/parkings/{id}', {
    responses: {
      '204': {
        description: 'Parking PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() parking: Parking,
  ): Promise<void> {
    await this.parkingRepository.updateById(id, parking);
  }

  @put('/parkings/{id}', {
    responses: {
      '204': {
        description: 'Parking PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() parking: Parking,
  ): Promise<void> {
    await this.parkingRepository.replaceById(id, parking);
  }

  @del('/parkings/{id}', {
    responses: {
      '204': {
        description: 'Parking DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.parkingRepository.deleteById(id);
  }
}
