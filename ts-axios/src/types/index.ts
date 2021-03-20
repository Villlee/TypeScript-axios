export type Method = 'get' | 'GET' | 'post' | 'POST' | 'put' | 'PUT' | 'options' | 'OPTIONS' | 'delete' | 'DELETE' | 'head' | 'HEAD' | 'patch' | 'PATCH'

export interface AxiosRequestConfig {
    url?:string
    method?:Method
    params?:any
    data?:any
}