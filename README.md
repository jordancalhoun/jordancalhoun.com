[![Netlify Status](https://api.netlify.com/api/v1/badges/c07c745f-a17b-46e9-b999-a047d636a163/deploy-status?branch=contact-form)](https://app.netlify.com/sites/super-mochi-d63e5f/deploys)

# About this branch

This branch is looking into what is required to add a form to a Sveltekit site and email the form details via a API (SendGrid in this case). I am using this branch mainly as a learning tool. This style of implemtation probably won't be pushed into main for **two** reasons:

1. It's a **small** personal blog site, do people _really_ need to email me via a form? Probably not.
2. As far as im aware you can't prerender an entire site in SvelteKit if using post methods.

   - A work around is by having the contact form submit with javascript, but this would result in the site not being 100% useable without javascript. This would by default mean I can't use `use:enhance` which is just sweet.

   - This branch currently changes the adapter to `adapter-auto` from `adapter-static` and removes the global `prerender = true`.

   - I would need to change/add `prerender = true` to each of the `blog` and `playlists` routes, probably via a `+layout.svelte` file in each dir if I wanted to use `use:enhance`
   - ill probably just do a javascript only contact form...

### Alternatives

- Netlify supports form submissions to collect data on any HTML form from a website. This could a cool feature to implement instead.

# About this repo

Small personal website used for playing around and learning Svelte & Typescript. This is a learning while doing project; therefore, expect some oddities as well as some best practices missed. I will continue to update the repoo as I have time to learn SvelteKit and Typescript more.

If you see any issues and would like to fix please submit a PR, I appricate any help!

# Install

1. Clone Repo
2. `pnpm install`
3. `pnpm dev`

## Docs

- [Svelete](https://svelte.dev/docs)
- [SveleteKit](https://kit.svelte.dev/docs/introduction)
- [tailwindcss](https://tailwindcss.com/docs/installation)
- [Sass](https://sass-lang.com/documentation/)
