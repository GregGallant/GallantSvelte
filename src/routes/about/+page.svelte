<script>
	import cSharpCal from '$lib/images/unityGGCal.png';
	import cronvega from '$lib/images/cronvega_site.png';
</script>

<svelte:head>
	<title>About GallantOne.com</title>
	<meta name="description" content="About GallantOne.com and development" />
</svelte:head>
<div class="about">
	<div class="about-column">
		<h2>On Development</h2>

		<p>
			<a href="https://www.cronvega.com" target="cronvega"><img src={cronvega} alt="Cronvega.com - Personalized Branding" class="cronvegaImg"/></a>
			This is the portfolio of Greg Gallant, a professional software engineer, web developer and photographer for almost 25 years.  I am the sole propeitor of my company: <a href="https://www.cronvega.com" target="cronvega">Cronvega - Personalized Branding</a>.  I have helped build several very successful New York City companies from the ground up and have been a part of a variety of engineering teams.
			<br/> <br/>
			This site has gone through many iterations from early JQuery to early React.  It now uses SvelteJS.
			Svelte, in my opinion, was the evolution of the ideas brought by React, JSX and Redux.  It has streamlined the ability to create dynamic frontends or static pre-rendered content
			with support for fast API calls, data stores and the like within a pure JS library.
		</p>
		<h3>Go instead of Java</h3>
		<p>
			The backend for this site was originally Java Spring Boot, but that was updated to Go for stronger development and less annotations.  Java was my first real programming language first used in the late 90's and it is indeed a very strong and fast language. PHP professionaly became the language I worked with for many years after (pre and post Laravel).
			Go is a great language to code and work with.
			<br/> <br/>
			I liked Go so much I received a three class <a target="certs" href="https://www.coursera.org/account/accomplishments/certificate/XSSDK6YPCZ6C">certification from the University of California, Irivne</a>.
			The news automation, which I had previously written in Java Spring Boot, is now all rewritten in Go.  I am far more productive in using Go to bring up servers, automate API calls, authentication and authorization and especially working with time and date calculations (as compared to older Java).  Concurrency in Go is much easier to work with compared to Java, in my humble opinion, and is a major strength in regards to how Go handles multicore processing.
		</p>
		<h3>Future building: ThreeJS as Svelte components</h3>
		<p>
			The ThreeJS components are just that. I created small, quick Svelte components with Animated keyframed 3D meshes. This allows meshes or even mini-games rendered exactly like a simple HTML call,  with the ability to load animations or meshes the same way you'd load an image along with parameters like speed, rotation and size as well as styles.
			In regards to memory, their were a few issues to keep in mind.
			<br/> <br/>
			ThreeJS mesh loading is handled within calls to <em>onMount</em> once all components are rendered.  There is no virtual DOM in Svelte, everything is rendered into highly optimized JS components, therefore
			once each Svelte component is rendered, the meshes get loaded asynchronously.  When it comes to meshes, Safari mobile must be considered and respected for two primary issues: texture sizes and calls to requestAnimationFrame wether directly or from a ThreeJS animationLoop.
			<br/> <br/>
			The texture issue is more straightforward, don't use 4K textures without compression libraries no matter how quickly it might load on certain devices.  Safari, and Apple devices in general have very strict protocols when it comes to application memory.  I was able to use 1K textures with decent normal maps and the difference is slight enough that using 4K would just be a waste of memory, not to mention Safari running on any Apple devices will complain.
			<br/> <br/>
			Regarding Safari memory, keeping requests to animation frames as low as possible is also a must, meaning there shouldn't be any runaway requests happening outside of any event handling. This keeps everything extremely light in regards to memory, can be easily measured within browser developer tools and
			keeps in line with Apple's strict memory protocols.
		</p>
		<h3>A <a href="/calendar">Svelte Calendar</a></h3>
		<p>Years ago I created a Unity app featuring a calendar developed in C#.  It was fully meshed and 3D on top of the functionality of the calendar.
			<img src={cSharpCal} alt="Unity Calendar App" class="unityapp" />
			The app did not see much action but I recently ported this to Javascript and specifically within the Svelte framework.  It has similar functionality via a notepad each date.
			This will soon be full featured as was the Unity app, however there are authentication needs since this is web app based.  <a href="/calendar">Check out the calendar development here.</a>
		</p>
		<h3>Docker / Kubernetes</h3>
		<p>I dockerize each workspace now, instead of running bare metal and am using Circle CI to integrate everything.  It's great to have a blueprint of services for a project that you can also run and manage at the same time.  I run Docker inside Akamai servers on Debian linux and use Kubernetes as a local stage, but I will most likely be shelling out for a total Kubernetes run environment. Adding load balanced pods so easily as a simple parameter is a big deal to me and rolling deployments would make things a little easier.</p>
		<p>
			Thank you for reading all of this. More music related projects are underway along with C# within a Unity app built years ago that is currently being modernized.
			Keeping software and programming fun is and has always been the way.
		</p>
		<div class="sig"> - Greg Gallant</div>
	</div>
</div>

<style lang="scss">

	a:link {
		color: #3a7fa3;
	}

	a:visited {
		color: #3a7fa3;
	}

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

	img.unityapp {
		float:right;
		padding:10px;
		wrap-option:after;
		word-wrap: initial;
		text-wrap: inherit;
	}

	img.cronvegaImg {
		float:right;
		padding:10px 10px 10px 10px;
		margin-left:10px;
		wrap-option:after;
		word-wrap: initial;
		text-wrap: inherit;
		border: 1px solid #cfcfcf;
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