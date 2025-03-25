import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'double' })
  double(data: number): number {
    return data * 2;
  }

  @Get('square/:num')
  square(@Param('num') num: string): any {
    const number = parseInt(num, 10);
    if (isNaN(number)) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid number provided',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return { result: number * number };
  }
}
