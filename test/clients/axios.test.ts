
import AxiosClient from 'clients/axios'

const axios = new AxiosClient()
const request = {
    baseURL : "https://www.google.com.br"
}

describe('Teste Axios as external library', () => {   
    test('fetch external from axios', async () => {
        const response = await axios.request(request)
        const statusCodeValidade = String(response.statusCode)
        expect(statusCodeValidade.startsWith('2')).toBe(true)
    })
})