import * as path from 'path';
import * as request from 'supertest';
import { NestApplication } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';

describe('MediaController', () => {
  let app: NestApplication;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MediaController],
      providers: [
        MediaService,
        {
          provide: 'NETWORK_TEST_SERVICE',
          useValue: {
            send: jest.fn(),
            emit: jest.fn(),
          },
        },
      ],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  describe('#downloadFile', () => {
    describe('not existing file', () => {
      it('should return an error', async () => {
        const response = await request(app.getHttpServer()).get('/media/non-existing-file-name');
        expect(response.status).toBe(404);
        expect(response.body).toMatchSnapshot();
      });
    });
    describe('existing file', () => {
      it('should return an error', async () => {
        const response = await request(app.getHttpServer()).get('/media/package.json');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Buffer);
        expect((response.body as Buffer).length).toBeGreaterThan(0);
      });
    });
  });

  describe('#uploadFile', () => {
    it('should return saved file details', async () => {
      const response = await request(app.getHttpServer())
        .post('/media')
        .attach('file', path.join(__dirname, '../../../../', 'package.json'));
      expect(response.status).toBe(201);
      expect(response.body).toMatchSnapshot({
        filename: expect.any(String),
        path: expect.any(String),
        size: expect.any(Number),
      });
    });
  });
});
