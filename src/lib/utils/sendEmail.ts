import { SENDGRID_API_KEY } from '$env/static/private';
import * as sgMail from '@sendgrid/mail';

export const sendEmail = (name: string, email: string, message: string) => {
  sgMail.setApiKey(SENDGRID_API_KEY);
  const msg = {
    to: {
      email: 'jordancalhoun@gmail.com',
      name: 'Jordan Calhoun',
    },
    from: {
      email: 'jordancalhoun@gmail.com',
      name: name,
    },
    replyTo: {
      email: email,
      name: name,
    },
    subject: 'Email from jc.com',
    text: message,
  };
  const success = sgMail
    .send(msg)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });

  return success;
};
