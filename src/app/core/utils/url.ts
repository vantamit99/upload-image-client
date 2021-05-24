export function query(q: any) {
    if(q) {
        if(typeof q == 'number') {
            return `/${q}`;
        } else {
            // {id: 1, name: 'abc'} => ?id=1&name=abc
            let arr = [];
            for(let k in q) {
                arr.push(`${k}=${q[k]}`);
            }
            return `?${arr.join('&')}`;
        }
    }
    return '';
}
export function merge(api_url: string, endpoint: string, param: string = ''): string {
    return `${api_url}/${endpoint}${param}`;
}