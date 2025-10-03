var Te=Object.defineProperty;var Me=(e,t,n)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Re=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var se=(e,t,n)=>Me(e,typeof t!="symbol"?t+"":t,n);var nt=Re((at,ee)=>{var E=(e=>(e.PinGetValue="pin get value",e.PinGetMode="pin get mode",e.PinGetPull="pin get pull",e.AdcReadU16="adc read_u16",e.I2CScan="i2c scan",e.I2CReadFromMem="i2c readfrom_mem",e.Input="input",e))(E||{});const oe=2;var y=(e=>(e.I2CWriteToMem="i2c writefrom_mem",e.PinSetValue="pin set value",e.PinSetMode="pin set mode",e.PinSetPull="pin set pull",e.PwmFreq="pwm freq",e.PwmDutyU16="pwm duty_u16",e.Output="output",e.Sleep="sleep",e.DisplayText="display text",e.DisplayClear="display clear",e.NeoPixelWrite="neopixel write",e.RawOutput="raw output",e.KeyboardInterrupt="keyboard interrupt",e.Error="error",e))(y||{}),z=(e=>(e.Finished="finished",e.Initialized="initialized",e.Timeout="timeout",e))(z||{});Object.values({...E,...y,...z});new Set(Object.values(E));new Set(Object.values(z));new Set(Object.values(y));var j=(e=>(e[e.NONE=-1]="NONE",e[e.IN=0]="IN",e[e.OUT=1]="OUT",e[e.ANALOG=5]="ANALOG",e[e.PWM=6]="PWM",e))(j||{}),q=(e=>(e[e.NONE=-1]="NONE",e[e.UP=0]="UP",e[e.DOWN=1]="DOWN",e))(q||{}),je=Object.defineProperty,m=(e,t)=>je(e,"name",{value:t,configurable:!0}),fe=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});function ce(e){return!isNaN(parseFloat(e))&&isFinite(e)}m(ce,"_isNumber");function O(e){return e.charAt(0).toUpperCase()+e.substring(1)}m(O,"_capitalize");function Q(e){return function(){return this[e]}}m(Q,"_getter");var T=["isConstructor","isEval","isNative","isToplevel"],M=["columnNumber","lineNumber"],R=["fileName","functionName","source"],We=["args"],Be=["evalOrigin"],H=T.concat(M,R,We,Be);function N(e){if(e)for(var t=0;t<H.length;t++)e[H[t]]!==void 0&&this["set"+O(H[t])](e[H[t]])}m(N,"StackFrame");N.prototype={getArgs:function(){return this.args},setArgs:function(e){if(Object.prototype.toString.call(e)!=="[object Array]")throw new TypeError("Args must be an Array");this.args=e},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(e){if(e instanceof N)this.evalOrigin=e;else if(e instanceof Object)this.evalOrigin=new N(e);else throw new TypeError("Eval Origin must be an Object or StackFrame")},toString:function(){var e=this.getFileName()||"",t=this.getLineNumber()||"",n=this.getColumnNumber()||"",o=this.getFunctionName()||"";return this.getIsEval()?e?"[eval] ("+e+":"+t+":"+n+")":"[eval]:"+t+":"+n:o?o+" ("+e+":"+t+":"+n+")":e+":"+t+":"+n}};N.fromString=m(function(e){var t=e.indexOf("("),n=e.lastIndexOf(")"),o=e.substring(0,t),r=e.substring(t+1,n).split(","),i=e.substring(n+1);if(i.indexOf("@")===0)var s=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i,""),a=s[1],c=s[2],_=s[3];return new N({functionName:o,args:r||void 0,fileName:a,lineNumber:c||void 0,columnNumber:_||void 0})},"StackFrame$$fromString");for(I=0;I<T.length;I++)N.prototype["get"+O(T[I])]=Q(T[I]),N.prototype["set"+O(T[I])]=function(e){return function(t){this[e]=!!t}}(T[I]);var I;for(L=0;L<M.length;L++)N.prototype["get"+O(M[L])]=Q(M[L]),N.prototype["set"+O(M[L])]=function(e){return function(t){if(!ce(t))throw new TypeError(e+" must be a Number");this[e]=Number(t)}}(M[L]);var L;for(k=0;k<R.length;k++)N.prototype["get"+O(R[k])]=Q(R[k]),N.prototype["set"+O(R[k])]=function(e){return function(t){this[e]=String(t)}}(R[k]);var k,K=N;function ue(){var e=/^\s*at .*(\S+:\d+|\(native\))/m,t=/^(eval@)?(\[native code])?$/;return{parse:m(function(n){if(n.stack&&n.stack.match(e))return this.parseV8OrIE(n);if(n.stack)return this.parseFFOrSafari(n);throw new Error("Cannot parse given Error object")},"ErrorStackParser$$parse"),extractLocation:m(function(n){if(n.indexOf(":")===-1)return[n];var o=/(.+?)(?::(\d+))?(?::(\d+))?$/,r=o.exec(n.replace(/[()]/g,""));return[r[1],r[2]||void 0,r[3]||void 0]},"ErrorStackParser$$extractLocation"),parseV8OrIE:m(function(n){var o=n.stack.split(`
`).filter(function(r){return!!r.match(e)},this);return o.map(function(r){r.indexOf("(eval ")>-1&&(r=r.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));var i=r.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),s=i.match(/ (\(.+\)$)/);i=s?i.replace(s[0],""):i;var a=this.extractLocation(s?s[1]:i),c=s&&i||void 0,_=["eval","<anonymous>"].indexOf(a[0])>-1?void 0:a[0];return new K({functionName:c,fileName:_,lineNumber:a[1],columnNumber:a[2],source:r})},this)},"ErrorStackParser$$parseV8OrIE"),parseFFOrSafari:m(function(n){var o=n.stack.split(`
`).filter(function(r){return!r.match(t)},this);return o.map(function(r){if(r.indexOf(" > eval")>-1&&(r=r.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),r.indexOf("@")===-1&&r.indexOf(":")===-1)return new K({functionName:r});var i=/((.*".+"[^@]*)?[^@]*)(?:@)/,s=r.match(i),a=s&&s[1]?s[1]:void 0,c=this.extractLocation(r.replace(i,""));return new K({functionName:a,fileName:c[0],lineNumber:c[1],columnNumber:c[2],source:r})},this)},"ErrorStackParser$$parseFFOrSafari")}}m(ue,"ErrorStackParser");var $e=new ue,Ve=$e,A=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&!process.browser,de=A&&typeof ee<"u"&&typeof ee.exports<"u"&&typeof fe<"u"&&typeof __dirname<"u",ze=A&&!de,Ce=typeof Deno<"u",me=!A&&!Ce,He=me&&typeof window=="object"&&typeof document=="object"&&typeof document.createElement=="function"&&"sessionStorage"in window&&typeof importScripts!="function",Ge=me&&typeof importScripts=="function"&&typeof self=="object";typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome")==-1&&navigator.userAgent.indexOf("Safari")>-1;var pe,X,ye,ae,te;async function re(){if(!A||(pe=(await import("./__vite-browser-external-9wXp6ZBx.js")).default,ae=await import("./__vite-browser-external-9wXp6ZBx.js"),te=await import("./__vite-browser-external-9wXp6ZBx.js"),ye=(await import("./__vite-browser-external-9wXp6ZBx.js")).default,X=await import("./__vite-browser-external-9wXp6ZBx.js"),ie=X.sep,typeof fe<"u"))return;let e=ae,t=await import("./__vite-browser-external-9wXp6ZBx.js"),n=await import("./__vite-browser-external-9wXp6ZBx.js"),o=await import("./__vite-browser-external-9wXp6ZBx.js"),r={fs:e,crypto:t,ws:n,child_process:o};globalThis.require=function(i){return r[i]}}m(re,"initNodeModules");function _e(e,t){return X.resolve(t||".",e)}m(_e,"node_resolvePath");function he(e,t){return t===void 0&&(t=location),new URL(e,t).toString()}m(he,"browser_resolvePath");var Z;A?Z=_e:Z=he;var ie;A||(ie="/");function we(e,t){return e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?{response:fetch(e)}:{binary:te.readFile(e).then(n=>new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}}m(we,"node_getBinaryResponse");function be(e,t){let n=new URL(e,location);return{response:fetch(n,t?{integrity:t}:{})}}m(be,"browser_getBinaryResponse");var J;A?J=we:J=be;async function ge(e,t){let{response:n,binary:o}=J(e,t);if(o)return o;let r=await n;if(!r.ok)throw new Error(`Failed to load '${e}': request failed.`);return new Uint8Array(await r.arrayBuffer())}m(ge,"loadBinaryFile");var G;if(He)G=m(async e=>await import(e),"loadScript");else if(Ge)G=m(async e=>{try{globalThis.importScripts(e)}catch(t){if(t instanceof TypeError)await import(e);else throw t}},"loadScript");else if(A)G=ve;else throw new Error("Cannot determine runtime environment");async function ve(e){e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?ye.runInThisContext(await(await fetch(e)).text()):await import(pe.pathToFileURL(e).href)}m(ve,"nodeLoadScript");async function Pe(e){if(A){await re();let t=await te.readFile(e,{encoding:"utf8"});return JSON.parse(t)}else return await(await fetch(e)).json()}m(Pe,"loadLockFile");async function Ne(){if(de)return __dirname;let e;try{throw new Error}catch(o){e=o}let t=Ve.parse(e)[0].fileName;if(A&&!t.startsWith("file://")&&(t=`file://${t}`),ze){let o=await import("./__vite-browser-external-9wXp6ZBx.js");return(await import("./__vite-browser-external-9wXp6ZBx.js")).fileURLToPath(o.dirname(t))}let n=t.lastIndexOf(ie);if(n===-1)throw new Error("Could not extract indexURL path from pyodide module location");return t.slice(0,n)}m(Ne,"calculateDirname");function xe(e){let t=e.FS,n=e.FS.filesystems.MEMFS,o=e.PATH,r={DIR_MODE:16895,FILE_MODE:33279,mount:function(i){if(!i.opts.fileSystemHandle)throw new Error("opts.fileSystemHandle is required");return n.mount.apply(null,arguments)},syncfs:async(i,s,a)=>{try{let c=r.getLocalSet(i),_=await r.getRemoteSet(i),w=s?_:c,P=s?c:_;await r.reconcile(i,w,P),a(null)}catch(c){a(c)}},getLocalSet:i=>{let s=Object.create(null);function a(w){return w!=="."&&w!==".."}m(a,"isRealDir");function c(w){return P=>o.join2(w,P)}m(c,"toAbsolute");let _=t.readdir(i.mountpoint).filter(a).map(c(i.mountpoint));for(;_.length;){let w=_.pop(),P=t.stat(w);t.isDir(P.mode)&&_.push.apply(_,t.readdir(w).filter(a).map(c(w))),s[w]={timestamp:P.mtime,mode:P.mode}}return{type:"local",entries:s}},getRemoteSet:async i=>{let s=Object.create(null),a=await Je(i.opts.fileSystemHandle);for(let[c,_]of a)c!=="."&&(s[o.join2(i.mountpoint,c)]={timestamp:_.kind==="file"?(await _.getFile()).lastModifiedDate:new Date,mode:_.kind==="file"?r.FILE_MODE:r.DIR_MODE});return{type:"remote",entries:s,handles:a}},loadLocalEntry:i=>{let s=t.lookupPath(i).node,a=t.stat(i);if(t.isDir(a.mode))return{timestamp:a.mtime,mode:a.mode};if(t.isFile(a.mode))return s.contents=n.getFileDataAsTypedArray(s),{timestamp:a.mtime,mode:a.mode,contents:s.contents};throw new Error("node type not supported")},storeLocalEntry:(i,s)=>{if(t.isDir(s.mode))t.mkdirTree(i,s.mode);else if(t.isFile(s.mode))t.writeFile(i,s.contents,{canOwn:!0});else throw new Error("node type not supported");t.chmod(i,s.mode),t.utime(i,s.timestamp,s.timestamp)},removeLocalEntry:i=>{var s=t.stat(i);t.isDir(s.mode)?t.rmdir(i):t.isFile(s.mode)&&t.unlink(i)},loadRemoteEntry:async i=>{if(i.kind==="file"){let s=await i.getFile();return{contents:new Uint8Array(await s.arrayBuffer()),mode:r.FILE_MODE,timestamp:s.lastModifiedDate}}else{if(i.kind==="directory")return{mode:r.DIR_MODE,timestamp:new Date};throw new Error("unknown kind: "+i.kind)}},storeRemoteEntry:async(i,s,a)=>{let c=i.get(o.dirname(s)),_=t.isFile(a.mode)?await c.getFileHandle(o.basename(s),{create:!0}):await c.getDirectoryHandle(o.basename(s),{create:!0});if(_.kind==="file"){let w=await _.createWritable();await w.write(a.contents),await w.close()}i.set(s,_)},removeRemoteEntry:async(i,s)=>{await i.get(o.dirname(s)).removeEntry(o.basename(s)),i.delete(s)},reconcile:async(i,s,a)=>{let c=0,_=[];Object.keys(s.entries).forEach(function(g){let x=s.entries[g],F=a.entries[g];(!F||t.isFile(x.mode)&&x.timestamp.getTime()>F.timestamp.getTime())&&(_.push(g),c++)}),_.sort();let w=[];if(Object.keys(a.entries).forEach(function(g){s.entries[g]||(w.push(g),c++)}),w.sort().reverse(),!c)return;let P=s.type==="remote"?s.handles:a.handles;for(let g of _){let x=o.normalize(g.replace(i.mountpoint,"/")).substring(1);if(a.type==="local"){let F=P.get(x),ne=await r.loadRemoteEntry(F);r.storeLocalEntry(g,ne)}else{let F=r.loadLocalEntry(g);await r.storeRemoteEntry(P,x,F)}}for(let g of w)if(a.type==="local")r.removeLocalEntry(g);else{let x=o.normalize(g.replace(i.mountpoint,"/")).substring(1);await r.removeRemoteEntry(P,x)}}};e.FS.filesystems.NATIVEFS_ASYNC=r}m(xe,"initializeNativeFS");var Je=m(async e=>{let t=[];async function n(r){for await(let i of r.values())t.push(i),i.kind==="directory"&&await n(i)}m(n,"collect"),await n(e);let o=new Map;o.set(".",e);for(let r of t){let i=(await e.resolve(r)).join("/");o.set(i,r)}return o},"getFsHandles");function Se(e){let t={noImageDecoding:!0,noAudioDecoding:!0,noWasmDecoding:!1,preRun:Ie(e),quit(n,o){throw t.exited={status:n,toThrow:o},o},print:e.stdout,printErr:e.stderr,arguments:e.args,API:{config:e},locateFile:n=>e.indexURL+n,instantiateWasm:Le(e.indexURL)};return t}m(Se,"createSettings");function Ee(e){return function(t){let n="/";try{t.FS.mkdirTree(e)}catch(o){console.error(`Error occurred while making a home directory '${e}':`),console.error(o),console.error(`Using '${n}' for a home directory instead`),e=n}t.FS.chdir(e)}}m(Ee,"createHomeDirectory");function Ae(e){return function(t){Object.assign(t.ENV,e)}}m(Ae,"setEnvironment");function Oe(e){return t=>{for(let n of e)t.FS.mkdirTree(n),t.FS.mount(t.FS.filesystems.NODEFS,{root:n},n)}}m(Oe,"mountLocalDirectories");function Fe(e){let t=ge(e);return n=>{let o=n._py_version_major(),r=n._py_version_minor();n.FS.mkdirTree("/lib"),n.FS.mkdirTree(`/lib/python${o}.${r}/site-packages`),n.addRunDependency("install-stdlib"),t.then(i=>{n.FS.writeFile(`/lib/python${o}${r}.zip`,i)}).catch(i=>{console.error("Error occurred while installing the standard library:"),console.error(i)}).finally(()=>{n.removeRunDependency("install-stdlib")})}}m(Fe,"installStdlib");function Ie(e){let t;return e.stdLibURL!=null?t=e.stdLibURL:t=e.indexURL+"python_stdlib.zip",[Fe(t),Ee(e.env.HOME),Ae(e.env),Oe(e._node_mounts),xe]}m(Ie,"getFileSystemInitializationFuncs");function Le(e){if(typeof WasmOffsetConverter<"u")return;let{binary:t,response:n}=J(e+"pyodide.asm.wasm");return function(o,r){return async function(){try{let i;n?i=await WebAssembly.instantiateStreaming(n,o):i=await WebAssembly.instantiate(await t,o);let{instance:s,module:a}=i;r(s,a)}catch(i){console.warn("wasm instantiation failed!"),console.warn(i)}}(),{}}}m(Le,"getInstantiateWasmFunc");var le="0.27.2";async function ke(e={}){var t,n;await re();let o=e.indexURL||await Ne();o=Z(o),o.endsWith("/")||(o+="/"),e.indexURL=o;let r={fullStdLib:!1,jsglobals:globalThis,stdin:globalThis.prompt?globalThis.prompt:void 0,lockFileURL:o+"pyodide-lock.json",args:[],_node_mounts:[],env:{},packageCacheDir:o,packages:[],enableRunUntilComplete:!1,checkAPIVersion:!0,BUILD_ID:"f88dc4abb40ec8e780c94a5f70bcef45ec9eb3c1aee1c99da527febfef1c6f3f"},i=Object.assign(r,e);(t=i.env).HOME??(t.HOME="/home/pyodide"),(n=i.env).PYTHONINSPECT??(n.PYTHONINSPECT="1");let s=Se(i),a=s.API;if(a.lockFilePromise=Pe(i.lockFileURL),typeof _createPyodideModule!="function"){let g=`${i.indexURL}pyodide.asm.js`;await G(g)}let c;if(e._loadSnapshot){let g=await e._loadSnapshot;ArrayBuffer.isView(g)?c=g:c=new Uint8Array(g),s.noInitialRun=!0,s.INITIAL_MEMORY=c.length}let _=await _createPyodideModule(s);if(s.exited)throw s.exited.toThrow;if(e.pyproxyToStringRepr&&a.setPyProxyToStringMethod(!0),a.version!==le&&i.checkAPIVersion)throw new Error(`Pyodide version does not match: '${le}' <==> '${a.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);_.locateFile=g=>{throw new Error("Didn't expect to load any more file_packager files!")};let w;c&&(w=a.restoreSnapshot(c));let P=a.finalizeBootstrap(w,e._snapshotDeserializer);return a.sys.path.insert(0,a.config.env.HOME),P.version.includes("dev")||a.setCdnUrl(`https://cdn.jsdelivr.net/pyodide/v${P.version}/full/`),a._pyodide.set_excepthook(),await a.packageIndexReady,a.initializeStreams(i.stdin,i.stdout,i.stderr),P}m(ke,"loadPyodide");const Qe=new SharedArrayBuffer(16),C=new Int32Array(Qe),Ke=new SharedArrayBuffer(2),$=new Uint8Array(Ke);function v(e){Atomics.store(C,0,0);const t=Ue.currentframe().f_lineno;postMessage({content:e,line:t}),Atomics.wait(C,0,0)}function S(e){Atomics.store(C,0,0),postMessage({content:e,line:-1}),Atomics.wait(C,0,0)}function D(e){postMessage({content:e,line:-1})}function Ye(e,t){return e+t}function Xe(e,t){return e-t}class qe{constructor(t,n,o){se(this,"pin");this.pin=t,v({command:y.PinSetMode,request:{pin:this.pin,mode:n}}),v({command:y.PinSetPull,request:{pin:this.pin,pull:o}})}on(){v({command:y.PinSetValue,request:{pin:this.pin,value:1}})}off(){v({command:y.PinSetValue,request:{pin:this.pin,value:0}})}toggle(){const t=this.value();v({command:y.PinSetValue,request:{pin:this.pin,value:1-t}})}value(t=null){if(t===1)this.on();else if(t===0)this.off();else{const n=new Int8Array(new SharedArrayBuffer(4));return v({command:E.PinGetValue,request:{pin:this.pin},result:n}),Atomics.load(n,0)}}}function Ze(e){return e instanceof qe?e.pin:e}const W=(e,t=j.IN,n=q.NONE)=>new qe(e,t,n);W.IN=j.IN;W.OUT=j.OUT;W.PULL_UP=q.UP;W.PULL_DOWN=q.DOWN;const et={const:e=>e},tt={print:e=>{v({command:y.DisplayText,request:{text:e,x:0,y:16}})},clear:()=>{v({command:y.DisplayClear,request:{}})},LED:e=>W(e,W.OUT)},rt={NeoPixel:function(e,t,n=3,o=1){const r={};r.pin=Ze(e),r.n=t,r.bpp=n,r.timing=o,r.pixels=Array(t).fill(null).map(()=>Array(n).fill(0)),r.fill=function(i){let s;Array.isArray(i)?s=i.slice(0,3).map(Number):i&&typeof i=="object"&&"length"in i?s=[Number(i[0]||0),Number(i[1]||0),Number(i[2]||0)]:s=[0,0,0];for(let a=0;a<r.n;a++)r.pixels[a]=[...s]},r.write=function(){const i=r.pixels.map((s,a)=>Array.isArray(s)?s.slice(0,r.bpp).map(Number):Array(r.bpp).fill(0));S({command:y.NeoPixelWrite,request:{pin:r.pin,pixels:i}})},r.show=r.write,r.__len__=function(){return r.n},r.set_pixel=function(i,s){if(i>=0&&i<r.n){let a;Array.isArray(s)?a=s:s&&typeof s=="object"&&"length"in s&&typeof s.length=="number"?a=Array.from(s):a=[0,0,0];const c=a.slice(0,r.bpp).map(Number);r.pixels[i]=c}},r.get_pixel=function(i){return i>=0&&i<r.n?r.pixels[i].slice():Array(r.bpp).fill(0)},r.set=r.set_pixel,r.get=r.get_pixel;try{r.__setitem__=r.set_pixel,r.__getitem__=r.get_pixel}catch{}return r}};async function it(){return await fetch("https://raw.githubusercontent.com/rt-zone/pibody_libs/dev/manifest.json").then(t=>t.json()).catch(()=>{})}function V(e,t,n){const o=`
import sys
import os

