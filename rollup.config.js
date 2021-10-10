import babel from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    input: pkg.source,
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: 
          pkg.module, 
          format: 'es'
       }
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      postcss(),
      babel({ 
        extensions: ['.ts'],
        exclude: 'node_modules/**' 
      }),
      terser(),
      del(),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};
