export const fetchMarkdownPosts = async () => {
  const allPostsFiles = import.meta.glob('$lib/posts/*.md');
  const iterablePostFiles = Object.entries(allPostsFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = `/blog/${path.slice(15, -3)}`;

      return {
        path: postPath,
        meta: metadata,
      };
    })
  );
  return allPosts;
};
