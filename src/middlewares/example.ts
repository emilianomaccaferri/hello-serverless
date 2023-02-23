import { Request } from '@middy/core';
import HTTPError from '../types/HTTPError';

export const example = {
    async before(req: Request){
        console.log(`hello ${req.context.functionName}`);
    }
}
export const anotherExample = {
    async before(req: Request){
        throw new HTTPError('ZAMN', 401);
    }
}