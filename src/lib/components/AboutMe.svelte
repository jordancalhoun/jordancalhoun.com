<script lang="ts">
	import GithubIcon from './icons/GithubIcon.svelte';
	import TwitterIcon from './icons/TwitterIcon.svelte';
	import SpotifyIcon from './icons/SpotifyIcon.svelte';

	const socialLinks: socialLink[] = [
		{
			name: 'Github',
			href: 'https://github.com/codecarton',
			icon: GithubIcon
		},
		{
			name: 'Twitter',
			href: 'https://twitter.com/codecarton',
			icon: TwitterIcon
		},
		{
			name: 'Spotify',
			href: 'https://open.spotify.com/user/jordancalhoun?si=72ca47f02de14f36',
			icon: SpotifyIcon
		}
	];
</script>

<div class="bg-violet-500">
	<div class="max-w-7xl mx-auto p-7 md:flex md:p-20">
		<div>
			<h2 class="text-4xl font-bold text-violet-50 mb-7">Hi 👋, I'm Jordan</h2>
			<p class="text-violet-50 text-xl leading-10">
				<img
					src="/images/profile-picture.webp"
					alt="Jordan in woodshop"
					class="rotate-3 w-32 rounded mx-8 float-right border-4 mt-6 md:hidden"
				/>
				<span class="font-bold">Full stack developer, woodworker, hifi enthusiast.</span>
				Developing apps for the Apple ecosystem at
				<a href="http://codecarton.com" target="_blank" rel="noreferrer">Code Carton</a>. I spend my
				mornings and evenings learning productivity strategies, designing/building furniture with my
				company Mortise & Co.
			</p>
			<div class="md:flex mt-10 hidden">
				{#each socialLinks as link}
					<!-- svelte-ignore security-anchor-rel-noreferrer -->
					<a href={link.href} rel="me" class="mx-3 first:ml-0 last:mr-0" target="_blank">
						<svelte:component this={link.icon} class="text-violet-800 hover:text-violet-200" />
					</a>
				{/each}
			</div>
		</div>
		<div class="min-w-fit my-auto hidden md:block">
			<img
				src="/images/profile-picture.webp"
				alt="Jordan in his workshop"
				class="w-60 rounded mx-8"
			/>
		</div>
	</div>
</div>
