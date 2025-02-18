exports.id = 970;
exports.ids = [970];
exports.modules = {

/***/ 72491:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis,V=x.ShadowRoot&&(x.ShadyCSS===void 0||x.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol(),Y=new WeakMap;let nt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(V&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Y.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Y.set(e,t))}return t}toString(){return this.cssText}};const ut=r=>new nt(typeof r=="string"?r:r+"",void 0,q),pt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new nt(e,r,q)},$t=(r,t)=>{if(V)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=x.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},J=V?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ut(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:gt,defineProperty:_t,getOwnPropertyDescriptor:ft,getOwnPropertyNames:mt,getOwnPropertySymbols:At,getPrototypeOf:yt}=Object,m=globalThis,F=m.trustedTypes,St=F?F.emptyScript:"",W=m.reactiveElementPolyfillSupport,w=(r,t)=>r,H={toAttribute(r,t){switch(t){case Boolean:r=r?St:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},K=(r,t)=>!gt(r,t),Q={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:K};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),m.litPropertyMetadata??(m.litPropertyMetadata=new WeakMap);class v extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Q){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&_t(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=ft(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const a=i==null?void 0:i.call(this);n.call(this,o),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Q}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=yt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,s=[...mt(e),...At(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(J(i))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$E_)==null||e.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $t(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){var n;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:H).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){var n;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:H;this._$Em=i,this[i]=a.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s,i=!1,n){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??K)(i?n:this[t],e))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.C(n,this[n],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$E_)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(e)):this._$ET()}catch(i){throw t=!1,this._$ET(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$E_)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(t){}firstUpdated(t){}}v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[w("elementProperties")]=new Map,v[w("finalized")]=new Map,W==null||W({ReactiveElement:v}),(m.reactiveElementVersions??(m.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,G=U.trustedTypes,Z=G?G.createPolicy("lit-html",{createHTML:r=>r}):void 0,ot="$lit$",f=`lit$${(Math.random()+"").slice(9)}$`,ht="?"+f,vt=`<${ht}>`,S=document,O=()=>S.createComment(""),N=r=>r===null||typeof r!="object"&&typeof r!="function",at=Array.isArray,Et=r=>at(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",D=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,tt=/>/g,A=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),et=/'/g,st=/"/g,ct=/^(?:script|style|textarea|title)$/i,bt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),Ct=bt(1),E=Symbol.for("lit-noChange"),l=Symbol.for("lit-nothing"),it=new WeakMap,y=S.createTreeWalker(S,129);function lt(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Z!==void 0?Z.createHTML(t):t}const wt=(r,t)=>{const e=r.length-1,s=[];let i,n=t===2?"<svg>":"",o=C;for(let a=0;a<e;a++){const h=r[a];let d,u,c=-1,g=0;for(;g<h.length&&(o.lastIndex=g,u=o.exec(h),u!==null);)g=o.lastIndex,o===C?u[1]==="!--"?o=X:u[1]!==void 0?o=tt:u[2]!==void 0?(ct.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=A):u[3]!==void 0&&(o=A):o===A?u[0]===">"?(o=i??C,c=-1):u[1]===void 0?c=-2:(c=o.lastIndex-u[2].length,d=u[1],o=u[3]===void 0?A:u[3]==='"'?st:et):o===st||o===et?o=A:o===X||o===tt?o=C:(o=A,i=void 0);const _=o===A&&r[a+1].startsWith("/>")?" ":"";n+=o===C?h+vt:c>=0?(s.push(d),h.slice(0,c)+ot+h.slice(c)+f+_):h+f+(c===-2?a:_)}return[lt(r,n+(r[e]||"<?>")+(t===2?"</svg>":"")),s]};class R{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const a=t.length-1,h=this.parts,[d,u]=wt(t,e);if(this.el=R.createElement(d,s),y.currentNode=this.el.content,e===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=y.nextNode())!==null&&h.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(ot)){const g=u[o++],_=i.getAttribute(c).split(f),I=/([.?@])?(.*)/.exec(g);h.push({type:1,index:n,name:I[2],strings:_,ctor:I[1]==="."?Pt:I[1]==="?"?Tt:I[1]==="@"?Ot:k}),i.removeAttribute(c)}else c.startsWith(f)&&(h.push({type:6,index:n}),i.removeAttribute(c));if(ct.test(i.tagName)){const c=i.textContent.split(f),g=c.length-1;if(g>0){i.textContent=G?G.emptyScript:"";for(let _=0;_<g;_++)i.append(c[_],O()),y.nextNode(),h.push({type:2,index:++n});i.append(c[g],O())}}}else if(i.nodeType===8)if(i.data===ht)h.push({type:2,index:n});else{let c=-1;for(;(c=i.data.indexOf(f,c+1))!==-1;)h.push({type:7,index:n}),c+=f.length-1}n++}}static createElement(t,e){const s=S.createElement("template");return s.innerHTML=t,s}}function b(r,t,e=r,s){var o,a;if(t===E)return t;let i=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl;const n=N(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=b(r,i._$AS(r,t.values),i,s)),t}let Ut=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??S).importNode(e,!0);y.currentNode=i;let n=y.nextNode(),o=0,a=0,h=s[0];for(;h!==void 0;){if(o===h.index){let d;h.type===2?d=new M(n,n.nextSibling,this,t):h.type===1?d=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(d=new Nt(n,this,t)),this._$AV.push(d),h=s[++a]}o!==(h==null?void 0:h.index)&&(n=y.nextNode(),o++)}return y.currentNode=S,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}};class M{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=l,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),N(t)?t===l||t==null||t===""?(this._$AH!==l&&this._$AR(),this._$AH=l):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Et(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==l&&N(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var n;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=R.createElement(lt(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(e);else{const o=new Ut(i,this),a=o.u(this.options);o.p(e),this.$(a),this._$AH=o}}_$AC(t){let e=it.get(t.strings);return e===void 0&&it.set(t.strings,e=new R(t)),e}T(t){at(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new M(this.k(O()),this.k(O()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=l,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=l}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(n===void 0)t=b(this,t,e,0),o=!N(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{const a=t;let h,d;for(t=n[0],h=0;h<n.length-1;h++)d=b(this,a[s+h],e,h),d===E&&(d=this._$AH[h]),o||(o=!N(d)||d!==this._$AH[h]),d===l?t=l:t!==l&&(t+=(d??"")+n[h+1]),this._$AH[h]=d}o&&!i&&this.O(t)}O(t){t===l?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Pt extends k{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===l?void 0:t}}class Tt extends k{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==l)}}class Ot extends k{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=b(this,t,e,0)??l)===E)return;const s=this._$AH,i=t===l&&s!==l||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==l&&(s===l||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Nt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const z=U.litHtmlPolyfillSupport;z==null||z(R,M),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.1.0");const Rt=(r,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const n=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new M(t.insertBefore(O(),n),n,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let P=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Rt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return E}};var rt;P._$litElement$=!0,P.finalized=!0,(rt=globalThis.litElementHydrateSupport)==null||rt.call(globalThis,{LitElement:P});const B=globalThis.litElementPolyfillSupport;B==null||B({LitElement:P});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:K},xt=(r=It,t,e)=>{const{kind:s,metadata:i}=e;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(e.name,r),s==="accessor"){const{name:o}=e;return{set(a){const h=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,h,r)},init(a){return a!==void 0&&this.C(o,void 0,r),a}}}if(s==="setter"){const{name:o}=e;return function(a){const h=this[o];t.call(this,a),this.requestUpdate(o,h,r)}}throw Error("Unsupported decorator location: "+s)};function $(r){return(t,e)=>typeof e=="object"?xt(r,t,e):((s,i,n)=>{const o=i.hasOwnProperty(n);return i.constructor.createProperty(n,o?{...s,wrapped:!0}:s),o?Object.getOwnPropertyDescriptor(i,n):void 0})(r,t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=r=>r.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Lt=r=>(...t)=>({_$litDirective$:r,values:t});let kt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=(r,t)=>{var s;const e=r._$AN;if(e===void 0)return!1;for(const i of e)(s=i._$AO)==null||s.call(i,t,!1),T(i,t);return!0},L=r=>{let t,e;do{if((t=r._$AM)===void 0)break;e=t._$AN,e.delete(r),r=t}while((e==null?void 0:e.size)===0)},dt=r=>{for(let t;t=r._$AM;r=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(r))break;e.add(r),zt(t)}};function Wt(r){this._$AN!==void 0?(L(this),this._$AM=r,dt(this)):this._$AM=r}function Dt(r,t=!1,e=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(s))for(let n=e;n<s.length;n++)T(s[n],!1),L(s[n]);else s!=null&&(T(s,!1),L(s));else T(this,r)}const zt=r=>{r.type==Gt.CHILD&&(r._$AP??(r._$AP=Dt),r._$AQ??(r._$AQ=Wt))};class Bt extends kt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),dt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,i;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)==null||s.call(this):(i=this.disconnected)==null||i.call(this)),e&&(T(this,t),L(this))}setValue(t){if(Ht(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt=()=>new Vt;class Vt{}const j=new WeakMap,qt=Lt(class extends Bt{render(r){return l}update(r,[t]){var s;const e=t!==this.G;return e&&this.G!==void 0&&this.ot(void 0),(e||this.rt!==this.lt)&&(this.G=t,this.ct=(s=r.options)==null?void 0:s.host,this.ot(this.lt=r.element)),l}ot(r){if(typeof this.G=="function"){const t=this.ct??globalThis;let e=j.get(t);e===void 0&&(e=new WeakMap,j.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ct,void 0),e.set(this.G,r),r!==void 0&&this.G.call(this.ct,r)}else this.G.value=r}get rt(){var r,t;return typeof this.G=="function"?(r=j.get(this.ct??globalThis))==null?void 0:r.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var Kt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,p=(r,t,e,s)=>{for(var i=s>1?void 0:s?Yt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Kt(t,e,i),i};function Jt(r){return customElements.get(r)?t=>t:Mt(r)}exports.GiscusWidget=class extends P{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=jt(),this.messageEventHandler=this.handleMessageEvent.bind(this),this.hasLoaded=!1,this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){var t;return(t=this._iframeRef)==null?void 0:t.value}get _host(){try{return new URL(this.host),this.host}catch{return this.GISCUS_DEFAULT_HOST}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(t){return`[giscus] An error occurred. Error message: "${t}".`}setupSession(){const t=location.href,e=new URL(t),s=localStorage.getItem(this.GISCUS_SESSION_KEY),i=e.searchParams.get("giscus")??"";if(this.__session="",i){localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(i)),this.__session=i,e.searchParams.delete("giscus"),e.hash="",history.replaceState(void 0,document.title,e.toString());return}if(s)try{this.__session=JSON.parse(s)}catch(n){localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(n==null?void 0:n.message)} Session has been cleared.`)}}signOut(){localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",this.update(new Map)}handleMessageEvent(t){if(t.origin!==this._host)return;const{data:e}=t;if(!(typeof e=="object"&&e.giscus))return;if(this.iframeRef&&e.giscus.resizeHeight&&(this.iframeRef.style.height=`${e.giscus.resizeHeight}px`),e.giscus.signOut){console.info("[giscus] User has logged out. Session has been cleared."),this.signOut();return}if(!e.giscus.error)return;const s=e.giscus.error;if(s.includes("Bad credentials")||s.includes("Invalid state value")||s.includes("State has expired")){if(localStorage.getItem(this.GISCUS_SESSION_KEY)!==null){console.warn(`${this._formatError(s)} Session has been cleared.`),this.signOut();return}console.error(`${this._formatError(s)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}if(s.includes("Discussion not found")){console.warn(`[giscus] ${s}. A new discussion will be created if a comment/reaction is submitted.`);return}console.error(`${this._formatError(s)} ${this.ERROR_SUGGESTION}`)}sendMessage(t){var e;!((e=this.iframeRef)!=null&&e.contentWindow)||!this.hasLoaded||this.iframeRef.contentWindow.postMessage({giscus:t},this._host)}updateConfig(){const t={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:this.strict==="1",reactionsEnabled:this.reactionsEnabled==="1",emitMetadata:this.emitMetadata==="1",inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(t)}firstUpdated(){var t;(t=this.iframeRef)==null||t.addEventListener("load",()=>{var e;(e=this.iframeRef)==null||e.classList.remove("loading"),this.hasLoaded=!0,this.updateConfig()})}requestUpdate(t,e,s){if(!this.hasUpdated||t==="host"){super.requestUpdate(t,e,s);return}this.updateConfig()}getMetaContent(t,e=!1){const s=e?`meta[property='og:${t}'],`:"",i=document.querySelector(s+`meta[name='${t}']`);return i?i.content:""}_getCleanedUrl(){const t=new URL(location.href);return t.searchParams.delete("giscus"),t.hash="",t}getTerm(){switch(this.mapping){case"url":return this._getCleanedUrl().toString();case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term??"";case"number":return"";case"pathname":default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return this.mapping==="number"?this.term??"":""}getIframeSrc(){const t=this._getCleanedUrl().toString(),e=`${t}${this.id?"#"+this.id:""}`,s=this.getMetaContent("description",!0),i=this.getMetaContent("giscus:backlink")||t,n={origin:e,session:this.__session,repo:this.repo,repoId:this.repoId??"",category:this.category??"",categoryId:this.categoryId??"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:s,backLink:i},o=this._host,a=this.lang?`/${this.lang}`:"",h=new URLSearchParams(n);return`${o}${a}/widget?${h.toString()}`}render(){return Ct`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${qt(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `}};exports.GiscusWidget.styles=pt`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `;p([$({reflect:!0})],exports.GiscusWidget.prototype,"host",2);p([$({reflect:!0})],exports.GiscusWidget.prototype,"repo",2);p([$({reflect:!0})],exports.GiscusWidget.prototype,"repoId",2);p([$({reflect:!0})],exports.GiscusWidget.prototype,"category",2);p([$({reflect:!0})],exports.GiscusWidget.prototype,"categoryId",2);p([$({reflect:!0})],exports.GiscusWidget.prototype,"mapping",2);p([$({reflect:!0})],exports.GiscusWidget.prototype,"term",2);p([$({reflect:!0})],exports.GiscusWidget.prototype,"strict",2);p([$({reflect:!0})],exports.GiscusWidget.prototype,"reactionsEnabled",2);p([$({reflect:!0})],exports.GiscusWidget.prototype,"emitMetadata",2);p([$({reflect:!0})],exports.GiscusWidget.prototype,"inputPosition",2);p([$({reflect:!0})],exports.GiscusWidget.prototype,"theme",2);p([$({reflect:!0})],exports.GiscusWidget.prototype,"lang",2);p([$({reflect:!0})],exports.GiscusWidget.prototype,"loading",2);exports.GiscusWidget=p([Jt("giscus-widget")],exports.GiscusWidget);


/***/ }),

/***/ 60830:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
const j=__webpack_require__(56786),t=__webpack_require__(18038);function b({id:r,host:s,repo:i,repoId:u,category:n,categoryId:o,mapping:c,term:a,strict:d,reactionsEnabled:f,emitMetadata:l,inputPosition:m,theme:p,lang:g,loading:q}){const[e,x]=t.useState(!1);return t.useEffect(()=>{e||(Promise.resolve().then(()=>__webpack_require__(72491)),x(!0))},[]),e?j.jsx("giscus-widget",{id:r,host:s,repo:i,repoid:u,category:n,categoryid:o,mapping:c,term:a,strict:d,reactionsenabled:f,emitmetadata:l,inputposition:m,theme:p,lang:g,loading:q}):null}module.exports=b;


/***/ }),

/***/ 27815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Bleed_default)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

// src/ui/Bleed.tsx
var Bleed = ({ full, children })=>{
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: `relative mt-6 ${full ? "ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)]" : "-mx-6 md:-mx-8 2xl:-mx-24"}`,
        children
    });
};
var Bleed_default = Bleed;



/***/ }),

/***/ 82226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/hongloc/Desktop/jobs/portfolio/portfolio-blog/node_modules/pliny/ui/BlogNewsletterForm.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 61930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/hongloc/Desktop/jobs/portfolio/portfolio-blog/node_modules/pliny/ui/Pre.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 76416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ TOCInline_default)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

// src/ui/TOCInline.tsx
var TOCInline = ({ toc, indentDepth = 3, fromHeading = 1, toHeading = 6, asDisclosure = false, exclude = "" })=>{
    const re = Array.isArray(exclude) ? new RegExp("^(" + exclude.join("|") + ")$", "i") : new RegExp("^(" + exclude + ")$", "i");
    const filteredToc = toc.filter((heading)=>heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value));
    const tocList = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
        children: filteredToc.map((heading)=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                className: `${heading.depth >= indentDepth && "ml-6"}`,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                    href: heading.url,
                    children: heading.value
                })
            }, heading.value))
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: asDisclosure ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", {
            open: true,
            children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("summary", {
                    className: "ml-6 pt-2 pb-2 text-xl font-bold",
                    children: "Table of Contents"
                }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "ml-6",
                    children: tocList
                })
            ]
        }) : tocList
    });
};
var TOCInline_default = TOCInline;



/***/ }),

/***/ 26719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  p: () => (/* reexport */ formatDate)
});

;// CONCATENATED MODULE: ./node_modules/pliny/chunk-T2LUFWMO.js
// src/utils/formatDate.ts
var formatDate = (date, locale = "en-US")=>{
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    const now = new Date(date).toLocaleDateString(locale, options);
    return now;
};


// EXTERNAL MODULE: ./node_modules/pliny/chunk-4VSLFMH7.js
var chunk_4VSLFMH7 = __webpack_require__(79910);
;// CONCATENATED MODULE: ./node_modules/pliny/utils/formatDate.js




/***/ }),

/***/ 55550:
/***/ (() => {



/***/ }),

/***/ 74135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  HW: () => (/* binding */ Comments)
});

// UNUSED EXPORTS: Disqus, Giscus, Utterances

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./node_modules/pliny/chunk-R66XZDOX.js
"use client"
;


// src/comments/Disqus.tsx
var Disqus = ({ shortname, slug }) => {
  const COMMENTS_ID = "disqus_thread";
  const LoadComments = (0,react_.useCallback)(() => {
    window.disqus_config = function() {
      this.page.url = window.location.href;
      this.page.identifier = slug;
    };
    if (window.DISQUS === void 0) {
      const script = document.createElement("script");
      script.src = "https://" + shortname + ".disqus.com/embed.js";
      script.setAttribute("data-timestamp", +/* @__PURE__ */ new Date());
      script.setAttribute("crossorigin", "anonymous");
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.DISQUS.reset({ reload: true });
    }
  }, [shortname, slug]);
  (0,react_.useEffect)(() => {
    LoadComments();
  }, [LoadComments]);
  return /* @__PURE__ */ (0,jsx_runtime_.jsx)("div", { className: "disqus-frame", id: COMMENTS_ID });
};



// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.js
var dist = __webpack_require__(71072);
// EXTERNAL MODULE: ./node_modules/@giscus/react/dist/index.js
var react_dist = __webpack_require__(60830);
var dist_default = /*#__PURE__*/__webpack_require__.n(react_dist);
;// CONCATENATED MODULE: ./node_modules/@giscus/react/dist/wrapper.mjs


/* harmony default export */ const wrapper = ((dist_default()));
;// CONCATENATED MODULE: ./node_modules/pliny/chunk-VOQEO4FV.js
"use client"
;



// src/comments/Giscus.tsx
var Giscus = ({
  themeURL,
  theme,
  darkTheme,
  repo,
  repositoryId,
  category,
  categoryId,
  reactions,
  metadata,
  inputPosition,
  lang,
  mapping
}) => {
  const { theme: nextTheme, resolvedTheme } = (0,dist/* useTheme */.F)();
  const commentsTheme = themeURL === "" ? nextTheme === "dark" || resolvedTheme === "dark" ? darkTheme : theme : themeURL;
  const COMMENTS_ID = "comments-container";
  return /* @__PURE__ */ (0,jsx_runtime_.jsx)(
    wrapper,
    {
      id: COMMENTS_ID,
      repo,
      repoId: repositoryId,
      category,
      categoryId,
      mapping,
      reactionsEnabled: reactions,
      emitMetadata: metadata,
      inputPosition,
      theme: commentsTheme,
      lang,
      loading: "lazy"
    }
  );
};



;// CONCATENATED MODULE: ./node_modules/pliny/chunk-ZAWHWS54.js
"use client"
;



// src/comments/Utterances.tsx
var Utterances = ({ theme, darkTheme, repo, label, issueTerm }) => {
  const { theme: nextTheme, resolvedTheme } = (0,dist/* useTheme */.F)();
  const commentsTheme = nextTheme === "dark" || resolvedTheme === "dark" ? darkTheme : theme;
  const COMMENTS_ID = "comments-container";
  const LoadComments = (0,react_.useCallback)(() => {
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", repo);
    script.setAttribute("issue-term", issueTerm);
    script.setAttribute("label", label);
    script.setAttribute("theme", commentsTheme);
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;
    const comments = document.getElementById(COMMENTS_ID);
    if (comments)
      comments.appendChild(script);
    return () => {
      const comments2 = document.getElementById(COMMENTS_ID);
      if (comments2)
        comments2.innerHTML = "";
    };
  }, [commentsTheme, issueTerm, label, repo]);
  (0,react_.useEffect)(() => {
    LoadComments();
  }, [LoadComments]);
  return /* @__PURE__ */ (0,jsx_runtime_.jsx)("div", { className: "utterances-frame relative", id: COMMENTS_ID });
};



// EXTERNAL MODULE: ./node_modules/pliny/chunk-4VSLFMH7.js
var chunk_4VSLFMH7 = __webpack_require__(41422);
;// CONCATENATED MODULE: ./node_modules/pliny/comments/index.js









var Comments = ({ commentsConfig, slug }) => {
  switch (commentsConfig.provider) {
    case "giscus":
      return /* @__PURE__ */ (0,jsx_runtime_.jsx)(Giscus, (0,chunk_4VSLFMH7/* __spreadValues */.ih)({}, commentsConfig.giscusConfig));
    case "utterances":
      return /* @__PURE__ */ (0,jsx_runtime_.jsx)(Utterances, (0,chunk_4VSLFMH7/* __spreadValues */.ih)({}, commentsConfig.utterancesConfig));
    case "disqus":
      return /* @__PURE__ */ (0,jsx_runtime_.jsx)(Disqus, (0,chunk_4VSLFMH7/* __spreadValues */.ih)({ slug }, commentsConfig.disqusConfig));
  }
};




/***/ }),

/***/ 73453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogNewsletterForm_default)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
"use client"
;


var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var NewsletterForm = ({
  title = "Subscribe to the newsletter",
  apiUrl = "/api/newsletter"
}) => {
  const inputEl = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [subscribed, setSubscribed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const subscribe = (e) => __async(void 0, null, function* () {
    e.preventDefault();
    const res = yield fetch(apiUrl, {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    });
    const { error: error2 } = yield res.json();
    if (error2) {
      setError(true);
      setMessage("Your e-mail address is invalid or you are already subscribed!");
      return;
    }
    inputEl.current.value = "";
    setError(false);
    setSubscribed(true);
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", { className: "pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100", children: title }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", { className: "flex flex-col sm:flex-row", onSubmit: subscribe, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", { htmlFor: "email-input", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", { className: "sr-only", children: "Email address" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          "input",
          {
            autoComplete: "email",
            className: "focus:ring-primary-600 w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 dark:bg-black",
            id: "email-input",
            name: "email",
            placeholder: subscribed ? "You're subscribed !  \u{1F389}" : "Enter your email",
            ref: inputEl,
            required: true,
            type: "email",
            disabled: subscribed
          }
        )
      ] }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", { className: "mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
        "button",
        {
          className: `bg-primary-500 w-full rounded-md py-2 px-4 font-medium text-white sm:py-0 ${subscribed ? "cursor-default" : "hover:bg-primary-700 dark:hover:bg-primary-400"} focus:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black`,
          type: "submit",
          disabled: subscribed,
          children: subscribed ? "Thank you!" : "Sign up"
        }
      ) })
    ] }),
    error && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", { className: "w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96", children: message })
  ] });
};
var NewsletterForm_default = NewsletterForm;
var BlogNewsletterForm = ({ title, apiUrl }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", { className: "bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NewsletterForm_default, { title, apiUrl }) }) });
var BlogNewsletterForm_default = BlogNewsletterForm;




/***/ }),

/***/ 24941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pre_default)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
"use client"
;


// src/ui/Pre.tsx
var Pre = ({ children }) => {
  const textInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const onEnter = () => {
    setHovered(true);
  };
  const onExit = () => {
    setHovered(false);
    setCopied(false);
  };
  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(textInput.current.textContent);
    setTimeout(() => {
      setCopied(false);
    }, 2e3);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", { ref: textInput, onMouseEnter: onEnter, onMouseLeave: onExit, className: "relative", children: [
    hovered && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
      "button",
      {
        "aria-label": "Copy code",
        className: `absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 ${copied ? "border-green-400 focus:border-green-400 focus:outline-none" : "border-gray-300"}`,
        onClick: onCopy,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            fill: "none",
            className: copied ? "text-green-400" : "text-gray-300",
            children: copied ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              }
            ) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              }
            ) })
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("pre", { children })
  ] });
};
var Pre_default = Pre;




/***/ })

};
;