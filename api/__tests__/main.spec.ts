import * as request from 'supertest';
import app from '../src/app';

const agent = request.agent(app.listen(3001));

describe('Hello World', () => {

  describe('GET /', () => {
    it('should result in 200 status', () => {
      return agent.get('/').expect(200);
    });
  });
});
