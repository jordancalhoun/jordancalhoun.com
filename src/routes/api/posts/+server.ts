import { json } from '@sveltejs/kit';
import { fetchMarkdownPosts } from '$lib/utils/posts';

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date).valueOf() - new Date(a.meta.date).valueOf();
  });

  const limited = sortedPosts.slice(0,2)

  return json(limited);
};
