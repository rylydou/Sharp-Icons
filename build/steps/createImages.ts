import * as fs from 'fs'
import path = require('path')
import { fileIcons } from '../icons/fileIcons'
import { create } from 'xmlbuilder2'

// the maximum width of an image is 882px in vscode
export default function createImages() {
	console.log('--- creating images ---')

	fs.mkdirSync('images/readme', { recursive: true })

	const icons = fs.readdirSync('icons')

	function createIconCollage(outputPath: string, colCount: number, rowCount?: number, padding = 8.0, spacing = 16.0, iconSize = 16.0, reuseIcons = true) {
		rowCount = rowCount || Math.ceil(icons.length / colCount)

		const area = colCount * rowCount
		const diff = area - icons.length
		const originalLength = icons.length

		if (reuseIcons) {
			// fill the the remaining space by reusing icons
			console.log(`  - reusing ${diff} icons`)
			for (let index = 0; index < diff; index++) {
				const icon = icons[Math.floor(originalLength / diff * index)]
				icons.push(icon)
			}
		}

		const imageWidth = (colCount * (iconSize + spacing) - spacing) + (padding * 2)
		const imageHeight = (rowCount * (iconSize + spacing) - spacing) + (padding * 2)

		const imageDoc = create(`<svg width="${imageWidth}" height="${imageHeight}" viewBox="0 0 ${imageWidth} ${imageHeight}" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>`)

		let index = 0
		for (const icon of icons) {
			const col = index % colCount
			const row = Math.floor(index / colCount)

			const x = padding + (col * (iconSize + spacing))
			const y = padding + (row * (iconSize + spacing))

			const iconSvg = fs.readFileSync(path.join('icons', icon)).toString()

			imageDoc.root().ele(iconSvg)
				.att('x', x.toString())
				.att('y', y.toString())

			index++
		}

		let imageSvg = imageDoc.end({ prettyPrint: true })
		imageSvg = imageSvg.replace('<?xml version="1.0"?>\n', '')
		fs.writeFileSync(outputPath, imageSvg)
	}

	console.log('making banner...')
	createIconCollage(path.join('images', 'readme', 'banner.svg'), 27)
	// createIconCollage(path.join('images', 'readme', 'icons.svg'), 9)
}

export function constructRectangle(area: number): number[] {
	let w = Math.floor(Math.sqrt(area))
	while (area % w != 0) {
		w--
	}
	return [area / w, w]
}
