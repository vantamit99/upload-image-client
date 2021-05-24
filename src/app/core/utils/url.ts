export function merge(api_url: string, endpoint: string, param?: number): string {
    return `${api_url}/${endpoint}/${param}`;
}