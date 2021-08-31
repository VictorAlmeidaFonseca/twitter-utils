import { IHttpClient, IHttpClientFactory } from "interfaces/http-clients";
import AxiosClient from "clients/axios";

class HttpClient implements IHttpClientFactory {
    instance: IHttpClient;
    constructor(instance : IHttpClient) {
        this.instance = instance
    } 
}

const AxiosHttpClientInstance = new AxiosClient()
const HttpClientInstance = new HttpClient(AxiosHttpClientInstance)

export default HttpClientInstance.instance