file_path = "/home/pyodide/${t}.py"
if os.path.exists(file_path):
    os.remove(file_path)

sys.modules.pop("${t}", None)
`;e.runPython(o),e.registerJsModule(t,n)}let Ue,Y=!1;(async()=>{function e(){if(S({command:y.Output,request:{output:"> "}}),Y){let u="",d=0;const h=new SharedArrayBuffer(256),p=new Uint8Array(h);for(S({command:E.Input,request:{},result:p});;){const b=Atomics.load(p,d);if(b==10)break;u+=String.fromCharCode(b),d++}return S({command:y.RawOutput,request:{output:u+`
\r`}}),u}const l=new Uint8Array(new SharedArrayBuffer(4));let f="";for(;;){S({command:E.Input,request:{},result:l});const u=new Int32Array(l.buffer)[0],d=String.fromCodePoint(u);if(u===10){S({command:y.Output,request:{output:d}});break}else u===8?f.length>0&&(S({command:y.Output,request:{output:d}}),f=f.substring(0,f.length-1)):(S({command:y.Output,request:{output:d}}),f+=d);r.checkInterrupt()}return f}const t=ke({stdout:l=>S({command:y.Output,request:{output:l+`
\r`}}),stdin:e}),n=(async()=>{const l=await it(),f=Object.entries(l).map(async([d,h])=>{if(h)try{const b=await(await fetch("https://raw.githubusercontent.com/rt-zone/pibody_libs/dev/"+d)).text();return[d,b]}catch{return null}}),u=await Promise.all(f);return new Map(u.filter(d=>!!d))})(),o=(async()=>{const l=["BME280.py","MPU6050.py","LSM6DS3.py","VEML6040.py","VL53L0X.py","SSD1306.py"];return(await Promise.all(l.map(async u=>{try{const d=await fetch("https://raw.githubusercontent.com/rt-zone/frozen_libs/main/"+u);if(!d.ok)throw new Error(`Failed to fetch ${u}`);const h=await d.text();return[u,h]}catch(d){return console.error(d),null}}))).filter(u=>u!==null)})(),[r,i,s]=await Promise.all([t,n,o]);Ue=r.pyimport("inspect");const a=[...i,...s];for(const[l,f]of a){const u=`/home/pyodide/${l}`;try{r.FS.mkdirTree(u.replace(/\/[^/]+$/,"")),r.FS.writeFile(u,f)}catch(d){console.error("Error writing file to Pyodide FS:",l,d)}}const c=new Int32Array(new SharedArrayBuffer(4)),_={sleep:l=>{const f=l*1e3;_.sleep_ms(f)},sleep_ms:l=>{if(v({command:y.Sleep,request:{time_ms:l}}),Y)return;const u=performance.now()+l,d=Math.min(l/20,50);for(;performance.now()<u;){const h=u-performance.now();Atomics.wait(c,0,0,Math.min(d,h)),r.checkInterrupt()}},sleep_us:l=>{_.sleep_ms(l/1e3)},ticks_ms:()=>performance.now(),ticks_us:()=>performance.now()*1e3,ticks_add:Ye,ticks_diff:Xe,time:()=>Date.now(),time_ns:()=>performance.now()*1e3*1e3},w={print(...l){let f=" ",u=`
\r`;l.length>0&&l[l.length-1]!==null&&typeof l[l.length-1]=="object"&&("sep"in l[l.length-1]||"end"in l[l.length-1])&&({sep:f=f,end:u=u}=l.pop());const d=l.map(String).join(f)+u;v({command:y.Output,request:{output:d}})}},P={Mode_IN:j.IN,Mode_OUT:j.OUT,Pull_NONE:q.NONE,Pull_UP:q.UP,Pull_DOWN:q.DOWN,pin_set_mode(l,f){v({command:y.PinSetMode,request:{pin:l,mode:f}})},pin_set_pull(l,f){v({command:y.PinSetPull,request:{pin:l,pull:f}})},pin_set_value(l,f){v({command:y.PinSetValue,request:{pin:l,value:f}})},pin_get_value(l){const f=new Int8Array(new SharedArrayBuffer(4));return v({command:E.PinGetValue,request:{pin:l},result:f}),Atomics.load(f,0)},pwm_freq(l,f){v({command:y.PwmFreq,request:{pin:l,freq:f}})},pwm_duty_u16(l,f){v({command:y.PwmDutyU16,request:{pin:l,duty_u16:f}})},adc_read_u16(l){const f=new Uint16Array(new SharedArrayBuffer(2));return v({command:E.AdcReadU16,request:{pin:l},result:f}),Atomics.load(f,0)},neopixel_write(l,f){function u(p){if(p&&typeof p=="object"){if(Array.isArray(p))return p.map(b=>Number(b));if(typeof p.toJs=="function")try{const b=p.toJs({create_proxies:!1});return u(b)}catch{}if(typeof p[Symbol.iterator]=="function")return Array.from(p,b=>Number(b))}return[]}function d(p){let b;if(Array.isArray(p))b=p;else if(p&&typeof p.toJs=="function")try{const U=p.toJs({create_proxies:!1});return d(U)}catch{b=[]}else p&&typeof p[Symbol.iterator]=="function"?b=Array.from(p):b=[];return b.map(U=>u(U))}const h=d(f);S({command:y.NeoPixelWrite,request:{pin:l,pixels:h}})},i2c_readfrom_mem(l,f,u,d,h){const p=new SharedArrayBuffer(1+h),b=new Uint8Array(p);return v({command:E.I2CReadFromMem,request:{sda:l,scl:f,addr:u,memaddr:d,nbytes:h},result:b}),Array.from(b)},i2c_writeto_mem(l,f,u,d,h){const p=h instanceof Uint8Array?new Uint8Array(h):new Uint8Array(h);v({command:y.I2CWriteToMem,request:{sda:l,scl:f,addr:u,memaddr:d,buf:p}})},i2c_scan(l,f){const u=new SharedArrayBuffer(1020),d=new Int32Array(u);v({command:E.I2CScan,request:{sda:l,scl:f},result:d});const h=Atomics.load(d,0);return h<0?[]:[h]}};V(r,"utime",_),V(r,"micropython",et),V(r,"display",tt),V(r,"neopixel",rt),V(r,"mpbridge",P),r.runPython(`
import sys, types
import mpbridge

