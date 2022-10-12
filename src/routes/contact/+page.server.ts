import type { Actions } from './$types';
import { invalid } from '@sveltejs/kit';

export const actions: Actions = {
  default: async ({ cookies, request }) => {
    //TODO: Send the contact email
    // console.log('Hello from the action page!');
    // let response = await event.request.formData();
    // console.log(response.get('email'));
    const data = await request.formData();
    const email = data.get('email');
    const name = data.get('name');

    if (!email) {
      // Invalid function generates a return depending on the arguments passed,
      // this combined with the type generation is sweet.
      return invalid(400, { email, missingEmail: true });
    }

    return {
      success: true,
      name: name,
      email: email,
    };
  },
};
