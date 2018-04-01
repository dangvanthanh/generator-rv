import config from './rollup.config.dev'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'

config.output = {
  name: 'VueComponentName',
  file: 'dist/index.min.js',
  format: 'umd',
  sourcemap: false
}

config.plugins.push(uglify({}, minify))

export default config
