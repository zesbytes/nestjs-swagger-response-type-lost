import { Controller, Get } from '@nestjs/common';
import { CatDto } from './cat.dto';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller()
export class AppController {

  @Get()
  @ApiOkResponse({ description: 'OK'})
  getCat(): CatDto {
    return { name: 'Kitty', age: 2, breed: 'Maine Coon' };
  }
}
