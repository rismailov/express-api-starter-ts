import request from 'supertest'
import app from '../../app'
import { API_PREFIX } from '../../constants'

describe(`GET ${API_PREFIX}/posts`, () => {
    it('responds with an array of posts', () => {
        // prettier-ignore
        return request(app)
            .get(`${API_PREFIX}/posts`)
            .expect(200, [])
    })
})
