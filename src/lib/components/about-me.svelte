<script lang="ts">
  import type { ComponentType } from "svelte";
  import GithubIcon from "./icons/GithubIcon.svelte";
  import InstagramIcon from "./icons/InstagramIcon.svelte";
  import SpotifyIcon from "./icons/SpotifyIcon.svelte";
  import TwitterIcon from "./icons/TwitterIcon.svelte";
  import YouTubeIcon from "./icons/YouTubeIcon.svelte";

  type socialLink = {
    name: string;
    href: string;
    icon: ComponentType;
  }
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
        },
        {
          name: "YouTube",
          href:"https://www.youtube.com/channel/UChHHysDsAnjZ_rnzXbwI59A",
          icon: YouTubeIcon
        },
        {
          name: "Instagram",
          href:"https://instagram.com/mortiseco",
          icon: InstagramIcon
        },
    ]
</script>

<div class="bg-violet-500 p-20 md:flex">
  <div>
    <h2 class="text-4xl font-bold text-violet-50 mb-7">Hi 👋, I'm Jordan</h2>
    <p class="text-violet-50 text-xl leading-10">
      <span class="font-bold">Full stack developer, sysadmin,woodworker.  </span>
      I started coding when I was 14 and have been coding off and on ever since.
      I am a father of two, husband of one.
      Along with programming, I am a woodworker with a focus on fine furniture.
      In 2022 I started Mortise & Code, a software company that creates tools for the woodworking and maker community.
    </p>
    <div class="flex align-middle mt-10">
      {#each socialLinks as link}
        <a href={link.href} class="mx-3 first:ml-0 last:mr-0" target="_blank">
          <svelte:component this={link.icon} class="text-violet-800 hover:text-violet-50"/>
        </a>
      {/each}
    </div>
  </div>
  <div class="min-w-fit my-auto">
    <img src="/images/profile-picture.jpeg" alt="Jordan and Brinley"  class="w-60 rounded mx-8" />
  </div>
</div>
