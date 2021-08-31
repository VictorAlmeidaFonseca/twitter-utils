import axios from "axios";
import { IHttpClient, IRequest, IResponse } from 'interfaces/http-clients'

export default class AxiosClient implements IHttpClient {    
    public async request(options: IRequest): Promise<IResponse> {
        const response = await axios.request(options) 
        return {
            body: response.data,
            statusCode: response.status
        }      
    }  
}

