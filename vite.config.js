import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr' 

// https://vitejs.dev/config/


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
				workbox: {
					globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
					runtimeCaching: [
						{
							urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
							handler: 'CacheFirst',
							options: {
								cacheName: 'google-fonts-cache',
								expiration: {
									maxEntries: 10,
									maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
								},
								cacheableResponse: {
									statuses: [0, 200],
								},
							},
						},
						{
							urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
							handler: 'CacheFirst',
							options: {
							cacheName: 'gstatic-fonts-cache',
							expiration: {
								maxEntries: 10,
								maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
							},
							cacheableResponse: {
								statuses: [0, 200]
							},
							}
						},
						{
							urlPattern: /^https:\/\/www\.redeemerdelft\.nl\/.*/i,
							handler: 'CacheFirst',
							options: {
								cacheName: 'logo-cache',
								expiration: {
									maxEntries: 10,
									maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
								},
								cacheableResponse: {
									statuses: [0, 200],
								},
							},
						},
					],
				},
				devOptions: {
					enabled: true,
				},
			}),
			svgr({ svgrOptions: { 
				// svgr options 
			}, }), 
		],
		workbox: {
			globPatterns: ['**/*.{js,css,html,svg,png}'],
		},
		test: {
			globals: true,
			environment: 'jsdom',
			setupFiles: './tests/setup.js',
		},
	};
});
