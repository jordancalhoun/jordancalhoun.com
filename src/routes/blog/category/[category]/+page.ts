import type { PageLoad } from './$types';
import type { Post } from '../../../api/posts/+server';

export const load: PageLoad = async ({ fetch, params }) => {
  const { category } = params;
  const response = await fetch('/api/posts');
  const allPosts: Post[] = await response.json();

  const posts = allPosts.filter((post) => post.meta.categories.includes(category));

  return {
    category,
    posts,
  };
};
