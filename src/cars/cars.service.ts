import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Yaris S',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Honda Fit',
    },
    {
      id: 3,
      brand: 'Tesla',
      model: 'Model S',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);
    return car;
  }
}
