import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: '/error.html',
			precompress: false,
			strict: true
		}),
		prerender: {
			crawl: true,
			handleHttpError: 'warn',
			handleMissingId: 'warn',
			handleEntryGeneratorMismatch: 'warn'
		}
	}
};