import { Controller, Get, Param, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('SERVICE_B') private readonly client: ClientProxy) {}

  @Get('double/:num')
  double(@Param('num') num: string): string {
    const number = parseInt(num, 10);
    if (isNaN(number)) {
      return 'Invalid Number';
    }
    this.client.send({ cmd: 'double' }, number).subscribe();
    return `Request to double ${number} sent to service-b`;
  }
}
