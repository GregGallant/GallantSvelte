<script>
	import Skillbox from './Skillbox.svelte';
	import SkillboxAnim from './SkillboxAnim.svelte';
	import SkillboxCustom from './SkillboxCustom.svelte';
	import SkillboxGG from './SkillboxGG.svelte';
	import SkillboxSVG from './SkillboxSVG.svelte';
	import heroimg from '$lib/images/gohead.jpg';
	import upnext from '$lib/images/upnext.jpg';
	import montop from '$lib/images/mon_top.png';
	import monbot from '$lib/images/mon_bot.png';
	import dockerkube from '$lib/images/dockerkube.png';


	import icosimg from '$lib/images/icos.png';
	import gojavaimg from '$lib/images/gojava.png';
	import mysqlpsqlimg from '$lib/images/mysqlpostgres.png';
	import svelteimg from '$lib/images/sveltethree.png';
	import WebGL from 'three/addons/capabilities/WebGL.js';

	let legacyBrowser = false;

	// WebGL check
	if (!WebGL.isWebGL2Available()) {
		legacyBrowser = true;
	}

</script>

<svelte:head>
	<title>GallantOne.com - Home</title>
	<meta name="description" content="Greg Gallant Programming" />
</svelte:head>
<div class="content">
	<div class="headerSpace">
		<div class="hed">
			<h1>Build for Tomorrow</h1>
			<div class="subhed">
				<span>Technical Art & Development of Greg A. Gallant</span>
			</div>
		</div>
		<div class="centered">
			<div class="contentHorizon">
				<div class="skillHeader">
					Full-Stack Software Engineering
					<h4>Frontend and backend software development, devop coordination, continuous integration and deployments</h4>
				</div>
				<div class="flexHeader">
					<div class="skillbox">
						<div class="skilltext">
							<h6>Front-end / Backend Languages</h6>
							<h5>Go &nbsp;&nbsp;&nbsp; Java &nbsp;&nbsp;&nbsp; PHP &nbsp;&nbsp;&nbsp; C#</h5>
						</div>
						<!-- <Skillbox mesh="vehicle1/scene" size="0.7" rotation="normal" /> -->
						{#if legacyBrowser === true}
							<img src={gojavaimg} alt="GoLang, Java, PHP, C#" width="320px" height="240px"/>
						{:else}
						<SkillboxSVG svg="golang" size="1" rotation="normal" speed=".05"/>
						{/if}
					</div>
					<div class="skillbox">
						<div class="skilltext">
							<h6>Deployments</h6>
							<h5>Docker &nbsp;&nbsp;&nbsp; Kubernetes &nbsp;&nbsp;&nbsp; AWS</h5>
						</div>
						<img alt="Docker / Kubernetes" src={dockerkube} />
					</div>
					<div class="skillbox">
						<div class="skilltext">
							<h6>Data Persistance</h6>
							<h5>MySQL &nbsp;&nbsp;&nbsp; MongoDB &nbsp;&nbsp;&nbsp; Postgres</h5>
						</div>
							<img src={mysqlpsqlimg} alt="MySQL, Postgres, MongoDB" width="320px" height="240px"/>
						<!-- <Skillbox mesh="rokit" size="10.7" rotation="normal" /> -->
					</div>
				</div>
			</div>
			<div class="contentHorizon2">
				<div class="flexHeader">
					<div class="skillHeader">
						Creative Development & Design
						<div class="frontend">SvelteJS&nbsp;&nbsp;&nbsp;ThreeJS&nbsp;&nbsp;&nbsp;Javascript &nbsp;&nbsp;&nbsp; SCSS</div>
						<h4>Responsive and reactive programming, Unity development, and Adobe Photoshop and Premier design for web and apps </h4>
						<h6>SvelteJS + ThreeJS allows for custom mini-games & interactive components simplified into HTML tags</h6>
					</div>
					<div class="monitor_wrap">
						<div class="monitor">
							<img src={montop} alt="monitor top"/>
							{#if legacyBrowser === true}
								<img src={svelteimg} alt="GoLang, Java, C#" width="320px" height="240px"/>
							{:else}
								<SkillboxGG mesh="spaceship" size="0.5" rotation="normal" />
							{/if}
							<img class="monbot" src={monbot} alt="monitor bottom"/>
						</div>
					</div>
				</div>
			</div>
			<div class="contentHorizon3">
				<div class="skillHeader">
					Solving Complexities &amp; Creating Solutions
					<h4>Integrating multi-site code and embedded web apps within various architectures</h4>
				</div>
				<div class="flexHeader">
					<div class="skillbox_clear">
						{#if legacyBrowser === true}
							<img src={icosimg} alt="IcoSphere" width="320px" height="240px"/>
						{:else}
							<SkillboxCustom mesh="icos" size="1.2" rotation="normal" speed=".05"/>
						{/if}
					</div>
					<ul class="skillpoints">
						<li>Understanding large scale high latency applications &amp; debugging large legacy codebases</li>
						<li>Running embedded javascript within sites containing older and sometimes outdated javascript libraries and frameworks</li>
						<li>Running asynchronous applications within memory intensive high profile websites</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">


	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}


</style>