machine = types.ModuleType("machine")

class Pin:
    IN = mpbridge.Mode_IN
    OUT = mpbridge.Mode_OUT
    PULL_UP = mpbridge.Pull_UP
    PULL_DOWN = mpbridge.Pull_DOWN
    PULL_NONE = mpbridge.Pull_NONE
    # IRQ flags (bitmask), common in MicroPython
    IRQ_RISING = 1
    IRQ_FALLING = 2
    IRQ_HIGH_LEVEL = 4
    IRQ_LOW_LEVEL = 8

    def __init__(self, pin_id, mode=None, pull=None, value=None):
        self._id = int(pin_id)
        if mode is None:
            mode = self.IN
        if pull is None:
            pull = self.PULL_NONE
        mpbridge.pin_set_mode(self._id, int(mode))
        mpbridge.pin_set_pull(self._id, int(pull))
        if value is not None:
            mpbridge.pin_set_value(self._id, 1 if value else 0)

    def value(self, v=None):
        if v is None:
            return mpbridge.pin_get_value(self._id)
        mpbridge.pin_set_value(self._id, 1 if v else 0)

    def on(self):
        self.value(1)

    def off(self):
        self.value(0)

    def toggle(self):
        state = self.value()
        self.value(0 if state else 1)

    def irq(self, handler=None, trigger=None, hard=False):
        # Store handler and trigger; emulator doesn't generate edge events yet
        self._irq_handler = handler
        self._irq_trigger = trigger
        self._irq_hard = bool(hard)
        return None

