[![Netlify Status](https://api.netlify.com/api/v1/badges/c07c745f-a17b-46e9-b999-a047d636a163/deploy-status)](https://app.netlify.com/sites/super-mochi-d63e5f/deploys)

# About this repo

Small personal website used for playing around and learning Svelte & Typescript. This is a learning while doing project; therefore, expect some oddities as well as some best practices missed. I will continue to update the repo as I have time to learn SvelteKit and Typescript more.

If you see any issues and would like to fix please submit a PR, I appreciate any help!

# Install

1. Clone Repo
2. `pnpm install`
3. `pnpm dev`

# Post Front Matter Definitions

### `active`: `boolean`

    Flag to the post in feed or not. Useful for hiding drafts and templates.

### `title`: `string`

    Title of the blog post.

### `date`: `string`

    Original date posted. Format: `YYYY-MM-DD`

### `updated`: `string`

    Date of last updates. Format: `YYYY-MM-DD`

### `categories`: `string[]`

    Categories to assign to post. Used to generate list of categories for users to filter against.

### `coverImage`: `string`

    Path to the cover image file.

### `coverWidth`: `number`

    Width of the cover image in ratio format.

### `coverHeight`: `number`

    Height of cover image in ratio format.

### `excerpt`: `string`

    Body of the share card for the article on social media.

### `preview`: `string`

    Body that is listed in the blog post feeds for preview of the post. Used on pages such as homepage and /blog

### `coverPhotoCredited`: `boolean`

    If the photo requires attribution, set to true

### `coverSource`: `string?`

    Required for `coverPhotoCredited` === `true`
    Full URL to the photo itself.

### `coverAuther`: `string?`

    Required for `coverPhotoCredited` === `true`
    Name of the person/entity to be credited

### `coverAuthorSource`: `string?`

    Required for `coverPhotoCredited` === `true`
    Full URL to the profile page of the person/entity

## Docs

- [Svelte](https://svelte.dev/docs)
- [SvelteKit](https://kit.svelte.dev/docs/introduction)
- [tailwindcss](https://tailwindcss.com/docs/installation)
- [Sass](https://sass-lang.com/documentation/)
