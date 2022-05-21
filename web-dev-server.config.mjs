// import { hmrPlugin, presets } from '@open-wc/dev-server-hmr';
// eslint-disable-next-line node/no-unpublished-import
import { fromRollup } from '@web/dev-server-rollup';
// eslint-disable-next-line node/no-unpublished-import
import rollupCommonjs from '@rollup/plugin-commonjs';
// eslint-disable-next-line node/no-unpublished-import
import rollupHtml from 'rollup-plugin-html';

/** Use Hot Module replacement by adding --hmr to the start command */
const hmr = process.argv.includes('--hmr');

const commonjs = fromRollup(rollupCommonjs);
const html = fromRollup(rollupHtml);

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  open: '/demo/',
  /** Use regular watch mode if HMR is not enabled. */
  watch: !hmr,
  /** Resolve bare module imports */
  // nodeResolve: {
  //   exportConditions: ['browser', 'development'],
  // },
  nodeResolve: true,

  /** Compile JS for older browsers. Requires @web/dev-server-esbuild plugin */
  // esbuildTarget: 'auto'

  /** Set appIndex to enable SPA routing */
  // appIndex: 'demo/index.html',

  plugins: [
    /** Use Hot Module Replacement by uncommenting. Requires @open-wc/dev-server-hmr plugin */
    // hmr && hmrPlugin({ exclude: ['**/*/node_modules/**/*'], presets: [presets.litElement] }),
    // fromRollup(styles)({
    //   mode: 'emit', // emit pure CSS, so that litcss can consume it.
    // }),
    // fromRollup(litcss)({ include: ['./src/**/*.css'] }),
    // html({include: ["**.html"]}),
    commonjs({ include: ["**/node_modules/buffer/**/*"] }),
  ],

  // See documentation for all available options
});
