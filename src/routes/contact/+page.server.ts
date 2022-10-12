import type { Actions } from './$types';
import { invalid } from '@sveltejs/kit';
import { sendEmail } from '$lib/utils/sendEmail';

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email');
    const name = data.get('name') ? data.get('name') : 'Unknown Sender';
    const message = data.get('message');

    if (!email) {
      // Invalid function generates a return depending on the arguments passed,
      // this combined with the type generation is sweet.
      return invalid(400, { email, missingEmail: true });
    }

    if (!message) {
      return invalid(400, { message, missingMessage: true });
    }

    if (name && email && message) {
      const emailSendStatus = await sendEmail(
        name.toString(),
        email.toString(),
        message.toString()
      );
      return {
        success: emailSendStatus,
        name: name,
        email: email,
      };
    }

    return {
      success: false,
    };
  },
};
