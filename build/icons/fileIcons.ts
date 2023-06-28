import { FileIcon } from '../models/fileIcon'

interface FileIconAssignments {
	[key: string]: FileIcon
}

export const fileIcons: FileIconAssignments = {
	plaintext: {
		exts: [
			'txt',
		],
		langs: [
			'plaintext',
		]
	},
	richtext: {
		exts: [
			'rtf',
			'pdf',
			'docx',
			'doc',
			'gdoc',
			'odt',
			'sxw',
		]
	},
	log: {
		exts: [
			'log',
		],
		langs: [
			'log',
		]
	},
	image: {
		exts: [
			'png',
			'jpg',
			'jpeg',
			'bmp',
			'ico',
			'gif',
			'psd',
			'xcf',
			'webp',
		]
	},
	svg: {
		exts: [
			'svg',
		]
	},
	audio: {
		exts: [
			'aiff',
			'alac',
			'flac',
			'mp3',
			'ogg',
			'wav',
			'weba',
		]
	},
	video: {
		exts: [
			'webm',
			'mkv',
			'avi',
			'mov',
			'mp4',
		]
	},
	model: {
		exts: [
			'blend',
			'block',
			'c4d',
			'stl',
			'obj',
			'fbx',
			'3d-objects',
			'x3d-object',
		]
	},
	font: {
		exts: [
			'ttf',
			'ttc',
			'otf',
			'woff',
			'woff2',
		]
	},
	archive: {
		exts: [
			'7z',
			'zip',
			'rar',
			'001',
			'cab',
			'iso',
			'xz',
			'txz',
			'lzma',
			'tar',
			'cpio',
			'bz2',
			'barchive2',
			'tvz2',
			'tvz',
			'gz',
			'garchive',
			'tgz',
			'tpz',
			'z',
			'taz',
			'lzh',
			'lza',
			'rpm',
			'deb',
			'arj',
			'vhd',
			'wim',
			'swm',
			'fat',
			'ntfs',
			'dmg',
			'hfs',
			'xar',
			'squashfs',
			'vsix',
		]
	},
	object: {
		exts: [
			'dll',
			'so',
			'o',
			'elf',
			'dylib',
			'bundle',
			'jar',
			'class',
		]
	},
	bin: {
		exts: [
			'bin',
			'dat',
		]
	},
	app: {
		exts: [
			'exe',
			'app',
		]
	},
	script: {
		exts: [
			'bat',
			'ps1',
			'bash',
			'sh',
			'cmd',
			'zsh',
			'fish',
			'gradle',
		],
		langs: [
			'bat',
			'powershell',
			'shellscript',
		],
		names: [
			'gradlew',
		]
	},
	config: {
		exts: [
			'ini',
		],
		langs: [
			'ini',
			'properties',
		],
		names: [
			'.editorconfig',
			'.vscodeignore',
			'.prettierignore',
			'.eslintignore',
		]
	},
	readme: {
		nameCombos: [
			{
				exts: [
					'',
					'txt',
					'md',
				],
				names: [
					'readme',
				]
			}
		]
	},
	info: {
		nameCombos: [
			{
				exts: [
					'',
					'txt',
					'md',
				],
				names: [
					'changelog',
					'history',
					'news',
					'releases',
					'contributing',
					'support',
					'contributors',
					'authors',
					'acknowledgments',
					'code_of_conduct',
					'eula',
					'issue_template',
					'pull-request-template',
					'codeowners',
					'install',
					'building',
					'governance',
					'security',
				]
			}
		]
	},
	license: {
		nameCombos: [
			{
				exts: [
					'',
					'txt',
					'md',
				],
				names: [
					'license',
					'copying',
				]
			}
		]
	},
	todo: {
		nameCombos: [
			{
				exts: [
					'',
					'txt',
					'md',
				],
				names: [
					'todo',
					'tasks',
					'plans',
				]
			}
		]
	},
	git: {
		names: [
			'.gitignore',
			'.gitattributes',
			'.gitmodules',
		],
		langs: [
			'gitignore',
			'gitattributes',
			'gitmodules',
			'git-commit',
			'git-rebase',
			'scminput',
		]
	},
	diff: {
		exts: [
			'diff',
		],
		langs: [
			'diff',
		]
	},
	docker: {
		exts: [
			'dockerfile',
		],
		langs: [
			'dockerfile',
		],
		names: [
			'Dockerfile',
		]
	},
	json: {
		exts: [
			'json',
			'jsonc',
		],
		langs: [
			'json',
			'jsonc',
		]
	},
	xml: {
		exts: [
			'xml',
		],
		langs: [
			'xml',
		],
		names: [
			'app.manifest',
		]
	},
	yaml: {
		exts: [
			'yaml',
			'yml',
		],
		langs: [
			'yaml',
		],
		names: [
			'yarn.lock',
			'.yarnrc',
		]
	},
	markdown: {
		exts: [
			'md',
		],
		langs: [
			'markdown',
		]
	},
	mdx: {
		exts: [
			'mdx',
		],
		langs: [
			'mdx',
		]
	},
	csv: {
		exts: [
			'csv',
		],
		langs: [
			'csv',
		]
	},
	toml: {
		exts: [
			'toml',
		],
		langs: [
			'toml',
		],
		names: [
			'Cargo.lock',
		]
	},
	meml: {
		exts: [
			'meml',
		],
		langs: [
			'meml',
		]
	},
	hxml: {
		exts: [
			'hxml',
		],
		langs: [
			'hxml',
		]
	},
	html: {
		exts: [
			'html',
		],
		langs: [
			'html',
		]
	},
	css: {
		exts: [
			'css',
		],
		langs: [
			'css',
		]
	},
	scss: {
		exts: [
			'scss',
			'sass',
		],
		langs: [
			'scss',
		]
	},
	less: {
		exts: [
			'less',
		],
		langs: [
			'less',
		]
	},
	javascript: {
		exts: [
			'js',
			'cjs',
		],
		langs: [
			'javascript',
		]
	},
	typescript: {
		exts: [
			'ts',
		],
		langs: [
			'typescript',
		]
	},
	webassembly: {
		exts: [
			'wasm',
		],
		langs: [
			'webassembly',
		]
	},
	database: {
		exts: [
			'sql',
			'http',
			'rest',
			'prisma',
			'graphql',
			'gql',
		],
		langs: [
			'sql',
			'http',
			'prisma',
			'graphql',
		]
	},
	assembly: {
		exts: [
			'asm',
			's',
		]
	},
	c: {
		exts: [
			'c',
		],
		langs: [
			'c',
		]
	},
	h: {
		exts: [
			'h',
		]
	},
	cpp: {
		exts: [
			'cpp',
		],
		langs: [
			'cpp',
		]
	},
	hpp: {
		exts: [
			'hpp',
		]
	},
	csharp: {
		exts: [
			'cs',
		],
		langs: [
			'csharp',
		]
	},
	fsharp: {
		exts: [
			'fs',
			'fsi',
			'fsx',
			'fsscript',
		],
		langs: [
			'fsharp',
		]
	},
	debug: {
		exts: [
			'pdb',
		]
	},
	python: {
		exts: [
			'py',
		],
		langs: [
			'python',
		]
	},
	java: {
		exts: [
			'java',
		],
		langs: [
			'java',
		]
	},
	scala: {
		exts: [
			'scala',
			'sc',
			'sbt',
		],
		langs: [
			'scala',
		]
	},
	kotlin: {
		exts: [
			'kotlin',
			'kt',
		],
		langs: [
			'kotlin',
		]
	},
	lua: {
		exts: [
			'lua',
		],
		langs: [
			'lua',
		]
	},
	rust: {
		exts: [
			'rs',
		],
		langs: [
			'rust',
		]
	},
	r: {
		exts: [
			'r',
		],
		langs: [
			'r',
		]
	},
	ruby: {
		exts: [
			'rb',
		],
		langs: [
			'ruby',
		]
	},
	go: {
		exts: [
			'go',
		],
		langs: [
			'go',
		]
	},
	perl: {
		exts: [
			'pm',
			'pl',
		],
		langs: [
			'perl',
		]
	},
	haxe: {
		exts: [
			'hx',
		],
		langs: [
			'haxe',
		]
	},
	solidity: {
		exts: [
			'sol',
		],
		langs: [
			'solidity',
		]
	},
	elixir: {
		exts: [
			'ex',
			'exs',
		],
		langs: [
			'elixir',
		]
	},
	haskell: {
		exts: [
			'hs',
			'lhs',
		],
		langs: [
			'haskell',
		]
	},
	julia: {
		exts: [
			'jl',
		],
		langs: [
			'julia',
			'juliamarkdown',
		]
	},
	jsx: {
		exts: [
			'jsx',
		],
		langs: [
			'javascriptreact',
		]
	},
	tsx: {
		exts: [
			'tsx',
		],
		langs: [
			'typescriptreact',
		]
	},
	dart: {
		exts: [
			'dart',
		],
		langs: [
			'dart',
		]
	},
	vue: {
		exts: [
			'vue',
		],
		langs: [
			'vue',
		]
	},
	nuxt: {
		exts: [
			'nuxt',
		],
		langs: [
			'nuxt',
		]
	},
	svelte: {
		exts: [
			'svelte',
		],
		langs: [
			'svelte',
		]
	},
	xhtml: {
		exts: [
			'xhtml',
		]
	},
	cshtml: {
		exts: [
			'cshtml',
		],
		langs: [
			'razor',
			'aspnetcorerazor',
		]
	},
	php: {
		exts: [
			'php',
		],
		langs: [
			'php',
		]
	},
	shader: {
		exts: [
			'glsl',
			'essl',
			'hlsl',
			'fx',
			'tesc',
			'tese',
			'cg',
			'sf',
		],
		langs: [
			'glsl',
			'cg',
			'hlsl',
			'shaderlab',
		]
	},
	shader_vertex: {
		exts: [
			'vert',
			'vs',
			'glslv',
		]
	},
	shader_fragment: {
		exts: [
			'frag',
			'glslf',
		]
	},
	shader_geometry: {
		exts: [
			'geom',
			'glslg',
			'gs',
		]
	},
	shader_compute: {
		exts: [
			'comp',
		]
	},
	icon: {
		nameCombos: [
			{
				exts: [
					'ico',
					'png',
					'svg',
				],
				names: [
					'favicon',
				]
			}
		]
	},
	aseprite: {
		exts: [
			'ase',
			'aseprite',
		]
	},
	robot: {
		names: [
			'robots.txt',
		]
	}
}
