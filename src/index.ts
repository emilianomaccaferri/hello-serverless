import middy from '@middy/core'
import json from '@middy/http-json-body-parser'
import { addHandler } from './handlers/add'
import errorHandler from './middlewares/error'
import { example } from './middlewares/example';

export const add = middy()
    .use(json())
    .use(example)
    // .use(anotherExample)
    .handler(addHandler)
    .onError(errorHandler);
