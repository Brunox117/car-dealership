import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Yaris S',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Honda Fit',
    },
    {
      id: uuid(),
      brand: 'Tesla',
      model: 'Model S',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);
    return car;
  }

  create({ model, brand }: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      brand: brand,
      model: model,
    };
    this.cars.push(newCar);
    return newCar;
  }
}
