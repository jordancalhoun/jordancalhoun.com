export const fetchMarkdownPosts = async () => {
    // Import is a Vite function
    // https://vitejs.dev/guide/features.html#glob-import
    const allPostsFiles = import.meta.glob('/src/routes/blog/posts/*.md')
    // code produced by vite
    // const allPostFiles = {
    //     '/src/routes/blog/posts/functional-components.md': () => import('/src/routes/blog/posts/functional-components.md'),
    //     '/src/routes/blog/posts/other-blog-post.md': () => import('/src/routes/blog/posts/other-blog-post.md')
    // }

    // This converts the object returned by .glob into a array with each key, value as an array as well
    // const obj = { foo: 'bar', baz: 42 };
    // console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]
    const iterablePostFiles = Object.entries(allPostsFiles)

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            // resolver() == () => import('/src/routes/blog/posts/some-blog-post.md')
            const { metadata } = await resolver();
            // the content of the post would be listed as { default }
            // this is formed from the mdsvex plugin preprocess 
            
            //Generate the route path, remove the abosulte portion for the relative path name
            // /src/routes/blog/posts/ == 23, .md == -3
            // Need to re-add the /blog/ to the path, but without the posts part
            const postPath = `/blog/${path.slice(23, -3)}`

            // return reach blog post as an object with a path and metadata 
            return {
                path: postPath,
                meta: metadata
            }
        })
    )
    // returm the object created to be passed to the page via the data object
    return allPosts
}