class PWM:
    def __init__(self, pin, freq=0, duty_u16=0):
        self._id = int(pin._id) if hasattr(pin, '_id') else int(pin)
        self._freq = 0
        self._duty = 0
        # Ensure OUT mode for PWM
        mpbridge.pin_set_mode(self._id, Pin.OUT)
        if freq:
            self.freq(freq)
        if duty_u16:
            self.duty_u16(duty_u16)

    def freq(self, f=None):
        if f is None:
            return self._freq
        self._freq = int(f)
        mpbridge.pwm_freq(self._id, self._freq)

    def duty_u16(self, d=None):
        if d is None:
            return self._duty
        self._duty = int(d)
        mpbridge.pwm_duty_u16(self._id, self._duty)

class ADC:
    def __init__(self, pin_or_ch):
        p = int(pin_or_ch._id) if hasattr(pin_or_ch, '_id') else int(pin_or_ch)
        # Map as in Pico: 0/1/2 are channels -> pins 26/27/28
        if p in (0, 1, 2):
            p = 26 + p
        elif p not in (26, 27, 28):
            raise Exception(f"Pin({p}) doesn't have ADC capabilities")
        self._id = p
        # Analog mode
        mpbridge.pin_set_mode(self._id, Pin.PULL_NONE)  # Mode is analog in JS side

    def read_u16(self):
        return int(mpbridge.adc_read_u16(self._id))

