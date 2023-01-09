export interface IconTheme {
	hidesExplorerArrows: boolean
	file: string
	folder: string
	folderExpanded: string
	rootFolder: string
	rootFolderExpanded: string
	fileExtensions: { [key: string]: string }
	languageIds: { [key: string]: string }
	fileNames: { [key: string]: string }
	folderNames: { [key: string]: string }
	folderNamesExpanded: { [key: string]: string }
	iconDefinitions: { [key: string]: IconDefinition }
}

export interface IconDefinition {
	iconPath: string
}
