export type FormItemResponses = {
  items: {
    title: string;
    content: string;
    type: GoogleAppsScript.Forms.ItemType;
  }[];
  responses: GoogleAppsScript.Forms.ItemResponse[];
};

const onFormSubmit = (
  e: GoogleAppsScript.Events.FormsOnFormSubmit,
  func: (formItemResponses: FormItemResponses) => void,
) => {
  const responses = e.response.getItemResponses();
  const items = responses.map((res) => ({
    title: res.getItem().getTitle(),
    content: res.getResponse() as string,
    type: res.getItem().getType(),
  }));
  func({items, responses});
};

export default onFormSubmit;
