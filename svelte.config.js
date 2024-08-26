import adapter from '@sveltejs/adapter-node';
import { sveltePreprocess } from 'svelte-preprocess';

export default {

	preprocess:sveltePreprocess({}),
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: '/error.html',
			precompress: false,
			strict: true
		})
	}
};