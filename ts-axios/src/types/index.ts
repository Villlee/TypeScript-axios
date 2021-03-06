export type Method = 'get' | 'GET' | 'post' | 'POST' | 'put' | 'PUT' | 'options' | 'OPTIONS' | 'delete' | 'DELETE' | 'head' | 'HEAD' | 'patch' | 'PATCH';

export interface AxiosRequestConfig {
    url?:string,
    method?:Method,
    params?:any,
    data?:any,
    headers?:any,
    responseType?:XMLHttpRequestResponseType,
    timeout?:number
}

export interface AxiosResponse <T = any>{
    data:T,
    status:number,
    statusText:string,
    headers:any,
    config:AxiosRequestConfig,
    request:any
}

export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>>{}

export interface AxiosError extends Error {
    config:AxiosRequestConfig,
    code?:string,
    request?:any,
    reponse?:AxiosResponse,
    isAxiosError:boolean
}

export interface Axios {
    interceptors:{
        request:AxiosInterceptorManager<AxiosRequestConfig>,
        response:AxiosInterceptorManager<AxiosResponse>
    }
    request<T = any>(config:AxiosRequestConfig):AxiosPromise<T>
    get<T = any>(url:string,config?:AxiosRequestConfig):AxiosPromise<T>
    options<T = any>(url:string,config?:AxiosRequestConfig):AxiosPromise<T>
    delete<T = any>(url:string,config?:AxiosRequestConfig):AxiosPromise<T>
    head<T = any>(url:string,config?:AxiosRequestConfig):AxiosPromise<T>
    put<T = any>(url:string,data?:any,config?:AxiosRequestConfig):AxiosPromise<T>
    post<T = any>(url:string,data?:any,config?:AxiosRequestConfig):AxiosPromise<T>
    patch<T = any>(url:string,data?:any,config?:AxiosRequestConfig):AxiosPromise<T>
}

export interface AxiosIntance extends Axios {
    <T =any>(config:AxiosRequestConfig):AxiosPromise<T>
    <T =any>(url:string,config?:AxiosRequestConfig):AxiosPromise<T>
}

export interface AxiosInterceptorManager<T>{
    use(resolved:ResolvedFn<T>,rejected?:RejectedFn):number

    eject(id:number):void
}

export interface ResolvedFn<T>{
    (val:T):T | Promise<T>
}

export interface RejectedFn{
    (error:any):any
}