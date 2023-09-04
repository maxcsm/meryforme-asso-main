"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7722],{7423:(ue,Y,v)=>{v.d(Y,{Uw:()=>z,fo:()=>S});var b=v(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var y=(()=>{return(n=y||(y={})).Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",y;var n})();class e extends Error{constructor(t,r,i){super(t),this.message=t,this.code=r,this.data=i}}const R=n=>{var t,r,i,l,o;const d=n.CapacitorCustomPlatform||null,s=n.Capacitor||{},p=s.Plugins=s.Plugins||{},g=n.CapacitorPlatforms,H=(null===(t=g?.currentPlatform)||void 0===t?void 0:t.getPlatform)||(()=>null!==d?d.name:(n=>{var t,r;return n?.androidBridge?"android":null!==(r=null===(t=n?.webkit)||void 0===t?void 0:t.messageHandlers)&&void 0!==r&&r.bridge?"ios":"web"})(n)),ce=(null===(r=g?.currentPlatform)||void 0===r?void 0:r.isNativePlatform)||(()=>"web"!==H()),fe=(null===(i=g?.currentPlatform)||void 0===i?void 0:i.isPluginAvailable)||(m=>!(!N.get(m)?.platforms.has(H())&&!se(m))),se=(null===(l=g?.currentPlatform)||void 0===l?void 0:l.getPluginHeader)||(m=>{var h;return null===(h=s.PluginHeaders)||void 0===h?void 0:h.find(I=>I.name===m)}),N=new Map,he=(null===(o=g?.currentPlatform)||void 0===o?void 0:o.registerPlugin)||((m,h={})=>{const I=N.get(m);if(I)return console.warn(`Capacitor plugin "${m}" already registered. Cannot register plugins twice.`),I.proxy;const L=H(),$=se(m);let C;const ve=function(){var P=(0,b.Z)(function*(){return!C&&L in h?C=C="function"==typeof h[L]?yield h[L]():h[L]:null!==d&&!C&&"web"in h&&(C=C="function"==typeof h.web?yield h.web():h.web),C});return function(){return P.apply(this,arguments)}}(),X=P=>{let w;const x=(...j)=>{const U=ve().then(_=>{const A=((P,w)=>{var x,j;if(!$){if(P)return null===(j=P[w])||void 0===j?void 0:j.bind(P);throw new e(`"${m}" plugin is not implemented on ${L}`,y.Unimplemented)}{const U=$?.methods.find(_=>w===_.name);if(U)return"promise"===U.rtype?_=>s.nativePromise(m,w.toString(),_):(_,A)=>s.nativeCallback(m,w.toString(),_,A);if(P)return null===(x=P[w])||void 0===x?void 0:x.bind(P)}})(_,P);if(A){const D=A(...j);return w=D?.remove,D}throw new e(`"${m}.${P}()" is not implemented on ${L}`,y.Unimplemented)});return"addListener"===P&&(U.remove=(0,b.Z)(function*(){return w()})),U};return x.toString=()=>`${P.toString()}() { [capacitor code] }`,Object.defineProperty(x,"name",{value:P,writable:!1,configurable:!1}),x},le=X("addListener"),ae=X("removeListener"),we=(P,w)=>{const x=le({eventName:P},w),j=function(){var _=(0,b.Z)(function*(){const A=yield x;ae({eventName:P,callbackId:A},w)});return function(){return _.apply(this,arguments)}}(),U=new Promise(_=>x.then(()=>_({remove:j})));return U.remove=(0,b.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield j()}),U},ee=new Proxy({},{get(P,w){switch(w){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return $?we:le;case"removeListener":return ae;default:return X(w)}}});return p[m]=ee,N.set(m,{name:m,proxy:ee,platforms:new Set([...Object.keys(h),...$?[L]:[]])}),ee});return s.convertFileSrc||(s.convertFileSrc=m=>m),s.getPlatform=H,s.handleError=m=>n.console.error(m),s.isNativePlatform=ce,s.isPluginAvailable=fe,s.pluginMethodNoop=(m,h,I)=>Promise.reject(`${I} does not have an implementation of "${h}".`),s.registerPlugin=he,s.Exception=e,s.DEBUG=!!s.DEBUG,s.isLoggingEnabled=!!s.isLoggingEnabled,s.platform=s.getPlatform(),s.isNative=s.isNativePlatform(),s},M=(n=>n.Capacitor=R(n))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),S=M.registerPlugin;class z{constructor(t){this.listeners={},this.windowListeners={},t&&(console.warn(`Capacitor WebPlugin "${t.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=t)}addListener(t,r){var i=this;this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(r);const o=this.windowListeners[t];o&&!o.registered&&this.addWindowListener(o);const d=function(){var p=(0,b.Z)(function*(){return i.removeListener(t,r)});return function(){return p.apply(this,arguments)}}(),s=Promise.resolve({remove:d});return Object.defineProperty(s,"remove",{value:(p=(0,b.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield d()}),function(){return p.apply(this,arguments)})}),s;var p}removeAllListeners(){var t=this;return(0,b.Z)(function*(){t.listeners={};for(const r in t.windowListeners)t.removeWindowListener(t.windowListeners[r]);t.windowListeners={}})()}notifyListeners(t,r){const i=this.listeners[t];i&&i.forEach(l=>l(r))}hasListeners(t){return!!this.listeners[t].length}registerWindowListener(t,r){this.windowListeners[r]={registered:!1,windowEventName:t,pluginEventName:r,handler:i=>{this.notifyListeners(r,i)}}}unimplemented(t="not implemented"){return new M.Exception(t,y.Unimplemented)}unavailable(t="not available"){return new M.Exception(t,y.Unavailable)}removeListener(t,r){var i=this;return(0,b.Z)(function*(){const l=i.listeners[t];if(!l)return;const o=l.indexOf(r);i.listeners[t].splice(o,1),i.listeners[t].length||i.removeWindowListener(i.windowListeners[t])})()}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}}const B=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),G=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class Q extends z{getCookies(){return(0,b.Z)(function*(){const t=document.cookie,r={};return t.split(";").forEach(i=>{if(i.length<=0)return;let[l,o]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");l=G(l).trim(),o=G(o).trim(),r[l]=o}),r})()}setCookie(t){return(0,b.Z)(function*(){try{const r=B(t.key),i=B(t.value),l=`; expires=${(t.expires||"").replace("expires=","")}`,o=(t.path||"/").replace("path=",""),d=null!=t.url&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${r}=${i||""}${l}; path=${o}; ${d};`}catch(r){return Promise.reject(r)}})()}deleteCookie(t){return(0,b.Z)(function*(){try{document.cookie=`${t.key}=; Max-Age=0`}catch(r){return Promise.reject(r)}})()}clearCookies(){return(0,b.Z)(function*(){try{const t=document.cookie.split(";")||[];for(const r of t)document.cookie=r.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(t){return Promise.reject(t)}})()}clearAllCookies(){var t=this;return(0,b.Z)(function*(){try{yield t.clearCookies()}catch(r){return Promise.reject(r)}})()}}S("CapacitorCookies",{web:()=>new Q});const V=function(){var n=(0,b.Z)(function*(t){return new Promise((r,i)=>{const l=new FileReader;l.onload=()=>{const o=l.result;r(o.indexOf(",")>=0?o.split(",")[1]:o)},l.onerror=o=>i(o),l.readAsDataURL(t)})});return function(r){return n.apply(this,arguments)}}();class a extends z{request(t){return(0,b.Z)(function*(){const r=((n,t={})=>{const r=Object.assign({method:n.method||"GET",headers:n.headers},t),l=((n={})=>{const t=Object.keys(n);return Object.keys(n).map(l=>l.toLocaleLowerCase()).reduce((l,o,d)=>(l[o]=n[t[d]],l),{})})(n.headers)["content-type"]||"";if("string"==typeof n.data)r.body=n.data;else if(l.includes("application/x-www-form-urlencoded")){const o=new URLSearchParams;for(const[d,s]of Object.entries(n.data||{}))o.set(d,s);r.body=o.toString()}else if(l.includes("multipart/form-data")){const o=new FormData;if(n.data instanceof FormData)n.data.forEach((s,p)=>{o.append(p,s)});else for(const s of Object.keys(n.data))o.append(s,n.data[s]);r.body=o;const d=new Headers(r.headers);d.delete("content-type"),r.headers=d}else(l.includes("application/json")||"object"==typeof n.data)&&(r.body=JSON.stringify(n.data));return r})(t,t.webFetchExtra),i=((n,t=!0)=>n?Object.entries(n).reduce((i,l)=>{const[o,d]=l;let s,p;return Array.isArray(d)?(p="",d.forEach(g=>{s=t?encodeURIComponent(g):g,p+=`${o}=${s}&`}),p.slice(0,-1)):(s=t?encodeURIComponent(d):d,p=`${o}=${s}`),`${i}&${p}`},"").substr(1):null)(t.params,t.shouldEncodeUrlParams),l=i?`${t.url}?${i}`:t.url,o=yield fetch(l,r),d=o.headers.get("content-type")||"";let p,g,{responseType:s="text"}=o.ok?t:{};switch(d.includes("application/json")&&(s="json"),s){case"arraybuffer":case"blob":g=yield o.blob(),p=yield V(g);break;case"json":p=yield o.json();break;default:p=yield o.text()}const W={};return o.headers.forEach((H,K)=>{W[K]=H}),{data:p,headers:W,status:o.status,url:o.url}})()}get(t){var r=this;return(0,b.Z)(function*(){return r.request(Object.assign(Object.assign({},t),{method:"GET"}))})()}post(t){var r=this;return(0,b.Z)(function*(){return r.request(Object.assign(Object.assign({},t),{method:"POST"}))})()}put(t){var r=this;return(0,b.Z)(function*(){return r.request(Object.assign(Object.assign({},t),{method:"PUT"}))})()}patch(t){var r=this;return(0,b.Z)(function*(){return r.request(Object.assign(Object.assign({},t),{method:"PATCH"}))})()}delete(t){var r=this;return(0,b.Z)(function*(){return r.request(Object.assign(Object.assign({},t),{method:"DELETE"}))})()}}S("CapacitorHttp",{web:()=>new a})},7722:(ue,Y,v)=>{v.r(Y),v.d(Y,{HomePageModule:()=>Z});var b=v(6895),q=v(433),f=v(5035),T=v(4126),E=v(655);const F=(0,v(7423).fo)("Geolocation",{web:()=>v.e(4561).then(v.bind(v,4561)).then(c=>new c.GeolocationWeb)});var y=v(8407),e=v(8256),J=v(1053),R=v(7330);function re(c,a){1&c&&(e.TgZ(0,"ion-button",11),e._uU(1," Client "),e.qZA())}function M(c,a){1&c&&(e.TgZ(0,"ion-button",11),e._uU(1," Technicien "),e.qZA())}function S(c,a){1&c&&(e.TgZ(0,"ion-button",11),e._uU(1," Admin "),e.qZA())}function ne(c,a){if(1&c&&(e.TgZ(0,"ion-item",5),e.YNc(1,re,2,0,"ion-button",10),e.YNc(2,M,2,0,"ion-button",10),e.YNc(3,S,2,0,"ion-button",10),e.TgZ(4,"ion-label")(5,"b"),e._uU(6),e.qZA(),e._UZ(7,"br"),e._uU(8," entreprise: "),e.TgZ(9,"b"),e._uU(10),e.qZA(),e._UZ(11,"br"),e.TgZ(12,"b"),e._uU(13),e.qZA(),e._UZ(14,"br"),e.TgZ(15,"b"),e._uU(16),e.qZA(),e._UZ(17,"br"),e.TgZ(18,"b"),e._uU(19),e.qZA(),e._UZ(20,"br"),e.TgZ(21,"b"),e._uU(22),e.qZA(),e._UZ(23,"br"),e._uU(24," T\xe9l\xe9phone : "),e.TgZ(25,"b"),e._uU(26),e.qZA(),e._UZ(27,"br"),e._uU(28," E-mail : "),e.TgZ(29,"b"),e._uU(30),e.qZA(),e._UZ(31,"br"),e.qZA()()),2&c){const u=a.$implicit;e.xp6(1),e.Q6J("ngIf","1"==u.role),e.xp6(1),e.Q6J("ngIf","2"==u.role),e.xp6(1),e.Q6J("ngIf","3"==u.role),e.xp6(3),e.hij(" id: ",u.id,""),e.xp6(4),e.hij(" ",u.company,""),e.xp6(3),e.lnq(" ",u.salutation," ",u.firstname," ",u.lastname,""),e.xp6(3),e.hij(" ",u.address," "),e.xp6(3),e.AsE(" ",u.cp," ",u.city,""),e.xp6(3),e.AsE(" ",u.state," ",u.country,""),e.xp6(4),e.hij(" ",u.phone_mobile," "),e.xp6(4),e.hij(" ",u.email," ")}}const oe=function(){return["/customers"]},z=function(){return["/appointements"]},ie=function(){return["/invoices"]};function B(c,a){1&c&&(e.TgZ(0,"ion-row",12)(1,"ion-col",13)(2,"ion-item",14)(3,"ion-button",2),e._UZ(4,"ion-icon",15),e.qZA(),e.TgZ(5,"p")(6,"b"),e._uU(7," Voir les clients "),e.qZA()()()(),e.TgZ(8,"ion-col",16)(9,"ion-item",14)(10,"ion-button",2),e._UZ(11,"ion-icon",17),e.qZA(),e.TgZ(12,"p")(13,"b"),e._uU(14,"Voir les r\xe9servations "),e.qZA()()()(),e.TgZ(15,"ion-col",16)(16,"ion-item",14)(17,"ion-button",2),e._UZ(18,"ion-icon",18),e.qZA(),e.TgZ(19,"p")(20,"b"),e._uU(21," Voir les factures "),e.qZA()()()()()),2&c&&(e.xp6(2),e.Q6J("routerLink",e.DdM(3,oe)),e.xp6(7),e.Q6J("routerLink",e.DdM(4,z)),e.xp6(7),e.Q6J("routerLink",e.DdM(5,ie)))}function G(c,a){if(1&c){const u=e.EpF();e.TgZ(0,"ion-row",19)(1,"ion-col",20)(2,"ion-item")(3,"ion-button",21),e.NdJ("click",function(){e.CHM(u);const t=e.oxw();return e.KtG(t.getPosition())}),e._UZ(4,"ion-icon",22),e.TgZ(5,"b"),e._uU(6," Validez votre localisation "),e.qZA()()()()()}}function Q(c,a){1&c&&(e.TgZ(0,"ion-list",23)(1,"ion-col",24),e._UZ(2,"div",25),e.qZA()())}class k{constructor(a,u,n,t,r,i,l,o,d,s,p,g){Object.defineProperty(this,"navCtrl",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(this,"formBuilder",{enumerable:!0,configurable:!0,writable:!0,value:u}),Object.defineProperty(this,"popoverCtrl",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(this,"alertController",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"menu",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"loadingController",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(this,"redditService",{enumerable:!0,configurable:!0,writable:!0,value:l}),Object.defineProperty(this,"router",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(this,"toastCtrl",{enumerable:!0,configurable:!0,writable:!0,value:d}),Object.defineProperty(this,"loadingCtrl",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(this,"LoadingController",{enumerable:!0,configurable:!0,writable:!0,value:p}),Object.defineProperty(this,"localStore",{enumerable:!0,configurable:!0,writable:!0,value:g}),Object.defineProperty(this,"map",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lat",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lng",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"location",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"locationButton",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"table",{enumerable:!0,configurable:!0,writable:!0,value:"users"}),Object.defineProperty(this,"iduser",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"posts",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"role",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}ngOnInit(){return(0,E.mG)(this,void 0,void 0,function*(){this.iduser=this.localStore.getItem("iduser"),this.role=this.localStore.getItem("role"),this.redditService.postByid(this.table,this.iduser).subscribe(a=>{this.posts=a,console.log(this.posts),null!=a[0].lat||2!=this.role&&3!=this.role?null===a[0].lat||2!=this.role&&3!=this.role?null!==a[0].lat&&1==this.role&&(this.lat=a[0].lat,this.lng=a[0].lng,this.location=!0,setTimeout(()=>{this.leafletMap()},1e3)):(this.lat=a[0].lat,this.lng=a[0].lng,this.location=!0,this.locationButton=!0,setTimeout(()=>{this.leafletMap()},1e3)):(this.locationButton=!0,this.presentAlert())})})}getPosition(){return(0,E.mG)(this,void 0,void 0,function*(){const a=yield this.LoadingController.create({message:"Recherche localisation"});a.present();const u=yield F.getCurrentPosition();console.log("Current position:",u),null!==u.coords.latitude&&(this.lat=u.coords.latitude,this.lng=u.coords.longitude,this.location=!0,this.doSaveUser(),setTimeout(()=>{this.leafletMap()},2e3)),setTimeout(()=>{a.dismiss()},2e3)})}leafletMap(){var a=y.icon({iconUrl:"./assets/icon/marker-icon.png",iconAnchor:[2,32]});this.map=new y.Map("mapId2").setView([this.lat,this.lng],12),y.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",{}).addTo(this.map);const u=y.marker([this.lat,this.lng],{icon:a});this.map.addLayer(u)}doSaveUser(){return(0,E.mG)(this,void 0,void 0,function*(){var a={id:this.id,lat:this.lat,lng:this.lng};console.log(a),this.redditService.update(this.table,this.iduser,a).toPromise().then(u=>{console.log(u),setTimeout(()=>(0,E.mG)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({cssClass:"bg-profile",message:"Mise \xe0 jour de la position",duration:3e3,position:"bottom"})).present()}),400)})})}presentAlert(){return(0,E.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Position",subHeader:"",message:"Vous devez validez votre localisation",buttons:[{text:"Ok",cssClass:"primary",handler:u=>{this.getPosition()}},{text:"Annuler",cssClass:"secondary",handler:u=>{console.log("Confirm Cancel: blah")}}]})).present()})}}Object.defineProperty(k,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(a){return new(a||k)(e.Y36(f.SH),e.Y36(q.qu),e.Y36(f.Dh),e.Y36(f.Br),e.Y36(f._q),e.Y36(f.HT),e.Y36(J.I),e.Y36(T.F0),e.Y36(f.yF),e.Y36(f.HT),e.Y36(f.HT),e.Y36(R.C))}}),Object.defineProperty(k,"\u0275cmp",{enumerable:!0,configurable:!0,writable:!0,value:e.Xpm({type:k,selectors:[["app-home"]],decls:14,vars:4,consts:[["color","secondary"],["slot","start"],["color","primary"],["responsive-sm","",1,"ion-padding"],["sizeLg","9","sizeMd","9","sizeXs","12"],["lines","none"],["lines","none",4,"ngFor","ngForOf"],["style","padding-top:20px;",4,"ngIf"],["style","padding-top:20px;","style","display: none;",4,"ngIf"],["lines","none","style","margin-top: 20px;",4,"ngIf"],["color","medium","slot","end","size","small","shape","round",4,"ngIf"],["color","medium","slot","end","size","small","shape","round"],[2,"padding-top","20px"],["col-4","","col-md-4","",2,"text-align","center"],[3,"routerLink"],["name","person-outline"],["col-4","","col-md-4","",1,"ion-text-center"],["name","calendar-outline"],["name","document-outline"],[2,"display","none"],["col-12","","col-md-12","",1,"ion-text-center"],["color","danger",3,"click"],["name","navigate-circle-outline"],["lines","none",2,"margin-top","20px"],["sizeLg","12","sizeMd","12","sizeXs","12"],["id","mapId2",2,"width","100%","height","300px"]],template:function(a,u){1&a&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e._UZ(3,"ion-menu-button",2),e.qZA(),e.TgZ(4,"ion-title",2),e._uU(5," Home "),e.qZA()()(),e.TgZ(6,"ion-content",3)(7,"ion-grid")(8,"ion-col",4)(9,"ion-list",5),e.YNc(10,ne,32,15,"ion-item",6),e.qZA()(),e.YNc(11,B,22,6,"ion-row",7),e.YNc(12,G,7,0,"ion-row",8),e.YNc(13,Q,3,0,"ion-list",9),e.qZA()()),2&a&&(e.xp6(10),e.Q6J("ngForOf",u.posts),e.xp6(1),e.Q6J("ngIf",3==u.role),e.xp6(1),e.Q6J("ngIf",u.locationButton),e.xp6(1),e.Q6J("ngIf",u.location))},dependencies:[b.sg,b.O5,f.YG,f.Sm,f.wI,f.W2,f.jY,f.Gu,f.gu,f.Ie,f.Q$,f.q_,f.fG,f.Nd,f.wd,f.sr,f.YI,T.rH],styles:["b[_ngcontent-%COMP%]{font-weight:500}p[_ngcontent-%COMP%]{padding:0 40px;font-size:14px;line-height:1.5;color:var(--ion-color-step-600, #f8f8f8)}p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:var(--ion-text-color, #ffffff)}#cercle1[_ngcontent-%COMP%]{text-align:center;font-size:25px;color:#009688;padding:auto}#cercle2[_ngcontent-%COMP%]{text-align:center;font-size:25px;color:#00bcd4}#cercle3[_ngcontent-%COMP%]{border:9px solid #E52364;font-size:25px;color:#e52364}#cercle4[_ngcontent-%COMP%]{border:9px solid #ffd31a;font-size:45px;color:#ffd31a}.text-cercle[_ngcontent-%COMP%]{padding:15% 20% 2%;font-weight:700}.text-cercle-subtitle[_ngcontent-%COMP%]{padding:2% 20% 30%;font-size:17px;font-weight:700;color:#fbfbfb}ion-item-divider[_ngcontent-%COMP%]{height:100px;border-top-left-radius:10px;border-top-right-radius:10px;background-color:#d0d0d0}#editslider[_ngcontent-%COMP%]{display:none}#slide-cover[_ngcontent-%COMP%]:hover   \\ #editslider[_ngcontent-%COMP%]{display:inline-block}.showme[_ngcontent-%COMP%]{display:none}.showhim[_ngcontent-%COMP%]:hover   .showme[_ngcontent-%COMP%]{display:block}.divider-blue[_ngcontent-%COMP%]{height:100px;border-radius:10px;background-color:#00bcd4;padding-top:20px;text-align:center}.list-md[_ngcontent-%COMP%]{padding-top:20px;border-radius:10px;box-shadow:1px 1px 1px 2px #d7d7d7}.selectitem[_ngcontent-%COMP%]{--border-top-width: 2px;--border-end-width: 3px;--border-bottom-width: 2px;--border-start-width: 6px;--inner-border-width: 0;--border-width: var(--border-top-width) var(--border-end-width) var(--border-bottom-width) var(--border-start-width);--border-color: rgb(63, 187, 59)}ion-col[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{border-radius:10px}ion-col[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .roundedInput[_ngcontent-%COMP%]{--border-color: gray;--border-radius: 5px;--border-width: 2px;--box-shadow: 2px gray;--highlight-height: 0;--background: #f8f9fa;padding-right:10px}"]})});const V=[{path:"",component:k}];class O{}Object.defineProperty(O,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(a){return new(a||O)}}),Object.defineProperty(O,"\u0275mod",{enumerable:!0,configurable:!0,writable:!0,value:e.oAB({type:O})}),Object.defineProperty(O,"\u0275inj",{enumerable:!0,configurable:!0,writable:!0,value:e.cJS({imports:[T.Bz.forChild(V),T.Bz]})});class Z{}Object.defineProperty(Z,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(a){return new(a||Z)}}),Object.defineProperty(Z,"\u0275mod",{enumerable:!0,configurable:!0,writable:!0,value:e.oAB({type:Z})}),Object.defineProperty(Z,"\u0275inj",{enumerable:!0,configurable:!0,writable:!0,value:e.cJS({imports:[b.ez,q.u5,f.Pc,O]})})}}]);