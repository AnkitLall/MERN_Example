export function handleResponse(response){
    if(!response.ok){
        throw new Error('API failed to fetch! Please troubleshoot')
    }
    return response;
}

