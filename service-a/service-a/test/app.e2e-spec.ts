import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/double/:num (GET)', () => {
    return request(app.getHttpServer())
      .get('/double/5')
      .expect(200)
      .expect('Request to double 5 sent to service-b');
  });

  it('/double/:num (GET) with invalid number', () => {
    return request(app.getHttpServer())
      .get('/double/abc')
      .expect(200)
      .expect('Invalid Number');
  });
});
