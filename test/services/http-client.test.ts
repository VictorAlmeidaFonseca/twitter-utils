import AxiosClient from 'clients/axios'
import HttpClient from 'services/http-client'

describe('Call externar lib HttpClient as Factory', () => {   
    test('Validade if axios is called as dependenci of HttpClient',  () => {
        expect(HttpClient instanceof AxiosClient).toBe(true)
    })   
    
})