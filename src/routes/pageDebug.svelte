<script>
	import Skillbox from './Skillbox.svelte';
	import SkillboxAnim from './SkillboxAnim.svelte';
	import SkillboxCustom from './SkillboxCustom.svelte';
	import SkillboxGG from './SkillboxGG.svelte';
	import SkillboxSVG from './SkillboxSVG.svelte';
	import heroimg from '$lib/images/gohead.jpg';
	import upnext from '$lib/images/upnext.jpg';
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
					<h4>Frontend and backend software development, devop coordination, continuous integration and deployments.</h4>
				</div>
				<div class="flexHeader">
					<div class="skillbox">
						<div class="skilltext">
							<h6>Front-end / Backend Languages</h6>
							<h5>Go &nbsp;&nbsp;&nbsp; SvelteJS &nbsp;&nbsp;&nbsp; ThreeJS &nbsp;&nbsp;&nbsp; C#</h5>
						</div>
						<!-- <Skillbox mesh="vehicle1/scene" size="0.7" rotation="normal" /> -->
						<SkillboxSVG svg="golang" size="1.3" rotation="normal" speed=".05"/>
					</div>
					<div class="skillbox">
						<div class="skilltext">
							<h6>Deployments</h6>
							<h5>Docker &nbsp;&nbsp;&nbsp; Kubernetes &nbsp;&nbsp;&nbsp; AWS</h5>
						</div>
						<SkillboxCustom mesh="sphere" size="1.1" rotation="normal" speed=".05"/>
					</div>
					<div class="skillbox">
						<div class="skilltext">
							<h6>Data Persistance</h6>
							<h5>MySQL &nbsp;&nbsp;&nbsp; MongoDB &nbsp;&nbsp;&nbsp; Postgres</h5>
						</div>
						<SkillboxCustom mesh="cylinder" size="1.1" rotation="normal" speed=".05"/>
						<!-- <Skillbox mesh="rokit" size="10.7" rotation="normal" /> -->
					</div>
				</div>
			</div>
			<div class="contentHorizon2">
				<div class="skillHeader">
					Creative Development & Design
					<h4>Frontend and backend software development, devop coordination, continuous integration and deployments.</h4>
				</div>
				<div class="flexHeader">
					<div class="skillbox">
						<div class="skilltext">
							<h6>Front-end / Backend Languages</h6>
							<h5>Go &nbsp;&nbsp;&nbsp; SvelteJS &nbsp;&nbsp;&nbsp; ThreeJS &nbsp;&nbsp;&nbsp; C#</h5>
						</div>
						<!-- <Skillbox mesh="vehicle1/scene" size="0.7" rotation="normal" /> -->
						<SkillboxCustom mesh="iso" size="1.1" rotation="normal" speed=".05"/>
					</div>
					<div class="skillbox">
						<div class="skilltext">
							<h6>Deployments</h6>
							<h5>Docker &nbsp;&nbsp;&nbsp; Kubernetes &nbsp;&nbsp;&nbsp; AWS</h5>
						</div>
						<SkillboxGG mesh="spaceship" size="0.5" rotation="normal" />
					</div>
					<div class="skillbox">
						<div class="skilltext">
							<h6>Data Persistance</h6>
							<h5>MySQL &nbsp;&nbsp;&nbsp; MongoDB &nbsp;&nbsp;&nbsp; Postgres</h5>
						</div>
						<SkillboxAnim mesh="jogger" size="3.1" rotation="none" speed=".01"/>
						<!-- <Skillbox mesh="rokit" size="10.7" rotation="normal" /> -->
					</div>
				</div>
			</div>
			<div class="contentHorizon">
				<div class="skillHeader">
					Full-Stack Software Engineering
					<h4>Frontend and backend software development, devop coordination, continuous integration and deployments.</h4>
				</div>
				<div class="flexHeader">
					<div class="skillbox">
						<div class="skilltext">
							<h6>Front-end / Backend Languages</h6>
							<h5>Go &nbsp;&nbsp;&nbsp; SvelteJS &nbsp;&nbsp;&nbsp; ThreeJS &nbsp;&nbsp;&nbsp; C#</h5>
						</div>
						<!-- <Skillbox mesh="vehicle1/scene" size="0.7" rotation="normal" /> -->
						<SkillboxCustom mesh="torus" size="1.1" rotation="normal" speed=".05"/>
					</div>
					<div class="skillbox">
						<div class="skilltext">
							<h6>Deployments</h6>
							<h5>Docker &nbsp;&nbsp;&nbsp; Kubernetes &nbsp;&nbsp;&nbsp; AWS</h5>
						</div>
						<SkillboxCustom mesh="sphere" size="1.1" rotation="normal" speed=".05"/>
					</div>
					<div class="skillbox">
						<div class="skilltext">
							<h6>Data Persistance</h6>
							<h5>MySQL &nbsp;&nbsp;&nbsp; MongoDB &nbsp;&nbsp;&nbsp; Postgres</h5>
						</div>
						<SkillboxCustom mesh="cylinder" size="1.1" rotation="normal" speed=".05"/>
						<!-- <Skillbox mesh="rokit" size="10.7" rotation="normal" /> -->
					</div>
				</div>
			</div>
		</div>
		<!--
		<div class="hed2">
			<h1>Up next...</h1>
			<h3>Docker and Kubernetes migration... </h3>
			<h3>SCSS... Pod Networking... Memory tests</h3>
		</div>
		-->
	</div>
