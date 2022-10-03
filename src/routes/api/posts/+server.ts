import { json } from '@sveltejs/kit';
import { fetchMarkdownPosts } from '$lib/utils/posts';

// TODO: Implement Pagination
export const GET = async ({ limit = 10 }) => {
  const allPosts = await fetchMarkdownPosts();
  const sortedPosts = allPosts
    .sort((a, b) => {
      return new Date(b.meta.date).valueOf() - new Date(a.meta.date).valueOf();
    })
    .slice(0, limit);

  return json(sortedPosts);
};
