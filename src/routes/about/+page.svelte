<svelte:head>
	<title>About GallantOne.com</title>
	<meta name="description" content="About GallantOne.com and development" />
</svelte:head>
<div class="about">
	<div class="about-column">
		<h2>On Development</h2>

		<p>
			This is the portfolio of Greg Gallant, a professional software engineer, web developer and photographer for almost 25 years.
		</p>
		<h5>This website uses: <a target="golang" href="https://go.dev">Go</a> | <a target="sveltejs" href="https://svelte.dev">SvelteJS</a> | <a target="threejs" href="https://threejs.org">ThreeJS</a></h5>
		<p>
			This site has gone through many iterations from early JQuery to early React.  It now uses SvelteJS.
			Svelte, in my opinion, was the evolution of the ideas brought by React, JSX and Redux.  It has streamlined the ability to create dynamic frontends or static pre-rendered content
			with support for fast API calls, data stores and the like within a pure JS library.
		</p>
		<p>
			The backend for this site was originally Java Spring Boot, but that was updated to Go for stronger development and less annotations.
			Go is a great language to code.  I liked Go so much I received a three class <a target="certs" href="https://www.coursera.org/account/accomplishments/certificate/XSSDK6YPCZ6C">certification from the University of California, Irivne</a>.
		</p>
		<p>
			The ThreeJS components are just that. I created small, quick Svelte components with Animated keyframed 3D meshes. This allows meshes or even mini-games rendered exactly like a simple HTML call,  with the ability to load animations or meshes the same way you'd load an image along with parameters like speed, rotation and size as well as styles.  Memory and rending across mobile platforms is ongoing but so far it has been working with reasonable speeds.
		</p>
		<p>I dockerize everything now, instead of running bare metal.  It's great to have a blueprint of services for a project that you can also run and manage at the same time.</p>
		<p>
			Thank you for reading all of this. More music related projects are underway along with C# within a Unity app built years ago that is currently being modernized.
			Keeping software and programming fun is and has always been the way.
		</p>
		<div class="sig"> - Greg Gallant</div>
	</div>
</div>

<style lang="scss">
	p {
		font-family: Lora, sans-serif;
		a:link {
			color: #3a7fa3;
		}
		a:visited {
			color: #3a6f93;
		}

	}
	.sig {
		font-family: Lora, sans-serif;
		text-align: right;
	}

	pre {
		a:link {
			color: #3a7fa3;
		}
		a:visited {
			color: #3a6f93;
		}
	}
</style>