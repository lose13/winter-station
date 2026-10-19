import {createRequire} from 'node:module';
import {existsSync,readFileSync,writeFileSync} from 'node:fs';
import path from 'node:path';
const localRequire=createRequire(import.meta.url);
let esbuild;
try{esbuild=localRequire('esbuild');}catch{esbuild=localRequire('../hoshino-diorama/node_modules/esbuild');}
const roots=[path.resolve('node_modules'),path.resolve('../hoshino-diorama/node_modules')].filter(existsSync);
await esbuild.build({entryPoints:['src/main.js'],outfile:'app.bundle.js',bundle:true,format:'iife',target:['chrome110','edge110'],minify:true,sourcemap:false,nodePaths:roots,legalComments:'eof'});
console.log('Built offline bundle: app.bundle.js');
let js=readFileSync('app.bundle.js','utf8');
for(const file of ['winter-station-music.mp3','winter-station-ambience.mp3','train-whistle.mp3'])js=js.replaceAll('assets/'+file,()=>`data:audio/mpeg;base64,${readFileSync('assets/'+file).toString('base64')}`);
const html=readFileSync('index.html','utf8').replace('<link rel="stylesheet" href="style.css">',()=>'<style>'+readFileSync('style.css','utf8')+'</style>').replace('<script src="app.bundle.js"></script>',()=>'<script>'+js.replaceAll('</script','<\\/script')+'</script>');
writeFileSync('Winter-Station-离线单文件.html',html);
console.log('Built standalone HTML with embedded Three.js, textures and all three MP3 assets.');