class SPI:
    MSB = 0
    LSB = 1

    def __init__(self, id=0, *, baudrate=1000000, polarity=0, phase=0, bits=8, firstbit=MSB, sck=None, mosi=None, miso=None):
        self.id = int(id)
        self.baudrate = int(baudrate)
        self.polarity = int(polarity)
        self.phase = int(phase)
        self.bits = int(bits)
        self.firstbit = int(firstbit)
        self.sck = sck
        self.mosi = mosi
        self.miso = miso

    def init(self, *args, **kwargs):
        return None

    def deinit(self):
        return None

    def write(self, buf):
        # No-op in emulator for now
        return len(buf) if hasattr(buf, '__len__') else None

    def read(self, nbytes, write=0x00):
        return bytes([0] * int(nbytes))

    def readinto(self, buf, write=0x00):
        try:
            mv = memoryview(buf)
            for i in range(len(mv)):
                mv[i] = 0
            return None
        except TypeError:
            return None

    def write_readinto(self, write_buf, read_buf):
        # Fill read_buf with zeros
        try:
            mv = memoryview(read_buf)
            for i in range(len(mv)):
                mv[i] = 0
            return None
        except TypeError:
            return None

class I2C:
    def __init__(self, id, sda=None, scl=None, freq=400000, timeout=50000):
        self.id = int(id)
        self.sda = sda
        self.scl = scl
        self.freq = int(freq)
        self.timeout = int(timeout)
        self._sda_id = int(sda._id) if hasattr(sda, '_id') else int(sda)
        self._scl_id = int(scl._id) if hasattr(scl, '_id') else int(scl)

    def readfrom(self, addr, nbytes):
        return self.readfrom_mem(addr, 0, nbytes)

    def readfrom_mem(self, addr, memaddr, nbytes):
        data = mpbridge.i2c_readfrom_mem(self._sda_id, self._scl_id, int(addr), int(memaddr), int(nbytes))
        return bytes(data)

    def writeto_mem(self, addr, memaddr, buf):
        data = list(buf) if hasattr(buf, '__iter__') else []
        mpbridge.i2c_writeto_mem(self._sda_id, self._scl_id, int(addr), int(memaddr), data)

    def scan(self):
        return mpbridge.i2c_scan(self._sda_id, self._scl_id)

    def writeto(self, addr, buf):
        data = list(buf) if hasattr(buf, '__iter__') else []
        if len(data) == 0:
            return
        memaddr = int(data[0])
        payload = data[1:]
        mpbridge.i2c_writeto_mem(self._sda_id, self._scl_id, int(addr), memaddr, payload)

