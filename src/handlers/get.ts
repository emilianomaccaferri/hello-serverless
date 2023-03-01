import { DynamoDBClient, GetItemCommand, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { HttpEvent } from '../types/HttpEvent';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { TodoPathParameters, TodoQueryParameters } from '../types/models/dto/todo/item';

const client = new DynamoDBClient({
  region: 'eu-south-1'
})

export const getHandler = async (event: HttpEvent<null, TodoPathParameters, TodoQueryParameters>) => {

  const { pathParameters } = event;
  // const { queryStringParameters } = event; // queryStringParameters.expired
  const db = DynamoDBDocumentClient.from(client);
  const get_cmd = new GetItemCommand({
    TableName: 'todos',
    Key: {
      id: { S: pathParameters?.id },
    },
    // ProjectionExpression: "ATTRIBUTE_NAME"
    // ProjectionExpression = select some instead of all attributes
  })

  const output = await db.send(get_cmd);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        success: true,
        output 
      }
    ),
  };

};