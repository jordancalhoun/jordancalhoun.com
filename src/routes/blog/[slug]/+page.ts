import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
    //  TODO: Implement a try catch block for error handling.
    const post = await import(`../posts/${params.slug}.md`)
    const { title, date }  = post.metadata
    const Content = post.default

    return {
        Content, 
        title,
        date,
    }
}