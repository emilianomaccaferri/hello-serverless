import { APIGatewayEvent } from "aws-lambda";

export type HttpEvent<P, O = void, G = void> = 
    APIGatewayEvent & { body: P } & { pathParameters: O } & { queryStringParameters: G }; 