import {createRequire} from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
const require=createRequire(import.meta.url);let esbuild;try{esbuild=require('esbuild');}catch{esbuild=require('../../hoshino-diorama/node_modules/esbuild');}
await esbuild.build({entryPoints:['tools/verify-core.js'],outfile:'tools/verify-core.cjs',bundle:true,platform:'node',format:'cjs',nodePaths:[path.resolve('node_modules'),path.resolve('../hoshino-diorama/node_modules')],logLevel:'error'});
require('./verify-core.cjs');
fs.unlinkSync('tools/verify-core.cjs');
