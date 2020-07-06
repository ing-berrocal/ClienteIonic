export const _URL = 'http://127.0.0.1:8080';

export function getURL(url:string){
    return url.replace('{URL}',_URL);
}