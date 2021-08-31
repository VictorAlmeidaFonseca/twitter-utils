export type HttpMethod =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
  | 'purge' | 'PURGE'
  | 'link' | 'LINK'
  | 'unlink' | 'UNLINK'

  export interface IRequest {
    baseURL: string; 
    url?: string;
    method?: HttpMethod;
    headers?: any;    
    params?: any; 
    body?: any;
  }    

  export interface IResponse {
    statusCode : number
    body: any
  }

  export interface IHttpClient {   
    request(options : IRequest): Promise<IResponse>
  }

  export interface IHttpClientFactory {
    instance : IHttpClient
  }