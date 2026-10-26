import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import { gestureCommands } from './test/gesture-commands';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	test: {
		projects: [
			{
				extends: true,
				test: {
					name: 'unit',
					include: ['test/**/*.test.ts', 'src/**/*.test.ts'],
					exclude: ['**/*.browser.test.ts'],
					environment: 'jsdom',
				},
			},
			{
				test: {
					name: 'gestures',
					include: ['test/**/*.browser.test.ts'],
					browser: {
						enabled: true,
						provider: playwright({}),
						headless: true,
						commands: gestureCommands,
						instances: [{ browser: 'chromium' }, { browser: 'webkit' }],
					},
				},
			},
			{
				extends: true,
				plugins: [
					storybookTest({
						configDir: path.join(dirname, '.storybook'),
						storybookScript: 'npm run storybook:start -- --no-open',
					}),
				],
				test: {
					name: 'storybook',
					browser: {
						enabled: true,
						provider: playwright({}),
						headless: true,
						instances: [{ browser: 'chromium' }],
					},
					setupFiles: ['./.storybook/vitest.setup.ts'],
				},
			},
		],
	},
});