def SoftI2C(sda, scl, freq=400000, timeout=50000):
    return I2C(0, sda=sda, scl=scl, freq=freq, timeout=timeout)

machine.Pin = Pin
machine.PWM = PWM
machine.ADC = ADC
machine.SPI = SPI
machine.I2C = I2C
machine.SoftI2C = SoftI2C

sys.modules['machine'] = machine
`);const x=`
import sys, types
import mpbridge

neopixel = types.ModuleType('neopixel')

class NeoPixel:
    def __init__(self, pin, n, bpp=3, timing=1):
        self.pin = int(getattr(pin, '_id', pin))
        self.n = int(n)
        self.bpp = int(bpp)
        self.timing = int(timing)
        self.pixels = [[0 for _ in range(self.bpp)] for _ in range(self.n)]

    def fill(self, pixel):
        arr = list(pixel) if hasattr(pixel, '__iter__') else [0,0,0]
        arr = [int(x) for x in arr[:self.bpp]]
        for i in range(self.n):
            self.pixels[i] = arr[:]  # copy

    def write(self):
        safe = [list(map(int, p[:self.bpp])) for p in self.pixels]
        mpbridge.neopixel_write(self.pin, safe)

    show = write

    def __len__(self):
        return self.n

    def set_pixel(self, index, val):
        if 0 <= index < self.n:
            arr = list(val) if hasattr(val, '__iter__') else [0,0,0]
            self.pixels[index] = [int(x) for x in arr[:self.bpp]]

    def get_pixel(self, index):
        if 0 <= index < self.n:
            return list(self.pixels[index])
        return [0]*self.bpp

    def __setitem__(self, index, val):
        self.set_pixel(int(index), val)

    def __getitem__(self, index):
        return self.get_pixel(int(index))

    # aliases commonly seen in libs
    set = set_pixel
    get = get_pixel

