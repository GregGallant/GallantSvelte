import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
//import gltf from 'vite-plugin-gltf';
import gltf from 'rollup-plugin-gltf';

export default defineConfig({
	plugins: [sveltekit(), gltf()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	assetsInclude: ['**/*.gltf']
});
