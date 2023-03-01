import { mockClient } from "aws-sdk-client-mock";
import { GetItemCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { getHandler } from '../../src/handlers/get';

const db = mockClient(DynamoDBDocumentClient);

beforeEach(() => {
    db.reset();
})

describe('testing get handler', () => {

    it('should be ok', async () => {

        db.on(GetItemCommand)
            .resolves({
                Item: {
                    id: { S: 'pogchamp' }
                }
            })

        const event = {
            body: null
        }
        const result = await getHandler(event as any); // mocked result!
        const parsed_body = JSON.parse(result.body);
        
        expect(parsed_body.output.Item).toStrictEqual({ id: { S: 'pogchamp' } });

    });

})