neopixel.NeoPixel = NeoPixel
sys.modules['neopixel'] = neopixel
`;r.runPython(x),r.runPython(`
import sys, types
import display as _display

mod = types.ModuleType('libs.Display')

class Display:
    def __init__(self):
        pass

    def print(self, text: str):
        _display.print(str(text))

    def clear(self):
        _display.clear()

mod.Display = Display
sys.modules['libs.Display'] = mod
`),r.runPython(x),r.runPython(`
import sys, types

mod = types.ModuleType('libs.iot.WiFi')

class WiFi:
    def __init__(self):
        pass

mod.WiFi = WiFi
sys.modules['libs.iot.WiFi'] = mod
`),r.runPython(`
import sys, types

mod = types.ModuleType('libs.iot.telegram_bot')

class TelegramBot:
    def __init__(self):
        pass

mod.TelegramBot = TelegramBot
sys.modules['libs.iot.telegram_bot'] = mod
`),r.setInterruptBuffer($);const De=`
import time
import utime
time.time = utime.time
time.time_ns = utime.time_ns
time.sleep = utime.sleep
time.sleep_ms = utime.sleep_ms
time.sleep_us = utime.sleep_us
time.ticks_ms = utime.ticks_ms
time.ticks_us = utime.ticks_us
time.ticks_add = utime.ticks_add
time.ticks_diff = utime.ticks_diff
`;r.globals.set("print",w.print),r.runPython(De),r.runPython(`
import builtins

