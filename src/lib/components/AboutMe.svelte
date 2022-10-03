<script lang="ts">
  import GithubIcon from "./icons/GithubIcon.svelte";
  import SpotifyIcon from "./icons/SpotifyIcon.svelte";
  import TwitterIcon from "./icons/TwitterIcon.svelte";

  const socialLinks: socialLink[] = [
        {
          name: "Github",
          href:"https://github.com/jordancalhoun",
          icon: GithubIcon
        },
        {
          name: "Twitter",
          href:"https://twitter.com/jordancalhoun",
          icon: TwitterIcon
        },
        {
          name: "Spotify",
          href:"https://open.spotify.com/user/jordancalhoun?si=6d2a862877bd4334",
          icon: SpotifyIcon
        }
    ]
</script>

<div class="bg-violet-500  ">
  <div class="max-w-7xl mx-auto p-7 md:flex md:p-20">
    <div>
      <h2 class="text-4xl font-bold text-violet-50 mb-7">Hi 👋, I'm Jordan</h2>
      <p class="text-violet-50 text-xl leading-10">
        <img src="/images/profile-picture.jpeg" alt="Jordan and Brinley"  class="rotate-3 w-32 rounded mx-8 float-right border-4 mt-6 md:hidden" />
        <span class="font-bold">Full stack developer, sysadmin, woodworker.</span>
        I started coding when I was 14 and have been coding off and on ever since.
        I am a father of two, husband of one.
        Along with programming, I am a woodworker with a focus on fine furniture.
        In 2022 I started Mortise & Code, a software company that creates tools for the woodworking and maker community.
      </p>
      <div class="md:flex mt-10 hidden ">
        {#each socialLinks as link}
          <a href={link.href} class="mx-3 first:ml-0 last:mr-0" target="_blank">
            <svelte:component this={link.icon} class="text-violet-800 hover:text-violet-200"/>
          </a>
        {/each}
      </div>
    </div>
    <div class="min-w-fit my-auto hidden md:block">
      <img src="/images/profile-picture.jpeg" alt="Jordan and Brinley"  class="w-60 rounded mx-8" />
    </div>
  </div>
</div>
