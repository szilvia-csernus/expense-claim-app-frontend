import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';


export default defineConfig(() => {
	return {
		build: {
			outDir: 'build',
		},
		base: './',
		plugins: [
			react(),
			VitePWA({
				registerType: 'autoUpdate',
				devOptions: {
					enabled: true,
				},
			}),
		],
		test: {
			globals: true,
			environment: 'jsdom',
			setupFiles: './tests/setup.js',
		},
	};
});
