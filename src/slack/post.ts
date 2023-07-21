/**
 *
 * @param text
 * @param channelName 基本的にIDを指定. チャンネル名の場合は先頭に#をつける.
 */
export const postToSlack = (text: string, channelName: string) => {
  const url = 'https://slack.com/api/chat.postMessage';
  const token = process.env.SLACK_OAUTH_TOKEN;
  const headers = {
    Authorization: 'Bearer ' + token,
    'Content-type': 'application/json',
  };
  const payload = {
    channel: channelName,
    text,
  };
  const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    method: 'post',
    headers: headers,
    payload: JSON.stringify(payload),
  };

  UrlFetchApp.fetch(url, options);
};
