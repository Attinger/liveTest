(function(e){function t(t){for(var n,i,u=t[0],c=t[1],d=t[2],s=0,p=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,d||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,u=1;u<o.length;u++){var c=o[u];0!==a[c]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},a={app:0},r=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/liveTest/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var l=c;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"11bc":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("home")],1)},r=[],i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("Proof of Concept:")]),o("p",[e._v("Projektmanagment in Softwareprojektene")]),o("QRCode")],1)},u=[],c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("button",{staticClass:"base-button",on:{click:e.loadCam}},[e._v("Scan QR-Code")]),e.loadedcam?o("div",{staticClass:"qr--code"},[o("qrcode-stream",{on:{decode:e.onDecode}}),e.isLoaded?o("div",{staticClass:"qr--code-loaded"},[o("p",[e._v("Name der Audiodatei : "+e._s(e.audioFileName))])]):e._e()],1):e._e(),e.audioFileName?o("div",{staticClass:"audio--area"},[o("button",{staticClass:"btn-primary",on:{click:e.playAudio}},[e._v("Play Audio")]),o("div",{attrs:{id:"song"}},[o("audio",{attrs:{controls:"",id:"audio"}},[o("source",{attrs:{src:e.audioPathName,type:"audio/mpeg"}})])])]):e._e()])},d=[],l=o("bb6f"),s={components:{QrcodeStream:l["QrcodeStream"]},data:function(){return{isLoaded:!1,audioFileName:"",audioPathName:"",rightAudio:!1,loadedcam:!1,audioFiles:[{name:"",path:""}]}},methods:{onDecode:function(e){e&&(this.isLoaded=!0,this.rightAudio=!0,this.audioFileName=e,this.audioPathName="./src/assets/audio/".concat(e,".mp3"))},loadCam:function(){this.loadedcam=!0},playAudio:function(){var e=document.getElementById("audio");e.play()}}},p=s,f=(o("da59"),o("2877")),m=Object(f["a"])(p,c,d,!1,null,null,null),v=m.exports,h={name:"Home",components:{QRCode:v}},b=h,y=Object(f["a"])(b,i,u,!1,null,null,null),_=y.exports,g={name:"App",components:{Home:_}},j=g,O=(o("034f"),Object(f["a"])(j,a,r,!1,null,null,null)),P=O.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(P)}}).$mount("#app")},"85ec":function(e,t,o){},da59:function(e,t,o){"use strict";o("11bc")}});
//# sourceMappingURL=app.eebcd1a9.js.map