export const fetchMarkdownPosts = async ({ limit = 10, offset = 0, category = '' } = {}): Promise<
  Post[]
> => {
  const allPosts: Post[] = await Promise.all(
    Object.entries(import.meta.glob('$lib/posts/*.md')).map(async ([path, resolver]) => {
      const { metadata }: any = await resolver();
      return {
        postPath: `/blog/${path.slice(15, -3)}`,
        meta: metadata,
      };
    })
  );

  // sort by date
  let sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date).valueOf() - new Date(a.meta.date).valueOf();
  });

  // remove non-active posts.
  sortedPosts = sortedPosts.filter((post) => post.meta.active === true);

  // filter out posts by category
  if (category) {
    sortedPosts = sortedPosts.filter((post) => post.meta.categories.includes(category));
  }

  // offset posts
  sortedPosts = sortedPosts.slice(offset);

  // slice posts to limit
  sortedPosts = sortedPosts.slice(0, limit);

  return sortedPosts;
};
