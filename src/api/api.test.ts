import request from 'supertest'
import app from '../app'
import { API_PREFIX } from '../constants'

describe(`GET ${API_PREFIX}/`, () => {
    it('responds with a json message', () => {
        return request(app)
            .get(`${API_PREFIX}/`)
            .expect(200, { message: 'API - 👋🌎🌍🌏' })
    })
})

describe(`GET ${API_PREFIX}/non-existing-route`, () => {
    it('responds with a 404', () => {
        // prettier-ignore
        return request(app)
            .get(`${API_PREFIX}/non-existing-route`)
            .expect(404)
    })
})
