# Contributing

If you just want to add a new icon then [create an issue](https://github.com/CiberTurtle/Sharp-Icons/issues/new/choose) with some ideas or designs for the icon.

## Building

**Install dependencies**

```shell
$ npm i
```

**Build**

```shell
$ npm run compile
```
This will generate an `icon-theme.json` file from `config.json`.

```shell
$ npm run package
```

This will generate a vscode extension package in `bin/`

## Project structure

This project uses a build system to simplify the process of assigning icons to specific files. [Have you *seen* how you are supposed to do it by hand!](https://github.com/CiberTurtle/Sharp-Icons/blob/13c5dd2ed889fb4f3d12a03fd1c064815877011a/icon-theme.json)

The icon assignments are stored in `config.json`. If you just want to change the icon assignments then edit this file. Here is the structure of the json (I should probably make a schema for this).

- `files` - This list defines what icons are assigned to what kinds of files. The key is the icon name from `icons/` not including the file extension.
	- `exts` - is a list of file extensions (not including the `.`) the icon is assigned to.
	- `langs` - is a list of language ids the icon is assigned to. You can find the language id by looking up in the "Feature Contributions" section of an extension or from the vscode language picker.
	- `fullNames` - is a list of file names (including the file extension) the icon is assigned to.
	- `names` - causes `exts` to be treated differently. This will essentiality is a short hand instead of writing out all of the `fullNames` by hand. say for a 'readme file', a read me file could have many extensions for it, so writing:
		```jsonc
		"exts": [
			"",
			"txt",
			"md"
		],
		"names": [
			"readme"
		]
		```
		is equivalent to this:
		```jsonc
		"fullNames": [
			"readme",
			"readme.txt",
			"readme.md"
		]
		```
- `dotFolders` - A list of folder names that should have ![dot folder icon](icons/dotfolder.svg) / ![dot folder open icon](icons/dotfolder_open.svg). The build system does not support custom folder names because I personally don't like folder icons.

and also... **everything IS case INSENSITIVE**
