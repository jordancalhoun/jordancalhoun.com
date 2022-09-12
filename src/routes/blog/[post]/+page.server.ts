import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'

export const load: PageServerLoad = async ({ params }) => {
    try {
        const post = await import(`../../../lib/posts/${params.post}.md`)

        return {
            PostContent: post.default.render().html,
            meta: { ...post.metadata, slug: params.post}
        }
    } catch (err) {
        throw error(404, err)
    }
}

// export const load: PageLoad = async ({ params }) => {
//     const post = await import(`../posts/${params.slug}.md`)
//     const {
//         title,
//         date,
//         updated,
//         categories,
//         coverImage,
//         coverWidth,
//         coverHeight,
//         excerpt,
//     }  = post.metadata

//     const Content = post.default

//     return {
//         title,
//         date,
//         updated,
//         categories,
//         coverImage,
//         coverWidth,
//         coverHeight,
//         excerpt,
//         Content
//     }
// }