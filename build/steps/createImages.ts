import * as fs from 'fs'
import path = require('path')
import { fileIcons } from '../icons/fileIcons'
import { create } from 'xmlbuilder2'
import sharp from 'sharp'

// the maximum width of an image is 882px in vscode

declare type CollageOptions = {
	padding: 4
	spacing: 16
	iconSize: 16
	reuseIcons: true
}

export default function createImages() {
	console.log('--- creating images ---')

	fs.mkdirSync('images/readme', { recursive: true })

	const icons = fs.readdirSync('icons')

	function createIconCollage(outputPath: string, colCount: number, rowCount?: number, options?: CollageOptions) {
		options = options || new CollageOptions()

		rowCount = rowCount || Math.ceil(icons.length / colCount)

		const area = colCount * rowCount
		const diff = area - icons.length
		const originalLength = icons.length

		if (options.reuseIcons) {
			// fill the the remaining space by reusing icons
			console.log(`  - reusing ${diff} icons`)
			for (let index = 0; index < diff; index++) {
				const icon = icons[Math.floor(originalLength / diff * index)]
				icons.push(icon)
			}
		}

		const imageWidth = (colCount * (options.iconSize + options.spacing) - options.spacing) + (options.padding * 2)
		const imageHeight = (rowCount * (options.iconSize + options.spacing) - options.spacing) + (options.padding * 2)

		const imageDoc = create(`<svg width="${imageWidth}" height="${imageHeight}" viewBox="0 0 ${imageWidth} ${imageHeight}" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>`)

		let index = 0
		for (const icon of icons) {
			const col = index % colCount
			const row = Math.floor(index / colCount)

			const x = options.padding + (col * (options.iconSize + options.spacing))
			const y = options.padding + (row * (options.iconSize + options.spacing))

			const iconSvg = fs.readFileSync(path.join('icons', icon)).toString()

			imageDoc.root().ele(iconSvg)
				.att('x', x.toString())
				.att('y', y.toString())

			index++
		}

		let imageSvg = imageDoc.end({ prettyPrint: true })
		imageSvg = imageSvg.replace('<?xml version="1.0"?>\n', '')

		sharp(Buffer.from(imageSvg))
			.resize(imageWidth * 2)
			.png()
			.toBuffer()
			.then(buf => fs.writeFileSync(outputPath, buf))
			.catch(reason => console.error(reason))
	}

	console.log('making banner...')
	createIconCollage(path.join('images', 'readme', 'banner.png'), 14, undefined, { padding: 6 })
	// createIconCollage(path.join('images', 'readme', 'icons.svg'), 9)
}

export function constructRectangle(area: number): number[] {
	let w = Math.floor(Math.sqrt(area))
	while (area % w != 0) {
		w--
	}
	return [area / w, w]
}
