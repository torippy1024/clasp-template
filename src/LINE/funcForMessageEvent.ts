import * as LINE from '@line/bot-sdk';
import lineClient from './Client';
import {DoPostResponseType} from './doPost';

const funcForMessageEvent = (event: LINE.MessageEvent): DoPostResponseType => {
  if (event.message.type !== 'text') {
    return Promise.resolve(null);
  }
  const text = event.message.text;
  return lineClient.replyMessage(event.replyToken, {
    type: 'text',
    text,
  });
};

export default funcForMessageEvent;
