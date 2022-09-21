export type Post = {
  postPath: string;
  meta: {
    title: string;
    date: string;
    updated: string;
    categories: string[];
    coverImage: string;
    coverWidth: number;
    coverHeight: number;
    excerpt: string;
  };
};

export const fetchMarkdownPosts = async (limit = 10) => {
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

  // sort posts
  //limit posts

  return allPosts;
};
