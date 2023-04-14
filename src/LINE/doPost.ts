import * as LINE from '@line/bot-sdk';

export type DoPostResponseType = Promise<any> | LINE.MessageAPIResponseBase;

export type DoPostType = (
  requestEvent: GoogleAppsScript.Events.DoPost,
) => DoPostResponseType;

export type DoPostLINEType = (funcs: {
  funcForMessageEvent: (event: LINE.MessageEvent) => DoPostResponseType;
}) => DoPostType;

const doPostLINE: DoPostLINEType = (funcs) => {
  return (requestEvent) => {
    const requestBody: LINE.WebhookRequestBody = JSON.parse(
      requestEvent.postData.contents,
    );
    const event = requestBody.events[0];
    if (event.type === 'message') {
      return funcs.funcForMessageEvent(event);
    } else {
      return Promise.resolve(null);
    }
  };
};

export default doPostLINE;
