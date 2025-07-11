// Tests for bug routes

const request = require('supertest');
const app = require('../app');

describe('Bug API', () => {
  it('GET /api/bugs returns array', async () => {
    const res = await request(app).get('/api/bugs');
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.statusCode).toBe(200);
  });

  it('POST /api/bugs creates a bug', async () => {
    const bug = { title: 'Test Bug', description: 'Bug desc', status: 'open' };
    const res = await request(app)
      .post('/api/bugs')
      .send(bug);
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test Bug');
  });
});