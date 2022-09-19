import type { ServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: ServerLoad = async ({ params }) => {
  try {
    const post = await import(`../../../lib/posts/${params.post}.md`);

    return {
      PostContent: post.default.render().html,
      meta: { ...post.metadata, slug: params.post },
    };
  } catch (err) {
    throw error(404, err);
  }
};
