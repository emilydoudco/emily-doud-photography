const email = 'emilydoud14@gmail.com';

const body = [
  'Type of session:',
  '',
  'What I am looking for:',
  '',
  'Preferred date / timeline:',
  '',
  'Location or address:',
  '',
  'Best way to reach you (Email / Text / Call):',
  '',
  'Best number to call/text:',
].join('%0A');

export const CONTACT_URL =
  `https://mail.google.com/mail/?view=cm&to=${email}&su=Photography Inquiry&body=${body}`;
