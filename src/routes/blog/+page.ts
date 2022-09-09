import type { Load } from "@sveltejs/kit"
// the load function has access to a few special arguments: url, params, and fetch
// fetch is a helper function that normalizes the implemntation since it differs between broser, and Node
export const load: Load = async ({ fetch }) => {
    const repsonse = await fetch('/api/posts')
    const posts = await repsonse.json()

    return {
        posts
    }
}