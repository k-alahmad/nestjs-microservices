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

  it('/square/:num (GET)', () => {
    return request(app.getHttpServer())
      .get('/square/5')
      .expect(200)
      .expect((response) => {
        expect(response.body.result).toBe(25);
      });
  });

  it('/square/:num (GET) with invalid number', () => {
    return request(app.getHttpServer())
      .get('/square/abc')
      .expect(400)
      .expect((response) => {
        expect(response.body.error).toBe('Invalid number provided');
      });
  });
});
