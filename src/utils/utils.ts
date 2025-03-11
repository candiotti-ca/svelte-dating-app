export function doFetch<T>(url: string, handleFetch?: any): Promise<T> {
    const httpClient = handleFetch ?? fetch;
    return httpClient(url)
        .then((response: Response) => response.json())
        .then((data: any) => data as T);
}