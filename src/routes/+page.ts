// get 2 most recent posts
// return them to data as { posts[] }
import { fetchMarkdownPosts } from '$lib/utils/fetchPosts';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const posts = await fetchMarkdownPosts({ limit: 2 });

  return {
    posts,
  };
};

// export const load: PageServerLoad = async ({ params }) => {
//     try {
//       const post = await import(`../../../lib/posts/${params.post}.md`);

//       return {
//         PostContent: post.default.render().html,
//         meta: { ...post.metadata, slug: params.post },
//       };
//     } catch (err: any) {
//       throw error(404, err);
//     }
//   };

// import type { PageLoad } from './$types';
// // the load function has access to a few special arguments: url, params, and fetch
// // fetch is a helper function that normalizes the implementation since it differs between browser, and Node
// export const load: PageLoad = async ({ fetch }) => {
//   const repsonse = await fetch('/api/posts');

//   const posts = await repsonse.json();

//   return {
//     posts,
//   };
// };
