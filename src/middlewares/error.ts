import { Request } from '@middy/core';
import HTTPError from '../types/HTTPError';

export default async (request: Request) => {
    if(request.error instanceof HTTPError){
        const http_error = request.error as HTTPError;

        return {
            statusCode: http_error.code,
            body: JSON.stringify(
                {
                    success: false,
                    error: http_error.error_message
                }
            ),
        };
    }else{
        return {
            statusCode: 500,
            body: JSON.stringify(
                {
                    success: false,
                    error: 'fatal error occurred'
                }
            )
        }
    }
}