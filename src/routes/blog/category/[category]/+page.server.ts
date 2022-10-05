import { fetchMarkdownPosts } from '$lib/utils/fetchPosts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const { category } = params;
  const posts = await fetchMarkdownPosts({ category });

  return {
    category,
    posts,
  };
};