def const(x):
    return x

builtins.const = const
`),r.runPython(`
import types, sys

framebuf = types.ModuleType("framebuf")

class FrameBuffer:
    def __init__(self, buffer, width, height, format):
        self.buffer = buffer
        self.width = width
        self.height = height
        self.format = format
    def fill(self, c): pass
    def pixel(self, x, y, c): pass
    def hline(self, x, y, w, c): pass
    def vline(self, x, y, h, c): pass
    def rect(self, x, y, w, h, c): pass
    def fill_rect(self, x, y, w, h, c): pass
    def text(self, s, x, y, c): pass
    def scroll(self, dx, dy): pass

framebuf.FrameBuffer = FrameBuffer
sys.modules["framebuf"] = framebuf
`),self.onmessage=l=>{const{command:f,code:u,isReplay:d}=l.data;if(f==="runPython"){if(!r){D({command:y.Error,request:{message:"Interpreter not initialized"}});return}try{Y=d,r.runPython(u),D({command:z.Finished,request:{}})}catch(h){let p="";if($[0]!==oe&&$[1]===oe)$[1]=0,D({command:y.KeyboardInterrupt,request:{message:`KeyboardInterrupt
\r`}});else if(h instanceof Error){const b=h.message.split(`
`),U=b.findIndex(B=>B.includes("<exec>"));U!==-1?p=b.slice(U).filter(B=>!B.includes("mpWorker.ts")&&!/mpWorker-[A-Za-z0-9]+\.js/.test(B)&&!B.includes("pyodide.asm.js")).join(`
`):p=h.message,D({command:y.Error,request:{message:p}})}else p=String(h),D({command:y.Error,request:{message:p}})}}},D({command:z.Initialized,request:{sharedArrayInterrupt:$,sharedWakeupArray:C}})})()});export default nt();
