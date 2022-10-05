import { fetchMarkdownPosts } from '$lib/utils/fetchPosts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const posts = await fetchMarkdownPosts();

  return {
    posts,
  };
};
