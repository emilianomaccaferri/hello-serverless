import { addHandler } from '../../src/handlers/add'
import { mockClient } from "aws-sdk-client-mock";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const db = mockClient(DynamoDBClient);

beforeEach(() => {
    db.reset();
})

describe('testing add handler', () => {

    it('should be ok', async () => {

        const event = {
            body: {
                todo: {
                    title: 'ciao'
                }
            }
        }
        const result = await addHandler(event as any);
        expect(result.statusCode).toBe(200);

    });

})