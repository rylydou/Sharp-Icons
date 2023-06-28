import { Palette } from './models'

interface PaletteList {
	[key: string]: Palette
}

export const palettes: PaletteList = {
	default: {
		displayName: "Default",
		colors: ['#FF5252', '#EF652F', '#FFCC4A', '#8BC34A', '#42A5F5', '#A56FFF', '#A3B2BF', '#6C7780']
	},
	monochrome: {
		displayName: "Monochrome",
		colors: ['#808080', '#808080', '#808080', '#808080', '#808080', '#808080', '#808080', '#808080']
	},
	solarized: {
		displayName: "Solarized",
		colors: ['#dc322f', '#cb4b16', '#b58900', '#859900', '#268bd2', '#6c71c4', '#839496', '#657b83']
	},
	monokai: {
		displayName: "Monokai",
		colors: ['#F92672', '#FD971F', '#E6DB74', '#A6E22E', '#66D9EF', '#AE81FF', '#F8F8F2', '#75715E']
	},
	monokai_pro: {
		displayName: "Monokai Pro",
		colors: ['#FF6188', '#FC9867', '#FFD866', '#A9DC76', '#78DCE8', '#AB9DF2', '#FDF9F3', '#908E8F']
	},
	gruvbox: {
		displayName: "Gruvbox",
		colors: ['#cc241d', '#d65d0e', '#d79921', '#98971a', '#458588', '#b16286', '#fbf1c7', '#928374']
	},
	gruvbox_faded: {
		displayName: "Gruvbox Faded",
		colors: ['#9d0006', '#af3a03', '#b57614', '#79740e', '#427b58', '#8f3f71', '#fbf1c7', '#928374']
	},
	gruvbox_bright: {
		displayName: "Gruvbox Bright",
		colors: ['#fb4934', '#fe8019', '#fabd2f', '#b8bb26', '#83a598', '#d3869b', '#fbf1c7', '#928374']
	},
	adwaita: {
		displayName: "Adwaita",
		colors: ['#e01b24', '#ff7800', '#f6d32d', '#33d17a', '#3584e4', '#9141ac', '#9a9996', '#77767b']
	},
	ios_light: {
		displayName: "iOS Light",
		colors: ['#ff3b30', '#ff9500', '#ffcc00', '#34c759', '#007aff', '#af52de', '#8e8e93', '#48484a']
	},
	ios_dark: {
		displayName: "iOS Dark",
		colors: ['#ff453a', '#ff9f0a', '#ffd60a', '#30d158', '#0a84ff', '#bf5af2', '#8e8e93', '#48484a']
	}
}
