const sendEmail = (adresses: string[], title: string, content: string) => {
  if (content.length) {
    adresses.forEach((adress) => {
      MailApp.sendEmail(adress, title, content);
    });
  }
};

export default sendEmail;