</div>

<style lang="scss">

	.skillHeader {
		h4 {
			font-family: Helvetica, sans-serif;
			font-size:.4em;
			font-weight: normal;
			letter-spacing:.08em;
		}
	}

	.skilltext {
		h5 {
			display: flex;
			justify-content: center;
			width:320px;
			text-align:center;
			font-size: .4em;
			padding:9px 8px 0 8px;
			margin:0 0 0 0;
			font-family: sans-serif;

			a:link {
				color:#fafff3;
			}
			a:visited {
				color:#fafff3;
			}
			a:hover {
				color:#3affaf;
			}
		}

		h6 {
			font-size: .3em;
			margin:0 5px 0 5px;
			padding:4px;
			border-bottom:1px solid #797979;
			font-family: sans-serif;
		}

	}
	.skillbox {
		background-color:#8dd3e0;
		color:#3f3f3f;
		border:2px solid #1a936f;
		margin: 0 0 7px 15px;
		padding:0 0 0 0;
		width:320px;
		min-height:240px;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	div.hed {
		width: 100%;
		min-height: 450px;
		background-color: #00535d;
		background: url('$lib/images/gohead.jpg') 40% 40% no-repeat;
		background-size: cover;
		padding: 9px 9px 9px 9px;
		border-top: 1px solid #53939d;
		border-bottom: 1px solid #53939d;
		font-size: 0.55em;
	}
	div.hed h1 {
		line-height: 1em;
		margin-bottom: 7px;
	}
	div.hed2 {
		width: 100%;
		min-height: 440px;
		background-color: #00535d;
		background: url("$lib/images/upnext.jpg") 20% 20% no-repeat;
		background-size: cover;
		border-top: 1px solid #427aa1;
		border-bottom: 1px solid #427aa1;
		text-align: left;
		padding: 7px;
	}
	div.hed2 h1 {
		line-height: 1.25em;
		font-size: 1.15em;
	}
	div.hed2 h3 {
		font-size: 1em;
		margin: 385px 12px 0 0;
		text-align: right;
	}
	div.subhed {
		max-width: 400px;
	}
	div.subhed span {
		line-height: 1.4em;
		margin: 0 .1em 0 1.1em;
		font-size: 1.7em;
		padding: 0.1em 0.5em 0.5em 0.5em;
	}

</style>
