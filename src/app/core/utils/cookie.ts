export function set(key, value, time: any = null) {      
    let d = new Date();
    d.setTime(d.getTime() + (time*24*60*60));
    let expires = "expires="+ d.toUTCString();   
    document.cookie = `${key}=${value};${expires};path=/`;      
}

export function get(key) {
    let arr = [];
    let cValue = '';
    arr = document.cookie.split(';');
    arr.map(item => {
        item = item.trim();
        if(item.indexOf(`${key}=`) == 0) {
            cValue = item.slice(item.indexOf('=') + 1, item.length);
        } 
        return item;
    });
    return cValue;
}

export function remove(key) {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}