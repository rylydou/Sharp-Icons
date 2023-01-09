import * as fs from 'fs'

import createThemes from './steps/createThemes'
import updateManifest from './steps/updateManifest'
import createBanner from './steps/createBanner'
import createListing from './steps/createListing'

createThemes()
updateManifest()
fs.mkdirSync('images/readme', { recursive: true })
createBanner()
createListing()

console.log('done!')
