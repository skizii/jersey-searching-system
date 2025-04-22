export const theme = {
	colors: {
		main: '#282C32',
		white: '#ffffff',
		accent: '#F9BF42',
		secondary: '#A9B0BA',
		secondaryLight: '#F6F7F7',
	},
	fonts: {
		main: 'Inter, Arial, sans-serif'
	},
};

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			main: string;
			white: string;
			accent: string;
			secondary: string;
			secondaryLight: string;
		};
		fonts: {
		main: string;
		};
	}
}

export type ThemeType = typeof theme;