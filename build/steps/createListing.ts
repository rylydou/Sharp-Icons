import * as fs from 'fs'
import path = require('path')
import { create } from 'xmlbuilder2'
import sharp from 'sharp'

export default function createListing() {
	function createListing(): sharp.Sharp {
		const icons = fs.readdirSync('icons')

		const colCount = 4
		const colWidth = 200
		const imageWidth = colCount * colWidth
		const imageHeight = Math.floor(icons.length / colCount) * 32 - 16

		const imageDoc = create(`<svg width="${imageWidth}" height="${imageHeight}" viewBox="0 0 ${imageWidth} ${imageHeight}" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>`)
		imageDoc.root().ele('style')
			.txt('text { font: bold 16px sans-serif; fill: white; }')

		let index = 0
		for (let c = 0; c < colCount; c++) {
			const x = c * colWidth
			for (let i = 0; i < icons.length / colCount; i++) {
				const y = i * 32

				const icon = icons[index]
				const iconSvg = fs.readFileSync(path.join('icons', icon)).toString()

				imageDoc.root().ele(iconSvg)
					.att('x', x.toString())
					.att('y', y.toString())

				imageDoc.root().ele('text')
					.att('x', (x + 24).toString())
					.att('y', (y + 14).toString())
					.txt(icon.slice(0, -4).replaceAll('_', ' '))

				index++
				if (index >= icons.length) break
			}
			if (index >= icons.length) break
		}

		let imageSvg = imageDoc.end({ prettyPrint: true })
		imageSvg = imageSvg.replace('<?xml version="1.0"?>\n', '')
		return sharp(Buffer.from(imageSvg))
	}

	createListing()
		.flatten({ background: 'black' })
		.extend(16)
		.png()
		.toBuffer()
		.then(buf => fs.writeFileSync(path.join('images', 'readme', 'listing.png'), buf))
		.catch(reason => console.error(reason))
}
