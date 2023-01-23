import app from "../app.js";
import supertest from "supertest";

const request = supertest(app);

describe('POST /weather', () => {
    it('200 status code if cityName is OK', async () => {
        const response = await request.post('/weather').send({ cityName: 'Amsterdam' });
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
      });
    it('{weatherText: City is not found!}, when incorrect cityName', async () => {
      const response = await request.post('/weather').send({ cityName: 'Blablabla' });
      expect(response.status).toBe(404);
      expect(response.body).toMatchObject({ weatherText: 'City is not found!' });
    });
    it('Endpoint is incorrect', async () => {
      const response = await request.post('/w').send({ cityName: 'Amsterdam' });
      expect(response.status).toBe(404);
      expect(response.body).toStrictEqual({});
    });
  });
