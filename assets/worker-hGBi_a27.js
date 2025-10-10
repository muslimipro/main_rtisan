var Oe=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Ze=Oe((tt,Y)=>{var J=(e=>(e[e.NONE=-1]="NONE",e[e.IN=0]="IN",e[e.OUT=1]="OUT",e[e.ANALOG=5]="ANALOG",e[e.PWM=6]="PWM",e))(J||{}),B=(e=>(e[e.NONE=-1]="NONE",e[e.UP=0]="UP",e[e.DOWN=1]="DOWN",e))(B||{}),E=(e=>(e.PinGetValue="pin get value",e.PinGetMode="pin get mode",e.PinGetPull="pin get pull",e.AdcReadU16="adc read_u16",e.I2CScan="i2c scan",e.I2CReadFromMem="i2c readfrom_mem",e.Input="input",e))(E||{});const te=2;var h=(e=>(e.I2CWriteToMem="i2c writefrom_mem",e.PinSetValue="pin set value",e.PinSetMode="pin set mode",e.PinSetPull="pin set pull",e.PwmFreq="pwm freq",e.PwmDutyU16="pwm duty_u16",e.Output="output",e.Sleep="sleep",e.DisplayText="display text",e.DisplayClear="display clear",e.NeoPixelWrite="neopixel write",e.RawOutput="raw output",e.KeyboardInterrupt="keyboard interrupt",e.Error="error",e))(h||{}),R=(e=>(e.Finished="finished",e.Initialized="initialized",e.Timeout="timeout",e))(R||{});Object.values({...E,...h,...R});new Set(Object.values(E));new Set(Object.values(R));new Set(Object.values(h));const Ie=`
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
`,ke=`
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
`,Le=`
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
`,qe=`
import sys, types
import display as _display

mod = types.ModuleType('libs.Display')

class Display:
    def __init__(self):
        pass

    def print(self, *args):
        _display.print(' '.join(str(arg) for arg in args))

    def clear(self):
        _display.clear()

mod.Display = Display
sys.modules['libs.Display'] = mod
`,De=`
import sys, types

mod = types.ModuleType('libs.iot.WiFi')

class WiFi:
    def __init__(self):
        pass

mod.WiFi = WiFi
sys.modules['libs.iot.WiFi'] = mod
`,Ue=`
import sys, types

mod = types.ModuleType('libs.iot.telegram_bot')

class TelegramBot:
    def __init__(self):
        pass

mod.TelegramBot = TelegramBot
sys.modules['libs.iot.telegram_bot'] = mod
`,Te=`
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
`,Me=`
import builtins

def const(x):
    return x

builtins.const = const
`;var Re=Object.defineProperty,m=(e,t)=>Re(e,"name",{value:t,configurable:!0}),ne=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});function se(e){return!isNaN(parseFloat(e))&&isFinite(e)}m(se,"_isNumber");function F(e){return e.charAt(0).toUpperCase()+e.substring(1)}m(F,"_capitalize");function z(e){return function(){return this[e]}}m(z,"_getter");var q=["isConstructor","isEval","isNative","isToplevel"],D=["columnNumber","lineNumber"],U=["fileName","functionName","source"],je=["args"],We=["evalOrigin"],W=q.concat(D,U,je,We);function N(e){if(e)for(var t=0;t<W.length;t++)e[W[t]]!==void 0&&this["set"+F(W[t])](e[W[t]])}m(N,"StackFrame");N.prototype={getArgs:function(){return this.args},setArgs:function(e){if(Object.prototype.toString.call(e)!=="[object Array]")throw new TypeError("Args must be an Array");this.args=e},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(e){if(e instanceof N)this.evalOrigin=e;else if(e instanceof Object)this.evalOrigin=new N(e);else throw new TypeError("Eval Origin must be an Object or StackFrame")},toString:function(){var e=this.getFileName()||"",t=this.getLineNumber()||"",n=this.getColumnNumber()||"",a=this.getFunctionName()||"";return this.getIsEval()?e?"[eval] ("+e+":"+t+":"+n+")":"[eval]:"+t+":"+n:a?a+" ("+e+":"+t+":"+n+")":e+":"+t+":"+n}};N.fromString=m(function(e){var t=e.indexOf("("),n=e.lastIndexOf(")"),a=e.substring(0,t),i=e.substring(t+1,n).split(","),r=e.substring(n+1);if(r.indexOf("@")===0)var s=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(r,""),l=s[1],u=s[2],y=s[3];return new N({functionName:a,args:i||void 0,fileName:l,lineNumber:u||void 0,columnNumber:y||void 0})},"StackFrame$$fromString");for(A=0;A<q.length;A++)N.prototype["get"+F(q[A])]=z(q[A]),N.prototype["set"+F(q[A])]=function(e){return function(t){this[e]=!!t}}(q[A]);var A;for(O=0;O<D.length;O++)N.prototype["get"+F(D[O])]=z(D[O]),N.prototype["set"+F(D[O])]=function(e){return function(t){if(!se(t))throw new TypeError(e+" must be a Number");this[e]=Number(t)}}(D[O]);var O;for(I=0;I<U.length;I++)N.prototype["get"+F(U[I])]=z(U[I]),N.prototype["set"+F(U[I])]=function(e){return function(t){this[e]=String(t)}}(U[I]);var I,V=N;function oe(){var e=/^\s*at .*(\S+:\d+|\(native\))/m,t=/^(eval@)?(\[native code])?$/;return{parse:m(function(n){if(n.stack&&n.stack.match(e))return this.parseV8OrIE(n);if(n.stack)return this.parseFFOrSafari(n);throw new Error("Cannot parse given Error object")},"ErrorStackParser$$parse"),extractLocation:m(function(n){if(n.indexOf(":")===-1)return[n];var a=/(.+?)(?::(\d+))?(?::(\d+))?$/,i=a.exec(n.replace(/[()]/g,""));return[i[1],i[2]||void 0,i[3]||void 0]},"ErrorStackParser$$extractLocation"),parseV8OrIE:m(function(n){var a=n.stack.split(`
`).filter(function(i){return!!i.match(e)},this);return a.map(function(i){i.indexOf("(eval ")>-1&&(i=i.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));var r=i.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),s=r.match(/ (\(.+\)$)/);r=s?r.replace(s[0],""):r;var l=this.extractLocation(s?s[1]:r),u=s&&r||void 0,y=["eval","<anonymous>"].indexOf(l[0])>-1?void 0:l[0];return new V({functionName:u,fileName:y,lineNumber:l[1],columnNumber:l[2],source:i})},this)},"ErrorStackParser$$parseV8OrIE"),parseFFOrSafari:m(function(n){var a=n.stack.split(`
`).filter(function(i){return!i.match(t)},this);return a.map(function(i){if(i.indexOf(" > eval")>-1&&(i=i.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),i.indexOf("@")===-1&&i.indexOf(":")===-1)return new V({functionName:i});var r=/((.*".+"[^@]*)?[^@]*)(?:@)/,s=i.match(r),l=s&&s[1]?s[1]:void 0,u=this.extractLocation(i.replace(r,""));return new V({functionName:l,fileName:u[0],lineNumber:u[1],columnNumber:u[2],source:i})},this)},"ErrorStackParser$$parseFFOrSafari")}}m(oe,"ErrorStackParser");var Be=new oe,$e=Be,S=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&!process.browser,ae=S&&typeof Y<"u"&&typeof Y.exports<"u"&&typeof ne<"u"&&typeof __dirname<"u",Ce=S&&!ae,ze=typeof Deno<"u",le=!S&&!ze,Ve=le&&typeof window=="object"&&typeof document=="object"&&typeof document.createElement=="function"&&"sessionStorage"in window&&typeof importScripts!="function",He=le&&typeof importScripts=="function"&&typeof self=="object";typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome")==-1&&navigator.userAgent.indexOf("Safari")>-1;var fe,Q,de,re,X;async function Z(){if(!S||(fe=(await import("./__vite-browser-external-9wXp6ZBx.js")).default,re=await import("./__vite-browser-external-9wXp6ZBx.js"),X=await import("./__vite-browser-external-9wXp6ZBx.js"),de=(await import("./__vite-browser-external-9wXp6ZBx.js")).default,Q=await import("./__vite-browser-external-9wXp6ZBx.js"),ee=Q.sep,typeof ne<"u"))return;let e=re,t=await import("./__vite-browser-external-9wXp6ZBx.js"),n=await import("./__vite-browser-external-9wXp6ZBx.js"),a=await import("./__vite-browser-external-9wXp6ZBx.js"),i={fs:e,crypto:t,ws:n,child_process:a};globalThis.require=function(r){return i[r]}}m(Z,"initNodeModules");function ce(e,t){return Q.resolve(t||".",e)}m(ce,"node_resolvePath");function ue(e,t){return t===void 0&&(t=location),new URL(e,t).toString()}m(ue,"browser_resolvePath");var K;S?K=ce:K=ue;var ee;S||(ee="/");function me(e,t){return e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?{response:fetch(e)}:{binary:X.readFile(e).then(n=>new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}}m(me,"node_getBinaryResponse");function pe(e,t){let n=new URL(e,location);return{response:fetch(n,t?{integrity:t}:{})}}m(pe,"browser_getBinaryResponse");var C;S?C=me:C=pe;async function ye(e,t){let{response:n,binary:a}=C(e,t);if(a)return a;let i=await n;if(!i.ok)throw new Error(`Failed to load '${e}': request failed.`);return new Uint8Array(await i.arrayBuffer())}m(ye,"loadBinaryFile");var $;if(Ve)$=m(async e=>await import(e),"loadScript");else if(He)$=m(async e=>{try{globalThis.importScripts(e)}catch(t){if(t instanceof TypeError)await import(e);else throw t}},"loadScript");else if(S)$=_e;else throw new Error("Cannot determine runtime environment");async function _e(e){e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?de.runInThisContext(await(await fetch(e)).text()):await import(fe.pathToFileURL(e).href)}m(_e,"nodeLoadScript");async function he(e){if(S){await Z();let t=await X.readFile(e,{encoding:"utf8"});return JSON.parse(t)}else return await(await fetch(e)).json()}m(he,"loadLockFile");async function we(){if(ae)return __dirname;let e;try{throw new Error}catch(a){e=a}let t=$e.parse(e)[0].fileName;if(S&&!t.startsWith("file://")&&(t=`file://${t}`),Ce){let a=await import("./__vite-browser-external-9wXp6ZBx.js");return(await import("./__vite-browser-external-9wXp6ZBx.js")).fileURLToPath(a.dirname(t))}let n=t.lastIndexOf(ee);if(n===-1)throw new Error("Could not extract indexURL path from pyodide module location");return t.slice(0,n)}m(we,"calculateDirname");function ge(e){let t=e.FS,n=e.FS.filesystems.MEMFS,a=e.PATH,i={DIR_MODE:16895,FILE_MODE:33279,mount:function(r){if(!r.opts.fileSystemHandle)throw new Error("opts.fileSystemHandle is required");return n.mount.apply(null,arguments)},syncfs:async(r,s,l)=>{try{let u=i.getLocalSet(r),y=await i.getRemoteSet(r),w=s?y:u,v=s?u:y;await i.reconcile(r,w,v),l(null)}catch(u){l(u)}},getLocalSet:r=>{let s=Object.create(null);function l(w){return w!=="."&&w!==".."}m(l,"isRealDir");function u(w){return v=>a.join2(w,v)}m(u,"toAbsolute");let y=t.readdir(r.mountpoint).filter(l).map(u(r.mountpoint));for(;y.length;){let w=y.pop(),v=t.stat(w);t.isDir(v.mode)&&y.push.apply(y,t.readdir(w).filter(l).map(u(w))),s[w]={timestamp:v.mtime,mode:v.mode}}return{type:"local",entries:s}},getRemoteSet:async r=>{let s=Object.create(null),l=await Ge(r.opts.fileSystemHandle);for(let[u,y]of l)u!=="."&&(s[a.join2(r.mountpoint,u)]={timestamp:y.kind==="file"?(await y.getFile()).lastModifiedDate:new Date,mode:y.kind==="file"?i.FILE_MODE:i.DIR_MODE});return{type:"remote",entries:s,handles:l}},loadLocalEntry:r=>{let s=t.lookupPath(r).node,l=t.stat(r);if(t.isDir(l.mode))return{timestamp:l.mtime,mode:l.mode};if(t.isFile(l.mode))return s.contents=n.getFileDataAsTypedArray(s),{timestamp:l.mtime,mode:l.mode,contents:s.contents};throw new Error("node type not supported")},storeLocalEntry:(r,s)=>{if(t.isDir(s.mode))t.mkdirTree(r,s.mode);else if(t.isFile(s.mode))t.writeFile(r,s.contents,{canOwn:!0});else throw new Error("node type not supported");t.chmod(r,s.mode),t.utime(r,s.timestamp,s.timestamp)},removeLocalEntry:r=>{var s=t.stat(r);t.isDir(s.mode)?t.rmdir(r):t.isFile(s.mode)&&t.unlink(r)},loadRemoteEntry:async r=>{if(r.kind==="file"){let s=await r.getFile();return{contents:new Uint8Array(await s.arrayBuffer()),mode:i.FILE_MODE,timestamp:s.lastModifiedDate}}else{if(r.kind==="directory")return{mode:i.DIR_MODE,timestamp:new Date};throw new Error("unknown kind: "+r.kind)}},storeRemoteEntry:async(r,s,l)=>{let u=r.get(a.dirname(s)),y=t.isFile(l.mode)?await u.getFileHandle(a.basename(s),{create:!0}):await u.getDirectoryHandle(a.basename(s),{create:!0});if(y.kind==="file"){let w=await y.createWritable();await w.write(l.contents),await w.close()}r.set(s,y)},removeRemoteEntry:async(r,s)=>{await r.get(a.dirname(s)).removeEntry(a.basename(s)),r.delete(s)},reconcile:async(r,s,l)=>{let u=0,y=[];Object.keys(s.entries).forEach(function(g){let o=s.entries[g],f=l.entries[g];(!f||t.isFile(o.mode)&&o.timestamp.getTime()>f.timestamp.getTime())&&(y.push(g),u++)}),y.sort();let w=[];if(Object.keys(l.entries).forEach(function(g){s.entries[g]||(w.push(g),u++)}),w.sort().reverse(),!u)return;let v=s.type==="remote"?s.handles:l.handles;for(let g of y){let o=a.normalize(g.replace(r.mountpoint,"/")).substring(1);if(l.type==="local"){let f=v.get(o),d=await i.loadRemoteEntry(f);i.storeLocalEntry(g,d)}else{let f=i.loadLocalEntry(g);await i.storeRemoteEntry(v,o,f)}}for(let g of w)if(l.type==="local")i.removeLocalEntry(g);else{let o=a.normalize(g.replace(r.mountpoint,"/")).substring(1);await i.removeRemoteEntry(v,o)}}};e.FS.filesystems.NATIVEFS_ASYNC=i}m(ge,"initializeNativeFS");var Ge=m(async e=>{let t=[];async function n(i){for await(let r of i.values())t.push(r),r.kind==="directory"&&await n(r)}m(n,"collect"),await n(e);let a=new Map;a.set(".",e);for(let i of t){let r=(await e.resolve(i)).join("/");a.set(r,i)}return a},"getFsHandles");function be(e){let t={noImageDecoding:!0,noAudioDecoding:!0,noWasmDecoding:!1,preRun:Pe(e),quit(n,a){throw t.exited={status:n,toThrow:a},a},print:e.stdout,printErr:e.stderr,arguments:e.args,API:{config:e},locateFile:n=>e.indexURL+n,instantiateWasm:Ee(e.indexURL)};return t}m(be,"createSettings");function ve(e){return function(t){let n="/";try{t.FS.mkdirTree(e)}catch(a){console.error(`Error occurred while making a home directory '${e}':`),console.error(a),console.error(`Using '${n}' for a home directory instead`),e=n}t.FS.chdir(e)}}m(ve,"createHomeDirectory");function xe(e){return function(t){Object.assign(t.ENV,e)}}m(xe,"setEnvironment");function Ne(e){return t=>{for(let n of e)t.FS.mkdirTree(n),t.FS.mount(t.FS.filesystems.NODEFS,{root:n},n)}}m(Ne,"mountLocalDirectories");function Se(e){let t=ye(e);return n=>{let a=n._py_version_major(),i=n._py_version_minor();n.FS.mkdirTree("/lib"),n.FS.mkdirTree(`/lib/python${a}.${i}/site-packages`),n.addRunDependency("install-stdlib"),t.then(r=>{n.FS.writeFile(`/lib/python${a}${i}.zip`,r)}).catch(r=>{console.error("Error occurred while installing the standard library:"),console.error(r)}).finally(()=>{n.removeRunDependency("install-stdlib")})}}m(Se,"installStdlib");function Pe(e){let t;return e.stdLibURL!=null?t=e.stdLibURL:t=e.indexURL+"python_stdlib.zip",[Se(t),ve(e.env.HOME),xe(e.env),Ne(e._node_mounts),ge]}m(Pe,"getFileSystemInitializationFuncs");function Ee(e){if(typeof WasmOffsetConverter<"u")return;let{binary:t,response:n}=C(e+"pyodide.asm.wasm");return function(a,i){return async function(){try{let r;n?r=await WebAssembly.instantiateStreaming(n,a):r=await WebAssembly.instantiate(await t,a);let{instance:s,module:l}=r;i(s,l)}catch(r){console.warn("wasm instantiation failed!"),console.warn(r)}}(),{}}}m(Ee,"getInstantiateWasmFunc");var ie="0.27.2";async function Fe(e={}){var t,n;await Z();let a=e.indexURL||await we();a=K(a),a.endsWith("/")||(a+="/"),e.indexURL=a;let i={fullStdLib:!1,jsglobals:globalThis,stdin:globalThis.prompt?globalThis.prompt:void 0,lockFileURL:a+"pyodide-lock.json",args:[],_node_mounts:[],env:{},packageCacheDir:a,packages:[],enableRunUntilComplete:!1,checkAPIVersion:!0,BUILD_ID:"f88dc4abb40ec8e780c94a5f70bcef45ec9eb3c1aee1c99da527febfef1c6f3f"},r=Object.assign(i,e);(t=r.env).HOME??(t.HOME="/home/pyodide"),(n=r.env).PYTHONINSPECT??(n.PYTHONINSPECT="1");let s=be(r),l=s.API;if(l.lockFilePromise=he(r.lockFileURL),typeof _createPyodideModule!="function"){let g=`${r.indexURL}pyodide.asm.js`;await $(g)}let u;if(e._loadSnapshot){let g=await e._loadSnapshot;ArrayBuffer.isView(g)?u=g:u=new Uint8Array(g),s.noInitialRun=!0,s.INITIAL_MEMORY=u.length}let y=await _createPyodideModule(s);if(s.exited)throw s.exited.toThrow;if(e.pyproxyToStringRepr&&l.setPyProxyToStringMethod(!0),l.version!==ie&&r.checkAPIVersion)throw new Error(`Pyodide version does not match: '${ie}' <==> '${l.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);y.locateFile=g=>{throw new Error("Didn't expect to load any more file_packager files!")};let w;u&&(w=l.restoreSnapshot(u));let v=l.finalizeBootstrap(w,e._snapshotDeserializer);return l.sys.path.insert(0,l.config.env.HOME),v.version.includes("dev")||l.setCdnUrl(`https://cdn.jsdelivr.net/pyodide/v${v.version}/full/`),l._pyodide.set_excepthook(),await l.packageIndexReady,l.initializeStreams(r.stdin,r.stdout,r.stderr),v}m(Fe,"loadPyodide");const Je=new SharedArrayBuffer(16),j=new Int32Array(Je),Qe=new SharedArrayBuffer(2),M=new Uint8Array(Qe);function x(e){Atomics.store(j,0,0);const t=Ae.currentframe().f_lineno;postMessage({content:e,line:t}),Atomics.wait(j,0,0)}function P(e){Atomics.store(j,0,0),postMessage({content:e,line:-1}),Atomics.wait(j,0,0)}function L(e){postMessage({content:e,line:-1})}function Ke(e,t){return e+t}function Ye(e,t){return e-t}async function Xe(){return await fetch("https://raw.githubusercontent.com/rt-zone/pibody_libs/dev/manifest.json").then(t=>t.json()).catch(()=>{})}function H(e,t,n){const a=`
import sys
import os

