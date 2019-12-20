const request = require('supertest');

const server = require('../api/server');
const auth = require('./auth-router');

describe('server.js', function () {
    describe('environment', function () {
        it('should set environment to testing', function () {
            expect(process.env.DB_ENV).toBe('testing');
        });
    });

    describe('POST /login', function () {
        it('should return a 200 OK', function () {
            return request(auth).post('/api/auth/login').then(res => {
                expect(res.status).toBe(200);
            });
        });
        it('should return a JSON', function () {
            return request(auth).post('/api/auth/login').then(res => {
                expect(res.type).toMatch(/json/i);
            });
        });

    });
});