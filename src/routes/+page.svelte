<svelte:head>
	<link
		rel="preload"
		as="image"
		href="/images/Andrew-Headshot-600.webp"
		imagesrcset="/images/Andrew-Headshot-600.webp 600w"
		imagesizes="(min-width: 768px) 33vw, 100vw"
	/>
	<title>Andrew Houser - About Me</title>
	<meta name="description" content="About Andrew Houser" />
</svelte:head>

<div class="mx-auto flex max-w-7xl flex-col items-center justify-center p-8 md:flex-row">
	<!-- Left Section: Text Content -->
	<div class="p-4 text-center md:w-1/2 md:text-left">
		<h1 class="mb-6 text-5xl font-bold text-gray-800 dark:text-white">Hi, I'm Andrew Houser</h1>
		<p class="mb-4 text-lg text-gray-700 dark:text-gray-300">
			I'm a Computing student in the BlueSky TN Institute at ETSU. I have a passion for system
			administration and programming, developing my skills through self-hosting home servers. I am
			an Intern at BlueCross BlueShield TN, currently working in Infrastructure and Operations.
		</p>
	</div>

	<!-- Right Section: Headshot Image -->
	<div class="flex items-center justify-center md:w-1/3">
		<img
			src="/images/Andrew-Headshot-600.webp"
			srcset="/images/Andrew-Headshot-600.webp 600w"
			sizes="(min-width: 768px) 33vw, 100vw"
			alt="Andrew Houser headshot"
			width="600"
			height="600"
			decoding="async"
			fetchpriority="high"
			loading="eager"
			class="h-auto w-full max-w-xs rounded-lg object-cover shadow-lg"
		/>
	</div>
</div>

<!-- Social Media SVGs -->
<div class="flex justify-center space-x-6 p-4">
	<!-- LinkedIn -->
	<a
		target="_blank"
		href="https://www.linkedin.com/in/andrew-houser/"
		class="flex h-16 w-16 items-center justify-center rounded-full bg-gray-300 shadow-md transition-transform hover:scale-105 dark:bg-gray-600"
	>
		<img src="/icons/linkedin.svg" alt="LinkedIn" class="h-10 w-10 dark:invert dark:filter" />
	</a>
	<!-- GitHub -->
	<a
		target="_blank"
		href="https://github.com/andrewski04"
		class="flex h-16 w-16 items-center justify-center rounded-full bg-gray-300 shadow-md transition-transform hover:scale-105 dark:bg-gray-600"
	>
		<img src="/icons/github.svg" alt="GitHub" class="h-8 w-8 dark:invert dark:filter" />
	</a>
	<!-- Email -->
	<a
		target="_blank"
		href="mailto:andrew@andrew-houser.com"
		class="flex h-16 w-16 items-center justify-center rounded-full bg-gray-300 shadow-md transition-transform hover:scale-105 dark:bg-gray-600"
	>
		<img src="/icons/email.svg" alt="Email" class="h-8 w-8 dark:invert dark:filter" />
	</a>
</div>

<!-- Video Placeholder moved under main text -->
<div class="mx-auto flex max-w-3xl flex-col items-center justify-center gap-3 p-8 text-center">
	<div
		class="relative flex aspect-video w-full max-w-2xl items-center justify-center overflow-hidden rounded-lg bg-gray-300 shadow-lg dark:bg-gray-700"
	>
		<svg
			class="absolute h-24 w-24 text-gray-500 dark:text-gray-400"
			fill="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M8 5v14l11-7z" />
		</svg>
	</div>
	<p class="text-lg text-gray-700 dark:text-gray-300">
		Learn more about me and my experience at the BlueSky Institute by watching my video reflection.
		(Coming soon...)
	</p>
</div>
