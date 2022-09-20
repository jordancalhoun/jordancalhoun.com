import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
  try {
    const post = await import(`../../../lib/posts/${params.post}.md`);

    return {
      PostContent: post.default.render().html,
      meta: { ...post.metadata, slug: params.post },
    };
  } catch (err: any) {
    throw error(404, err);
  }
};
