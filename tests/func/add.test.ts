import { addHandler } from '../../src/handlers/add'
import { mockClient } from "aws-sdk-client-mock";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const db = mockClient(DynamoDBClient);

describe('testing add handler', () => {

    const event = {
        body: {
            todo: {
                title: 'ciao'
            }
        }
    }
    addHandler(event as any);

})