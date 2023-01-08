import * as fs from 'fs'
import path = require('path')
import { fileIcons } from '../icons/fileIcons'
import { IconTheme } from '../models'
import { palettes } from '../palettes'
import { dotFolders, dotFolders as dotfolders } from '../icons/dotFolders'

export default function createThemes() {
	console.log('--- creating themes ---')

	let theme: IconTheme = {
		hidesExplorerArrows: true,
		file: 'file',
		folder: 'folder',
		folderExpanded: 'folder_open',
		rootFolder: 'root',
		rootFolderExpanded: 'root_open',
		fileExtensions: {},
		languageIds: {},
		fileNames: {},
		folderNames: {},
		folderNamesExpanded: {},
		iconDefinitions: {
			file: { iconPath: './icons/file.svg' },

			folder: { iconPath: './icons/folder.svg' },
			folder_open: { iconPath: './icons/folder_open.svg' },

			root: { iconPath: './icons/root.svg' },
			root_open: { iconPath: './icons/root_open.svg' },

			dotfolder: { iconPath: './icons/dotfolder.svg' },
			dotfolder_open: { iconPath: './icons/dotfolder_open.svg' },
		}
	}

	console.log('assigning icons...')

	let usedIcons: string[] = [
		'file.svg',
		'folder.svg',
		'folder_open.svg',
		'root.svg',
		'root_open.svg',
		'dotfolder.svg',
		'dotfolder_open.svg',
	]

	// add dotfolders
	dotfolders.forEach((dotfolder) => {
		theme.folderNames[dotfolder] = 'dotfolder'
		theme.folderNamesExpanded[dotfolder] = 'dotfolder_open'
	})

	// add file icons
	for (const fileIconId in fileIcons) {
		const fileIcon = fileIcons[fileIconId]
		const iconPath = `./icons/${fileIconId}.svg`
		usedIcons.push(fileIconId + '.svg')

		// Generate extensions
		fileIcon.exts?.forEach((ext) => {
			theme.fileExtensions[ext] = fileIconId
		})

		// Generate languages
		fileIcon.langs?.forEach((lang) => {
			theme.languageIds[lang] = fileIconId
		})

		// Generate names
		fileIcon.names?.forEach((name) => {
			theme.fileNames[name] = fileIconId
		})

		// Generate combo names
		fileIcon.nameCombos?.forEach((combo) => {
			combo.names.forEach((name) => {
				combo.exts.forEach((ext) => {
					if (ext.length == 0) {
						theme.fileNames[name] = fileIconId
					}
					else {
						theme.fileNames[name + '.' + ext] = fileIconId
					}
				})
			})
		})

		theme.iconDefinitions[fileIconId] = { iconPath: iconPath }
	}

	const icons = fs.readdirSync('icons')

	const missingIcons = usedIcons.filter((value, index, array) => icons.indexOf(value) < 0)
	console.log(`missing icons: (${missingIcons.length})`)
	missingIcons.forEach((icon) => {
		console.warn('- ' + icon)
	})

	const unusedIcons = icons.filter((value, index, array) => usedIcons.indexOf(value) < 0)
	console.log(`unused icons: (${unusedIcons.length}) `)
	unusedIcons.forEach((icon) => {
		console.warn('- ' + icon)
	})

	console.log('coloring icons...')

	let themeNoFolder = { ...theme }
	themeNoFolder.hidesExplorerArrows = false
	themeNoFolder.folder = ''
	themeNoFolder.folderExpanded = ''
	themeNoFolder.rootFolder = ''
	themeNoFolder.rootFolderExpanded = ''
	themeNoFolder.folderNames = {}
	themeNoFolder.folderNamesExpanded = {}

	const themeJson = JSON.stringify(theme)
	const themeNoFolderJson = JSON.stringify(themeNoFolder)

	for (const paletteId in palettes) {
		console.log('- ' + paletteId)

		const palette = palettes[paletteId]

		const iconThemeDirname = path.join('dist/', paletteId)

		fs.mkdirSync(path.join(iconThemeDirname, 'icons'), { recursive: true })
		fs.writeFileSync(path.join(iconThemeDirname, 'normal.json'), themeJson)
		fs.writeFileSync(path.join(iconThemeDirname, 'folderless.json'), themeNoFolderJson)

		const icons = fs.readdirSync('icons')
		for (const icon of icons) {
			// console.log('\t' + icon)

			let filename = path.join('icons', icon)
			let iconSvg = fs.readFileSync(filename).toString()

			for (let i = 0; i < palette.colors.length; i++) {
				const baseColor = palettes.default.colors[i]
				const color = palette.colors[i]

				iconSvg = iconSvg.replace(new RegExp(baseColor, 'g'), color)
			}

			fs.writeFileSync(path.join(iconThemeDirname, 'icons', icon), iconSvg)
		}
	}
}
