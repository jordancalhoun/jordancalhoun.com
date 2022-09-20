import { json } from '@sveltejs/kit';

export type Post = {
  postPath: string,
  meta: {
    title: string,
    date: string,
    updated: string,
    categories: string[],
    coverImage: string,
    coverWidth: number,
    coverHeight: number,
    excerpt: string,
  },
};

export const fetchMarkdownPosts = async () => {
  const allPostsFiles = import.meta.glob('$lib/posts/*.md');
  const iterablePostFiles = Object.entries(allPostsFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata }: any = await resolver();
      const postPath = `/blog/${path.slice(15, -3)}`;

      return {
        path: postPath,
        meta: metadata,
      };
    })
  );
  return allPosts;
};

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date).valueOf() - new Date(a.meta.date).valueOf();
  });

  return json(sortedPosts);
};
