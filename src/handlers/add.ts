import { v4 } from 'uuid';
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { HttpEvent } from '../types/HttpEvent';
import { Todo } from '../types/models/Todo';
import HTTPError from '../types/HTTPError';

const client = new DynamoDBClient({
  region: 'eu-south-1'
})

export const addHandler = async (event: HttpEvent<{ todo: Todo }>) => {

  const { todo } = event.body;
  const created_at = new Date();
  const id = v4() as string;

  const put_cmd = new PutItemCommand({
    TableName: 'todos',
    Item: {
      id: { S: id },
      created_at: { S: created_at.toString() }, 
      title: { S: todo.title },
      done: { BOOL: false }
    }
  })

  client.send(put_cmd)

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        success: true,
        body: JSON.stringify(id)
      }
    ),
  };

};