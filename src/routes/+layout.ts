import type { LayoutLoad } from './$types';

//export const prerender = true;
//TODO: Update site to only prerender pages that can be static (ie everything that isn't a form
export const load: LayoutLoad = ({ url }) => {
  const currentRoute = url.pathname;

  return {
    currentRoute,
  };
};
