import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

export default {
  preprocess: preprocess(),
  kit: {
	adapter: adapter({
		pages: 'build',
		assets: 'build',
		fallback: 'index.html', // Specify the fallback page
		precompress: false
	  }),
	  paths: {
		base: '/CREDITS-Generator'
	  },
  },
};