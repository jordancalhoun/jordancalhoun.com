import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch, params }) => {
    const { category } = params
    const repsonse = await fetch('/api/posts')
    const allPosts = await repsonse.json()

    const posts = allPosts.filter(
        post => post.meta.categories.includes(category)
    )

    return {
        category,
        posts
    }
}