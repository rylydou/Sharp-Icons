'use strict';

console.log('Building...');

const fs = require('fs');
const data = require('./data.json');

let theme = {
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
	},
};

for (const key in data.files) {
	const value = data.files[key];

	theme.iconDefinitions[key] = { iconPath: `./icons/${key}.svg` };

	if ('names' in value) {
		value.names.forEach((name) => {
			if ('exts' in value) {
				value.exts.forEach((ext) => {
					if (ext.length === 0) {
						theme.fileNames[name] = key;
					} else {
						theme.fileNames[`${name}.${ext}`] = key;
					}
				});
			} else {
				theme.fileNames[name] = key;
			}
		});
	} else {
		value.exts?.forEach((ext) => {
			theme.fileExtensions[ext] = key;
		});
	}

	value.langs?.forEach((lang) => {
		theme.languageIds[lang] = key;
	});

	value.fullNames?.forEach((name) => {
		theme.fileNames[name] = key;
	});
}

data.dotFolders.forEach((folder) => {
	theme.folderNames[folder] = 'dotfolder';
	theme.folderNamesExpanded[folder] = 'dotfolder_open';
});

fs.writeFile('icon-theme.json', JSON.stringify(theme /* , null, '\t' */), () => {
	console.log('Build completed successfully');
});
