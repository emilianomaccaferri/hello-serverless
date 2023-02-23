import { APIGatewayEvent } from "aws-lambda";

export type HttpEvent<T> = APIGatewayEvent & { body: T }