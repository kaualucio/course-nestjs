import { Controller, Get, Param } from '@nestjs/common';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get('/:stateId')
  async getAllStates(@Param('stateId') stateId: string) {
    console.log(stateId);
    return this.cityService.getAllCitiesByStateId(Number(stateId));
  }
}
