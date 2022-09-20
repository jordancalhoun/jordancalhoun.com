import type { PageLoad } from './$types';
// the load function has access to a few special arguments: url, params, and fetch
// fetch is a helper function that normalizes the implementation since it differs between browser, and Node
export const load: PageLoad = async ({ fetch }) => {
  const repsonse = await fetch('/api/posts');

  const posts = await repsonse.json();

  return {
    posts,
  };
};