file_path = "/home/pyodide/${t}.py"
if os.path.exists(file_path):
    os.remove(file_path)

sys.modules.pop("${t}", None)
`;e.runPython(a),e.registerJsModule(t,n)}let Ae,G=!1;(async()=>{function e(){if(P({command:h.Output,request:{output:"> "}}),G){let d="",c=0;const _=new SharedArrayBuffer(256),p=new Uint8Array(_);for(P({command:E.Input,request:{},result:p});;){const b=Atomics.load(p,c);if(b==10)break;d+=String.fromCharCode(b),c++}return P({command:h.RawOutput,request:{output:d+`
\r`}}),d}const o=new Uint8Array(new SharedArrayBuffer(4));let f="";for(;;){P({command:E.Input,request:{},result:o});const d=new Int32Array(o.buffer)[0],c=String.fromCodePoint(d);if(d===10){P({command:h.Output,request:{output:c}});break}else d===8?f.length>0&&(P({command:h.Output,request:{output:c}}),f=f.substring(0,f.length-1)):(P({command:h.Output,request:{output:c}}),f+=c);i.checkInterrupt()}return f}const t=Fe({stdout:o=>P({command:h.Output,request:{output:o+`
\r`}}),stdin:e}),n=(async()=>{const o=await Xe(),f=Object.entries(o).map(async([c,_])=>{if(_)try{const b=await(await fetch("https://raw.githubusercontent.com/rt-zone/pibody_libs/dev/"+c)).text();return[c,b]}catch{return null}}),d=await Promise.all(f);return new Map(d.filter(c=>!!c))})(),a=(async()=>{const o=["BME280.py","MPU6050.py","LSM6DS3.py","VEML6040.py","VL53L0X.py","SSD1306.py"];return(await Promise.all(o.map(async d=>{try{const c=await fetch("https://raw.githubusercontent.com/rt-zone/frozen_libs/main/"+d);if(!c.ok)throw new Error(`Failed to fetch ${d}`);const _=await c.text();return[d,_]}catch(c){return console.error(c),null}}))).filter(d=>d!==null)})(),[i,r,s]=await Promise.all([t,n,a]);Ae=i.pyimport("inspect");const l=[...r,...s];for(const[o,f]of l){const d=`/home/pyodide/${o}`;try{i.FS.mkdirTree(d.replace(/\/[^/]+$/,"")),i.FS.writeFile(d,f)}catch(c){console.error("Error writing file to Pyodide FS:",o,c)}}const u=new Int32Array(new SharedArrayBuffer(4)),y={sleep:o=>{const f=o*1e3;y.sleep_ms(f)},sleep_ms:o=>{if(x({command:h.Sleep,request:{time_ms:o}}),G)return;const d=performance.now()+o,c=Math.min(o/20,50);for(;performance.now()<d;){const _=d-performance.now();Atomics.wait(u,0,0,Math.min(c,_)),i.checkInterrupt()}},sleep_us:o=>{y.sleep_ms(o/1e3)},ticks_ms:()=>performance.now(),ticks_us:()=>performance.now()*1e3,ticks_add:Ke,ticks_diff:Ye,time:()=>Date.now(),time_ns:()=>performance.now()*1e3*1e3},w={print(...o){let f=" ",d=`
\r`;o.length>0&&o[o.length-1]!==null&&typeof o[o.length-1]=="object"&&("sep"in o[o.length-1]||"end"in o[o.length-1])&&({sep:f=f,end:d=d}=o.pop());const c=o.map(String).join(f)+d;x({command:h.Output,request:{output:c}})}},v={print:o=>{x({command:h.DisplayText,request:{text:o,x:0,y:16}})},clear:()=>{x({command:h.DisplayClear,request:{}})}},g={Mode_IN:J.IN,Mode_OUT:J.OUT,Pull_NONE:B.NONE,Pull_UP:B.UP,Pull_DOWN:B.DOWN,pin_set_mode(o,f){x({command:h.PinSetMode,request:{pin:o,mode:f}})},pin_set_pull(o,f){x({command:h.PinSetPull,request:{pin:o,pull:f}})},pin_set_value(o,f){x({command:h.PinSetValue,request:{pin:o,value:f}})},pin_get_value(o){const f=new Int8Array(new SharedArrayBuffer(4));return x({command:E.PinGetValue,request:{pin:o},result:f}),Atomics.load(f,0)},pwm_freq(o,f){x({command:h.PwmFreq,request:{pin:o,freq:f}})},pwm_duty_u16(o,f){x({command:h.PwmDutyU16,request:{pin:o,duty_u16:f}})},adc_read_u16(o){const f=new Uint16Array(new SharedArrayBuffer(2));return x({command:E.AdcReadU16,request:{pin:o},result:f}),Atomics.load(f,0)},neopixel_write(o,f){function d(p){if(p&&typeof p=="object"){if(Array.isArray(p))return p.map(b=>Number(b));if(typeof p.toJs=="function")try{const b=p.toJs({create_proxies:!1});return d(b)}catch{}if(typeof p[Symbol.iterator]=="function")return Array.from(p,b=>Number(b))}return[]}function c(p){let b;if(Array.isArray(p))b=p;else if(p&&typeof p.toJs=="function")try{const k=p.toJs({create_proxies:!1});return c(k)}catch{b=[]}else p&&typeof p[Symbol.iterator]=="function"?b=Array.from(p):b=[];return b.map(k=>d(k))}const _=c(f);P({command:h.NeoPixelWrite,request:{pin:o,pixels:_}})},i2c_readfrom_mem(o,f,d,c,_){const p=new SharedArrayBuffer(1+_),b=new Uint8Array(p);return x({command:E.I2CReadFromMem,request:{sda:o,scl:f,addr:d,memaddr:c,nbytes:_},result:b}),Array.from(b)},i2c_writeto_mem(o,f,d,c,_){const p=_ instanceof Uint8Array?new Uint8Array(_):new Uint8Array(_);x({command:h.I2CWriteToMem,request:{sda:o,scl:f,addr:d,memaddr:c,buf:p}})},i2c_scan(o,f){const d=new SharedArrayBuffer(1020),c=new Int32Array(d);x({command:E.I2CScan,request:{sda:o,scl:f},result:c});const _=Atomics.load(c,0);return _<0?[]:[_]}};H(i,"utime",y),H(i,"display",v),H(i,"mpbridge",g),i.runPython(Le),i.runPython(qe),i.runPython(ke),i.runPython(De),i.runPython(Ue),i.setInterruptBuffer(M),i.globals.set("print",w.print),i.runPython(Te),i.runPython(Me),i.runPython(Ie),self.onmessage=o=>{const{command:f,code:d,isReplay:c}=o.data;if(f==="runPython"){if(!i){L({command:h.Error,request:{message:"Interpreter not initialized"}});return}try{G=c,i.runPython(d),L({command:R.Finished,request:{}})}catch(_){let p="";if(M[0]!==te&&M[1]===te)M[1]=0,L({command:h.KeyboardInterrupt,request:{message:`KeyboardInterrupt
\r`}});else if(_ instanceof Error){const b=_.message.split(`
`),k=b.findIndex(T=>T.includes("<exec>"));k!==-1?p=b.slice(k).filter(T=>!T.includes("mpWorker.ts")&&!/mpWorker-[A-Za-z0-9]+\.js/.test(T)&&!T.includes("pyodide.asm.js")).join(`
`):p=_.message,L({command:h.Error,request:{message:p}})}else p=String(_),L({command:h.Error,request:{message:p}})}}},L({command:R.Initialized,request:{sharedArrayInterrupt:M,sharedWakeupArray:j}})})()});export default Ze();
