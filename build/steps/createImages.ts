import * as fs from 'fs'
import path = require('path')
import { fileIcons } from '../icons/fileIcons'
import { create } from 'xmlbuilder2'
import sharp from 'sharp'

// the maximum width of an image is 882px in vscode

type CollageOptions = {
	iconSize: number
	padding: number
	spacing: number
	reuseIcons: boolean
}

export default function createImages() {
	console.log('--- creating images ---')

	fs.mkdirSync('images/readme', { recursive: true })

	const icons = fs.readdirSync('icons')

	function createIconCollage(colCount: number, options: Partial<CollageOptions> = {}): sharp.Sharp {
		const defaults: CollageOptions = {
			iconSize: 16,
			padding: 4,
			spacing: 16,
			reuseIcons: false,
		}

		const opts = Object.assign(defaults, options)

		const rowCount = Math.ceil(icons.length / colCount)

		const area = colCount * rowCount
		const diff = area - icons.length
		const originalLength = icons.length

		if (opts.reuseIcons) {
			// fill the the remaining space by reusing icons
			console.log(`  - reusing ${diff} icons`)
			for (let index = 0; index < diff; index++) {
				const icon = icons[Math.floor(originalLength / diff * index)]
				icons.push(icon)
			}
		}

		const imageWidth = (colCount * (opts.iconSize + opts.spacing) - opts.spacing) + (opts.padding * 2)
		const imageHeight = (rowCount * (opts.iconSize + opts.spacing) - opts.spacing) + (opts.padding * 2)

		const imageDoc = create(`<svg width="${imageWidth}" height="${imageHeight}" viewBox="0 0 ${imageWidth} ${imageHeight}" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>`)

		let index = 0
		for (const icon of icons) {
			const col = index % colCount
			const row = Math.floor(index / colCount)

			const x = opts.padding + (col * (opts.iconSize + opts.spacing))
			const y = opts.padding + (row * (opts.iconSize + opts.spacing))

			const iconSvg = fs.readFileSync(path.join('icons', icon)).toString()

			imageDoc.root().ele(iconSvg)
				.att('x', x.toString())
				.att('y', y.toString())

			index++
		}

		let imageSvg = imageDoc.end({ prettyPrint: true })
		imageSvg = imageSvg.replace('<?xml version="1.0"?>\n', '')

		return sharp(Buffer.from(imageSvg))
	}

	console.log('making banner...')
	createIconCollage(14, { padding: 9, reuseIcons: true })
		.resize((14 * 32 - 16 + 9) * 2, null, { fit: 'inside' })
		.composite([
			{
				input: { create: { background: 'white', width: 600, height: 165, channels: 3 } },
				blend: 'dest-out',
			},
			{
				input: Buffer.from(fs.readFileSync(path.join('images', 'logo.png'))),
			}
		])
		.png()
		.toBuffer()
		.then(buf => fs.writeFileSync(path.join('images', 'readme', 'banner.png'), buf))
		.catch(reason => console.error(reason))
	// createIconCollage(path.join('images', 'readme', 'icons.svg'), 9)
}

export function constructRectangle(area: number): number[] {
	let w = Math.floor(Math.sqrt(area))
	while (area % w != 0) {
		w--
	}
	return [area / w, w]
}
