export default class HTTPError extends Error {

    #error_message: string;
    #error_code: number;
    #response: {
        success: boolean,
        [value: string]: any
    }

    constructor(error_message: string, error_code: number){

        super(error_message);

        this.#error_message = error_message;
        this.#error_code = error_code;
        this.#response = {
            success: false,
            error: this.#error_message,
            status: this.#error_code
        };

    }

    get response(){
        return this.#response;
    }
    get error_message(){
        return this.#error_message;
    }

    // errors
    public static readonly INVALID_DATE_FORMAT = new HTTPError('invalid_date_format', 400);
    public static readonly USER_EXISTS: HTTPError = new HTTPError('user_exists', 409);
    public static readonly NOT_FOUND: HTTPError = new HTTPError('not_found', 404);
    public static readonly INVALID_CREDENTIALS = new HTTPError('invalid_credentials', 401);
    public static readonly EXPIRED_CREDENTIALS = new HTTPError('expired_credentials', 401);
    public static readonly MALFORMED_CREDENTIALS = new HTTPError('malformed_credentials', 400);
    public static readonly MALFORMED_REQUEST = new HTTPError('malformed_request', 400);
    public static readonly GENERIC_ERROR = new HTTPError('generic_error', 500);
    public static readonly USER_NOT_FOUND = new HTTPError('user_not_found', 404);
    public static readonly UNAUTHORIZED = new HTTPError('unauthorized', 403);
    public static readonly TOO_MANY_REQUESTS = new HTTPError('too_many_requests', 429);
    public static readonly INVALID_MIMETYPE = new HTTPError('invalid_mimetype', 400);
    public static readonly BAD_REQUEST = new HTTPError('bad_request', 400);
    public static readonly DUPLICATE_RESOURCE = new HTTPError('duplicate_resource', 409);

    public static readonly missingParameters = (...params: string[]) =>
        new HTTPError('missing_parameters', 400).addParam('missing', params);

    public addParam(key: string, value: any): this{

        this.#response[key] = value;
        return this;
    
    }

    get code(){
        return this.#error_code;
    }
     
}