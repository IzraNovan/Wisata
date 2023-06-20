(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const k of f)if(k.type==="childList")for(const b of k.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&u(b)}).observe(document,{childList:!0,subtree:!0});function l(f){const k={};return f.integrity&&(k.integrity=f.integrity),f.referrerPolicy&&(k.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?k.credentials="include":f.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function u(f){if(f.ep)return;f.ep=!0;const k=l(f);fetch(f.href,k)}})();var En=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _w(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var F2={exports:{}},rp={},V2={exports:{}},wt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ju=Symbol.for("react.element"),AB=Symbol.for("react.portal"),CB=Symbol.for("react.fragment"),xB=Symbol.for("react.strict_mode"),EB=Symbol.for("react.profiler"),SB=Symbol.for("react.provider"),DB=Symbol.for("react.context"),TB=Symbol.for("react.forward_ref"),MB=Symbol.for("react.suspense"),IB=Symbol.for("react.memo"),PB=Symbol.for("react.lazy"),Y1=Symbol.iterator;function NB(i){return i===null||typeof i!="object"?null:(i=Y1&&i[Y1]||i["@@iterator"],typeof i=="function"?i:null)}var U2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H2=Object.assign,W2={};function gd(i,s,l){this.props=i,this.context=s,this.refs=W2,this.updater=l||U2}gd.prototype.isReactComponent={};gd.prototype.setState=function(i,s){if(typeof i!="object"&&typeof i!="function"&&i!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,i,s,"setState")};gd.prototype.forceUpdate=function(i){this.updater.enqueueForceUpdate(this,i,"forceUpdate")};function Z2(){}Z2.prototype=gd.prototype;function vw(i,s,l){this.props=i,this.context=s,this.refs=W2,this.updater=l||U2}var yw=vw.prototype=new Z2;yw.constructor=vw;H2(yw,gd.prototype);yw.isPureReactComponent=!0;var Q1=Array.isArray,q2=Object.prototype.hasOwnProperty,Aw={current:null},G2={key:!0,ref:!0,__self:!0,__source:!0};function K2(i,s,l){var u,f={},k=null,b=null;if(s!=null)for(u in s.ref!==void 0&&(b=s.ref),s.key!==void 0&&(k=""+s.key),s)q2.call(s,u)&&!G2.hasOwnProperty(u)&&(f[u]=s[u]);var A=arguments.length-2;if(A===1)f.children=l;else if(1<A){for(var v=Array(A),C=0;C<A;C++)v[C]=arguments[C+2];f.children=v}if(i&&i.defaultProps)for(u in A=i.defaultProps,A)f[u]===void 0&&(f[u]=A[u]);return{$$typeof:ju,type:i,key:k,ref:b,props:f,_owner:Aw.current}}function LB(i,s){return{$$typeof:ju,type:i.type,key:s,ref:i.ref,props:i.props,_owner:i._owner}}function Cw(i){return typeof i=="object"&&i!==null&&i.$$typeof===ju}function BB(i){var s={"=":"=0",":":"=2"};return"$"+i.replace(/[=:]/g,function(l){return s[l]})}var $1=/\/+/g;function Ag(i,s){return typeof i=="object"&&i!==null&&i.key!=null?BB(""+i.key):s.toString(36)}function of(i,s,l,u,f){var k=typeof i;(k==="undefined"||k==="boolean")&&(i=null);var b=!1;if(i===null)b=!0;else switch(k){case"string":case"number":b=!0;break;case"object":switch(i.$$typeof){case ju:case AB:b=!0}}if(b)return b=i,f=f(b),i=u===""?"."+Ag(b,0):u,Q1(f)?(l="",i!=null&&(l=i.replace($1,"$&/")+"/"),of(f,s,l,"",function(C){return C})):f!=null&&(Cw(f)&&(f=LB(f,l+(!f.key||b&&b.key===f.key?"":(""+f.key).replace($1,"$&/")+"/")+i)),s.push(f)),1;if(b=0,u=u===""?".":u+":",Q1(i))for(var A=0;A<i.length;A++){k=i[A];var v=u+Ag(k,A);b+=of(k,s,l,v,f)}else if(v=NB(i),typeof v=="function")for(i=v.call(i),A=0;!(k=i.next()).done;)k=k.value,v=u+Ag(k,A++),b+=of(k,s,l,v,f);else if(k==="object")throw s=String(i),Error("Objects are not valid as a React child (found: "+(s==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":s)+"). If you meant to render a collection of children, use an array instead.");return b}function jh(i,s,l){if(i==null)return i;var u=[],f=0;return of(i,u,"","",function(k){return s.call(l,k,f++)}),u}function OB(i){if(i._status===-1){var s=i._result;s=s(),s.then(function(l){(i._status===0||i._status===-1)&&(i._status=1,i._result=l)},function(l){(i._status===0||i._status===-1)&&(i._status=2,i._result=l)}),i._status===-1&&(i._status=0,i._result=s)}if(i._status===1)return i._result.default;throw i._result}var $i={current:null},rf={transition:null},zB={ReactCurrentDispatcher:$i,ReactCurrentBatchConfig:rf,ReactCurrentOwner:Aw};wt.Children={map:jh,forEach:function(i,s,l){jh(i,function(){s.apply(this,arguments)},l)},count:function(i){var s=0;return jh(i,function(){s++}),s},toArray:function(i){return jh(i,function(s){return s})||[]},only:function(i){if(!Cw(i))throw Error("React.Children.only expected to receive a single React element child.");return i}};wt.Component=gd;wt.Fragment=CB;wt.Profiler=EB;wt.PureComponent=vw;wt.StrictMode=xB;wt.Suspense=MB;wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zB;wt.cloneElement=function(i,s,l){if(i==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+i+".");var u=H2({},i.props),f=i.key,k=i.ref,b=i._owner;if(s!=null){if(s.ref!==void 0&&(k=s.ref,b=Aw.current),s.key!==void 0&&(f=""+s.key),i.type&&i.type.defaultProps)var A=i.type.defaultProps;for(v in s)q2.call(s,v)&&!G2.hasOwnProperty(v)&&(u[v]=s[v]===void 0&&A!==void 0?A[v]:s[v])}var v=arguments.length-2;if(v===1)u.children=l;else if(1<v){A=Array(v);for(var C=0;C<v;C++)A[C]=arguments[C+2];u.children=A}return{$$typeof:ju,type:i.type,key:f,ref:k,props:u,_owner:b}};wt.createContext=function(i){return i={$$typeof:DB,_currentValue:i,_currentValue2:i,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},i.Provider={$$typeof:SB,_context:i},i.Consumer=i};wt.createElement=K2;wt.createFactory=function(i){var s=K2.bind(null,i);return s.type=i,s};wt.createRef=function(){return{current:null}};wt.forwardRef=function(i){return{$$typeof:TB,render:i}};wt.isValidElement=Cw;wt.lazy=function(i){return{$$typeof:PB,_payload:{_status:-1,_result:i},_init:OB}};wt.memo=function(i,s){return{$$typeof:IB,type:i,compare:s===void 0?null:s}};wt.startTransition=function(i){var s=rf.transition;rf.transition={};try{i()}finally{rf.transition=s}};wt.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};wt.useCallback=function(i,s){return $i.current.useCallback(i,s)};wt.useContext=function(i){return $i.current.useContext(i)};wt.useDebugValue=function(){};wt.useDeferredValue=function(i){return $i.current.useDeferredValue(i)};wt.useEffect=function(i,s){return $i.current.useEffect(i,s)};wt.useId=function(){return $i.current.useId()};wt.useImperativeHandle=function(i,s,l){return $i.current.useImperativeHandle(i,s,l)};wt.useInsertionEffect=function(i,s){return $i.current.useInsertionEffect(i,s)};wt.useLayoutEffect=function(i,s){return $i.current.useLayoutEffect(i,s)};wt.useMemo=function(i,s){return $i.current.useMemo(i,s)};wt.useReducer=function(i,s,l){return $i.current.useReducer(i,s,l)};wt.useRef=function(i){return $i.current.useRef(i)};wt.useState=function(i){return $i.current.useState(i)};wt.useSyncExternalStore=function(i,s,l){return $i.current.useSyncExternalStore(i,s,l)};wt.useTransition=function(){return $i.current.useTransition()};wt.version="18.2.0";V2.exports=wt;var ne=V2.exports;const Xn=_w(ne);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jB=ne,RB=Symbol.for("react.element"),FB=Symbol.for("react.fragment"),VB=Object.prototype.hasOwnProperty,UB=jB.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,HB={key:!0,ref:!0,__self:!0,__source:!0};function Y2(i,s,l){var u,f={},k=null,b=null;l!==void 0&&(k=""+l),s.key!==void 0&&(k=""+s.key),s.ref!==void 0&&(b=s.ref);for(u in s)VB.call(s,u)&&!HB.hasOwnProperty(u)&&(f[u]=s[u]);if(i&&i.defaultProps)for(u in s=i.defaultProps,s)f[u]===void 0&&(f[u]=s[u]);return{$$typeof:RB,type:i,key:k,ref:b,props:f,_owner:UB.current}}rp.Fragment=FB;rp.jsx=Y2;rp.jsxs=Y2;F2.exports=rp;var Y=F2.exports,ak={},Q2={exports:{}},Zo={},$2={exports:{}},J2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(i){function s(de,Le){var ge=de.length;de.push(Le);e:for(;0<ge;){var Ze=ge-1>>>1,Xe=de[Ze];if(0<f(Xe,Le))de[Ze]=Le,de[ge]=Xe,ge=Ze;else break e}}function l(de){return de.length===0?null:de[0]}function u(de){if(de.length===0)return null;var Le=de[0],ge=de.pop();if(ge!==Le){de[0]=ge;e:for(var Ze=0,Xe=de.length,It=Xe>>>1;Ze<It;){var dt=2*(Ze+1)-1,rt=de[dt],qe=dt+1,Qt=de[qe];if(0>f(rt,ge))qe<Xe&&0>f(Qt,rt)?(de[Ze]=Qt,de[qe]=ge,Ze=qe):(de[Ze]=rt,de[dt]=ge,Ze=dt);else if(qe<Xe&&0>f(Qt,ge))de[Ze]=Qt,de[qe]=ge,Ze=qe;else break e}}return Le}function f(de,Le){var ge=de.sortIndex-Le.sortIndex;return ge!==0?ge:de.id-Le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var k=performance;i.unstable_now=function(){return k.now()}}else{var b=Date,A=b.now();i.unstable_now=function(){return b.now()-A}}var v=[],C=[],B=1,M=null,D=3,N=!1,j=!1,H=!1,Q=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(de){for(var Le=l(C);Le!==null;){if(Le.callback===null)u(C);else if(Le.startTime<=de)u(C),Le.sortIndex=Le.expirationTime,s(v,Le);else break;Le=l(C)}}function te(de){if(H=!1,Z(de),!j)if(l(v)!==null)j=!0,it(se);else{var Le=l(C);Le!==null&&bt(te,Le.startTime-de)}}function se(de,Le){j=!1,H&&(H=!1,q(G),G=-1),N=!0;var ge=D;try{for(Z(Le),M=l(v);M!==null&&(!(M.expirationTime>Le)||de&&!Ie());){var Ze=M.callback;if(typeof Ze=="function"){M.callback=null,D=M.priorityLevel;var Xe=Ze(M.expirationTime<=Le);Le=i.unstable_now(),typeof Xe=="function"?M.callback=Xe:M===l(v)&&u(v),Z(Le)}else u(v);M=l(v)}if(M!==null)var It=!0;else{var dt=l(C);dt!==null&&bt(te,dt.startTime-Le),It=!1}return It}finally{M=null,D=ge,N=!1}}var pe=!1,le=null,G=-1,ce=5,be=-1;function Ie(){return!(i.unstable_now()-be<ce)}function Me(){if(le!==null){var de=i.unstable_now();be=de;var Le=!0;try{Le=le(!0,de)}finally{Le?Ne():(pe=!1,le=null)}}else pe=!1}var Ne;if(typeof V=="function")Ne=function(){V(Me)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,vt=Ye.port2;Ye.port1.onmessage=Me,Ne=function(){vt.postMessage(null)}}else Ne=function(){Q(Me,0)};function it(de){le=de,pe||(pe=!0,Ne())}function bt(de,Le){G=Q(function(){de(i.unstable_now())},Le)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(de){de.callback=null},i.unstable_continueExecution=function(){j||N||(j=!0,it(se))},i.unstable_forceFrameRate=function(de){0>de||125<de?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<de?Math.floor(1e3/de):5},i.unstable_getCurrentPriorityLevel=function(){return D},i.unstable_getFirstCallbackNode=function(){return l(v)},i.unstable_next=function(de){switch(D){case 1:case 2:case 3:var Le=3;break;default:Le=D}var ge=D;D=Le;try{return de()}finally{D=ge}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(de,Le){switch(de){case 1:case 2:case 3:case 4:case 5:break;default:de=3}var ge=D;D=de;try{return Le()}finally{D=ge}},i.unstable_scheduleCallback=function(de,Le,ge){var Ze=i.unstable_now();switch(typeof ge=="object"&&ge!==null?(ge=ge.delay,ge=typeof ge=="number"&&0<ge?Ze+ge:Ze):ge=Ze,de){case 1:var Xe=-1;break;case 2:Xe=250;break;case 5:Xe=1073741823;break;case 4:Xe=1e4;break;default:Xe=5e3}return Xe=ge+Xe,de={id:B++,callback:Le,priorityLevel:de,startTime:ge,expirationTime:Xe,sortIndex:-1},ge>Ze?(de.sortIndex=ge,s(C,de),l(v)===null&&de===l(C)&&(H?(q(G),G=-1):H=!0,bt(te,ge-Ze))):(de.sortIndex=Xe,s(v,de),j||N||(j=!0,it(se))),de},i.unstable_shouldYield=Ie,i.unstable_wrapCallback=function(de){var Le=D;return function(){var ge=D;D=Le;try{return de.apply(this,arguments)}finally{D=ge}}}})(J2);$2.exports=J2;var WB=$2.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X2=ne,Wo=WB;function Se(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var eE=new Set,wu={};function uc(i,s){ld(i,s),ld(i+"Capture",s)}function ld(i,s){for(wu[i]=s,i=0;i<s.length;i++)eE.add(s[i])}var ba=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lk=Object.prototype.hasOwnProperty,ZB=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,J1={},X1={};function qB(i){return lk.call(X1,i)?!0:lk.call(J1,i)?!1:ZB.test(i)?X1[i]=!0:(J1[i]=!0,!1)}function GB(i,s,l,u){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return u?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function KB(i,s,l,u){if(s===null||typeof s>"u"||GB(i,s,l,u))return!0;if(u)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function Ji(i,s,l,u,f,k,b){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=k,this.removeEmptyString=b}var fi={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){fi[i]=new Ji(i,0,!1,i,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];fi[s]=new Ji(s,1,!1,i[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(i){fi[i]=new Ji(i,2,!1,i.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){fi[i]=new Ji(i,2,!1,i,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){fi[i]=new Ji(i,3,!1,i.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(i){fi[i]=new Ji(i,3,!0,i,null,!1,!1)});["capture","download"].forEach(function(i){fi[i]=new Ji(i,4,!1,i,null,!1,!1)});["cols","rows","size","span"].forEach(function(i){fi[i]=new Ji(i,6,!1,i,null,!1,!1)});["rowSpan","start"].forEach(function(i){fi[i]=new Ji(i,5,!1,i.toLowerCase(),null,!1,!1)});var xw=/[\-:]([a-z])/g;function Ew(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(xw,Ew);fi[s]=new Ji(s,1,!1,i,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(xw,Ew);fi[s]=new Ji(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(xw,Ew);fi[s]=new Ji(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(i){fi[i]=new Ji(i,1,!1,i.toLowerCase(),null,!1,!1)});fi.xlinkHref=new Ji("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(i){fi[i]=new Ji(i,1,!1,i.toLowerCase(),null,!0,!0)});function Sw(i,s,l,u){var f=fi.hasOwnProperty(s)?fi[s]:null;(f!==null?f.type!==0:u||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(KB(s,l,f,u)&&(l=null),u||f===null?qB(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):f.mustUseProperty?i[f.propertyName]=l===null?f.type===3?!1:"":l:(s=f.attributeName,u=f.attributeNamespace,l===null?i.removeAttribute(s):(f=f.type,l=f===3||f===4&&l===!0?"":""+l,u?i.setAttributeNS(u,s,l):i.setAttribute(s,l))))}var Ca=X2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Rh=Symbol.for("react.element"),Fc=Symbol.for("react.portal"),Vc=Symbol.for("react.fragment"),Dw=Symbol.for("react.strict_mode"),ck=Symbol.for("react.profiler"),tE=Symbol.for("react.provider"),nE=Symbol.for("react.context"),Tw=Symbol.for("react.forward_ref"),dk=Symbol.for("react.suspense"),uk=Symbol.for("react.suspense_list"),Mw=Symbol.for("react.memo"),$a=Symbol.for("react.lazy"),iE=Symbol.for("react.offscreen"),ex=Symbol.iterator;function Yd(i){return i===null||typeof i!="object"?null:(i=ex&&i[ex]||i["@@iterator"],typeof i=="function"?i:null)}var hn=Object.assign,Cg;function ru(i){if(Cg===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);Cg=s&&s[1]||""}return`
`+Cg+i}var xg=!1;function Eg(i,s){if(!i||xg)return"";xg=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(C){var u=C}Reflect.construct(i,[],s)}else{try{s.call()}catch(C){u=C}i.call(s.prototype)}else{try{throw Error()}catch(C){u=C}i()}}catch(C){if(C&&u&&typeof C.stack=="string"){for(var f=C.stack.split(`
`),k=u.stack.split(`
`),b=f.length-1,A=k.length-1;1<=b&&0<=A&&f[b]!==k[A];)A--;for(;1<=b&&0<=A;b--,A--)if(f[b]!==k[A]){if(b!==1||A!==1)do if(b--,A--,0>A||f[b]!==k[A]){var v=`
`+f[b].replace(" at new "," at ");return i.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",i.displayName)),v}while(1<=b&&0<=A);break}}}finally{xg=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?ru(i):""}function YB(i){switch(i.tag){case 5:return ru(i.type);case 16:return ru("Lazy");case 13:return ru("Suspense");case 19:return ru("SuspenseList");case 0:case 2:case 15:return i=Eg(i.type,!1),i;case 11:return i=Eg(i.type.render,!1),i;case 1:return i=Eg(i.type,!0),i;default:return""}}function hk(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case Vc:return"Fragment";case Fc:return"Portal";case ck:return"Profiler";case Dw:return"StrictMode";case dk:return"Suspense";case uk:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case nE:return(i.displayName||"Context")+".Consumer";case tE:return(i._context.displayName||"Context")+".Provider";case Tw:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Mw:return s=i.displayName||null,s!==null?s:hk(i.type)||"Memo";case $a:s=i._payload,i=i._init;try{return hk(i(s))}catch{}}return null}function QB(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hk(s);case 8:return s===Dw?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function kl(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function oE(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function $B(i){var s=oE(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),u=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,k=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return f.call(this)},set:function(b){u=""+b,k.call(this,b)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(b){u=""+b},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Fh(i){i._valueTracker||(i._valueTracker=$B(i))}function rE(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),u="";return i&&(u=oE(i)?i.checked?"true":"false":i.value),i=u,i!==l?(s.setValue(i),!0):!1}function Cf(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function fk(i,s){var l=s.checked;return hn({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function tx(i,s){var l=s.defaultValue==null?"":s.defaultValue,u=s.checked!=null?s.checked:s.defaultChecked;l=kl(s.value!=null?s.value:l),i._wrapperState={initialChecked:u,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function sE(i,s){s=s.checked,s!=null&&Sw(i,"checked",s,!1)}function pk(i,s){sE(i,s);var l=kl(s.value),u=s.type;if(l!=null)u==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(u==="submit"||u==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?mk(i,s.type,l):s.hasOwnProperty("defaultValue")&&mk(i,s.type,kl(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function nx(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var u=s.type;if(!(u!=="submit"&&u!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function mk(i,s,l){(s!=="number"||Cf(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var su=Array.isArray;function Xc(i,s,l,u){if(i=i.options,s){s={};for(var f=0;f<l.length;f++)s["$"+l[f]]=!0;for(l=0;l<i.length;l++)f=s.hasOwnProperty("$"+i[l].value),i[l].selected!==f&&(i[l].selected=f),f&&u&&(i[l].defaultSelected=!0)}else{for(l=""+kl(l),s=null,f=0;f<i.length;f++){if(i[f].value===l){i[f].selected=!0,u&&(i[f].defaultSelected=!0);return}s!==null||i[f].disabled||(s=i[f])}s!==null&&(s.selected=!0)}}function gk(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(Se(91));return hn({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function ix(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(Se(92));if(su(l)){if(1<l.length)throw Error(Se(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:kl(l)}}function aE(i,s){var l=kl(s.value),u=kl(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),u!=null&&(i.defaultValue=""+u)}function ox(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function lE(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kk(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?lE(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Vh,cE=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,u,f){MSApp.execUnsafeLocalFunction(function(){return i(s,l,u,f)})}:i}(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Vh=Vh||document.createElement("div"),Vh.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Vh.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function bu(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var cu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},JB=["Webkit","ms","Moz","O"];Object.keys(cu).forEach(function(i){JB.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),cu[s]=cu[i]})});function dE(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||cu.hasOwnProperty(i)&&cu[i]?(""+s).trim():s+"px"}function uE(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var u=l.indexOf("--")===0,f=dE(l,s[l],u);l==="float"&&(l="cssFloat"),u?i.setProperty(l,f):i[l]=f}}var XB=hn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wk(i,s){if(s){if(XB[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(Se(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(Se(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(Se(61))}if(s.style!=null&&typeof s.style!="object")throw Error(Se(62))}}function bk(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _k=null;function Iw(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var vk=null,ed=null,td=null;function rx(i){if(i=Vu(i)){if(typeof vk!="function")throw Error(Se(280));var s=i.stateNode;s&&(s=dp(s),vk(i.stateNode,i.type,s))}}function hE(i){ed?td?td.push(i):td=[i]:ed=i}function fE(){if(ed){var i=ed,s=td;if(td=ed=null,rx(i),s)for(i=0;i<s.length;i++)rx(s[i])}}function pE(i,s){return i(s)}function mE(){}var Sg=!1;function gE(i,s,l){if(Sg)return i(s,l);Sg=!0;try{return pE(i,s,l)}finally{Sg=!1,(ed!==null||td!==null)&&(mE(),fE())}}function _u(i,s){var l=i.stateNode;if(l===null)return null;var u=dp(l);if(u===null)return null;l=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(Se(231,s,typeof l));return l}var yk=!1;if(ba)try{var Qd={};Object.defineProperty(Qd,"passive",{get:function(){yk=!0}}),window.addEventListener("test",Qd,Qd),window.removeEventListener("test",Qd,Qd)}catch{yk=!1}function eO(i,s,l,u,f,k,b,A,v){var C=Array.prototype.slice.call(arguments,3);try{s.apply(l,C)}catch(B){this.onError(B)}}var du=!1,xf=null,Ef=!1,Ak=null,tO={onError:function(i){du=!0,xf=i}};function nO(i,s,l,u,f,k,b,A,v){du=!1,xf=null,eO.apply(tO,arguments)}function iO(i,s,l,u,f,k,b,A,v){if(nO.apply(this,arguments),du){if(du){var C=xf;du=!1,xf=null}else throw Error(Se(198));Ef||(Ef=!0,Ak=C)}}function hc(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,s.flags&4098&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function kE(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function sx(i){if(hc(i)!==i)throw Error(Se(188))}function oO(i){var s=i.alternate;if(!s){if(s=hc(i),s===null)throw Error(Se(188));return s!==i?null:i}for(var l=i,u=s;;){var f=l.return;if(f===null)break;var k=f.alternate;if(k===null){if(u=f.return,u!==null){l=u;continue}break}if(f.child===k.child){for(k=f.child;k;){if(k===l)return sx(f),i;if(k===u)return sx(f),s;k=k.sibling}throw Error(Se(188))}if(l.return!==u.return)l=f,u=k;else{for(var b=!1,A=f.child;A;){if(A===l){b=!0,l=f,u=k;break}if(A===u){b=!0,u=f,l=k;break}A=A.sibling}if(!b){for(A=k.child;A;){if(A===l){b=!0,l=k,u=f;break}if(A===u){b=!0,u=k,l=f;break}A=A.sibling}if(!b)throw Error(Se(189))}}if(l.alternate!==u)throw Error(Se(190))}if(l.tag!==3)throw Error(Se(188));return l.stateNode.current===l?i:s}function wE(i){return i=oO(i),i!==null?bE(i):null}function bE(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=bE(i);if(s!==null)return s;i=i.sibling}return null}var _E=Wo.unstable_scheduleCallback,ax=Wo.unstable_cancelCallback,rO=Wo.unstable_shouldYield,sO=Wo.unstable_requestPaint,Sn=Wo.unstable_now,aO=Wo.unstable_getCurrentPriorityLevel,Pw=Wo.unstable_ImmediatePriority,vE=Wo.unstable_UserBlockingPriority,Sf=Wo.unstable_NormalPriority,lO=Wo.unstable_LowPriority,yE=Wo.unstable_IdlePriority,sp=null,Bs=null;function cO(i){if(Bs&&typeof Bs.onCommitFiberRoot=="function")try{Bs.onCommitFiberRoot(sp,i,void 0,(i.current.flags&128)===128)}catch{}}var $r=Math.clz32?Math.clz32:hO,dO=Math.log,uO=Math.LN2;function hO(i){return i>>>=0,i===0?32:31-(dO(i)/uO|0)|0}var Uh=64,Hh=4194304;function au(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Df(i,s){var l=i.pendingLanes;if(l===0)return 0;var u=0,f=i.suspendedLanes,k=i.pingedLanes,b=l&268435455;if(b!==0){var A=b&~f;A!==0?u=au(A):(k&=b,k!==0&&(u=au(k)))}else b=l&~f,b!==0?u=au(b):k!==0&&(u=au(k));if(u===0)return 0;if(s!==0&&s!==u&&!(s&f)&&(f=u&-u,k=s&-s,f>=k||f===16&&(k&4194240)!==0))return s;if(u&4&&(u|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=u;0<s;)l=31-$r(s),f=1<<l,u|=i[l],s&=~f;return u}function fO(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pO(i,s){for(var l=i.suspendedLanes,u=i.pingedLanes,f=i.expirationTimes,k=i.pendingLanes;0<k;){var b=31-$r(k),A=1<<b,v=f[b];v===-1?(!(A&l)||A&u)&&(f[b]=fO(A,s)):v<=s&&(i.expiredLanes|=A),k&=~A}}function Ck(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function AE(){var i=Uh;return Uh<<=1,!(Uh&4194240)&&(Uh=64),i}function Dg(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function Ru(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-$r(s),i[s]=l}function mO(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var u=i.eventTimes;for(i=i.expirationTimes;0<l;){var f=31-$r(l),k=1<<f;s[f]=0,u[f]=-1,i[f]=-1,l&=~k}}function Nw(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var u=31-$r(l),f=1<<u;f&s|i[u]&s&&(i[u]|=s),l&=~f}}var Ut=0;function CE(i){return i&=-i,1<i?4<i?i&268435455?16:536870912:4:1}var xE,Lw,EE,SE,DE,xk=!1,Wh=[],al=null,ll=null,cl=null,vu=new Map,yu=new Map,el=[],gO="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lx(i,s){switch(i){case"focusin":case"focusout":al=null;break;case"dragenter":case"dragleave":ll=null;break;case"mouseover":case"mouseout":cl=null;break;case"pointerover":case"pointerout":vu.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":yu.delete(s.pointerId)}}function $d(i,s,l,u,f,k){return i===null||i.nativeEvent!==k?(i={blockedOn:s,domEventName:l,eventSystemFlags:u,nativeEvent:k,targetContainers:[f]},s!==null&&(s=Vu(s),s!==null&&Lw(s)),i):(i.eventSystemFlags|=u,s=i.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),i)}function kO(i,s,l,u,f){switch(s){case"focusin":return al=$d(al,i,s,l,u,f),!0;case"dragenter":return ll=$d(ll,i,s,l,u,f),!0;case"mouseover":return cl=$d(cl,i,s,l,u,f),!0;case"pointerover":var k=f.pointerId;return vu.set(k,$d(vu.get(k)||null,i,s,l,u,f)),!0;case"gotpointercapture":return k=f.pointerId,yu.set(k,$d(yu.get(k)||null,i,s,l,u,f)),!0}return!1}function TE(i){var s=ec(i.target);if(s!==null){var l=hc(s);if(l!==null){if(s=l.tag,s===13){if(s=kE(l),s!==null){i.blockedOn=s,DE(i.priority,function(){EE(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function sf(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Ek(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var u=new l.constructor(l.type,l);_k=u,l.target.dispatchEvent(u),_k=null}else return s=Vu(l),s!==null&&Lw(s),i.blockedOn=l,!1;s.shift()}return!0}function cx(i,s,l){sf(i)&&l.delete(s)}function wO(){xk=!1,al!==null&&sf(al)&&(al=null),ll!==null&&sf(ll)&&(ll=null),cl!==null&&sf(cl)&&(cl=null),vu.forEach(cx),yu.forEach(cx)}function Jd(i,s){i.blockedOn===s&&(i.blockedOn=null,xk||(xk=!0,Wo.unstable_scheduleCallback(Wo.unstable_NormalPriority,wO)))}function Au(i){function s(f){return Jd(f,i)}if(0<Wh.length){Jd(Wh[0],i);for(var l=1;l<Wh.length;l++){var u=Wh[l];u.blockedOn===i&&(u.blockedOn=null)}}for(al!==null&&Jd(al,i),ll!==null&&Jd(ll,i),cl!==null&&Jd(cl,i),vu.forEach(s),yu.forEach(s),l=0;l<el.length;l++)u=el[l],u.blockedOn===i&&(u.blockedOn=null);for(;0<el.length&&(l=el[0],l.blockedOn===null);)TE(l),l.blockedOn===null&&el.shift()}var nd=Ca.ReactCurrentBatchConfig,Tf=!0;function bO(i,s,l,u){var f=Ut,k=nd.transition;nd.transition=null;try{Ut=1,Bw(i,s,l,u)}finally{Ut=f,nd.transition=k}}function _O(i,s,l,u){var f=Ut,k=nd.transition;nd.transition=null;try{Ut=4,Bw(i,s,l,u)}finally{Ut=f,nd.transition=k}}function Bw(i,s,l,u){if(Tf){var f=Ek(i,s,l,u);if(f===null)jg(i,s,u,Mf,l),lx(i,u);else if(kO(f,i,s,l,u))u.stopPropagation();else if(lx(i,u),s&4&&-1<gO.indexOf(i)){for(;f!==null;){var k=Vu(f);if(k!==null&&xE(k),k=Ek(i,s,l,u),k===null&&jg(i,s,u,Mf,l),k===f)break;f=k}f!==null&&u.stopPropagation()}else jg(i,s,u,null,l)}}var Mf=null;function Ek(i,s,l,u){if(Mf=null,i=Iw(u),i=ec(i),i!==null)if(s=hc(i),s===null)i=null;else if(l=s.tag,l===13){if(i=kE(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return Mf=i,null}function ME(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(aO()){case Pw:return 1;case vE:return 4;case Sf:case lO:return 16;case yE:return 536870912;default:return 16}default:return 16}}var il=null,Ow=null,af=null;function IE(){if(af)return af;var i,s=Ow,l=s.length,u,f="value"in il?il.value:il.textContent,k=f.length;for(i=0;i<l&&s[i]===f[i];i++);var b=l-i;for(u=1;u<=b&&s[l-u]===f[k-u];u++);return af=f.slice(i,1<u?1-u:void 0)}function lf(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function Zh(){return!0}function dx(){return!1}function qo(i){function s(l,u,f,k,b){this._reactName=l,this._targetInst=f,this.type=u,this.nativeEvent=k,this.target=b,this.currentTarget=null;for(var A in i)i.hasOwnProperty(A)&&(l=i[A],this[A]=l?l(k):k[A]);return this.isDefaultPrevented=(k.defaultPrevented!=null?k.defaultPrevented:k.returnValue===!1)?Zh:dx,this.isPropagationStopped=dx,this}return hn(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Zh)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Zh)},persist:function(){},isPersistent:Zh}),s}var kd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zw=qo(kd),Fu=hn({},kd,{view:0,detail:0}),vO=qo(Fu),Tg,Mg,Xd,ap=hn({},Fu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jw,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Xd&&(Xd&&i.type==="mousemove"?(Tg=i.screenX-Xd.screenX,Mg=i.screenY-Xd.screenY):Mg=Tg=0,Xd=i),Tg)},movementY:function(i){return"movementY"in i?i.movementY:Mg}}),ux=qo(ap),yO=hn({},ap,{dataTransfer:0}),AO=qo(yO),CO=hn({},Fu,{relatedTarget:0}),Ig=qo(CO),xO=hn({},kd,{animationName:0,elapsedTime:0,pseudoElement:0}),EO=qo(xO),SO=hn({},kd,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),DO=qo(SO),TO=hn({},kd,{data:0}),hx=qo(TO),MO={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},IO={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PO={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function NO(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=PO[i])?!!s[i]:!1}function jw(){return NO}var LO=hn({},Fu,{key:function(i){if(i.key){var s=MO[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=lf(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?IO[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jw,charCode:function(i){return i.type==="keypress"?lf(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?lf(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),BO=qo(LO),OO=hn({},ap,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fx=qo(OO),zO=hn({},Fu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jw}),jO=qo(zO),RO=hn({},kd,{propertyName:0,elapsedTime:0,pseudoElement:0}),FO=qo(RO),VO=hn({},ap,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),UO=qo(VO),HO=[9,13,27,32],Rw=ba&&"CompositionEvent"in window,uu=null;ba&&"documentMode"in document&&(uu=document.documentMode);var WO=ba&&"TextEvent"in window&&!uu,PE=ba&&(!Rw||uu&&8<uu&&11>=uu),px=String.fromCharCode(32),mx=!1;function NE(i,s){switch(i){case"keyup":return HO.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function LE(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Uc=!1;function ZO(i,s){switch(i){case"compositionend":return LE(s);case"keypress":return s.which!==32?null:(mx=!0,px);case"textInput":return i=s.data,i===px&&mx?null:i;default:return null}}function qO(i,s){if(Uc)return i==="compositionend"||!Rw&&NE(i,s)?(i=IE(),af=Ow=il=null,Uc=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return PE&&s.locale!=="ko"?null:s.data;default:return null}}var GO={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gx(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!GO[i.type]:s==="textarea"}function BE(i,s,l,u){hE(u),s=If(s,"onChange"),0<s.length&&(l=new zw("onChange","change",null,l,u),i.push({event:l,listeners:s}))}var hu=null,Cu=null;function KO(i){qE(i,0)}function lp(i){var s=Zc(i);if(rE(s))return i}function YO(i,s){if(i==="change")return s}var OE=!1;if(ba){var Pg;if(ba){var Ng="oninput"in document;if(!Ng){var kx=document.createElement("div");kx.setAttribute("oninput","return;"),Ng=typeof kx.oninput=="function"}Pg=Ng}else Pg=!1;OE=Pg&&(!document.documentMode||9<document.documentMode)}function wx(){hu&&(hu.detachEvent("onpropertychange",zE),Cu=hu=null)}function zE(i){if(i.propertyName==="value"&&lp(Cu)){var s=[];BE(s,Cu,i,Iw(i)),gE(KO,s)}}function QO(i,s,l){i==="focusin"?(wx(),hu=s,Cu=l,hu.attachEvent("onpropertychange",zE)):i==="focusout"&&wx()}function $O(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return lp(Cu)}function JO(i,s){if(i==="click")return lp(s)}function XO(i,s){if(i==="input"||i==="change")return lp(s)}function ez(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Xr=typeof Object.is=="function"?Object.is:ez;function xu(i,s){if(Xr(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),u=Object.keys(s);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var f=l[u];if(!lk.call(s,f)||!Xr(i[f],s[f]))return!1}return!0}function bx(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function _x(i,s){var l=bx(i);i=0;for(var u;l;){if(l.nodeType===3){if(u=i+l.textContent.length,i<=s&&u>=s)return{node:l,offset:s-i};i=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=bx(l)}}function jE(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?jE(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function RE(){for(var i=window,s=Cf();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=Cf(i.document)}return s}function Fw(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function tz(i){var s=RE(),l=i.focusedElem,u=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&jE(l.ownerDocument.documentElement,l)){if(u!==null&&Fw(l)){if(s=u.start,i=u.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var f=l.textContent.length,k=Math.min(u.start,f);u=u.end===void 0?k:Math.min(u.end,f),!i.extend&&k>u&&(f=u,u=k,k=f),f=_x(l,k);var b=_x(l,u);f&&b&&(i.rangeCount!==1||i.anchorNode!==f.node||i.anchorOffset!==f.offset||i.focusNode!==b.node||i.focusOffset!==b.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),i.removeAllRanges(),k>u?(i.addRange(s),i.extend(b.node,b.offset)):(s.setEnd(b.node,b.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var nz=ba&&"documentMode"in document&&11>=document.documentMode,Hc=null,Sk=null,fu=null,Dk=!1;function vx(i,s,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Dk||Hc==null||Hc!==Cf(u)||(u=Hc,"selectionStart"in u&&Fw(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),fu&&xu(fu,u)||(fu=u,u=If(Sk,"onSelect"),0<u.length&&(s=new zw("onSelect","select",null,s,l),i.push({event:s,listeners:u}),s.target=Hc)))}function qh(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var Wc={animationend:qh("Animation","AnimationEnd"),animationiteration:qh("Animation","AnimationIteration"),animationstart:qh("Animation","AnimationStart"),transitionend:qh("Transition","TransitionEnd")},Lg={},FE={};ba&&(FE=document.createElement("div").style,"AnimationEvent"in window||(delete Wc.animationend.animation,delete Wc.animationiteration.animation,delete Wc.animationstart.animation),"TransitionEvent"in window||delete Wc.transitionend.transition);function cp(i){if(Lg[i])return Lg[i];if(!Wc[i])return i;var s=Wc[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in FE)return Lg[i]=s[l];return i}var VE=cp("animationend"),UE=cp("animationiteration"),HE=cp("animationstart"),WE=cp("transitionend"),ZE=new Map,yx="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bl(i,s){ZE.set(i,s),uc(s,[i])}for(var Bg=0;Bg<yx.length;Bg++){var Og=yx[Bg],iz=Og.toLowerCase(),oz=Og[0].toUpperCase()+Og.slice(1);bl(iz,"on"+oz)}bl(VE,"onAnimationEnd");bl(UE,"onAnimationIteration");bl(HE,"onAnimationStart");bl("dblclick","onDoubleClick");bl("focusin","onFocus");bl("focusout","onBlur");bl(WE,"onTransitionEnd");ld("onMouseEnter",["mouseout","mouseover"]);ld("onMouseLeave",["mouseout","mouseover"]);ld("onPointerEnter",["pointerout","pointerover"]);ld("onPointerLeave",["pointerout","pointerover"]);uc("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));uc("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));uc("onBeforeInput",["compositionend","keypress","textInput","paste"]);uc("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));uc("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));uc("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rz=new Set("cancel close invalid load scroll toggle".split(" ").concat(lu));function Ax(i,s,l){var u=i.type||"unknown-event";i.currentTarget=l,iO(u,s,void 0,i),i.currentTarget=null}function qE(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var u=i[l],f=u.event;u=u.listeners;e:{var k=void 0;if(s)for(var b=u.length-1;0<=b;b--){var A=u[b],v=A.instance,C=A.currentTarget;if(A=A.listener,v!==k&&f.isPropagationStopped())break e;Ax(f,A,C),k=v}else for(b=0;b<u.length;b++){if(A=u[b],v=A.instance,C=A.currentTarget,A=A.listener,v!==k&&f.isPropagationStopped())break e;Ax(f,A,C),k=v}}}if(Ef)throw i=Ak,Ef=!1,Ak=null,i}function en(i,s){var l=s[Nk];l===void 0&&(l=s[Nk]=new Set);var u=i+"__bubble";l.has(u)||(GE(s,i,2,!1),l.add(u))}function zg(i,s,l){var u=0;s&&(u|=4),GE(l,i,u,s)}var Gh="_reactListening"+Math.random().toString(36).slice(2);function Eu(i){if(!i[Gh]){i[Gh]=!0,eE.forEach(function(l){l!=="selectionchange"&&(rz.has(l)||zg(l,!1,i),zg(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Gh]||(s[Gh]=!0,zg("selectionchange",!1,s))}}function GE(i,s,l,u){switch(ME(s)){case 1:var f=bO;break;case 4:f=_O;break;default:f=Bw}l=f.bind(null,s,l,i),f=void 0,!yk||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),u?f!==void 0?i.addEventListener(s,l,{capture:!0,passive:f}):i.addEventListener(s,l,!0):f!==void 0?i.addEventListener(s,l,{passive:f}):i.addEventListener(s,l,!1)}function jg(i,s,l,u,f){var k=u;if(!(s&1)&&!(s&2)&&u!==null)e:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var A=u.stateNode.containerInfo;if(A===f||A.nodeType===8&&A.parentNode===f)break;if(b===4)for(b=u.return;b!==null;){var v=b.tag;if((v===3||v===4)&&(v=b.stateNode.containerInfo,v===f||v.nodeType===8&&v.parentNode===f))return;b=b.return}for(;A!==null;){if(b=ec(A),b===null)return;if(v=b.tag,v===5||v===6){u=k=b;continue e}A=A.parentNode}}u=u.return}gE(function(){var C=k,B=Iw(l),M=[];e:{var D=ZE.get(i);if(D!==void 0){var N=zw,j=i;switch(i){case"keypress":if(lf(l)===0)break e;case"keydown":case"keyup":N=BO;break;case"focusin":j="focus",N=Ig;break;case"focusout":j="blur",N=Ig;break;case"beforeblur":case"afterblur":N=Ig;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=ux;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=AO;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=jO;break;case VE:case UE:case HE:N=EO;break;case WE:N=FO;break;case"scroll":N=vO;break;case"wheel":N=UO;break;case"copy":case"cut":case"paste":N=DO;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=fx}var H=(s&4)!==0,Q=!H&&i==="scroll",q=H?D!==null?D+"Capture":null:D;H=[];for(var V=C,Z;V!==null;){Z=V;var te=Z.stateNode;if(Z.tag===5&&te!==null&&(Z=te,q!==null&&(te=_u(V,q),te!=null&&H.push(Su(V,te,Z)))),Q)break;V=V.return}0<H.length&&(D=new N(D,j,null,l,B),M.push({event:D,listeners:H}))}}if(!(s&7)){e:{if(D=i==="mouseover"||i==="pointerover",N=i==="mouseout"||i==="pointerout",D&&l!==_k&&(j=l.relatedTarget||l.fromElement)&&(ec(j)||j[_a]))break e;if((N||D)&&(D=B.window===B?B:(D=B.ownerDocument)?D.defaultView||D.parentWindow:window,N?(j=l.relatedTarget||l.toElement,N=C,j=j?ec(j):null,j!==null&&(Q=hc(j),j!==Q||j.tag!==5&&j.tag!==6)&&(j=null)):(N=null,j=C),N!==j)){if(H=ux,te="onMouseLeave",q="onMouseEnter",V="mouse",(i==="pointerout"||i==="pointerover")&&(H=fx,te="onPointerLeave",q="onPointerEnter",V="pointer"),Q=N==null?D:Zc(N),Z=j==null?D:Zc(j),D=new H(te,V+"leave",N,l,B),D.target=Q,D.relatedTarget=Z,te=null,ec(B)===C&&(H=new H(q,V+"enter",j,l,B),H.target=Z,H.relatedTarget=Q,te=H),Q=te,N&&j)t:{for(H=N,q=j,V=0,Z=H;Z;Z=jc(Z))V++;for(Z=0,te=q;te;te=jc(te))Z++;for(;0<V-Z;)H=jc(H),V--;for(;0<Z-V;)q=jc(q),Z--;for(;V--;){if(H===q||q!==null&&H===q.alternate)break t;H=jc(H),q=jc(q)}H=null}else H=null;N!==null&&Cx(M,D,N,H,!1),j!==null&&Q!==null&&Cx(M,Q,j,H,!0)}}e:{if(D=C?Zc(C):window,N=D.nodeName&&D.nodeName.toLowerCase(),N==="select"||N==="input"&&D.type==="file")var se=YO;else if(gx(D))if(OE)se=XO;else{se=$O;var pe=QO}else(N=D.nodeName)&&N.toLowerCase()==="input"&&(D.type==="checkbox"||D.type==="radio")&&(se=JO);if(se&&(se=se(i,C))){BE(M,se,l,B);break e}pe&&pe(i,D,C),i==="focusout"&&(pe=D._wrapperState)&&pe.controlled&&D.type==="number"&&mk(D,"number",D.value)}switch(pe=C?Zc(C):window,i){case"focusin":(gx(pe)||pe.contentEditable==="true")&&(Hc=pe,Sk=C,fu=null);break;case"focusout":fu=Sk=Hc=null;break;case"mousedown":Dk=!0;break;case"contextmenu":case"mouseup":case"dragend":Dk=!1,vx(M,l,B);break;case"selectionchange":if(nz)break;case"keydown":case"keyup":vx(M,l,B)}var le;if(Rw)e:{switch(i){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else Uc?NE(i,l)&&(G="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(G="onCompositionStart");G&&(PE&&l.locale!=="ko"&&(Uc||G!=="onCompositionStart"?G==="onCompositionEnd"&&Uc&&(le=IE()):(il=B,Ow="value"in il?il.value:il.textContent,Uc=!0)),pe=If(C,G),0<pe.length&&(G=new hx(G,i,null,l,B),M.push({event:G,listeners:pe}),le?G.data=le:(le=LE(l),le!==null&&(G.data=le)))),(le=WO?ZO(i,l):qO(i,l))&&(C=If(C,"onBeforeInput"),0<C.length&&(B=new hx("onBeforeInput","beforeinput",null,l,B),M.push({event:B,listeners:C}),B.data=le))}qE(M,s)})}function Su(i,s,l){return{instance:i,listener:s,currentTarget:l}}function If(i,s){for(var l=s+"Capture",u=[];i!==null;){var f=i,k=f.stateNode;f.tag===5&&k!==null&&(f=k,k=_u(i,l),k!=null&&u.unshift(Su(i,k,f)),k=_u(i,s),k!=null&&u.push(Su(i,k,f))),i=i.return}return u}function jc(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Cx(i,s,l,u,f){for(var k=s._reactName,b=[];l!==null&&l!==u;){var A=l,v=A.alternate,C=A.stateNode;if(v!==null&&v===u)break;A.tag===5&&C!==null&&(A=C,f?(v=_u(l,k),v!=null&&b.unshift(Su(l,v,A))):f||(v=_u(l,k),v!=null&&b.push(Su(l,v,A)))),l=l.return}b.length!==0&&i.push({event:s,listeners:b})}var sz=/\r\n?/g,az=/\u0000|\uFFFD/g;function xx(i){return(typeof i=="string"?i:""+i).replace(sz,`
`).replace(az,"")}function Kh(i,s,l){if(s=xx(s),xx(i)!==s&&l)throw Error(Se(425))}function Pf(){}var Tk=null,Mk=null;function Ik(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Pk=typeof setTimeout=="function"?setTimeout:void 0,lz=typeof clearTimeout=="function"?clearTimeout:void 0,Ex=typeof Promise=="function"?Promise:void 0,cz=typeof queueMicrotask=="function"?queueMicrotask:typeof Ex<"u"?function(i){return Ex.resolve(null).then(i).catch(dz)}:Pk;function dz(i){setTimeout(function(){throw i})}function Rg(i,s){var l=s,u=0;do{var f=l.nextSibling;if(i.removeChild(l),f&&f.nodeType===8)if(l=f.data,l==="/$"){if(u===0){i.removeChild(f),Au(s);return}u--}else l!=="$"&&l!=="$?"&&l!=="$!"||u++;l=f}while(l);Au(s)}function dl(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Sx(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var wd=Math.random().toString(36).slice(2),Ps="__reactFiber$"+wd,Du="__reactProps$"+wd,_a="__reactContainer$"+wd,Nk="__reactEvents$"+wd,uz="__reactListeners$"+wd,hz="__reactHandles$"+wd;function ec(i){var s=i[Ps];if(s)return s;for(var l=i.parentNode;l;){if(s=l[_a]||l[Ps]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=Sx(i);i!==null;){if(l=i[Ps])return l;i=Sx(i)}return s}i=l,l=i.parentNode}return null}function Vu(i){return i=i[Ps]||i[_a],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Zc(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(Se(33))}function dp(i){return i[Du]||null}var Lk=[],qc=-1;function _l(i){return{current:i}}function tn(i){0>qc||(i.current=Lk[qc],Lk[qc]=null,qc--)}function Xt(i,s){qc++,Lk[qc]=i.current,i.current=s}var wl={},Ni=_l(wl),ko=_l(!1),sc=wl;function cd(i,s){var l=i.type.contextTypes;if(!l)return wl;var u=i.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===s)return u.__reactInternalMemoizedMaskedChildContext;var f={},k;for(k in l)f[k]=s[k];return u&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=f),f}function wo(i){return i=i.childContextTypes,i!=null}function Nf(){tn(ko),tn(Ni)}function Dx(i,s,l){if(Ni.current!==wl)throw Error(Se(168));Xt(Ni,s),Xt(ko,l)}function KE(i,s,l){var u=i.stateNode;if(s=s.childContextTypes,typeof u.getChildContext!="function")return l;u=u.getChildContext();for(var f in u)if(!(f in s))throw Error(Se(108,QB(i)||"Unknown",f));return hn({},l,u)}function Lf(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||wl,sc=Ni.current,Xt(Ni,i),Xt(ko,ko.current),!0}function Tx(i,s,l){var u=i.stateNode;if(!u)throw Error(Se(169));l?(i=KE(i,s,sc),u.__reactInternalMemoizedMergedChildContext=i,tn(ko),tn(Ni),Xt(Ni,i)):tn(ko),Xt(ko,l)}var pa=null,up=!1,Fg=!1;function YE(i){pa===null?pa=[i]:pa.push(i)}function fz(i){up=!0,YE(i)}function vl(){if(!Fg&&pa!==null){Fg=!0;var i=0,s=Ut;try{var l=pa;for(Ut=1;i<l.length;i++){var u=l[i];do u=u(!0);while(u!==null)}pa=null,up=!1}catch(f){throw pa!==null&&(pa=pa.slice(i+1)),_E(Pw,vl),f}finally{Ut=s,Fg=!1}}return null}var Gc=[],Kc=0,Bf=null,Of=0,cr=[],dr=0,ac=null,ma=1,ga="";function $l(i,s){Gc[Kc++]=Of,Gc[Kc++]=Bf,Bf=i,Of=s}function QE(i,s,l){cr[dr++]=ma,cr[dr++]=ga,cr[dr++]=ac,ac=i;var u=ma;i=ga;var f=32-$r(u)-1;u&=~(1<<f),l+=1;var k=32-$r(s)+f;if(30<k){var b=f-f%5;k=(u&(1<<b)-1).toString(32),u>>=b,f-=b,ma=1<<32-$r(s)+f|l<<f|u,ga=k+i}else ma=1<<k|l<<f|u,ga=i}function Vw(i){i.return!==null&&($l(i,1),QE(i,1,0))}function Uw(i){for(;i===Bf;)Bf=Gc[--Kc],Gc[Kc]=null,Of=Gc[--Kc],Gc[Kc]=null;for(;i===ac;)ac=cr[--dr],cr[dr]=null,ga=cr[--dr],cr[dr]=null,ma=cr[--dr],cr[dr]=null}var Ho=null,Uo=null,sn=!1,Yr=null;function $E(i,s){var l=ur(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function Mx(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Ho=i,Uo=dl(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Ho=i,Uo=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ac!==null?{id:ma,overflow:ga}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=ur(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,Ho=i,Uo=null,!0):!1;default:return!1}}function Bk(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Ok(i){if(sn){var s=Uo;if(s){var l=s;if(!Mx(i,s)){if(Bk(i))throw Error(Se(418));s=dl(l.nextSibling);var u=Ho;s&&Mx(i,s)?$E(u,l):(i.flags=i.flags&-4097|2,sn=!1,Ho=i)}}else{if(Bk(i))throw Error(Se(418));i.flags=i.flags&-4097|2,sn=!1,Ho=i}}}function Ix(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Ho=i}function Yh(i){if(i!==Ho)return!1;if(!sn)return Ix(i),sn=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Ik(i.type,i.memoizedProps)),s&&(s=Uo)){if(Bk(i))throw JE(),Error(Se(418));for(;s;)$E(i,s),s=dl(s.nextSibling)}if(Ix(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(Se(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){Uo=dl(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}Uo=null}}else Uo=Ho?dl(i.stateNode.nextSibling):null;return!0}function JE(){for(var i=Uo;i;)i=dl(i.nextSibling)}function dd(){Uo=Ho=null,sn=!1}function Hw(i){Yr===null?Yr=[i]:Yr.push(i)}var pz=Ca.ReactCurrentBatchConfig;function Gr(i,s){if(i&&i.defaultProps){s=hn({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}var zf=_l(null),jf=null,Yc=null,Ww=null;function Zw(){Ww=Yc=jf=null}function qw(i){var s=zf.current;tn(zf),i._currentValue=s}function zk(i,s,l){for(;i!==null;){var u=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),i===l)break;i=i.return}}function id(i,s){jf=i,Ww=Yc=null,i=i.dependencies,i!==null&&i.firstContext!==null&&(i.lanes&s&&(go=!0),i.firstContext=null)}function pr(i){var s=i._currentValue;if(Ww!==i)if(i={context:i,memoizedValue:s,next:null},Yc===null){if(jf===null)throw Error(Se(308));Yc=i,jf.dependencies={lanes:0,firstContext:i}}else Yc=Yc.next=i;return s}var tc=null;function Gw(i){tc===null?tc=[i]:tc.push(i)}function XE(i,s,l,u){var f=s.interleaved;return f===null?(l.next=l,Gw(s)):(l.next=f.next,f.next=l),s.interleaved=l,va(i,u)}function va(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Ja=!1;function Kw(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function eS(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function ka(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function ul(i,s,l){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,Mt&2){var f=u.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s,va(i,l)}return f=u.interleaved,f===null?(s.next=s,Gw(u)):(s.next=f.next,f.next=s),u.interleaved=s,va(i,l)}function cf(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var u=s.lanes;u&=i.pendingLanes,l|=u,s.lanes=l,Nw(i,l)}}function Px(i,s){var l=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var f=null,k=null;if(l=l.firstBaseUpdate,l!==null){do{var b={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};k===null?f=k=b:k=k.next=b,l=l.next}while(l!==null);k===null?f=k=s:k=k.next=s}else f=k=s;l={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:k,shared:u.shared,effects:u.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Rf(i,s,l,u){var f=i.updateQueue;Ja=!1;var k=f.firstBaseUpdate,b=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var v=A,C=v.next;v.next=null,b===null?k=C:b.next=C,b=v;var B=i.alternate;B!==null&&(B=B.updateQueue,A=B.lastBaseUpdate,A!==b&&(A===null?B.firstBaseUpdate=C:A.next=C,B.lastBaseUpdate=v))}if(k!==null){var M=f.baseState;b=0,B=C=v=null,A=k;do{var D=A.lane,N=A.eventTime;if((u&D)===D){B!==null&&(B=B.next={eventTime:N,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var j=i,H=A;switch(D=s,N=l,H.tag){case 1:if(j=H.payload,typeof j=="function"){M=j.call(N,M,D);break e}M=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=H.payload,D=typeof j=="function"?j.call(N,M,D):j,D==null)break e;M=hn({},M,D);break e;case 2:Ja=!0}}A.callback!==null&&A.lane!==0&&(i.flags|=64,D=f.effects,D===null?f.effects=[A]:D.push(A))}else N={eventTime:N,lane:D,tag:A.tag,payload:A.payload,callback:A.callback,next:null},B===null?(C=B=N,v=M):B=B.next=N,b|=D;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;D=A,A=D.next,D.next=null,f.lastBaseUpdate=D,f.shared.pending=null}}while(1);if(B===null&&(v=M),f.baseState=v,f.firstBaseUpdate=C,f.lastBaseUpdate=B,s=f.shared.interleaved,s!==null){f=s;do b|=f.lane,f=f.next;while(f!==s)}else k===null&&(f.shared.lanes=0);cc|=b,i.lanes=b,i.memoizedState=M}}function Nx(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var u=i[s],f=u.callback;if(f!==null){if(u.callback=null,u=l,typeof f!="function")throw Error(Se(191,f));f.call(u)}}}var tS=new X2.Component().refs;function jk(i,s,l,u){s=i.memoizedState,l=l(u,s),l=l==null?s:hn({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var hp={isMounted:function(i){return(i=i._reactInternals)?hc(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var u=Qi(),f=fl(i),k=ka(u,f);k.payload=s,l!=null&&(k.callback=l),s=ul(i,k,f),s!==null&&(Jr(s,i,f,u),cf(s,i,f))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var u=Qi(),f=fl(i),k=ka(u,f);k.tag=1,k.payload=s,l!=null&&(k.callback=l),s=ul(i,k,f),s!==null&&(Jr(s,i,f,u),cf(s,i,f))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Qi(),u=fl(i),f=ka(l,u);f.tag=2,s!=null&&(f.callback=s),s=ul(i,f,u),s!==null&&(Jr(s,i,u,l),cf(s,i,u))}};function Lx(i,s,l,u,f,k,b){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,k,b):s.prototype&&s.prototype.isPureReactComponent?!xu(l,u)||!xu(f,k):!0}function nS(i,s,l){var u=!1,f=wl,k=s.contextType;return typeof k=="object"&&k!==null?k=pr(k):(f=wo(s)?sc:Ni.current,u=s.contextTypes,k=(u=u!=null)?cd(i,f):wl),s=new s(l,k),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=hp,i.stateNode=s,s._reactInternals=i,u&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=f,i.__reactInternalMemoizedMaskedChildContext=k),s}function Bx(i,s,l,u){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,u),s.state!==i&&hp.enqueueReplaceState(s,s.state,null)}function Rk(i,s,l,u){var f=i.stateNode;f.props=l,f.state=i.memoizedState,f.refs=tS,Kw(i);var k=s.contextType;typeof k=="object"&&k!==null?f.context=pr(k):(k=wo(s)?sc:Ni.current,f.context=cd(i,k)),f.state=i.memoizedState,k=s.getDerivedStateFromProps,typeof k=="function"&&(jk(i,s,k,l),f.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&hp.enqueueReplaceState(f,f.state,null),Rf(i,l,f,u),f.state=i.memoizedState),typeof f.componentDidMount=="function"&&(i.flags|=4194308)}function eu(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(Se(309));var u=l.stateNode}if(!u)throw Error(Se(147,i));var f=u,k=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===k?s.ref:(s=function(b){var A=f.refs;A===tS&&(A=f.refs={}),b===null?delete A[k]:A[k]=b},s._stringRef=k,s)}if(typeof i!="string")throw Error(Se(284));if(!l._owner)throw Error(Se(290,i))}return i}function Qh(i,s){throw i=Object.prototype.toString.call(s),Error(Se(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Ox(i){var s=i._init;return s(i._payload)}function iS(i){function s(q,V){if(i){var Z=q.deletions;Z===null?(q.deletions=[V],q.flags|=16):Z.push(V)}}function l(q,V){if(!i)return null;for(;V!==null;)s(q,V),V=V.sibling;return null}function u(q,V){for(q=new Map;V!==null;)V.key!==null?q.set(V.key,V):q.set(V.index,V),V=V.sibling;return q}function f(q,V){return q=pl(q,V),q.index=0,q.sibling=null,q}function k(q,V,Z){return q.index=Z,i?(Z=q.alternate,Z!==null?(Z=Z.index,Z<V?(q.flags|=2,V):Z):(q.flags|=2,V)):(q.flags|=1048576,V)}function b(q){return i&&q.alternate===null&&(q.flags|=2),q}function A(q,V,Z,te){return V===null||V.tag!==6?(V=Gg(Z,q.mode,te),V.return=q,V):(V=f(V,Z),V.return=q,V)}function v(q,V,Z,te){var se=Z.type;return se===Vc?B(q,V,Z.props.children,te,Z.key):V!==null&&(V.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===$a&&Ox(se)===V.type)?(te=f(V,Z.props),te.ref=eu(q,V,Z),te.return=q,te):(te=mf(Z.type,Z.key,Z.props,null,q.mode,te),te.ref=eu(q,V,Z),te.return=q,te)}function C(q,V,Z,te){return V===null||V.tag!==4||V.stateNode.containerInfo!==Z.containerInfo||V.stateNode.implementation!==Z.implementation?(V=Kg(Z,q.mode,te),V.return=q,V):(V=f(V,Z.children||[]),V.return=q,V)}function B(q,V,Z,te,se){return V===null||V.tag!==7?(V=rc(Z,q.mode,te,se),V.return=q,V):(V=f(V,Z),V.return=q,V)}function M(q,V,Z){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Gg(""+V,q.mode,Z),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Rh:return Z=mf(V.type,V.key,V.props,null,q.mode,Z),Z.ref=eu(q,null,V),Z.return=q,Z;case Fc:return V=Kg(V,q.mode,Z),V.return=q,V;case $a:var te=V._init;return M(q,te(V._payload),Z)}if(su(V)||Yd(V))return V=rc(V,q.mode,Z,null),V.return=q,V;Qh(q,V)}return null}function D(q,V,Z,te){var se=V!==null?V.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return se!==null?null:A(q,V,""+Z,te);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case Rh:return Z.key===se?v(q,V,Z,te):null;case Fc:return Z.key===se?C(q,V,Z,te):null;case $a:return se=Z._init,D(q,V,se(Z._payload),te)}if(su(Z)||Yd(Z))return se!==null?null:B(q,V,Z,te,null);Qh(q,Z)}return null}function N(q,V,Z,te,se){if(typeof te=="string"&&te!==""||typeof te=="number")return q=q.get(Z)||null,A(V,q,""+te,se);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case Rh:return q=q.get(te.key===null?Z:te.key)||null,v(V,q,te,se);case Fc:return q=q.get(te.key===null?Z:te.key)||null,C(V,q,te,se);case $a:var pe=te._init;return N(q,V,Z,pe(te._payload),se)}if(su(te)||Yd(te))return q=q.get(Z)||null,B(V,q,te,se,null);Qh(V,te)}return null}function j(q,V,Z,te){for(var se=null,pe=null,le=V,G=V=0,ce=null;le!==null&&G<Z.length;G++){le.index>G?(ce=le,le=null):ce=le.sibling;var be=D(q,le,Z[G],te);if(be===null){le===null&&(le=ce);break}i&&le&&be.alternate===null&&s(q,le),V=k(be,V,G),pe===null?se=be:pe.sibling=be,pe=be,le=ce}if(G===Z.length)return l(q,le),sn&&$l(q,G),se;if(le===null){for(;G<Z.length;G++)le=M(q,Z[G],te),le!==null&&(V=k(le,V,G),pe===null?se=le:pe.sibling=le,pe=le);return sn&&$l(q,G),se}for(le=u(q,le);G<Z.length;G++)ce=N(le,q,G,Z[G],te),ce!==null&&(i&&ce.alternate!==null&&le.delete(ce.key===null?G:ce.key),V=k(ce,V,G),pe===null?se=ce:pe.sibling=ce,pe=ce);return i&&le.forEach(function(Ie){return s(q,Ie)}),sn&&$l(q,G),se}function H(q,V,Z,te){var se=Yd(Z);if(typeof se!="function")throw Error(Se(150));if(Z=se.call(Z),Z==null)throw Error(Se(151));for(var pe=se=null,le=V,G=V=0,ce=null,be=Z.next();le!==null&&!be.done;G++,be=Z.next()){le.index>G?(ce=le,le=null):ce=le.sibling;var Ie=D(q,le,be.value,te);if(Ie===null){le===null&&(le=ce);break}i&&le&&Ie.alternate===null&&s(q,le),V=k(Ie,V,G),pe===null?se=Ie:pe.sibling=Ie,pe=Ie,le=ce}if(be.done)return l(q,le),sn&&$l(q,G),se;if(le===null){for(;!be.done;G++,be=Z.next())be=M(q,be.value,te),be!==null&&(V=k(be,V,G),pe===null?se=be:pe.sibling=be,pe=be);return sn&&$l(q,G),se}for(le=u(q,le);!be.done;G++,be=Z.next())be=N(le,q,G,be.value,te),be!==null&&(i&&be.alternate!==null&&le.delete(be.key===null?G:be.key),V=k(be,V,G),pe===null?se=be:pe.sibling=be,pe=be);return i&&le.forEach(function(Me){return s(q,Me)}),sn&&$l(q,G),se}function Q(q,V,Z,te){if(typeof Z=="object"&&Z!==null&&Z.type===Vc&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case Rh:e:{for(var se=Z.key,pe=V;pe!==null;){if(pe.key===se){if(se=Z.type,se===Vc){if(pe.tag===7){l(q,pe.sibling),V=f(pe,Z.props.children),V.return=q,q=V;break e}}else if(pe.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===$a&&Ox(se)===pe.type){l(q,pe.sibling),V=f(pe,Z.props),V.ref=eu(q,pe,Z),V.return=q,q=V;break e}l(q,pe);break}else s(q,pe);pe=pe.sibling}Z.type===Vc?(V=rc(Z.props.children,q.mode,te,Z.key),V.return=q,q=V):(te=mf(Z.type,Z.key,Z.props,null,q.mode,te),te.ref=eu(q,V,Z),te.return=q,q=te)}return b(q);case Fc:e:{for(pe=Z.key;V!==null;){if(V.key===pe)if(V.tag===4&&V.stateNode.containerInfo===Z.containerInfo&&V.stateNode.implementation===Z.implementation){l(q,V.sibling),V=f(V,Z.children||[]),V.return=q,q=V;break e}else{l(q,V);break}else s(q,V);V=V.sibling}V=Kg(Z,q.mode,te),V.return=q,q=V}return b(q);case $a:return pe=Z._init,Q(q,V,pe(Z._payload),te)}if(su(Z))return j(q,V,Z,te);if(Yd(Z))return H(q,V,Z,te);Qh(q,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,V!==null&&V.tag===6?(l(q,V.sibling),V=f(V,Z),V.return=q,q=V):(l(q,V),V=Gg(Z,q.mode,te),V.return=q,q=V),b(q)):l(q,V)}return Q}var ud=iS(!0),oS=iS(!1),Uu={},Os=_l(Uu),Tu=_l(Uu),Mu=_l(Uu);function nc(i){if(i===Uu)throw Error(Se(174));return i}function Yw(i,s){switch(Xt(Mu,s),Xt(Tu,i),Xt(Os,Uu),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:kk(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=kk(s,i)}tn(Os),Xt(Os,s)}function hd(){tn(Os),tn(Tu),tn(Mu)}function rS(i){nc(Mu.current);var s=nc(Os.current),l=kk(s,i.type);s!==l&&(Xt(Tu,i),Xt(Os,l))}function Qw(i){Tu.current===i&&(tn(Os),tn(Tu))}var dn=_l(0);function Ff(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Vg=[];function $w(){for(var i=0;i<Vg.length;i++)Vg[i]._workInProgressVersionPrimary=null;Vg.length=0}var df=Ca.ReactCurrentDispatcher,Ug=Ca.ReactCurrentBatchConfig,lc=0,un=null,Fn=null,Jn=null,Vf=!1,pu=!1,Iu=0,mz=0;function Ti(){throw Error(Se(321))}function Jw(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Xr(i[l],s[l]))return!1;return!0}function Xw(i,s,l,u,f,k){if(lc=k,un=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,df.current=i===null||i.memoizedState===null?bz:_z,i=l(u,f),pu){k=0;do{if(pu=!1,Iu=0,25<=k)throw Error(Se(301));k+=1,Jn=Fn=null,s.updateQueue=null,df.current=vz,i=l(u,f)}while(pu)}if(df.current=Uf,s=Fn!==null&&Fn.next!==null,lc=0,Jn=Fn=un=null,Vf=!1,s)throw Error(Se(300));return i}function eb(){var i=Iu!==0;return Iu=0,i}function Is(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jn===null?un.memoizedState=Jn=i:Jn=Jn.next=i,Jn}function mr(){if(Fn===null){var i=un.alternate;i=i!==null?i.memoizedState:null}else i=Fn.next;var s=Jn===null?un.memoizedState:Jn.next;if(s!==null)Jn=s,Fn=i;else{if(i===null)throw Error(Se(310));Fn=i,i={memoizedState:Fn.memoizedState,baseState:Fn.baseState,baseQueue:Fn.baseQueue,queue:Fn.queue,next:null},Jn===null?un.memoizedState=Jn=i:Jn=Jn.next=i}return Jn}function Pu(i,s){return typeof s=="function"?s(i):s}function Hg(i){var s=mr(),l=s.queue;if(l===null)throw Error(Se(311));l.lastRenderedReducer=i;var u=Fn,f=u.baseQueue,k=l.pending;if(k!==null){if(f!==null){var b=f.next;f.next=k.next,k.next=b}u.baseQueue=f=k,l.pending=null}if(f!==null){k=f.next,u=u.baseState;var A=b=null,v=null,C=k;do{var B=C.lane;if((lc&B)===B)v!==null&&(v=v.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),u=C.hasEagerState?C.eagerState:i(u,C.action);else{var M={lane:B,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};v===null?(A=v=M,b=u):v=v.next=M,un.lanes|=B,cc|=B}C=C.next}while(C!==null&&C!==k);v===null?b=u:v.next=A,Xr(u,s.memoizedState)||(go=!0),s.memoizedState=u,s.baseState=b,s.baseQueue=v,l.lastRenderedState=u}if(i=l.interleaved,i!==null){f=i;do k=f.lane,un.lanes|=k,cc|=k,f=f.next;while(f!==i)}else f===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Wg(i){var s=mr(),l=s.queue;if(l===null)throw Error(Se(311));l.lastRenderedReducer=i;var u=l.dispatch,f=l.pending,k=s.memoizedState;if(f!==null){l.pending=null;var b=f=f.next;do k=i(k,b.action),b=b.next;while(b!==f);Xr(k,s.memoizedState)||(go=!0),s.memoizedState=k,s.baseQueue===null&&(s.baseState=k),l.lastRenderedState=k}return[k,u]}function sS(){}function aS(i,s){var l=un,u=mr(),f=s(),k=!Xr(u.memoizedState,f);if(k&&(u.memoizedState=f,go=!0),u=u.queue,tb(dS.bind(null,l,u,i),[i]),u.getSnapshot!==s||k||Jn!==null&&Jn.memoizedState.tag&1){if(l.flags|=2048,Nu(9,cS.bind(null,l,u,f,s),void 0,null),ei===null)throw Error(Se(349));lc&30||lS(l,s,f)}return f}function lS(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=un.updateQueue,s===null?(s={lastEffect:null,stores:null},un.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function cS(i,s,l,u){s.value=l,s.getSnapshot=u,uS(s)&&hS(i)}function dS(i,s,l){return l(function(){uS(s)&&hS(i)})}function uS(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Xr(i,l)}catch{return!0}}function hS(i){var s=va(i,1);s!==null&&Jr(s,i,1,-1)}function zx(i){var s=Is();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pu,lastRenderedState:i},s.queue=i,i=i.dispatch=wz.bind(null,un,i),[s.memoizedState,i]}function Nu(i,s,l,u){return i={tag:i,create:s,destroy:l,deps:u,next:null},s=un.updateQueue,s===null?(s={lastEffect:null,stores:null},un.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(u=l.next,l.next=i,i.next=u,s.lastEffect=i)),i}function fS(){return mr().memoizedState}function uf(i,s,l,u){var f=Is();un.flags|=i,f.memoizedState=Nu(1|s,l,void 0,u===void 0?null:u)}function fp(i,s,l,u){var f=mr();u=u===void 0?null:u;var k=void 0;if(Fn!==null){var b=Fn.memoizedState;if(k=b.destroy,u!==null&&Jw(u,b.deps)){f.memoizedState=Nu(s,l,k,u);return}}un.flags|=i,f.memoizedState=Nu(1|s,l,k,u)}function jx(i,s){return uf(8390656,8,i,s)}function tb(i,s){return fp(2048,8,i,s)}function pS(i,s){return fp(4,2,i,s)}function mS(i,s){return fp(4,4,i,s)}function gS(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function kS(i,s,l){return l=l!=null?l.concat([i]):null,fp(4,4,gS.bind(null,s,i),l)}function nb(){}function wS(i,s){var l=mr();s=s===void 0?null:s;var u=l.memoizedState;return u!==null&&s!==null&&Jw(s,u[1])?u[0]:(l.memoizedState=[i,s],i)}function bS(i,s){var l=mr();s=s===void 0?null:s;var u=l.memoizedState;return u!==null&&s!==null&&Jw(s,u[1])?u[0]:(i=i(),l.memoizedState=[i,s],i)}function _S(i,s,l){return lc&21?(Xr(l,s)||(l=AE(),un.lanes|=l,cc|=l,i.baseState=!0),s):(i.baseState&&(i.baseState=!1,go=!0),i.memoizedState=l)}function gz(i,s){var l=Ut;Ut=l!==0&&4>l?l:4,i(!0);var u=Ug.transition;Ug.transition={};try{i(!1),s()}finally{Ut=l,Ug.transition=u}}function vS(){return mr().memoizedState}function kz(i,s,l){var u=fl(i);if(l={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null},yS(i))AS(s,l);else if(l=XE(i,s,l,u),l!==null){var f=Qi();Jr(l,i,u,f),CS(l,s,u)}}function wz(i,s,l){var u=fl(i),f={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null};if(yS(i))AS(s,f);else{var k=i.alternate;if(i.lanes===0&&(k===null||k.lanes===0)&&(k=s.lastRenderedReducer,k!==null))try{var b=s.lastRenderedState,A=k(b,l);if(f.hasEagerState=!0,f.eagerState=A,Xr(A,b)){var v=s.interleaved;v===null?(f.next=f,Gw(s)):(f.next=v.next,v.next=f),s.interleaved=f;return}}catch{}finally{}l=XE(i,s,f,u),l!==null&&(f=Qi(),Jr(l,i,u,f),CS(l,s,u))}}function yS(i){var s=i.alternate;return i===un||s!==null&&s===un}function AS(i,s){pu=Vf=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function CS(i,s,l){if(l&4194240){var u=s.lanes;u&=i.pendingLanes,l|=u,s.lanes=l,Nw(i,l)}}var Uf={readContext:pr,useCallback:Ti,useContext:Ti,useEffect:Ti,useImperativeHandle:Ti,useInsertionEffect:Ti,useLayoutEffect:Ti,useMemo:Ti,useReducer:Ti,useRef:Ti,useState:Ti,useDebugValue:Ti,useDeferredValue:Ti,useTransition:Ti,useMutableSource:Ti,useSyncExternalStore:Ti,useId:Ti,unstable_isNewReconciler:!1},bz={readContext:pr,useCallback:function(i,s){return Is().memoizedState=[i,s===void 0?null:s],i},useContext:pr,useEffect:jx,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,uf(4194308,4,gS.bind(null,s,i),l)},useLayoutEffect:function(i,s){return uf(4194308,4,i,s)},useInsertionEffect:function(i,s){return uf(4,2,i,s)},useMemo:function(i,s){var l=Is();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var u=Is();return s=l!==void 0?l(s):s,u.memoizedState=u.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},u.queue=i,i=i.dispatch=kz.bind(null,un,i),[u.memoizedState,i]},useRef:function(i){var s=Is();return i={current:i},s.memoizedState=i},useState:zx,useDebugValue:nb,useDeferredValue:function(i){return Is().memoizedState=i},useTransition:function(){var i=zx(!1),s=i[0];return i=gz.bind(null,i[1]),Is().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var u=un,f=Is();if(sn){if(l===void 0)throw Error(Se(407));l=l()}else{if(l=s(),ei===null)throw Error(Se(349));lc&30||lS(u,s,l)}f.memoizedState=l;var k={value:l,getSnapshot:s};return f.queue=k,jx(dS.bind(null,u,k,i),[i]),u.flags|=2048,Nu(9,cS.bind(null,u,k,l,s),void 0,null),l},useId:function(){var i=Is(),s=ei.identifierPrefix;if(sn){var l=ga,u=ma;l=(u&~(1<<32-$r(u)-1)).toString(32)+l,s=":"+s+"R"+l,l=Iu++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=mz++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},_z={readContext:pr,useCallback:wS,useContext:pr,useEffect:tb,useImperativeHandle:kS,useInsertionEffect:pS,useLayoutEffect:mS,useMemo:bS,useReducer:Hg,useRef:fS,useState:function(){return Hg(Pu)},useDebugValue:nb,useDeferredValue:function(i){var s=mr();return _S(s,Fn.memoizedState,i)},useTransition:function(){var i=Hg(Pu)[0],s=mr().memoizedState;return[i,s]},useMutableSource:sS,useSyncExternalStore:aS,useId:vS,unstable_isNewReconciler:!1},vz={readContext:pr,useCallback:wS,useContext:pr,useEffect:tb,useImperativeHandle:kS,useInsertionEffect:pS,useLayoutEffect:mS,useMemo:bS,useReducer:Wg,useRef:fS,useState:function(){return Wg(Pu)},useDebugValue:nb,useDeferredValue:function(i){var s=mr();return Fn===null?s.memoizedState=i:_S(s,Fn.memoizedState,i)},useTransition:function(){var i=Wg(Pu)[0],s=mr().memoizedState;return[i,s]},useMutableSource:sS,useSyncExternalStore:aS,useId:vS,unstable_isNewReconciler:!1};function fd(i,s){try{var l="",u=s;do l+=YB(u),u=u.return;while(u);var f=l}catch(k){f=`
Error generating stack: `+k.message+`
`+k.stack}return{value:i,source:s,stack:f,digest:null}}function Zg(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Fk(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var yz=typeof WeakMap=="function"?WeakMap:Map;function xS(i,s,l){l=ka(-1,l),l.tag=3,l.payload={element:null};var u=s.value;return l.callback=function(){Wf||(Wf=!0,Qk=u),Fk(i,s)},l}function ES(i,s,l){l=ka(-1,l),l.tag=3;var u=i.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;l.payload=function(){return u(f)},l.callback=function(){Fk(i,s)}}var k=i.stateNode;return k!==null&&typeof k.componentDidCatch=="function"&&(l.callback=function(){Fk(i,s),typeof u!="function"&&(hl===null?hl=new Set([this]):hl.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})}),l}function Rx(i,s,l){var u=i.pingCache;if(u===null){u=i.pingCache=new yz;var f=new Set;u.set(s,f)}else f=u.get(s),f===void 0&&(f=new Set,u.set(s,f));f.has(l)||(f.add(l),i=Oz.bind(null,i,s,l),s.then(i,i))}function Fx(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function Vx(i,s,l,u,f){return i.mode&1?(i.flags|=65536,i.lanes=f,i):(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=ka(-1,1),s.tag=2,ul(l,s,1))),l.lanes|=1),i)}var Az=Ca.ReactCurrentOwner,go=!1;function Ki(i,s,l,u){s.child=i===null?oS(s,null,l,u):ud(s,i.child,l,u)}function Ux(i,s,l,u,f){l=l.render;var k=s.ref;return id(s,f),u=Xw(i,s,l,u,k,f),l=eb(),i!==null&&!go?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~f,ya(i,s,f)):(sn&&l&&Vw(s),s.flags|=1,Ki(i,s,u,f),s.child)}function Hx(i,s,l,u,f){if(i===null){var k=l.type;return typeof k=="function"&&!db(k)&&k.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=k,SS(i,s,k,u,f)):(i=mf(l.type,null,u,s,s.mode,f),i.ref=s.ref,i.return=s,s.child=i)}if(k=i.child,!(i.lanes&f)){var b=k.memoizedProps;if(l=l.compare,l=l!==null?l:xu,l(b,u)&&i.ref===s.ref)return ya(i,s,f)}return s.flags|=1,i=pl(k,u),i.ref=s.ref,i.return=s,s.child=i}function SS(i,s,l,u,f){if(i!==null){var k=i.memoizedProps;if(xu(k,u)&&i.ref===s.ref)if(go=!1,s.pendingProps=u=k,(i.lanes&f)!==0)i.flags&131072&&(go=!0);else return s.lanes=i.lanes,ya(i,s,f)}return Vk(i,s,l,u,f)}function DS(i,s,l){var u=s.pendingProps,f=u.children,k=i!==null?i.memoizedState:null;if(u.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt($c,Vo),Vo|=l;else{if(!(l&1073741824))return i=k!==null?k.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Xt($c,Vo),Vo|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=k!==null?k.baseLanes:l,Xt($c,Vo),Vo|=u}else k!==null?(u=k.baseLanes|l,s.memoizedState=null):u=l,Xt($c,Vo),Vo|=u;return Ki(i,s,f,l),s.child}function TS(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Vk(i,s,l,u,f){var k=wo(l)?sc:Ni.current;return k=cd(s,k),id(s,f),l=Xw(i,s,l,u,k,f),u=eb(),i!==null&&!go?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~f,ya(i,s,f)):(sn&&u&&Vw(s),s.flags|=1,Ki(i,s,l,f),s.child)}function Wx(i,s,l,u,f){if(wo(l)){var k=!0;Lf(s)}else k=!1;if(id(s,f),s.stateNode===null)hf(i,s),nS(s,l,u),Rk(s,l,u,f),u=!0;else if(i===null){var b=s.stateNode,A=s.memoizedProps;b.props=A;var v=b.context,C=l.contextType;typeof C=="object"&&C!==null?C=pr(C):(C=wo(l)?sc:Ni.current,C=cd(s,C));var B=l.getDerivedStateFromProps,M=typeof B=="function"||typeof b.getSnapshotBeforeUpdate=="function";M||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(A!==u||v!==C)&&Bx(s,b,u,C),Ja=!1;var D=s.memoizedState;b.state=D,Rf(s,u,b,f),v=s.memoizedState,A!==u||D!==v||ko.current||Ja?(typeof B=="function"&&(jk(s,l,B,u),v=s.memoizedState),(A=Ja||Lx(s,l,A,u,D,v,C))?(M||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(s.flags|=4194308)):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=v),b.props=u,b.state=v,b.context=C,u=A):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{b=s.stateNode,eS(i,s),A=s.memoizedProps,C=s.type===s.elementType?A:Gr(s.type,A),b.props=C,M=s.pendingProps,D=b.context,v=l.contextType,typeof v=="object"&&v!==null?v=pr(v):(v=wo(l)?sc:Ni.current,v=cd(s,v));var N=l.getDerivedStateFromProps;(B=typeof N=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(A!==M||D!==v)&&Bx(s,b,u,v),Ja=!1,D=s.memoizedState,b.state=D,Rf(s,u,b,f);var j=s.memoizedState;A!==M||D!==j||ko.current||Ja?(typeof N=="function"&&(jk(s,l,N,u),j=s.memoizedState),(C=Ja||Lx(s,l,C,u,D,j,v)||!1)?(B||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(u,j,v),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(u,j,v)),typeof b.componentDidUpdate=="function"&&(s.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof b.componentDidUpdate!="function"||A===i.memoizedProps&&D===i.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&D===i.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=j),b.props=u,b.state=j,b.context=v,u=C):(typeof b.componentDidUpdate!="function"||A===i.memoizedProps&&D===i.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&D===i.memoizedState||(s.flags|=1024),u=!1)}return Uk(i,s,l,u,k,f)}function Uk(i,s,l,u,f,k){TS(i,s);var b=(s.flags&128)!==0;if(!u&&!b)return f&&Tx(s,l,!1),ya(i,s,k);u=s.stateNode,Az.current=s;var A=b&&typeof l.getDerivedStateFromError!="function"?null:u.render();return s.flags|=1,i!==null&&b?(s.child=ud(s,i.child,null,k),s.child=ud(s,null,A,k)):Ki(i,s,A,k),s.memoizedState=u.state,f&&Tx(s,l,!0),s.child}function MS(i){var s=i.stateNode;s.pendingContext?Dx(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Dx(i,s.context,!1),Yw(i,s.containerInfo)}function Zx(i,s,l,u,f){return dd(),Hw(f),s.flags|=256,Ki(i,s,l,u),s.child}var Hk={dehydrated:null,treeContext:null,retryLane:0};function Wk(i){return{baseLanes:i,cachePool:null,transitions:null}}function IS(i,s,l){var u=s.pendingProps,f=dn.current,k=!1,b=(s.flags&128)!==0,A;if((A=b)||(A=i!==null&&i.memoizedState===null?!1:(f&2)!==0),A?(k=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(f|=1),Xt(dn,f&1),i===null)return Ok(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?(s.mode&1?i.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(b=u.children,i=u.fallback,k?(u=s.mode,k=s.child,b={mode:"hidden",children:b},!(u&1)&&k!==null?(k.childLanes=0,k.pendingProps=b):k=gp(b,u,0,null),i=rc(i,u,l,null),k.return=s,i.return=s,k.sibling=i,s.child=k,s.child.memoizedState=Wk(l),s.memoizedState=Hk,i):ib(s,b));if(f=i.memoizedState,f!==null&&(A=f.dehydrated,A!==null))return Cz(i,s,b,u,A,f,l);if(k){k=u.fallback,b=s.mode,f=i.child,A=f.sibling;var v={mode:"hidden",children:u.children};return!(b&1)&&s.child!==f?(u=s.child,u.childLanes=0,u.pendingProps=v,s.deletions=null):(u=pl(f,v),u.subtreeFlags=f.subtreeFlags&14680064),A!==null?k=pl(A,k):(k=rc(k,b,l,null),k.flags|=2),k.return=s,u.return=s,u.sibling=k,s.child=u,u=k,k=s.child,b=i.child.memoizedState,b=b===null?Wk(l):{baseLanes:b.baseLanes|l,cachePool:null,transitions:b.transitions},k.memoizedState=b,k.childLanes=i.childLanes&~l,s.memoizedState=Hk,u}return k=i.child,i=k.sibling,u=pl(k,{mode:"visible",children:u.children}),!(s.mode&1)&&(u.lanes=l),u.return=s,u.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=u,s.memoizedState=null,u}function ib(i,s){return s=gp({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function $h(i,s,l,u){return u!==null&&Hw(u),ud(s,i.child,null,l),i=ib(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function Cz(i,s,l,u,f,k,b){if(l)return s.flags&256?(s.flags&=-257,u=Zg(Error(Se(422))),$h(i,s,b,u)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(k=u.fallback,f=s.mode,u=gp({mode:"visible",children:u.children},f,0,null),k=rc(k,f,b,null),k.flags|=2,u.return=s,k.return=s,u.sibling=k,s.child=u,s.mode&1&&ud(s,i.child,null,b),s.child.memoizedState=Wk(b),s.memoizedState=Hk,k);if(!(s.mode&1))return $h(i,s,b,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var A=u.dgst;return u=A,k=Error(Se(419)),u=Zg(k,u,void 0),$h(i,s,b,u)}if(A=(b&i.childLanes)!==0,go||A){if(u=ei,u!==null){switch(b&-b){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(u.suspendedLanes|b)?0:f,f!==0&&f!==k.retryLane&&(k.retryLane=f,va(i,f),Jr(u,i,f,-1))}return cb(),u=Zg(Error(Se(421))),$h(i,s,b,u)}return f.data==="$?"?(s.flags|=128,s.child=i.child,s=zz.bind(null,i),f._reactRetry=s,null):(i=k.treeContext,Uo=dl(f.nextSibling),Ho=s,sn=!0,Yr=null,i!==null&&(cr[dr++]=ma,cr[dr++]=ga,cr[dr++]=ac,ma=i.id,ga=i.overflow,ac=s),s=ib(s,u.children),s.flags|=4096,s)}function qx(i,s,l){i.lanes|=s;var u=i.alternate;u!==null&&(u.lanes|=s),zk(i.return,s,l)}function qg(i,s,l,u,f){var k=i.memoizedState;k===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:f}:(k.isBackwards=s,k.rendering=null,k.renderingStartTime=0,k.last=u,k.tail=l,k.tailMode=f)}function PS(i,s,l){var u=s.pendingProps,f=u.revealOrder,k=u.tail;if(Ki(i,s,u.children,l),u=dn.current,u&2)u=u&1|2,s.flags|=128;else{if(i!==null&&i.flags&128)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&qx(i,l,s);else if(i.tag===19)qx(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}if(Xt(dn,u),!(s.mode&1))s.memoizedState=null;else switch(f){case"forwards":for(l=s.child,f=null;l!==null;)i=l.alternate,i!==null&&Ff(i)===null&&(f=l),l=l.sibling;l=f,l===null?(f=s.child,s.child=null):(f=l.sibling,l.sibling=null),qg(s,!1,f,l,k);break;case"backwards":for(l=null,f=s.child,s.child=null;f!==null;){if(i=f.alternate,i!==null&&Ff(i)===null){s.child=f;break}i=f.sibling,f.sibling=l,l=f,f=i}qg(s,!0,l,null,k);break;case"together":qg(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function hf(i,s){!(s.mode&1)&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function ya(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),cc|=s.lanes,!(l&s.childLanes))return null;if(i!==null&&s.child!==i.child)throw Error(Se(153));if(s.child!==null){for(i=s.child,l=pl(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=pl(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function xz(i,s,l){switch(s.tag){case 3:MS(s),dd();break;case 5:rS(s);break;case 1:wo(s.type)&&Lf(s);break;case 4:Yw(s,s.stateNode.containerInfo);break;case 10:var u=s.type._context,f=s.memoizedProps.value;Xt(zf,u._currentValue),u._currentValue=f;break;case 13:if(u=s.memoizedState,u!==null)return u.dehydrated!==null?(Xt(dn,dn.current&1),s.flags|=128,null):l&s.child.childLanes?IS(i,s,l):(Xt(dn,dn.current&1),i=ya(i,s,l),i!==null?i.sibling:null);Xt(dn,dn.current&1);break;case 19:if(u=(l&s.childLanes)!==0,i.flags&128){if(u)return PS(i,s,l);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Xt(dn,dn.current),u)break;return null;case 22:case 23:return s.lanes=0,DS(i,s,l)}return ya(i,s,l)}var NS,Zk,LS,BS;NS=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}};Zk=function(){};LS=function(i,s,l,u){var f=i.memoizedProps;if(f!==u){i=s.stateNode,nc(Os.current);var k=null;switch(l){case"input":f=fk(i,f),u=fk(i,u),k=[];break;case"select":f=hn({},f,{value:void 0}),u=hn({},u,{value:void 0}),k=[];break;case"textarea":f=gk(i,f),u=gk(i,u),k=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(i.onclick=Pf)}wk(l,u);var b;l=null;for(C in f)if(!u.hasOwnProperty(C)&&f.hasOwnProperty(C)&&f[C]!=null)if(C==="style"){var A=f[C];for(b in A)A.hasOwnProperty(b)&&(l||(l={}),l[b]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(wu.hasOwnProperty(C)?k||(k=[]):(k=k||[]).push(C,null));for(C in u){var v=u[C];if(A=f!=null?f[C]:void 0,u.hasOwnProperty(C)&&v!==A&&(v!=null||A!=null))if(C==="style")if(A){for(b in A)!A.hasOwnProperty(b)||v&&v.hasOwnProperty(b)||(l||(l={}),l[b]="");for(b in v)v.hasOwnProperty(b)&&A[b]!==v[b]&&(l||(l={}),l[b]=v[b])}else l||(k||(k=[]),k.push(C,l)),l=v;else C==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,A=A?A.__html:void 0,v!=null&&A!==v&&(k=k||[]).push(C,v)):C==="children"?typeof v!="string"&&typeof v!="number"||(k=k||[]).push(C,""+v):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(wu.hasOwnProperty(C)?(v!=null&&C==="onScroll"&&en("scroll",i),k||A===v||(k=[])):(k=k||[]).push(C,v))}l&&(k=k||[]).push("style",l);var C=k;(s.updateQueue=C)&&(s.flags|=4)}};BS=function(i,s,l,u){l!==u&&(s.flags|=4)};function tu(i,s){if(!sn)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function Mi(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,u=0;if(s)for(var f=i.child;f!==null;)l|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)l|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=u,i.childLanes=l,s}function Ez(i,s,l){var u=s.pendingProps;switch(Uw(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mi(s),null;case 1:return wo(s.type)&&Nf(),Mi(s),null;case 3:return u=s.stateNode,hd(),tn(ko),tn(Ni),$w(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(i===null||i.child===null)&&(Yh(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,Yr!==null&&(Xk(Yr),Yr=null))),Zk(i,s),Mi(s),null;case 5:Qw(s);var f=nc(Mu.current);if(l=s.type,i!==null&&s.stateNode!=null)LS(i,s,l,u,f),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!u){if(s.stateNode===null)throw Error(Se(166));return Mi(s),null}if(i=nc(Os.current),Yh(s)){u=s.stateNode,l=s.type;var k=s.memoizedProps;switch(u[Ps]=s,u[Du]=k,i=(s.mode&1)!==0,l){case"dialog":en("cancel",u),en("close",u);break;case"iframe":case"object":case"embed":en("load",u);break;case"video":case"audio":for(f=0;f<lu.length;f++)en(lu[f],u);break;case"source":en("error",u);break;case"img":case"image":case"link":en("error",u),en("load",u);break;case"details":en("toggle",u);break;case"input":tx(u,k),en("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!k.multiple},en("invalid",u);break;case"textarea":ix(u,k),en("invalid",u)}wk(l,k),f=null;for(var b in k)if(k.hasOwnProperty(b)){var A=k[b];b==="children"?typeof A=="string"?u.textContent!==A&&(k.suppressHydrationWarning!==!0&&Kh(u.textContent,A,i),f=["children",A]):typeof A=="number"&&u.textContent!==""+A&&(k.suppressHydrationWarning!==!0&&Kh(u.textContent,A,i),f=["children",""+A]):wu.hasOwnProperty(b)&&A!=null&&b==="onScroll"&&en("scroll",u)}switch(l){case"input":Fh(u),nx(u,k,!0);break;case"textarea":Fh(u),ox(u);break;case"select":case"option":break;default:typeof k.onClick=="function"&&(u.onclick=Pf)}u=f,s.updateQueue=u,u!==null&&(s.flags|=4)}else{b=f.nodeType===9?f:f.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=lE(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=b.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof u.is=="string"?i=b.createElement(l,{is:u.is}):(i=b.createElement(l),l==="select"&&(b=i,u.multiple?b.multiple=!0:u.size&&(b.size=u.size))):i=b.createElementNS(i,l),i[Ps]=s,i[Du]=u,NS(i,s,!1,!1),s.stateNode=i;e:{switch(b=bk(l,u),l){case"dialog":en("cancel",i),en("close",i),f=u;break;case"iframe":case"object":case"embed":en("load",i),f=u;break;case"video":case"audio":for(f=0;f<lu.length;f++)en(lu[f],i);f=u;break;case"source":en("error",i),f=u;break;case"img":case"image":case"link":en("error",i),en("load",i),f=u;break;case"details":en("toggle",i),f=u;break;case"input":tx(i,u),f=fk(i,u),en("invalid",i);break;case"option":f=u;break;case"select":i._wrapperState={wasMultiple:!!u.multiple},f=hn({},u,{value:void 0}),en("invalid",i);break;case"textarea":ix(i,u),f=gk(i,u),en("invalid",i);break;default:f=u}wk(l,f),A=f;for(k in A)if(A.hasOwnProperty(k)){var v=A[k];k==="style"?uE(i,v):k==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&cE(i,v)):k==="children"?typeof v=="string"?(l!=="textarea"||v!=="")&&bu(i,v):typeof v=="number"&&bu(i,""+v):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(wu.hasOwnProperty(k)?v!=null&&k==="onScroll"&&en("scroll",i):v!=null&&Sw(i,k,v,b))}switch(l){case"input":Fh(i),nx(i,u,!1);break;case"textarea":Fh(i),ox(i);break;case"option":u.value!=null&&i.setAttribute("value",""+kl(u.value));break;case"select":i.multiple=!!u.multiple,k=u.value,k!=null?Xc(i,!!u.multiple,k,!1):u.defaultValue!=null&&Xc(i,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(i.onclick=Pf)}switch(l){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Mi(s),null;case 6:if(i&&s.stateNode!=null)BS(i,s,i.memoizedProps,u);else{if(typeof u!="string"&&s.stateNode===null)throw Error(Se(166));if(l=nc(Mu.current),nc(Os.current),Yh(s)){if(u=s.stateNode,l=s.memoizedProps,u[Ps]=s,(k=u.nodeValue!==l)&&(i=Ho,i!==null))switch(i.tag){case 3:Kh(u.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Kh(u.nodeValue,l,(i.mode&1)!==0)}k&&(s.flags|=4)}else u=(l.nodeType===9?l:l.ownerDocument).createTextNode(u),u[Ps]=s,s.stateNode=u}return Mi(s),null;case 13:if(tn(dn),u=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(sn&&Uo!==null&&s.mode&1&&!(s.flags&128))JE(),dd(),s.flags|=98560,k=!1;else if(k=Yh(s),u!==null&&u.dehydrated!==null){if(i===null){if(!k)throw Error(Se(318));if(k=s.memoizedState,k=k!==null?k.dehydrated:null,!k)throw Error(Se(317));k[Ps]=s}else dd(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Mi(s),k=!1}else Yr!==null&&(Xk(Yr),Yr=null),k=!0;if(!k)return s.flags&65536?s:null}return s.flags&128?(s.lanes=l,s):(u=u!==null,u!==(i!==null&&i.memoizedState!==null)&&u&&(s.child.flags|=8192,s.mode&1&&(i===null||dn.current&1?Vn===0&&(Vn=3):cb())),s.updateQueue!==null&&(s.flags|=4),Mi(s),null);case 4:return hd(),Zk(i,s),i===null&&Eu(s.stateNode.containerInfo),Mi(s),null;case 10:return qw(s.type._context),Mi(s),null;case 17:return wo(s.type)&&Nf(),Mi(s),null;case 19:if(tn(dn),k=s.memoizedState,k===null)return Mi(s),null;if(u=(s.flags&128)!==0,b=k.rendering,b===null)if(u)tu(k,!1);else{if(Vn!==0||i!==null&&i.flags&128)for(i=s.child;i!==null;){if(b=Ff(i),b!==null){for(s.flags|=128,tu(k,!1),u=b.updateQueue,u!==null&&(s.updateQueue=u,s.flags|=4),s.subtreeFlags=0,u=l,l=s.child;l!==null;)k=l,i=u,k.flags&=14680066,b=k.alternate,b===null?(k.childLanes=0,k.lanes=i,k.child=null,k.subtreeFlags=0,k.memoizedProps=null,k.memoizedState=null,k.updateQueue=null,k.dependencies=null,k.stateNode=null):(k.childLanes=b.childLanes,k.lanes=b.lanes,k.child=b.child,k.subtreeFlags=0,k.deletions=null,k.memoizedProps=b.memoizedProps,k.memoizedState=b.memoizedState,k.updateQueue=b.updateQueue,k.type=b.type,i=b.dependencies,k.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Xt(dn,dn.current&1|2),s.child}i=i.sibling}k.tail!==null&&Sn()>pd&&(s.flags|=128,u=!0,tu(k,!1),s.lanes=4194304)}else{if(!u)if(i=Ff(b),i!==null){if(s.flags|=128,u=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),tu(k,!0),k.tail===null&&k.tailMode==="hidden"&&!b.alternate&&!sn)return Mi(s),null}else 2*Sn()-k.renderingStartTime>pd&&l!==1073741824&&(s.flags|=128,u=!0,tu(k,!1),s.lanes=4194304);k.isBackwards?(b.sibling=s.child,s.child=b):(l=k.last,l!==null?l.sibling=b:s.child=b,k.last=b)}return k.tail!==null?(s=k.tail,k.rendering=s,k.tail=s.sibling,k.renderingStartTime=Sn(),s.sibling=null,l=dn.current,Xt(dn,u?l&1|2:l&1),s):(Mi(s),null);case 22:case 23:return lb(),u=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==u&&(s.flags|=8192),u&&s.mode&1?Vo&1073741824&&(Mi(s),s.subtreeFlags&6&&(s.flags|=8192)):Mi(s),null;case 24:return null;case 25:return null}throw Error(Se(156,s.tag))}function Sz(i,s){switch(Uw(s),s.tag){case 1:return wo(s.type)&&Nf(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return hd(),tn(ko),tn(Ni),$w(),i=s.flags,i&65536&&!(i&128)?(s.flags=i&-65537|128,s):null;case 5:return Qw(s),null;case 13:if(tn(dn),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(Se(340));dd()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return tn(dn),null;case 4:return hd(),null;case 10:return qw(s.type._context),null;case 22:case 23:return lb(),null;case 24:return null;default:return null}}var Jh=!1,Ii=!1,Dz=typeof WeakSet=="function"?WeakSet:Set,je=null;function Qc(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(u){bn(i,s,u)}else l.current=null}function qk(i,s,l){try{l()}catch(u){bn(i,s,u)}}var Gx=!1;function Tz(i,s){if(Tk=Tf,i=RE(),Fw(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var f=u.anchorOffset,k=u.focusNode;u=u.focusOffset;try{l.nodeType,k.nodeType}catch{l=null;break e}var b=0,A=-1,v=-1,C=0,B=0,M=i,D=null;t:for(;;){for(var N;M!==l||f!==0&&M.nodeType!==3||(A=b+f),M!==k||u!==0&&M.nodeType!==3||(v=b+u),M.nodeType===3&&(b+=M.nodeValue.length),(N=M.firstChild)!==null;)D=M,M=N;for(;;){if(M===i)break t;if(D===l&&++C===f&&(A=b),D===k&&++B===u&&(v=b),(N=M.nextSibling)!==null)break;M=D,D=M.parentNode}M=N}l=A===-1||v===-1?null:{start:A,end:v}}else l=null}l=l||{start:0,end:0}}else l=null;for(Mk={focusedElem:i,selectionRange:l},Tf=!1,je=s;je!==null;)if(s=je,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,je=i;else for(;je!==null;){s=je;try{var j=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var H=j.memoizedProps,Q=j.memoizedState,q=s.stateNode,V=q.getSnapshotBeforeUpdate(s.elementType===s.type?H:Gr(s.type,H),Q);q.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var Z=s.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Se(163))}}catch(te){bn(s,s.return,te)}if(i=s.sibling,i!==null){i.return=s.return,je=i;break}je=s.return}return j=Gx,Gx=!1,j}function mu(i,s,l){var u=s.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&i)===i){var k=f.destroy;f.destroy=void 0,k!==void 0&&qk(s,l,k)}f=f.next}while(f!==u)}}function pp(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var u=l.create;l.destroy=u()}l=l.next}while(l!==s)}}function Gk(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function OS(i){var s=i.alternate;s!==null&&(i.alternate=null,OS(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Ps],delete s[Du],delete s[Nk],delete s[uz],delete s[hz])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function zS(i){return i.tag===5||i.tag===3||i.tag===4}function Kx(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||zS(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Kk(i,s,l){var u=i.tag;if(u===5||u===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Pf));else if(u!==4&&(i=i.child,i!==null))for(Kk(i,s,l),i=i.sibling;i!==null;)Kk(i,s,l),i=i.sibling}function Yk(i,s,l){var u=i.tag;if(u===5||u===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(u!==4&&(i=i.child,i!==null))for(Yk(i,s,l),i=i.sibling;i!==null;)Yk(i,s,l),i=i.sibling}var ui=null,Kr=!1;function Ka(i,s,l){for(l=l.child;l!==null;)jS(i,s,l),l=l.sibling}function jS(i,s,l){if(Bs&&typeof Bs.onCommitFiberUnmount=="function")try{Bs.onCommitFiberUnmount(sp,l)}catch{}switch(l.tag){case 5:Ii||Qc(l,s);case 6:var u=ui,f=Kr;ui=null,Ka(i,s,l),ui=u,Kr=f,ui!==null&&(Kr?(i=ui,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):ui.removeChild(l.stateNode));break;case 18:ui!==null&&(Kr?(i=ui,l=l.stateNode,i.nodeType===8?Rg(i.parentNode,l):i.nodeType===1&&Rg(i,l),Au(i)):Rg(ui,l.stateNode));break;case 4:u=ui,f=Kr,ui=l.stateNode.containerInfo,Kr=!0,Ka(i,s,l),ui=u,Kr=f;break;case 0:case 11:case 14:case 15:if(!Ii&&(u=l.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var k=f,b=k.destroy;k=k.tag,b!==void 0&&(k&2||k&4)&&qk(l,s,b),f=f.next}while(f!==u)}Ka(i,s,l);break;case 1:if(!Ii&&(Qc(l,s),u=l.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=l.memoizedProps,u.state=l.memoizedState,u.componentWillUnmount()}catch(A){bn(l,s,A)}Ka(i,s,l);break;case 21:Ka(i,s,l);break;case 22:l.mode&1?(Ii=(u=Ii)||l.memoizedState!==null,Ka(i,s,l),Ii=u):Ka(i,s,l);break;default:Ka(i,s,l)}}function Yx(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new Dz),s.forEach(function(u){var f=jz.bind(null,i,u);l.has(u)||(l.add(u),u.then(f,f))})}}function qr(i,s){var l=s.deletions;if(l!==null)for(var u=0;u<l.length;u++){var f=l[u];try{var k=i,b=s,A=b;e:for(;A!==null;){switch(A.tag){case 5:ui=A.stateNode,Kr=!1;break e;case 3:ui=A.stateNode.containerInfo,Kr=!0;break e;case 4:ui=A.stateNode.containerInfo,Kr=!0;break e}A=A.return}if(ui===null)throw Error(Se(160));jS(k,b,f),ui=null,Kr=!1;var v=f.alternate;v!==null&&(v.return=null),f.return=null}catch(C){bn(f,s,C)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)RS(s,i),s=s.sibling}function RS(i,s){var l=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(qr(s,i),Ms(i),u&4){try{mu(3,i,i.return),pp(3,i)}catch(H){bn(i,i.return,H)}try{mu(5,i,i.return)}catch(H){bn(i,i.return,H)}}break;case 1:qr(s,i),Ms(i),u&512&&l!==null&&Qc(l,l.return);break;case 5:if(qr(s,i),Ms(i),u&512&&l!==null&&Qc(l,l.return),i.flags&32){var f=i.stateNode;try{bu(f,"")}catch(H){bn(i,i.return,H)}}if(u&4&&(f=i.stateNode,f!=null)){var k=i.memoizedProps,b=l!==null?l.memoizedProps:k,A=i.type,v=i.updateQueue;if(i.updateQueue=null,v!==null)try{A==="input"&&k.type==="radio"&&k.name!=null&&sE(f,k),bk(A,b);var C=bk(A,k);for(b=0;b<v.length;b+=2){var B=v[b],M=v[b+1];B==="style"?uE(f,M):B==="dangerouslySetInnerHTML"?cE(f,M):B==="children"?bu(f,M):Sw(f,B,M,C)}switch(A){case"input":pk(f,k);break;case"textarea":aE(f,k);break;case"select":var D=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!k.multiple;var N=k.value;N!=null?Xc(f,!!k.multiple,N,!1):D!==!!k.multiple&&(k.defaultValue!=null?Xc(f,!!k.multiple,k.defaultValue,!0):Xc(f,!!k.multiple,k.multiple?[]:"",!1))}f[Du]=k}catch(H){bn(i,i.return,H)}}break;case 6:if(qr(s,i),Ms(i),u&4){if(i.stateNode===null)throw Error(Se(162));f=i.stateNode,k=i.memoizedProps;try{f.nodeValue=k}catch(H){bn(i,i.return,H)}}break;case 3:if(qr(s,i),Ms(i),u&4&&l!==null&&l.memoizedState.isDehydrated)try{Au(s.containerInfo)}catch(H){bn(i,i.return,H)}break;case 4:qr(s,i),Ms(i);break;case 13:qr(s,i),Ms(i),f=i.child,f.flags&8192&&(k=f.memoizedState!==null,f.stateNode.isHidden=k,!k||f.alternate!==null&&f.alternate.memoizedState!==null||(sb=Sn())),u&4&&Yx(i);break;case 22:if(B=l!==null&&l.memoizedState!==null,i.mode&1?(Ii=(C=Ii)||B,qr(s,i),Ii=C):qr(s,i),Ms(i),u&8192){if(C=i.memoizedState!==null,(i.stateNode.isHidden=C)&&!B&&i.mode&1)for(je=i,B=i.child;B!==null;){for(M=je=B;je!==null;){switch(D=je,N=D.child,D.tag){case 0:case 11:case 14:case 15:mu(4,D,D.return);break;case 1:Qc(D,D.return);var j=D.stateNode;if(typeof j.componentWillUnmount=="function"){u=D,l=D.return;try{s=u,j.props=s.memoizedProps,j.state=s.memoizedState,j.componentWillUnmount()}catch(H){bn(u,l,H)}}break;case 5:Qc(D,D.return);break;case 22:if(D.memoizedState!==null){$x(M);continue}}N!==null?(N.return=D,je=N):$x(M)}B=B.sibling}e:for(B=null,M=i;;){if(M.tag===5){if(B===null){B=M;try{f=M.stateNode,C?(k=f.style,typeof k.setProperty=="function"?k.setProperty("display","none","important"):k.display="none"):(A=M.stateNode,v=M.memoizedProps.style,b=v!=null&&v.hasOwnProperty("display")?v.display:null,A.style.display=dE("display",b))}catch(H){bn(i,i.return,H)}}}else if(M.tag===6){if(B===null)try{M.stateNode.nodeValue=C?"":M.memoizedProps}catch(H){bn(i,i.return,H)}}else if((M.tag!==22&&M.tag!==23||M.memoizedState===null||M===i)&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===i)break e;for(;M.sibling===null;){if(M.return===null||M.return===i)break e;B===M&&(B=null),M=M.return}B===M&&(B=null),M.sibling.return=M.return,M=M.sibling}}break;case 19:qr(s,i),Ms(i),u&4&&Yx(i);break;case 21:break;default:qr(s,i),Ms(i)}}function Ms(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(zS(l)){var u=l;break e}l=l.return}throw Error(Se(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(bu(f,""),u.flags&=-33);var k=Kx(i);Yk(i,k,f);break;case 3:case 4:var b=u.stateNode.containerInfo,A=Kx(i);Kk(i,A,b);break;default:throw Error(Se(161))}}catch(v){bn(i,i.return,v)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function Mz(i,s,l){je=i,FS(i)}function FS(i,s,l){for(var u=(i.mode&1)!==0;je!==null;){var f=je,k=f.child;if(f.tag===22&&u){var b=f.memoizedState!==null||Jh;if(!b){var A=f.alternate,v=A!==null&&A.memoizedState!==null||Ii;A=Jh;var C=Ii;if(Jh=b,(Ii=v)&&!C)for(je=f;je!==null;)b=je,v=b.child,b.tag===22&&b.memoizedState!==null?Jx(f):v!==null?(v.return=b,je=v):Jx(f);for(;k!==null;)je=k,FS(k),k=k.sibling;je=f,Jh=A,Ii=C}Qx(i)}else f.subtreeFlags&8772&&k!==null?(k.return=f,je=k):Qx(i)}}function Qx(i){for(;je!==null;){var s=je;if(s.flags&8772){var l=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Ii||pp(5,s);break;case 1:var u=s.stateNode;if(s.flags&4&&!Ii)if(l===null)u.componentDidMount();else{var f=s.elementType===s.type?l.memoizedProps:Gr(s.type,l.memoizedProps);u.componentDidUpdate(f,l.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var k=s.updateQueue;k!==null&&Nx(s,k,u);break;case 3:var b=s.updateQueue;if(b!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Nx(s,b,l)}break;case 5:var A=s.stateNode;if(l===null&&s.flags&4){l=A;var v=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&l.focus();break;case"img":v.src&&(l.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var C=s.alternate;if(C!==null){var B=C.memoizedState;if(B!==null){var M=B.dehydrated;M!==null&&Au(M)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Se(163))}Ii||s.flags&512&&Gk(s)}catch(D){bn(s,s.return,D)}}if(s===i){je=null;break}if(l=s.sibling,l!==null){l.return=s.return,je=l;break}je=s.return}}function $x(i){for(;je!==null;){var s=je;if(s===i){je=null;break}var l=s.sibling;if(l!==null){l.return=s.return,je=l;break}je=s.return}}function Jx(i){for(;je!==null;){var s=je;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{pp(4,s)}catch(v){bn(s,l,v)}break;case 1:var u=s.stateNode;if(typeof u.componentDidMount=="function"){var f=s.return;try{u.componentDidMount()}catch(v){bn(s,f,v)}}var k=s.return;try{Gk(s)}catch(v){bn(s,k,v)}break;case 5:var b=s.return;try{Gk(s)}catch(v){bn(s,b,v)}}}catch(v){bn(s,s.return,v)}if(s===i){je=null;break}var A=s.sibling;if(A!==null){A.return=s.return,je=A;break}je=s.return}}var Iz=Math.ceil,Hf=Ca.ReactCurrentDispatcher,ob=Ca.ReactCurrentOwner,hr=Ca.ReactCurrentBatchConfig,Mt=0,ei=null,Nn=null,hi=0,Vo=0,$c=_l(0),Vn=0,Lu=null,cc=0,mp=0,rb=0,gu=null,mo=null,sb=0,pd=1/0,fa=null,Wf=!1,Qk=null,hl=null,Xh=!1,ol=null,Zf=0,ku=0,$k=null,ff=-1,pf=0;function Qi(){return Mt&6?Sn():ff!==-1?ff:ff=Sn()}function fl(i){return i.mode&1?Mt&2&&hi!==0?hi&-hi:pz.transition!==null?(pf===0&&(pf=AE()),pf):(i=Ut,i!==0||(i=window.event,i=i===void 0?16:ME(i.type)),i):1}function Jr(i,s,l,u){if(50<ku)throw ku=0,$k=null,Error(Se(185));Ru(i,l,u),(!(Mt&2)||i!==ei)&&(i===ei&&(!(Mt&2)&&(mp|=l),Vn===4&&tl(i,hi)),bo(i,u),l===1&&Mt===0&&!(s.mode&1)&&(pd=Sn()+500,up&&vl()))}function bo(i,s){var l=i.callbackNode;pO(i,s);var u=Df(i,i===ei?hi:0);if(u===0)l!==null&&ax(l),i.callbackNode=null,i.callbackPriority=0;else if(s=u&-u,i.callbackPriority!==s){if(l!=null&&ax(l),s===1)i.tag===0?fz(Xx.bind(null,i)):YE(Xx.bind(null,i)),cz(function(){!(Mt&6)&&vl()}),l=null;else{switch(CE(u)){case 1:l=Pw;break;case 4:l=vE;break;case 16:l=Sf;break;case 536870912:l=yE;break;default:l=Sf}l=KS(l,VS.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function VS(i,s){if(ff=-1,pf=0,Mt&6)throw Error(Se(327));var l=i.callbackNode;if(od()&&i.callbackNode!==l)return null;var u=Df(i,i===ei?hi:0);if(u===0)return null;if(u&30||u&i.expiredLanes||s)s=qf(i,u);else{s=u;var f=Mt;Mt|=2;var k=HS();(ei!==i||hi!==s)&&(fa=null,pd=Sn()+500,oc(i,s));do try{Lz();break}catch(A){US(i,A)}while(1);Zw(),Hf.current=k,Mt=f,Nn!==null?s=0:(ei=null,hi=0,s=Vn)}if(s!==0){if(s===2&&(f=Ck(i),f!==0&&(u=f,s=Jk(i,f))),s===1)throw l=Lu,oc(i,0),tl(i,u),bo(i,Sn()),l;if(s===6)tl(i,u);else{if(f=i.current.alternate,!(u&30)&&!Pz(f)&&(s=qf(i,u),s===2&&(k=Ck(i),k!==0&&(u=k,s=Jk(i,k))),s===1))throw l=Lu,oc(i,0),tl(i,u),bo(i,Sn()),l;switch(i.finishedWork=f,i.finishedLanes=u,s){case 0:case 1:throw Error(Se(345));case 2:Jl(i,mo,fa);break;case 3:if(tl(i,u),(u&130023424)===u&&(s=sb+500-Sn(),10<s)){if(Df(i,0)!==0)break;if(f=i.suspendedLanes,(f&u)!==u){Qi(),i.pingedLanes|=i.suspendedLanes&f;break}i.timeoutHandle=Pk(Jl.bind(null,i,mo,fa),s);break}Jl(i,mo,fa);break;case 4:if(tl(i,u),(u&4194240)===u)break;for(s=i.eventTimes,f=-1;0<u;){var b=31-$r(u);k=1<<b,b=s[b],b>f&&(f=b),u&=~k}if(u=f,u=Sn()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Iz(u/1960))-u,10<u){i.timeoutHandle=Pk(Jl.bind(null,i,mo,fa),u);break}Jl(i,mo,fa);break;case 5:Jl(i,mo,fa);break;default:throw Error(Se(329))}}}return bo(i,Sn()),i.callbackNode===l?VS.bind(null,i):null}function Jk(i,s){var l=gu;return i.current.memoizedState.isDehydrated&&(oc(i,s).flags|=256),i=qf(i,s),i!==2&&(s=mo,mo=l,s!==null&&Xk(s)),i}function Xk(i){mo===null?mo=i:mo.push.apply(mo,i)}function Pz(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var u=0;u<l.length;u++){var f=l[u],k=f.getSnapshot;f=f.value;try{if(!Xr(k(),f))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function tl(i,s){for(s&=~rb,s&=~mp,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-$r(s),u=1<<l;i[l]=-1,s&=~u}}function Xx(i){if(Mt&6)throw Error(Se(327));od();var s=Df(i,0);if(!(s&1))return bo(i,Sn()),null;var l=qf(i,s);if(i.tag!==0&&l===2){var u=Ck(i);u!==0&&(s=u,l=Jk(i,u))}if(l===1)throw l=Lu,oc(i,0),tl(i,s),bo(i,Sn()),l;if(l===6)throw Error(Se(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Jl(i,mo,fa),bo(i,Sn()),null}function ab(i,s){var l=Mt;Mt|=1;try{return i(s)}finally{Mt=l,Mt===0&&(pd=Sn()+500,up&&vl())}}function dc(i){ol!==null&&ol.tag===0&&!(Mt&6)&&od();var s=Mt;Mt|=1;var l=hr.transition,u=Ut;try{if(hr.transition=null,Ut=1,i)return i()}finally{Ut=u,hr.transition=l,Mt=s,!(Mt&6)&&vl()}}function lb(){Vo=$c.current,tn($c)}function oc(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,lz(l)),Nn!==null)for(l=Nn.return;l!==null;){var u=l;switch(Uw(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Nf();break;case 3:hd(),tn(ko),tn(Ni),$w();break;case 5:Qw(u);break;case 4:hd();break;case 13:tn(dn);break;case 19:tn(dn);break;case 10:qw(u.type._context);break;case 22:case 23:lb()}l=l.return}if(ei=i,Nn=i=pl(i.current,null),hi=Vo=s,Vn=0,Lu=null,rb=mp=cc=0,mo=gu=null,tc!==null){for(s=0;s<tc.length;s++)if(l=tc[s],u=l.interleaved,u!==null){l.interleaved=null;var f=u.next,k=l.pending;if(k!==null){var b=k.next;k.next=f,u.next=b}l.pending=u}tc=null}return i}function US(i,s){do{var l=Nn;try{if(Zw(),df.current=Uf,Vf){for(var u=un.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}Vf=!1}if(lc=0,Jn=Fn=un=null,pu=!1,Iu=0,ob.current=null,l===null||l.return===null){Vn=1,Lu=s,Nn=null;break}e:{var k=i,b=l.return,A=l,v=s;if(s=hi,A.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var C=v,B=A,M=B.tag;if(!(B.mode&1)&&(M===0||M===11||M===15)){var D=B.alternate;D?(B.updateQueue=D.updateQueue,B.memoizedState=D.memoizedState,B.lanes=D.lanes):(B.updateQueue=null,B.memoizedState=null)}var N=Fx(b);if(N!==null){N.flags&=-257,Vx(N,b,A,k,s),N.mode&1&&Rx(k,C,s),s=N,v=C;var j=s.updateQueue;if(j===null){var H=new Set;H.add(v),s.updateQueue=H}else j.add(v);break e}else{if(!(s&1)){Rx(k,C,s),cb();break e}v=Error(Se(426))}}else if(sn&&A.mode&1){var Q=Fx(b);if(Q!==null){!(Q.flags&65536)&&(Q.flags|=256),Vx(Q,b,A,k,s),Hw(fd(v,A));break e}}k=v=fd(v,A),Vn!==4&&(Vn=2),gu===null?gu=[k]:gu.push(k),k=b;do{switch(k.tag){case 3:k.flags|=65536,s&=-s,k.lanes|=s;var q=xS(k,v,s);Px(k,q);break e;case 1:A=v;var V=k.type,Z=k.stateNode;if(!(k.flags&128)&&(typeof V.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(hl===null||!hl.has(Z)))){k.flags|=65536,s&=-s,k.lanes|=s;var te=ES(k,A,s);Px(k,te);break e}}k=k.return}while(k!==null)}ZS(l)}catch(se){s=se,Nn===l&&l!==null&&(Nn=l=l.return);continue}break}while(1)}function HS(){var i=Hf.current;return Hf.current=Uf,i===null?Uf:i}function cb(){(Vn===0||Vn===3||Vn===2)&&(Vn=4),ei===null||!(cc&268435455)&&!(mp&268435455)||tl(ei,hi)}function qf(i,s){var l=Mt;Mt|=2;var u=HS();(ei!==i||hi!==s)&&(fa=null,oc(i,s));do try{Nz();break}catch(f){US(i,f)}while(1);if(Zw(),Mt=l,Hf.current=u,Nn!==null)throw Error(Se(261));return ei=null,hi=0,Vn}function Nz(){for(;Nn!==null;)WS(Nn)}function Lz(){for(;Nn!==null&&!rO();)WS(Nn)}function WS(i){var s=GS(i.alternate,i,Vo);i.memoizedProps=i.pendingProps,s===null?ZS(i):Nn=s,ob.current=null}function ZS(i){var s=i;do{var l=s.alternate;if(i=s.return,s.flags&32768){if(l=Sz(l,s),l!==null){l.flags&=32767,Nn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Vn=6,Nn=null;return}}else if(l=Ez(l,s,Vo),l!==null){Nn=l;return}if(s=s.sibling,s!==null){Nn=s;return}Nn=s=i}while(s!==null);Vn===0&&(Vn=5)}function Jl(i,s,l){var u=Ut,f=hr.transition;try{hr.transition=null,Ut=1,Bz(i,s,l,u)}finally{hr.transition=f,Ut=u}return null}function Bz(i,s,l,u){do od();while(ol!==null);if(Mt&6)throw Error(Se(327));l=i.finishedWork;var f=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(Se(177));i.callbackNode=null,i.callbackPriority=0;var k=l.lanes|l.childLanes;if(mO(i,k),i===ei&&(Nn=ei=null,hi=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||Xh||(Xh=!0,KS(Sf,function(){return od(),null})),k=(l.flags&15990)!==0,l.subtreeFlags&15990||k){k=hr.transition,hr.transition=null;var b=Ut;Ut=1;var A=Mt;Mt|=4,ob.current=null,Tz(i,l),RS(l,i),tz(Mk),Tf=!!Tk,Mk=Tk=null,i.current=l,Mz(l),sO(),Mt=A,Ut=b,hr.transition=k}else i.current=l;if(Xh&&(Xh=!1,ol=i,Zf=f),k=i.pendingLanes,k===0&&(hl=null),cO(l.stateNode),bo(i,Sn()),s!==null)for(u=i.onRecoverableError,l=0;l<s.length;l++)f=s[l],u(f.value,{componentStack:f.stack,digest:f.digest});if(Wf)throw Wf=!1,i=Qk,Qk=null,i;return Zf&1&&i.tag!==0&&od(),k=i.pendingLanes,k&1?i===$k?ku++:(ku=0,$k=i):ku=0,vl(),null}function od(){if(ol!==null){var i=CE(Zf),s=hr.transition,l=Ut;try{if(hr.transition=null,Ut=16>i?16:i,ol===null)var u=!1;else{if(i=ol,ol=null,Zf=0,Mt&6)throw Error(Se(331));var f=Mt;for(Mt|=4,je=i.current;je!==null;){var k=je,b=k.child;if(je.flags&16){var A=k.deletions;if(A!==null){for(var v=0;v<A.length;v++){var C=A[v];for(je=C;je!==null;){var B=je;switch(B.tag){case 0:case 11:case 15:mu(8,B,k)}var M=B.child;if(M!==null)M.return=B,je=M;else for(;je!==null;){B=je;var D=B.sibling,N=B.return;if(OS(B),B===C){je=null;break}if(D!==null){D.return=N,je=D;break}je=N}}}var j=k.alternate;if(j!==null){var H=j.child;if(H!==null){j.child=null;do{var Q=H.sibling;H.sibling=null,H=Q}while(H!==null)}}je=k}}if(k.subtreeFlags&2064&&b!==null)b.return=k,je=b;else e:for(;je!==null;){if(k=je,k.flags&2048)switch(k.tag){case 0:case 11:case 15:mu(9,k,k.return)}var q=k.sibling;if(q!==null){q.return=k.return,je=q;break e}je=k.return}}var V=i.current;for(je=V;je!==null;){b=je;var Z=b.child;if(b.subtreeFlags&2064&&Z!==null)Z.return=b,je=Z;else e:for(b=V;je!==null;){if(A=je,A.flags&2048)try{switch(A.tag){case 0:case 11:case 15:pp(9,A)}}catch(se){bn(A,A.return,se)}if(A===b){je=null;break e}var te=A.sibling;if(te!==null){te.return=A.return,je=te;break e}je=A.return}}if(Mt=f,vl(),Bs&&typeof Bs.onPostCommitFiberRoot=="function")try{Bs.onPostCommitFiberRoot(sp,i)}catch{}u=!0}return u}finally{Ut=l,hr.transition=s}}return!1}function e2(i,s,l){s=fd(l,s),s=xS(i,s,1),i=ul(i,s,1),s=Qi(),i!==null&&(Ru(i,1,s),bo(i,s))}function bn(i,s,l){if(i.tag===3)e2(i,i,l);else for(;s!==null;){if(s.tag===3){e2(s,i,l);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(hl===null||!hl.has(u))){i=fd(l,i),i=ES(s,i,1),s=ul(s,i,1),i=Qi(),s!==null&&(Ru(s,1,i),bo(s,i));break}}s=s.return}}function Oz(i,s,l){var u=i.pingCache;u!==null&&u.delete(s),s=Qi(),i.pingedLanes|=i.suspendedLanes&l,ei===i&&(hi&l)===l&&(Vn===4||Vn===3&&(hi&130023424)===hi&&500>Sn()-sb?oc(i,0):rb|=l),bo(i,s)}function qS(i,s){s===0&&(i.mode&1?(s=Hh,Hh<<=1,!(Hh&130023424)&&(Hh=4194304)):s=1);var l=Qi();i=va(i,s),i!==null&&(Ru(i,s,l),bo(i,l))}function zz(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),qS(i,l)}function jz(i,s){var l=0;switch(i.tag){case 13:var u=i.stateNode,f=i.memoizedState;f!==null&&(l=f.retryLane);break;case 19:u=i.stateNode;break;default:throw Error(Se(314))}u!==null&&u.delete(s),qS(i,l)}var GS;GS=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||ko.current)go=!0;else{if(!(i.lanes&l)&&!(s.flags&128))return go=!1,xz(i,s,l);go=!!(i.flags&131072)}else go=!1,sn&&s.flags&1048576&&QE(s,Of,s.index);switch(s.lanes=0,s.tag){case 2:var u=s.type;hf(i,s),i=s.pendingProps;var f=cd(s,Ni.current);id(s,l),f=Xw(null,s,u,i,f,l);var k=eb();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,wo(u)?(k=!0,Lf(s)):k=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Kw(s),f.updater=hp,s.stateNode=f,f._reactInternals=s,Rk(s,u,i,l),s=Uk(null,s,u,!0,k,l)):(s.tag=0,sn&&k&&Vw(s),Ki(null,s,f,l),s=s.child),s;case 16:u=s.elementType;e:{switch(hf(i,s),i=s.pendingProps,f=u._init,u=f(u._payload),s.type=u,f=s.tag=Fz(u),i=Gr(u,i),f){case 0:s=Vk(null,s,u,i,l);break e;case 1:s=Wx(null,s,u,i,l);break e;case 11:s=Ux(null,s,u,i,l);break e;case 14:s=Hx(null,s,u,Gr(u.type,i),l);break e}throw Error(Se(306,u,""))}return s;case 0:return u=s.type,f=s.pendingProps,f=s.elementType===u?f:Gr(u,f),Vk(i,s,u,f,l);case 1:return u=s.type,f=s.pendingProps,f=s.elementType===u?f:Gr(u,f),Wx(i,s,u,f,l);case 3:e:{if(MS(s),i===null)throw Error(Se(387));u=s.pendingProps,k=s.memoizedState,f=k.element,eS(i,s),Rf(s,u,null,l);var b=s.memoizedState;if(u=b.element,k.isDehydrated)if(k={element:u,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},s.updateQueue.baseState=k,s.memoizedState=k,s.flags&256){f=fd(Error(Se(423)),s),s=Zx(i,s,u,l,f);break e}else if(u!==f){f=fd(Error(Se(424)),s),s=Zx(i,s,u,l,f);break e}else for(Uo=dl(s.stateNode.containerInfo.firstChild),Ho=s,sn=!0,Yr=null,l=oS(s,null,u,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(dd(),u===f){s=ya(i,s,l);break e}Ki(i,s,u,l)}s=s.child}return s;case 5:return rS(s),i===null&&Ok(s),u=s.type,f=s.pendingProps,k=i!==null?i.memoizedProps:null,b=f.children,Ik(u,f)?b=null:k!==null&&Ik(u,k)&&(s.flags|=32),TS(i,s),Ki(i,s,b,l),s.child;case 6:return i===null&&Ok(s),null;case 13:return IS(i,s,l);case 4:return Yw(s,s.stateNode.containerInfo),u=s.pendingProps,i===null?s.child=ud(s,null,u,l):Ki(i,s,u,l),s.child;case 11:return u=s.type,f=s.pendingProps,f=s.elementType===u?f:Gr(u,f),Ux(i,s,u,f,l);case 7:return Ki(i,s,s.pendingProps,l),s.child;case 8:return Ki(i,s,s.pendingProps.children,l),s.child;case 12:return Ki(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(u=s.type._context,f=s.pendingProps,k=s.memoizedProps,b=f.value,Xt(zf,u._currentValue),u._currentValue=b,k!==null)if(Xr(k.value,b)){if(k.children===f.children&&!ko.current){s=ya(i,s,l);break e}}else for(k=s.child,k!==null&&(k.return=s);k!==null;){var A=k.dependencies;if(A!==null){b=k.child;for(var v=A.firstContext;v!==null;){if(v.context===u){if(k.tag===1){v=ka(-1,l&-l),v.tag=2;var C=k.updateQueue;if(C!==null){C=C.shared;var B=C.pending;B===null?v.next=v:(v.next=B.next,B.next=v),C.pending=v}}k.lanes|=l,v=k.alternate,v!==null&&(v.lanes|=l),zk(k.return,l,s),A.lanes|=l;break}v=v.next}}else if(k.tag===10)b=k.type===s.type?null:k.child;else if(k.tag===18){if(b=k.return,b===null)throw Error(Se(341));b.lanes|=l,A=b.alternate,A!==null&&(A.lanes|=l),zk(b,l,s),b=k.sibling}else b=k.child;if(b!==null)b.return=k;else for(b=k;b!==null;){if(b===s){b=null;break}if(k=b.sibling,k!==null){k.return=b.return,b=k;break}b=b.return}k=b}Ki(i,s,f.children,l),s=s.child}return s;case 9:return f=s.type,u=s.pendingProps.children,id(s,l),f=pr(f),u=u(f),s.flags|=1,Ki(i,s,u,l),s.child;case 14:return u=s.type,f=Gr(u,s.pendingProps),f=Gr(u.type,f),Hx(i,s,u,f,l);case 15:return SS(i,s,s.type,s.pendingProps,l);case 17:return u=s.type,f=s.pendingProps,f=s.elementType===u?f:Gr(u,f),hf(i,s),s.tag=1,wo(u)?(i=!0,Lf(s)):i=!1,id(s,l),nS(s,u,f),Rk(s,u,f,l),Uk(null,s,u,!0,i,l);case 19:return PS(i,s,l);case 22:return DS(i,s,l)}throw Error(Se(156,s.tag))};function KS(i,s){return _E(i,s)}function Rz(i,s,l,u){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ur(i,s,l,u){return new Rz(i,s,l,u)}function db(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Fz(i){if(typeof i=="function")return db(i)?1:0;if(i!=null){if(i=i.$$typeof,i===Tw)return 11;if(i===Mw)return 14}return 2}function pl(i,s){var l=i.alternate;return l===null?(l=ur(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function mf(i,s,l,u,f,k){var b=2;if(u=i,typeof i=="function")db(i)&&(b=1);else if(typeof i=="string")b=5;else e:switch(i){case Vc:return rc(l.children,f,k,s);case Dw:b=8,f|=8;break;case ck:return i=ur(12,l,s,f|2),i.elementType=ck,i.lanes=k,i;case dk:return i=ur(13,l,s,f),i.elementType=dk,i.lanes=k,i;case uk:return i=ur(19,l,s,f),i.elementType=uk,i.lanes=k,i;case iE:return gp(l,f,k,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case tE:b=10;break e;case nE:b=9;break e;case Tw:b=11;break e;case Mw:b=14;break e;case $a:b=16,u=null;break e}throw Error(Se(130,i==null?i:typeof i,""))}return s=ur(b,l,s,f),s.elementType=i,s.type=u,s.lanes=k,s}function rc(i,s,l,u){return i=ur(7,i,u,s),i.lanes=l,i}function gp(i,s,l,u){return i=ur(22,i,u,s),i.elementType=iE,i.lanes=l,i.stateNode={isHidden:!1},i}function Gg(i,s,l){return i=ur(6,i,null,s),i.lanes=l,i}function Kg(i,s,l){return s=ur(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function Vz(i,s,l,u,f){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dg(0),this.expirationTimes=Dg(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dg(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function ub(i,s,l,u,f,k,b,A,v){return i=new Vz(i,s,l,A,v),s===1?(s=1,k===!0&&(s|=8)):s=0,k=ur(3,null,null,s),i.current=k,k.stateNode=i,k.memoizedState={element:u,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kw(k),i}function Uz(i,s,l){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fc,key:u==null?null:""+u,children:i,containerInfo:s,implementation:l}}function YS(i){if(!i)return wl;i=i._reactInternals;e:{if(hc(i)!==i||i.tag!==1)throw Error(Se(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(wo(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(Se(171))}if(i.tag===1){var l=i.type;if(wo(l))return KE(i,l,s)}return s}function QS(i,s,l,u,f,k,b,A,v){return i=ub(l,u,!0,i,f,k,b,A,v),i.context=YS(null),l=i.current,u=Qi(),f=fl(l),k=ka(u,f),k.callback=s??null,ul(l,k,f),i.current.lanes=f,Ru(i,f,u),bo(i,u),i}function kp(i,s,l,u){var f=s.current,k=Qi(),b=fl(f);return l=YS(l),s.context===null?s.context=l:s.pendingContext=l,s=ka(k,b),s.payload={element:i},u=u===void 0?null:u,u!==null&&(s.callback=u),i=ul(f,s,b),i!==null&&(Jr(i,f,b,k),cf(i,f,b)),b}function Gf(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function t2(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function hb(i,s){t2(i,s),(i=i.alternate)&&t2(i,s)}function Hz(){return null}var $S=typeof reportError=="function"?reportError:function(i){console.error(i)};function fb(i){this._internalRoot=i}wp.prototype.render=fb.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(Se(409));kp(i,s,null,null)};wp.prototype.unmount=fb.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;dc(function(){kp(null,i,null,null)}),s[_a]=null}};function wp(i){this._internalRoot=i}wp.prototype.unstable_scheduleHydration=function(i){if(i){var s=SE();i={blockedOn:null,target:i,priority:s};for(var l=0;l<el.length&&s!==0&&s<el[l].priority;l++);el.splice(l,0,i),l===0&&TE(i)}};function pb(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function bp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function n2(){}function Wz(i,s,l,u,f){if(f){if(typeof u=="function"){var k=u;u=function(){var C=Gf(b);k.call(C)}}var b=QS(s,u,i,0,null,!1,!1,"",n2);return i._reactRootContainer=b,i[_a]=b.current,Eu(i.nodeType===8?i.parentNode:i),dc(),b}for(;f=i.lastChild;)i.removeChild(f);if(typeof u=="function"){var A=u;u=function(){var C=Gf(v);A.call(C)}}var v=ub(i,0,!1,null,null,!1,!1,"",n2);return i._reactRootContainer=v,i[_a]=v.current,Eu(i.nodeType===8?i.parentNode:i),dc(function(){kp(s,v,l,u)}),v}function _p(i,s,l,u,f){var k=l._reactRootContainer;if(k){var b=k;if(typeof f=="function"){var A=f;f=function(){var v=Gf(b);A.call(v)}}kp(s,b,i,f)}else b=Wz(l,s,i,f,u);return Gf(b)}xE=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=au(s.pendingLanes);l!==0&&(Nw(s,l|1),bo(s,Sn()),!(Mt&6)&&(pd=Sn()+500,vl()))}break;case 13:dc(function(){var u=va(i,1);if(u!==null){var f=Qi();Jr(u,i,1,f)}}),hb(i,1)}};Lw=function(i){if(i.tag===13){var s=va(i,134217728);if(s!==null){var l=Qi();Jr(s,i,134217728,l)}hb(i,134217728)}};EE=function(i){if(i.tag===13){var s=fl(i),l=va(i,s);if(l!==null){var u=Qi();Jr(l,i,s,u)}hb(i,s)}};SE=function(){return Ut};DE=function(i,s){var l=Ut;try{return Ut=i,s()}finally{Ut=l}};vk=function(i,s,l){switch(s){case"input":if(pk(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var u=l[s];if(u!==i&&u.form===i.form){var f=dp(u);if(!f)throw Error(Se(90));rE(u),pk(u,f)}}}break;case"textarea":aE(i,l);break;case"select":s=l.value,s!=null&&Xc(i,!!l.multiple,s,!1)}};pE=ab;mE=dc;var Zz={usingClientEntryPoint:!1,Events:[Vu,Zc,dp,hE,fE,ab]},nu={findFiberByHostInstance:ec,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},qz={bundleType:nu.bundleType,version:nu.version,rendererPackageName:nu.rendererPackageName,rendererConfig:nu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ca.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=wE(i),i===null?null:i.stateNode},findFiberByHostInstance:nu.findFiberByHostInstance||Hz,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ef=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ef.isDisabled&&ef.supportsFiber)try{sp=ef.inject(qz),Bs=ef}catch{}}Zo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zz;Zo.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pb(s))throw Error(Se(200));return Uz(i,s,null,l)};Zo.createRoot=function(i,s){if(!pb(i))throw Error(Se(299));var l=!1,u="",f=$S;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=ub(i,1,!1,null,null,l,!1,u,f),i[_a]=s.current,Eu(i.nodeType===8?i.parentNode:i),new fb(s)};Zo.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(Se(188)):(i=Object.keys(i).join(","),Error(Se(268,i)));return i=wE(s),i=i===null?null:i.stateNode,i};Zo.flushSync=function(i){return dc(i)};Zo.hydrate=function(i,s,l){if(!bp(s))throw Error(Se(200));return _p(null,i,s,!0,l)};Zo.hydrateRoot=function(i,s,l){if(!pb(i))throw Error(Se(405));var u=l!=null&&l.hydratedSources||null,f=!1,k="",b=$S;if(l!=null&&(l.unstable_strictMode===!0&&(f=!0),l.identifierPrefix!==void 0&&(k=l.identifierPrefix),l.onRecoverableError!==void 0&&(b=l.onRecoverableError)),s=QS(s,null,i,1,l??null,f,!1,k,b),i[_a]=s.current,Eu(i),u)for(i=0;i<u.length;i++)l=u[i],f=l._getVersion,f=f(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,f]:s.mutableSourceEagerHydrationData.push(l,f);return new wp(s)};Zo.render=function(i,s,l){if(!bp(s))throw Error(Se(200));return _p(null,i,s,!1,l)};Zo.unmountComponentAtNode=function(i){if(!bp(i))throw Error(Se(40));return i._reactRootContainer?(dc(function(){_p(null,null,i,!1,function(){i._reactRootContainer=null,i[_a]=null})}),!0):!1};Zo.unstable_batchedUpdates=ab;Zo.unstable_renderSubtreeIntoContainer=function(i,s,l,u){if(!bp(l))throw Error(Se(200));if(i==null||i._reactInternals===void 0)throw Error(Se(38));return _p(i,s,l,!1,u)};Zo.version="18.2.0-next-9e3b772b8-20220608";function JS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(JS)}catch(i){console.error(i)}}JS(),Q2.exports=Zo;var XS=Q2.exports,i2=XS;ak.createRoot=i2.createRoot,ak.hydrateRoot=i2.hydrateRoot;const eD=ne.createContext(),Gz=({children:i})=>{const[s,l]=ne.useState([]),[u,f]=ne.useState([]),[k,b]=ne.useState(!1),[A,v]=ne.useState(!1),[C,B]=ne.useState([]);return Y.jsx(eD.Provider,{value:{wisata:s,setWisata:l,myWisata:u,setMyWisata:f,loginModal:k,setLoginModal:b,authenticated:A,setAuthenticated:v,profile:C,setProfile:B},children:i})},yl=()=>ne.useContext(eD),Kz="/assets/logosandbox-215f2262.png";function Yz({onLoginSuccess:i}){return Y.jsx("button",{className:"bg-[#F7911A] text-slate-100 font-semibold px-6 py-2 tracking-wide rounded-full",onClick:i,children:"Login"})}var tD={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o2=Xn.createContext&&Xn.createContext(tD),ml=globalThis&&globalThis.__assign||function(){return ml=Object.assign||function(i){for(var s,l=1,u=arguments.length;l<u;l++){s=arguments[l];for(var f in s)Object.prototype.hasOwnProperty.call(s,f)&&(i[f]=s[f])}return i},ml.apply(this,arguments)},Qz=globalThis&&globalThis.__rest||function(i,s){var l={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&s.indexOf(u)<0&&(l[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,u=Object.getOwnPropertySymbols(i);f<u.length;f++)s.indexOf(u[f])<0&&Object.prototype.propertyIsEnumerable.call(i,u[f])&&(l[u[f]]=i[u[f]]);return l};function nD(i){return i&&i.map(function(s,l){return Xn.createElement(s.tag,ml({key:l},s.attr),nD(s.child))})}function es(i){return function(s){return Xn.createElement($z,ml({attr:ml({},i.attr)},s),nD(i.child))}}function $z(i){var s=function(l){var u=i.attr,f=i.size,k=i.title,b=Qz(i,["attr","size","title"]),A=f||l.size||"1em",v;return l.className&&(v=l.className),i.className&&(v=(v?v+" ":"")+i.className),Xn.createElement("svg",ml({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,u,b,{className:v,style:ml(ml({color:i.color||l.color},l.style),i.style),height:A,width:A,xmlns:"http://www.w3.org/2000/svg"}),k&&Xn.createElement("title",null,k),i.children)};return o2!==void 0?Xn.createElement(o2.Consumer,null,function(l){return s(l)}):s(tD)}function Jz(i){return es({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",stroke:"#000",strokeWidth:"2",points:"18 9 12 15 6 9"}}]})(i)}/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bu(){return Bu=Object.assign?Object.assign.bind():function(i){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(i[u]=l[u])}return i},Bu.apply(this,arguments)}var rl;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(rl||(rl={}));const r2="popstate";function Xz(i){i===void 0&&(i={});function s(u,f){let{pathname:k,search:b,hash:A}=u.location;return ew("",{pathname:k,search:b,hash:A},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function l(u,f){return typeof f=="string"?f:Kf(f)}return tj(s,l,null,i)}function Ln(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}function mb(i,s){if(!i){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function ej(){return Math.random().toString(36).substr(2,8)}function s2(i,s){return{usr:i.state,key:i.key,idx:s}}function ew(i,s,l,u){return l===void 0&&(l=null),Bu({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof s=="string"?bd(s):s,{state:l,key:s&&s.key||u||ej()})}function Kf(i){let{pathname:s="/",search:l="",hash:u=""}=i;return l&&l!=="?"&&(s+=l.charAt(0)==="?"?l:"?"+l),u&&u!=="#"&&(s+=u.charAt(0)==="#"?u:"#"+u),s}function bd(i){let s={};if(i){let l=i.indexOf("#");l>=0&&(s.hash=i.substr(l),i=i.substr(0,l));let u=i.indexOf("?");u>=0&&(s.search=i.substr(u),i=i.substr(0,u)),i&&(s.pathname=i)}return s}function tj(i,s,l,u){u===void 0&&(u={});let{window:f=document.defaultView,v5Compat:k=!1}=u,b=f.history,A=rl.Pop,v=null,C=B();C==null&&(C=0,b.replaceState(Bu({},b.state,{idx:C}),""));function B(){return(b.state||{idx:null}).idx}function M(){A=rl.Pop;let Q=B(),q=Q==null?null:Q-C;C=Q,v&&v({action:A,location:H.location,delta:q})}function D(Q,q){A=rl.Push;let V=ew(H.location,Q,q);l&&l(V,Q),C=B()+1;let Z=s2(V,C),te=H.createHref(V);try{b.pushState(Z,"",te)}catch{f.location.assign(te)}k&&v&&v({action:A,location:H.location,delta:1})}function N(Q,q){A=rl.Replace;let V=ew(H.location,Q,q);l&&l(V,Q),C=B();let Z=s2(V,C),te=H.createHref(V);b.replaceState(Z,"",te),k&&v&&v({action:A,location:H.location,delta:0})}function j(Q){let q=f.location.origin!=="null"?f.location.origin:f.location.href,V=typeof Q=="string"?Q:Kf(Q);return Ln(q,"No window.location.(origin|href) available to create URL for href: "+V),new URL(V,q)}let H={get action(){return A},get location(){return i(f,b)},listen(Q){if(v)throw new Error("A history only accepts one active listener");return f.addEventListener(r2,M),v=Q,()=>{f.removeEventListener(r2,M),v=null}},createHref(Q){return s(f,Q)},createURL:j,encodeLocation(Q){let q=j(Q);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:D,replace:N,go(Q){return b.go(Q)}};return H}var a2;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(a2||(a2={}));function nj(i,s,l){l===void 0&&(l="/");let u=typeof s=="string"?bd(s):s,f=gb(u.pathname||"/",l);if(f==null)return null;let k=iD(i);ij(k);let b=null;for(let A=0;b==null&&A<k.length;++A)b=hj(k[A],mj(f));return b}function iD(i,s,l,u){s===void 0&&(s=[]),l===void 0&&(l=[]),u===void 0&&(u="");let f=(k,b,A)=>{let v={relativePath:A===void 0?k.path||"":A,caseSensitive:k.caseSensitive===!0,childrenIndex:b,route:k};v.relativePath.startsWith("/")&&(Ln(v.relativePath.startsWith(u),'Absolute route path "'+v.relativePath+'" nested under path '+('"'+u+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),v.relativePath=v.relativePath.slice(u.length));let C=gl([u,v.relativePath]),B=l.concat(v);k.children&&k.children.length>0&&(Ln(k.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+C+'".')),iD(k.children,s,B,C)),!(k.path==null&&!k.index)&&s.push({path:C,score:dj(C,k.index),routesMeta:B})};return i.forEach((k,b)=>{var A;if(k.path===""||!((A=k.path)!=null&&A.includes("?")))f(k,b);else for(let v of oD(k.path))f(k,b,v)}),s}function oD(i){let s=i.split("/");if(s.length===0)return[];let[l,...u]=s,f=l.endsWith("?"),k=l.replace(/\?$/,"");if(u.length===0)return f?[k,""]:[k];let b=oD(u.join("/")),A=[];return A.push(...b.map(v=>v===""?k:[k,v].join("/"))),f&&A.push(...b),A.map(v=>i.startsWith("/")&&v===""?"/":v)}function ij(i){i.sort((s,l)=>s.score!==l.score?l.score-s.score:uj(s.routesMeta.map(u=>u.childrenIndex),l.routesMeta.map(u=>u.childrenIndex)))}const oj=/^:\w+$/,rj=3,sj=2,aj=1,lj=10,cj=-2,l2=i=>i==="*";function dj(i,s){let l=i.split("/"),u=l.length;return l.some(l2)&&(u+=cj),s&&(u+=sj),l.filter(f=>!l2(f)).reduce((f,k)=>f+(oj.test(k)?rj:k===""?aj:lj),u)}function uj(i,s){return i.length===s.length&&i.slice(0,-1).every((u,f)=>u===s[f])?i[i.length-1]-s[s.length-1]:0}function hj(i,s){let{routesMeta:l}=i,u={},f="/",k=[];for(let b=0;b<l.length;++b){let A=l[b],v=b===l.length-1,C=f==="/"?s:s.slice(f.length)||"/",B=fj({path:A.relativePath,caseSensitive:A.caseSensitive,end:v},C);if(!B)return null;Object.assign(u,B.params);let M=A.route;k.push({params:u,pathname:gl([f,B.pathname]),pathnameBase:bj(gl([f,B.pathnameBase])),route:M}),B.pathnameBase!=="/"&&(f=gl([f,B.pathnameBase]))}return k}function fj(i,s){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[l,u]=pj(i.path,i.caseSensitive,i.end),f=s.match(l);if(!f)return null;let k=f[0],b=k.replace(/(.)\/+$/,"$1"),A=f.slice(1);return{params:u.reduce((C,B,M)=>{if(B==="*"){let D=A[M]||"";b=k.slice(0,k.length-D.length).replace(/(.)\/+$/,"$1")}return C[B]=gj(A[M]||"",B),C},{}),pathname:k,pathnameBase:b,pattern:i}}function pj(i,s,l){s===void 0&&(s=!1),l===void 0&&(l=!0),mb(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let u=[],f="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(b,A)=>(u.push(A),"/([^\\/]+)"));return i.endsWith("*")?(u.push("*"),f+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?f+="\\/*$":i!==""&&i!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,s?void 0:"i"),u]}function mj(i){try{return decodeURI(i)}catch(s){return mb(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+s+").")),i}}function gj(i,s){try{return decodeURIComponent(i)}catch(l){return mb(!1,'The value for the URL param "'+s+'" will not be decoded because'+(' the string "'+i+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+l+").")),i}}function gb(i,s){if(s==="/")return i;if(!i.toLowerCase().startsWith(s.toLowerCase()))return null;let l=s.endsWith("/")?s.length-1:s.length,u=i.charAt(l);return u&&u!=="/"?null:i.slice(l)||"/"}function kj(i,s){s===void 0&&(s="/");let{pathname:l,search:u="",hash:f=""}=typeof i=="string"?bd(i):i;return{pathname:l?l.startsWith("/")?l:wj(l,s):s,search:_j(u),hash:vj(f)}}function wj(i,s){let l=s.replace(/\/+$/,"").split("/");return i.split("/").forEach(f=>{f===".."?l.length>1&&l.pop():f!=="."&&l.push(f)}),l.length>1?l.join("/"):"/"}function Yg(i,s,l,u){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+s+"` field ["+JSON.stringify(u)+"].  Please separate it out to the ")+("`to."+l+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rD(i){return i.filter((s,l)=>l===0||s.route.path&&s.route.path.length>0)}function sD(i,s,l,u){u===void 0&&(u=!1);let f;typeof i=="string"?f=bd(i):(f=Bu({},i),Ln(!f.pathname||!f.pathname.includes("?"),Yg("?","pathname","search",f)),Ln(!f.pathname||!f.pathname.includes("#"),Yg("#","pathname","hash",f)),Ln(!f.search||!f.search.includes("#"),Yg("#","search","hash",f)));let k=i===""||f.pathname==="",b=k?"/":f.pathname,A;if(u||b==null)A=l;else{let M=s.length-1;if(b.startsWith("..")){let D=b.split("/");for(;D[0]==="..";)D.shift(),M-=1;f.pathname=D.join("/")}A=M>=0?s[M]:"/"}let v=kj(f,A),C=b&&b!=="/"&&b.endsWith("/"),B=(k||b===".")&&l.endsWith("/");return!v.pathname.endsWith("/")&&(C||B)&&(v.pathname+="/"),v}const gl=i=>i.join("/").replace(/\/\/+/g,"/"),bj=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),_j=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,vj=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function yj(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const aD=["post","put","patch","delete"];new Set(aD);const Aj=["get",...aD];new Set(Aj);/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yf(){return Yf=Object.assign?Object.assign.bind():function(i){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(i[u]=l[u])}return i},Yf.apply(this,arguments)}const kb=ne.createContext(null),Cj=ne.createContext(null),_d=ne.createContext(null),vp=ne.createContext(null),Al=ne.createContext({outlet:null,matches:[],isDataRoute:!1}),lD=ne.createContext(null);function xj(i,s){let{relative:l}=s===void 0?{}:s;Hu()||Ln(!1);let{basename:u,navigator:f}=ne.useContext(_d),{hash:k,pathname:b,search:A}=dD(i,{relative:l}),v=b;return u!=="/"&&(v=b==="/"?u:gl([u,b])),f.createHref({pathname:v,search:A,hash:k})}function Hu(){return ne.useContext(vp)!=null}function vd(){return Hu()||Ln(!1),ne.useContext(vp).location}function cD(i){ne.useContext(_d).static||ne.useLayoutEffect(i)}function yd(){let{isDataRoute:i}=ne.useContext(Al);return i?Rj():Ej()}function Ej(){Hu()||Ln(!1);let i=ne.useContext(kb),{basename:s,navigator:l}=ne.useContext(_d),{matches:u}=ne.useContext(Al),{pathname:f}=vd(),k=JSON.stringify(rD(u).map(v=>v.pathnameBase)),b=ne.useRef(!1);return cD(()=>{b.current=!0}),ne.useCallback(function(v,C){if(C===void 0&&(C={}),!b.current)return;if(typeof v=="number"){l.go(v);return}let B=sD(v,JSON.parse(k),f,C.relative==="path");i==null&&s!=="/"&&(B.pathname=B.pathname==="/"?s:gl([s,B.pathname])),(C.replace?l.replace:l.push)(B,C.state,C)},[s,l,k,f,i])}function Sj(){let{matches:i}=ne.useContext(Al),s=i[i.length-1];return s?s.params:{}}function dD(i,s){let{relative:l}=s===void 0?{}:s,{matches:u}=ne.useContext(Al),{pathname:f}=vd(),k=JSON.stringify(rD(u).map(b=>b.pathnameBase));return ne.useMemo(()=>sD(i,JSON.parse(k),f,l==="path"),[i,k,f,l])}function Dj(i,s){return Tj(i,s)}function Tj(i,s,l){Hu()||Ln(!1);let{navigator:u}=ne.useContext(_d),{matches:f}=ne.useContext(Al),k=f[f.length-1],b=k?k.params:{};k&&k.pathname;let A=k?k.pathnameBase:"/";k&&k.route;let v=vd(),C;if(s){var B;let H=typeof s=="string"?bd(s):s;A==="/"||(B=H.pathname)!=null&&B.startsWith(A)||Ln(!1),C=H}else C=v;let M=C.pathname||"/",D=A==="/"?M:M.slice(A.length)||"/",N=nj(i,{pathname:D}),j=Lj(N&&N.map(H=>Object.assign({},H,{params:Object.assign({},b,H.params),pathname:gl([A,u.encodeLocation?u.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?A:gl([A,u.encodeLocation?u.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),f,l);return s&&j?ne.createElement(vp.Provider,{value:{location:Yf({pathname:"/",search:"",hash:"",state:null,key:"default"},C),navigationType:rl.Pop}},j):j}function Mj(){let i=jj(),s=yj(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),l=i instanceof Error?i.stack:null,f={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},k=null;return ne.createElement(ne.Fragment,null,ne.createElement("h2",null,"Unexpected Application Error!"),ne.createElement("h3",{style:{fontStyle:"italic"}},s),l?ne.createElement("pre",{style:f},l):null,k)}const Ij=ne.createElement(Mj,null);class Pj extends ne.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,l){return l.location!==s.location||l.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error||l.error,location:l.location,revalidation:s.revalidation||l.revalidation}}componentDidCatch(s,l){console.error("React Router caught the following error during render",s,l)}render(){return this.state.error?ne.createElement(Al.Provider,{value:this.props.routeContext},ne.createElement(lD.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Nj(i){let{routeContext:s,match:l,children:u}=i,f=ne.useContext(kb);return f&&f.static&&f.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(f.staticContext._deepestRenderedBoundaryId=l.route.id),ne.createElement(Al.Provider,{value:s},u)}function Lj(i,s,l){var u;if(s===void 0&&(s=[]),l===void 0&&(l=null),i==null){var f;if((f=l)!=null&&f.errors)i=l.matches;else return null}let k=i,b=(u=l)==null?void 0:u.errors;if(b!=null){let A=k.findIndex(v=>v.route.id&&(b==null?void 0:b[v.route.id]));A>=0||Ln(!1),k=k.slice(0,Math.min(k.length,A+1))}return k.reduceRight((A,v,C)=>{let B=v.route.id?b==null?void 0:b[v.route.id]:null,M=null;l&&(M=v.route.errorElement||Ij);let D=s.concat(k.slice(0,C+1)),N=()=>{let j;return B?j=M:v.route.Component?j=ne.createElement(v.route.Component,null):v.route.element?j=v.route.element:j=A,ne.createElement(Nj,{match:v,routeContext:{outlet:A,matches:D,isDataRoute:l!=null},children:j})};return l&&(v.route.ErrorBoundary||v.route.errorElement||C===0)?ne.createElement(Pj,{location:l.location,revalidation:l.revalidation,component:M,error:B,children:N(),routeContext:{outlet:null,matches:D,isDataRoute:!0}}):N()},null)}var tw;(function(i){i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate"})(tw||(tw={}));var Ou;(function(i){i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId"})(Ou||(Ou={}));function Bj(i){let s=ne.useContext(kb);return s||Ln(!1),s}function Oj(i){let s=ne.useContext(Cj);return s||Ln(!1),s}function zj(i){let s=ne.useContext(Al);return s||Ln(!1),s}function uD(i){let s=zj(),l=s.matches[s.matches.length-1];return l.route.id||Ln(!1),l.route.id}function jj(){var i;let s=ne.useContext(lD),l=Oj(Ou.UseRouteError),u=uD(Ou.UseRouteError);return s||((i=l.errors)==null?void 0:i[u])}function Rj(){let{router:i}=Bj(tw.UseNavigateStable),s=uD(Ou.UseNavigateStable),l=ne.useRef(!1);return cD(()=>{l.current=!0}),ne.useCallback(function(f,k){k===void 0&&(k={}),l.current&&(typeof f=="number"?i.navigate(f):i.navigate(f,Yf({fromRouteId:s},k)))},[i,s])}function rd(i){Ln(!1)}function Fj(i){let{basename:s="/",children:l=null,location:u,navigationType:f=rl.Pop,navigator:k,static:b=!1}=i;Hu()&&Ln(!1);let A=s.replace(/^\/*/,"/"),v=ne.useMemo(()=>({basename:A,navigator:k,static:b}),[A,k,b]);typeof u=="string"&&(u=bd(u));let{pathname:C="/",search:B="",hash:M="",state:D=null,key:N="default"}=u,j=ne.useMemo(()=>{let H=gb(C,A);return H==null?null:{location:{pathname:H,search:B,hash:M,state:D,key:N},navigationType:f}},[A,C,B,M,D,N,f]);return j==null?null:ne.createElement(_d.Provider,{value:v},ne.createElement(vp.Provider,{children:l,value:j}))}function hD(i){let{children:s,location:l}=i;return Dj(nw(s),l)}var c2;(function(i){i[i.pending=0]="pending",i[i.success=1]="success",i[i.error=2]="error"})(c2||(c2={}));new Promise(()=>{});function nw(i,s){s===void 0&&(s=[]);let l=[];return ne.Children.forEach(i,(u,f)=>{if(!ne.isValidElement(u))return;let k=[...s,f];if(u.type===ne.Fragment){l.push.apply(l,nw(u.props.children,k));return}u.type!==rd&&Ln(!1),!u.props.index||!u.props.children||Ln(!1);let b={id:u.props.id||k.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(b.children=nw(u.props.children,k)),l.push(b)}),l}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function iw(){return iw=Object.assign?Object.assign.bind():function(i){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(i[u]=l[u])}return i},iw.apply(this,arguments)}function Vj(i,s){if(i==null)return{};var l={},u=Object.keys(i),f,k;for(k=0;k<u.length;k++)f=u[k],!(s.indexOf(f)>=0)&&(l[f]=i[f]);return l}function Uj(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Hj(i,s){return i.button===0&&(!s||s==="_self")&&!Uj(i)}function ow(i){return i===void 0&&(i=""),new URLSearchParams(typeof i=="string"||Array.isArray(i)||i instanceof URLSearchParams?i:Object.keys(i).reduce((s,l)=>{let u=i[l];return s.concat(Array.isArray(u)?u.map(f=>[l,f]):[[l,u]])},[]))}function Wj(i,s){let l=ow(i);if(s)for(let u of s.keys())l.has(u)||s.getAll(u).forEach(f=>{l.append(u,f)});return l}const Zj=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function qj(i){let{basename:s,children:l,window:u}=i,f=ne.useRef();f.current==null&&(f.current=Xz({window:u,v5Compat:!0}));let k=f.current,[b,A]=ne.useState({action:k.action,location:k.location});return ne.useLayoutEffect(()=>k.listen(A),[k]),ne.createElement(Fj,{basename:s,children:l,location:b.location,navigationType:b.action,navigator:k})}const Gj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Kj=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Yj=ne.forwardRef(function(s,l){let{onClick:u,relative:f,reloadDocument:k,replace:b,state:A,target:v,to:C,preventScrollReset:B}=s,M=Vj(s,Zj),{basename:D}=ne.useContext(_d),N,j=!1;if(typeof C=="string"&&Kj.test(C)&&(N=C,Gj))try{let V=new URL(window.location.href),Z=C.startsWith("//")?new URL(V.protocol+C):new URL(C),te=gb(Z.pathname,D);Z.origin===V.origin&&te!=null?C=te+Z.search+Z.hash:j=!0}catch{}let H=xj(C,{relative:f}),Q=Qj(C,{replace:b,state:A,target:v,preventScrollReset:B,relative:f});function q(V){u&&u(V),V.defaultPrevented||Q(V)}return ne.createElement("a",iw({},M,{href:N||H,onClick:j||k?u:q,ref:l,target:v}))});var d2;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmitImpl="useSubmitImpl",i.UseFetcher="useFetcher"})(d2||(d2={}));var u2;(function(i){i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(u2||(u2={}));function Qj(i,s){let{target:l,replace:u,state:f,preventScrollReset:k,relative:b}=s===void 0?{}:s,A=yd(),v=vd(),C=dD(i,{relative:b});return ne.useCallback(B=>{if(Hj(B,l)){B.preventDefault();let M=u!==void 0?u:Kf(v)===Kf(C);A(i,{replace:M,state:f,preventScrollReset:k,relative:b})}},[v,A,C,u,f,l,i,k,b])}function fD(i){let s=ne.useRef(ow(i)),l=ne.useRef(!1),u=vd(),f=ne.useMemo(()=>Wj(u.search,l.current?null:s.current),[u.search]),k=yd(),b=ne.useCallback((A,v)=>{const C=ow(typeof A=="function"?A(f):A);l.current=!0,k("?"+C,v)},[k,f]);return[f,b]}function pD(i,s){return function(){return i.apply(s,arguments)}}const{toString:$j}=Object.prototype,{getPrototypeOf:wb}=Object,yp=(i=>s=>{const l=$j.call(s);return i[l]||(i[l]=l.slice(8,-1).toLowerCase())})(Object.create(null)),zs=i=>(i=i.toLowerCase(),s=>yp(s)===i),Ap=i=>s=>typeof s===i,{isArray:Ad}=Array,zu=Ap("undefined");function Jj(i){return i!==null&&!zu(i)&&i.constructor!==null&&!zu(i.constructor)&&fr(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const mD=zs("ArrayBuffer");function Xj(i){let s;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?s=ArrayBuffer.isView(i):s=i&&i.buffer&&mD(i.buffer),s}const eR=Ap("string"),fr=Ap("function"),gD=Ap("number"),Cp=i=>i!==null&&typeof i=="object",tR=i=>i===!0||i===!1,gf=i=>{if(yp(i)!=="object")return!1;const s=wb(i);return(s===null||s===Object.prototype||Object.getPrototypeOf(s)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)},nR=zs("Date"),iR=zs("File"),oR=zs("Blob"),rR=zs("FileList"),sR=i=>Cp(i)&&fr(i.pipe),aR=i=>{let s;return i&&(typeof FormData=="function"&&i instanceof FormData||fr(i.append)&&((s=yp(i))==="formdata"||s==="object"&&fr(i.toString)&&i.toString()==="[object FormData]"))},lR=zs("URLSearchParams"),cR=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Wu(i,s,{allOwnKeys:l=!1}={}){if(i===null||typeof i>"u")return;let u,f;if(typeof i!="object"&&(i=[i]),Ad(i))for(u=0,f=i.length;u<f;u++)s.call(null,i[u],u,i);else{const k=l?Object.getOwnPropertyNames(i):Object.keys(i),b=k.length;let A;for(u=0;u<b;u++)A=k[u],s.call(null,i[A],A,i)}}function kD(i,s){s=s.toLowerCase();const l=Object.keys(i);let u=l.length,f;for(;u-- >0;)if(f=l[u],s===f.toLowerCase())return f;return null}const wD=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),bD=i=>!zu(i)&&i!==wD;function rw(){const{caseless:i}=bD(this)&&this||{},s={},l=(u,f)=>{const k=i&&kD(s,f)||f;gf(s[k])&&gf(u)?s[k]=rw(s[k],u):gf(u)?s[k]=rw({},u):Ad(u)?s[k]=u.slice():s[k]=u};for(let u=0,f=arguments.length;u<f;u++)arguments[u]&&Wu(arguments[u],l);return s}const dR=(i,s,l,{allOwnKeys:u}={})=>(Wu(s,(f,k)=>{l&&fr(f)?i[k]=pD(f,l):i[k]=f},{allOwnKeys:u}),i),uR=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),hR=(i,s,l,u)=>{i.prototype=Object.create(s.prototype,u),i.prototype.constructor=i,Object.defineProperty(i,"super",{value:s.prototype}),l&&Object.assign(i.prototype,l)},fR=(i,s,l,u)=>{let f,k,b;const A={};if(s=s||{},i==null)return s;do{for(f=Object.getOwnPropertyNames(i),k=f.length;k-- >0;)b=f[k],(!u||u(b,i,s))&&!A[b]&&(s[b]=i[b],A[b]=!0);i=l!==!1&&wb(i)}while(i&&(!l||l(i,s))&&i!==Object.prototype);return s},pR=(i,s,l)=>{i=String(i),(l===void 0||l>i.length)&&(l=i.length),l-=s.length;const u=i.indexOf(s,l);return u!==-1&&u===l},mR=i=>{if(!i)return null;if(Ad(i))return i;let s=i.length;if(!gD(s))return null;const l=new Array(s);for(;s-- >0;)l[s]=i[s];return l},gR=(i=>s=>i&&s instanceof i)(typeof Uint8Array<"u"&&wb(Uint8Array)),kR=(i,s)=>{const u=(i&&i[Symbol.iterator]).call(i);let f;for(;(f=u.next())&&!f.done;){const k=f.value;s.call(i,k[0],k[1])}},wR=(i,s)=>{let l;const u=[];for(;(l=i.exec(s))!==null;)u.push(l);return u},bR=zs("HTMLFormElement"),_R=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(l,u,f){return u.toUpperCase()+f}),h2=(({hasOwnProperty:i})=>(s,l)=>i.call(s,l))(Object.prototype),vR=zs("RegExp"),_D=(i,s)=>{const l=Object.getOwnPropertyDescriptors(i),u={};Wu(l,(f,k)=>{s(f,k,i)!==!1&&(u[k]=f)}),Object.defineProperties(i,u)},yR=i=>{_D(i,(s,l)=>{if(fr(i)&&["arguments","caller","callee"].indexOf(l)!==-1)return!1;const u=i[l];if(fr(u)){if(s.enumerable=!1,"writable"in s){s.writable=!1;return}s.set||(s.set=()=>{throw Error("Can not rewrite read-only method '"+l+"'")})}})},AR=(i,s)=>{const l={},u=f=>{f.forEach(k=>{l[k]=!0})};return Ad(i)?u(i):u(String(i).split(s)),l},CR=()=>{},xR=(i,s)=>(i=+i,Number.isFinite(i)?i:s),Qg="abcdefghijklmnopqrstuvwxyz",f2="0123456789",vD={DIGIT:f2,ALPHA:Qg,ALPHA_DIGIT:Qg+Qg.toUpperCase()+f2},ER=(i=16,s=vD.ALPHA_DIGIT)=>{let l="";const{length:u}=s;for(;i--;)l+=s[Math.random()*u|0];return l};function SR(i){return!!(i&&fr(i.append)&&i[Symbol.toStringTag]==="FormData"&&i[Symbol.iterator])}const DR=i=>{const s=new Array(10),l=(u,f)=>{if(Cp(u)){if(s.indexOf(u)>=0)return;if(!("toJSON"in u)){s[f]=u;const k=Ad(u)?[]:{};return Wu(u,(b,A)=>{const v=l(b,f+1);!zu(v)&&(k[A]=v)}),s[f]=void 0,k}}return u};return l(i,0)},TR=zs("AsyncFunction"),MR=i=>i&&(Cp(i)||fr(i))&&fr(i.then)&&fr(i.catch),_e={isArray:Ad,isArrayBuffer:mD,isBuffer:Jj,isFormData:aR,isArrayBufferView:Xj,isString:eR,isNumber:gD,isBoolean:tR,isObject:Cp,isPlainObject:gf,isUndefined:zu,isDate:nR,isFile:iR,isBlob:oR,isRegExp:vR,isFunction:fr,isStream:sR,isURLSearchParams:lR,isTypedArray:gR,isFileList:rR,forEach:Wu,merge:rw,extend:dR,trim:cR,stripBOM:uR,inherits:hR,toFlatObject:fR,kindOf:yp,kindOfTest:zs,endsWith:pR,toArray:mR,forEachEntry:kR,matchAll:wR,isHTMLForm:bR,hasOwnProperty:h2,hasOwnProp:h2,reduceDescriptors:_D,freezeMethods:yR,toObjectSet:AR,toCamelCase:_R,noop:CR,toFiniteNumber:xR,findKey:kD,global:wD,isContextDefined:bD,ALPHABET:vD,generateString:ER,isSpecCompliantForm:SR,toJSONObject:DR,isAsyncFn:TR,isThenable:MR};function Tt(i,s,l,u,f){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=i,this.name="AxiosError",s&&(this.code=s),l&&(this.config=l),u&&(this.request=u),f&&(this.response=f)}_e.inherits(Tt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_e.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const yD=Tt.prototype,AD={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(i=>{AD[i]={value:i}});Object.defineProperties(Tt,AD);Object.defineProperty(yD,"isAxiosError",{value:!0});Tt.from=(i,s,l,u,f,k)=>{const b=Object.create(yD);return _e.toFlatObject(i,b,function(v){return v!==Error.prototype},A=>A!=="isAxiosError"),Tt.call(b,i.message,s,l,u,f),b.cause=i,b.name=i.name,k&&Object.assign(b,k),b};const IR=null;function sw(i){return _e.isPlainObject(i)||_e.isArray(i)}function CD(i){return _e.endsWith(i,"[]")?i.slice(0,-2):i}function p2(i,s,l){return i?i.concat(s).map(function(f,k){return f=CD(f),!l&&k?"["+f+"]":f}).join(l?".":""):s}function PR(i){return _e.isArray(i)&&!i.some(sw)}const NR=_e.toFlatObject(_e,{},null,function(s){return/^is[A-Z]/.test(s)});function xp(i,s,l){if(!_e.isObject(i))throw new TypeError("target must be an object");s=s||new FormData,l=_e.toFlatObject(l,{metaTokens:!0,dots:!1,indexes:!1},!1,function(H,Q){return!_e.isUndefined(Q[H])});const u=l.metaTokens,f=l.visitor||B,k=l.dots,b=l.indexes,v=(l.Blob||typeof Blob<"u"&&Blob)&&_e.isSpecCompliantForm(s);if(!_e.isFunction(f))throw new TypeError("visitor must be a function");function C(j){if(j===null)return"";if(_e.isDate(j))return j.toISOString();if(!v&&_e.isBlob(j))throw new Tt("Blob is not supported. Use a Buffer instead.");return _e.isArrayBuffer(j)||_e.isTypedArray(j)?v&&typeof Blob=="function"?new Blob([j]):Buffer.from(j):j}function B(j,H,Q){let q=j;if(j&&!Q&&typeof j=="object"){if(_e.endsWith(H,"{}"))H=u?H:H.slice(0,-2),j=JSON.stringify(j);else if(_e.isArray(j)&&PR(j)||(_e.isFileList(j)||_e.endsWith(H,"[]"))&&(q=_e.toArray(j)))return H=CD(H),q.forEach(function(Z,te){!(_e.isUndefined(Z)||Z===null)&&s.append(b===!0?p2([H],te,k):b===null?H:H+"[]",C(Z))}),!1}return sw(j)?!0:(s.append(p2(Q,H,k),C(j)),!1)}const M=[],D=Object.assign(NR,{defaultVisitor:B,convertValue:C,isVisitable:sw});function N(j,H){if(!_e.isUndefined(j)){if(M.indexOf(j)!==-1)throw Error("Circular reference detected in "+H.join("."));M.push(j),_e.forEach(j,function(q,V){(!(_e.isUndefined(q)||q===null)&&f.call(s,q,_e.isString(V)?V.trim():V,H,D))===!0&&N(q,H?H.concat(V):[V])}),M.pop()}}if(!_e.isObject(i))throw new TypeError("data must be an object");return N(i),s}function m2(i){const s={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g,function(u){return s[u]})}function bb(i,s){this._pairs=[],i&&xp(i,this,s)}const xD=bb.prototype;xD.append=function(s,l){this._pairs.push([s,l])};xD.toString=function(s){const l=s?function(u){return s.call(this,u,m2)}:m2;return this._pairs.map(function(f){return l(f[0])+"="+l(f[1])},"").join("&")};function LR(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ED(i,s,l){if(!s)return i;const u=l&&l.encode||LR,f=l&&l.serialize;let k;if(f?k=f(s,l):k=_e.isURLSearchParams(s)?s.toString():new bb(s,l).toString(u),k){const b=i.indexOf("#");b!==-1&&(i=i.slice(0,b)),i+=(i.indexOf("?")===-1?"?":"&")+k}return i}class BR{constructor(){this.handlers=[]}use(s,l,u){return this.handlers.push({fulfilled:s,rejected:l,synchronous:u?u.synchronous:!1,runWhen:u?u.runWhen:null}),this.handlers.length-1}eject(s){this.handlers[s]&&(this.handlers[s]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(s){_e.forEach(this.handlers,function(u){u!==null&&s(u)})}}const g2=BR,SD={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},OR=typeof URLSearchParams<"u"?URLSearchParams:bb,zR=typeof FormData<"u"?FormData:null,jR=typeof Blob<"u"?Blob:null,RR=(()=>{let i;return typeof navigator<"u"&&((i=navigator.product)==="ReactNative"||i==="NativeScript"||i==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),FR=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Ns={isBrowser:!0,classes:{URLSearchParams:OR,FormData:zR,Blob:jR},isStandardBrowserEnv:RR,isStandardBrowserWebWorkerEnv:FR,protocols:["http","https","file","blob","url","data"]};function VR(i,s){return xp(i,new Ns.classes.URLSearchParams,Object.assign({visitor:function(l,u,f,k){return Ns.isNode&&_e.isBuffer(l)?(this.append(u,l.toString("base64")),!1):k.defaultVisitor.apply(this,arguments)}},s))}function UR(i){return _e.matchAll(/\w+|\[(\w*)]/g,i).map(s=>s[0]==="[]"?"":s[1]||s[0])}function HR(i){const s={},l=Object.keys(i);let u;const f=l.length;let k;for(u=0;u<f;u++)k=l[u],s[k]=i[k];return s}function DD(i){function s(l,u,f,k){let b=l[k++];const A=Number.isFinite(+b),v=k>=l.length;return b=!b&&_e.isArray(f)?f.length:b,v?(_e.hasOwnProp(f,b)?f[b]=[f[b],u]:f[b]=u,!A):((!f[b]||!_e.isObject(f[b]))&&(f[b]=[]),s(l,u,f[b],k)&&_e.isArray(f[b])&&(f[b]=HR(f[b])),!A)}if(_e.isFormData(i)&&_e.isFunction(i.entries)){const l={};return _e.forEachEntry(i,(u,f)=>{s(UR(u),f,l,0)}),l}return null}const WR={"Content-Type":void 0};function ZR(i,s,l){if(_e.isString(i))try{return(s||JSON.parse)(i),_e.trim(i)}catch(u){if(u.name!=="SyntaxError")throw u}return(l||JSON.stringify)(i)}const Ep={transitional:SD,adapter:["xhr","http"],transformRequest:[function(s,l){const u=l.getContentType()||"",f=u.indexOf("application/json")>-1,k=_e.isObject(s);if(k&&_e.isHTMLForm(s)&&(s=new FormData(s)),_e.isFormData(s))return f&&f?JSON.stringify(DD(s)):s;if(_e.isArrayBuffer(s)||_e.isBuffer(s)||_e.isStream(s)||_e.isFile(s)||_e.isBlob(s))return s;if(_e.isArrayBufferView(s))return s.buffer;if(_e.isURLSearchParams(s))return l.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),s.toString();let A;if(k){if(u.indexOf("application/x-www-form-urlencoded")>-1)return VR(s,this.formSerializer).toString();if((A=_e.isFileList(s))||u.indexOf("multipart/form-data")>-1){const v=this.env&&this.env.FormData;return xp(A?{"files[]":s}:s,v&&new v,this.formSerializer)}}return k||f?(l.setContentType("application/json",!1),ZR(s)):s}],transformResponse:[function(s){const l=this.transitional||Ep.transitional,u=l&&l.forcedJSONParsing,f=this.responseType==="json";if(s&&_e.isString(s)&&(u&&!this.responseType||f)){const b=!(l&&l.silentJSONParsing)&&f;try{return JSON.parse(s)}catch(A){if(b)throw A.name==="SyntaxError"?Tt.from(A,Tt.ERR_BAD_RESPONSE,this,null,this.response):A}}return s}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ns.classes.FormData,Blob:Ns.classes.Blob},validateStatus:function(s){return s>=200&&s<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};_e.forEach(["delete","get","head"],function(s){Ep.headers[s]={}});_e.forEach(["post","put","patch"],function(s){Ep.headers[s]=_e.merge(WR)});const _b=Ep,qR=_e.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),GR=i=>{const s={};let l,u,f;return i&&i.split(`
`).forEach(function(b){f=b.indexOf(":"),l=b.substring(0,f).trim().toLowerCase(),u=b.substring(f+1).trim(),!(!l||s[l]&&qR[l])&&(l==="set-cookie"?s[l]?s[l].push(u):s[l]=[u]:s[l]=s[l]?s[l]+", "+u:u)}),s},k2=Symbol("internals");function iu(i){return i&&String(i).trim().toLowerCase()}function kf(i){return i===!1||i==null?i:_e.isArray(i)?i.map(kf):String(i)}function KR(i){const s=Object.create(null),l=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let u;for(;u=l.exec(i);)s[u[1]]=u[2];return s}const YR=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function $g(i,s,l,u,f){if(_e.isFunction(u))return u.call(this,s,l);if(f&&(s=l),!!_e.isString(s)){if(_e.isString(u))return s.indexOf(u)!==-1;if(_e.isRegExp(u))return u.test(s)}}function QR(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(s,l,u)=>l.toUpperCase()+u)}function $R(i,s){const l=_e.toCamelCase(" "+s);["get","set","has"].forEach(u=>{Object.defineProperty(i,u+l,{value:function(f,k,b){return this[u].call(this,s,f,k,b)},configurable:!0})})}class Sp{constructor(s){s&&this.set(s)}set(s,l,u){const f=this;function k(A,v,C){const B=iu(v);if(!B)throw new Error("header name must be a non-empty string");const M=_e.findKey(f,B);(!M||f[M]===void 0||C===!0||C===void 0&&f[M]!==!1)&&(f[M||v]=kf(A))}const b=(A,v)=>_e.forEach(A,(C,B)=>k(C,B,v));return _e.isPlainObject(s)||s instanceof this.constructor?b(s,l):_e.isString(s)&&(s=s.trim())&&!YR(s)?b(GR(s),l):s!=null&&k(l,s,u),this}get(s,l){if(s=iu(s),s){const u=_e.findKey(this,s);if(u){const f=this[u];if(!l)return f;if(l===!0)return KR(f);if(_e.isFunction(l))return l.call(this,f,u);if(_e.isRegExp(l))return l.exec(f);throw new TypeError("parser must be boolean|regexp|function")}}}has(s,l){if(s=iu(s),s){const u=_e.findKey(this,s);return!!(u&&this[u]!==void 0&&(!l||$g(this,this[u],u,l)))}return!1}delete(s,l){const u=this;let f=!1;function k(b){if(b=iu(b),b){const A=_e.findKey(u,b);A&&(!l||$g(u,u[A],A,l))&&(delete u[A],f=!0)}}return _e.isArray(s)?s.forEach(k):k(s),f}clear(s){const l=Object.keys(this);let u=l.length,f=!1;for(;u--;){const k=l[u];(!s||$g(this,this[k],k,s,!0))&&(delete this[k],f=!0)}return f}normalize(s){const l=this,u={};return _e.forEach(this,(f,k)=>{const b=_e.findKey(u,k);if(b){l[b]=kf(f),delete l[k];return}const A=s?QR(k):String(k).trim();A!==k&&delete l[k],l[A]=kf(f),u[A]=!0}),this}concat(...s){return this.constructor.concat(this,...s)}toJSON(s){const l=Object.create(null);return _e.forEach(this,(u,f)=>{u!=null&&u!==!1&&(l[f]=s&&_e.isArray(u)?u.join(", "):u)}),l}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([s,l])=>s+": "+l).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(s){return s instanceof this?s:new this(s)}static concat(s,...l){const u=new this(s);return l.forEach(f=>u.set(f)),u}static accessor(s){const u=(this[k2]=this[k2]={accessors:{}}).accessors,f=this.prototype;function k(b){const A=iu(b);u[A]||($R(f,b),u[A]=!0)}return _e.isArray(s)?s.forEach(k):k(s),this}}Sp.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_e.freezeMethods(Sp.prototype);_e.freezeMethods(Sp);const wa=Sp;function Jg(i,s){const l=this||_b,u=s||l,f=wa.from(u.headers);let k=u.data;return _e.forEach(i,function(A){k=A.call(l,k,f.normalize(),s?s.status:void 0)}),f.normalize(),k}function TD(i){return!!(i&&i.__CANCEL__)}function Zu(i,s,l){Tt.call(this,i??"canceled",Tt.ERR_CANCELED,s,l),this.name="CanceledError"}_e.inherits(Zu,Tt,{__CANCEL__:!0});function JR(i,s,l){const u=l.config.validateStatus;!l.status||!u||u(l.status)?i(l):s(new Tt("Request failed with status code "+l.status,[Tt.ERR_BAD_REQUEST,Tt.ERR_BAD_RESPONSE][Math.floor(l.status/100)-4],l.config,l.request,l))}const XR=Ns.isStandardBrowserEnv?function(){return{write:function(l,u,f,k,b,A){const v=[];v.push(l+"="+encodeURIComponent(u)),_e.isNumber(f)&&v.push("expires="+new Date(f).toGMTString()),_e.isString(k)&&v.push("path="+k),_e.isString(b)&&v.push("domain="+b),A===!0&&v.push("secure"),document.cookie=v.join("; ")},read:function(l){const u=document.cookie.match(new RegExp("(^|;\\s*)("+l+")=([^;]*)"));return u?decodeURIComponent(u[3]):null},remove:function(l){this.write(l,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function e6(i){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function t6(i,s){return s?i.replace(/\/+$/,"")+"/"+s.replace(/^\/+/,""):i}function MD(i,s){return i&&!e6(s)?t6(i,s):s}const n6=Ns.isStandardBrowserEnv?function(){const s=/(msie|trident)/i.test(navigator.userAgent),l=document.createElement("a");let u;function f(k){let b=k;return s&&(l.setAttribute("href",b),b=l.href),l.setAttribute("href",b),{href:l.href,protocol:l.protocol?l.protocol.replace(/:$/,""):"",host:l.host,search:l.search?l.search.replace(/^\?/,""):"",hash:l.hash?l.hash.replace(/^#/,""):"",hostname:l.hostname,port:l.port,pathname:l.pathname.charAt(0)==="/"?l.pathname:"/"+l.pathname}}return u=f(window.location.href),function(b){const A=_e.isString(b)?f(b):b;return A.protocol===u.protocol&&A.host===u.host}}():function(){return function(){return!0}}();function i6(i){const s=/^([-+\w]{1,25})(:?\/\/|:)/.exec(i);return s&&s[1]||""}function o6(i,s){i=i||10;const l=new Array(i),u=new Array(i);let f=0,k=0,b;return s=s!==void 0?s:1e3,function(v){const C=Date.now(),B=u[k];b||(b=C),l[f]=v,u[f]=C;let M=k,D=0;for(;M!==f;)D+=l[M++],M=M%i;if(f=(f+1)%i,f===k&&(k=(k+1)%i),C-b<s)return;const N=B&&C-B;return N?Math.round(D*1e3/N):void 0}}function w2(i,s){let l=0;const u=o6(50,250);return f=>{const k=f.loaded,b=f.lengthComputable?f.total:void 0,A=k-l,v=u(A),C=k<=b;l=k;const B={loaded:k,total:b,progress:b?k/b:void 0,bytes:A,rate:v||void 0,estimated:v&&b&&C?(b-k)/v:void 0,event:f};B[s?"download":"upload"]=!0,i(B)}}const r6=typeof XMLHttpRequest<"u",s6=r6&&function(i){return new Promise(function(l,u){let f=i.data;const k=wa.from(i.headers).normalize(),b=i.responseType;let A;function v(){i.cancelToken&&i.cancelToken.unsubscribe(A),i.signal&&i.signal.removeEventListener("abort",A)}_e.isFormData(f)&&(Ns.isStandardBrowserEnv||Ns.isStandardBrowserWebWorkerEnv?k.setContentType(!1):k.setContentType("multipart/form-data;",!1));let C=new XMLHttpRequest;if(i.auth){const N=i.auth.username||"",j=i.auth.password?unescape(encodeURIComponent(i.auth.password)):"";k.set("Authorization","Basic "+btoa(N+":"+j))}const B=MD(i.baseURL,i.url);C.open(i.method.toUpperCase(),ED(B,i.params,i.paramsSerializer),!0),C.timeout=i.timeout;function M(){if(!C)return;const N=wa.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),H={data:!b||b==="text"||b==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:N,config:i,request:C};JR(function(q){l(q),v()},function(q){u(q),v()},H),C=null}if("onloadend"in C?C.onloadend=M:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(M)},C.onabort=function(){C&&(u(new Tt("Request aborted",Tt.ECONNABORTED,i,C)),C=null)},C.onerror=function(){u(new Tt("Network Error",Tt.ERR_NETWORK,i,C)),C=null},C.ontimeout=function(){let j=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const H=i.transitional||SD;i.timeoutErrorMessage&&(j=i.timeoutErrorMessage),u(new Tt(j,H.clarifyTimeoutError?Tt.ETIMEDOUT:Tt.ECONNABORTED,i,C)),C=null},Ns.isStandardBrowserEnv){const N=(i.withCredentials||n6(B))&&i.xsrfCookieName&&XR.read(i.xsrfCookieName);N&&k.set(i.xsrfHeaderName,N)}f===void 0&&k.setContentType(null),"setRequestHeader"in C&&_e.forEach(k.toJSON(),function(j,H){C.setRequestHeader(H,j)}),_e.isUndefined(i.withCredentials)||(C.withCredentials=!!i.withCredentials),b&&b!=="json"&&(C.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&C.addEventListener("progress",w2(i.onDownloadProgress,!0)),typeof i.onUploadProgress=="function"&&C.upload&&C.upload.addEventListener("progress",w2(i.onUploadProgress)),(i.cancelToken||i.signal)&&(A=N=>{C&&(u(!N||N.type?new Zu(null,i,C):N),C.abort(),C=null)},i.cancelToken&&i.cancelToken.subscribe(A),i.signal&&(i.signal.aborted?A():i.signal.addEventListener("abort",A)));const D=i6(B);if(D&&Ns.protocols.indexOf(D)===-1){u(new Tt("Unsupported protocol "+D+":",Tt.ERR_BAD_REQUEST,i));return}C.send(f||null)})},wf={http:IR,xhr:s6};_e.forEach(wf,(i,s)=>{if(i){try{Object.defineProperty(i,"name",{value:s})}catch{}Object.defineProperty(i,"adapterName",{value:s})}});const a6={getAdapter:i=>{i=_e.isArray(i)?i:[i];const{length:s}=i;let l,u;for(let f=0;f<s&&(l=i[f],!(u=_e.isString(l)?wf[l.toLowerCase()]:l));f++);if(!u)throw u===!1?new Tt(`Adapter ${l} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(_e.hasOwnProp(wf,l)?`Adapter '${l}' is not available in the build`:`Unknown adapter '${l}'`);if(!_e.isFunction(u))throw new TypeError("adapter is not a function");return u},adapters:wf};function Xg(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new Zu(null,i)}function b2(i){return Xg(i),i.headers=wa.from(i.headers),i.data=Jg.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),a6.getAdapter(i.adapter||_b.adapter)(i).then(function(u){return Xg(i),u.data=Jg.call(i,i.transformResponse,u),u.headers=wa.from(u.headers),u},function(u){return TD(u)||(Xg(i),u&&u.response&&(u.response.data=Jg.call(i,i.transformResponse,u.response),u.response.headers=wa.from(u.response.headers))),Promise.reject(u)})}const _2=i=>i instanceof wa?i.toJSON():i;function md(i,s){s=s||{};const l={};function u(C,B,M){return _e.isPlainObject(C)&&_e.isPlainObject(B)?_e.merge.call({caseless:M},C,B):_e.isPlainObject(B)?_e.merge({},B):_e.isArray(B)?B.slice():B}function f(C,B,M){if(_e.isUndefined(B)){if(!_e.isUndefined(C))return u(void 0,C,M)}else return u(C,B,M)}function k(C,B){if(!_e.isUndefined(B))return u(void 0,B)}function b(C,B){if(_e.isUndefined(B)){if(!_e.isUndefined(C))return u(void 0,C)}else return u(void 0,B)}function A(C,B,M){if(M in s)return u(C,B);if(M in i)return u(void 0,C)}const v={url:k,method:k,data:k,baseURL:b,transformRequest:b,transformResponse:b,paramsSerializer:b,timeout:b,timeoutMessage:b,withCredentials:b,adapter:b,responseType:b,xsrfCookieName:b,xsrfHeaderName:b,onUploadProgress:b,onDownloadProgress:b,decompress:b,maxContentLength:b,maxBodyLength:b,beforeRedirect:b,transport:b,httpAgent:b,httpsAgent:b,cancelToken:b,socketPath:b,responseEncoding:b,validateStatus:A,headers:(C,B)=>f(_2(C),_2(B),!0)};return _e.forEach(Object.keys(Object.assign({},i,s)),function(B){const M=v[B]||f,D=M(i[B],s[B],B);_e.isUndefined(D)&&M!==A||(l[B]=D)}),l}const ID="1.4.0",vb={};["object","boolean","number","function","string","symbol"].forEach((i,s)=>{vb[i]=function(u){return typeof u===i||"a"+(s<1?"n ":" ")+i}});const v2={};vb.transitional=function(s,l,u){function f(k,b){return"[Axios v"+ID+"] Transitional option '"+k+"'"+b+(u?". "+u:"")}return(k,b,A)=>{if(s===!1)throw new Tt(f(b," has been removed"+(l?" in "+l:"")),Tt.ERR_DEPRECATED);return l&&!v2[b]&&(v2[b]=!0,console.warn(f(b," has been deprecated since v"+l+" and will be removed in the near future"))),s?s(k,b,A):!0}};function l6(i,s,l){if(typeof i!="object")throw new Tt("options must be an object",Tt.ERR_BAD_OPTION_VALUE);const u=Object.keys(i);let f=u.length;for(;f-- >0;){const k=u[f],b=s[k];if(b){const A=i[k],v=A===void 0||b(A,k,i);if(v!==!0)throw new Tt("option "+k+" must be "+v,Tt.ERR_BAD_OPTION_VALUE);continue}if(l!==!0)throw new Tt("Unknown option "+k,Tt.ERR_BAD_OPTION)}}const aw={assertOptions:l6,validators:vb},Ya=aw.validators;class Qf{constructor(s){this.defaults=s,this.interceptors={request:new g2,response:new g2}}request(s,l){typeof s=="string"?(l=l||{},l.url=s):l=s||{},l=md(this.defaults,l);const{transitional:u,paramsSerializer:f,headers:k}=l;u!==void 0&&aw.assertOptions(u,{silentJSONParsing:Ya.transitional(Ya.boolean),forcedJSONParsing:Ya.transitional(Ya.boolean),clarifyTimeoutError:Ya.transitional(Ya.boolean)},!1),f!=null&&(_e.isFunction(f)?l.paramsSerializer={serialize:f}:aw.assertOptions(f,{encode:Ya.function,serialize:Ya.function},!0)),l.method=(l.method||this.defaults.method||"get").toLowerCase();let b;b=k&&_e.merge(k.common,k[l.method]),b&&_e.forEach(["delete","get","head","post","put","patch","common"],j=>{delete k[j]}),l.headers=wa.concat(b,k);const A=[];let v=!0;this.interceptors.request.forEach(function(H){typeof H.runWhen=="function"&&H.runWhen(l)===!1||(v=v&&H.synchronous,A.unshift(H.fulfilled,H.rejected))});const C=[];this.interceptors.response.forEach(function(H){C.push(H.fulfilled,H.rejected)});let B,M=0,D;if(!v){const j=[b2.bind(this),void 0];for(j.unshift.apply(j,A),j.push.apply(j,C),D=j.length,B=Promise.resolve(l);M<D;)B=B.then(j[M++],j[M++]);return B}D=A.length;let N=l;for(M=0;M<D;){const j=A[M++],H=A[M++];try{N=j(N)}catch(Q){H.call(this,Q);break}}try{B=b2.call(this,N)}catch(j){return Promise.reject(j)}for(M=0,D=C.length;M<D;)B=B.then(C[M++],C[M++]);return B}getUri(s){s=md(this.defaults,s);const l=MD(s.baseURL,s.url);return ED(l,s.params,s.paramsSerializer)}}_e.forEach(["delete","get","head","options"],function(s){Qf.prototype[s]=function(l,u){return this.request(md(u||{},{method:s,url:l,data:(u||{}).data}))}});_e.forEach(["post","put","patch"],function(s){function l(u){return function(k,b,A){return this.request(md(A||{},{method:s,headers:u?{"Content-Type":"multipart/form-data"}:{},url:k,data:b}))}}Qf.prototype[s]=l(),Qf.prototype[s+"Form"]=l(!0)});const bf=Qf;class yb{constructor(s){if(typeof s!="function")throw new TypeError("executor must be a function.");let l;this.promise=new Promise(function(k){l=k});const u=this;this.promise.then(f=>{if(!u._listeners)return;let k=u._listeners.length;for(;k-- >0;)u._listeners[k](f);u._listeners=null}),this.promise.then=f=>{let k;const b=new Promise(A=>{u.subscribe(A),k=A}).then(f);return b.cancel=function(){u.unsubscribe(k)},b},s(function(k,b,A){u.reason||(u.reason=new Zu(k,b,A),l(u.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(s){if(this.reason){s(this.reason);return}this._listeners?this._listeners.push(s):this._listeners=[s]}unsubscribe(s){if(!this._listeners)return;const l=this._listeners.indexOf(s);l!==-1&&this._listeners.splice(l,1)}static source(){let s;return{token:new yb(function(f){s=f}),cancel:s}}}const c6=yb;function d6(i){return function(l){return i.apply(null,l)}}function u6(i){return _e.isObject(i)&&i.isAxiosError===!0}const lw={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(lw).forEach(([i,s])=>{lw[s]=i});const h6=lw;function PD(i){const s=new bf(i),l=pD(bf.prototype.request,s);return _e.extend(l,bf.prototype,s,{allOwnKeys:!0}),_e.extend(l,s,null,{allOwnKeys:!0}),l.create=function(f){return PD(md(i,f))},l}const Un=PD(_b);Un.Axios=bf;Un.CanceledError=Zu;Un.CancelToken=c6;Un.isCancel=TD;Un.VERSION=ID;Un.toFormData=xp;Un.AxiosError=Tt;Un.Cancel=Un.CanceledError;Un.all=function(s){return Promise.all(s)};Un.spread=d6;Un.isAxiosError=u6;Un.mergeConfig=md;Un.AxiosHeaders=wa;Un.formToJSON=i=>DD(_e.isHTMLForm(i)?new FormData(i):i);Un.HttpStatusCode=h6;Un.default=Un;const f6=Un;/*! js-cookie v3.0.5 | MIT */function tf(i){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var u in l)i[u]=l[u]}return i}var p6={read:function(i){return i[0]==='"'&&(i=i.slice(1,-1)),i.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(i){return encodeURIComponent(i).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function cw(i,s){function l(f,k,b){if(!(typeof document>"u")){b=tf({},s,b),typeof b.expires=="number"&&(b.expires=new Date(Date.now()+b.expires*864e5)),b.expires&&(b.expires=b.expires.toUTCString()),f=encodeURIComponent(f).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var A="";for(var v in b)b[v]&&(A+="; "+v,b[v]!==!0&&(A+="="+b[v].split(";")[0]));return document.cookie=f+"="+i.write(k,f)+A}}function u(f){if(!(typeof document>"u"||arguments.length&&!f)){for(var k=document.cookie?document.cookie.split("; "):[],b={},A=0;A<k.length;A++){var v=k[A].split("="),C=v.slice(1).join("=");try{var B=decodeURIComponent(v[0]);if(b[B]=i.read(C,B),f===B)break}catch{}}return f?b[f]:b}}return Object.create({set:l,get:u,remove:function(f,k){l(f,"",tf({},k,{expires:-1}))},withAttributes:function(f){return cw(this.converter,tf({},this.attributes,f))},withConverter:function(f){return cw(tf({},this.converter,f),this.attributes)}},{attributes:{value:Object.freeze(s)},converter:{value:Object.freeze(i)}})}var Pi=cw(p6,{path:"/"});const ti=f6.create({baseURL:"https://api-entrytest.sandboxindonesia.id/api",timeout:1e5});ti.interceptors.request.use(i=>{i.headers||(i.headers={});const s=Pi.get("access");return s&&(i.headers.Authorization=`Bearer ${s}`),i});ti.interceptors.response.use(i=>i,async i=>{const s=i.config,l=Pi.get("refreshToken");if(i.response.status===401&&!s._retry&&l){s._retry=!0;try{const f=(await ti.post("/auth/refresh",{refreshToken:l})).data.refresh;return Pi.set("token",f),ti(s)}catch(u){console.log("Failed to refresh token:",u)}}return Promise.reject(i)});const sd=i=>i.replace(i[0],i[0].toUpperCase()),Dp=i=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(i),ND=i=>i?i.toLowerCase().split(" ").map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(" "):"",m6=i=>{const s=new Date(i);function l(k){return["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"][k]}function u(k){return k.toString().padStart(2,"0")}return`${s.getDate()} ${l(s.getMonth())} ${s.getFullYear()}, ${u(s.getHours())}:${u(s.getMinutes())}:${u(s.getSeconds())}`},g6=i=>new DOMParser().parseFromString(i,"text/html");function k6({onLogout:i}){const s=vd(),l=yd(),u=ne.useRef(null),{profile:f,setProfile:k}=yl(),[b,A]=ne.useState(null),[v,C]=ne.useState(""),[B,M]=ne.useState(!1),[D,N]=ne.useState(!1),j=q=>{q==="Profil Saya"&&l("/profile"),q==="Ubah Password"&&l("/ubahpassword"),q==="Keluar"&&i()},H=q=>{u.current&&!u.current.contains(q.target)&&(q.target.closest(".icon-container")||M(!1))};ne.useEffect(()=>(document.addEventListener("mousedown",H),()=>{document.removeEventListener("mousedown",H)}),[]),ne.useEffect(()=>{M(!1)},[s.pathname]);const Q=()=>{M(!B)};return ne.useEffect(()=>{N(!0),(async()=>{try{let Z=(await ti.get("/user/user/me")).data.data;A(Z==null?void 0:Z.photo),C(Z==null?void 0:Z.username),k(Z),N(!1)}catch(V){console.log(V.message),N(!1)}})()},[]),Y.jsxs("div",{className:"flex items-center gap-5",children:[Y.jsx("img",{src:f==null?void 0:f.photo,alt:"profileImg",className:"w-[32px] h-[32px] rounded-full bg-cover"}),Y.jsx("span",{className:"font-medium",children:ND(f==null?void 0:f.username)}),Y.jsx("div",{className:"icon-container",onClick:Q,children:Y.jsx(Jz,{})}),B&&Y.jsx("div",{ref:u,className:"absolute right-8 top-[4.5rem] mt-2 bg-white text-gray-700 rounded shadow w-44 z-[999]",children:Y.jsxs("ul",{className:"py-2",children:[Y.jsx("li",{className:"px-4 py-2 cursor-pointer",onClick:()=>j("Profil Saya"),children:Y.jsx("span",{className:"hover:text-orange-500 hover:font-medium",children:"Profil Saya"})}),Y.jsx("li",{className:"px-4 py-2 cursor-pointer",onClick:()=>j("Ubah Password"),children:Y.jsx("span",{className:"hover:text-orange-500 hover:font-medium",children:"Ubah Password"})}),Y.jsx("li",{className:"px-4 py-2 cursor-pointer",onClick:()=>j("Keluar"),children:Y.jsx("span",{className:"hover:text-orange-500 hover:font-medium",children:"Keluar"})})]})})]})}let w6={data:""},b6=i=>typeof window=="object"?((i?i.querySelector("#_goober"):window._goober)||Object.assign((i||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:i||w6,_6=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,v6=/\/\*[^]*?\*\/|  +/g,y2=/\n+/g,nl=(i,s)=>{let l="",u="",f="";for(let k in i){let b=i[k];k[0]=="@"?k[1]=="i"?l=k+" "+b+";":u+=k[1]=="f"?nl(b,k):k+"{"+nl(b,k[1]=="k"?"":s)+"}":typeof b=="object"?u+=nl(b,s?s.replace(/([^,])+/g,A=>k.replace(/(^:.*)|([^,])+/g,v=>/&/.test(v)?v.replace(/&/g,A):A?A+" "+v:v)):k):b!=null&&(k=/^--/.test(k)?k:k.replace(/[A-Z]/g,"-$&").toLowerCase(),f+=nl.p?nl.p(k,b):k+":"+b+";")}return l+(s&&f?s+"{"+f+"}":f)+u},ua={},LD=i=>{if(typeof i=="object"){let s="";for(let l in i)s+=l+LD(i[l]);return s}return i},y6=(i,s,l,u,f)=>{let k=LD(i),b=ua[k]||(ua[k]=(v=>{let C=0,B=11;for(;C<v.length;)B=101*B+v.charCodeAt(C++)>>>0;return"go"+B})(k));if(!ua[b]){let v=k!==i?i:(C=>{let B,M,D=[{}];for(;B=_6.exec(C.replace(v6,""));)B[4]?D.shift():B[3]?(M=B[3].replace(y2," ").trim(),D.unshift(D[0][M]=D[0][M]||{})):D[0][B[1]]=B[2].replace(y2," ").trim();return D[0]})(i);ua[b]=nl(f?{["@keyframes "+b]:v}:v,l?"":"."+b)}let A=l&&ua.g?ua.g:null;return l&&(ua.g=ua[b]),((v,C,B,M)=>{M?C.data=C.data.replace(M,v):C.data.indexOf(v)===-1&&(C.data=B?v+C.data:C.data+v)})(ua[b],s,u,A),b},A6=(i,s,l)=>i.reduce((u,f,k)=>{let b=s[k];if(b&&b.call){let A=b(l),v=A&&A.props&&A.props.className||/^go/.test(A)&&A;b=v?"."+v:A&&typeof A=="object"?A.props?"":nl(A,""):A===!1?"":A}return u+f+(b??"")},"");function Tp(i){let s=this||{},l=i.call?i(s.p):i;return y6(l.unshift?l.raw?A6(l,[].slice.call(arguments,1),s.p):l.reduce((u,f)=>Object.assign(u,f&&f.call?f(s.p):f),{}):l,b6(s.target),s.g,s.o,s.k)}let BD,dw,uw;Tp.bind({g:1});let Aa=Tp.bind({k:1});function C6(i,s,l,u){nl.p=s,BD=i,dw=l,uw=u}function Cl(i,s){let l=this||{};return function(){let u=arguments;function f(k,b){let A=Object.assign({},k),v=A.className||f.className;l.p=Object.assign({theme:dw&&dw()},A),l.o=/ *go\d+/.test(v),A.className=Tp.apply(l,u)+(v?" "+v:""),s&&(A.ref=b);let C=i;return i[0]&&(C=A.as||i,delete A.as),uw&&C[0]&&uw(A),BD(C,A)}return s?s(f):f}}var x6=i=>typeof i=="function",$f=(i,s)=>x6(i)?i(s):i,E6=(()=>{let i=0;return()=>(++i).toString()})(),OD=(()=>{let i;return()=>{if(i===void 0&&typeof window<"u"){let s=matchMedia("(prefers-reduced-motion: reduce)");i=!s||s.matches}return i}})(),S6=20,_f=new Map,D6=1e3,A2=i=>{if(_f.has(i))return;let s=setTimeout(()=>{_f.delete(i),fc({type:4,toastId:i})},D6);_f.set(i,s)},T6=i=>{let s=_f.get(i);s&&clearTimeout(s)},hw=(i,s)=>{switch(s.type){case 0:return{...i,toasts:[s.toast,...i.toasts].slice(0,S6)};case 1:return s.toast.id&&T6(s.toast.id),{...i,toasts:i.toasts.map(k=>k.id===s.toast.id?{...k,...s.toast}:k)};case 2:let{toast:l}=s;return i.toasts.find(k=>k.id===l.id)?hw(i,{type:1,toast:l}):hw(i,{type:0,toast:l});case 3:let{toastId:u}=s;return u?A2(u):i.toasts.forEach(k=>{A2(k.id)}),{...i,toasts:i.toasts.map(k=>k.id===u||u===void 0?{...k,visible:!1}:k)};case 4:return s.toastId===void 0?{...i,toasts:[]}:{...i,toasts:i.toasts.filter(k=>k.id!==s.toastId)};case 5:return{...i,pausedAt:s.time};case 6:let f=s.time-(i.pausedAt||0);return{...i,pausedAt:void 0,toasts:i.toasts.map(k=>({...k,pauseDuration:k.pauseDuration+f}))}}},vf=[],yf={toasts:[],pausedAt:void 0},fc=i=>{yf=hw(yf,i),vf.forEach(s=>{s(yf)})},M6={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I6=(i={})=>{let[s,l]=ne.useState(yf);ne.useEffect(()=>(vf.push(l),()=>{let f=vf.indexOf(l);f>-1&&vf.splice(f,1)}),[s]);let u=s.toasts.map(f=>{var k,b;return{...i,...i[f.type],...f,duration:f.duration||((k=i[f.type])==null?void 0:k.duration)||(i==null?void 0:i.duration)||M6[f.type],style:{...i.style,...(b=i[f.type])==null?void 0:b.style,...f.style}}});return{...s,toasts:u}},P6=(i,s="blank",l)=>({createdAt:Date.now(),visible:!0,type:s,ariaProps:{role:"status","aria-live":"polite"},message:i,pauseDuration:0,...l,id:(l==null?void 0:l.id)||E6()}),qu=i=>(s,l)=>{let u=P6(s,i,l);return fc({type:2,toast:u}),u.id},an=(i,s)=>qu("blank")(i,s);an.error=qu("error");an.success=qu("success");an.loading=qu("loading");an.custom=qu("custom");an.dismiss=i=>{fc({type:3,toastId:i})};an.remove=i=>fc({type:4,toastId:i});an.promise=(i,s,l)=>{let u=an.loading(s.loading,{...l,...l==null?void 0:l.loading});return i.then(f=>(an.success($f(s.success,f),{id:u,...l,...l==null?void 0:l.success}),f)).catch(f=>{an.error($f(s.error,f),{id:u,...l,...l==null?void 0:l.error})}),i};var N6=(i,s)=>{fc({type:1,toast:{id:i,height:s}})},L6=()=>{fc({type:5,time:Date.now()})},B6=i=>{let{toasts:s,pausedAt:l}=I6(i);ne.useEffect(()=>{if(l)return;let k=Date.now(),b=s.map(A=>{if(A.duration===1/0)return;let v=(A.duration||0)+A.pauseDuration-(k-A.createdAt);if(v<0){A.visible&&an.dismiss(A.id);return}return setTimeout(()=>an.dismiss(A.id),v)});return()=>{b.forEach(A=>A&&clearTimeout(A))}},[s,l]);let u=ne.useCallback(()=>{l&&fc({type:6,time:Date.now()})},[l]),f=ne.useCallback((k,b)=>{let{reverseOrder:A=!1,gutter:v=8,defaultPosition:C}=b||{},B=s.filter(N=>(N.position||C)===(k.position||C)&&N.height),M=B.findIndex(N=>N.id===k.id),D=B.filter((N,j)=>j<M&&N.visible).length;return B.filter(N=>N.visible).slice(...A?[D+1]:[0,D]).reduce((N,j)=>N+(j.height||0)+v,0)},[s]);return{toasts:s,handlers:{updateHeight:N6,startPause:L6,endPause:u,calculateOffset:f}}},O6=Aa`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,z6=Aa`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,j6=Aa`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,R6=Cl("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${i=>i.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${O6} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${z6} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${i=>i.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${j6} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,F6=Aa`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,V6=Cl("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${i=>i.secondary||"#e0e0e0"};
  border-right-color: ${i=>i.primary||"#616161"};
  animation: ${F6} 1s linear infinite;
`,U6=Aa`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,H6=Aa`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,W6=Cl("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${i=>i.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${U6} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${H6} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${i=>i.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Z6=Cl("div")`
  position: absolute;
`,q6=Cl("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,G6=Aa`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,K6=Cl("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${G6} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Y6=({toast:i})=>{let{icon:s,type:l,iconTheme:u}=i;return s!==void 0?typeof s=="string"?ne.createElement(K6,null,s):s:l==="blank"?null:ne.createElement(q6,null,ne.createElement(V6,{...u}),l!=="loading"&&ne.createElement(Z6,null,l==="error"?ne.createElement(R6,{...u}):ne.createElement(W6,{...u})))},Q6=i=>`
0% {transform: translate3d(0,${i*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,$6=i=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${i*-150}%,-1px) scale(.6); opacity:0;}
`,J6="0%{opacity:0;} 100%{opacity:1;}",X6="0%{opacity:1;} 100%{opacity:0;}",e7=Cl("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,t7=Cl("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,n7=(i,s)=>{let l=i.includes("top")?1:-1,[u,f]=OD()?[J6,X6]:[Q6(l),$6(l)];return{animation:s?`${Aa(u)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Aa(f)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},i7=ne.memo(({toast:i,position:s,style:l,children:u})=>{let f=i.height?n7(i.position||s||"top-center",i.visible):{opacity:0},k=ne.createElement(Y6,{toast:i}),b=ne.createElement(t7,{...i.ariaProps},$f(i.message,i));return ne.createElement(e7,{className:i.className,style:{...f,...l,...i.style}},typeof u=="function"?u({icon:k,message:b}):ne.createElement(ne.Fragment,null,k,b))});C6(ne.createElement);var o7=({id:i,className:s,style:l,onHeightUpdate:u,children:f})=>{let k=ne.useCallback(b=>{if(b){let A=()=>{let v=b.getBoundingClientRect().height;u(i,v)};A(),new MutationObserver(A).observe(b,{subtree:!0,childList:!0,characterData:!0})}},[i,u]);return ne.createElement("div",{ref:k,className:s,style:l},f)},r7=(i,s)=>{let l=i.includes("top"),u=l?{top:0}:{bottom:0},f=i.includes("center")?{justifyContent:"center"}:i.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:OD()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${s*(l?1:-1)}px)`,...u,...f}},s7=Tp`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,nf=16,a7=({reverseOrder:i,position:s="top-center",toastOptions:l,gutter:u,children:f,containerStyle:k,containerClassName:b})=>{let{toasts:A,handlers:v}=B6(l);return ne.createElement("div",{style:{position:"fixed",zIndex:9999,top:nf,left:nf,right:nf,bottom:nf,pointerEvents:"none",...k},className:b,onMouseEnter:v.startPause,onMouseLeave:v.endPause},A.map(C=>{let B=C.position||s,M=v.calculateOffset(C,{reverseOrder:i,gutter:u,defaultPosition:s}),D=r7(B,M);return ne.createElement(o7,{id:C.id,key:C.id,onHeightUpdate:v.updateHeight,className:C.visible?s7:"",style:D},C.type==="custom"?$f(C.message,C):f?f(C):ne.createElement(i7,{toast:C,position:B}))}))};function l7(){const i=yd(),{setLoginModal:s,authenticated:l,setAuthenticated:u}=yl();ne.useEffect(()=>{(()=>{const A=Pi.get("access");u(!!A)})()},[]);const f=b=>{Pi.get("access",b),s(!0)},k=async()=>{try{const b=JSON.stringify({refresh:Pi.get("refresh")}),A={method:"post",maxBodyLength:1/0,url:"/auth/logout/",headers:{"Content-Type":"application/json"},data:b},v=await ti.request(A);i("/"),Pi.remove("access"),Pi.remove("refresh"),an.success("Berhasil Logout"),u(!1)}catch(b){console.log(b)}};return Y.jsxs("nav",{className:"flex bg-white justify-between px-24 py-4",children:[Y.jsx("img",{src:Kz,alt:"sandbox",onClick:()=>i("/"),className:"cursor-pointer"}),l?Y.jsx(k6,{onLogout:k}):Y.jsx(Yz,{onLoginSuccess:f})]})}function c7({setPage:i}){return Y.jsx("div",{className:"h-auto w-[400px]",children:Y.jsxs("ul",{className:"flex flex-col items-end font-medium text-lg",children:[Y.jsx("li",{className:"px-4 py-2 flex w-1/2 hover:text-orange-500",onClick:()=>i(!1),children:"Profil"}),Y.jsx("li",{className:"px-4 py-2 flex w-1/2 hover:text-orange-500",onClick:()=>i(!0),children:"Wisata Saya"})]})})}function d7(i){return es({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M864 248H728l-32.4-90.8a32.07 32.07 0 0 0-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"}}]})(i)}function u7(i){return es({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]})(i)}function Ab(){return Y.jsx("div",{className:"flex justify-center items-center h-[25rem] w-full",children:Y.jsx("div",{className:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"})})}function h7(){const{profile:i,setProfile:s}=yl(),[l,u]=ne.useState(null),[f,k]=ne.useState(null),[b,A]=ne.useState(""),[v,C]=ne.useState(""),[B,M]=ne.useState(""),[D,N]=ne.useState(""),[j,H]=ne.useState(!1),Q=async()=>{try{let te=(await ti.get("/user/user/me")).data.data;u(te==null?void 0:te.photo),A(te==null?void 0:te.full_name),C(te==null?void 0:te.email),M(te==null?void 0:te.address),N(te==null?void 0:te.handphone),s(te),H(!1)}catch(Z){console.log(Z.message),H(!1)}};ne.useEffect(()=>{H(!0),Q()},[]);const q=Z=>{u(Z.target.files[0]),k(URL.createObjectURL(Z.target.files[0]))},V=async Z=>{Z.preventDefault(),H(!0),(async()=>{try{let se=new FormData;l&&l!==(i==null?void 0:i.photo)&&se.append("photo",l),v!==i.email&&se.append("email",v),b!==i.full_name&&se.append("full_name",b),D!==i.handphone&&se.append("handphone",D),B!==i.address&&se.append("address",B);const le=await ti({method:"patch",url:"/user/user/me/",headers:{"Content-Type":"multipart/form-data"},data:se});console.log(JSON.stringify(le.data)),Q(),an.success("Profile berhasil diperbarui")}catch(se){console.log(se),Q(),an.error("Gagal memperbarui profil")}})()};return j?Y.jsx(Ab,{}):Y.jsx("div",{className:"flex flex-col w-full items-center h-auto",children:Y.jsxs("form",{className:"w-[90%] flex flex-col gap-3",onSubmit:V,children:[Y.jsxs("div",{className:"flex gap-8 items-center",children:[Y.jsxs("div",{className:"relative",children:[Y.jsx("img",{src:f||l,alt:"profileImg",className:"w-[120px] h-[120px] rounded-full border-[6px] border-white"}),Y.jsxs("div",{className:"absolute bottom-[2%] right-[10%] z-20 shadow-lg bg-orange-500  border-[2px] border-white rounded-full p-2 cursor-pointer w-8 h-8 flex justify-center items-center",onClick:()=>document.querySelector(".change-foto_profil").click(),children:[Y.jsx(d7,{className:"text-xl text-white"}),Y.jsx("input",{type:"file",hidden:!0,className:"change-foto_profil",onChange:q})]})]}),Y.jsxs("div",{className:"flex flex-col gap-3",children:[Y.jsx("h1",{className:"text-4xl font-semibold",children:ND(i==null?void 0:i.full_name)}),Y.jsx("p",{children:i==null?void 0:i.address})]}),Y.jsx("button",{className:"w-[150px] absolute right-20 bg-orange-500 text-white py-2 rounded-full",type:"submit",children:"Simpan"})]}),Y.jsx("label",{htmlFor:"nama",className:"font-semibold",children:"Nama"}),Y.jsx("input",{type:"text",id:"nama",placeholder:"Masukkan nama anda",className:"w-full py-2.5 px-4 border focus:outline-0",value:b,onChange:Z=>A(Z.target.value)}),Y.jsx("label",{htmlFor:"email",className:"font-semibold",children:"Email"}),Y.jsx("input",{type:"email",id:"email",placeholder:"Masukkan email anda",className:"w-full py-2.5 px-4 border focus:outline-0",value:v,onChange:Z=>C(Z.target.value)}),Y.jsx("label",{htmlFor:"alamat",className:"font-semibold",children:"Alamat"}),Y.jsx("textarea",{type:"text",id:"alamat",placeholder:"Masukkan alamat anda",className:"w-full py-2.5 px-4 border focus:outline-0 resize-none",value:B,onChange:Z=>M(Z.target.value)}),Y.jsx("label",{htmlFor:"nohp",className:"font-semibold",children:"No Handphone"}),Y.jsx("input",{type:"text",placeholder:"Masukkan no handphone anda",className:"w-full py-2.5 px-4 border focus:outline-0",value:D,onChange:Z=>N(Z.target.value)})]})})}function f7(i){return es({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h16l.002 14H4z"}},{tag:"path",attr:{d:"M6 7h12v2H6zm0 4h12v2H6zm0 4h6v2H6z"}}]})(i)}function p7(i){return es({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"}},{tag:"path",attr:{d:"M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"}}]})(i)}function m7(i){return es({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"}},{tag:"path",attr:{d:"M9 10h2v8H9zm4 0h2v8h-2z"}}]})(i)}function g7(i){return es({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M1014.64 969.04L703.71 656.207c57.952-69.408 92.88-158.704 92.88-256.208 0-220.912-179.088-400-400-400s-400 179.088-400 400 179.088 400 400 400c100.368 0 192.048-37.056 262.288-98.144l310.496 312.448c12.496 12.497 32.769 12.497 45.265 0 12.48-12.496 12.48-32.752 0-45.263zM396.59 736.527c-185.856 0-336.528-150.672-336.528-336.528S210.734 63.471 396.59 63.471c185.856 0 336.528 150.672 336.528 336.528S582.446 736.527 396.59 736.527z"}}]})(i)}function zD({handleSearch:i}){const[s,l]=ne.useState(""),u=b=>{l(b.target.value)},f=()=>{i(s.toLowerCase())},k=b=>{b.key==="Enter"&&f()};return Y.jsxs("div",{className:"relative grow h-[45px] border-2 bg-white text-gray-400 rounded-full overflow-hidden",children:[Y.jsx(g7,{className:"absolute top-3 left-3"}),Y.jsx("input",{type:"text",placeholder:"Cari Wisata",className:"flex pl-10 items-center justify-center h-full w-full focus:border-0 focus:outline-0",spellCheck:"false",value:s,onChange:u,onKeyDown:k}),Y.jsx("button",{className:"absolute right-0 top-0 rounded-full px-8 bg-orange-500 h-full text-white",onClick:f,children:"Cari"})]})}var jD={exports:{}};/*!
* sweetalert2 v11.7.10
* Released under the MIT License.
*/(function(i,s){(function(l,u){i.exports=u()})(En,function(){const u={},f=()=>{u.previousActiveElement instanceof HTMLElement?(u.previousActiveElement.focus(),u.previousActiveElement=null):document.body&&document.body.focus()},k=x=>new Promise(T=>{if(!x)return T();const R=window.scrollX,J=window.scrollY;u.restoreFocusTimeout=setTimeout(()=>{f(),T()},100),window.scrollTo(R,J)});var b={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const A="swal2-",C=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"].reduce((x,T)=>(x[T]=A+T,x),{}),M=["success","warning","info","question","error"].reduce((x,T)=>(x[T]=A+T,x),{}),D="SweetAlert2:",N=x=>x.charAt(0).toUpperCase()+x.slice(1),j=x=>{console.warn(`${D} ${typeof x=="object"?x.join(" "):x}`)},H=x=>{console.error(`${D} ${x}`)},Q=[],q=x=>{Q.includes(x)||(Q.push(x),j(x))},V=(x,T)=>{q(`"${x}" is deprecated and will be removed in the next major release. Please use "${T}" instead.`)},Z=x=>typeof x=="function"?x():x,te=x=>x&&typeof x.toPromise=="function",se=x=>te(x)?x.toPromise():Promise.resolve(x),pe=x=>x&&Promise.resolve(x)===x,le=()=>document.body.querySelector(`.${C.container}`),G=x=>{const T=le();return T?T.querySelector(x):null},ce=x=>G(`.${x}`),be=()=>ce(C.popup),Ie=()=>ce(C.icon),Me=()=>ce(C["icon-content"]),Ne=()=>ce(C.title),Ye=()=>ce(C["html-container"]),vt=()=>ce(C.image),it=()=>ce(C["progress-steps"]),bt=()=>ce(C["validation-message"]),de=()=>G(`.${C.actions} .${C.confirm}`),Le=()=>G(`.${C.actions} .${C.cancel}`),ge=()=>G(`.${C.actions} .${C.deny}`),Ze=()=>ce(C["input-label"]),Xe=()=>G(`.${C.loader}`),It=()=>ce(C.actions),dt=()=>ce(C.footer),rt=()=>ce(C["timer-progress-bar"]),qe=()=>ce(C.close),Qt=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,ct=()=>{const x=be().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),T=Array.from(x).sort((fe,He)=>{const ut=parseInt(fe.getAttribute("tabindex")),zt=parseInt(He.getAttribute("tabindex"));return ut>zt?1:ut<zt?-1:0}),R=be().querySelectorAll(Qt),J=Array.from(R).filter(fe=>fe.getAttribute("tabindex")!=="-1");return[...new Set(T.concat(J))].filter(fe=>At(fe))},pi=()=>Bn(document.body,C.shown)&&!Bn(document.body,C["toast-shown"])&&!Bn(document.body,C["no-backdrop"]),ni=()=>be()&&Bn(be(),C.toast),mi=()=>be().hasAttribute("data-loading"),yt=(x,T)=>{if(x.textContent="",T){const J=new DOMParser().parseFromString(T,"text/html");Array.from(J.querySelector("head").childNodes).forEach(fe=>{x.appendChild(fe)}),Array.from(J.querySelector("body").childNodes).forEach(fe=>{fe instanceof HTMLVideoElement||fe instanceof HTMLAudioElement?x.appendChild(fe.cloneNode(!0)):x.appendChild(fe)})}},Bn=(x,T)=>{if(!T)return!1;const R=T.split(/\s+/);for(let J=0;J<R.length;J++)if(!x.classList.contains(R[J]))return!1;return!0},js=(x,T)=>{Array.from(x.classList).forEach(R=>{!Object.values(C).includes(R)&&!Object.values(M).includes(R)&&!Object.values(T.showClass).includes(R)&&x.classList.remove(R)})},ot=(x,T,R)=>{if(js(x,T),T.customClass&&T.customClass[R]){if(typeof T.customClass[R]!="string"&&!T.customClass[R].forEach){j(`Invalid type of customClass.${R}! Expected string or iterable object, got "${typeof T.customClass[R]}"`);return}Ce(x,T.customClass[R])}},ie=(x,T)=>{if(!T)return null;switch(T){case"select":case"textarea":case"file":return x.querySelector(`.${C.popup} > .${C[T]}`);case"checkbox":return x.querySelector(`.${C.popup} > .${C.checkbox} input`);case"radio":return x.querySelector(`.${C.popup} > .${C.radio} input:checked`)||x.querySelector(`.${C.popup} > .${C.radio} input:first-child`);case"range":return x.querySelector(`.${C.popup} > .${C.range} input`);default:return x.querySelector(`.${C.popup} > .${C.input}`)}},me=x=>{if(x.focus(),x.type!=="file"){const T=x.value;x.value="",x.value=T}},we=(x,T,R)=>{!x||!T||(typeof T=="string"&&(T=T.split(/\s+/).filter(Boolean)),T.forEach(J=>{Array.isArray(x)?x.forEach(fe=>{R?fe.classList.add(J):fe.classList.remove(J)}):R?x.classList.add(J):x.classList.remove(J)}))},Ce=(x,T)=>{we(x,T,!0)},De=(x,T)=>{we(x,T,!1)},xe=(x,T)=>{const R=Array.from(x.children);for(let J=0;J<R.length;J++){const fe=R[J];if(fe instanceof HTMLElement&&Bn(fe,T))return fe}},Oe=(x,T,R)=>{R===`${parseInt(R)}`&&(R=parseInt(R)),R||parseInt(R)===0?x.style[T]=typeof R=="number"?`${R}px`:R:x.style.removeProperty(T)},Fe=function(x){let T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";x&&(x.style.display=T)},We=x=>{x&&(x.style.display="none")},Wn=(x,T,R,J)=>{const fe=x.querySelector(T);fe&&(fe.style[R]=J)},Li=function(x,T){let R=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";T?Fe(x,R):We(x)},At=x=>!!(x&&(x.offsetWidth||x.offsetHeight||x.getClientRects().length)),_n=()=>!At(de())&&!At(ge())&&!At(Le()),ii=x=>x.scrollHeight>x.clientHeight,Go=x=>{const T=window.getComputedStyle(x),R=parseFloat(T.getPropertyValue("animation-duration")||"0"),J=parseFloat(T.getPropertyValue("transition-duration")||"0");return R>0||J>0},Ko=function(x){let T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const R=rt();At(R)&&(T&&(R.style.transition="none",R.style.width="100%"),setTimeout(()=>{R.style.transition=`width ${x/1e3}s linear`,R.style.width="0%"},10))},Xi=()=>{const x=rt(),T=parseInt(window.getComputedStyle(x).width);x.style.removeProperty("transition"),x.style.width="100%";const R=parseInt(window.getComputedStyle(x).width),J=T/R*100;x.style.width=`${J}%`},Rs=()=>typeof window>"u"||typeof document>"u",Fs=`
 <div aria-labelledby="${C.title}" aria-describedby="${C["html-container"]}" class="${C.popup}" tabindex="-1">
   <button type="button" class="${C.close}"></button>
   <ul class="${C["progress-steps"]}"></ul>
   <div class="${C.icon}"></div>
   <img class="${C.image}" />
   <h2 class="${C.title}" id="${C.title}"></h2>
   <div class="${C["html-container"]}" id="${C["html-container"]}"></div>
   <input class="${C.input}" />
   <input type="file" class="${C.file}" />
   <div class="${C.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${C.select}"></select>
   <div class="${C.radio}"></div>
   <label for="${C.checkbox}" class="${C.checkbox}">
     <input type="checkbox" />
     <span class="${C.label}"></span>
   </label>
   <textarea class="${C.textarea}"></textarea>
   <div class="${C["validation-message"]}" id="${C["validation-message"]}"></div>
   <div class="${C.actions}">
     <div class="${C.loader}"></div>
     <button type="button" class="${C.confirm}"></button>
     <button type="button" class="${C.deny}"></button>
     <button type="button" class="${C.cancel}"></button>
   </div>
   <div class="${C.footer}"></div>
   <div class="${C["timer-progress-bar-container"]}">
     <div class="${C["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),xa=()=>{const x=le();return x?(x.remove(),De([document.documentElement,document.body],[C["no-backdrop"],C["toast-shown"],C["has-column"]]),!0):!1},eo=()=>{u.currentInstance.resetValidationMessage()},Zn=()=>{const x=be(),T=xe(x,C.input),R=xe(x,C.file),J=x.querySelector(`.${C.range} input`),fe=x.querySelector(`.${C.range} output`),He=xe(x,C.select),ut=x.querySelector(`.${C.checkbox} input`),zt=xe(x,C.textarea);T.oninput=eo,R.onchange=eo,He.onchange=eo,ut.onchange=eo,zt.oninput=eo,J.oninput=()=>{eo(),fe.value=J.value},J.onchange=()=>{eo(),fe.value=J.value}},Kt=x=>typeof x=="string"?document.querySelector(x):x,fn=x=>{const T=be();T.setAttribute("role",x.toast?"alert":"dialog"),T.setAttribute("aria-live",x.toast?"polite":"assertive"),x.toast||T.setAttribute("aria-modal","true")},_o=x=>{window.getComputedStyle(x).direction==="rtl"&&Ce(le(),C.rtl)},Vs=x=>{const T=xa();if(Rs()){H("SweetAlert2 requires document to initialize");return}const R=document.createElement("div");R.className=C.container,T&&Ce(R,C["no-transition"]),yt(R,Fs);const J=Kt(x.target);J.appendChild(R),fn(x),_o(J),Zn()},gr=(x,T)=>{x instanceof HTMLElement?T.appendChild(x):typeof x=="object"?Us(x,T):x&&yt(T,x)},Us=(x,T)=>{x.jquery?xl(T,x):yt(T,x.toString())},xl=(x,T)=>{if(x.textContent="",0 in T)for(let R=0;R in T;R++)x.appendChild(T[R].cloneNode(!0));else x.appendChild(T.cloneNode(!0))},kr=(()=>{if(Rs())return!1;const x=document.createElement("div"),T={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const R in T)if(Object.prototype.hasOwnProperty.call(T,R)&&typeof x.style[R]<"u")return T[R];return!1})(),Ea=(x,T)=>{const R=It(),J=Xe();!T.showConfirmButton&&!T.showDenyButton&&!T.showCancelButton?We(R):Fe(R),ot(R,T,"actions"),El(R,J,T),yt(J,T.loaderHtml),ot(J,T,"loader")};function El(x,T,R){const J=de(),fe=ge(),He=Le();nn(J,"confirm",R),nn(fe,"deny",R),nn(He,"cancel",R),Yo(J,fe,He,R),R.reverseButtons&&(R.toast?(x.insertBefore(He,J),x.insertBefore(fe,J)):(x.insertBefore(He,T),x.insertBefore(fe,T),x.insertBefore(J,T)))}function Yo(x,T,R,J){if(!J.buttonsStyling){De([x,T,R],C.styled);return}Ce([x,T,R],C.styled),J.confirmButtonColor&&(x.style.backgroundColor=J.confirmButtonColor,Ce(x,C["default-outline"])),J.denyButtonColor&&(T.style.backgroundColor=J.denyButtonColor,Ce(T,C["default-outline"])),J.cancelButtonColor&&(R.style.backgroundColor=J.cancelButtonColor,Ce(R,C["default-outline"]))}function nn(x,T,R){Li(x,R[`show${N(T)}Button`],"inline-block"),yt(x,R[`${T}ButtonText`]),x.setAttribute("aria-label",R[`${T}ButtonAriaLabel`]),x.className=C[T],ot(x,R,`${T}Button`),Ce(x,R[`${T}ButtonClass`])}const Sl=(x,T)=>{const R=qe();yt(R,T.closeButtonHtml),ot(R,T,"closeButton"),Li(R,T.showCloseButton),R.setAttribute("aria-label",T.closeButtonAriaLabel)},wr=(x,T)=>{const R=le();R&&(vo(R,T.backdrop),Dl(R,T.position),gi(R,T.grow),ot(R,T,"container"))};function vo(x,T){typeof T=="string"?x.style.background=T:T||Ce([document.documentElement,document.body],C["no-backdrop"])}function Dl(x,T){T in C?Ce(x,C[T]):(j('The "position" parameter is not valid, defaulting to "center"'),Ce(x,C.center))}function gi(x,T){if(T&&typeof T=="string"){const R=`grow-${T}`;R in C&&Ce(x,C[R])}}const Re=["input","file","range","select","radio","checkbox","textarea"],Sa=(x,T)=>{const R=be(),J=b.innerParams.get(x),fe=!J||T.input!==J.input;Re.forEach(He=>{const ut=xe(R,C[He]);br(He,T.inputAttributes),ut.className=C[He],fe&&We(ut)}),T.input&&(fe&&yo(T),to(T))},yo=x=>{if(!pn[x.input]){H(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${x.input}"`);return}const T=ns(x.input),R=pn[x.input](T,x);Fe(T),x.inputAutoFocus&&setTimeout(()=>{me(R)})},Ao=x=>{for(let T=0;T<x.attributes.length;T++){const R=x.attributes[T].name;["type","value","style"].includes(R)||x.removeAttribute(R)}},br=(x,T)=>{const R=ie(be(),x);if(R){Ao(R);for(const J in T)R.setAttribute(J,T[J])}},to=x=>{const T=ns(x.input);typeof x.customClass=="object"&&Ce(T,x.customClass.input)},ts=(x,T)=>{(!x.placeholder||T.inputPlaceholder)&&(x.placeholder=T.inputPlaceholder)},ki=(x,T,R)=>{if(R.inputLabel){x.id=C.input;const J=document.createElement("label"),fe=C["input-label"];J.setAttribute("for",x.id),J.className=fe,typeof R.customClass=="object"&&Ce(J,R.customClass.inputLabel),J.innerText=R.inputLabel,T.insertAdjacentElement("beforebegin",J)}},ns=x=>xe(be(),C[x]||C.input),oi=(x,T)=>{["string","number"].includes(typeof T)?x.value=`${T}`:pe(T)||j(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof T}"`)},pn={};pn.text=pn.email=pn.password=pn.number=pn.tel=pn.url=(x,T)=>(oi(x,T.inputValue),ki(x,x,T),ts(x,T),x.type=T.input,x),pn.file=(x,T)=>(ki(x,x,T),ts(x,T),x),pn.range=(x,T)=>{const R=x.querySelector("input"),J=x.querySelector("output");return oi(R,T.inputValue),R.type=T.input,oi(J,T.inputValue),ki(R,x,T),x},pn.select=(x,T)=>{if(x.textContent="",T.inputPlaceholder){const R=document.createElement("option");yt(R,T.inputPlaceholder),R.value="",R.disabled=!0,R.selected=!0,x.appendChild(R)}return ki(x,x,T),x},pn.radio=x=>(x.textContent="",x),pn.checkbox=(x,T)=>{const R=ie(be(),"checkbox");R.value="1",R.id=C.checkbox,R.checked=!!T.inputValue;const J=x.querySelector("span");return yt(J,T.inputPlaceholder),R},pn.textarea=(x,T)=>{oi(x,T.inputValue),ts(x,T),ki(x,x,T);const R=J=>parseInt(window.getComputedStyle(J).marginLeft)+parseInt(window.getComputedStyle(J).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const J=parseInt(window.getComputedStyle(be()).width),fe=()=>{const He=x.offsetWidth+R(x);He>J?be().style.width=`${He}px`:be().style.width=null};new MutationObserver(fe).observe(x,{attributes:!0,attributeFilter:["style"]})}}),x};const Hs=(x,T)=>{const R=Ye();ot(R,T,"htmlContainer"),T.html?(gr(T.html,R),Fe(R,"block")):T.text?(R.textContent=T.text,Fe(R,"block")):We(R),Sa(x,T)},is=(x,T)=>{const R=dt();R&&(Li(R,T.footer),T.footer&&gr(T.footer,R),ot(R,T,"footer"))},Da=(x,T)=>{const R=b.innerParams.get(x),J=Ie();if(R&&T.icon===R.icon){Ta(J,T),Bi(J,T);return}if(!T.icon&&!T.iconHtml){We(J);return}if(T.icon&&Object.keys(M).indexOf(T.icon)===-1){H(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${T.icon}"`),We(J);return}Fe(J),Ta(J,T),Bi(J,T),Ce(J,T.showClass.icon)},Bi=(x,T)=>{for(const R in M)T.icon!==R&&De(x,M[R]);Ce(x,M[T.icon]),Ws(x,T),_r(),ot(x,T,"icon")},_r=()=>{const x=be(),T=window.getComputedStyle(x).getPropertyValue("background-color"),R=x.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let J=0;J<R.length;J++)R[J].style.backgroundColor=T},Tl=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Ml=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Ta=(x,T)=>{let R=x.innerHTML,J;T.iconHtml?J=Ma(T.iconHtml):T.icon==="success"?(J=Tl,R=R.replace(/ style=".*?"/g,"")):T.icon==="error"?J=Ml:J=Ma({question:"?",warning:"!",info:"i"}[T.icon]),R.trim()!==J.trim()&&yt(x,J)},Ws=(x,T)=>{if(T.iconColor){x.style.color=T.iconColor,x.style.borderColor=T.iconColor;for(const R of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Wn(x,R,"backgroundColor",T.iconColor);Wn(x,".swal2-success-ring","borderColor",T.iconColor)}},Ma=x=>`<div class="${C["icon-content"]}">${x}</div>`,os=(x,T)=>{const R=vt();if(R){if(!T.imageUrl){We(R);return}Fe(R,""),R.setAttribute("src",T.imageUrl),R.setAttribute("alt",T.imageAlt||""),Oe(R,"width",T.imageWidth),Oe(R,"height",T.imageHeight),R.className=C.image,ot(R,T,"image")}},Qo=(x,T)=>{const R=le(),J=be();if(!(!R||!J)){if(T.toast){Oe(R,"width",T.width),J.style.width="100%";const fe=Xe();fe&&J.insertBefore(fe,Ie())}else Oe(J,"width",T.width);Oe(J,"padding",T.padding),T.color&&(J.style.color=T.color),T.background&&(J.style.background=T.background),We(bt()),Oi(J,T)}},Oi=(x,T)=>{const R=T.showClass||{};x.className=`${C.popup} ${At(x)?R.popup:""}`,T.toast?(Ce([document.documentElement,document.body],C["toast-shown"]),Ce(x,C.toast)):Ce(x,C.modal),ot(x,T,"popup"),typeof T.customClass=="string"&&Ce(x,T.customClass),T.icon&&Ce(x,C[`icon-${T.icon}`])},Co=(x,T)=>{const R=it();if(!R)return;const{progressSteps:J,currentProgressStep:fe}=T;if(!J||J.length===0||fe===void 0){We(R);return}Fe(R),R.textContent="",fe>=J.length&&j("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),J.forEach((He,ut)=>{const zt=zi(He);if(R.appendChild(zt),ut===fe&&Ce(zt,C["active-progress-step"]),ut!==J.length-1){const ln=ft(T);R.appendChild(ln)}})},zi=x=>{const T=document.createElement("li");return Ce(T,C["progress-step"]),yt(T,x),T},ft=x=>{const T=document.createElement("li");return Ce(T,C["progress-step-line"]),x.progressStepsDistance&&Oe(T,"width",x.progressStepsDistance),T},Ot=(x,T)=>{const R=Ne();R&&(Li(R,T.title||T.titleText,"block"),T.title&&gr(T.title,R),T.titleText&&(R.innerText=T.titleText),ot(R,T,"title"))},_t=(x,T)=>{Qo(x,T),wr(x,T),Co(x,T),Da(x,T),os(x,T),Ot(x,T),Sl(x,T),Hs(x,T),Ea(x,T),is(x,T),typeof T.didRender=="function"&&T.didRender(be())},$o=()=>At(be()),ji=()=>de()&&de().click(),rs=()=>ge()&&ge().click(),Je=()=>Le()&&Le().click(),ht=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),wi=x=>{x.keydownTarget&&x.keydownHandlerAdded&&(x.keydownTarget.removeEventListener("keydown",x.keydownHandler,{capture:x.keydownListenerCapture}),x.keydownHandlerAdded=!1)},vr=(x,T,R,J)=>{wi(T),R.toast||(T.keydownHandler=fe=>xo(x,fe,J),T.keydownTarget=R.keydownListenerCapture?window:be(),T.keydownListenerCapture=R.keydownListenerCapture,T.keydownTarget.addEventListener("keydown",T.keydownHandler,{capture:T.keydownListenerCapture}),T.keydownHandlerAdded=!0)},Dn=(x,T)=>{const R=ct();if(R.length){x=x+T,x===R.length?x=0:x===-1&&(x=R.length-1),R[x].focus();return}be().focus()},yr=["ArrowRight","ArrowDown"],Ar=["ArrowLeft","ArrowUp"],xo=(x,T,R)=>{const J=b.innerParams.get(x);J&&(T.isComposing||T.keyCode===229||(J.stopKeydownPropagation&&T.stopPropagation(),T.key==="Enter"?Ht(x,T,J):T.key==="Tab"?no(T):[...yr,...Ar].includes(T.key)?bi(T.key):T.key==="Escape"&&io(T,J,R)))},Ht=(x,T,R)=>{if(Z(R.allowEnterKey)&&T.target&&x.getInput()&&T.target instanceof HTMLElement&&T.target.outerHTML===x.getInput().outerHTML){if(["textarea","file"].includes(R.input))return;ji(),T.preventDefault()}},no=x=>{const T=x.target,R=ct();let J=-1;for(let fe=0;fe<R.length;fe++)if(T===R[fe]){J=fe;break}x.shiftKey?Dn(J,-1):Dn(J,1),x.stopPropagation(),x.preventDefault()},bi=x=>{const T=de(),R=ge(),J=Le(),fe=[T,R,J];if(document.activeElement instanceof HTMLElement&&!fe.includes(document.activeElement))return;const He=yr.includes(x)?"nextElementSibling":"previousElementSibling";let ut=document.activeElement;for(let zt=0;zt<It().children.length;zt++){if(ut=ut[He],!ut)return;if(ut instanceof HTMLButtonElement&&At(ut))break}ut instanceof HTMLButtonElement&&ut.focus()},io=(x,T,R)=>{Z(T.allowEscapeKey)&&(x.preventDefault(),R(ht.esc))};var Eo={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const ri=()=>{Array.from(document.body.children).forEach(T=>{T===le()||T.contains(le())||(T.hasAttribute("aria-hidden")&&T.setAttribute("data-previous-aria-hidden",T.getAttribute("aria-hidden")),T.setAttribute("aria-hidden","true"))})},_i=()=>{Array.from(document.body.children).forEach(T=>{T.hasAttribute("data-previous-aria-hidden")?(T.setAttribute("aria-hidden",T.getAttribute("data-previous-aria-hidden")),T.removeAttribute("data-previous-aria-hidden")):T.removeAttribute("aria-hidden")})},Zs=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!Bn(document.body,C.iosfix)){const T=document.body.scrollTop;document.body.style.top=`${T*-1}px`,Ce(document.body,C.iosfix),Cr(),So()}},So=()=>{const x=navigator.userAgent,T=!!x.match(/iPad/i)||!!x.match(/iPhone/i),R=!!x.match(/WebKit/i);T&&R&&!x.match(/CriOS/i)&&be().scrollHeight>window.innerHeight-44&&(le().style.paddingBottom="44px")},Cr=()=>{const x=le();let T;x.ontouchstart=R=>{T=qs(R)},x.ontouchmove=R=>{T&&(R.preventDefault(),R.stopPropagation())}},qs=x=>{const T=x.target,R=le();return oo(x)||Do(x)?!1:T===R||!ii(R)&&T instanceof HTMLElement&&T.tagName!=="INPUT"&&T.tagName!=="TEXTAREA"&&!(ii(Ye())&&Ye().contains(T))},oo=x=>x.touches&&x.touches.length&&x.touches[0].touchType==="stylus",Do=x=>x.touches&&x.touches.length>1,ss=()=>{if(Bn(document.body,C.iosfix)){const x=parseInt(document.body.style.top,10);De(document.body,C.iosfix),document.body.style.top="",document.body.scrollTop=x*-1}},Gs=()=>{const x=document.createElement("div");x.className=C["scrollbar-measure"],document.body.appendChild(x);const T=x.getBoundingClientRect().width-x.clientWidth;return document.body.removeChild(x),T};let Ge=null;const si=()=>{Ge===null&&document.body.scrollHeight>window.innerHeight&&(Ge=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Ge+Gs()}px`)},Pt=()=>{Ge!==null&&(document.body.style.paddingRight=`${Ge}px`,Ge=null)};function xr(x,T,R,J){ni()?Ct(x,J):(k(R).then(()=>Ct(x,J)),wi(u)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(T.setAttribute("style","display:none !important"),T.removeAttribute("class"),T.innerHTML=""):T.remove(),pi()&&(Pt(),ss(),_i()),Ks()}function Ks(){De([document.documentElement,document.body],[C.shown,C["height-auto"],C["no-backdrop"],C["toast-shown"]])}function qn(x){x=Er(x);const T=Eo.swalPromiseResolve.get(this),R=as(this);this.isAwaitingPromise?x.isDismissed||(On(this),T(x)):R&&T(x)}const as=x=>{const T=be();if(!T)return!1;const R=b.innerParams.get(x);if(!R||Bn(T,R.hideClass.popup))return!1;De(T,R.showClass.popup),Ce(T,R.hideClass.popup);const J=le();return De(J,R.showClass.backdrop),Ce(J,R.hideClass.backdrop),$t(x,T,R),!0};function vi(x){const T=Eo.swalPromiseReject.get(this);On(this),T&&T(x)}const On=x=>{x.isAwaitingPromise&&(delete x.isAwaitingPromise,b.innerParams.get(x)||x._destroy())},Er=x=>typeof x>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},x),$t=(x,T,R)=>{const J=le(),fe=kr&&Go(T);typeof R.willClose=="function"&&R.willClose(T),fe?yi(x,T,J,R.returnFocus,R.didClose):xr(x,J,R.returnFocus,R.didClose)},yi=(x,T,R,J,fe)=>{u.swalCloseEventFinishedCallback=xr.bind(null,x,R,J,fe),T.addEventListener(kr,function(He){He.target===T&&(u.swalCloseEventFinishedCallback(),delete u.swalCloseEventFinishedCallback)})},Ct=(x,T)=>{setTimeout(()=>{typeof T=="function"&&T.bind(x.params)(),x._destroy&&x._destroy()})},To=x=>{let T=be();T||new oa,T=be();const R=Xe();ni()?We(Ie()):ls(T,x),Fe(R),T.setAttribute("data-loading","true"),T.setAttribute("aria-busy","true"),T.focus()},ls=(x,T)=>{const R=It(),J=Xe();!T&&At(de())&&(T=de()),Fe(R),T&&(We(T),J.setAttribute("data-button-to-replace",T.className)),J.parentNode.insertBefore(J,T),Ce([x,R],C.loading)},Ys=(x,T)=>{T.input==="select"||T.input==="radio"?Dr(x,T):["text","email","number","tel","textarea"].includes(T.input)&&(te(T.inputValue)||pe(T.inputValue))&&(To(de()),Gn(x,T))},Mo=(x,T)=>{const R=x.getInput();if(!R)return null;switch(T.input){case"checkbox":return Sr(R);case"radio":return Ri(R);case"file":return lt(R);default:return T.inputAutoTrim?R.value.trim():R.value}},Sr=x=>x.checked?1:0,Ri=x=>x.checked?x.value:null,lt=x=>x.files.length?x.getAttribute("multiple")!==null?x.files:x.files[0]:null,Dr=(x,T)=>{const R=be(),J=fe=>{Io[T.input](R,Tr(fe),T)};te(T.inputOptions)||pe(T.inputOptions)?(To(de()),se(T.inputOptions).then(fe=>{x.hideLoading(),J(fe)})):typeof T.inputOptions=="object"?J(T.inputOptions):H(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof T.inputOptions}`)},Gn=(x,T)=>{const R=x.getInput();We(R),se(T.inputValue).then(J=>{R.value=T.input==="number"?`${parseFloat(J)||0}`:`${J}`,Fe(R),R.focus(),x.hideLoading()}).catch(J=>{H(`Error in inputValue promise: ${J}`),R.value="",Fe(R),R.focus(),x.hideLoading()})},Io={select:(x,T,R)=>{const J=xe(x,C.select),fe=(He,ut,zt)=>{const ln=document.createElement("option");ln.value=zt,yt(ln,ut),ln.selected=Mr(zt,R.inputValue),He.appendChild(ln)};T.forEach(He=>{const ut=He[0],zt=He[1];if(Array.isArray(zt)){const ln=document.createElement("optgroup");ln.label=ut,ln.disabled=!1,J.appendChild(ln),zt.forEach(ir=>fe(ln,ir[1],ir[0]))}else fe(J,zt,ut)}),J.focus()},radio:(x,T,R)=>{const J=xe(x,C.radio);T.forEach(He=>{const ut=He[0],zt=He[1],ln=document.createElement("input"),ir=document.createElement("label");ln.type="radio",ln.name=C.radio,ln.value=ut,Mr(ut,R.inputValue)&&(ln.checked=!0);const Fa=document.createElement("span");yt(Fa,zt),Fa.className=C.label,ir.appendChild(ln),ir.appendChild(Fa),J.appendChild(ir)});const fe=J.querySelectorAll("input");fe.length&&fe[0].focus()}},Tr=x=>{const T=[];return typeof Map<"u"&&x instanceof Map?x.forEach((R,J)=>{let fe=R;typeof fe=="object"&&(fe=Tr(fe)),T.push([J,fe])}):Object.keys(x).forEach(R=>{let J=x[R];typeof J=="object"&&(J=Tr(J)),T.push([R,J])}),T},Mr=(x,T)=>T&&T.toString()===x.toString(),cs=x=>{const T=b.innerParams.get(x);x.disableButtons(),T.input?Ir(x,"confirm"):$s(x,!0)},Il=x=>{const T=b.innerParams.get(x);x.disableButtons(),T.returnInputValueOnDeny?Ir(x,"deny"):Pr(x,!1)},Ia=(x,T)=>{x.disableButtons(),T(ht.cancel)},Ir=(x,T)=>{const R=b.innerParams.get(x);if(!R.input){H(`The "input" parameter is needed to be set when using returnInputValueOn${N(T)}`);return}const J=Mo(x,R);R.inputValidator?Qs(x,J,T):x.getInput().checkValidity()?T==="deny"?Pr(x,J):$s(x,J):(x.enableButtons(),x.showValidationMessage(R.validationMessage))},Qs=(x,T,R)=>{const J=b.innerParams.get(x);x.disableInput(),Promise.resolve().then(()=>se(J.inputValidator(T,J.validationMessage))).then(He=>{x.enableButtons(),x.enableInput(),He?x.showValidationMessage(He):R==="deny"?Pr(x,T):$s(x,T)})},Pr=(x,T)=>{const R=b.innerParams.get(x||void 0);R.showLoaderOnDeny&&To(ge()),R.preDeny?(x.isAwaitingPromise=!0,Promise.resolve().then(()=>se(R.preDeny(T,R.validationMessage))).then(fe=>{fe===!1?(x.hideLoading(),On(x)):x.close({isDenied:!0,value:typeof fe>"u"?T:fe})}).catch(fe=>zn(x||void 0,fe))):x.close({isDenied:!0,value:T})},ro=(x,T)=>{x.close({isConfirmed:!0,value:T})},zn=(x,T)=>{x.rejectPromise(T)},$s=(x,T)=>{const R=b.innerParams.get(x||void 0);R.showLoaderOnConfirm&&To(),R.preConfirm?(x.resetValidationMessage(),x.isAwaitingPromise=!0,Promise.resolve().then(()=>se(R.preConfirm(T,R.validationMessage))).then(fe=>{At(bt())||fe===!1?(x.hideLoading(),On(x)):ro(x,typeof fe>"u"?T:fe)}).catch(fe=>zn(x||void 0,fe))):ro(x,T)};function Ai(){const x=b.innerParams.get(this);if(!x)return;const T=b.domCache.get(this);We(T.loader),ni()?x.icon&&Fe(Ie()):Fi(T),De([T.popup,T.actions],C.loading),T.popup.removeAttribute("aria-busy"),T.popup.removeAttribute("data-loading"),T.confirmButton.disabled=!1,T.denyButton.disabled=!1,T.cancelButton.disabled=!1}const Fi=x=>{const T=x.popup.getElementsByClassName(x.loader.getAttribute("data-button-to-replace"));T.length?Fe(T[0],"inline-block"):_n()&&We(x.actions)};function Jo(){const x=b.innerParams.get(this),T=b.domCache.get(this);return T?ie(T.popup,x.input):null}function ds(x,T,R){const J=b.domCache.get(x);T.forEach(fe=>{J[fe].disabled=R})}function Nr(x,T){if(x)if(x.type==="radio"){const J=x.parentNode.parentNode.querySelectorAll("input");for(let fe=0;fe<J.length;fe++)J[fe].disabled=T}else x.disabled=T}function Js(){ds(this,["confirmButton","denyButton","cancelButton"],!1)}function Lr(){ds(this,["confirmButton","denyButton","cancelButton"],!0)}function Br(){Nr(this.getInput(),!1)}function Pa(){Nr(this.getInput(),!0)}function Xs(x){const T=b.domCache.get(this),R=b.innerParams.get(this);yt(T.validationMessage,x),T.validationMessage.className=C["validation-message"],R.customClass&&R.customClass.validationMessage&&Ce(T.validationMessage,R.customClass.validationMessage),Fe(T.validationMessage);const J=this.getInput();J&&(J.setAttribute("aria-invalid",!0),J.setAttribute("aria-describedby",C["validation-message"]),me(J),Ce(J,C.inputerror))}function us(){const x=b.domCache.get(this);x.validationMessage&&We(x.validationMessage);const T=this.getInput();T&&(T.removeAttribute("aria-invalid"),T.removeAttribute("aria-describedby"),De(T,C.inputerror))}const so={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},hs=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Na={},Or=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Ci=x=>Object.prototype.hasOwnProperty.call(so,x),La=x=>hs.indexOf(x)!==-1,Po=x=>Na[x],vn=x=>{Ci(x)||j(`Unknown parameter "${x}"`)},Ba=x=>{Or.includes(x)&&j(`The parameter "${x}" is incompatible with toasts`)},zr=x=>{const T=Po(x);T&&V(x,T)},fs=x=>{x.backdrop===!1&&x.allowOutsideClick&&j('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const T in x)vn(T),x.toast&&Ba(T),zr(T)};function No(x){const T=be(),R=b.innerParams.get(this);if(!T||Bn(T,R.hideClass.popup)){j("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const J=gt(x),fe=Object.assign({},R,J);_t(this,fe),b.innerParams.set(this,fe),Object.defineProperties(this,{params:{value:Object.assign({},this.params,x),writable:!1,enumerable:!0}})}const gt=x=>{const T={};return Object.keys(x).forEach(R=>{La(R)?T[R]=x[R]:j(`Invalid parameter to update: ${R}`)}),T};function ea(){const x=b.domCache.get(this),T=b.innerParams.get(this);if(!T){ps(this);return}x.popup&&u.swalCloseEventFinishedCallback&&(u.swalCloseEventFinishedCallback(),delete u.swalCloseEventFinishedCallback),typeof T.didDestroy=="function"&&T.didDestroy(),Oa(this)}const Oa=x=>{ps(x),delete x.params,delete u.keydownHandler,delete u.keydownTarget,delete u.currentInstance},ps=x=>{x.isAwaitingPromise?(ms(b,x),x.isAwaitingPromise=!0):(ms(Eo,x),ms(b,x),delete x.isAwaitingPromise,delete x.disableButtons,delete x.enableButtons,delete x.getInput,delete x.disableInput,delete x.enableInput,delete x.hideLoading,delete x.disableLoading,delete x.showValidationMessage,delete x.resetValidationMessage,delete x.close,delete x.closePopup,delete x.closeModal,delete x.closeToast,delete x.rejectPromise,delete x.update,delete x._destroy)},ms=(x,T)=>{for(const R in x)x[R].delete(T)};var jn=Object.freeze({__proto__:null,_destroy:ea,close:qn,closeModal:qn,closePopup:qn,closeToast:qn,disableButtons:Lr,disableInput:Pa,disableLoading:Ai,enableButtons:Js,enableInput:Br,getInput:Jo,handleAwaitingPromise:On,hideLoading:Ai,rejectPromise:vi,resetValidationMessage:us,showValidationMessage:Xs,update:No});const Xo=(x,T,R)=>{b.innerParams.get(x).toast?Pl(x,T,R):(Lo(T),ai(T),xi(x,T,R))},Pl=(x,T,R)=>{T.popup.onclick=()=>{const J=b.innerParams.get(x);J&&(Vi(J)||J.timer||J.input)||R(ht.close)}},Vi=x=>x.showConfirmButton||x.showDenyButton||x.showCancelButton||x.showCloseButton;let gs=!1;const Lo=x=>{x.popup.onmousedown=()=>{x.container.onmouseup=function(T){x.container.onmouseup=void 0,T.target===x.container&&(gs=!0)}}},ai=x=>{x.container.onmousedown=()=>{x.popup.onmouseup=function(T){x.popup.onmouseup=void 0,(T.target===x.popup||x.popup.contains(T.target))&&(gs=!0)}}},xi=(x,T,R)=>{T.container.onclick=J=>{const fe=b.innerParams.get(x);if(gs){gs=!1;return}J.target===T.container&&Z(fe.allowOutsideClick)&&R(ht.backdrop)}},za=x=>typeof x=="object"&&x.jquery,er=x=>x instanceof Element||za(x),jr=x=>{const T={};return typeof x[0]=="object"&&!er(x[0])?Object.assign(T,x[0]):["title","html","icon"].forEach((R,J)=>{const fe=x[J];typeof fe=="string"||er(fe)?T[R]=fe:fe!==void 0&&H(`Unexpected type of ${R}! Expected "string" or "Element", got ${typeof fe}`)}),T};function Kn(){const x=this;for(var T=arguments.length,R=new Array(T),J=0;J<T;J++)R[J]=arguments[J];return new x(...R)}function tr(x){class T extends this{_main(J,fe){return super._main(J,Object.assign({},x,fe))}}return T}const nr=()=>u.timeout&&u.timeout.getTimerLeft(),ks=()=>{if(u.timeout)return Xi(),u.timeout.stop()},F=()=>{if(u.timeout){const x=u.timeout.start();return Ko(x),x}},U=()=>{const x=u.timeout;return x&&(x.running?ks():F())},X=x=>{if(u.timeout){const T=u.timeout.increase(x);return Ko(T,!0),T}},ae=()=>u.timeout&&u.timeout.isRunning();let ze=!1;const Ve={};function et(){let x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Ve[x]=this,ze||(document.body.addEventListener("click",nt),ze=!0)}const nt=x=>{for(let T=x.target;T&&T!==document;T=T.parentNode)for(const R in Ve){const J=T.getAttribute(R);if(J){Ve[R].fire({template:J});return}}};var jt=Object.freeze({__proto__:null,argsToParams:jr,bindClickHandler:et,clickCancel:Je,clickConfirm:ji,clickDeny:rs,enableLoading:To,fire:Kn,getActions:It,getCancelButton:Le,getCloseButton:qe,getConfirmButton:de,getContainer:le,getDenyButton:ge,getFocusableElements:ct,getFooter:dt,getHtmlContainer:Ye,getIcon:Ie,getIconContent:Me,getImage:vt,getInputLabel:Ze,getLoader:Xe,getPopup:be,getProgressSteps:it,getTimerLeft:nr,getTimerProgressBar:rt,getTitle:Ne,getValidationMessage:bt,increaseTimer:X,isDeprecatedParameter:Po,isLoading:mi,isTimerRunning:ae,isUpdatableParameter:La,isValidParameter:Ci,isVisible:$o,mixin:tr,resumeTimer:F,showLoading:To,stopTimer:ks,toggleTimer:U});class Et{constructor(T,R){this.callback=T,this.remaining=R,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(T){const R=this.running;return R&&this.stop(),this.remaining+=T,R&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Bo=["swal-title","swal-html","swal-footer"],Ei=x=>{const T=typeof x.template=="string"?document.querySelector(x.template):x.template;if(!T)return{};const R=T.content;return Qn(R),Object.assign(mn(R),Ui(R),ao(R),Hi(R),Yn(R),at(R),yn(R,Bo))},mn=x=>{const T={};return Array.from(x.querySelectorAll("swal-param")).forEach(J=>{on(J,["name","value"]);const fe=J.getAttribute("name"),He=J.getAttribute("value");typeof so[fe]=="boolean"?T[fe]=He!=="false":typeof so[fe]=="object"?T[fe]=JSON.parse(He):T[fe]=He}),T},Ui=x=>{const T={};return Array.from(x.querySelectorAll("swal-function-param")).forEach(J=>{const fe=J.getAttribute("name"),He=J.getAttribute("value");T[fe]=new Function(`return ${He}`)()}),T},ao=x=>{const T={};return Array.from(x.querySelectorAll("swal-button")).forEach(J=>{on(J,["type","color","aria-label"]);const fe=J.getAttribute("type");T[`${fe}ButtonText`]=J.innerHTML,T[`show${N(fe)}Button`]=!0,J.hasAttribute("color")&&(T[`${fe}ButtonColor`]=J.getAttribute("color")),J.hasAttribute("aria-label")&&(T[`${fe}ButtonAriaLabel`]=J.getAttribute("aria-label"))}),T},Hi=x=>{const T={},R=x.querySelector("swal-image");return R&&(on(R,["src","width","height","alt"]),R.hasAttribute("src")&&(T.imageUrl=R.getAttribute("src")),R.hasAttribute("width")&&(T.imageWidth=R.getAttribute("width")),R.hasAttribute("height")&&(T.imageHeight=R.getAttribute("height")),R.hasAttribute("alt")&&(T.imageAlt=R.getAttribute("alt"))),T},Yn=x=>{const T={},R=x.querySelector("swal-icon");return R&&(on(R,["type","color"]),R.hasAttribute("type")&&(T.icon=R.getAttribute("type")),R.hasAttribute("color")&&(T.iconColor=R.getAttribute("color")),T.iconHtml=R.innerHTML),T},at=x=>{const T={},R=x.querySelector("swal-input");R&&(on(R,["type","label","placeholder","value"]),T.input=R.getAttribute("type")||"text",R.hasAttribute("label")&&(T.inputLabel=R.getAttribute("label")),R.hasAttribute("placeholder")&&(T.inputPlaceholder=R.getAttribute("placeholder")),R.hasAttribute("value")&&(T.inputValue=R.getAttribute("value")));const J=Array.from(x.querySelectorAll("swal-input-option"));return J.length&&(T.inputOptions={},J.forEach(fe=>{on(fe,["value"]);const He=fe.getAttribute("value"),ut=fe.innerHTML;T.inputOptions[He]=ut})),T},yn=(x,T)=>{const R={};for(const J in T){const fe=T[J],He=x.querySelector(fe);He&&(on(He,[]),R[fe.replace(/^swal-/,"")]=He.innerHTML.trim())}return R},Qn=x=>{const T=Bo.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(x.children).forEach(R=>{const J=R.tagName.toLowerCase();T.includes(J)||j(`Unrecognized element <${J}>`)})},on=(x,T)=>{Array.from(x.attributes).forEach(R=>{T.indexOf(R.name)===-1&&j([`Unrecognized attribute "${R.name}" on <${x.tagName.toLowerCase()}>.`,`${T.length?`Allowed attributes are: ${T.join(", ")}`:"To set the value, use HTML within the element."}`])})},ja=10,pc=x=>{const T=le(),R=be();typeof x.willOpen=="function"&&x.willOpen(R);const fe=window.getComputedStyle(document.body).overflowY;ta(T,R,x),setTimeout(()=>{Zi(T,R)},ja),pi()&&(Ra(T,x.scrollbarPadding,fe),ri()),!ni()&&!u.previousActiveElement&&(u.previousActiveElement=document.activeElement),typeof x.didOpen=="function"&&setTimeout(()=>x.didOpen(R)),De(T,C["no-transition"])},Wi=x=>{const T=be();if(x.target!==T)return;const R=le();T.removeEventListener(kr,Wi),R.style.overflowY="auto"},Zi=(x,T)=>{kr&&Go(T)?(x.style.overflowY="hidden",T.addEventListener(kr,Wi)):x.style.overflowY="auto"},Ra=(x,T,R)=>{Zs(),T&&R!=="hidden"&&si(),setTimeout(()=>{x.scrollTop=0})},ta=(x,T,R)=>{Ce(x,R.showClass.backdrop),T.style.setProperty("opacity","0","important"),Fe(T,"grid"),setTimeout(()=>{Ce(T,R.showClass.popup),T.style.removeProperty("opacity")},ja),Ce([document.documentElement,document.body],C.shown),R.heightAuto&&R.backdrop&&!R.toast&&Ce([document.documentElement,document.body],C["height-auto"])};var Oo={email:(x,T)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(x)?Promise.resolve():Promise.resolve(T||"Invalid email address"),url:(x,T)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(x)?Promise.resolve():Promise.resolve(T||"Invalid URL")};function mc(x){x.inputValidator||Object.keys(Oo).forEach(T=>{x.input===T&&(x.inputValidator=Oo[T])})}function gc(x){(!x.target||typeof x.target=="string"&&!document.querySelector(x.target)||typeof x.target!="string"&&!x.target.appendChild)&&(j('Target parameter is not valid, defaulting to "body"'),x.target="body")}function Rr(x){mc(x),x.showLoaderOnConfirm&&!x.preConfirm&&j(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),gc(x),typeof x.title=="string"&&(x.title=x.title.split(`
`).join("<br />")),Vs(x)}let Ke;class Lt{constructor(){if(typeof window>"u")return;Ke=this;for(var T=arguments.length,R=new Array(T),J=0;J<T;J++)R[J]=arguments[J];const fe=Object.freeze(this.constructor.argsToParams(R));this.params=fe,this.isAwaitingPromise=!1;const He=Ke._main(Ke.params);b.promise.set(this,He)}_main(T){let R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};fs(Object.assign({},R,T)),u.currentInstance&&(u.currentInstance._destroy(),pi()&&_i()),u.currentInstance=Ke;const J=na(T,R);Rr(J),Object.freeze(J),u.timeout&&(u.timeout.stop(),delete u.timeout),clearTimeout(u.restoreFocusTimeout);const fe=kc(Ke);return _t(Ke,J),b.innerParams.set(Ke,J),Yt(Ke,fe,J)}then(T){return b.promise.get(this).then(T)}finally(T){return b.promise.get(this).finally(T)}}const Yt=(x,T,R)=>new Promise((J,fe)=>{const He=ut=>{x.close({isDismissed:!0,dismiss:ut})};Eo.swalPromiseResolve.set(x,J),Eo.swalPromiseReject.set(x,fe),T.confirmButton.onclick=()=>{cs(x)},T.denyButton.onclick=()=>{Il(x)},T.cancelButton.onclick=()=>{Ia(x,He)},T.closeButton.onclick=()=>{He(ht.close)},Xo(x,T,He),vr(x,u,R,He),Ys(x,R),pc(R),lo(u,R,He),Wt(T,R),setTimeout(()=>{T.container.scrollTop=0})}),na=(x,T)=>{const R=Ei(x),J=Object.assign({},so,T,R,x);return J.showClass=Object.assign({},so.showClass,J.showClass),J.hideClass=Object.assign({},so.hideClass,J.hideClass),J},kc=x=>{const T={popup:be(),container:le(),actions:It(),confirmButton:de(),denyButton:ge(),cancelButton:Le(),loader:Xe(),closeButton:qe(),validationMessage:bt(),progressSteps:it()};return b.domCache.set(x,T),T},lo=(x,T,R)=>{const J=rt();We(J),T.timer&&(x.timeout=new Et(()=>{R("timer"),delete x.timeout},T.timer),T.timerProgressBar&&(Fe(J),ot(J,T,"timerProgressBar"),setTimeout(()=>{x.timeout&&x.timeout.running&&Ko(T.timer)})))},Wt=(x,T)=>{if(!T.toast){if(!Z(T.allowEnterKey)){ws();return}ia(x,T)||Dn(-1,1)}},ia=(x,T)=>T.focusDeny&&At(x.denyButton)?(x.denyButton.focus(),!0):T.focusCancel&&At(x.cancelButton)?(x.cancelButton.focus(),!0):T.focusConfirm&&At(x.confirmButton)?(x.confirmButton.focus(),!0):!1,ws=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|xn--p1ai)$/)){const x=new Date,T=localStorage.getItem("swal-initiation");T?(x.getTime()-Date.parse(T))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const R=document.createElement("audio");R.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",R.loop=!0,document.body.appendChild(R),setTimeout(()=>{R.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${x}`)}Lt.prototype.disableButtons=Lr,Lt.prototype.enableButtons=Js,Lt.prototype.getInput=Jo,Lt.prototype.disableInput=Pa,Lt.prototype.enableInput=Br,Lt.prototype.hideLoading=Ai,Lt.prototype.disableLoading=Ai,Lt.prototype.showValidationMessage=Xs,Lt.prototype.resetValidationMessage=us,Lt.prototype.close=qn,Lt.prototype.closePopup=qn,Lt.prototype.closeModal=qn,Lt.prototype.closeToast=qn,Lt.prototype.rejectPromise=vi,Lt.prototype.update=No,Lt.prototype._destroy=ea,Object.assign(Lt,jt),Object.keys(jn).forEach(x=>{Lt[x]=function(){return Ke&&Ke[x]?Ke[x](...arguments):null}}),Lt.DismissReason=ht,Lt.version="11.7.10";const oa=Lt;return oa.default=oa,oa}),typeof En<"u"&&En.Sweetalert2&&(En.swal=En.sweetAlert=En.Swal=En.SweetAlert=En.Sweetalert2),typeof document<"u"&&function(l,u){var f=l.createElement("style");if(l.getElementsByTagName("head")[0].appendChild(f),f.styleSheet)f.styleSheet.disabled||(f.styleSheet.cssText=u);else try{f.innerHTML=u}catch{f.innerText=u}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-container) div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-container) div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-container) div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-container) div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-container) div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-container) div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-container) div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-container) div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-container) div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-container) div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-container) div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-container) div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-container) div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-container) div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-container) div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-container) div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-container) div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-container) div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-container) div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-container) div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-container) div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-container) div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-container) div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-container) div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-container) div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-container) div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-container) div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-container) div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-container) div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(jD);var k7=jD.exports;const C2=_w(k7),w7=({data:i,handleSearch:s,setCreateVisible:l,setListVisible:u,setEditVisible:f,setDetailData:k,refreshData:b})=>{const A=yd(),[v,C]=ne.useState(5),[B,M]=ne.useState(1),D=Math.ceil(i.length/v),N=Z=>{C2.fire({title:"Are you sure?",text:"Data akan dihapus secara permanent!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#F7911A",confirmButtonText:"Hapus"}).then(te=>{te.isConfirmed&&(M(Z),C2.fire("Berhasil Menghapus","Datamu berhasil dihapus dari daftar","success"))})},j=async Z=>{try{const te=await ti.get(`/tourist-object/tourist-object/${Z}/`);k(te.data),u(!1),f(!0)}catch(te){console.log(te)}},H=async Z=>{try{const te=await ti.delete(`/tourist-object/tourist-object/${Z}/`);b(),an.success("Data wisata telah berhasil dihapus")}catch(te){console.log(te)}},Q=Z=>{C(parseInt(Z.target.value)),M(1)},q=()=>{u(!1),l(!0)},V=i.slice((B-1)*v,B*v);return Y.jsxs("div",{className:"flex flex-col gap-6 px-20",children:[Y.jsxs("div",{className:"flex w-[60%] justify-end self-end gap-4",children:[Y.jsx(zD,{handleSearch:s}),Y.jsxs("button",{className:"flex items-center gap-2 px-8 py-2 bg-orange-500 text-white rounded-full",onClick:q,children:[Y.jsx(u7,{}),Y.jsx("span",{children:"Tambah"})]})]}),Y.jsxs("table",{className:"w-full border-collapse",children:[Y.jsx("thead",{children:Y.jsxs("tr",{className:"bg-gray-200",children:[Y.jsx("th",{className:"py-2 px-4",children:"No"}),Y.jsx("th",{className:"py-2 px-4",children:"Nama"}),Y.jsx("th",{className:"py-2 px-4",children:"Harga"}),Y.jsx("th",{className:"py-2 px-4",children:"Kategori"}),Y.jsx("th",{className:"py-2 px-4",children:"Aksi"})]})}),Y.jsx("tbody",{children:V.map((Z,te)=>Y.jsxs("tr",{className:te%2===0?"bg-gray-100":"",children:[Y.jsx("td",{className:"py-4 px-4 border-b-4 text-center",children:(B-1)*v+te+1}),Y.jsx("td",{className:"py-4 px-4 border-b-4 text-center",children:sd(Z.name)}),Y.jsx("td",{className:"py-4 px-4 border-b-4 text-center",children:Dp(Z.price)}),Y.jsx("td",{className:"py-4 px-4 border-b-4 text-center",children:sd(Z.category)}),Y.jsx("td",{className:"py-4 px-4 border-b-4 text-center",children:Y.jsxs("div",{className:"flex gap-4 w-full justify-center items-center",children:[Y.jsx("button",{className:"text-blue-500 hover:text-blue-700",title:"Edit",onClick:()=>A(`/wisata/${Z.slug}`),children:Y.jsx(f7,{className:"text-2xl"})}),Y.jsx("button",{className:"text-red-500 hover:text-red-700",title:"Delete",onClick:()=>H(Z.slug),children:Y.jsx(m7,{className:"text-2xl"})}),Y.jsx("button",{className:"text-green-500 hover:text-green-700",title:"Detail",onClick:()=>j(Z.slug),children:Y.jsx(p7,{className:"text-2xl"})})]})})]},Z.slug))})]}),Y.jsxs("div",{className:"flex justify-between mt-4 px-16",children:[Y.jsxs("div",{className:"flex gap-4 items-center",children:[Y.jsxs("select",{id:"itemsPerPage",className:"border bg-orange-500 text-white font-medium rounded-md py-2 px-2",value:v,onChange:Q,children:[Y.jsx("option",{value:"5",children:"5"}),Y.jsx("option",{value:"10",children:"10"}),Y.jsx("option",{value:"20",children:"20"})]}),Y.jsx("label",{htmlFor:"itemsPerPage",className:"mr-2 text-slate-500",children:"Tampilkan per halaman"})]}),Y.jsx("div",{children:D>1&&Y.jsx("div",{className:"flex",children:Array.from({length:D},(Z,te)=>te+1).map(Z=>Y.jsx("button",{className:`mx-1 w-10 py-1 rounded ${B===Z?"bg-blue-500 text-white":"bg-gray-200"}`,onClick:()=>N(Z),children:Z},Z))})})]})]})};var Jf={exports:{}};Jf.exports;(function(i,s){(function(l){const u=l.en=l.en||{};u.dictionary=Object.assign(u.dictionary||{},{"%0 of %1":"%0 of %1","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent",Insert:"Insert","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert image via URL":"Insert image via URL","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Inset:"Inset",Italic:"Italic","Justify cell text":"Justify cell text","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough",Style:"Style",Subscript:"Subscript",Superscript:"Superscript","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(l,u){i.exports=u()}(self,()=>(()=>{var l={4959:(b,A,v)=>{const C=v(1103),B={};for(const D of Object.keys(C))B[C[D]]=D;const M={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};b.exports=M;for(const D of Object.keys(M)){if(!("channels"in M[D]))throw new Error("missing channels property: "+D);if(!("labels"in M[D]))throw new Error("missing channel labels property: "+D);if(M[D].labels.length!==M[D].channels)throw new Error("channel and label counts mismatch: "+D);const{channels:N,labels:j}=M[D];delete M[D].channels,delete M[D].labels,Object.defineProperty(M[D],"channels",{value:N}),Object.defineProperty(M[D],"labels",{value:j})}M.rgb.hsl=function(D){const N=D[0]/255,j=D[1]/255,H=D[2]/255,Q=Math.min(N,j,H),q=Math.max(N,j,H),V=q-Q;let Z,te;q===Q?Z=0:N===q?Z=(j-H)/V:j===q?Z=2+(H-N)/V:H===q&&(Z=4+(N-j)/V),Z=Math.min(60*Z,360),Z<0&&(Z+=360);const se=(Q+q)/2;return te=q===Q?0:se<=.5?V/(q+Q):V/(2-q-Q),[Z,100*te,100*se]},M.rgb.hsv=function(D){let N,j,H,Q,q;const V=D[0]/255,Z=D[1]/255,te=D[2]/255,se=Math.max(V,Z,te),pe=se-Math.min(V,Z,te),le=function(G){return(se-G)/6/pe+.5};return pe===0?(Q=0,q=0):(q=pe/se,N=le(V),j=le(Z),H=le(te),V===se?Q=H-j:Z===se?Q=.3333333333333333+N-H:te===se&&(Q=.6666666666666666+j-N),Q<0?Q+=1:Q>1&&(Q-=1)),[360*Q,100*q,100*se]},M.rgb.hwb=function(D){const N=D[0],j=D[1];let H=D[2];const Q=M.rgb.hsl(D)[0],q=1/255*Math.min(N,Math.min(j,H));return H=1-.00392156862745098*Math.max(N,Math.max(j,H)),[Q,100*q,100*H]},M.rgb.cmyk=function(D){const N=D[0]/255,j=D[1]/255,H=D[2]/255,Q=Math.min(1-N,1-j,1-H);return[100*((1-N-Q)/(1-Q)||0),100*((1-j-Q)/(1-Q)||0),100*((1-H-Q)/(1-Q)||0),100*Q]},M.rgb.keyword=function(D){const N=B[D];if(N)return N;let j,H=1/0;for(const V of Object.keys(C)){const Z=C[V],te=(q=Z,((Q=D)[0]-q[0])**2+(Q[1]-q[1])**2+(Q[2]-q[2])**2);te<H&&(H=te,j=V)}var Q,q;return j},M.keyword.rgb=function(D){return C[D]},M.rgb.xyz=function(D){let N=D[0]/255,j=D[1]/255,H=D[2]/255;return N=N>.04045?((N+.055)/1.055)**2.4:N/12.92,j=j>.04045?((j+.055)/1.055)**2.4:j/12.92,H=H>.04045?((H+.055)/1.055)**2.4:H/12.92,[100*(.4124*N+.3576*j+.1805*H),100*(.2126*N+.7152*j+.0722*H),100*(.0193*N+.1192*j+.9505*H)]},M.rgb.lab=function(D){const N=M.rgb.xyz(D);let j=N[0],H=N[1],Q=N[2];return j/=95.047,H/=100,Q/=108.883,j=j>.008856?j**.3333333333333333:7.787*j+.13793103448275862,H=H>.008856?H**.3333333333333333:7.787*H+.13793103448275862,Q=Q>.008856?Q**.3333333333333333:7.787*Q+.13793103448275862,[116*H-16,500*(j-H),200*(H-Q)]},M.hsl.rgb=function(D){const N=D[0]/360,j=D[1]/100,H=D[2]/100;let Q,q,V;if(j===0)return V=255*H,[V,V,V];Q=H<.5?H*(1+j):H+j-H*j;const Z=2*H-Q,te=[0,0,0];for(let se=0;se<3;se++)q=N+.3333333333333333*-(se-1),q<0&&q++,q>1&&q--,V=6*q<1?Z+6*(Q-Z)*q:2*q<1?Q:3*q<2?Z+(Q-Z)*(.6666666666666666-q)*6:Z,te[se]=255*V;return te},M.hsl.hsv=function(D){const N=D[0];let j=D[1]/100,H=D[2]/100,Q=j;const q=Math.max(H,.01);return H*=2,j*=H<=1?H:2-H,Q*=q<=1?q:2-q,[N,100*(H===0?2*Q/(q+Q):2*j/(H+j)),100*((H+j)/2)]},M.hsv.rgb=function(D){const N=D[0]/60,j=D[1]/100;let H=D[2]/100;const Q=Math.floor(N)%6,q=N-Math.floor(N),V=255*H*(1-j),Z=255*H*(1-j*q),te=255*H*(1-j*(1-q));switch(H*=255,Q){case 0:return[H,te,V];case 1:return[Z,H,V];case 2:return[V,H,te];case 3:return[V,Z,H];case 4:return[te,V,H];case 5:return[H,V,Z]}},M.hsv.hsl=function(D){const N=D[0],j=D[1]/100,H=D[2]/100,Q=Math.max(H,.01);let q,V;V=(2-j)*H;const Z=(2-j)*Q;return q=j*Q,q/=Z<=1?Z:2-Z,q=q||0,V/=2,[N,100*q,100*V]},M.hwb.rgb=function(D){const N=D[0]/360;let j=D[1]/100,H=D[2]/100;const Q=j+H;let q;Q>1&&(j/=Q,H/=Q);const V=Math.floor(6*N),Z=1-H;q=6*N-V,1&V&&(q=1-q);const te=j+q*(Z-j);let se,pe,le;switch(V){default:case 6:case 0:se=Z,pe=te,le=j;break;case 1:se=te,pe=Z,le=j;break;case 2:se=j,pe=Z,le=te;break;case 3:se=j,pe=te,le=Z;break;case 4:se=te,pe=j,le=Z;break;case 5:se=Z,pe=j,le=te}return[255*se,255*pe,255*le]},M.cmyk.rgb=function(D){const N=D[0]/100,j=D[1]/100,H=D[2]/100,Q=D[3]/100;return[255*(1-Math.min(1,N*(1-Q)+Q)),255*(1-Math.min(1,j*(1-Q)+Q)),255*(1-Math.min(1,H*(1-Q)+Q))]},M.xyz.rgb=function(D){const N=D[0]/100,j=D[1]/100,H=D[2]/100;let Q,q,V;return Q=3.2406*N+-1.5372*j+-.4986*H,q=-.9689*N+1.8758*j+.0415*H,V=.0557*N+-.204*j+1.057*H,Q=Q>.0031308?1.055*Q**.4166666666666667-.055:12.92*Q,q=q>.0031308?1.055*q**.4166666666666667-.055:12.92*q,V=V>.0031308?1.055*V**.4166666666666667-.055:12.92*V,Q=Math.min(Math.max(0,Q),1),q=Math.min(Math.max(0,q),1),V=Math.min(Math.max(0,V),1),[255*Q,255*q,255*V]},M.xyz.lab=function(D){let N=D[0],j=D[1],H=D[2];return N/=95.047,j/=100,H/=108.883,N=N>.008856?N**.3333333333333333:7.787*N+.13793103448275862,j=j>.008856?j**.3333333333333333:7.787*j+.13793103448275862,H=H>.008856?H**.3333333333333333:7.787*H+.13793103448275862,[116*j-16,500*(N-j),200*(j-H)]},M.lab.xyz=function(D){let N,j,H;j=(D[0]+16)/116,N=D[1]/500+j,H=j-D[2]/200;const Q=j**3,q=N**3,V=H**3;return j=Q>.008856?Q:(j-.13793103448275862)/7.787,N=q>.008856?q:(N-.13793103448275862)/7.787,H=V>.008856?V:(H-.13793103448275862)/7.787,N*=95.047,j*=100,H*=108.883,[N,j,H]},M.lab.lch=function(D){const N=D[0],j=D[1],H=D[2];let Q;return Q=360*Math.atan2(H,j)/2/Math.PI,Q<0&&(Q+=360),[N,Math.sqrt(j*j+H*H),Q]},M.lch.lab=function(D){const N=D[0],j=D[1],H=D[2]/360*2*Math.PI;return[N,j*Math.cos(H),j*Math.sin(H)]},M.rgb.ansi16=function(D,N=null){const[j,H,Q]=D;let q=N===null?M.rgb.hsv(D)[2]:N;if(q=Math.round(q/50),q===0)return 30;let V=30+(Math.round(Q/255)<<2|Math.round(H/255)<<1|Math.round(j/255));return q===2&&(V+=60),V},M.hsv.ansi16=function(D){return M.rgb.ansi16(M.hsv.rgb(D),D[2])},M.rgb.ansi256=function(D){const N=D[0],j=D[1],H=D[2];return N===j&&j===H?N<8?16:N>248?231:Math.round((N-8)/247*24)+232:16+36*Math.round(N/255*5)+6*Math.round(j/255*5)+Math.round(H/255*5)},M.ansi16.rgb=function(D){let N=D%10;if(N===0||N===7)return D>50&&(N+=3.5),N=N/10.5*255,[N,N,N];const j=.5*(1+~~(D>50));return[(1&N)*j*255,(N>>1&1)*j*255,(N>>2&1)*j*255]},M.ansi256.rgb=function(D){if(D>=232){const j=10*(D-232)+8;return[j,j,j]}let N;return D-=16,[Math.floor(D/36)/5*255,Math.floor((N=D%36)/6)/5*255,N%6/5*255]},M.rgb.hex=function(D){const N=(((255&Math.round(D[0]))<<16)+((255&Math.round(D[1]))<<8)+(255&Math.round(D[2]))).toString(16).toUpperCase();return"000000".substring(N.length)+N},M.hex.rgb=function(D){const N=D.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!N)return[0,0,0];let j=N[0];N[0].length===3&&(j=j.split("").map(Q=>Q+Q).join(""));const H=parseInt(j,16);return[H>>16&255,H>>8&255,255&H]},M.rgb.hcg=function(D){const N=D[0]/255,j=D[1]/255,H=D[2]/255,Q=Math.max(Math.max(N,j),H),q=Math.min(Math.min(N,j),H),V=Q-q;let Z,te;return Z=V<1?q/(1-V):0,te=V<=0?0:Q===N?(j-H)/V%6:Q===j?2+(H-N)/V:4+(N-j)/V,te/=6,te%=1,[360*te,100*V,100*Z]},M.hsl.hcg=function(D){const N=D[1]/100,j=D[2]/100,H=j<.5?2*N*j:2*N*(1-j);let Q=0;return H<1&&(Q=(j-.5*H)/(1-H)),[D[0],100*H,100*Q]},M.hsv.hcg=function(D){const N=D[1]/100,j=D[2]/100,H=N*j;let Q=0;return H<1&&(Q=(j-H)/(1-H)),[D[0],100*H,100*Q]},M.hcg.rgb=function(D){const N=D[0]/360,j=D[1]/100,H=D[2]/100;if(j===0)return[255*H,255*H,255*H];const Q=[0,0,0],q=N%1*6,V=q%1,Z=1-V;let te=0;switch(Math.floor(q)){case 0:Q[0]=1,Q[1]=V,Q[2]=0;break;case 1:Q[0]=Z,Q[1]=1,Q[2]=0;break;case 2:Q[0]=0,Q[1]=1,Q[2]=V;break;case 3:Q[0]=0,Q[1]=Z,Q[2]=1;break;case 4:Q[0]=V,Q[1]=0,Q[2]=1;break;default:Q[0]=1,Q[1]=0,Q[2]=Z}return te=(1-j)*H,[255*(j*Q[0]+te),255*(j*Q[1]+te),255*(j*Q[2]+te)]},M.hcg.hsv=function(D){const N=D[1]/100,j=N+D[2]/100*(1-N);let H=0;return j>0&&(H=N/j),[D[0],100*H,100*j]},M.hcg.hsl=function(D){const N=D[1]/100,j=D[2]/100*(1-N)+.5*N;let H=0;return j>0&&j<.5?H=N/(2*j):j>=.5&&j<1&&(H=N/(2*(1-j))),[D[0],100*H,100*j]},M.hcg.hwb=function(D){const N=D[1]/100,j=N+D[2]/100*(1-N);return[D[0],100*(j-N),100*(1-j)]},M.hwb.hcg=function(D){const N=D[1]/100,j=1-D[2]/100,H=j-N;let Q=0;return H<1&&(Q=(j-H)/(1-H)),[D[0],100*H,100*Q]},M.apple.rgb=function(D){return[D[0]/65535*255,D[1]/65535*255,D[2]/65535*255]},M.rgb.apple=function(D){return[D[0]/255*65535,D[1]/255*65535,D[2]/255*65535]},M.gray.rgb=function(D){return[D[0]/100*255,D[0]/100*255,D[0]/100*255]},M.gray.hsl=function(D){return[0,0,D[0]]},M.gray.hsv=M.gray.hsl,M.gray.hwb=function(D){return[0,100,D[0]]},M.gray.cmyk=function(D){return[0,0,0,D[0]]},M.gray.lab=function(D){return[D[0],0,0]},M.gray.hex=function(D){const N=255&Math.round(D[0]/100*255),j=((N<<16)+(N<<8)+N).toString(16).toUpperCase();return"000000".substring(j.length)+j},M.rgb.gray=function(D){return[(D[0]+D[1]+D[2])/3/255*100]}},841:(b,A,v)=>{const C=v(4959),B=v(9325),M={};Object.keys(C).forEach(D=>{M[D]={},Object.defineProperty(M[D],"channels",{value:C[D].channels}),Object.defineProperty(M[D],"labels",{value:C[D].labels});const N=B(D);Object.keys(N).forEach(j=>{const H=N[j];M[D][j]=function(Q){const q=function(...V){const Z=V[0];if(Z==null)return Z;Z.length>1&&(V=Z);const te=Q(V);if(typeof te=="object")for(let se=te.length,pe=0;pe<se;pe++)te[pe]=Math.round(te[pe]);return te};return"conversion"in Q&&(q.conversion=Q.conversion),q}(H),M[D][j].raw=function(Q){const q=function(...V){const Z=V[0];return Z==null?Z:(Z.length>1&&(V=Z),Q(V))};return"conversion"in Q&&(q.conversion=Q.conversion),q}(H)})}),b.exports=M},9325:(b,A,v)=>{const C=v(4959);function B(N){const j=function(){const Q={},q=Object.keys(C);for(let V=q.length,Z=0;Z<V;Z++)Q[q[Z]]={distance:-1,parent:null};return Q}(),H=[N];for(j[N].distance=0;H.length;){const Q=H.pop(),q=Object.keys(C[Q]);for(let V=q.length,Z=0;Z<V;Z++){const te=q[Z],se=j[te];se.distance===-1&&(se.distance=j[Q].distance+1,se.parent=Q,H.unshift(te))}}return j}function M(N,j){return function(H){return j(N(H))}}function D(N,j){const H=[j[N].parent,N];let Q=C[j[N].parent][N],q=j[N].parent;for(;j[q].parent;)H.unshift(j[q].parent),Q=M(C[j[q].parent][q],Q),q=j[q].parent;return Q.conversion=H,Q}b.exports=function(N){const j=B(N),H={},Q=Object.keys(j);for(let q=Q.length,V=0;V<q;V++){const Z=Q[V];j[Z].parent!==null&&(H[Z]=D(Z,j))}return H}},1103:b=>{b.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},8603:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const N=D},3062:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const N=D},903:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CChCA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;
}
`],sourceRoot:""}]);const N=D},3143:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const N=D},4717:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const N=D},9315:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const N=D},8733:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const N=D},3508:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const N=D},2640:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const N=D},3535:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-image-insert__panel{padding:var(--ck-spacing-large)}.ck.ck-image-insert__ck-finder-button{border:1px solid #ccc;border-radius:var(--ck-border-radius);display:block;margin:var(--ck-spacing-standard) auto;width:100%}.ck.ck-splitbutton>.ck-file-dialog-button.ck-button{border:none;margin:0;padding:0}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css"],names:[],mappings:"AAKA,2BACC,+BACD,CAEA,sCAIC,qBAAiC,CACjC,qCAAsC,CAJtC,aAAc,CAEd,sCAAuC,CADvC,UAID,CAGA,oDAGC,WAAY,CADZ,QAAS,CADT,SAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert__panel {
	padding: var(--ck-spacing-large);
}

.ck.ck-image-insert__ck-finder-button {
	display: block;
	width: 100%;
	margin: var(--ck-spacing-standard) auto;
	border: 1px solid hsl(0, 0%, 80%);
	border-radius: var(--ck-border-radius);
}

/* https://github.com/ckeditor/ckeditor5/issues/7986 */
.ck.ck-splitbutton > .ck-file-dialog-button.ck-button {
	padding: 0;
	margin: 0;
	border: none;
}
`],sourceRoot:""}]);const N=D},1568:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-image-insert-form:focus{outline:none}.ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-image-insert-form__action-row{margin-top:var(--ck-spacing-standard)}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsertformrowview.css"],names:[],mappings:"AAMC,+BAEC,YACD,CAGD,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAmBD,CAhBC,iCACC,WACD,CAEA,kDACC,qCAUD,CARC,sIAEC,sBACD,CAEA,+EACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-form {
	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}
}

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-image-insert-form__action-row {
		margin-top: var(--ck-spacing-standard);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const N=D},6270:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAKA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const N=D},5083:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const N=D},4036:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const N=D},3773:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const N=D},3689:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const N=D},1905:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const N=D},9773:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const N=D},2347:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const N=D},7754:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const N=D},111:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const N=D},4721:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:0 var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,wDAAyD,CAFzD,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,yDACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-large);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: 0 var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const N=D},5730:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const N=D},4564:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const N=D},6082:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const N=D},2417:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const N=D},1199:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out,background .25s ease-in-out,border .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable .todo-list .todo-list__label>input{cursor:pointer}.ck-editor__editable .todo-list .todo-list__label>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAEA,uBACC,eA0ED,CAxEC,0BACC,iBAKD,CAHC,qCACC,cACD,CAIA,+CACC,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAqDD,CAxCC,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,0FAAgG,CAJhG,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAIF,wEACC,qBACD,CAKF,6CACC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAED,CAMA,wDACC,cAKD,CAHC,qEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

.ck-content .todo-list {
	list-style: none;

	& li {
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			-webkit-appearance: none;
			display: inline-block;
			position: relative;
			width: var(--ck-todo-list-checkmark-size);
			height: var(--ck-todo-list-checkmark-size);
			vertical-align: middle;

			/* Needed on iOS */
			border: 0;

			/* LTR styles */
			left: -25px;
			margin-right: -15px;
			right: 0;
			margin-left: 0;

			&::before {
				display: block;
				position: absolute;
				box-sizing: border-box;
				content: '';
				width: 100%;
				height: 100%;
				border: 1px solid hsl(0, 0%, 20%);
				border-radius: 2px;
				transition: 250ms ease-in-out box-shadow, 250ms ease-in-out background, 250ms ease-in-out border;
			}

			&::after {
				display: block;
				position: absolute;
				box-sizing: content-box;
				pointer-events: none;
				content: '';

				/* Calculate tick position, size and border-width proportional to the checkmark size. */
				left: calc( var(--ck-todo-list-checkmark-size) / 3 );
				top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
				width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
				height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
				border-style: solid;
				border-color: transparent;
				border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
				transform: rotate(45deg);
			}

			&[checked] {
				&::before {
					background: hsl(126, 64%, 41%);
					border-color: hsl(126, 64%, 41%);
				}

				&::after {
					border-color: hsl(0, 0%, 100%);
				}
			}
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}
	}
}

/* RTL styles */
[dir="rtl"] .todo-list .todo-list__label > input {
	left: 0;
	margin-right: 0;
	right: -25px;
	margin-left: -15px;
}

/*
 * To-do list should be interactive only during the editing
 * (https://github.com/ckeditor/ckeditor5/issues/2090).
 */
.ck-editor__editable .todo-list .todo-list__label > input {
	cursor: pointer;

	&:hover::before {
		box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
	}
}
`],sourceRoot:""}]);const N=D},4652:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const N=D},7442:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const N=D},9292:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const N=D},7368:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const N=D},4070:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const N=D},9247:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const N=D},1613:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const N=D},6306:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const N=D},2128:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,":root{--ck-color-table-caption-background:#f7f7f7;--ck-color-table-caption-text:#333;--ck-color-table-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-table-caption-background);caption-side:top;color:var(--ck-color-table-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-table-caption-highlighted-background)}to{background-color:var(--ck-color-table-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,oDACD,CAGA,8BAMC,yDAA0D,CAJ1D,gBAAiB,CAGjB,wCAAyC,CAJzC,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAOD,CAIC,qEACC,iDACD,CAEA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,qEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-caption-background: hsl(0, 0%, 97%);
	--ck-color-table-caption-text: hsl(0, 0%, 20%);
	--ck-color-table-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-table-caption-text);
	background-color: var(--ck-color-table-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	&.table__caption_highlighted {
		animation: ck-table-caption-highlight .6s ease-out;
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-table-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-table-caption-background);
	}
}
`],sourceRoot:""}]);const N=D},5087:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const N=D},4101:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,":root{--ck-color-table-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:-999999px;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:-999999px;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-table-column-resizer-hover);opacity:.25}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,iEAAkE,CAClE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAEC,iBACD,CAEA,wDAOC,gBAAiB,CAGjB,iBAAkB,CATlB,iBAAkB,CAOlB,oDAAqD,CAFrD,aAAc,CAKd,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,2DAA4D,CAC5D,WACD,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-table-column-resizer-hover);
	opacity: 0.25;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const N=D},3881:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,":root{--ck-color-table-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-table-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const N=D},6237:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCAyBD,CAvBC,8ECxCD,eDyDC,CAjBA,mMCpCA,qCDqDA,CAjBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAUD,CAPC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEACD,CAGA,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const N=D},7341:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const N=D},6945:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const N=D},4906:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const N=D},5332:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const N=D},6781:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-table__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const N=D},3398:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-input{min-width:unset}.color-picker-hex-input{width:max-content}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,aACC,eACD,CAEA,wBACC,iBACD,CAEA,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAMD,CAJC,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input {
	min-width: unset;
}

.color-picker-hex-input {
	width: max-content;
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const N=D},5485:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;
			
			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const N=D},3949:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const N=D},7686:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const N=D},7339:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const N=D},9688:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-base-foreground);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-base-foreground);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const N=D},8847:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const N=D},6574:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const N=D},4879:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const N=D},3662:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const N=D},2577:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const N=D},1046:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const N=D},8793:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const N=D},4650:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const N=D},7676:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const N=D},5868:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const N=D},6764:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const N=D},9695:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const N=D},5542:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const N=D},3332:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDPnC,mBAAoB,CAEpB,qCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAbD,gCAgBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const N=D},4793:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);border:0;box-shadow:none;min-height:unset}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAItD,0CAA2C,CAF3C,QAAS,CACT,eAAgB,CAEhB,gBA6CD,CA3CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,2BAA4B,CAC5B,8CACD,CC5DD,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	border: 0;
	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const N=D},3488:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const N=D},8506:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const N=D},4921:(b,A,v)=>{v.d(A,{Z:()=>N});var C=v(1799),B=v.n(C),M=v(2609),D=v.n(M)()(B());D.push([b.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const N=D},2609:b=>{b.exports=function(A){var v=[];return v.toString=function(){return this.map(function(C){var B=A(C);return C[2]?"@media ".concat(C[2]," {").concat(B,"}"):B}).join("")},v.i=function(C,B,M){typeof C=="string"&&(C=[[null,C,""]]);var D={};if(M)for(var N=0;N<this.length;N++){var j=this[N][0];j!=null&&(D[j]=!0)}for(var H=0;H<C.length;H++){var Q=[].concat(C[H]);M&&D[Q[0]]||(B&&(Q[2]?Q[2]="".concat(B," and ").concat(Q[2]):Q[2]=B),v.push(Q))}},v}},1799:b=>{function A(C,B){return function(M){if(Array.isArray(M))return M}(C)||function(M,D){var N=M&&(typeof Symbol<"u"&&M[Symbol.iterator]||M["@@iterator"]);if(N!=null){var j,H,Q=[],q=!0,V=!1;try{for(N=N.call(M);!(q=(j=N.next()).done)&&(Q.push(j.value),!D||Q.length!==D);q=!0);}catch(Z){V=!0,H=Z}finally{try{q||N.return==null||N.return()}finally{if(V)throw H}}return Q}}(C,B)||function(M,D){if(M){if(typeof M=="string")return v(M,D);var N=Object.prototype.toString.call(M).slice(8,-1);if(N==="Object"&&M.constructor&&(N=M.constructor.name),N==="Map"||N==="Set")return Array.from(M);if(N==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N))return v(M,D)}}(C,B)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function v(C,B){(B==null||B>C.length)&&(B=C.length);for(var M=0,D=new Array(B);M<B;M++)D[M]=C[M];return D}b.exports=function(C){var B=A(C,4),M=B[1],D=B[3];if(!D)return M;if(typeof btoa=="function"){var N=btoa(unescape(encodeURIComponent(JSON.stringify(D)))),j="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(N),H="/*# ".concat(j," */"),Q=D.sources.map(function(q){return"/*# sourceURL=".concat(D.sourceRoot||"").concat(q," */")});return[M].concat(Q).concat([H]).join(`
`)}return[M].join(`
`)}},6062:(b,A,v)=>{var C,B=function(){return C===void 0&&(C=!!(window&&document&&document.all&&!window.atob)),C},M=function(){var le={};return function(G){if(le[G]===void 0){var ce=document.querySelector(G);if(window.HTMLIFrameElement&&ce instanceof window.HTMLIFrameElement)try{ce=ce.contentDocument.head}catch{ce=null}le[G]=ce}return le[G]}}(),D=[];function N(le){for(var G=-1,ce=0;ce<D.length;ce++)if(D[ce].identifier===le){G=ce;break}return G}function j(le,G){for(var ce={},be=[],Ie=0;Ie<le.length;Ie++){var Me=le[Ie],Ne=G.base?Me[0]+G.base:Me[0],Ye=ce[Ne]||0,vt="".concat(Ne," ").concat(Ye);ce[Ne]=Ye+1;var it=N(vt),bt={css:Me[1],media:Me[2],sourceMap:Me[3]};it!==-1?(D[it].references++,D[it].updater(bt)):D.push({identifier:vt,updater:pe(bt,G),references:1}),be.push(vt)}return be}function H(le){var G=document.createElement("style"),ce=le.attributes||{};if(ce.nonce===void 0){var be=v.nc;be&&(ce.nonce=be)}if(Object.keys(ce).forEach(function(Me){G.setAttribute(Me,ce[Me])}),typeof le.insert=="function")le.insert(G);else{var Ie=M(le.insert||"head");if(!Ie)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");Ie.appendChild(G)}return G}var Q,q=(Q=[],function(le,G){return Q[le]=G,Q.filter(Boolean).join(`
`)});function V(le,G,ce,be){var Ie=ce?"":be.media?"@media ".concat(be.media," {").concat(be.css,"}"):be.css;if(le.styleSheet)le.styleSheet.cssText=q(G,Ie);else{var Me=document.createTextNode(Ie),Ne=le.childNodes;Ne[G]&&le.removeChild(Ne[G]),Ne.length?le.insertBefore(Me,Ne[G]):le.appendChild(Me)}}function Z(le,G,ce){var be=ce.css,Ie=ce.media,Me=ce.sourceMap;if(Ie?le.setAttribute("media",Ie):le.removeAttribute("media"),Me&&typeof btoa<"u"&&(be+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(Me))))," */")),le.styleSheet)le.styleSheet.cssText=be;else{for(;le.firstChild;)le.removeChild(le.firstChild);le.appendChild(document.createTextNode(be))}}var te=null,se=0;function pe(le,G){var ce,be,Ie;if(G.singleton){var Me=se++;ce=te||(te=H(G)),be=V.bind(null,ce,Me,!1),Ie=V.bind(null,ce,Me,!0)}else ce=H(G),be=Z.bind(null,ce,G),Ie=function(){(function(Ne){if(Ne.parentNode===null)return!1;Ne.parentNode.removeChild(Ne)})(ce)};return be(le),function(Ne){if(Ne){if(Ne.css===le.css&&Ne.media===le.media&&Ne.sourceMap===le.sourceMap)return;be(le=Ne)}else Ie()}}b.exports=function(le,G){(G=G||{}).singleton||typeof G.singleton=="boolean"||(G.singleton=B());var ce=j(le=le||[],G);return function(be){if(be=be||[],Object.prototype.toString.call(be)==="[object Array]"){for(var Ie=0;Ie<ce.length;Ie++){var Me=N(ce[Ie]);D[Me].references--}for(var Ne=j(be,G),Ye=0;Ye<ce.length;Ye++){var vt=N(ce[Ye]);D[vt].references===0&&(D[vt].updater(),D.splice(vt,1))}ce=Ne}}}}},u={};function f(b){var A=u[b];if(A!==void 0)return A.exports;var v=u[b]={id:b,exports:{}};return l[b](v,v.exports,f),v.exports}f.n=b=>{var A=b&&b.__esModule?()=>b.default:()=>b;return f.d(A,{a:A}),A},f.d=(b,A)=>{for(var v in A)f.o(A,v)&&!f.o(b,v)&&Object.defineProperty(b,v,{enumerable:!0,get:A[v]})},f.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),f.o=(b,A)=>Object.prototype.hasOwnProperty.call(b,A),f.nc=void 0;var k={};return(()=>{function b({emitter:o,activator:e,callback:t,contextElements:n}){o.listenTo(document,"mousedown",(r,a)=>{if(!e())return;const d=typeof a.composedPath=="function"?a.composedPath():[],h=typeof n=="function"?n():n;for(const m of h)if(m.contains(a.target)||d.includes(m))return;t()})}function A(o){return class extends o{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...e){super(...e),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function v({view:o}){o.listenTo(o.element,"submit",(e,t)=>{t.preventDefault(),o.fire("submit")},{useCapture:!0})}f.d(k,{default:()=>yg});const C=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var B;const M={isMac:D(C),isWindows:(B=C,B.indexOf("windows")>-1),isGecko:function(o){return!!o.match(/gecko\/\d+/)}(C),isSafari:function(o){return o.indexOf(" applewebkit/")>-1&&o.indexOf("chrome")===-1}(C),isiOS:function(o){return!!o.match(/iphone|ipad/i)||D(o)&&navigator.maxTouchPoints>0}(C),isAndroid:function(o){return o.indexOf("android")>-1}(C),isBlink:function(o){return o.indexOf("chrome/")>-1&&o.indexOf("edge/")<0}(C),features:{isRegExpUnicodePropertySupported:function(){let o=!1;try{o="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return o}()}};function D(o){return o.indexOf("macintosh")>-1}function N(o,e,t,n){t=t||function(m,g){return m===g};const r=Array.isArray(o)?o:Array.prototype.slice.call(o),a=Array.isArray(e)?e:Array.prototype.slice.call(e),d=function(m,g,w){const y=j(m,g,w);if(y===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const E=H(m,y),I=H(g,y),O=j(E,I,w),z=m.length-O,K=g.length-O;return{firstIndex:y,lastIndexOld:z,lastIndexNew:K}}(r,a,t);return n?function(m,g){const{firstIndex:w,lastIndexOld:y,lastIndexNew:E}=m;if(w===-1)return Array(g).fill("equal");let I=[];return w>0&&(I=I.concat(Array(w).fill("equal"))),E-w>0&&(I=I.concat(Array(E-w).fill("insert"))),y-w>0&&(I=I.concat(Array(y-w).fill("delete"))),E<g&&(I=I.concat(Array(g-E).fill("equal"))),I}(d,a.length):function(m,g){const w=[],{firstIndex:y,lastIndexOld:E,lastIndexNew:I}=g;return I-y>0&&w.push({index:y,type:"insert",values:m.slice(y,I)}),E-y>0&&w.push({index:y+(I-y),type:"delete",howMany:E-y}),w}(a,d)}function j(o,e,t){for(let n=0;n<Math.max(o.length,e.length);n++)if(o[n]===void 0||e[n]===void 0||!t(o[n],e[n]))return n;return-1}function H(o,e){return o.slice(e).reverse()}function Q(o,e,t){t=t||function(z,K){return z===K};const n=o.length,r=e.length;if(n>200||r>200||n+r>300)return Q.fastDiff(o,e,t,!0);let a,d;if(r<n){const z=o;o=e,e=z,a="delete",d="insert"}else a="insert",d="delete";const h=o.length,m=e.length,g=m-h,w={},y={};function E(z){const K=(y[z-1]!==void 0?y[z-1]:-1)+1,$=y[z+1]!==void 0?y[z+1]:-1,oe=K>$?-1:1;w[z+oe]&&(w[z]=w[z+oe].slice(0)),w[z]||(w[z]=[]),w[z].push(K>$?a:d);let ke=Math.max(K,$),Pe=ke-z;for(;Pe<h&&ke<m&&t(o[Pe],e[ke]);)Pe++,ke++,w[z].push("equal");return ke}let I,O=0;do{for(I=-O;I<g;I++)y[I]=E(I);for(I=g+O;I>g;I--)y[I]=E(I);y[g]=E(g),O++}while(y[g]!==m);return w[g].slice(1)}Q.fastDiff=N;const q=function(){return function o(){o.called=!0}};class V{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=q(),this.off=q()}}const Z=new Array(256).fill("").map((o,e)=>("0"+e.toString(16)).slice(-2));function te(){const o=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+Z[o>>0&255]+Z[o>>8&255]+Z[o>>16&255]+Z[o>>24&255]+Z[e>>0&255]+Z[e>>8&255]+Z[e>>16&255]+Z[e>>24&255]+Z[t>>0&255]+Z[t>>8&255]+Z[t>>16&255]+Z[t>>24&255]+Z[n>>0&255]+Z[n>>8&255]+Z[n>>16&255]+Z[n>>24&255]}const se={get(o="normal"){return typeof o!="number"?this[o]||this.normal:o},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function pe(o,e){const t=se.get(e.priority);for(let n=0;n<o.length;n++)if(se.get(o[n].priority)<t)return void o.splice(n,0,e);o.push(e)}const le="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class G extends Error{constructor(e,t,n){super(function(r,a){const d=new WeakSet,h=(w,y)=>{if(typeof y=="object"&&y!==null){if(d.has(y))return`[object ${y.constructor.name}]`;d.add(y)}return y},m=a?` ${JSON.stringify(a,h)}`:"",g=Ie(r);return r+m+g}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new G(e.message,t);throw n.stack=e.stack,n}}function ce(o,e){console.warn(...Me(o,e))}function be(o,e){console.error(...Me(o,e))}function Ie(o){return`
Read more: ${le}#error-${o}`}function Me(o,e){const t=Ie(o);return e?[o,e,t]:[o,t]}const Ne="38.0.1",Ye=new Date(2023,4,23),vt=typeof window=="object"?window:f.g;if(vt.CKEDITOR_VERSION)throw new G("ckeditor-duplicated-modules",null);vt.CKEDITOR_VERSION=Ne;const it=Symbol("listeningTo"),bt=Symbol("emitterId"),de=Symbol("delegations"),Le=ge(Object);function ge(o){return o?class extends o{on(e,t,n){this.listenTo(this,e,t,n)}once(e,t,n){let r=!1;this.listenTo(this,e,(a,...d)=>{r||(r=!0,a.off(),t.call(this,a,...d))},n)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,n,r={}){let a,d;this[it]||(this[it]={});const h=this[it];Xe(e)||Ze(e);const m=Xe(e);(a=h[m])||(a=h[m]={emitter:e,callbacks:{}}),(d=a.callbacks[t])||(d=a.callbacks[t]=[]),d.push(n),function(g,w,y,E,I){w._addEventListener?w._addEventListener(y,E,I):g._addEventListener.call(w,y,E,I)}(this,e,t,n,r)}stopListening(e,t,n){const r=this[it];let a=e&&Xe(e);const d=r&&a?r[a]:void 0,h=d&&t?d.callbacks[t]:void 0;if(!(!r||e&&!d||t&&!h))if(n)Qt(this,e,t,n),h.indexOf(n)!==-1&&(h.length===1?delete d.callbacks[t]:Qt(this,e,t,n));else if(h){for(;n=h.pop();)Qt(this,e,t,n);delete d.callbacks[t]}else if(d){for(t in d.callbacks)this.stopListening(e,t);delete r[a]}else{for(a in r)this.stopListening(r[a].emitter);delete this[it]}}fire(e,...t){try{const n=e instanceof V?e:new V(this,e),r=n.name;let a=rt(this,r);if(n.path.push(this),a){const h=[n,...t];a=Array.from(a);for(let m=0;m<a.length&&(a[m].callback.apply(this,h),n.off.called&&(delete n.off.called,this._removeEventListener(r,a[m].callback)),!n.stop.called);m++);}const d=this[de];if(d){const h=d.get(r),m=d.get("*");h&&qe(h,n,t),m&&qe(m,n,t)}return n.return}catch(n){G.rethrowUnexpectedError(n,this)}}delegate(...e){return{to:(t,n)=>{this[de]||(this[de]=new Map),e.forEach(r=>{const a=this[de].get(r);a?a.set(t,n):this[de].set(r,new Map([[t,n]]))})}}}stopDelegating(e,t){if(this[de])if(e)if(t){const n=this[de].get(e);n&&n.delete(t)}else this[de].delete(e);else this[de].clear()}_addEventListener(e,t,n){(function(d,h){const m=It(d);if(m[h])return;let g=h,w=null;const y=[];for(;g!==""&&!m[g];)m[g]={callbacks:[],childEvents:[]},y.push(m[g]),w&&m[g].childEvents.push(w),w=g,g=g.substr(0,g.lastIndexOf(":"));if(g!==""){for(const E of y)E.callbacks=m[g].callbacks.slice();m[g].childEvents.push(w)}})(this,e);const r=dt(this,e),a={callback:t,priority:se.get(n.priority)};for(const d of r)pe(d,a)}_removeEventListener(e,t){const n=dt(this,e);for(const r of n)for(let a=0;a<r.length;a++)r[a].callback==t&&(r.splice(a,1),a--)}}:Le}function Ze(o,e){o[bt]||(o[bt]=e||te())}function Xe(o){return o[bt]}function It(o){return o._events||Object.defineProperty(o,"_events",{value:{}}),o._events}function dt(o,e){const t=It(o)[e];if(!t)return[];let n=[t.callbacks];for(let r=0;r<t.childEvents.length;r++){const a=dt(o,t.childEvents[r]);n=n.concat(a)}return n}function rt(o,e){let t;return o._events&&(t=o._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?rt(o,e.substr(0,e.lastIndexOf(":"))):null}function qe(o,e,t){for(let[n,r]of o){r?typeof r=="function"&&(r=r(e.name)):r=e.name;const a=new V(e.source,r);a.path=[...e.path],n.fire(a,...t)}}function Qt(o,e,t,n){e._removeEventListener?e._removeEventListener(t,n):o._removeEventListener.call(e,t,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{ge[o]=Le.prototype[o]});const ct=function(o){var e=typeof o;return o!=null&&(e=="object"||e=="function")},pi=Symbol("observableProperties"),ni=Symbol("boundObservables"),mi=Symbol("boundProperties"),yt=Symbol("decoratedMethods"),Bn=Symbol("decoratedOriginal"),js=ot(ge());function ot(o){return o?class extends o{set(e,t){if(ct(e))return void Object.keys(e).forEach(r=>{this.set(r,e[r])},this);ie(this);const n=this[pi];if(e in this&&!n.has(e))throw new G("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>n.get(e),set(r){const a=n.get(e);let d=this.fire(`set:${e}`,e,r,a);d===void 0&&(d=r),a===d&&n.has(e)||(n.set(e,d),this.fire(`change:${e}`,e,d,a))}}),this[e]=t}bind(...e){if(!e.length||!Ce(e))throw new G("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new G("observable-bind-duplicate-properties",this);ie(this);const t=this[mi];e.forEach(r=>{if(t.has(r))throw new G("observable-bind-rebind",this)});const n=new Map;return e.forEach(r=>{const a={property:r,to:[]};t.set(r,a),n.set(r,a)}),{to:me,toMany:we,_observable:this,_bindProperties:e,_to:[],_bindings:n}}unbind(...e){if(!this[pi])return;const t=this[mi],n=this[ni];if(e.length){if(!Ce(e))throw new G("observable-unbind-wrong-properties",this);e.forEach(r=>{const a=t.get(r);a&&(a.to.forEach(([d,h])=>{const m=n.get(d),g=m[h];g.delete(a),g.size||delete m[h],Object.keys(m).length||(n.delete(d),this.stopListening(d,"change"))}),t.delete(r))})}else n.forEach((r,a)=>{this.stopListening(a,"change")}),n.clear(),t.clear()}decorate(e){ie(this);const t=this[e];if(!t)throw new G("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(n,r)=>{n.return=t.apply(this,r)}),this[e]=function(...n){return this.fire(e,n)},this[e][Bn]=t,this[yt]||(this[yt]=[]),this[yt].push(e)}stopListening(e,t,n){if(!e&&this[yt]){for(const r of this[yt])this[r]=this[r][Bn];delete this[yt]}super.stopListening(e,t,n)}}:js}function ie(o){o[pi]||(Object.defineProperty(o,pi,{value:new Map}),Object.defineProperty(o,ni,{value:new Map}),Object.defineProperty(o,mi,{value:new Map}))}function me(...o){const e=function(...a){if(!a.length)throw new G("observable-bind-to-parse-error",null);const d={to:[]};let h;return typeof a[a.length-1]=="function"&&(d.callback=a.pop()),a.forEach(m=>{if(typeof m=="string")h.properties.push(m);else{if(typeof m!="object")throw new G("observable-bind-to-parse-error",null);h={observable:m,properties:[]},d.to.push(h)}}),d}(...o),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new G("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new G("observable-bind-to-extra-callback",this);var r;e.to.forEach(a=>{if(a.properties.length&&a.properties.length!==n)throw new G("observable-bind-to-properties-length",this);a.properties.length||(a.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),r=this._observable,this._to.forEach(a=>{const d=r[ni];let h;d.get(a.observable)||r.listenTo(a.observable,"change",(m,g)=>{h=d.get(a.observable)[g],h&&h.forEach(w=>{De(r,w.property)})})}),function(a){let d;a._bindings.forEach((h,m)=>{a._to.forEach(g=>{d=g.properties[h.callback?0:a._bindProperties.indexOf(m)],h.to.push([g.observable,d]),function(w,y,E,I){const O=w[ni],z=O.get(E),K=z||{};K[I]||(K[I]=new Set),K[I].add(y),z||O.set(E,K)}(a._observable,h,g.observable,d)})})}(this),this._bindProperties.forEach(a=>{De(this._observable,a)})}function we(o,e,t){if(this._bindings.size>1)throw new G("observable-bind-to-many-not-one-binding",this);this.to(...function(n,r){const a=n.map(d=>[d,r]);return Array.prototype.concat.apply([],a)}(o,e),t)}function Ce(o){return o.every(e=>typeof e=="string")}function De(o,e){const t=o[mi].get(e);let n;t.callback?n=t.callback.apply(o,t.to.map(r=>r[0][r[1]])):(n=t.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(o,e)?o[e]=n:o.set(e,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{ot[o]=js.prototype[o]});class xe{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}function Oe(o){let e=0;for(const t of o)e++;return e}function Fe(o,e){const t=Math.min(o.length,e.length);for(let n=0;n<t;n++)if(o[n]!=e[n])return n;return o.length==e.length?"same":o.length<e.length?"prefix":"extension"}function We(o){return!(!o||!o[Symbol.iterator])}const Wn=typeof En=="object"&&En&&En.Object===Object&&En;var Li=typeof self=="object"&&self&&self.Object===Object&&self;const At=Wn||Li||Function("return this")(),_n=At.Symbol;var ii=Object.prototype,Go=ii.hasOwnProperty,Ko=ii.toString,Xi=_n?_n.toStringTag:void 0;const Rs=function(o){var e=Go.call(o,Xi),t=o[Xi];try{o[Xi]=void 0;var n=!0}catch{}var r=Ko.call(o);return n&&(e?o[Xi]=t:delete o[Xi]),r};var Fs=Object.prototype.toString;const xa=function(o){return Fs.call(o)};var eo=_n?_n.toStringTag:void 0;const Zn=function(o){return o==null?o===void 0?"[object Undefined]":"[object Null]":eo&&eo in Object(o)?Rs(o):xa(o)},Kt=Array.isArray,fn=function(o){return o!=null&&typeof o=="object"},_o=function(o){return typeof o=="string"||!Kt(o)&&fn(o)&&Zn(o)=="[object String]"};function Vs(o,e,t={},n=[]){const r=t&&t.xmlns,a=r?o.createElementNS(r,e):o.createElement(e);for(const d in t)a.setAttribute(d,t[d]);!_o(n)&&We(n)||(n=[n]);for(let d of n)_o(d)&&(d=o.createTextNode(d)),a.appendChild(d);return a}const gr=function(o,e){return function(t){return o(e(t))}},Us=gr(Object.getPrototypeOf,Object);var xl=Function.prototype,kr=Object.prototype,Ea=xl.toString,El=kr.hasOwnProperty,Yo=Ea.call(Object);const nn=function(o){if(!fn(o)||Zn(o)!="[object Object]")return!1;var e=Us(o);if(e===null)return!0;var t=El.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Ea.call(t)==Yo},Sl=function(){this.__data__=[],this.size=0},wr=function(o,e){return o===e||o!=o&&e!=e},vo=function(o,e){for(var t=o.length;t--;)if(wr(o[t][0],e))return t;return-1};var Dl=Array.prototype.splice;const gi=function(o){var e=this.__data__,t=vo(e,o);return!(t<0)&&(t==e.length-1?e.pop():Dl.call(e,t,1),--this.size,!0)},Re=function(o){var e=this.__data__,t=vo(e,o);return t<0?void 0:e[t][1]},Sa=function(o){return vo(this.__data__,o)>-1},yo=function(o,e){var t=this.__data__,n=vo(t,o);return n<0?(++this.size,t.push([o,e])):t[n][1]=e,this};function Ao(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}Ao.prototype.clear=Sl,Ao.prototype.delete=gi,Ao.prototype.get=Re,Ao.prototype.has=Sa,Ao.prototype.set=yo;const br=Ao,to=function(){this.__data__=new br,this.size=0},ts=function(o){var e=this.__data__,t=e.delete(o);return this.size=e.size,t},ki=function(o){return this.__data__.get(o)},ns=function(o){return this.__data__.has(o)},oi=function(o){if(!ct(o))return!1;var e=Zn(o);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},pn=At["__core-js_shared__"];var Hs=function(){var o=/[^.]+$/.exec(pn&&pn.keys&&pn.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}();const is=function(o){return!!Hs&&Hs in o};var Da=Function.prototype.toString;const Bi=function(o){if(o!=null){try{return Da.call(o)}catch{}try{return o+""}catch{}}return""};var _r=/^\[object .+?Constructor\]$/,Tl=Function.prototype,Ml=Object.prototype,Ta=Tl.toString,Ws=Ml.hasOwnProperty,Ma=RegExp("^"+Ta.call(Ws).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const os=function(o){return!(!ct(o)||is(o))&&(oi(o)?Ma:_r).test(Bi(o))},Qo=function(o,e){return o==null?void 0:o[e]},Oi=function(o,e){var t=Qo(o,e);return os(t)?t:void 0},Co=Oi(At,"Map"),zi=Oi(Object,"create"),ft=function(){this.__data__=zi?zi(null):{},this.size=0},Ot=function(o){var e=this.has(o)&&delete this.__data__[o];return this.size-=e?1:0,e};var _t=Object.prototype.hasOwnProperty;const $o=function(o){var e=this.__data__;if(zi){var t=e[o];return t==="__lodash_hash_undefined__"?void 0:t}return _t.call(e,o)?e[o]:void 0};var ji=Object.prototype.hasOwnProperty;const rs=function(o){var e=this.__data__;return zi?e[o]!==void 0:ji.call(e,o)},Je=function(o,e){var t=this.__data__;return this.size+=this.has(o)?0:1,t[o]=zi&&e===void 0?"__lodash_hash_undefined__":e,this};function ht(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}ht.prototype.clear=ft,ht.prototype.delete=Ot,ht.prototype.get=$o,ht.prototype.has=rs,ht.prototype.set=Je;const wi=ht,vr=function(){this.size=0,this.__data__={hash:new wi,map:new(Co||br),string:new wi}},Dn=function(o){var e=typeof o;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?o!=="__proto__":o===null},yr=function(o,e){var t=o.__data__;return Dn(e)?t[typeof e=="string"?"string":"hash"]:t.map},Ar=function(o){var e=yr(this,o).delete(o);return this.size-=e?1:0,e},xo=function(o){return yr(this,o).get(o)},Ht=function(o){return yr(this,o).has(o)},no=function(o,e){var t=yr(this,o),n=t.size;return t.set(o,e),this.size+=t.size==n?0:1,this};function bi(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}bi.prototype.clear=vr,bi.prototype.delete=Ar,bi.prototype.get=xo,bi.prototype.has=Ht,bi.prototype.set=no;const io=bi,Eo=function(o,e){var t=this.__data__;if(t instanceof br){var n=t.__data__;if(!Co||n.length<199)return n.push([o,e]),this.size=++t.size,this;t=this.__data__=new io(n)}return t.set(o,e),this.size=t.size,this};function ri(o){var e=this.__data__=new br(o);this.size=e.size}ri.prototype.clear=to,ri.prototype.delete=ts,ri.prototype.get=ki,ri.prototype.has=ns,ri.prototype.set=Eo;const _i=ri,Zs=function(o,e){for(var t=-1,n=o==null?0:o.length;++t<n&&e(o[t],t,o)!==!1;);return o},So=function(){try{var o=Oi(Object,"defineProperty");return o({},"",{}),o}catch{}}(),Cr=function(o,e,t){e=="__proto__"&&So?So(o,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):o[e]=t};var qs=Object.prototype.hasOwnProperty;const oo=function(o,e,t){var n=o[e];qs.call(o,e)&&wr(n,t)&&(t!==void 0||e in o)||Cr(o,e,t)},Do=function(o,e,t,n){var r=!t;t||(t={});for(var a=-1,d=e.length;++a<d;){var h=e[a],m=n?n(t[h],o[h],h,t,o):void 0;m===void 0&&(m=o[h]),r?Cr(t,h,m):oo(t,h,m)}return t},ss=function(o,e){for(var t=-1,n=Array(o);++t<o;)n[t]=e(t);return n},Gs=function(o){return fn(o)&&Zn(o)=="[object Arguments]"};var Ge=Object.prototype,si=Ge.hasOwnProperty,Pt=Ge.propertyIsEnumerable;const xr=Gs(function(){return arguments}())?Gs:function(o){return fn(o)&&si.call(o,"callee")&&!Pt.call(o,"callee")},Ks=function(){return!1};var qn=s&&!s.nodeType&&s,as=qn&&!0&&i&&!i.nodeType&&i,vi=as&&as.exports===qn?At.Buffer:void 0;const On=(vi?vi.isBuffer:void 0)||Ks;var Er=/^(?:0|[1-9]\d*)$/;const $t=function(o,e){var t=typeof o;return!!(e=e??9007199254740991)&&(t=="number"||t!="symbol"&&Er.test(o))&&o>-1&&o%1==0&&o<e},yi=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991};var Ct={};Ct["[object Float32Array]"]=Ct["[object Float64Array]"]=Ct["[object Int8Array]"]=Ct["[object Int16Array]"]=Ct["[object Int32Array]"]=Ct["[object Uint8Array]"]=Ct["[object Uint8ClampedArray]"]=Ct["[object Uint16Array]"]=Ct["[object Uint32Array]"]=!0,Ct["[object Arguments]"]=Ct["[object Array]"]=Ct["[object ArrayBuffer]"]=Ct["[object Boolean]"]=Ct["[object DataView]"]=Ct["[object Date]"]=Ct["[object Error]"]=Ct["[object Function]"]=Ct["[object Map]"]=Ct["[object Number]"]=Ct["[object Object]"]=Ct["[object RegExp]"]=Ct["[object Set]"]=Ct["[object String]"]=Ct["[object WeakMap]"]=!1;const To=function(o){return fn(o)&&yi(o.length)&&!!Ct[Zn(o)]},ls=function(o){return function(e){return o(e)}};var Ys=s&&!s.nodeType&&s,Mo=Ys&&!0&&i&&!i.nodeType&&i,Sr=Mo&&Mo.exports===Ys&&Wn.process;const Ri=function(){try{var o=Mo&&Mo.require&&Mo.require("util").types;return o||Sr&&Sr.binding&&Sr.binding("util")}catch{}}();var lt=Ri&&Ri.isTypedArray;const Dr=lt?ls(lt):To;var Gn=Object.prototype.hasOwnProperty;const Io=function(o,e){var t=Kt(o),n=!t&&xr(o),r=!t&&!n&&On(o),a=!t&&!n&&!r&&Dr(o),d=t||n||r||a,h=d?ss(o.length,String):[],m=h.length;for(var g in o)!e&&!Gn.call(o,g)||d&&(g=="length"||r&&(g=="offset"||g=="parent")||a&&(g=="buffer"||g=="byteLength"||g=="byteOffset")||$t(g,m))||h.push(g);return h};var Tr=Object.prototype;const Mr=function(o){var e=o&&o.constructor;return o===(typeof e=="function"&&e.prototype||Tr)},cs=gr(Object.keys,Object);var Il=Object.prototype.hasOwnProperty;const Ia=function(o){if(!Mr(o))return cs(o);var e=[];for(var t in Object(o))Il.call(o,t)&&t!="constructor"&&e.push(t);return e},Ir=function(o){return o!=null&&yi(o.length)&&!oi(o)},Qs=function(o){return Ir(o)?Io(o):Ia(o)},Pr=function(o,e){return o&&Do(e,Qs(e),o)},ro=function(o){var e=[];if(o!=null)for(var t in Object(o))e.push(t);return e};var zn=Object.prototype.hasOwnProperty;const $s=function(o){if(!ct(o))return ro(o);var e=Mr(o),t=[];for(var n in o)(n!="constructor"||!e&&zn.call(o,n))&&t.push(n);return t},Ai=function(o){return Ir(o)?Io(o,!0):$s(o)},Fi=function(o,e){return o&&Do(e,Ai(e),o)};var Jo=s&&!s.nodeType&&s,ds=Jo&&!0&&i&&!i.nodeType&&i,Nr=ds&&ds.exports===Jo?At.Buffer:void 0,Js=Nr?Nr.allocUnsafe:void 0;const Lr=function(o,e){if(e)return o.slice();var t=o.length,n=Js?Js(t):new o.constructor(t);return o.copy(n),n},Br=function(o,e){var t=-1,n=o.length;for(e||(e=Array(n));++t<n;)e[t]=o[t];return e},Pa=function(o,e){for(var t=-1,n=o==null?0:o.length,r=0,a=[];++t<n;){var d=o[t];e(d,t,o)&&(a[r++]=d)}return a},Xs=function(){return[]};var us=Object.prototype.propertyIsEnumerable,so=Object.getOwnPropertySymbols;const hs=so?function(o){return o==null?[]:(o=Object(o),Pa(so(o),function(e){return us.call(o,e)}))}:Xs,Na=function(o,e){return Do(o,hs(o),e)},Or=function(o,e){for(var t=-1,n=e.length,r=o.length;++t<n;)o[r+t]=e[t];return o},Ci=Object.getOwnPropertySymbols?function(o){for(var e=[];o;)Or(e,hs(o)),o=Us(o);return e}:Xs,La=function(o,e){return Do(o,Ci(o),e)},Po=function(o,e,t){var n=e(o);return Kt(o)?n:Or(n,t(o))},vn=function(o){return Po(o,Qs,hs)},Ba=function(o){return Po(o,Ai,Ci)},zr=Oi(At,"DataView"),fs=Oi(At,"Promise"),No=Oi(At,"Set"),gt=Oi(At,"WeakMap");var ea="[object Map]",Oa="[object Promise]",ps="[object Set]",ms="[object WeakMap]",jn="[object DataView]",Xo=Bi(zr),Pl=Bi(Co),Vi=Bi(fs),gs=Bi(No),Lo=Bi(gt),ai=Zn;(zr&&ai(new zr(new ArrayBuffer(1)))!=jn||Co&&ai(new Co)!=ea||fs&&ai(fs.resolve())!=Oa||No&&ai(new No)!=ps||gt&&ai(new gt)!=ms)&&(ai=function(o){var e=Zn(o),t=e=="[object Object]"?o.constructor:void 0,n=t?Bi(t):"";if(n)switch(n){case Xo:return jn;case Pl:return ea;case Vi:return Oa;case gs:return ps;case Lo:return ms}return e});const xi=ai;var za=Object.prototype.hasOwnProperty;const er=function(o){var e=o.length,t=new o.constructor(e);return e&&typeof o[0]=="string"&&za.call(o,"index")&&(t.index=o.index,t.input=o.input),t},jr=At.Uint8Array,Kn=function(o){var e=new o.constructor(o.byteLength);return new jr(e).set(new jr(o)),e},tr=function(o,e){var t=e?Kn(o.buffer):o.buffer;return new o.constructor(t,o.byteOffset,o.byteLength)};var nr=/\w*$/;const ks=function(o){var e=new o.constructor(o.source,nr.exec(o));return e.lastIndex=o.lastIndex,e};var F=_n?_n.prototype:void 0,U=F?F.valueOf:void 0;const X=function(o){return U?Object(U.call(o)):{}},ae=function(o,e){var t=e?Kn(o.buffer):o.buffer;return new o.constructor(t,o.byteOffset,o.length)},ze=function(o,e,t){var n=o.constructor;switch(e){case"[object ArrayBuffer]":return Kn(o);case"[object Boolean]":case"[object Date]":return new n(+o);case"[object DataView]":return tr(o,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return ae(o,t);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(o);case"[object RegExp]":return ks(o);case"[object Symbol]":return X(o)}};var Ve=Object.create;const et=function(){function o(){}return function(e){if(!ct(e))return{};if(Ve)return Ve(e);o.prototype=e;var t=new o;return o.prototype=void 0,t}}(),nt=function(o){return typeof o.constructor!="function"||Mr(o)?{}:et(Us(o))},jt=function(o){return fn(o)&&xi(o)=="[object Map]"};var Et=Ri&&Ri.isMap;const Bo=Et?ls(Et):jt,Ei=function(o){return fn(o)&&xi(o)=="[object Set]"};var mn=Ri&&Ri.isSet;const Ui=mn?ls(mn):Ei;var ao="[object Arguments]",Hi="[object Function]",Yn="[object Object]",at={};at[ao]=at["[object Array]"]=at["[object ArrayBuffer]"]=at["[object DataView]"]=at["[object Boolean]"]=at["[object Date]"]=at["[object Float32Array]"]=at["[object Float64Array]"]=at["[object Int8Array]"]=at["[object Int16Array]"]=at["[object Int32Array]"]=at["[object Map]"]=at["[object Number]"]=at[Yn]=at["[object RegExp]"]=at["[object Set]"]=at["[object String]"]=at["[object Symbol]"]=at["[object Uint8Array]"]=at["[object Uint8ClampedArray]"]=at["[object Uint16Array]"]=at["[object Uint32Array]"]=!0,at["[object Error]"]=at[Hi]=at["[object WeakMap]"]=!1;const yn=function o(e,t,n,r,a,d){var h,m=1&t,g=2&t,w=4&t;if(n&&(h=a?n(e,r,a,d):n(e)),h!==void 0)return h;if(!ct(e))return e;var y=Kt(e);if(y){if(h=er(e),!m)return Br(e,h)}else{var E=xi(e),I=E==Hi||E=="[object GeneratorFunction]";if(On(e))return Lr(e,m);if(E==Yn||E==ao||I&&!a){if(h=g||I?{}:nt(e),!m)return g?La(e,Fi(h,e)):Na(e,Pr(h,e))}else{if(!at[E])return a?e:{};h=ze(e,E,m)}}d||(d=new _i);var O=d.get(e);if(O)return O;d.set(e,h),Ui(e)?e.forEach(function(K){h.add(o(K,t,n,K,e,d))}):Bo(e)&&e.forEach(function(K,$){h.set($,o(K,t,n,$,e,d))});var z=y?void 0:(w?g?Ba:vn:g?Ai:Qs)(e);return Zs(z||e,function(K,$){z&&(K=e[$=K]),oo(h,$,o(K,t,n,$,e,d))}),h},Qn=function(o,e){return yn(o,5,e=typeof e=="function"?e:void 0)},on=function(o){return fn(o)&&o.nodeType===1&&!nn(o)};class ja{constructor(e,t){this._config={},t&&this.define(pc(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,r=!1){if(nn(t))return void this._setObjectToTarget(e,t,r);const a=t.split(".");t=a.pop();for(const d of a)nn(e[d])||(e[d]={}),e=e[d];if(nn(n))return nn(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,n,r);r&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const r of n){if(!nn(e[r])){e=null;break}e=e[r]}return e?pc(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(r=>{this._setToTarget(e,r,t[r],n)})}}function pc(o){return Qn(o,Wi)}function Wi(o){return on(o)?o:void 0}function Zi(o){if(o){if(o.defaultView)return o instanceof o.defaultView.Document;if(o.ownerDocument&&o.ownerDocument.defaultView)return o instanceof o.ownerDocument.defaultView.Node}return!1}function Ra(o){const e=Object.prototype.toString.apply(o);return e=="[object Window]"||e=="[object global]"}const ta=Oo(ge());function Oo(o){return o?class extends o{listenTo(e,t,n,r={}){if(Zi(e)||Ra(e)){const a={capture:!!r.useCapture,passive:!!r.usePassive},d=this._getProxyEmitter(e,a)||new mc(e,a);this.listenTo(d,t,n,r)}else super.listenTo(e,t,n,r)}stopListening(e,t,n){if(Zi(e)||Ra(e)){const r=this._getAllProxyEmitters(e);for(const a of r)this.stopListening(a,t,n)}else super.stopListening(e,t,n)}_getProxyEmitter(e,t){return function(n,r){const a=n[it];return a&&a[r]?a[r].emitter:null}(this,gc(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}:ta}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{Oo[o]=ta.prototype[o]});class mc extends ge(){constructor(e,t){super(),Ze(this,gc(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),ge().prototype._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){ge().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function gc(o,e){let t=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=te())}(o);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}let Rr;try{Rr={window,document}}catch{Rr={window:{},document:{}}}const Ke=Rr;function Lt(o){const e=[];let t=o;for(;t&&t.nodeType!=Node.DOCUMENT_NODE;)e.unshift(t),t=t.parentNode;return e}function Yt(o){return Object.prototype.toString.call(o)=="[object Text]"}function na(o){return Object.prototype.toString.apply(o)=="[object Range]"}function kc(o){const e=o.ownerDocument.defaultView.getComputedStyle(o);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}const lo=["top","right","bottom","left","width","height"];class Wt{constructor(e){const t=na(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),oa(e)||t)if(t){const n=Wt.getDomRangeRects(e);ia(this,Wt.getBoundingRect(n))}else ia(this,e.getBoundingClientRect());else if(Ra(e)){const{innerWidth:n,innerHeight:r}=e;ia(this,{top:0,right:n,bottom:r,left:0,width:n,height:r})}else ia(this,e)}clone(){return new Wt(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};return t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0?null:new Wt(t)}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(!ws(e)){let n=e.parentNode||e.commonAncestorContainer;for(;n&&!ws(n);){const r=new Wt(n),a=t.getIntersection(r);if(!a)return null;a.getArea()<t.getArea()&&(t=a),n=n.parentNode}}return t}isEqual(e){for(const t of lo)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}excludeScrollbarsAndBorders(){const e=this._source;let t,n,r;if(Ra(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,r=e.getComputedStyle(e.document.documentElement).direction;else{const a=kc(e);t=e.offsetWidth-e.clientWidth-a.left-a.right,n=e.offsetHeight-e.clientHeight-a.top-a.bottom,r=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=a.left,this.top+=a.top,this.right-=a.right,this.bottom-=a.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,r==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const r of n)t.push(new Wt(r));else{let r=e.startContainer;Yt(r)&&(r=r.parentNode);const a=new Wt(r.getBoundingClientRect());a.right=a.left,a.width=0,t.push(a)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const r of e)n++,t.left=Math.min(t.left,r.left),t.top=Math.min(t.top,r.top),t.right=Math.max(t.right,r.right),t.bottom=Math.max(t.bottom,r.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new Wt(t))}}function ia(o,e){for(const t of lo)o[t]=e[t]}function ws(o){return!!oa(o)&&o===o.ownerDocument.body}function oa(o){return o!==null&&typeof o=="object"&&o.nodeType===1&&typeof o.getBoundingClientRect=="function"}const x=class{constructor(o,e){x._observerInstance||x._createObserver(),this._element=o,this._callback=e,x._addElementCallback(o,e),x._observerInstance.observe(o)}destroy(){x._deleteElementCallback(this._element,this._callback)}static _addElementCallback(o,e){x._elementCallbacks||(x._elementCallbacks=new Map);let t=x._elementCallbacks.get(o);t||(t=new Set,x._elementCallbacks.set(o,t)),t.add(e)}static _deleteElementCallback(o,e){const t=x._getElementCallbacks(o);t&&(t.delete(e),t.size||(x._elementCallbacks.delete(o),x._observerInstance.unobserve(o))),x._elementCallbacks&&!x._elementCallbacks.size&&(x._observerInstance=null,x._elementCallbacks=null)}static _getElementCallbacks(o){return x._elementCallbacks?x._elementCallbacks.get(o):null}static _createObserver(){x._observerInstance=new Ke.window.ResizeObserver(o=>{for(const e of o){const t=x._getElementCallbacks(e.target);if(t)for(const n of t)n(e)}})}};let T=x;function R(o,e){o instanceof HTMLTextAreaElement&&(o.value=e),o.innerHTML=e}function J(o){return e=>e+o}function fe(o){let e=0;for(;o.previousSibling;)o=o.previousSibling,e++;return e}function He(o,e,t){o.insertBefore(t,o.childNodes[e]||null)}function ut(o){return o&&o.nodeType===Node.COMMENT_NODE}function zt(o){return!!(o&&o.getClientRects&&o.getClientRects().length)}T._observerInstance=null,T._elementCallbacks=null;var ln=Math.pow;function ir({element:o,target:e,positions:t,limiter:n,fitInViewport:r,viewportOffsetConfig:a}){oi(e)&&(e=e()),oi(n)&&(n=n());const d=function(E){return E&&E.parentNode?E.offsetParent===Ke.document.body?null:E.offsetParent:null}(o),h=new Wt(o),m=new Wt(e);let g;const w=r&&function(E){E=Object.assign({top:0,bottom:0,left:0,right:0},E);const I=new Wt(Ke.window);return I.top+=E.top,I.height-=E.top,I.bottom-=E.bottom,I.height-=E.bottom,I}(a)||null,y={targetRect:m,elementRect:h,positionedElementAncestor:d,viewportRect:w};if(n||r){const E=n&&new Wt(n).getVisible();Object.assign(y,{limiterRect:E,viewportRect:w}),g=function(I,O){const{elementRect:z}=O,K=z.getArea(),$=I.map(Pe=>new wc(Pe,O)).filter(Pe=>!!Pe.name);let oe=0,ke=null;for(const Pe of $){const{limiterIntersectionArea:$e,viewportIntersectionArea:Vt}=Pe;if($e===K)return Pe;const kt=ln(Vt,2)+ln($e,2);kt>oe&&(oe=kt,ke=Pe)}return ke}(t,y)||new wc(t[0],y)}else g=new wc(t[0],y);return g}function Fa(o){const{scrollX:e,scrollY:t}=Ke.window;return o.clone().moveBy(e,t)}class wc{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect);if(!n)return;const{left:r,top:a,name:d,config:h}=n;this.name=d,this.config=h,this._positioningFunctionCorrdinates={left:r,top:a},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;if(e){const t=this._options.viewportRect;if(!t)return e.getIntersectionArea(this._rect);{const n=e.getIntersection(t);if(n)return n.getIntersectionArea(this._rect)}}return 0}get viewportIntersectionArea(){const e=this._options.viewportRect;return e?e.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=Fa(this._rect),this._options.positionedElementAncestor&&function(e,t){const n=Fa(new Wt(t)),r=kc(t);let a=0,d=0;a-=n.left,d-=n.top,a+=t.scrollLeft,d+=t.scrollTop,a-=r.left,d-=r.top,e.moveBy(a,d)}(this._cachedAbsoluteRect,this._options.positionedElementAncestor)),this._cachedAbsoluteRect}}function Cd(o){const e=o.parentNode;e&&e.removeChild(o)}function Pp({window:o,rect:e,alignToTop:t,forceScroll:n,viewportOffset:r}){const a=e.clone().moveBy(0,r),d=e.clone().moveBy(0,-r),h=new Wt(o).excludeScrollbarsAndBorders(),m=t&&n,g=[d,a].every(O=>h.contains(O));let{scrollX:w,scrollY:y}=o;const E=w,I=y;m?y-=h.top-e.top+r:g||(_(d,h)?y-=h.top-e.top+r:p(a,h)&&(y+=t?e.top-h.top-r:e.bottom-h.bottom+r)),g||(S(e,h)?w-=h.left-e.left+r:P(e,h)&&(w+=e.right-h.right+r)),w==E&&y===I||o.scrollTo(w,y)}function c({parent:o,getRect:e,alignToTop:t,forceScroll:n,ancestorOffset:r=0}){const a=W(o),d=t&&n;let h,m,g;for(;o!=a.document.body;)m=e(),h=new Wt(o).excludeScrollbarsAndBorders(),g=h.contains(m),d?o.scrollTop-=h.top-m.top+r:g||(_(m,h)?o.scrollTop-=h.top-m.top+r:p(m,h)&&(o.scrollTop+=t?m.top-h.top-r:m.bottom-h.bottom+r)),g||(S(m,h)?o.scrollLeft-=h.left-m.left+r:P(m,h)&&(o.scrollLeft+=m.right-h.right+r)),o=o.parentNode}function p(o,e){return o.bottom>e.bottom}function _(o,e){return o.top<e.top}function S(o,e){return o.left<e.left}function P(o,e){return o.right>e.right}function W(o){return na(o)?o.startContainer.ownerDocument.defaultView:o.ownerDocument.defaultView}function ee(o){if(na(o)){let e=o.commonAncestorContainer;return Yt(e)&&(e=e.parentNode),e}return o.parentNode}function re(o,e){const t=W(o),n=new Wt(o);if(t===e)return n;{let r=t;for(;r!=e;){const a=r.frameElement,d=new Wt(a).excludeScrollbarsAndBorders();n.moveBy(d.left,d.top),r=r.parent}}return n}const ue={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},ve={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},ye=function(){const o={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++)o[String.fromCharCode(e).toLowerCase()]=e;for(let e=48;e<=57;e++)o[e-48]=e;for(let e=112;e<=123;e++)o["f"+(e-111)]=e;for(const e of"`-=[];',./\\")o[e]=e.charCodeAt(0);return o}(),Qe=Object.fromEntries(Object.entries(ye).map(([o,e])=>[e,o.charAt(0).toUpperCase()+o.slice(1)]));function st(o){let e;if(typeof o=="string"){if(e=ye[o.toLowerCase()],!e)throw new G("keyboard-unknown-key",null,{key:o})}else e=o.keyCode+(o.altKey?ye.alt:0)+(o.ctrlKey?ye.ctrl:0)+(o.shiftKey?ye.shift:0)+(o.metaKey?ye.cmd:0);return e}function Tn(o){return typeof o=="string"&&(o=function(e){return e.split("+").map(t=>t.trim())}(o)),o.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return st(t.slice(0,-1));const n=st(t);return M.isMac&&n==ye.ctrl?ye.cmd:n}(e):e).reduce((e,t)=>t+e,0)}function An(o){let e=Tn(o);return Object.entries(M.isMac?ue:ve).reduce((t,[n,r])=>(e&ye[n]&&(e&=~ye[n],t+=r),t),"")+(e?Qe[e]:"")}function Si(o,e){const t=e==="ltr";switch(o){case ye.arrowleft:return t?"left":"right";case ye.arrowright:return t?"right":"left";case ye.arrowup:return"up";case ye.arrowdown:return"down"}}function St(o){return Array.isArray(o)?o:[o]}function Va(o,e,t=1){if(typeof t!="number")throw new G("translation-service-quantity-not-a-number",null,{quantity:t});const n=Object.keys(Ke.window.CKEDITOR_TRANSLATIONS).length;n===1&&(o=Object.keys(Ke.window.CKEDITOR_TRANSLATIONS)[0]);const r=e.id||e.string;if(n===0||!function(m,g){return!!Ke.window.CKEDITOR_TRANSLATIONS[m]&&!!Ke.window.CKEDITOR_TRANSLATIONS[m].dictionary[g]}(o,r))return t!==1?e.plural:e.string;const a=Ke.window.CKEDITOR_TRANSLATIONS[o].dictionary,d=Ke.window.CKEDITOR_TRANSLATIONS[o].getPluralForm||(m=>m===1?0:1),h=a[r];return typeof h=="string"?h:h[Number(d(t))]}Ke.window.CKEDITOR_TRANSLATIONS||(Ke.window.CKEDITOR_TRANSLATIONS={});const Np=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function Yu(o){return Np.includes(o)?"rtl":"ltr"}class Lp{constructor({uiLanguage:e="en",contentLanguage:t}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=Yu(this.uiLanguage),this.contentLanguageDirection=Yu(this.contentLanguage),this.t=(n,r)=>this._t(n,r)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=St(t),typeof e=="string"&&(e={string:e});const n=e.plural?t[0]:1;return function(r,a){return r.replace(/%(\d+)/g,(d,h)=>h<a.length?a[h]:d)}(Va(this.uiLanguage,e,n),t)}}class co extends ge(){constructor(e={},t={}){super();const n=We(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const r of e)this._items.push(r),this._itemMap.set(this._getItemIdBeforeAdding(r),r)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new G("collection-add-item-invalid-index",this);let n=0;for(const r of e){const a=this._getItemIdBeforeAdding(r),d=t+n;this._items.splice(d,0,r),this._itemMap.set(a,r),this.fire("add",r,d),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new G("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new G("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(r,a,d)=>{const h=t._bindToCollection==this,m=t._bindToInternalToExternalMap.get(a);if(h&&m)this._bindToExternalToInternalMap.set(a,m),this._bindToInternalToExternalMap.set(m,a);else{const g=e(a);if(!g)return void this._skippedIndexesFromExternal.push(d);let w=d;for(const y of this._skippedIndexesFromExternal)d>y&&w--;for(const y of t._skippedIndexesFromExternal)w>=y&&w++;this._bindToExternalToInternalMap.set(a,g),this._bindToInternalToExternalMap.set(g,a),this.add(g,w);for(let y=0;y<t._skippedIndexesFromExternal.length;y++)w<=t._skippedIndexesFromExternal[y]&&t._skippedIndexesFromExternal[y]++}};for(const r of t)n(0,r,t.getIndex(r));this.listenTo(t,"add",n),this.listenTo(t,"remove",(r,a,d)=>{const h=this._bindToExternalToInternalMap.get(a);h&&this.remove(h),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((m,g)=>(d<g&&m.push(g-1),d>g&&m.push(g),m),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new G("collection-add-invalid-id",this);if(this.get(n))throw new G("collection-add-item-already-exists",this)}else e[t]=n=te();return n}_remove(e){let t,n,r,a=!1;const d=this._idProperty;if(typeof e=="string"?(n=e,r=this._itemMap.get(n),a=!r,r&&(t=this._items.indexOf(r))):typeof e=="number"?(t=e,r=this._items[t],a=!r,r&&(n=r[d])):(r=e,n=r[d],t=this._items.indexOf(r),a=t==-1||!this._itemMap.get(n)),a)throw new G("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const h=this._bindToInternalToExternalMap.get(r);return this._bindToInternalToExternalMap.delete(r),this._bindToExternalToInternalMap.delete(h),this.fire("remove",r,t),[r,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function gn(o){const e=o.next();return e.done?null:e.value}class qi extends Oo(ot()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(e){if(this._elements.has(e))throw new G("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class Bt{constructor(){this._listener=new(Oo())}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+st(n),n)})}set(e,t,n={}){const r=Tn(e),a=n.priority;this._listener.listenTo(this._listener,"_keydown:"+r,(d,h)=>{t(h,()=>{h.preventDefault(),h.stopPropagation(),d.stop()}),d.return=!0},{priority:a})}press(e){return!!this._listener.fire("_keydown:"+st(e),e)}stopListening(e){this._listener.stopListening(e)}destroy(){this.stopListening()}}function Gi(o){return We(o)?new Map(o):function(e){const t=new Map;for(const n in e)t.set(n,e[n]);return t}(o)}function xd(o,e){let t;function n(...r){n.cancel(),t=setTimeout(()=>o(...r),e)}return n.cancel=()=>{clearTimeout(t)},n}function Ed(o,e){return!!(t=o.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(o.charAt(e));var t}function Sd(o,e){return!!(t=o.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const Dd=function(){const o=[new RegExp("\\p{Emoji}[\\u{E0020}-\\u{E007E}]+\\u{E007F}","u"),new RegExp("\\p{Emoji}\\u{FE0F}?\\u{20E3}","u"),new RegExp("\\p{Emoji}\\u{FE0F}","u"),new RegExp("(?=\\p{General_Category=Other_Symbol})\\p{Emoji}\\p{Emoji_Modifier}*","u")],e=new RegExp("\\p{Regional_Indicator}{2}","u").source,t="(?:"+o.map(n=>n.source).join("|")+")";return new RegExp(`${e}|${t}(?:‍${t})*`,"ug")}();function Td(o,e){const t=String(o).matchAll(Dd);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}class bs extends co{constructor(e=[]){super(e,{idProperty:"viewUid"}),this.on("add",(t,n,r)=>{this._renderViewIntoCollectionParent(n,r)}),this.on("remove",(t,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(e=>e.destroy())}setParent(e){this._parentElement=e;for(const t of this)this._renderViewIntoCollectionParent(t)}delegate(...e){if(!e.length||!e.every(t=>typeof t=="string"))throw new G("ui-viewcollection-delegate-wrong-events",this);return{to:t=>{for(const n of this)for(const r of e)n.delegate(r).to(t);this.on("add",(n,r)=>{for(const a of e)r.delegate(a).to(t)}),this.on("remove",(n,r)=>{for(const a of e)r.stopDelegating(a,t)})}}}_renderViewIntoCollectionParent(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}remove(e){return super.remove(e)}}var a5=f(6062),Be=f.n(a5),Ib=f(4793),l5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Be()(Ib.Z,l5),Ib.Z.locals;class mt extends Oo(ot()){constructor(e){super(),this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new co,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(t,n)=>{n.locale=e,n.t=e&&e.t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Fr.bind(this,this)}createCollection(e){const t=new bs(e);return this._viewCollections.add(t),t}registerChild(e){We(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t)}deregisterChild(e){We(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new Fr(e)}extendTemplate(e){Fr.extend(this.template,e)}render(){if(this.isRendered)throw new G("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(e=>e.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}class Fr extends ge(){constructor(e){super(),Object.assign(this,Bb(Lb(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:e,intoFragment:!1,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new G("ui-template-revert-not-applied",[this,e]);this._revertTemplateFromNode(e,this._revertData)}*getViews(){yield*function*e(t){if(t.children)for(const n of t.children)$u(n)?yield n:Bp(n)&&(yield*e(n))}(this)}static bind(e,t){return{to:(n,r)=>new c5({eventNameOrFunction:n,attribute:n,observable:e,emitter:t,callback:r}),if:(n,r,a)=>new Pb({observable:e,emitter:t,attribute:n,valueIfTrue:r,callback:a})}}static extend(e,t){if(e._isRendered)throw new G("template-extend-render",[this,e]);Rb(e,Bb(Lb(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new G("ui-template-wrong-syntax",this);return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(""),Qu(this.text)?this._bindToObservable({schema:this.text,updater:d5(t),data:e}):t.textContent=this.text.join(""),t}_renderAttributes(e){if(!this.attributes)return;const t=e.node,n=e.revertData;for(const r in this.attributes){const a=t.getAttribute(r),d=this.attributes[r];n&&(n.attributes[r]=a);const h=Fb(d)?d[0].ns:null;if(Qu(d)){const m=Fb(d)?d[0].value:d;n&&Vb(r)&&m.unshift(a),this._bindToObservable({schema:m,updater:u5(t,r,h),data:e})}else if(r=="style"&&typeof d[0]!="string")this._renderStyleAttribute(d[0],e);else{n&&a&&Vb(r)&&d.unshift(a);const m=d.map(g=>g&&g.value||g).reduce((g,w)=>g.concat(w),[]).reduce(zb,"");bc(m)||t.setAttributeNS(h,r,m)}}}_renderStyleAttribute(e,t){const n=t.node;for(const r in e){const a=e[r];Qu(a)?this._bindToObservable({schema:[a],updater:h5(n,r),data:t}):n.style[r]=a}}_renderElementChildren(e){const t=e.node,n=e.intoFragment?document.createDocumentFragment():t,r=e.isApplying;let a=0;for(const d of this.children)if(Op(d)){if(!r){d.setParent(t);for(const h of d)n.appendChild(h.element)}}else if($u(d))r||(d.isRendered||d.render(),n.appendChild(d.element));else if(Zi(d))n.appendChild(d);else if(r){const h={children:[],bindings:[],attributes:{}};e.revertData.children.push(h),d._renderNode({intoFragment:!1,node:n.childNodes[a++],isApplying:!0,revertData:h})}else n.appendChild(d.render());e.intoFragment&&t.appendChild(n)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const n=this.eventListeners[t].map(r=>{const[a,d]=t.split("@");return r.activateDomEventListener(a,d,e)});e.revertData&&e.revertData.bindings.push(n)}}_bindToObservable({schema:e,updater:t,data:n}){const r=n.revertData;Nb(e,t,n);const a=e.filter(d=>!bc(d)).filter(d=>d.observable).map(d=>d.activateAttributeListener(e,t,n));r&&r.bindings.push(a)}_revertTemplateFromNode(e,t){for(const r of t.bindings)for(const a of r)a();if(t.text)return void(e.textContent=t.text);const n=e;for(const r in t.attributes){const a=t.attributes[r];a===null?n.removeAttribute(r):n.setAttribute(r,a)}for(let r=0;r<t.children.length;++r)this._revertTemplateFromNode(n.childNodes[r],t.children[r])}}class Md{constructor(e){this.attribute=e.attribute,this.observable=e.observable,this.emitter=e.emitter,this.callback=e.callback}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,n){const r=()=>Nb(e,t,n);return this.emitter.listenTo(this.observable,`change:${this.attribute}`,r),()=>{this.emitter.stopListening(this.observable,`change:${this.attribute}`,r)}}}class c5 extends Md{constructor(e){super(e),this.eventNameOrFunction=e.eventNameOrFunction}activateDomEventListener(e,t,n){const r=(a,d)=>{t&&!d.target.matches(t)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(d):this.observable.fire(this.eventNameOrFunction,d))};return this.emitter.listenTo(n.node,e,r),()=>{this.emitter.stopListening(n.node,e,r)}}}class Pb extends Md{constructor(e){super(e),this.valueIfTrue=e.valueIfTrue}getValue(e){return!bc(super.getValue(e))&&(this.valueIfTrue||!0)}}function Qu(o){return!!o&&(o.value&&(o=o.value),Array.isArray(o)?o.some(Qu):o instanceof Md)}function Nb(o,e,{node:t}){const n=function(a,d){return a.map(h=>h instanceof Md?h.getValue(d):h)}(o,t);let r;r=o.length==1&&o[0]instanceof Pb?n[0]:n.reduce(zb,""),bc(r)?e.remove():e.set(r)}function d5(o){return{set(e){o.textContent=e},remove(){o.textContent=""}}}function u5(o,e,t){return{set(n){o.setAttributeNS(t,e,n)},remove(){o.removeAttributeNS(t,e)}}}function h5(o,e){return{set(t){o.style[e]=t},remove(){o.style[e]=null}}}function Lb(o){return Qn(o,e=>{if(e&&(e instanceof Md||Bp(e)||$u(e)||Op(e)))return e})}function Bb(o){if(typeof o=="string"?o=function(e){return{text:[e]}}(o):o.text&&function(e){e.text=St(e.text)}(o),o.on&&(o.eventListeners=function(e){for(const t in e)Ob(e,t);return e}(o.on),delete o.on),!o.text){o.attributes&&function(t){for(const n in t)t[n].value&&(t[n].value=St(t[n].value)),Ob(t,n)}(o.attributes);const e=[];if(o.children)if(Op(o.children))e.push(o.children);else for(const t of o.children)Bp(t)||$u(t)||Zi(t)?e.push(t):e.push(new Fr(t));o.children=e}return o}function Ob(o,e){o[e]=St(o[e])}function zb(o,e){return bc(e)?o:bc(o)?e:`${o} ${e}`}function jb(o,e){for(const t in e)o[t]?o[t].push(...e[t]):o[t]=e[t]}function Rb(o,e){if(e.attributes&&(o.attributes||(o.attributes={}),jb(o.attributes,e.attributes)),e.eventListeners&&(o.eventListeners||(o.eventListeners={}),jb(o.eventListeners,e.eventListeners)),e.text&&o.text.push(...e.text),e.children&&e.children.length){if(o.children.length!=e.children.length)throw new G("ui-template-extend-children-mismatch",o);let t=0;for(const n of e.children)Rb(o.children[t++],n)}}function bc(o){return!o&&o!==0}function $u(o){return o instanceof mt}function Bp(o){return o instanceof Fr}function Op(o){return o instanceof bs}function Fb(o){return ct(o[0])&&o[0].ns}function Vb(o){return o=="class"||o=="style"}class f5 extends bs{constructor(e,t=[]){super(t),this.locale=e}attachToDom(){this._bodyCollectionContainer=new Fr({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let e=document.querySelector(".ck-body-wrapper");e||(e=Vs(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(e)),e.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const e=document.querySelector(".ck-body-wrapper");e&&e.childElementCount==0&&e.remove()}}var Ub=f(6574),p5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Be()(Ub.Z,p5),Ub.Z.locals;const Hb=class extends mt{constructor(){super();const o=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.set("isColorInherited",!0),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon","ck-reset_all-excluded",o.if("isColorInherited","ck-icon_inherit-color")],viewBox:o.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const o=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),e=o.getAttribute("viewBox");e&&(this.viewBox=e);for(const{name:t,value:n}of Array.from(o.attributes))Hb.presentationalAttributeNames.includes(t)&&this.element.setAttribute(t,n);for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);for(;o.childNodes.length>0;)this.element.appendChild(o.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(o=>{o.style.fill=this.fillColor})}};let _c=Hb;_c.presentationalAttributeNames=["alignment-baseline","baseline-shift","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-rendering","cursor","direction","display","dominant-baseline","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","mask","opacity","overflow","paint-order","pointer-events","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-overflow","text-rendering","transform","unicode-bidi","vector-effect","visibility","white-space","word-spacing","writing-mode"];var Wb=f(4906),m5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Be()(Wb.Z,m5),Wb.Z.locals;class Jt extends mt{constructor(e){super(e),this._focusDelayed=null;const t=this.bindTemplate,n=te();this.set("ariaChecked",void 0),this.set("ariaLabel",void 0),this.set("ariaLabelledBy",`ck-editor__aria-label_${n}`),this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke",void 0),this.set("label",void 0),this.set("role",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.labelView=this._createLabelView(),this.iconView=new _c,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this));const r={tag:"button",attributes:{class:["ck","ck-button",t.to("class"),t.if("isEnabled","ck-disabled",a=>!a),t.if("isVisible","ck-hidden",a=>!a),t.to("isOn",a=>a?"ck-on":"ck-off"),t.if("withText","ck-button_with-text"),t.if("withKeystroke","ck-button_with-keystroke")],role:t.to("role"),type:t.to("type",a=>a||"button"),tabindex:t.to("tabindex"),"aria-label":t.to("ariaLabel"),"aria-labelledby":t.to("ariaLabelledBy"),"aria-disabled":t.if("isEnabled",!0,a=>!a),"aria-checked":t.to("isOn"),"aria-pressed":t.to("isOn",a=>!!this.isToggleable&&String(!!a)),"data-cke-tooltip-text":t.to("_tooltipString"),"data-cke-tooltip-position":t.to("tooltipPosition")},children:this.children,on:{click:t.to(a=>{this.isEnabled?this.fire("execute"):a.preventDefault()})}};M.isSafari&&(this._focusDelayed||(this._focusDelayed=xd(()=>this.focus(),0)),r.on.mousedown=t.to(()=>{this._focusDelayed()}),r.on.mouseup=t.to(()=>{this._focusDelayed.cancel()})),this.setTemplate(r)}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}destroy(){this._focusDelayed&&this._focusDelayed.cancel(),super.destroy()}_createLabelView(){const e=new mt,t=this.bindTemplate;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:t.to("labelStyle"),id:this.ariaLabelledBy},children:[{text:t.to("label")}]}),e}_createKeystrokeView(){const e=new mt;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",t=>An(t))}]}),e}_getTooltipString(e,t,n){return e?typeof e=="string"?e:(n&&(n=An(n)),e instanceof Function?e(t,n):`${t}${n?` (${n})`:""}`):""}}var Zb=f(5332),g5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Be()(Zb.Z,g5),Zb.Z.locals;class Ju extends Jt{constructor(e){super(e),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const e=new mt;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),e}}var qb=f(6781),k5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Be()(qb.Z,k5),qb.Z.locals,f(1103),f(841);var Gb=f(3662),w5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Be()(Gb.Z,w5),Gb.Z.locals;class Kb extends mt{constructor(e){super(e),this.set("text",void 0),this.set("for",void 0),this.id=`ck-editor__label_${te()}`;const t=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:t.to("for")},children:[{text:t.to("text")}]})}}var Yb=f(2577),b5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Be()(Yb.Z,b5),Yb.Z.locals;class zp extends mt{constructor(e,t){super(e);const n=`ck-labeled-field-view-${te()}`,r=`ck-labeled-field-view-status-${te()}`;this.fieldView=t(this,n,r),this.set("label",void 0),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class",void 0),this.set("placeholder",void 0),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(r),this.fieldWrapperChildren=this.createCollection([this.fieldView,this.labelView]),this.bind("_statusText").to(this,"errorText",this,"infoText",(d,h)=>d||h);const a=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",a.to("class"),a.if("isEnabled","ck-disabled",d=>!d),a.if("isEmpty","ck-labeled-field-view_empty"),a.if("isFocused","ck-labeled-field-view_focused"),a.if("placeholder","ck-labeled-field-view_placeholder"),a.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:this.fieldWrapperChildren},this.statusView]})}_createLabelView(e){const t=new Kb(this.locale);return t.for=e,t.bind("text").to(this,"label"),t}_createStatusView(e){const t=new mt(this.locale),n=this.bindTemplate;return t.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",n.if("errorText","ck-labeled-field-view__status_error"),n.if("_statusText","ck-hidden",r=>!r)],id:e,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),t}focus(){this.fieldView.focus()}}var Qb=f(4879),_5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Be()(Qb.Z,_5),Qb.Z.locals;class v5 extends mt{constructor(e){super(e),this.set("value",void 0),this.set("id",void 0),this.set("placeholder",void 0),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById",void 0),this.focusTracker=new qi,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0),this.set("inputMode","text");const t=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck","ck-input",t.if("isFocused","ck-input_focused"),t.if("isEmpty","ck-input-text_empty"),t.if("hasError","ck-error")],id:t.to("id"),placeholder:t.to("placeholder"),readonly:t.to("isReadOnly"),inputmode:t.to("inputMode"),"aria-invalid":t.if("hasError",!0),"aria-describedby":t.to("ariaDescribedById")},on:{input:t.to((...n)=>{this.fire("input",...n),this._updateIsEmpty()}),change:t.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(e,t,n)=>{this._setDomElementValue(n),this._updateIsEmpty()})}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(e){this.element.value=e||e===0?e:""}}class y5 extends v5{constructor(e){super(e),this.extendTemplate({attributes:{type:"text",class:["ck-input-text"]}})}}class A5 extends mt{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",t.to("position",n=>`ck-dropdown__panel_${n}`),t.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:t.to(n=>{n.target.tagName.toLocaleLowerCase()!=="input"&&n.preventDefault()})}})}focus(){if(this.children.length){const e=this.children.first;typeof e.focus=="function"?e.focus():ce("ui-dropdown-panel-focus-child-missing-focus",{childView:this.children.first,dropdownPanel:this})}}focusLast(){if(this.children.length){const e=this.children.last;typeof e.focusLast=="function"?e.focusLast():e.focus()}}}var $b=f(5485),C5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Be()($b.Z,C5),$b.Z.locals;const jp=class extends mt{constructor(o,e,t){super(o);const n=this.bindTemplate;this.buttonView=e,this.panelView=t,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class",void 0),this.set("id",void 0),this.set("panelPosition","auto"),this.keystrokes=new Bt,this.focusTracker=new qi,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",n.to("class"),n.if("isEnabled","ck-disabled",r=>!r)],id:n.to("id"),"aria-describedby":n.to("ariaDescribedById")},children:[e,t]}),e.extendTemplate({attributes:{class:["ck-dropdown__button"],"data-cke-tooltip-disabled":n.to("isOpen")}})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",(e,t,n)=>{n&&(this.panelPosition==="auto"?this.panelView.position=jp._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition)}),this.keystrokes.listenTo(this.element);const o=(e,t)=>{this.isOpen&&(this.isOpen=!1,t())};this.keystrokes.set("arrowdown",(e,t)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,t())}),this.keystrokes.set("arrowright",(e,t)=>{this.isOpen&&t()}),this.keystrokes.set("arrowleft",o),this.keystrokes.set("esc",o)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:o,north:e,southEast:t,southWest:n,northEast:r,northWest:a,southMiddleEast:d,southMiddleWest:h,northMiddleEast:m,northMiddleWest:g}=jp.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[t,n,d,h,o,r,a,m,g,e]:[n,t,h,d,o,a,r,g,m,e]}};let Rp=jp;Rp.defaultPanelPositions={south:(o,e)=>({top:o.bottom,left:o.left-(e.width-o.width)/2,name:"s"}),southEast:o=>({top:o.bottom,left:o.left,name:"se"}),southWest:(o,e)=>({top:o.bottom,left:o.left-e.width+o.width,name:"sw"}),southMiddleEast:(o,e)=>({top:o.bottom,left:o.left-(e.width-o.width)/4,name:"sme"}),southMiddleWest:(o,e)=>({top:o.bottom,left:o.left-3*(e.width-o.width)/4,name:"smw"}),north:(o,e)=>({top:o.top-e.height,left:o.left-(e.width-o.width)/2,name:"n"}),northEast:(o,e)=>({top:o.top-e.height,left:o.left,name:"ne"}),northWest:(o,e)=>({top:o.top-e.height,left:o.left-e.width+o.width,name:"nw"}),northMiddleEast:(o,e)=>({top:o.top-e.height,left:o.left-(e.width-o.width)/4,name:"nme"}),northMiddleWest:(o,e)=>({top:o.top-e.height,left:o.left-3*(e.width-o.width)/4,name:"nmw"})},Rp._getOptimalPosition=ir;const Jb='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class x5 extends Jt{constructor(e){super(e),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",t=>String(t))}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new _c;return e.content=Jb,e.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),e}}class vc{constructor(e){if(this.focusables=e.focusables,this.focusTracker=e.focusTracker,this.keystrokeHandler=e.keystrokeHandler,this.actions=e.actions,e.actions&&e.keystrokeHandler)for(const t in e.actions){let n=e.actions[t];typeof n=="string"&&(n=[n]);for(const r of n)e.keystrokeHandler.set(r,(a,d)=>{this[t](),d()})}}get first(){return this.focusables.find(Fp)||null}get last(){return this.focusables.filter(Fp).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let e=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((t,n)=>{const r=t.element===this.focusTracker.focusedElement;return r&&(e=n),r}),e)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(e){e&&e.focus()}_getFocusableItem(e){const t=this.current,n=this.focusables.length;if(!n)return null;if(t===null)return this[e===1?"first":"last"];let r=(t+n+e)%n;do{const a=this.focusables.get(r);if(Fp(a))return a;r=(r+n+e)%n}while(r!==t);return null}}function Fp(o){return!(!o.focus||!zt(o.element))}class Xb extends mt{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class E5 extends mt{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}function e0(o){return Array.isArray(o)?{items:o,removeItems:[]}:o?Object.assign({items:[],removeItems:[]},o):{items:[],removeItems:[]}}class Ee extends ot(){constructor(e){super(),this._disableStack=new Set,this.editor=e,this.set("isEnabled",!0)}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",t0,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",t0),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function t0(o){o.return=!1,o.stop()}class pt extends ot(){constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(e,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",t=>{this.affectsData&&(e.isReadOnly||this._isEnabledBasedOnSelection&&!e.model.canEditAt(e.model.document.selection))&&(t.return=!1,t.stop())},{priority:"highest"}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",n0,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",n0),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function n0(o){o.return=!1,o.stop()}class i0 extends pt{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){pe(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}class o0 extends ge(){constructor(e,t=[],n=[]){super(),this._plugins=new Map,this._context=e,this._availablePlugins=new Map;for(const r of t)r.pluginName&&this._availablePlugins.set(r.pluginName,r);this._contextPlugins=new Map;for(const[r,a]of n)this._contextPlugins.set(r,a),this._contextPlugins.set(a,r),r.pluginName&&this._availablePlugins.set(r.pluginName,r)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new G("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const r=this,a=this._context;(function O(z,K=new Set){z.forEach($=>{m($)&&(K.has($)||(K.add($),$.pluginName&&!r._availablePlugins.has($.pluginName)&&r._availablePlugins.set($.pluginName,$),$.requires&&O($.requires,K)))})})(e),E(e);const d=[...function O(z,K=new Set){return z.map($=>m($)?$:r._availablePlugins.get($)).reduce(($,oe)=>K.has(oe)?$:(K.add(oe),oe.requires&&(E(oe.requires,oe),O(oe.requires,K).forEach(ke=>$.add(ke))),$.add(oe)),new Set)}(e.filter(O=>!w(O,t)))];(function(O,z){for(const K of z){if(typeof K!="function")throw new G("plugincollection-replace-plugin-invalid-type",null,{pluginItem:K});const $=K.pluginName;if(!$)throw new G("plugincollection-replace-plugin-missing-name",null,{pluginItem:K});if(K.requires&&K.requires.length)throw new G("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:$});const oe=r._availablePlugins.get($);if(!oe)throw new G("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:$});const ke=O.indexOf(oe);if(ke===-1){if(r._contextPlugins.has(oe))return;throw new G("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:$})}if(oe.requires&&oe.requires.length)throw new G("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:$});O.splice(ke,1,K),r._availablePlugins.set($,K)}})(d,n);const h=d.map(O=>{let z=r._contextPlugins.get(O);return z=z||new O(a),r._add(O,z),z});return I(h,"init").then(()=>I(h,"afterInit")).then(()=>h);function m(O){return typeof O=="function"}function g(O){return m(O)&&!!O.isContextPlugin}function w(O,z){return z.some(K=>K===O||y(O)===K||y(K)===O)}function y(O){return m(O)?O.pluginName||O.name:O}function E(O,z=null){O.map(K=>m(K)?K:r._availablePlugins.get(K)||K).forEach(K=>{(function($,oe){if(!m($))throw oe?new G("plugincollection-soft-required",a,{missingPlugin:$,requiredBy:y(oe)}):new G("plugincollection-plugin-not-found",a,{plugin:$})})(K,z),function($,oe){if(g(oe)&&!g($))throw new G("plugincollection-context-required",a,{plugin:y($),requiredBy:y(oe)})}(K,z),function($,oe){if(oe&&w($,t))throw new G("plugincollection-required",a,{plugin:y($),requiredBy:y(oe)})}(K,z)})}function I(O,z){return O.reduce((K,$)=>$[z]?r._contextPlugins.has($)?K:K.then($[z].bind($)):K,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new G("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}class r0{constructor(e){this._contextOwner=null,this.config=new ja(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new o0(this,t);const n=this.config.get("language")||{};this.locale=new Lp({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new co}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new G("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new G("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new G("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class Xu extends ot(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}class S5 extends Bt{constructor(e){super(),this.editor=e}set(e,t,n={}){if(typeof t=="string"){const r=t;t=(a,d)=>{this.editor.execute(r),d()}}super.set(e,t,n)}}var s0=f(4717),D5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Be()(s0.Z,D5),s0.Z.locals;const eh=new WeakMap;function a0({view:o,element:e,text:t,isDirectHost:n=!0,keepOnFocus:r=!1}){const a=o.document;eh.has(a)||(eh.set(a,new Map),a.registerPostFixer(d=>Vp(a,d)),a.on("change:isComposing",()=>{o.change(d=>Vp(a,d))},{priority:"high"})),eh.get(a).set(e,{text:t,isDirectHost:n,keepOnFocus:r,hostElement:n?e:null}),o.change(d=>Vp(a,d))}function T5(o,e){return!!e.hasClass("ck-placeholder")&&(o.removeClass("ck-placeholder",e),!0)}function Vp(o,e){const t=eh.get(o),n=[];let r=!1;for(const[a,d]of t)d.isDirectHost&&(n.push(a),l0(e,a,d)&&(r=!0));for(const[a,d]of t){if(d.isDirectHost)continue;const h=M5(a);h&&(n.includes(h)||(d.hostElement=h,l0(e,a,d)&&(r=!0)))}return r}function l0(o,e,t){const{text:n,isDirectHost:r,hostElement:a}=t;let d=!1;return a.getAttribute("data-placeholder")!==n&&(o.setAttribute("data-placeholder",n,a),d=!0),(r||e.childCount==1)&&function(h,m){if(!h.isAttached()||Array.from(h.getChildren()).some(y=>!y.is("uiElement")))return!1;const g=h.document,w=g.selection.anchor;return!(g.isComposing&&w&&w.parent===h||!m&&g.isFocused&&(!w||w.parent===h))}(a,t.keepOnFocus)?function(h,m){return!m.hasClass("ck-placeholder")&&(h.addClass("ck-placeholder",m),!0)}(o,a)&&(d=!0):T5(o,a)&&(d=!0),d}function M5(o){if(o.childCount){const e=o.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}class Nl{is(){throw new Error("is() method is abstract")}}const c0=function(o){return yn(o,4)};class Ll extends ge(Nl){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new G("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),r=e.getAncestors(t);let a=0;for(;n[a]==r[a]&&n[a];)a++;return a===0?null:n[a-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),r=Fe(t,n);switch(r){case"prefix":return!0;case"extension":return!1;default:return t[r]<n[r]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=c0(this);return delete e.parent,e}}Ll.prototype.is=function(o){return o==="node"||o==="view:node"};class Zt extends Ll{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof Zt&&(this===e||this.data===e.data)}_clone(){return new Zt(this.document,this.data)}}Zt.prototype.is=function(o){return o==="$text"||o==="view:$text"||o==="text"||o==="view:text"||o==="node"||o==="view:node"};class _s extends Nl{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.data.length)throw new G("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new G("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}_s.prototype.is=function(o){return o==="$textProxy"||o==="view:$textProxy"||o==="textProxy"||o==="view:textProxy"};class vs{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const r=d0(t,n);if(r)return{element:t,pattern:n,match:r}}return null}matchAll(...e){const t=[];for(const n of e)for(const r of this._patterns){const a=d0(n,r);a&&t.push({element:n,pattern:r,match:a})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function d0(o,e){if(typeof e=="function")return e(o);const t={};return e.name&&(t.name=function(n,r){return n instanceof RegExp?!!r.match(n):n===r}(e.name,o.name),!t.name)||e.attributes&&(t.attributes=function(n,r){const a=new Set(r.getAttributeKeys());return nn(n)?(n.style!==void 0&&ce("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&ce("matcher-pattern-deprecated-attributes-class-key",n)):(a.delete("style"),a.delete("class")),Up(n,a,d=>r.getAttribute(d))}(e.attributes,o),!t.attributes)||e.classes&&(t.classes=function(n,r){return Up(n,r.getClassNames(),()=>{})}(e.classes,o),!t.classes)||e.styles&&(t.styles=function(n,r){return Up(n,r.getStyleNames(!0),a=>r.getStyle(a))}(e.styles,o),!t.styles)?null:t}function Up(o,e,t){const n=function(d){return Array.isArray(d)?d.map(h=>nn(h)?(h.key!==void 0&&h.value!==void 0||ce("matcher-pattern-missing-key-or-value",h),[h.key,h.value]):[h,!0]):nn(d)?Object.entries(d):[[d,!0]]}(o),r=Array.from(e),a=[];if(n.forEach(([d,h])=>{r.forEach(m=>{(function(g,w){return g===!0||g===w||g instanceof RegExp&&w.match(g)})(d,m)&&function(g,w,y){if(g===!0)return!0;const E=y(w);return g===E||g instanceof RegExp&&!!String(E).match(g)}(h,m,t)&&a.push(m)})}),n.length&&!(a.length<n.length))return a}const th=function(o){return typeof o=="symbol"||fn(o)&&Zn(o)=="[object Symbol]"};var I5=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,P5=/^\w*$/;const N5=function(o,e){if(Kt(o))return!1;var t=typeof o;return!(t!="number"&&t!="symbol"&&t!="boolean"&&o!=null&&!th(o))||P5.test(o)||!I5.test(o)||e!=null&&o in Object(e)};function Hp(o,e){if(typeof o!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var n=arguments,r=e?e.apply(this,n):n[0],a=t.cache;if(a.has(r))return a.get(r);var d=o.apply(this,n);return t.cache=a.set(r,d)||a,d};return t.cache=new(Hp.Cache||io),t}Hp.Cache=io;const L5=Hp,B5=function(o){var e=L5(o,function(n){return t.size===500&&t.clear(),n}),t=e.cache;return e};var O5=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,z5=/\\(\\)?/g,j5=B5(function(o){var e=[];return o.charCodeAt(0)===46&&e.push(""),o.replace(O5,function(t,n,r,a){e.push(r?a.replace(z5,"$1"):n||t)}),e});const R5=j5,F5=function(o,e){for(var t=-1,n=o==null?0:o.length,r=Array(n);++t<n;)r[t]=e(o[t],t,o);return r};var u0=_n?_n.prototype:void 0,h0=u0?u0.toString:void 0;const V5=function o(e){if(typeof e=="string")return e;if(Kt(e))return F5(e,o)+"";if(th(e))return h0?h0.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},Wp=function(o){return o==null?"":V5(o)},Zp=function(o,e){return Kt(o)?o:N5(o,e)?[o]:R5(Wp(o))},U5=function(o){var e=o==null?0:o.length;return e?o[e-1]:void 0},qp=function(o){if(typeof o=="string"||th(o))return o;var e=o+"";return e=="0"&&1/o==-1/0?"-0":e},f0=function(o,e){for(var t=0,n=(e=Zp(e,o)).length;o!=null&&t<n;)o=o[qp(e[t++])];return t&&t==n?o:void 0},p0=function(o,e,t){var n=-1,r=o.length;e<0&&(e=-e>r?0:r+e),(t=t>r?r:t)<0&&(t+=r),r=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(r);++n<r;)a[n]=o[n+e];return a},H5=function(o,e){return e.length<2?o:f0(o,p0(e,0,-1))},W5=function(o,e){return e=Zp(e,o),(o=H5(o,e))==null||delete o[qp(U5(e))]},Z5=function(o,e){return o==null||W5(o,e)},nh=function(o,e,t){var n=o==null?void 0:f0(o,e);return n===void 0?t:n},Gp=function(o,e,t){(t!==void 0&&!wr(o[e],t)||t===void 0&&!(e in o))&&Cr(o,e,t)},q5=function(o){return function(e,t,n){for(var r=-1,a=Object(e),d=n(e),h=d.length;h--;){var m=d[o?h:++r];if(t(a[m],m,a)===!1)break}return e}}(),G5=function(o){return fn(o)&&Ir(o)},Kp=function(o,e){if((e!=="constructor"||typeof o[e]!="function")&&e!="__proto__")return o[e]},K5=function(o){return Do(o,Ai(o))},Y5=function(o,e,t,n,r,a,d){var h=Kp(o,t),m=Kp(e,t),g=d.get(m);if(g)Gp(o,t,g);else{var w=a?a(h,m,t+"",o,e,d):void 0,y=w===void 0;if(y){var E=Kt(m),I=!E&&On(m),O=!E&&!I&&Dr(m);w=m,E||I||O?Kt(h)?w=h:G5(h)?w=Br(h):I?(y=!1,w=Lr(m,!0)):O?(y=!1,w=ae(m,!0)):w=[]:nn(m)||xr(m)?(w=h,xr(h)?w=K5(h):ct(h)&&!oi(h)||(w=nt(m))):y=!1}y&&(d.set(m,w),r(w,m,n,a,d),d.delete(m)),Gp(o,t,w)}},Q5=function o(e,t,n,r,a){e!==t&&q5(t,function(d,h){if(a||(a=new _i),ct(d))Y5(e,t,h,n,o,r,a);else{var m=r?r(Kp(e,h),d,h+"",e,t,a):void 0;m===void 0&&(m=d),Gp(e,h,m)}},Ai)},Bl=function(o){return o},$5=function(o,e,t){switch(t.length){case 0:return o.call(e);case 1:return o.call(e,t[0]);case 2:return o.call(e,t[0],t[1]);case 3:return o.call(e,t[0],t[1],t[2])}return o.apply(e,t)};var m0=Math.max;const J5=function(o,e,t){return e=m0(e===void 0?o.length-1:e,0),function(){for(var n=arguments,r=-1,a=m0(n.length-e,0),d=Array(a);++r<a;)d[r]=n[e+r];r=-1;for(var h=Array(e+1);++r<e;)h[r]=n[r];return h[e]=t(d),$5(o,this,h)}},X5=function(o){return function(){return o}},eT=So?function(o,e){return So(o,"toString",{configurable:!0,enumerable:!1,value:X5(e),writable:!0})}:Bl;var tT=Date.now;const nT=function(o){var e=0,t=0;return function(){var n=tT(),r=16-(n-t);if(t=n,r>0){if(++e>=800)return arguments[0]}else e=0;return o.apply(void 0,arguments)}}(eT),iT=function(o,e){return nT(J5(o,e,Bl),o+"")},oT=function(o,e,t){if(!ct(t))return!1;var n=typeof e;return!!(n=="number"?Ir(t)&&$t(e,t.length):n=="string"&&e in t)&&wr(t[e],o)},g0=function(o){return iT(function(e,t){var n=-1,r=t.length,a=r>1?t[r-1]:void 0,d=r>2?t[2]:void 0;for(a=o.length>3&&typeof a=="function"?(r--,a):void 0,d&&oT(t[0],t[1],d)&&(a=r<3?void 0:a,r=1),e=Object(e);++n<r;){var h=t[n];h&&o(e,h,n,a)}return e})},k0=g0(function(o,e,t){Q5(o,e,t)}),rT=function(o,e,t,n){if(!ct(o))return o;for(var r=-1,a=(e=Zp(e,o)).length,d=a-1,h=o;h!=null&&++r<a;){var m=qp(e[r]),g=t;if(m==="__proto__"||m==="constructor"||m==="prototype")return o;if(r!=d){var w=h[m];(g=n?n(w,m,h):void 0)===void 0&&(g=ct(w)?w:$t(e[r+1])?[]:{})}oo(h,m,g),h=h[m]}return o},sT=function(o,e,t){return o==null?o:rT(o,e,t)};class aT{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){const e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=Array.from(function(n){let r=null,a=0,d=0,h=null;const m=new Map;if(n==="")return m;n.charAt(n.length-1)!=";"&&(n+=";");for(let g=0;g<n.length;g++){const w=n.charAt(g);if(r===null)switch(w){case":":h||(h=n.substr(a,g-a),d=g+1);break;case'"':case"'":r=w;break;case";":{const y=n.substr(d,g-d);h&&m.set(h.trim(),y.trim()),h=null,a=g+1;break}}else w===r&&(r=null)}return m}(e).entries());for(const[n,r]of t)this._styleProcessor.toNormalizedForm(n,r,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)}set(e,t){if(ct(e))for(const[n,r]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,r,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=Yp(e);Z5(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!ct(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([t])=>t)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const n=t.splice(0,t.length-1).join("."),r=nh(this._styles,n);r&&!Array.from(Object.keys(r)).length&&this.remove(n)}}class lT{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(ct(t))Qp(n,Yp(e),t);else if(this._normalizers.has(e)){const r=this._normalizers.get(e),{path:a,value:d}=r(t);Qp(n,a,d)}else Qp(n,e,t)}getNormalized(e,t){if(!e)return k0({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return nh(t,n);const r=n(e,t);if(r)return r}return nh(t,Yp(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(r=>{const a=this.getNormalized(r,e);return a&&typeof a=="object"?Object.keys(a).length:a}),n=new Set([...t,...Object.keys(e)]);return Array.from(n.values())}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function Yp(o){return o.replace("-",".")}function Qp(o,e,t){let n=t;ct(t)&&(n=k0({},nh(o,e),t)),sT(o,e,n)}class zo extends Ll{constructor(e,t,n,r){if(super(e),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=t,this._attrs=function(a){const d=Gi(a);for(const[h,m]of d)m===null?d.delete(h):typeof m!="string"&&d.set(h,String(m));return d}(n),this._children=[],r&&this._insertChild(0,r),this._classes=new Set,this._attrs.has("class")){const a=this._attrs.get("class");w0(this._classes,a),this._attrs.delete("class")}this._styles=new aT(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof zo))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new vs(...e);let n=this.parent;for(;n&&!n.is("documentFragment");){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(r=>`${r[0]}="${r[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const r of this.getChildren())t.push(r._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const r=function(a,d){return typeof d=="string"?[new Zt(a,d)]:(We(d)||(d=[d]),Array.from(d).map(h=>typeof h=="string"?new Zt(a,h):h instanceof _s?new Zt(a,h.data):h))}(this.document,t);for(const a of r)a.parent!==null&&a._remove(),a.parent=this,a.document=this.document,this._children.splice(e,0,a),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){const n=String(t);this._fireChange("attributes",this),e=="class"?w0(this._classes,n):e=="style"?this._styles.setTo(n):this._attrs.set(e,n)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of St(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of St(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),typeof e!="string"?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of St(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function w0(o,e){const t=e.split(/\s+/);o.clear(),t.forEach(n=>o.add(n))}zo.prototype.is=function(o,e){return e?e===this.name&&(o==="element"||o==="view:element"):o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Id extends zo{constructor(e,t,n,r){super(e,t,n,r),this.getFillerOffset=b0}}function b0(){const o=[...this.getChildren()],e=o[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of o)if(!t.is("uiElement"))return null;return this.childCount}Id.prototype.is=function(o,e){return e?e===this.name&&(o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class ih extends ot(Id){constructor(e,t,n,r){super(e,t,n,r),this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",a=>a&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}destroy(){this.stopListening()}}ih.prototype.is=function(o,e){return e?e===this.name&&(o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};const _0=Symbol("rootName");class v0 extends ih{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(_0)}set rootName(e){this._setCustomProperty(_0,e)}set _name(e){this.name=e}}v0.prototype.is=function(o,e){return e?e===this.name&&(o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Ol{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new G("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new G("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this._position=Te._createAt(e.startPosition):this._position=Te._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(e){let t,n;do n=this.position,t=this.next();while(!t.done&&e(t.value));t.done||(this._position=n)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let r;if(n instanceof Zt){if(e.isAtEnd)return this._position=Te._createAfter(n),this._next();r=n.data[e.offset]}else r=n.getChild(e.offset);if(r instanceof zo)return this.shallow?e.offset++:e=new Te(r,0),this._position=e,this._formatReturnValue("elementStart",r,t,e,1);if(r instanceof Zt){if(this.singleCharacters)return e=new Te(r,0),this._position=e,this._next();{let a,d=r.data.length;return r==this._boundaryEndParent?(d=this.boundaries.end.offset,a=new _s(r,0,d),e=Te._createAfter(a)):(a=new _s(r,0,r.data.length),e.offset++),this._position=e,this._formatReturnValue("text",a,t,e,d)}}if(typeof r=="string"){let a;this.singleCharacters?a=1:a=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const d=new _s(n,e.offset,a);return e.offset+=a,this._position=e,this._formatReturnValue("text",d,t,e,a)}return e=Te._createAfter(n),this._position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let r;if(n instanceof Zt){if(e.isAtStart)return this._position=Te._createBefore(n),this._previous();r=n.data[e.offset-1]}else r=n.getChild(e.offset-1);if(r instanceof zo)return this.shallow?(e.offset--,this._position=e,this._formatReturnValue("elementStart",r,t,e,1)):(e=new Te(r,r.childCount),this._position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",r,t,e));if(r instanceof Zt){if(this.singleCharacters)return e=new Te(r,r.data.length),this._position=e,this._previous();{let a,d=r.data.length;if(r==this._boundaryStartParent){const h=this.boundaries.start.offset;a=new _s(r,h,r.data.length-h),d=a.data.length,e=Te._createBefore(a)}else a=new _s(r,0,r.data.length),e.offset--;return this._position=e,this._formatReturnValue("text",a,t,e,d)}}if(typeof r=="string"){let a;if(this.singleCharacters)a=1;else{const h=n===this._boundaryStartParent?this.boundaries.start.offset:0;a=e.offset-h}e.offset-=a;const d=new _s(n,e.offset,a);return this._position=e,this._formatReturnValue("text",d,t,e,a)}return e=Te._createBefore(n),this._position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,r,a){return t instanceof _s&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=Te._createAfter(t.textNode):(r=Te._createAfter(t.textNode),this._position=r)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=Te._createBefore(t.textNode):(r=Te._createBefore(t.textNode),this._position=r))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:r,length:a}}}}class Te extends Nl{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof ih);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=Te._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new Ol(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let r=0;for(;t[r]==n[r]&&t[r];)r++;return r===0?null:t[r-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const r=Fe(t,n);switch(r){case"prefix":return"before";case"extension":return"after";default:return t[r]<n[r]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new Ol(e)}clone(){return new Te(this.parent,this.offset)}static _createAt(e,t){if(e instanceof Te)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new G("view-createpositionat-offset-required",n)}return new Te(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new Te(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new G("view-position-after-root",e,{root:e});return new Te(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new Te(e.textNode,e.offsetInText);if(!e.parent)throw new G("view-position-before-root",e,{root:e});return new Te(e.parent,e.index)}}Te.prototype.is=function(o){return o==="position"||o==="view:position"};class tt extends Nl{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new Ol({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(oh,{direction:"backward"}),t=this.end.getLastMatchingPosition(oh);return e.parent.is("$text")&&e.isAtStart&&(e=Te._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=Te._createAfter(t.parent)),new tt(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(oh);if(e.isAfter(this.end)||e.isEqual(this.end))return new tt(e,e);let t=this.end.getLastMatchingPosition(oh,{direction:"backward"});const n=e.nodeAfter,r=t.nodeBefore;return n&&n.is("$text")&&(e=new Te(n,0)),r&&r.is("$text")&&(t=new Te(r,r.data.length)),new tt(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),r=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&r}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new tt(this.start,e.start)),this.containsPosition(e.end)&&t.push(new tt(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new tt(t,n)}return null}getWalker(e={}){return e.boundaries=this,new Ol(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new tt(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Ol(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new Ol(e);yield t.position;for(const n of t)yield n.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,r){return new this(new Te(e,t),new Te(n,r))}static _createFromPositionAndShift(e,t){const n=e,r=e.getShiftedBy(t);return t>0?new this(n,r):new this(r,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(Te._createBefore(e),t)}}function oh(o){return!(!o.item.is("attributeElement")&&!o.item.is("uiElement"))}tt.prototype.is=function(o){return o==="range"||o==="view:range"};class ys extends ge(Nl){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const r of e._ranges)if(t.isEqual(r)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=Oe(this.getRanges());if(t!=Oe(e.getRanges()))return!1;if(t==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let r=!1;for(let a of e.getRanges())if(a=a.getTrimmed(),n.start.isEqual(a.start)&&n.end.isEqual(a.end)){r=!0;break}if(!r)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,n,r]=e;if(typeof n=="object"&&(r=n,n=void 0),t===null)this._setRanges([]),this._setFakeOptions(r);else if(t instanceof ys||t instanceof $p)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof tt)this._setRanges([t],r&&r.backward),this._setFakeOptions(r);else if(t instanceof Te)this._setRanges([new tt(t)]),this._setFakeOptions(r);else if(t instanceof Ll){const a=!!r&&!!r.backward;let d;if(n===void 0)throw new G("view-selection-setto-required-second-parameter",this);d=n=="in"?tt._createIn(t):n=="on"?tt._createOn(t):new tt(Te._createAt(t,n)),this._setRanges([d],a),this._setFakeOptions(r)}else{if(!We(t))throw new G("view-selection-setto-not-selectable",this);this._setRanges(t,r&&r.backward),this._setFakeOptions(r)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new G("view-selection-setfocus-no-ranges",this);const n=Te._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const r=this.anchor;this._ranges.pop(),n.compareWith(r)=="before"?this._addRange(new tt(n,r),!0):this._addRange(new tt(r,n)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof tt))throw new G("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new G("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new tt(e.start,e.end))}}ys.prototype.is=function(o){return o==="selection"||o==="view:selection"};class $p extends ge(Nl){constructor(...e){super(),this._selection=new ys,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}$p.prototype.is=function(o){return o==="selection"||o=="documentSelection"||o=="view:selection"||o=="view:documentSelection"};class yc extends V{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const Jp=Symbol("bubbling contexts");function Xp(o){return class extends o{fire(e,...t){try{const n=e instanceof V?e:new V(this,e),r=em(this);if(!r.size)return;if(Pd(n,"capturing",this),Ac(r,"$capture",n,...t))return n.return;const a=n.startRange||this.selection.getFirstRange(),d=a?a.getContainedElement():null,h=!!d&&!!y0(r,d);let m=d||function(g){if(!g)return null;const w=g.start.parent,y=g.end.parent,E=w.getPath(),I=y.getPath();return E.length>I.length?w:y}(a);if(Pd(n,"atTarget",m),!h){if(Ac(r,"$text",n,...t))return n.return;Pd(n,"bubbling",m)}for(;m;){if(m.is("rootElement")){if(Ac(r,"$root",n,...t))return n.return}else if(m.is("element")&&Ac(r,m.name,n,...t))return n.return;if(Ac(r,m,n,...t))return n.return;m=m.parent,Pd(n,"bubbling",m)}return Pd(n,"bubbling",this),Ac(r,"$document",n,...t),n.return}catch(n){G.rethrowUnexpectedError(n,this)}}_addEventListener(e,t,n){const r=St(n.context||"$document"),a=em(this);for(const d of r){let h=a.get(d);h||(h=new(ge()),a.set(d,h)),this.listenTo(h,e,t,n)}}_removeEventListener(e,t){const n=em(this);for(const r of n.values())this.stopListening(r,e,t)}}}{const o=Xp(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{Xp[e]=o.prototype[e]})}function Pd(o,e,t){o instanceof yc&&(o._eventPhase=e,o._currentTarget=t)}function Ac(o,e,t,...n){const r=typeof e=="string"?o.get(e):y0(o,e);return!!r&&(r.fire(t,...n),t.stop.called)}function y0(o,e){for(const[t,n]of o)if(typeof t=="function"&&t(e))return n;return null}function em(o){return o[Jp]||(o[Jp]=new Map),o[Jp]}class rh extends Xp(ot()){constructor(e){super(),this._postFixers=new Set,this.selection=new $p,this.roots=new co({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}class zl extends zo{constructor(e,t,n,r){super(e,t,n,r),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=cT}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new G("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function cT(){if(tm(this))return null;let o=this.parent;for(;o&&o.is("attributeElement");){if(tm(o)>1)return null;o=o.parent}return!o||tm(o)>1?null:this.childCount}function tm(o){return Array.from(o.getChildren()).filter(e=>!e.is("uiElement")).length}zl.DEFAULT_PRIORITY=10,zl.prototype.is=function(o,e){return e?e===this.name&&(o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"):o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class nm extends zo{constructor(e,t,n,r){super(e,t,n,r),this.getFillerOffset=dT}_insertChild(e,t){if(t&&(t instanceof Ll||Array.from(t).length>0))throw new G("view-emptyelement-cannot-add",[this,t]);return 0}}function dT(){return null}nm.prototype.is=function(o,e){return e?e===this.name&&(o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"):o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class sh extends zo{constructor(e,t,n,r){super(e,t,n,r),this.getFillerOffset=hT}_insertChild(e,t){if(t&&(t instanceof Ll||Array.from(t).length>0))throw new G("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}function uT(o){o.document.on("arrowKey",(e,t)=>function(n,r,a){if(r.keyCode==ye.arrowright){const d=r.domTarget.ownerDocument.defaultView.getSelection(),h=d.rangeCount==1&&d.getRangeAt(0).collapsed;if(h||r.shiftKey){const m=d.focusNode,g=d.focusOffset,w=a.domPositionToView(m,g);if(w===null)return;let y=!1;const E=w.getLastMatchingPosition(I=>(I.item.is("uiElement")&&(y=!0),!(!I.item.is("uiElement")&&!I.item.is("attributeElement"))));if(y){const I=a.viewPositionToDom(E);h?d.collapse(I.parent,I.offset):d.extend(I.parent,I.offset)}}}}(0,t,o.domConverter),{priority:"low"})}function hT(){return null}sh.prototype.is=function(o,e){return e?e===this.name&&(o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"):o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class im extends zo{constructor(e,t,n,r){super(e,t,n,r),this.getFillerOffset=fT}_insertChild(e,t){if(t&&(t instanceof Ll||Array.from(t).length>0))throw new G("view-rawelement-cannot-add",[this,t]);return 0}render(e,t){}}function fT(){return null}im.prototype.is=function(o,e){return e?e===this.name&&(o==="rawElement"||o==="view:rawElement"||o==="element"||o==="view:element"):o==="rawElement"||o==="view:rawElement"||o===this.name||o==="view:"+this.name||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class jl extends ge(Nl){constructor(e,t){super(),this._children=[],this._customProperties=new Map,this.document=e,t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const r=function(a,d){return typeof d=="string"?[new Zt(a,d)]:(We(d)||(d=[d]),Array.from(d).map(h=>typeof h=="string"?new Zt(a,h):h instanceof _s?new Zt(a,h.data):h))}(this.document,t);for(const a of r)a.parent!==null&&a._remove(),a.parent=this,this._children.splice(e,0,a),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}jl.prototype.is=function(o){return o==="documentFragment"||o==="view:documentFragment"};class A0{constructor(e){this._cloneGroups=new Map,this._slotFactory=null,this.document=e}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createDocumentFragment(e){return new jl(this.document,e)}createText(e){return new Zt(this.document,e)}createAttributeElement(e,t,n={}){const r=new zl(this.document,e,t);return typeof n.priority=="number"&&(r._priority=n.priority),n.id&&(r._id=n.id),n.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),r}createContainerElement(e,t,n={},r={}){let a=null;nn(n)?r=n:a=n;const d=new Id(this.document,e,t,a);return r.renderUnsafeAttributes&&d._unsafeAttributesToRender.push(...r.renderUnsafeAttributes),d}createEditableElement(e,t,n={}){const r=new ih(this.document,e,t);return n.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),r}createEmptyElement(e,t,n={}){const r=new nm(this.document,e,t);return n.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),r}createUIElement(e,t,n){const r=new sh(this.document,e,t);return n&&(r.render=n),r}createRawElement(e,t,n,r={}){const a=new im(this.document,e,t);return n&&(a.render=n),r.renderUnsafeAttributes&&a._unsafeAttributesToRender.push(...r.renderUnsafeAttributes),a}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){nn(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof Te?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new G("view-writer-break-non-container-element",this.document);if(!t.parent)throw new G("view-writer-break-root",this.document);if(e.isAtStart)return Te._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(Te._createAfter(t),n);const r=new tt(e,Te._createAt(t,"end")),a=new Te(n,0);this.move(r,a)}return Te._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const d=n.parent,h=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new Te(d,h))}const r=n.getChild(t-1),a=n.getChild(t);if(!r||!a)return e;if(r.is("$text")&&a.is("$text"))return x0(r,a);if(r.is("attributeElement")&&a.is("attributeElement")&&r.isSimilar(a)){const d=r.childCount;return r._appendChild(a.getChildren()),a._remove(),this._removeFromClonedElementsGroup(a),this.mergeAttributes(new Te(r,d))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is("containerElement")&&n.is("containerElement")))throw new G("view-writer-merge-containers-invalid-position",this.document);const r=t.getChild(t.childCount-1),a=r instanceof Zt?Te._createAt(r,"end"):Te._createAt(t,"end");return this.move(tt._createIn(n),Te._createAt(t,"end")),this.remove(tt._createOn(n)),a}insert(e,t){E0(t=We(t)?[...t]:[t],this.document);const n=t.reduce((d,h)=>{const m=d[d.length-1],g=!h.is("uiElement");return m&&m.breakAttributes==g?m.nodes.push(h):d.push({breakAttributes:g,nodes:[h]}),d},[]);let r=null,a=e;for(const{nodes:d,breakAttributes:h}of n){const m=this._insertNodes(a,d,h);r||(r=m.start),a=m.end}return r?new tt(r,a):new tt(e)}remove(e){const t=e instanceof tt?e:tt._createOn(e);if(Nd(t,this.document),t.isCollapsed)return new jl(this.document);const{start:n,end:r}=this._breakAttributesRange(t,!0),a=n.parent,d=r.offset-n.offset,h=a._removeChildren(n.offset,d);for(const g of h)this._removeFromClonedElementsGroup(g);const m=this.mergeAttributes(n);return t.start=m,t.end=m.clone(),new jl(this.document,h)}clear(e,t){Nd(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const r of n){const a=r.item;let d;if(a.is("element")&&t.isSimilar(a))d=tt._createOn(a);else if(!r.nextPosition.isAfter(e.start)&&a.is("$textProxy")){const h=a.getAncestors().find(m=>m.is("element")&&t.isSimilar(m));h&&(d=tt._createIn(h))}d&&(d.end.isAfter(e.end)&&(d.end=e.end),d.start.isBefore(e.start)&&(d.start=e.start),this.remove(d))}}move(e,t){let n;if(t.isAfter(e.end)){const r=(t=this._breakAttributes(t,!0)).parent,a=r.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=r.childCount-a}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof zl))throw new G("view-writer-wrap-invalid-attribute",this.document);if(Nd(e,this.document),e.isCollapsed){let r=e.start;r.parent.is("element")&&(n=r.parent,!Array.from(n.getChildren()).some(d=>!d.is("uiElement")))&&(r=r.getLastMatchingPosition(d=>d.item.is("uiElement"))),r=this._wrapPosition(r,t);const a=this.document.selection;return a.isCollapsed&&a.getFirstPosition().isEqual(e.start)&&this.setSelection(r),new tt(r)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof zl))throw new G("view-writer-unwrap-invalid-attribute",this.document);if(Nd(e,this.document),e.isCollapsed)return e;const{start:n,end:r}=this._breakAttributesRange(e,!0),a=n.parent,d=this._unwrapChildren(a,n.offset,r.offset,t),h=this.mergeAttributes(d.start);h.isEqual(d.start)||d.end.offset--;const m=this.mergeAttributes(d.end);return new tt(h,m)}rename(e,t){const n=new Id(this.document,e,t.getAttributes());return this.insert(Te._createAfter(t),n),this.move(tt._createIn(t),Te._createAt(n,0)),this.remove(tt._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return Te._createAt(e,t)}createPositionAfter(e){return Te._createAfter(e)}createPositionBefore(e){return Te._createBefore(e)}createRange(e,t){return new tt(e,t)}createRangeOn(e){return tt._createOn(e)}createRangeIn(e){return tt._createIn(e)}createSelection(...e){return new ys(...e)}createSlot(e="children"){if(!this._slotFactory)throw new G("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let r,a;if(r=n?om(e):e.parent.is("$text")?e.parent.parent:e.parent,!r)throw new G("view-writer-invalid-position-container",this.document);a=n?this._breakAttributes(e,!0):e.parent.is("$text")?rm(e):e;const d=r._insertChild(a.offset,t);for(const w of t)this._addToClonedElementsGroup(w);const h=a.getShiftedBy(d),m=this.mergeAttributes(a);m.isEqual(a)||h.offset--;const g=this.mergeAttributes(h);return new tt(m,g)}_wrapChildren(e,t,n,r){let a=t;const d=[];for(;a<n;){const m=e.getChild(a),g=m.is("$text"),w=m.is("attributeElement");if(w&&this._wrapAttributeElement(r,m))d.push(new Te(e,a));else if(g||!w||pT(r,m)){const y=r._clone();m._remove(),y._appendChild(m),e._insertChild(a,y),this._addToClonedElementsGroup(y),d.push(new Te(e,a))}else this._wrapChildren(m,0,m.childCount,r);a++}let h=0;for(const m of d)m.offset-=h,m.offset!=t&&(this.mergeAttributes(m).isEqual(m)||(h++,n--));return tt._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,r){let a=t;const d=[];for(;a<n;){const m=e.getChild(a);if(m.is("attributeElement"))if(m.isSimilar(r)){const g=m.getChildren(),w=m.childCount;m._remove(),e._insertChild(a,g),this._removeFromClonedElementsGroup(m),d.push(new Te(e,a),new Te(e,a+w)),a+=w,n+=w-1}else this._unwrapAttributeElement(r,m)?(d.push(new Te(e,a),new Te(e,a+1)),a++):(this._unwrapChildren(m,0,m.childCount,r),a++);else a++}let h=0;for(const m of d)m.offset-=h,!(m.offset==t||m.offset==n)&&(this.mergeAttributes(m).isEqual(m)||(h++,n--));return tt._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:r}=this._breakAttributesRange(e,!0),a=n.parent,d=this._wrapChildren(a,n.offset,r.offset,t),h=this.mergeAttributes(d.start);h.isEqual(d.start)||d.end.offset--;const m=this.mergeAttributes(d.end);return new tt(h,m)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return C0(e.clone());e.parent.is("$text")&&(e=rm(e));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const r=new tt(e,e.getShiftedBy(1));this.wrap(r,t);const a=new Te(n.parent,n.index);n._remove();const d=a.nodeBefore,h=a.nodeAfter;return d instanceof Zt&&h instanceof Zt?x0(d,h):C0(a)}_wrapAttributeElement(e,t){if(!S0(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!S0(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,r=e.end;if(Nd(e,this.document),e.isCollapsed){const m=this._breakAttributes(e.start,t);return new tt(m,m)}const a=this._breakAttributes(r,t),d=a.parent.childCount,h=this._breakAttributes(n,t);return a.offset+=a.parent.childCount-d,new tt(h,a)}_breakAttributes(e,t=!1){const n=e.offset,r=e.parent;if(e.parent.is("emptyElement"))throw new G("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new G("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new G("view-writer-cannot-break-raw-element",this.document);if(!t&&r.is("$text")&&sm(r.parent)||sm(r))return e.clone();if(r.is("$text"))return this._breakAttributes(rm(e),t);if(n==r.childCount){const a=new Te(r.parent,r.index+1);return this._breakAttributes(a,t)}if(n===0){const a=new Te(r.parent,r.index);return this._breakAttributes(a,t)}{const a=r.index+1,d=r._clone();r.parent._insertChild(a,d),this._addToClonedElementsGroup(d);const h=r.childCount-n,m=r._removeChildren(n,h);d._appendChild(m);const g=new Te(r.parent,a);return this._breakAttributes(g,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const r of e.getChildren())this._addToClonedElementsGroup(r);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const r of e.getChildren())this._removeFromClonedElementsGroup(r);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function om(o){let e=o.parent;for(;!sm(e);){if(!e)return;e=e.parent}return e}function pT(o,e){return o.priority<e.priority||!(o.priority>e.priority)&&o.getIdentity()<e.getIdentity()}function C0(o){const e=o.nodeBefore;if(e&&e.is("$text"))return new Te(e,e.data.length);const t=o.nodeAfter;return t&&t.is("$text")?new Te(t,0):o}function rm(o){if(o.offset==o.parent.data.length)return new Te(o.parent.parent,o.parent.index+1);if(o.offset===0)return new Te(o.parent.parent,o.parent.index);const e=o.parent.data.slice(o.offset);return o.parent._data=o.parent.data.slice(0,o.offset),o.parent.parent._insertChild(o.parent.index+1,new Zt(o.root.document,e)),new Te(o.parent.parent,o.parent.index+1)}function x0(o,e){const t=o.data.length;return o._data+=e.data,e._remove(),new Te(o,t)}const mT=[Zt,zl,Id,nm,im,sh];function E0(o,e){for(const t of o){if(!mT.some(n=>t instanceof n))throw new G("view-writer-insert-invalid-node-type",e);t.is("$text")||E0(t.getChildren(),e)}}function sm(o){return o&&(o.is("containerElement")||o.is("documentFragment"))}function Nd(o,e){const t=om(o.start),n=om(o.end);if(!t||!n||t!==n)throw new G("view-writer-invalid-range-container",e)}function S0(o,e){return o.id===null&&e.id===null}const D0=o=>o.createTextNode(" "),T0=o=>{const e=o.createElement("span");return e.dataset.ckeFiller="true",e.innerText=" ",e},M0=o=>{const e=o.createElement("br");return e.dataset.ckeFiller="true",e},As=7,ah="⁠".repeat(As);function jo(o){return Yt(o)&&o.data.substr(0,As)===ah}function Ld(o){return o.data.length==As&&jo(o)}function I0(o){return jo(o)?o.data.slice(As):o.data}function gT(o,e){if(e.keyCode==ye.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,r=t.getRangeAt(0).startOffset;jo(n)&&r<=As&&t.collapse(n,0)}}}var P0=f(9315),kT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Be()(P0.Z,kT),P0.Z.locals;class wT extends ot(){constructor(e,t){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=e,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),M.isBlink&&!M.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new G("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){if(this.isComposing&&!M.isAndroid)return;let e=null;const t=!(M.isBlink&&!M.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=Te._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),r=n.parent.ownerDocument;jo(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=N0(r,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){if(!this.domConverter.mapViewToDom(e))return;const t=Array.from(this.domConverter.mapViewToDom(e).childNodes),n=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),r=this._diffNodeLists(t,n),a=this._findUpdateActions(r,t,n,bT);if(a.indexOf("update")!==-1){const d={equal:0,insert:0,delete:0};for(const h of a)if(h==="update"){const m=d.equal+d.insert,g=d.equal+d.delete,w=e.getChild(m);!w||w.is("uiElement")||w.is("rawElement")||this._updateElementMappings(w,t[g]),Cd(n[m]),d.equal++}else d[h]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?Te._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&Yt(t.parent)&&jo(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!jo(e))throw new G("view-renderer-filler-was-lost",this);Ld(e)?e.remove():e.data=e.data.substr(As),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(d){if(d.getAttribute("contenteditable")=="false")return!1;const h=d.findAncestor(m=>m.hasAttribute("contenteditable"));return!h||h.getAttribute("contenteditable")=="true"}(t)||n===t.getFillerOffset())return!1;const r=e.nodeBefore,a=e.nodeAfter;return!(r instanceof Zt||a instanceof Zt)&&(!M.isAndroid||!r&&!a)}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e);let r=this.domConverter.viewToDom(e).data;const a=t.inlineFillerPosition;a&&a.parent==e.parent&&a.offset==e.index&&(r=ah+r),L0(n,r)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(a=>a.name),r=e.getAttributeKeys();for(const a of r)this.domConverter.setDomElementAttribute(t,a,e.getAttribute(a),e);for(const a of n)e.hasAttribute(a)||this.domConverter.removeDomElementAttribute(t,a)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;if(M.isAndroid){let y=null;for(const E of Array.from(n.childNodes)){if(y&&Yt(y)&&Yt(E)){n.normalize();break}y=E}}const r=t.inlineFillerPosition,a=n.childNodes,d=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));r&&r.parent===e&&N0(n.ownerDocument,d,r.offset);const h=this._diffNodeLists(a,d),m=this._findUpdateActions(h,a,d,_T);let g=0;const w=new Set;for(const y of m)y==="delete"?(w.add(a[g]),Cd(a[g])):y!=="equal"&&y!=="update"||g++;g=0;for(const y of m)y==="insert"?(He(n,g,d[g]),g++):y==="update"?(L0(a[g],d[g].data),g++):y==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(d[g])),g++);for(const y of w)y.parentNode||this.domConverter.unbindDomElement(y)}_diffNodeLists(e,t){return e=function(n,r){const a=Array.from(n);return a.length==0||!r||a[a.length-1]==r&&a.pop(),a}(e,this._fakeSelectionContainer),Q(e,t,vT.bind(null,this.domConverter))}_findUpdateActions(e,t,n,r){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let a=[],d=[],h=[];const m={equal:0,insert:0,delete:0};for(const g of e)g==="insert"?h.push(n[m.equal+m.insert]):g==="delete"?d.push(t[m.equal+m.delete]):(a=a.concat(Q(d,h,r).map(w=>w==="equal"?"update":w)),a.push("equal"),d=[],h=[]),m[g]++;return a.concat(Q(d,h,r).map(g=>g==="equal"?"update":g))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(M.isBlink&&!M.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&M.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(d){const h=d.createElement("div");return h.className="ck-fake-selection-container",Object.assign(h.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),h.textContent=" ",h}(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const r=t.getSelection(),a=t.createRange();r.removeAllRanges(),a.selectNodeContents(n),r.addRange(a)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),r=this.domConverter.viewPositionToDom(this.selection.focus);t.collapse(n.parent,n.offset),t.extend(r.parent,r.offset),M.isGecko&&function(a,d){const h=a.parent;if(h.nodeType!=Node.ELEMENT_NODE||a.offset!=h.childNodes.length-1)return;const m=h.childNodes[a.offset];m&&m.tagName=="BR"&&d.addRange(d.getRangeAt(0))}(r,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const n=e.activeElement,r=this.domConverter.mapDomToView(n);n&&r&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function N0(o,e,t){const n=e instanceof Array?e:e.childNodes,r=n[t];if(Yt(r))return r.data=ah+r.data,r;{const a=o.createTextNode(ah);return Array.isArray(e)?n.splice(t,0,a):He(e,t,a),a}}function bT(o,e){return Zi(o)&&Zi(e)&&!Yt(o)&&!Yt(e)&&!ut(o)&&!ut(e)&&o.tagName.toLowerCase()===e.tagName.toLowerCase()}function _T(o,e){return Zi(o)&&Zi(e)&&Yt(o)&&Yt(e)}function vT(o,e,t){return e===t||(Yt(e)&&Yt(t)?e.data===t.data:!(!o.isBlockFiller(e)||!o.isBlockFiller(t)))}function L0(o,e){const t=o.data;if(t==e)return;const n=N(t,e);for(const r of n)r.type==="insert"?o.insertData(r.index,r.values.join("")):o.deleteData(r.index,r.howMany)}const yT=M0(Ke.document),AT=D0(Ke.document),CT=T0(Ke.document),lh="data-ck-unsafe-attribute-",B0="data-ck-unsafe-element";class ch{constructor(e,{blockFillerMode:t,renderingMode:n="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new vs,this._encounteredRawContentDomNodes=new WeakSet,this.document=e,this.renderingMode=n,this.blockFillerMode=t||(n==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?Ke.document:Ke.document.implementation.createHTMLDocument("")}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new ys(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of Array.from(e.children))this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const n=new DOMParser().parseFromString(t,"text/html"),r=n.createDocumentFragment(),a=n.body.childNodes;for(;a.length>0;)r.appendChild(a[0]);const d=n.createTreeWalker(r,NodeFilter.SHOW_ELEMENT),h=[];let m;for(;m=d.nextNode();)h.push(m);for(const g of h){for(const y of g.getAttributeNames())this.setDomElementAttribute(g,y,g.getAttribute(y));const w=g.tagName.toLowerCase();this._shouldRenameElement(w)&&(j0(w),g.replaceWith(this._createReplacementDomElement(w,g)))}for(;e.firstChild;)e.firstChild.remove();e.append(r)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}{if(this.mapViewToDom(e))return this.mapViewToDom(e);let n;if(e.is("documentFragment"))n=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(n,e);else{if(e.is("uiElement"))return n=e.name==="$comment"?this._domDocument.createComment(e.getCustomProperty("$rawContent")):e.render(this._domDocument,this),t.bind&&this.bindElements(n,e),n;this._shouldRenameElement(e.name)?(j0(e.name),n=this._createReplacementDomElement(e.name)):n=e.hasAttribute("xmlns")?this._domDocument.createElementNS(e.getAttribute("xmlns"),e.name):this._domDocument.createElement(e.name),e.is("rawElement")&&e.render(n,this),t.bind&&this.bindElements(n,e);for(const r of e.getAttributeKeys())this.setDomElementAttribute(n,r,e.getAttribute(r),e)}if(t.withChildren!==!1)for(const r of this.viewChildrenToDom(e,t))n.appendChild(r);return n}}setDomElementAttribute(e,t,n,r){const a=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||r&&r.shouldRenderUnsafeAttribute(t);a||ce("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),function(d){try{Ke.document.createAttribute(d)}catch{return!1}return!0}(t)?(e.hasAttribute(t)&&!a?e.removeAttribute(t):e.hasAttribute(lh+t)&&a&&e.removeAttribute(lh+t),e.setAttribute(a?t:lh+t,n)):ce("domconverter-invalid-attribute-detected",{domElement:e,key:t,value:n})}removeDomElementAttribute(e,t){t!=B0&&(e.removeAttribute(t),e.removeAttribute(lh+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let r=0;for(const a of e.getChildren()){n===r&&(yield this._getBlockFiller());const d=a.is("element")&&!!a.getCustomProperty("dataPipeline:transparentRendering")&&!gn(a.getAttributes());d&&this.renderingMode=="data"?yield*this.viewChildrenToDom(a,t):(d&&ce("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:a}),yield this.viewToDom(a,t)),r++}n===r&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),r=this._domDocument.createRange();return r.setStart(t.parent,t.offset),r.setEnd(n.parent,n.offset),r}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let r=e.offset;return jo(n)&&(r+=As),{parent:n,offset:r}}{let n,r,a;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;a=n.childNodes[0]}else{const d=e.nodeBefore;if(r=d.is("$text")?this.findCorrespondingDomText(d):this.mapViewToDom(d),!r)return null;n=r.parentNode,a=r.nextSibling}return Yt(a)&&jo(a)?{parent:a,offset:As}:{parent:n,offset:r?fe(r)+1:0}}}domToView(e,t={}){if(this.isBlockFiller(e))return null;const n=this.getHostViewElement(e);if(n)return n;if(ut(e)&&t.skipComments)return null;if(Yt(e)){if(Ld(e))return null;{const r=this._processDataFromDomText(e);return r===""?null:new Zt(this.document,r)}}{if(this.mapDomToView(e))return this.mapDomToView(e);let r;if(this.isDocumentFragment(e))r=new jl(this.document),t.bind&&this.bindDocumentFragments(e,r);else{r=this._createViewElement(e,t),t.bind&&this.bindElements(e,r);const a=e.attributes;if(a)for(let d=a.length,h=0;h<d;h++)r._setAttribute(a[h].name,a[h].value);if(this._isViewElementWithRawContent(r,t)||ut(e)){const d=ut(e)?e.data:e.innerHTML;return r._setCustomProperty("$rawContent",d),this._encounteredRawContentDomNodes.add(e),r}}if(t.withChildren!==!1)for(const a of this.domChildrenToView(e,t))r._appendChild(a);return r}}*domChildrenToView(e,t){for(let n=0;n<e.childNodes.length;n++){const r=e.childNodes[n],a=this.domToView(r,t);a!==null&&(yield a)}}domSelectionToView(e){if(e.rangeCount===1){let r=e.getRangeAt(0).startContainer;Yt(r)&&(r=r.parentNode);const a=this.fakeSelectionToView(r);if(a)return a}const t=this.isDomSelectionBackward(e),n=[];for(let r=0;r<e.rangeCount;r++){const a=e.getRangeAt(r),d=this.domRangeToView(a);d&&n.push(d)}return new ys(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new tt(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,fe(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return Te._createBefore(n);if(Yt(e)){if(Ld(e))return this.domPositionToView(e.parentNode,fe(e));const r=this.findCorrespondingViewText(e);let a=t;return r?(jo(e)&&(a-=As,a=a<0?0:a),new Te(r,a)):null}if(t===0){const r=this.mapDomToView(e);if(r)return new Te(r,0)}else{const r=e.childNodes[t-1];if(Yt(r)&&Ld(r)||r&&this.isBlockFiller(r))return this.domPositionToView(r.parentNode,fe(r));const a=Yt(r)?this.findCorrespondingViewText(r):this.mapDomToView(r);if(a&&a.parent)return new Te(a.parent,a.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(Ld(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const r=this.mapDomToView(n);if(r){const a=r.nextSibling;return a instanceof Zt?a:null}}else{const r=this.mapDomToView(e.parentNode);if(r){const a=r.getChild(0);return a instanceof Zt?a:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:r}=Ke.window,a=[];O0(t,d=>{const{scrollLeft:h,scrollTop:m}=d;a.push([h,m])}),t.focus(),O0(t,d=>{const[h,m]=a.shift();d.scrollLeft=h,d.scrollTop=m}),Ke.window.scrollTo(n,r)}}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(yT):!(e.tagName!=="BR"||!z0(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(CT)||function(t,n){return t.isEqualNode(AT)&&z0(t,n)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=Lt(e);for(t.pop();t.length;){const n=t.pop(),r=this._domToViewMapping.get(n);if(r&&(r.is("uiElement")||r.is("rawElement")))return r}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return D0(this._domDocument);case"markedNbsp":return T0(this._domDocument);case"br":return M0(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(Yt(e)&&jo(e)&&t<As||this.isElement(e)&&jo(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!n||!n.is("uiElement")&&!n.is("rawElement")}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(t=" "+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),r=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&n&&!r||(t=t.substr(0,t.length-1)+" ")}return t.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_processDataFromDomText(e){let t=e.data;if(function(g,w){return Lt(g).some(E=>E.tagName&&w.includes(E.tagName.toLowerCase()))}(e,this.preElements))return I0(e);t=t.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(e,!1),r=this._getTouchingInlineDomNode(e,!0),a=this._checkShouldLeftTrimDomText(e,n),d=this._checkShouldRightTrimDomText(e,r);a&&(t=t.replace(/^ /,"")),d&&(t=t.replace(/ $/,"")),t=I0(new Text(t)),t=t.replace(/ \u00A0/g,"  ");const h=r&&this.isElement(r)&&r.tagName!="BR",m=r&&Yt(r)&&r.data.charAt(0)==" ";return(/( |\u00A0)\u00A0$/.test(t)||!r||h||m)&&(t=t.replace(/\u00A0$/," ")),(a||n&&this.isElement(n)&&n.tagName!="BR")&&(t=t.replace(/^\u00A0/," ")),t}_checkShouldLeftTrimDomText(e,t){return!t||(this.isElement(t)?t.tagName==="BR":!this._encounteredRawContentDomNodes.has(e.previousSibling)&&/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)))}_checkShouldRightTrimDomText(e,t){return!t&&!jo(e)}_getTouchingInlineViewNode(e,t){const n=new Ol({startPosition:t?Te._createAfter(e):Te._createBefore(e),direction:t?"forward":"backward"});for(const r of n){if(r.item.is("element")&&this.inlineObjectElements.includes(r.item.name))return r.item;if(r.item.is("containerElement")||r.item.is("element","br"))return null;if(r.item.is("$textProxy"))return r.item}return null}_getTouchingInlineDomNode(e,t){if(!e.parentNode)return null;const n=t?"firstChild":"lastChild",r=t?"nextSibling":"previousSibling";let a=!0,d=e;do if(!a&&d[n]?d=d[n]:d[r]?(d=d[r],a=!1):(d=d.parentNode,a=!0),!d||this._isBlockElement(d))return null;while(!Yt(d)&&d.tagName!="BR"&&!this._isInlineObjectElement(d));return d}_isBlockElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isInlineObjectElement(e){return this.isElement(e)&&this.inlineObjectElements.includes(e.tagName.toLowerCase())}_createViewElement(e,t){if(ut(e))return new sh(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new zo(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const n=this._domDocument.createElement("span");if(n.setAttribute(B0,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const r of t.getAttributeNames())n.setAttribute(r,t.getAttribute(r))}return n}}function O0(o,e){let t=o;for(;t;)e(t),t=t.parentElement}function z0(o,e){const t=o.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function j0(o){o==="script"&&ce("domconverter-unsafe-script-element-detected"),o==="style"&&ce("domconverter-unsafe-style-element-detected")}class Cs extends Oo(){constructor(e){super(),this._isEnabled=!1,this.view=e,this.document=e.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const R0=g0(function(o,e){Do(e,Ai(e),o)});class Cc{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,R0(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Ua extends Cs{constructor(){super(...arguments),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(n,r)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(r.target)&&this.onDomEvent(r)},{useCapture:this.useCapture})})}stopObserving(e){this.stopListening(e)}fire(e,t,n){this.isEnabled&&this.document.fire(e,new Cc(this.view,t,n))}}class xT extends Ua{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return st(this)}};this.fire(e.type,e,t)}}const am=function(){return At.Date.now()};var ET=/\s/;const ST=function(o){for(var e=o.length;e--&&ET.test(o.charAt(e)););return e};var DT=/^\s+/;const TT=function(o){return o&&o.slice(0,ST(o)+1).replace(DT,"")};var MT=/^[-+]0x[0-9a-f]+$/i,IT=/^0b[01]+$/i,PT=/^0o[0-7]+$/i,NT=parseInt;const F0=function(o){if(typeof o=="number")return o;if(th(o))return NaN;if(ct(o)){var e=typeof o.valueOf=="function"?o.valueOf():o;o=ct(e)?e+"":e}if(typeof o!="string")return o===0?o:+o;o=TT(o);var t=IT.test(o);return t||PT.test(o)?NT(o.slice(2),t?2:8):MT.test(o)?NaN:+o};var LT=Math.max,BT=Math.min;const Bd=function(o,e,t){var n,r,a,d,h,m,g=0,w=!1,y=!1,E=!0;if(typeof o!="function")throw new TypeError("Expected a function");function I(oe){var ke=n,Pe=r;return n=r=void 0,g=oe,d=o.apply(Pe,ke)}function O(oe){var ke=oe-m;return m===void 0||ke>=e||ke<0||y&&oe-g>=a}function z(){var oe=am();if(O(oe))return K(oe);h=setTimeout(z,function(ke){var Pe=e-(ke-m);return y?BT(Pe,a-(ke-g)):Pe}(oe))}function K(oe){return h=void 0,E&&n?I(oe):(n=r=void 0,d)}function $(){var oe=am(),ke=O(oe);if(n=arguments,r=this,m=oe,ke){if(h===void 0)return function(Pe){return g=Pe,h=setTimeout(z,e),w?I(Pe):d}(m);if(y)return clearTimeout(h),h=setTimeout(z,e),I(m)}return h===void 0&&(h=setTimeout(z,e)),d}return e=F0(e)||0,ct(t)&&(w=!!t.leading,a=(y="maxWait"in t)?LT(F0(t.maxWait)||0,e):a,E="trailing"in t?!!t.trailing:E),$.cancel=function(){h!==void 0&&clearTimeout(h),g=0,n=m=r=h=void 0},$.flush=function(){return h===void 0?d:K(am())},$};class OT extends Cs{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=Bd(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new ys(t.getRanges(),{backward:t.isBackward,fake:!1});e!=ye.arrowleft&&e!=ye.arrowup||n.setTo(n.getFirstPosition()),e!=ye.arrowright&&e!=ye.arrowdown||n.setTo(n.getLastPosition());const r={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}const zT=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this},jT=function(o){return this.__data__.has(o)};function dh(o){var e=-1,t=o==null?0:o.length;for(this.__data__=new io;++e<t;)this.add(o[e])}dh.prototype.add=dh.prototype.push=zT,dh.prototype.has=jT;const RT=dh,FT=function(o,e){for(var t=-1,n=o==null?0:o.length;++t<n;)if(e(o[t],t,o))return!0;return!1},VT=function(o,e){return o.has(e)},V0=function(o,e,t,n,r,a){var d=1&t,h=o.length,m=e.length;if(h!=m&&!(d&&m>h))return!1;var g=a.get(o),w=a.get(e);if(g&&w)return g==e&&w==o;var y=-1,E=!0,I=2&t?new RT:void 0;for(a.set(o,e),a.set(e,o);++y<h;){var O=o[y],z=e[y];if(n)var K=d?n(z,O,y,e,o,a):n(O,z,y,o,e,a);if(K!==void 0){if(K)continue;E=!1;break}if(I){if(!FT(e,function($,oe){if(!VT(I,oe)&&(O===$||r(O,$,t,n,a)))return I.push(oe)})){E=!1;break}}else if(O!==z&&!r(O,z,t,n,a)){E=!1;break}}return a.delete(o),a.delete(e),E},UT=function(o){var e=-1,t=Array(o.size);return o.forEach(function(n,r){t[++e]=[r,n]}),t},HT=function(o){var e=-1,t=Array(o.size);return o.forEach(function(n){t[++e]=n}),t};var U0=_n?_n.prototype:void 0,lm=U0?U0.valueOf:void 0;const WT=function(o,e,t,n,r,a,d){switch(t){case"[object DataView]":if(o.byteLength!=e.byteLength||o.byteOffset!=e.byteOffset)return!1;o=o.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(o.byteLength!=e.byteLength||!a(new jr(o),new jr(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return wr(+o,+e);case"[object Error]":return o.name==e.name&&o.message==e.message;case"[object RegExp]":case"[object String]":return o==e+"";case"[object Map]":var h=UT;case"[object Set]":var m=1&n;if(h||(h=HT),o.size!=e.size&&!m)return!1;var g=d.get(o);if(g)return g==e;n|=2,d.set(o,e);var w=V0(h(o),h(e),n,r,a,d);return d.delete(o),w;case"[object Symbol]":if(lm)return lm.call(o)==lm.call(e)}return!1};var ZT=Object.prototype.hasOwnProperty;const qT=function(o,e,t,n,r,a){var d=1&t,h=vn(o),m=h.length;if(m!=vn(e).length&&!d)return!1;for(var g=m;g--;){var w=h[g];if(!(d?w in e:ZT.call(e,w)))return!1}var y=a.get(o),E=a.get(e);if(y&&E)return y==e&&E==o;var I=!0;a.set(o,e),a.set(e,o);for(var O=d;++g<m;){var z=o[w=h[g]],K=e[w];if(n)var $=d?n(K,z,w,e,o,a):n(z,K,w,o,e,a);if(!($===void 0?z===K||r(z,K,t,n,a):$)){I=!1;break}O||(O=w=="constructor")}if(I&&!O){var oe=o.constructor,ke=e.constructor;oe==ke||!("constructor"in o)||!("constructor"in e)||typeof oe=="function"&&oe instanceof oe&&typeof ke=="function"&&ke instanceof ke||(I=!1)}return a.delete(o),a.delete(e),I};var H0="[object Arguments]",W0="[object Array]",uh="[object Object]",Z0=Object.prototype.hasOwnProperty;const GT=function(o,e,t,n,r,a){var d=Kt(o),h=Kt(e),m=d?W0:xi(o),g=h?W0:xi(e),w=(m=m==H0?uh:m)==uh,y=(g=g==H0?uh:g)==uh,E=m==g;if(E&&On(o)){if(!On(e))return!1;d=!0,w=!1}if(E&&!w)return a||(a=new _i),d||Dr(o)?V0(o,e,t,n,r,a):WT(o,e,m,t,n,r,a);if(!(1&t)){var I=w&&Z0.call(o,"__wrapped__"),O=y&&Z0.call(e,"__wrapped__");if(I||O){var z=I?o.value():o,K=O?e.value():e;return a||(a=new _i),r(z,K,t,n,a)}}return!!E&&(a||(a=new _i),qT(o,e,t,n,r,a))},q0=function o(e,t,n,r,a){return e===t||(e==null||t==null||!fn(e)&&!fn(t)?e!=e&&t!=t:GT(e,t,n,r,o,a))},KT=function(o,e,t){var n=(t=typeof t=="function"?t:void 0)?t(o,e):void 0;return n===void 0?q0(o,e,void 0,t):!!n};class G0 extends Cs{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.add(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}stopObserving(e){if(this._domElements.delete(e),this.isEnabled){this._mutationObserver.disconnect();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Set,r=new Set;for(const d of e){const h=t.mapDomToView(d.target);h&&(h.is("uiElement")||h.is("rawElement")||d.type!=="childList"||this._isBogusBrMutation(d)||r.add(h))}for(const d of e){const h=t.mapDomToView(d.target);if((!h||!h.is("uiElement")&&!h.is("rawElement"))&&d.type==="characterData"){const m=t.findCorrespondingViewText(d.target);m&&!r.has(m.parent)?n.add(m):!m&&jo(d.target)&&r.add(t.mapDomToView(d.target.parentNode))}}let a=!1;for(const d of n)a=!0,this.renderer.markToSync("text",d);for(const d of r){const h=t.mapViewToDom(d),m=Array.from(d.getChildren()),g=Array.from(t.domChildrenToView(h,{withChildren:!1}));KT(m,g,YT)||(a=!0,this.renderer.markToSync("children",d))}a&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function YT(o,e){if(!Array.isArray(o))return o===e||!(!o.is("$text")||!e.is("$text"))&&o.data===e.data}class cm extends Ua{constructor(e){super(e),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),e.change(()=>{})},50)}),t.on("blur",(n,r)=>{const a=t.selection.editableElement;a!==null&&a!==r.target||(t.isFocused=!1,this._isFocusChanging=!1,e.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class QT extends Cs{constructor(e){super(e),this.mutationObserver=e.getObserver(G0),this.focusObserver=e.getObserver(cm),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=Bd(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=Bd(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(t)||(this.listenTo(t,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(r,a)=>{this.document.isComposing&&!M.isAndroid||(this._handleSelectionChange(a,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}stopObserving(e){this.stopListening(e)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const r=this.domConverter.domSelectionToView(n);if(r.rangeCount!=0){if(this.view.hasDomSelection=!0,!this.selection.isEqual(r)||!this.domConverter.isDomSelectionCorrect(n))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.focusObserver.flush(),this.selection.isSimilar(r))this.view.forceRender();else{const a={oldSelection:this.selection,newSelection:r,domSelection:n};this.document.fire("selectionChange",a),this._fireSelectionChangeDoneDebounced(a)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class $T extends Ua{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class K0{constructor(e,t={}){this._files=t.cacheFiles?Y0(e):null,this._native=e}get files(){return this._files||(this._files=Y0(this._native)),this._files}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}setDragImage(e,t,n){this._native.setDragImage(e,t,n)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function Y0(o){const e=Array.from(o.files||[]),t=Array.from(o.items||[]);return e.length?e:t.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class JT extends Ua{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(e){const t=e.getTargetRanges(),n=this.view,r=n.document;let a=null,d=null,h=[];if(e.dataTransfer&&(a=new K0(e.dataTransfer)),e.data!==null?d=e.data:a&&(d=a.getData("text/plain")),r.selection.isFake)h=Array.from(r.selection.getRanges());else if(t.length)h=t.map(m=>n.domConverter.domRangeToView(m));else if(M.isAndroid){const m=e.target.ownerDocument.defaultView.getSelection();h=Array.from(n.domConverter.domSelectionToView(m).getRanges())}if(M.isAndroid&&e.inputType=="insertCompositionText"&&d&&d.endsWith(`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[n.createRange(h[0].end)]});else if(e.inputType=="insertText"&&d&&d.includes(`
`,isColorInherited:!1}),n.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...t?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[t]}]:[],n],on:{dragstart:r.to(a=>a.preventDefault())}}]})}}function jv(o,e,t){return(n,r)=>{const a=n.getVisible();if(!a||n.width<fP||n.height<hP)return vh;let d;d=e.position==="inside"?n.bottom-r.height:n.bottom-r.height/2,d-=e.verticalOffset;const h=t(n,r);if(e.position==="inside"){const m=r.clone().moveTo(h,d);if(m.getIntersectionArea(a)<m.getArea())return vh}else{const m=function(g){let w=g.parentElement;if(!w)return null;for(;w.tagName!="BODY";){const y=w.style.overflowY||Ke.window.getComputedStyle(w).overflowY;if(y==="auto"||y==="scroll")break;if(w=w.parentElement,!w)return null}return w}(o);if(m){const g=new Wt(m);if(a.bottom+r.height/2>g.bottom)return vh}}return{top:d,left:h,name:`position_${e.position}-side_${e.side}`,config:{withArrow:!1}}}}function Rv(o){const e=o.config.get("ui.poweredBy"),t=e&&e.position||"border";return uP({position:t,label:pP,verticalOffset:t==="inside"?5:0,horizontalOffset:5,side:o.locale.contentLanguageDirection==="ltr"?"right":"left"},e)}class kP extends ot(){constructor(e){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[],this.editor=e,this.componentFactory=new nP(e),this.focusTracker=new qi,this.tooltipManager=new _h(e),this.poweredBy=new mP(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(e.editing.view.document,"layoutChanged",()=>this.update()),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null,this.editor.keystrokes.stopListening(e);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const n=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?n():this.once("ready",n)}removeEditableElement(e){const t=this._editableElementsMap.get(e);t&&(this._editableElementsMap.delete(e),this.editor.keystrokes.stopListening(t),this.focusTracker.remove(t),t.ckeditorInstance=null)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const n=e.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let n,r;e.keystrokes.set("Alt+F10",(a,d)=>{const h=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(h)&&!Array.from(t.domRoots.values()).includes(h)&&(n=h);const m=this._getCurrentFocusedToolbarDefinition();m&&r||(r=this._getFocusableCandidateToolbarDefinitions());for(let g=0;g<r.length;g++){const w=r.shift();if(r.push(w),w!==m&&this._focusFocusableCandidateToolbar(w)){m&&m.options.afterBlur&&m.options.afterBlur();break}}d()}),e.keystrokes.set("Esc",(a,d)=>{const h=this._getCurrentFocusedToolbarDefinition();h&&(n?(n.focus(),n=null):e.editing.view.focus(),h.options.afterBlur&&h.options.afterBlur(),d())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:n,options:r}=t;(zt(n.element)||r.beforeFocus)&&e.push(t)}return e.sort((t,n)=>Fv(t)-Fv(n)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:n}}=e;return n&&n(),!!zt(t.element)&&(t.focus(),!0)}}function Fv(o){const{toolbarView:e,options:t}=o;let n=10;return zt(e.element)&&n--,t.isContextual&&n--,n}var Vv=f(9688),wP={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Be()(Vv.Z,wP),Vv.Z.locals;class bP extends mt{constructor(e){super(e),this.body=new f5(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class _P extends bP{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new Kb;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class vP extends mt{constructor(e,t,n){super(e),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const e=this._editingView;function t(n){e.change(r=>{const a=e.document.getRoot(n.name);r.addClass(n.isFocused?"ck-focused":"ck-blurred",a),r.removeClass(n.isFocused?"ck-blurred":"ck-focused",a)})}e.isRenderingInProgress?function n(r){e.once("change:isRenderingInProgress",(a,d,h)=>{h?n(r):t(r)})}(this):t(this)}}class yP extends vP{constructor(e,t,n,r={}){super(e,t,n);const a=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=r.label||(()=>a("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const n=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),n)})}}var Uv=f(8847),AP={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Be()(Uv.Z,AP),Uv.Z.locals;class Rm extends Xu{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class Hv extends ot(){constructor(e,t){super(),t&&R0(this,t),e&&this.set(e)}}var Wv=f(4650),CP={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Be()(Wv.Z,CP),Wv.Z.locals;var Zv=f(7676),xP={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Be()(Zv.Z,xP),Zv.Z.locals;const yh=J("px");class Ah extends Ee{constructor(e){super(e),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const t=this.editor.editing.view,n=t.document.selection.editableElement;return n?t.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new G("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const n=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),n.set(e.view,e),this._viewToStack.set(e.view,n),n===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new G("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new G("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}_createPanelView(){this._view=new fo(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new EP(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,r)=>!r&&n>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,r)=>{if(r<2)return"";const a=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[a,r])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new SP(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,n)=>!n&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:n=!0,singleViewMode:r=!1}){this.view.class=t,this.view.withArrow=n,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),r&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class EP extends mt{constructor(e){super(e);const t=e.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new qi,this.buttonPrevView=this._createButtonView(t("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(t("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",r=>r?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const n=new Jt(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n}}class SP extends mt{constructor(e,t){super(e);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",r=>r?"":"ck-hidden")],style:{top:n.to("top",yh),left:n.to("left",yh),width:n.to("width",yh),height:n.to("height",yh)}},children:this.content}),this.on("change:numberOfPanels",(r,a,d,h)=>{d>h?this._addPanels(d-h):this._removePanels(h-d),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new mt;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:n,height:r}=new Wt(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:n,height:r})}}}var qv=f(5868),DP={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Be()(qv.Z,DP),qv.Z.locals;const Zd=J("px");class TP extends mt{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheLimiter",!1),this.set("_hasViewportTopOffset",!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new Fr({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",n=>n?"block":"none"),height:t.to("isSticky",n=>n?Zd(this._panelRect.height):null)}}}).render(),this._contentPanel=new Fr({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",n=>n?Zd(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_hasViewportTopOffset",n=>n?Zd(this.viewportTopOffset):null),bottom:t.to("_isStickyToTheLimiter",n=>n?Zd(this.limiterBottomOffset):null),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(Ke.window,"scroll",()=>{this._checkIfShouldBeSticky()}),this.listenTo(this,"change:isActive",()=>{this._checkIfShouldBeSticky()})}_checkIfShouldBeSticky(){const e=this._panelRect=this._contentPanel.getBoundingClientRect();let t;this.limiterElement?(t=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&t.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<t.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=t.bottom<e.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:Zd(-Ke.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}var Gv=f(9695),MP={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Be()(Gv.Z,MP),Gv.Z.locals;class IP extends kP{constructor(e,t){super(e),this.view=t,this._toolbarConfig=e0(e.config.get("toolbar")),this._elementReplacer=new xe}get element(){return this.view.element}init(e){const t=this.editor,n=this.view,r=t.editing.view,a=n.editable,d=r.document.getRoot();a.name=d.rootName,n.render();const h=a.element;this.setEditableElement(a.name,h),n.editable.bind("isFocused").to(this.focusTracker),r.attachDomRoot(h),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:t})=>t||0),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){const e=this.editor,t=e.editing.view,n=t.document.getRoot(),r=e.sourceElement;let a;const d=e.config.get("placeholder");d&&(a=typeof d=="string"?d:d[this.view.editable.name]),!a&&r&&r.tagName.toLowerCase()==="textarea"&&(a=r.getAttribute("placeholder")),a&&a0({view:t,element:n,text:a,isDirectHost:!1,keepOnFocus:!0})}}var Kv=f(3143),PP={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Be()(Kv.Z,PP),Kv.Z.locals;class NP extends _P{constructor(e,t,n={}){super(e),this.stickyPanel=new TP(e),this.toolbar=new Cm(e,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new yP(e,t)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class Yv{constructor(e){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=t=>{const n="error"in t?t.error:t.reason;n instanceof Error&&this._handleError(n,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,t){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)}off(e,t){this._listeners[e]=this._listeners[e].filter(n=>n!==t)}_fire(e,...t){const n=this._listeners[e]||[];for(const r of n)r.apply(this,[null,...t])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,t){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:t instanceof ErrorEvent?t.filename:void 0,lineno:t instanceof ErrorEvent?t.lineno:void 0,colno:t instanceof ErrorEvent?t.colno:void 0,date:this._now()});const n=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:n}),n?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function Fm(o,e=new Set){const t=[o],n=new Set;let r=0;for(;t.length>r;){const a=t[r++];if(!n.has(a)&&LP(a)&&!e.has(a))if(n.add(a),Symbol.iterator in a)try{for(const d of a)t.push(d)}catch{}else for(const d in a)d!=="defaultValue"&&t.push(a[d])}return n}function LP(o){const e=Object.prototype.toString.call(o),t=typeof o;return!(t==="number"||t==="boolean"||t==="string"||t==="symbol"||t==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||o==null||o._watchdogExcluded||o instanceof EventTarget||o instanceof Event)}function Qv(o,e,t=new Set){if(o===e&&typeof(n=o)=="object"&&n!==null)return!0;var n;const r=Fm(o,t),a=Fm(e,t);for(const d of r)if(a.has(d))return!0;return!1}class $v extends Yv{constructor(e,t={}){super(t),this._editor=null,this._throttledSave=jm(this._save.bind(this),typeof t.saveInterval=="number"?t.saveInterval:5e3),e&&(this._creator=(n,r)=>e.create(n,r)),this._destructor=n=>n.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{if(typeof this._elementOrData=="string")return this.create(this._data,this._config,this._config.context);{const e=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,e,e.context)}}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,t=this._config,n){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=e,this._config=this._cloneEditorConfiguration(t)||{},this._config.context=n,this._creator(e,this._config))).then(r=>{this._editor=r,r.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=r.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=e}catch(t){console.error(t,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e={};for(const t of this._editor.model.document.getRootNames())e[t]=this._editor.data.get({rootName:t});return e}_isErrorComingFromThisItem(e){return Qv(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return Qn(e,(t,n)=>on(t)||n==="context"?t:void 0)}}const qd=Symbol("MainQueueId");class BP{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,t){const n=e===qd;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const r=(n?Promise.all(this._queues.values()):Promise.all([this._queues.get(qd),this._queues.get(e)])).then(t),a=r.catch(()=>{});return this._queues.set(e,a),r.finally(()=>{this._activeActions--,this._queues.get(e)===a&&this._activeActions===0&&this._onEmptyCallbacks.forEach(d=>d())})}}function Jv(o){return Array.isArray(o)?o:[o]}class Ch extends kh(Am(LI)){constructor(e,t={}){if(!xh(e)&&t.initialData!==void 0)throw new G("editor-create-initial-data",null);super(t),this.config.get("initialData")===void 0&&this.config.set("initialData",function(a){return xh(a)?(d=a,d instanceof HTMLTextAreaElement?d.value:d.innerHTML):a;var d}(e)),xh(e)&&(this.sourceElement=e),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),r=new NP(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n});this.ui=new IP(this,r),function(a){if(!oi(a.updateSourceElement))throw new G("attachtoform-missing-elementapi-interface",a);const d=a.sourceElement;if(function(h){return!!h&&h.tagName.toLowerCase()==="textarea"}(d)&&d.form){let h;const m=d.form,g=()=>a.updateSourceElement();oi(m.submit)&&(h=m.submit,m.submit=()=>{g(),h.apply(m)}),m.addEventListener("submit",g),a.on("destroy",()=>{m.removeEventListener("submit",g),h&&(m.submit=h)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(n=>{const r=new this(e,t);n(r.initPlugins().then(()=>r.ui.init(xh(e)?e:null)).then(()=>r.data.init(r.config.get("initialData"))).then(()=>r.fire("ready")).then(()=>r))})}}function xh(o){return on(o)}Ch.Context=r0,Ch.EditorWatchdog=$v,Ch.ContextWatchdog=class extends Yv{constructor(o,e={}){super(e),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new BP,this._watchdogConfig=e,this._creator=t=>o.create(t),this._destructor=t=>t.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(o){this._creator=o}setDestructor(o){this._destructor=o}get context(){return this._context}create(o={}){return this._actionQueues.enqueue(qd,()=>(this._contextConfig=o,this._create()))}getItem(o){return this._getWatchdog(o)._item}getItemState(o){return this._getWatchdog(o).state}add(o){const e=Jv(o);return Promise.all(e.map(t=>this._actionQueues.enqueue(t.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let n;if(this._watchdogs.has(t.id))throw new Error(`Item with the given id is already added: '${t.id}'.`);if(t.type==="editor")return n=new $v(null,this._watchdogConfig),n.setCreator(t.creator),n._setExcludedProperties(this._contextProps),t.destructor&&n.setDestructor(t.destructor),this._watchdogs.set(t.id,n),n.on("error",(r,{error:a,causesRestart:d})=>{this._fire("itemError",{itemId:t.id,error:a}),d&&this._actionQueues.enqueue(t.id,()=>new Promise(h=>{const m=()=>{n.off("restart",m),this._fire("itemRestart",{itemId:t.id}),h()};n.on("restart",m)}))}),n.create(t.sourceElementOrData,t.config,this._context);throw new Error(`Not supported item type: '${t.type}'.`)})))}remove(o){const e=Jv(o);return Promise.all(e.map(t=>this._actionQueues.enqueue(t,()=>{const n=this._getWatchdog(t);return this._watchdogs.delete(t),n.destroy()})))}destroy(){return this._actionQueues.enqueue(qd,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(qd,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(o=>{console.error("An error happened during destroying the context or items.",o)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(o=>(this._context=o,this._contextProps=Fm(this._context),Promise.all(Array.from(this._watchdogs.values()).map(e=>(e._setExcludedProperties(this._contextProps),e.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const o=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(e=>e.destroy())).then(()=>this._destructor(o))})}_getWatchdog(o){const e=this._watchdogs.get(o);if(!e)throw new Error(`Item with the given id was not registered: ${o}.`);return e}_isErrorComingFromThisItem(o){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(o))return!1;return Qv(this._context,o.context)}};class Vm extends Ua{constructor(e){super(e),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const t=this.document;function n(r){return(a,d)=>{d.preventDefault();const h=d.dropRange?[d.dropRange]:null,m=new V(t,r);t.fire(m,{dataTransfer:d.dataTransfer,method:a.name,targetRanges:h,target:d.target,domEvent:d.domEvent}),m.stop.called&&d.stopPropagation()}}this.listenTo(t,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",n("dragging"),{priority:"low"})}onDomEvent(e){const t="clipboardData"in e?e.clipboardData:e.dataTransfer,n=e.type=="drop"||e.type=="paste",r={dataTransfer:new K0(t,{cacheFiles:n})};e.type!="drop"&&e.type!="dragover"||(r.dropRange=function(a,d){const h=d.target.ownerDocument,m=d.clientX,g=d.clientY;let w;return h.caretRangeFromPoint&&h.caretRangeFromPoint(m,g)?w=h.caretRangeFromPoint(m,g):d.rangeParent&&(w=h.createRange(),w.setStart(d.rangeParent,d.rangeOffset),w.collapse(!0)),w?a.domConverter.domRangeToView(w):null}(this.view,e)),this.fire(e.type,e,r)}}const Xv=["figcaption","li"];function ey(o){let e="";if(o.is("$text")||o.is("$textProxy"))e=o.data;else if(o.is("element","img")&&o.hasAttribute("alt"))e=o.getAttribute("alt");else if(o.is("element","br"))e=`
`;else{let t=null;for(const n of o.getChildren()){const r=ey(n);t&&(t.is("containerElement")||n.is("containerElement"))&&(Xv.includes(t.name)||Xv.includes(n.name)?e+=`
`:e+=`

 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */Xf.exports;(function(i,s){(function(l,u){i.exports=u(ne)})(self,l=>(()=>{var u={703:(A,v,C)=>{var B=C(414);function M(){}function D(){}D.resetWarningCache=M,A.exports=function(){function N(Q,q,V,Z,te,se){if(se!==B){var pe=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw pe.name="Invariant Violation",pe}}function j(){return N}N.isRequired=N;var H={array:N,bigint:N,bool:N,func:N,number:N,object:N,string:N,symbol:N,any:N,arrayOf:j,element:N,elementType:N,instanceOf:j,node:N,objectOf:j,oneOf:j,oneOfType:j,shape:j,exact:j,checkPropTypes:D,resetWarningCache:M};return H.PropTypes=H,H}},697:(A,v,C)=>{A.exports=C(703)()},414:A=>{A.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:A=>{A.exports=l}},f={};function k(A){var v=f[A];if(v!==void 0)return v.exports;var C=f[A]={exports:{}};return u[A](C,C.exports,k),C.exports}k.n=A=>{var v=A&&A.__esModule?()=>A.default:()=>A;return k.d(v,{a:v}),v},k.d=(A,v)=>{for(var C in v)k.o(v,C)&&!k.o(A,C)&&Object.defineProperty(A,C,{enumerable:!0,get:v[C]})},k.o=(A,v)=>Object.prototype.hasOwnProperty.call(A,v),k.r=A=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})};var b={};return(()=>{k.r(b),k.d(b,{CKEditor:()=>nr,CKEditorContext:()=>Kn});var A=k(787),v=k.n(A),C=k(697),B=k.n(C);const M=new Array(256).fill("").map((F,U)=>("0"+U.toString(16)).slice(-2));class D{constructor(U){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof U.crashNumberLimit=="number"?U.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof U.minimumNonErrorTimePeriod=="number"?U.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=X=>{const ae="error"in X?X.error:X.reason;ae instanceof Error&&this._handleError(ae,X)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(U,X){this._listeners[U]||(this._listeners[U]=[]),this._listeners[U].push(X)}off(U,X){this._listeners[U]=this._listeners[U].filter(ae=>ae!==X)}_fire(U,...X){const ae=this._listeners[U]||[];for(const ze of ae)ze.apply(this,[null,...X])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(U,X){if(this._shouldReactToError(U)){this.crashes.push({message:U.message,stack:U.stack,filename:X instanceof ErrorEvent?X.filename:void 0,lineno:X instanceof ErrorEvent?X.lineno:void 0,colno:X instanceof ErrorEvent?X.colno:void 0,date:this._now()});const ae=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:U,causesRestart:ae}),ae?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(U){return U.is&&U.is("CKEditorError")&&U.context!==void 0&&U.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(U)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function N(F,U=new Set){const X=[F],ae=new Set;let ze=0;for(;X.length>ze;){const Ve=X[ze++];if(!ae.has(Ve)&&j(Ve)&&!U.has(Ve))if(ae.add(Ve),Symbol.iterator in Ve)try{for(const et of Ve)X.push(et)}catch{}else for(const et in Ve)et!=="defaultValue"&&X.push(Ve[et])}return ae}function j(F){const U=Object.prototype.toString.call(F),X=typeof F;return!(X==="number"||X==="boolean"||X==="string"||X==="symbol"||X==="function"||U==="[object Date]"||U==="[object RegExp]"||U==="[object Module]"||F==null||F._watchdogExcluded||F instanceof EventTarget||F instanceof Event)}function H(F,U,X=new Set){if(F===U&&typeof(ae=F)=="object"&&ae!==null)return!0;var ae;const ze=N(F,X),Ve=N(U,X);for(const et of ze)if(Ve.has(et))return!0;return!1}const Q=function(F){var U=typeof F;return F!=null&&(U=="object"||U=="function")},q=typeof En=="object"&&En&&En.Object===Object&&En;var V=typeof self=="object"&&self&&self.Object===Object&&self;const Z=q||V||Function("return this")(),te=function(){return Z.Date.now()};var se=/\s/;const pe=function(F){for(var U=F.length;U--&&se.test(F.charAt(U)););return U};var le=/^\s+/;const G=function(F){return F&&F.slice(0,pe(F)+1).replace(le,"")},ce=Z.Symbol;var be=Object.prototype,Ie=be.hasOwnProperty,Me=be.toString,Ne=ce?ce.toStringTag:void 0;const Ye=function(F){var U=Ie.call(F,Ne),X=F[Ne];try{F[Ne]=void 0;var ae=!0}catch{}var ze=Me.call(F);return ae&&(U?F[Ne]=X:delete F[Ne]),ze};var vt=Object.prototype.toString;const it=function(F){return vt.call(F)};var bt=ce?ce.toStringTag:void 0;const de=function(F){return F==null?F===void 0?"[object Undefined]":"[object Null]":bt&&bt in Object(F)?Ye(F):it(F)},Le=function(F){return F!=null&&typeof F=="object"},ge=function(F){return typeof F=="symbol"||Le(F)&&de(F)=="[object Symbol]"};var Ze=/^[-+]0x[0-9a-f]+$/i,Xe=/^0b[01]+$/i,It=/^0o[0-7]+$/i,dt=parseInt;const rt=function(F){if(typeof F=="number")return F;if(ge(F))return NaN;if(Q(F)){var U=typeof F.valueOf=="function"?F.valueOf():F;F=Q(U)?U+"":U}if(typeof F!="string")return F===0?F:+F;F=G(F);var X=Xe.test(F);return X||It.test(F)?dt(F.slice(2),X?2:8):Ze.test(F)?NaN:+F};var qe=Math.max,Qt=Math.min;const ct=function(F,U,X){var ae,ze,Ve,et,nt,jt,Et=0,Bo=!1,Ei=!1,mn=!0;if(typeof F!="function")throw new TypeError("Expected a function");function Ui(yn){var Qn=ae,on=ze;return ae=ze=void 0,Et=yn,et=F.apply(on,Qn)}function ao(yn){var Qn=yn-jt;return jt===void 0||Qn>=U||Qn<0||Ei&&yn-Et>=Ve}function Hi(){var yn=te();if(ao(yn))return Yn(yn);nt=setTimeout(Hi,function(Qn){var on=U-(Qn-jt);return Ei?Qt(on,Ve-(Qn-Et)):on}(yn))}function Yn(yn){return nt=void 0,mn&&ae?Ui(yn):(ae=ze=void 0,et)}function at(){var yn=te(),Qn=ao(yn);if(ae=arguments,ze=this,jt=yn,Qn){if(nt===void 0)return function(on){return Et=on,nt=setTimeout(Hi,U),Bo?Ui(on):et}(jt);if(Ei)return clearTimeout(nt),nt=setTimeout(Hi,U),Ui(jt)}return nt===void 0&&(nt=setTimeout(Hi,U)),et}return U=rt(U)||0,Q(X)&&(Bo=!!X.leading,Ve=(Ei="maxWait"in X)?qe(rt(X.maxWait)||0,U):Ve,mn="trailing"in X?!!X.trailing:mn),at.cancel=function(){nt!==void 0&&clearTimeout(nt),Et=0,ae=jt=ze=nt=void 0},at.flush=function(){return nt===void 0?et:Yn(te())},at},pi=function(F,U,X){var ae=!0,ze=!0;if(typeof F!="function")throw new TypeError("Expected a function");return Q(X)&&(ae="leading"in X?!!X.leading:ae,ze="trailing"in X?!!X.trailing:ze),ct(F,U,{leading:ae,maxWait:U,trailing:ze})},ni=function(){this.__data__=[],this.size=0},mi=function(F,U){return F===U||F!=F&&U!=U},yt=function(F,U){for(var X=F.length;X--;)if(mi(F[X][0],U))return X;return-1};var Bn=Array.prototype.splice;const js=function(F){var U=this.__data__,X=yt(U,F);return!(X<0)&&(X==U.length-1?U.pop():Bn.call(U,X,1),--this.size,!0)},ot=function(F){var U=this.__data__,X=yt(U,F);return X<0?void 0:U[X][1]},ie=function(F){return yt(this.__data__,F)>-1},me=function(F,U){var X=this.__data__,ae=yt(X,F);return ae<0?(++this.size,X.push([F,U])):X[ae][1]=U,this};function we(F){var U=-1,X=F==null?0:F.length;for(this.clear();++U<X;){var ae=F[U];this.set(ae[0],ae[1])}}we.prototype.clear=ni,we.prototype.delete=js,we.prototype.get=ot,we.prototype.has=ie,we.prototype.set=me;const Ce=we,De=function(){this.__data__=new Ce,this.size=0},xe=function(F){var U=this.__data__,X=U.delete(F);return this.size=U.size,X},Oe=function(F){return this.__data__.get(F)},Fe=function(F){return this.__data__.has(F)},We=function(F){if(!Q(F))return!1;var U=de(F);return U=="[object Function]"||U=="[object GeneratorFunction]"||U=="[object AsyncFunction]"||U=="[object Proxy]"},Wn=Z["__core-js_shared__"];var Li=function(){var F=/[^.]+$/.exec(Wn&&Wn.keys&&Wn.keys.IE_PROTO||"");return F?"Symbol(src)_1."+F:""}();const At=function(F){return!!Li&&Li in F};var _n=Function.prototype.toString;const ii=function(F){if(F!=null){try{return _n.call(F)}catch{}try{return F+""}catch{}}return""};var Go=/^\[object .+?Constructor\]$/,Ko=Function.prototype,Xi=Object.prototype,Rs=Ko.toString,Fs=Xi.hasOwnProperty,xa=RegExp("^"+Rs.call(Fs).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const eo=function(F){return!(!Q(F)||At(F))&&(We(F)?xa:Go).test(ii(F))},Zn=function(F,U){return F==null?void 0:F[U]},Kt=function(F,U){var X=Zn(F,U);return eo(X)?X:void 0},fn=Kt(Z,"Map"),_o=Kt(Object,"create"),Vs=function(){this.__data__=_o?_o(null):{},this.size=0},gr=function(F){var U=this.has(F)&&delete this.__data__[F];return this.size-=U?1:0,U};var Us=Object.prototype.hasOwnProperty;const xl=function(F){var U=this.__data__;if(_o){var X=U[F];return X==="__lodash_hash_undefined__"?void 0:X}return Us.call(U,F)?U[F]:void 0};var kr=Object.prototype.hasOwnProperty;const Ea=function(F){var U=this.__data__;return _o?U[F]!==void 0:kr.call(U,F)},El=function(F,U){var X=this.__data__;return this.size+=this.has(F)?0:1,X[F]=_o&&U===void 0?"__lodash_hash_undefined__":U,this};function Yo(F){var U=-1,X=F==null?0:F.length;for(this.clear();++U<X;){var ae=F[U];this.set(ae[0],ae[1])}}Yo.prototype.clear=Vs,Yo.prototype.delete=gr,Yo.prototype.get=xl,Yo.prototype.has=Ea,Yo.prototype.set=El;const nn=Yo,Sl=function(){this.size=0,this.__data__={hash:new nn,map:new(fn||Ce),string:new nn}},wr=function(F){var U=typeof F;return U=="string"||U=="number"||U=="symbol"||U=="boolean"?F!=="__proto__":F===null},vo=function(F,U){var X=F.__data__;return wr(U)?X[typeof U=="string"?"string":"hash"]:X.map},Dl=function(F){var U=vo(this,F).delete(F);return this.size-=U?1:0,U},gi=function(F){return vo(this,F).get(F)},Re=function(F){return vo(this,F).has(F)},Sa=function(F,U){var X=vo(this,F),ae=X.size;return X.set(F,U),this.size+=X.size==ae?0:1,this};function yo(F){var U=-1,X=F==null?0:F.length;for(this.clear();++U<X;){var ae=F[U];this.set(ae[0],ae[1])}}yo.prototype.clear=Sl,yo.prototype.delete=Dl,yo.prototype.get=gi,yo.prototype.has=Re,yo.prototype.set=Sa;const Ao=yo,br=function(F,U){var X=this.__data__;if(X instanceof Ce){var ae=X.__data__;if(!fn||ae.length<199)return ae.push([F,U]),this.size=++X.size,this;X=this.__data__=new Ao(ae)}return X.set(F,U),this.size=X.size,this};function to(F){var U=this.__data__=new Ce(F);this.size=U.size}to.prototype.clear=De,to.prototype.delete=xe,to.prototype.get=Oe,to.prototype.has=Fe,to.prototype.set=br;const ts=to,ki=function(F,U){for(var X=-1,ae=F==null?0:F.length;++X<ae&&U(F[X],X,F)!==!1;);return F},ns=function(){try{var F=Kt(Object,"defineProperty");return F({},"",{}),F}catch{}}(),oi=function(F,U,X){U=="__proto__"&&ns?ns(F,U,{configurable:!0,enumerable:!0,value:X,writable:!0}):F[U]=X};var pn=Object.prototype.hasOwnProperty;const Hs=function(F,U,X){var ae=F[U];pn.call(F,U)&&mi(ae,X)&&(X!==void 0||U in F)||oi(F,U,X)},is=function(F,U,X,ae){var ze=!X;X||(X={});for(var Ve=-1,et=U.length;++Ve<et;){var nt=U[Ve],jt=ae?ae(X[nt],F[nt],nt,X,F):void 0;jt===void 0&&(jt=F[nt]),ze?oi(X,nt,jt):Hs(X,nt,jt)}return X},Da=function(F,U){for(var X=-1,ae=Array(F);++X<F;)ae[X]=U(X);return ae},Bi=function(F){return Le(F)&&de(F)=="[object Arguments]"};var _r=Object.prototype,Tl=_r.hasOwnProperty,Ml=_r.propertyIsEnumerable;const Ta=Bi(function(){return arguments}())?Bi:function(F){return Le(F)&&Tl.call(F,"callee")&&!Ml.call(F,"callee")},Ws=Array.isArray,Ma=function(){return!1};var os=s&&!s.nodeType&&s,Qo=os&&!0&&i&&!i.nodeType&&i,Oi=Qo&&Qo.exports===os?Z.Buffer:void 0;const Co=(Oi?Oi.isBuffer:void 0)||Ma;var zi=/^(?:0|[1-9]\d*)$/;const ft=function(F,U){var X=typeof F;return!!(U=U??9007199254740991)&&(X=="number"||X!="symbol"&&zi.test(F))&&F>-1&&F%1==0&&F<U},Ot=function(F){return typeof F=="number"&&F>-1&&F%1==0&&F<=9007199254740991};var _t={};_t["[object Float32Array]"]=_t["[object Float64Array]"]=_t["[object Int8Array]"]=_t["[object Int16Array]"]=_t["[object Int32Array]"]=_t["[object Uint8Array]"]=_t["[object Uint8ClampedArray]"]=_t["[object Uint16Array]"]=_t["[object Uint32Array]"]=!0,_t["[object Arguments]"]=_t["[object Array]"]=_t["[object ArrayBuffer]"]=_t["[object Boolean]"]=_t["[object DataView]"]=_t["[object Date]"]=_t["[object Error]"]=_t["[object Function]"]=_t["[object Map]"]=_t["[object Number]"]=_t["[object Object]"]=_t["[object RegExp]"]=_t["[object Set]"]=_t["[object String]"]=_t["[object WeakMap]"]=!1;const $o=function(F){return Le(F)&&Ot(F.length)&&!!_t[de(F)]},ji=function(F){return function(U){return F(U)}};var rs=s&&!s.nodeType&&s,Je=rs&&!0&&i&&!i.nodeType&&i,ht=Je&&Je.exports===rs&&q.process;const wi=function(){try{var F=Je&&Je.require&&Je.require("util").types;return F||ht&&ht.binding&&ht.binding("util")}catch{}}();var vr=wi&&wi.isTypedArray;const Dn=vr?ji(vr):$o;var yr=Object.prototype.hasOwnProperty;const Ar=function(F,U){var X=Ws(F),ae=!X&&Ta(F),ze=!X&&!ae&&Co(F),Ve=!X&&!ae&&!ze&&Dn(F),et=X||ae||ze||Ve,nt=et?Da(F.length,String):[],jt=nt.length;for(var Et in F)!U&&!yr.call(F,Et)||et&&(Et=="length"||ze&&(Et=="offset"||Et=="parent")||Ve&&(Et=="buffer"||Et=="byteLength"||Et=="byteOffset")||ft(Et,jt))||nt.push(Et);return nt};var xo=Object.prototype;const Ht=function(F){var U=F&&F.constructor;return F===(typeof U=="function"&&U.prototype||xo)},no=function(F,U){return function(X){return F(U(X))}},bi=no(Object.keys,Object);var io=Object.prototype.hasOwnProperty;const Eo=function(F){if(!Ht(F))return bi(F);var U=[];for(var X in Object(F))io.call(F,X)&&X!="constructor"&&U.push(X);return U},ri=function(F){return F!=null&&Ot(F.length)&&!We(F)},_i=function(F){return ri(F)?Ar(F):Eo(F)},Zs=function(F,U){return F&&is(U,_i(U),F)},So=function(F){var U=[];if(F!=null)for(var X in Object(F))U.push(X);return U};var Cr=Object.prototype.hasOwnProperty;const qs=function(F){if(!Q(F))return So(F);var U=Ht(F),X=[];for(var ae in F)(ae!="constructor"||!U&&Cr.call(F,ae))&&X.push(ae);return X},oo=function(F){return ri(F)?Ar(F,!0):qs(F)},Do=function(F,U){return F&&is(U,oo(U),F)};var ss=s&&!s.nodeType&&s,Gs=ss&&!0&&i&&!i.nodeType&&i,Ge=Gs&&Gs.exports===ss?Z.Buffer:void 0,si=Ge?Ge.allocUnsafe:void 0;const Pt=function(F,U){if(U)return F.slice();var X=F.length,ae=si?si(X):new F.constructor(X);return F.copy(ae),ae},xr=function(F,U){var X=-1,ae=F.length;for(U||(U=Array(ae));++X<ae;)U[X]=F[X];return U},Ks=function(F,U){for(var X=-1,ae=F==null?0:F.length,ze=0,Ve=[];++X<ae;){var et=F[X];U(et,X,F)&&(Ve[ze++]=et)}return Ve},qn=function(){return[]};var as=Object.prototype.propertyIsEnumerable,vi=Object.getOwnPropertySymbols;const On=vi?function(F){return F==null?[]:(F=Object(F),Ks(vi(F),function(U){return as.call(F,U)}))}:qn,Er=function(F,U){return is(F,On(F),U)},$t=function(F,U){for(var X=-1,ae=U.length,ze=F.length;++X<ae;)F[ze+X]=U[X];return F},yi=no(Object.getPrototypeOf,Object),Ct=Object.getOwnPropertySymbols?function(F){for(var U=[];F;)$t(U,On(F)),F=yi(F);return U}:qn,To=function(F,U){return is(F,Ct(F),U)},ls=function(F,U,X){var ae=U(F);return Ws(F)?ae:$t(ae,X(F))},Ys=function(F){return ls(F,_i,On)},Mo=function(F){return ls(F,oo,Ct)},Sr=Kt(Z,"DataView"),Ri=Kt(Z,"Promise"),lt=Kt(Z,"Set"),Dr=Kt(Z,"WeakMap");var Gn="[object Map]",Io="[object Promise]",Tr="[object Set]",Mr="[object WeakMap]",cs="[object DataView]",Il=ii(Sr),Ia=ii(fn),Ir=ii(Ri),Qs=ii(lt),Pr=ii(Dr),ro=de;(Sr&&ro(new Sr(new ArrayBuffer(1)))!=cs||fn&&ro(new fn)!=Gn||Ri&&ro(Ri.resolve())!=Io||lt&&ro(new lt)!=Tr||Dr&&ro(new Dr)!=Mr)&&(ro=function(F){var U=de(F),X=U=="[object Object]"?F.constructor:void 0,ae=X?ii(X):"";if(ae)switch(ae){case Il:return cs;case Ia:return Gn;case Ir:return Io;case Qs:return Tr;case Pr:return Mr}return U});const zn=ro;var $s=Object.prototype.hasOwnProperty;const Ai=function(F){var U=F.length,X=new F.constructor(U);return U&&typeof F[0]=="string"&&$s.call(F,"index")&&(X.index=F.index,X.input=F.input),X},Fi=Z.Uint8Array,Jo=function(F){var U=new F.constructor(F.byteLength);return new Fi(U).set(new Fi(F)),U},ds=function(F,U){var X=U?Jo(F.buffer):F.buffer;return new F.constructor(X,F.byteOffset,F.byteLength)};var Nr=/\w*$/;const Js=function(F){var U=new F.constructor(F.source,Nr.exec(F));return U.lastIndex=F.lastIndex,U};var Lr=ce?ce.prototype:void 0,Br=Lr?Lr.valueOf:void 0;const Pa=function(F){return Br?Object(Br.call(F)):{}},Xs=function(F,U){var X=U?Jo(F.buffer):F.buffer;return new F.constructor(X,F.byteOffset,F.length)},us=function(F,U,X){var ae=F.constructor;switch(U){case"[object ArrayBuffer]":return Jo(F);case"[object Boolean]":case"[object Date]":return new ae(+F);case"[object DataView]":return ds(F,X);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Xs(F,X);case"[object Map]":case"[object Set]":return new ae;case"[object Number]":case"[object String]":return new ae(F);case"[object RegExp]":return Js(F);case"[object Symbol]":return Pa(F)}};var so=Object.create;const hs=function(){function F(){}return function(U){if(!Q(U))return{};if(so)return so(U);F.prototype=U;var X=new F;return F.prototype=void 0,X}}(),Na=function(F){return typeof F.constructor!="function"||Ht(F)?{}:hs(yi(F))},Or=function(F){return Le(F)&&zn(F)=="[object Map]"};var Ci=wi&&wi.isMap;const La=Ci?ji(Ci):Or,Po=function(F){return Le(F)&&zn(F)=="[object Set]"};var vn=wi&&wi.isSet;const Ba=vn?ji(vn):Po;var zr="[object Arguments]",fs="[object Function]",No="[object Object]",gt={};gt[zr]=gt["[object Array]"]=gt["[object ArrayBuffer]"]=gt["[object DataView]"]=gt["[object Boolean]"]=gt["[object Date]"]=gt["[object Float32Array]"]=gt["[object Float64Array]"]=gt["[object Int8Array]"]=gt["[object Int16Array]"]=gt["[object Int32Array]"]=gt["[object Map]"]=gt["[object Number]"]=gt[No]=gt["[object RegExp]"]=gt["[object Set]"]=gt["[object String]"]=gt["[object Symbol]"]=gt["[object Uint8Array]"]=gt["[object Uint8ClampedArray]"]=gt["[object Uint16Array]"]=gt["[object Uint32Array]"]=!0,gt["[object Error]"]=gt[fs]=gt["[object WeakMap]"]=!1;const ea=function F(U,X,ae,ze,Ve,et){var nt,jt=1&X,Et=2&X,Bo=4&X;if(ae&&(nt=Ve?ae(U,ze,Ve,et):ae(U)),nt!==void 0)return nt;if(!Q(U))return U;var Ei=Ws(U);if(Ei){if(nt=Ai(U),!jt)return xr(U,nt)}else{var mn=zn(U),Ui=mn==fs||mn=="[object GeneratorFunction]";if(Co(U))return Pt(U,jt);if(mn==No||mn==zr||Ui&&!Ve){if(nt=Et||Ui?{}:Na(U),!jt)return Et?To(U,Do(nt,U)):Er(U,Zs(nt,U))}else{if(!gt[mn])return Ve?U:{};nt=us(U,mn,jt)}}et||(et=new ts);var ao=et.get(U);if(ao)return ao;et.set(U,nt),Ba(U)?U.forEach(function(Yn){nt.add(F(Yn,X,ae,Yn,U,et))}):La(U)&&U.forEach(function(Yn,at){nt.set(at,F(Yn,X,ae,at,U,et))});var Hi=Ei?void 0:(Bo?Et?Mo:Ys:Et?oo:_i)(U);return ki(Hi||U,function(Yn,at){Hi&&(Yn=U[at=Yn]),Hs(nt,at,F(Yn,X,ae,at,U,et))}),nt},Oa=function(F,U){return ea(F,5,U=typeof U=="function"?U:void 0)};var ps=Function.prototype,ms=Object.prototype,jn=ps.toString,Xo=ms.hasOwnProperty,Pl=jn.call(Object);const Vi=function(F){if(!Le(F)||de(F)!="[object Object]")return!1;var U=yi(F);if(U===null)return!0;var X=Xo.call(U,"constructor")&&U.constructor;return typeof X=="function"&&X instanceof X&&jn.call(X)==Pl},gs=function(F){return Le(F)&&F.nodeType===1&&!Vi(F)};class Lo extends D{constructor(U,X={}){super(X),this._editor=null,this._throttledSave=pi(this._save.bind(this),typeof X.saveInterval=="number"?X.saveInterval:5e3),U&&(this._creator=(ae,ze)=>U.create(ae,ze)),this._destructor=ae=>ae.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(U){this._creator=U}setDestructor(U){this._destructor=U}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(U=>{console.error("An error happened during the editor destroying.",U)}).then(()=>{if(typeof this._elementOrData=="string")return this.create(this._data,this._config,this._config.context);{const U=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,U,U.context)}}).then(()=>{this._fire("restart")})}create(U=this._elementOrData,X=this._config,ae){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=U,this._config=this._cloneEditorConfiguration(X)||{},this._config.context=ae,this._creator(U,this._config))).then(ze=>{this._editor=ze,ze.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=ze.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const U=this._editor;return this._editor=null,U.model.document.off("change:data",this._throttledSave),this._destructor(U)})}_save(){const U=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=U}catch(X){console.error(X,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(U){this._excludedProps=U}_getData(){const U={};for(const X of this._editor.model.document.getRootNames())U[X]=this._editor.data.get({rootName:X});return U}_isErrorComingFromThisItem(U){return H(this._editor,U.context,this._excludedProps)}_cloneEditorConfiguration(U){return Oa(U,(X,ae)=>gs(X)||ae==="context"?X:void 0)}}const ai=Symbol("MainQueueId");class xi extends D{constructor(U,X={}){super(X),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new za,this._watchdogConfig=X,this._creator=ae=>U.create(ae),this._destructor=ae=>ae.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(U){this._creator=U}setDestructor(U){this._destructor=U}get context(){return this._context}create(U={}){return this._actionQueues.enqueue(ai,()=>(this._contextConfig=U,this._create()))}getItem(U){return this._getWatchdog(U)._item}getItemState(U){return this._getWatchdog(U).state}add(U){const X=er(U);return Promise.all(X.map(ae=>this._actionQueues.enqueue(ae.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let ze;if(this._watchdogs.has(ae.id))throw new Error(`Item with the given id is already added: '${ae.id}'.`);if(ae.type==="editor")return ze=new Lo(null,this._watchdogConfig),ze.setCreator(ae.creator),ze._setExcludedProperties(this._contextProps),ae.destructor&&ze.setDestructor(ae.destructor),this._watchdogs.set(ae.id,ze),ze.on("error",(Ve,{error:et,causesRestart:nt})=>{this._fire("itemError",{itemId:ae.id,error:et}),nt&&this._actionQueues.enqueue(ae.id,()=>new Promise(jt=>{const Et=()=>{ze.off("restart",Et),this._fire("itemRestart",{itemId:ae.id}),jt()};ze.on("restart",Et)}))}),ze.create(ae.sourceElementOrData,ae.config,this._context);throw new Error(`Not supported item type: '${ae.type}'.`)})))}remove(U){const X=er(U);return Promise.all(X.map(ae=>this._actionQueues.enqueue(ae,()=>{const ze=this._getWatchdog(ae);return this._watchdogs.delete(ae),ze.destroy()})))}destroy(){return this._actionQueues.enqueue(ai,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(ai,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(U=>{console.error("An error happened during destroying the context or items.",U)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(U=>(this._context=U,this._contextProps=N(this._context),Promise.all(Array.from(this._watchdogs.values()).map(X=>(X._setExcludedProperties(this._contextProps),X.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const U=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(X=>X.destroy())).then(()=>this._destructor(U))})}_getWatchdog(U){const X=this._watchdogs.get(U);if(!X)throw new Error(`Item with the given id was not registered: ${U}.`);return X}_isErrorComingFromThisItem(U){for(const X of this._watchdogs.values())if(X._isErrorComingFromThisItem(U))return!1;return H(this._context,U.context)}}class za{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(U){this._onEmptyCallbacks.push(U)}enqueue(U,X){const ae=U===ai;this._activeActions++,this._queues.get(U)||this._queues.set(U,Promise.resolve());const ze=(ae?Promise.all(this._queues.values()):Promise.all([this._queues.get(ai),this._queues.get(U)])).then(X),Ve=ze.catch(()=>{});return this._queues.set(U,Ve),ze.finally(()=>{this._activeActions--,this._queues.get(U)===Ve&&this._activeActions===0&&this._onEmptyCallbacks.forEach(et=>et())})}}function er(F){return Array.isArray(F)?F:[F]}const jr=v().createContext("contextWatchdog");class Kn extends v().Component{constructor(U,X){super(U,X),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}shouldComponentUpdate(U){return this._shouldComponentUpdate(U)}async _shouldComponentUpdate(U){return U.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(U.config)),U.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(U.config),!0):this.props.children!==U.children}render(){return v().createElement(jr.Provider,{value:this.contextWatchdog},this.props.children)}componentWillUnmount(){this._destroyContext()}async _initializeContextWatchdog(U){this.contextWatchdog=new xi(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(X,ae)=>{this.props.onError(ae.error,{phase:"runtime",willContextRestart:ae.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(U).catch(X=>{this.props.onError(X,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}Kn.defaultProps={isLayoutReady:!0,onError:(F,U)=>console.error(F,U)},Kn.propTypes={id:B().string,isLayoutReady:B().bool,context:B().func,watchdogConfig:B().object,config:B().object,onReady:B().func,onError:B().func};const tr="Lock from React integration (@ckeditor/ckeditor5-react)";class nr extends v().Component{constructor(U){super(U),this.editorDestructionInProgress=null,this.domContainer=v().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:X}=window;if(X){const[ae]=X.split(".").map(Number);ae<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(U){return!!this.editor&&(U.id!==this.props.id||(this._shouldUpdateEditor(U)&&this.editor.data.set(U.data),"disabled"in U&&(U.disabled?this.editor.enableReadOnlyMode(tr):this.editor.disableReadOnlyMode(tr)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return v().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.watchdog||(this.context instanceof xi?this.watchdog=new ks(this.context):this.watchdog=new nr._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator((U,X)=>this._createEditor(U,X)),this.watchdog.on("error",(U,{error:X,causesRestart:ae})=>{(this.props.onError||console.error)(X,{phase:"runtime",willEditorRestart:ae})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(U=>{(this.props.onError||console.error)(U,{phase:"initialization",willEditorRestart:!1})}))}_createEditor(U,X){return this.props.editor.create(U,X).then(ae=>{"disabled"in this.props&&this.props.disabled&&ae.enableReadOnlyMode(tr);const ze=ae.model.document,Ve=ae.editing.view.document;return ze.on("change:data",et=>{this.props.onChange&&this.props.onChange(et,ae)}),Ve.on("focus",et=>{this.props.onFocus&&this.props.onFocus(et,ae)}),Ve.on("blur",et=>{this.props.onBlur&&this.props.onBlur(et,ae)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(ae)}),ae})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(U=>{setTimeout(()=>{this.watchdog?this.watchdog.destroy().then(()=>{this.watchdog=null,U()}):U()})})}_shouldUpdateEditor(U){return this.props.data!==U.data&&this.editor.data.get()!==U.data}_getConfig(){const U=this.props.config||{};return this.props.data&&U.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` properties. The config property is over the data value and the first one will be used when specified both."),{...U,initialData:U.initialData||this.props.data||""}}}nr.contextType=jr,nr.propTypes={editor:B().func.isRequired,data:B().string,config:B().object,watchdogConfig:B().object,onChange:B().func,onReady:B().func,onFocus:B().func,onBlur:B().func,onError:B().func,disabled:B().bool,id:B().any},nr._EditorWatchdog=Lo;class ks{constructor(U){this._contextWatchdog=U,this._id=function(){const X=4294967296*Math.random()>>>0,ae=4294967296*Math.random()>>>0,ze=4294967296*Math.random()>>>0,Ve=4294967296*Math.random()>>>0;return"e"+M[X>>0&255]+M[X>>8&255]+M[X>>16&255]+M[X>>24&255]+M[ae>>0&255]+M[ae>>8&255]+M[ae>>16&255]+M[ae>>24&255]+M[ze>>0&255]+M[ze>>8&255]+M[ze>>16&255]+M[ze>>24&255]+M[Ve>>0&255]+M[Ve>>8&255]+M[Ve>>16&255]+M[Ve>>24&255]}()}setCreator(U){this._creator=U}create(U,X){return this._contextWatchdog.add({sourceElementOrData:U,config:X,creator:this._creator,id:this._id,type:"editor"})}on(U,X){this._contextWatchdog.on("itemError",(ae,{itemId:ze,error:Ve})=>{ze===this._id&&X(null,{error:Ve,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}})(),b})())})(Xf,Xf.exports);var v7=Xf.exports;function RD({deskripsi:i,setDeskripsi:s}){const[l,u]=ne.useState("");return ne.useEffect(()=>{l&&i&&l.setData(i)},[l,i]),Y.jsx(v7.CKEditor,{editor:_7,data:i,onChange:(f,k)=>{const b=k.getData();s(b)}})}const y7=({data:i})=>Y.jsx("div",{className:"wrap-result",children:i.map((s,l)=>Y.jsx("div",{className:"result-card",children:Y.jsx("div",{dangerouslySetInnerHTML:{__html:s.textEditor}})},l))});function FD(i,s){const l=ne.useRef(s);ne.useEffect(function(){s!==l.current&&i.attributionControl!=null&&(l.current!=null&&i.attributionControl.removeAttribution(l.current),s!=null&&i.attributionControl.addAttribution(s)),l.current=s},[i,s])}const A7=1;function C7(i){return Object.freeze({__version:A7,map:i})}function x7(i,s){return Object.freeze({...i,...s})}const VD=ne.createContext(null),UD=VD.Provider;function HD(){const i=ne.useContext(VD);if(i==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return i}function E7(i){function s(l,u){const{instance:f,context:k}=i(l).current;return ne.useImperativeHandle(u,()=>f),l.children==null?null:Xn.createElement(UD,{value:k},l.children)}return ne.forwardRef(s)}function S7(i){function s(l,u){const[f,k]=ne.useState(!1),{instance:b}=i(l,k).current;ne.useImperativeHandle(u,()=>b),ne.useEffect(function(){f&&b.update()},[b,f,l.children]);const A=b._contentNode;return A?XS.createPortal(l.children,A):null}return ne.forwardRef(s)}function D7(i){function s(l,u){const{instance:f}=i(l).current;return ne.useImperativeHandle(u,()=>f),null}return ne.forwardRef(s)}function WD(i,s){const l=ne.useRef();ne.useEffect(function(){return s!=null&&i.instance.on(s),l.current=s,function(){l.current!=null&&i.instance.off(l.current),l.current=null}},[i,s])}function Cb(i,s){const l=i.pane??s.pane;return l?{...i,pane:l}:i}function T7(i,s){return function(u,f){const k=HD(),b=i(Cb(u,k),k);return FD(k.map,u.attribution),WD(b.current,u.eventHandlers),s(b.current,k,u,f),b}}var fw={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
					${b!==""?`?search=${b}`:""}
					${A!==""?`?category=${A}`:""}`);i(B.data.data),u(!1)}catch(B){console.log(B.message)}})()},[b,A]),Y.jsxs("div",{className:"flex flex-col w-full justify-center items-center pt-20",children:[Y.jsxs("div",{className:"flex flex-col justify-center items-center gap-5 text-slate-800",children:[Y.jsx("h1",{className:"text-5xl font-normal tracking-wide",children:"Wisata"}),Y.jsx("hr",{className:"w-24 border-2 border-orange-500 rounded-full"}),Y.jsx("p",{children:"Temukan Wisata Menarik Disini"})]}),Y.jsxs("div",{className:"flex pt-10 w-[60%] gap-4",children:[Y.jsx(zD,{handleSearch:C=>v(C,"name")}),Y.jsx(_9,{handleSearch:C=>v(C,"category")})]}),Y.jsx("div",{className:"pt-10",children:l?Y.jsx(Y.Fragment,{children:Y.jsx("div",{className:"items-center h-screen",children:Y.jsx("div",{className:"w-full p-4",children:Y.jsxs("div",{className:"flex gap-4",children:[Y.jsx(tk,{}),Y.jsx(tk,{}),Y.jsx(tk,{})]})})})}):Y.jsx(y9,{searchName:b,searchCategory:A})}),s&&Y.jsx(q9,{})]})}const K9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAtJSURBVHgBrVpbjFVXGf7/dW7DcJkDLUhKgaGAYcR2DjFqGqKhUGNIW+mk+uATkPShiRqq8cmXmfHBpjFq0Zc2JpbGBx94KG1MCDVlIK22tloORRTakhkIkHKdM2VunMv+/dda/7rsM8PMmYFFzpx99l6X779fNgj3YAz0DRdhUW6XIlUigk5CKCFSkQCLZgKazxD/GQLCMiCVkwSO7fj5gvNwlwNhnkODVgvb9hHRNgD+IALpDfmL9L6or9Hc4j98j9AchuhO5nt4ktfvhxwM7Pjx/IiZMwEOeALJ8+g4zAD9TmgB2ys0j/jbEGWIIyZEX4STSdYcqDagf+dPFwzBHMacCDj+64leYuCMxgBvAhJ2s1wmKwcQboNQY+56gtwiLSG9Tinse+xHhX5ocbREwMALw52YKbzOh5T0qQZAgCe7oFMfCxGtIPQ8vcSqFxpVMoBRKAk0ePXiv4O3a7S9FWmo2SYcf3FiN2bzJ0Bht4C3Bzkdt6pvNJ1QwJshtxU6ovg5z9C/ZQ9C8qDJr+J/Ctbl8urE0Zfru2bDNyMBx3/DKoPJATC6bgGSA4dO7IDuvvz2Om/vE0T3rEWgMxNLOBPl1dETrKiYUP3Q26/c7p0XAQNa34l6STY2Gmo4j+Jl+GSlJWCkYA5GDNz2QwgE81jUysIWSVopCjmRQolkCHrffqV2RyKmtYGBF8eeZnCvxzOEM8EoSYTu9FZ5uyC3ynHTulDRf1E/csYh8yMC7JaWMLuBnpbBPY8/m39tVgK0wUKedZ6wAyBlqNYfghzsCAHnTiyHyWo2OOKc64z8v3VBKhh0CokDL16LnK0DjiiVK+14Fs/HeKeqULYwwJbWYT0JiLE1fUe+XX8SkUYi4K1xW/AQrXE2wdICD376/c0+5DEYF8E2UTvUDDdFwAAbLXNmbQzccTwc6J4Zn2J1X0FQNW8jFkAi7tbZiIvYAgwglqjTUFTkvBwFYWoMpSN/vN0XY/YiHHhhglWHBr0OAgJErs3/dm5TXymrUUKklQN5rkF0ODnvQxIBAmMiJGnj98ZEEtGFoJExlVvXsxcraQnkk14jdmU3JQfWfMTwQgyw/tzKwT2zK5RTG2G0iiQSpEj2HLu1RmGEKh4NIs6LB3ME6V/FRVDdl5LAYTbcQqEwaMUk1CoVeRrZ1OUxEVdjrxNzHdJRWvIdnyKJ5wmBzM2zzsBrAAXo6NIQ/asyDlYKRgL5fG5bWjeN6/CqoLL8yWjVRCcVCVpWVjbwRDFAeUl5iVmiVWTU7lnEdRcrMEoxIslTsLOORapupJC1Ylb7QM5JcVWSrZVdCrMFhKufJdS1I4uL7kfQv5vGlBvTDJxmrrm+dp7w7Pt1mBiTu0oON7iVYZSzIU13g2Ab3+zHgd9NdPKMQQCIKYSQBhMuXZWB9qUI6x/NgMohTI4SNOoQwuddjlweoG0hmj3ff6PG+4eaAiQWGFsiL0vzYDzJLlUJNLY5UVmJmuIjqBP/Gb6cwLI1yoAfqxDUa/cOvB61KsAo75thfdj8raxlpJJ4qDAYMJJXOT2nPdfYxem36hZ9JKuHkmw1CXv5Qwomx+ieAo+H3necJbt4mbNgA5KcfXlDTjkRKmUpgyWgyMWl/L/z9ZbEerU1MFXW48EP6zDOnrpR4+rnAYQ1W7KQb595XcIqlM1bwLETMdmHd01EwTlQp/banUGFtMsBu9Tl6+B9fMvgT/+tDreukQGvR+Uywem3alAdn3mtk26UlhtlTmwlEeoHy30NtlsxZZ1mVYiKEuCN5fhSr9VxodzwwOPRYLsZ/KAOrQ2EdNGEkrn6pBElTCzNhmABEPIPKftMQMMQ0FoYFTb4O43xiiVsYqwG7/71U/jX0fMwfNX6zQfWFc2n57nNfHo+BMoQxSkkejYNYckUs1ZZPHWWDHvHZps0Nwlkcpbb0w19X4N+809ldgjpSZcHK+Zz+oNLsPHhTbDhkY2gYWd5v5XrFBTaAG9eBbh5Jcqh+FsHMs2Xoi8Wxc+S0JTEyWILo72oWP+nl8InZ85B+aP/zLh+YrQGH793igNlHtduWgsdywEKC5jbHLmWrWCwN/g62l4x1kpIdeWuGImjkqKkcbax7uvKSKF5jI2Ow+lTZ6HVceofH0P1dtVzj1OZkJ4AOAkMcTcQy9rKEwgdA0l9UwvM/Fl7GJxXcUTd/J0su047WROzeDnChSufQK2WVpv2RTnY/v2N8OTer0zZp1atwblT5+DmNaJbEjyvXmLP1pCWjNmehrKo+5VObbS3lQiYSpJNDCDDhUbSGhEbtmqWZfy9w2+OTJn33K+2moPaF+fgy6UV8Nt9x1LPL5w9D5u+0YVXLlIqi0LlmgNYzjaocVIpRVLyAMU8dwGDb9+6AdjxJU4lRnhhC0Q0D22gzePBDUU4evBTuPjZMFz/fGqQGL81Dr7AirylYzQjOalybW2HbG3rK9AUeNdV+O87DdKRcmEHmuTrXoyDvy/Dozs74Qc/KcHqDcVp56DkPZ6xSnIhJkI1asfUY1wUMDXHZLY1ZBUHEkvM+BjhP9+o0/WLCSxYjLDkvrl97lu5cAq4G1fG4OAfTsB7h4cMEc2j4/4O8YYYAppQxTIo7/zhgiFTDzSSxnGlMtt8CHcVWZKgIUYSkrFRwpNH2Z9hwyQiZmaqgWv6Pymx2z+Ey1ethhufn0kBfHLPZqP/47dqrEZTVWzJ8iJEXRCwyERPEm7Lg9TE+fzkS4ynApHnMYuUqBzIWp/WirfCIFwJ8a6WFtWTapZ/r+/eALlC2r9qoy2/cwnK716Cl3/x99QzPXfTN7vA6xFICaosniqrj+WbDN2uYFXqdUGOHIujIsd3HyRT9GVhVOuGQgTBV8Gy5sLZC/DRwL+hlfHVbz9iiHblpiNE0pwDTzyT2eslYKSQzb/EX8OOa+Zg5ZIpSNWoTlKoPHXB6Xp3Z8XuXwLw3DVda+Hhrd3ULIlmzm95/GuwfstG8rYo612uVlXVfjc/lSQcebXWyzd6vTq43o13YBj746BSXgT2EaV2RgixxUb3CXaPZz78H1SujcAX163uty9ZCKu71sD60kbIteWEA4QQJZf6OqHGL596Jtc3LQF6vHWgdsK9yCCXHwH4jhv6gj+4M3AqGjVvAVItkSApEGOPGATNahmQSZtC6mDEwSd68KEY75TkoEH1HrAJHgDERg2hT+nSWh+5EaLOs22Xe0khuFLQSc2/AwB5oUEkLXjbapfcLO2BOGerwuT2ZrxTCNi5l1/rIDxv44ErJtFcC0sIwqaQUKieFi/l2nkVYr7gcinwHkoaBShqhBJvSJJFV+OivEQQ6Yhn4H8NSPb29Ex95TRtevbd3fnXEkr6DXblCzWXJ4XepzdqIF3LrnhQwRImYhU3ADDjXmw4zsvrqODVKPZ0jihbgFtpJt5FQ//3erKHpsN6x/xy5+5CHz/tN4cI0CRVqwLEwSWTDbZskz6KwVv/5NRP74Wyl7I9UVROzRCD6hgJ9z/Vk+m7E06EWcaRP9ef5mNf5bS7aL0RurzPsRJcy6NjGWA7ZwxfsGMZHZU2iHSjvdeK3m42dbQN9SRZAF9XOEP4GXP+wEz4ZiVAj8N/mehEyg3w7E7THtNphvcuBqDTXw8CUt098cbOGafnUbyTwCrXaLJnOp2fFwGBkEYvH9PnVzn/Ll1raAJJwXcFiblTvZsOb3J4wYj+rwczqcxdEWCJ4BchmO/llXt8hLaIIeZ4E1gCirpLUYyRaD3MV/urCezv6cHKXPDMmYCYkAS4LZ/FfbxJyRHgMtHIRnxEBQhJH9gAf5yvj80H+F0TMIWYDBOjsMRIu42tAHW6FiE3YIe1evDUMt8fYuwnq5A5NF/Q8fg/YwOZKG5DGwsAAAAASUVORK5CYII=",Y9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAoGSURBVHgBrVpdiF1XFf7Wvj9z5yfNDck0JQqZRElAGzKagIZCGeNDDErTsQ9SYzEVBRUhQfB5ZnwRfNFoQX2wSWitiNiJD5oilqQWn5MJ2iq0ZorYH9Omk8xfM3Pn7K79v/Y5898ucubuc+4+e39r7W+tvda+IXwIos/9pA2tTkDRIDQN8JNBELVBaIP/WCFMuktd47troOIKnfzea/iAQtikWNCon+bWEN8OuZHI/NOh4dpE6Rnsrf/kZ3qCG2eBxmU6+c1NKbNhBSJwXZyxVg5g4kgCcA6W7KeWz8N3tnWe+4zRo9+ZxAZkQwrocz8fgdZnHDXC2wKMN3y2EpStin8Wv9NBZx7X91Wj9JVvjWGdsi4F2OoDbPVxtvqgm4SWoQQQAZk7pVw7AAPkSsRuGQKK9zewtHR0Pauh1uqgn3zi6+ygV3nggx58mkhZ6mgPPjwXAE0fr4jtIxQLY8RLKEO0B/X6Vf37J0+shW9VBfQFpgwV53nStgecT+hokABHGkSqeEDmUvnqhHHgFVcU2kHBNlRxUY//emQ1jCtSyPKdMJKARAsl/kYfMMADwNDWVKFaoJCcXgnahX7Zp1lhNUbDj4+tWwEG/zD723jGUQeQMiXkRCpEGBFGJbg8vEqQ2q5ihkqE4IBS4RSd+MaFNRWwDkt15jxtddaKkUVH+JlTQtBJKBaBBKuLCGW6GRppLVZHwKE4l4xWt9FYGqQv5vtF1QeocZktt9W/6Hlf4T4EPcgB1AmBBUDIaCbBJ4U991GmTrpJ92106hfLcDMFrNMq7M6AZ4MSRMSgFIkop1KIRIYa5k55Zcx3SpXGpVwJOaYSK+zeGdR/vDCa2TuCN9SpNW4IwECJmoKbsFbvamnsO0DYfz9nA11YUWangVf+aS6xQyeXyJSh0nwSpQsOt9Ep9rBTT1l7xc61xkhmyUgBEnEeyfqGw8ceIdx/aHXwRnq3AAc/a660M5NCvn/4FXJz60yxhMs02miaHMyJVcA5Lp3KXlCC4+E+0MJ87tlHFthG5OOfBPrvKxkjWlk6NFkFVaaIFj5zRo+fa0cFUGsOZTusW2GK7Vqde9Yphj0jA/uxGZlp9mJmdl6AtZZ39KCwv2QsKF32+Va03Co4BRRORy0RB0sU2stg9x9w4MMKEDYlBRtjamYWU9Oz/knIjWSoRbA0CWrlyR9oyDTr+twvmD4YhO+ePgXvpm/zKihEC2W76eZkZm4e3d0tjgNNn/SFFSefdse0xCmnlNxPzJ8hQ6M6msWQ5VvSXqTBPlrcfCM5XkobkhKdDpu2SOiaTaxHFvm9LjSD0UqJX0hHEOwVjJoy2p7GiTo3DtqXytt+3AuDYiRzogR+fh64cydH1sVRqd3GWlIYpSnLhdK4LlxryHoi9vWK6PogK6AcfRLSZHnYTUinQW3lkaOo1SrAOBXGukTuyJARSaQf8R6hr45sIQzUzZ8MeKpjkfmBDsorObmjy733Mh8Wc3ALC6m9GqVi1NFiXUsOnbUs8kCvg2wqGhDUCFrm4Cm+iGiB0HtpCbh1K/eBsphV2r4dy+zsPqrZ7A5xdfP9Ia+vJT7QNuUoIsOX0pVJsMzmFsT4wGrgg5LmqgoJ/9KlmJ+0CVYPWBCURLsOx3MAgveyqkK5ylLJKkYMPWZnsarwCnT+dR3z489g6bVX0DM3C93Hu/j2HSgOH4bq60t9Q5odLF5vAPft5sDQIkzdBN79v1wdmChkkqJ0yiDYkYoUsam4z8RXo4CJOGUfEDJ74Qnc/fvz2TOamUaHrzvv3ETf0c+jvn2Ht6AHH5Ro7wBa3bzKvILb+nkDYbhLixGj4v5TcbeL+0GpeCGRB1kpRSITNo0Vl7nmxp+qgJdSzMxg+rlL/DmtM98rZ8Sq5tq6QDKwmmQfwDW4KCPqXLmRCdG+kqI1DzMcuJtv4b1Lz9p26wtfxtYf/RKqp6/ST3PEmn3xRTehikmby5Fuv62j1W+96fzNfW/enDQUmvSQEXdZik/IFiDR2VBuO+c0jlyW7m6899wf0ku9vajt/hjU7r0oXr5e6b745hvQiwugZlNWYYY6hLdfT2FDFjrQ14wTT8RI5CJkHn3dWFo4c84gE++Xc2LjuJOvxtvOS9dRPPgWOsuAD8I0Qo0dOwKFAE1ZBeT9kSaYQuoiUrTJNwwSXm3Dq3Du0GZLY+fO6sXPqTfRZfHlCUup7kcec8P39FYU0AuLIoxCpxrEA8qsz0+X1BVlSzOiK5mzhrpV1gfwaYU861lDav07s/uZX/0YXQ8eQ++3f4D2z35jfSLrv2MHkCpAEhlqXnvbS1+jzw1POm/UeCHPS1AtqMu78jpUaB56ILs3KzB1+mtYfGmC94NXoecS9br27QN1Nf0cJBUpjRrCrDmWN/uAk59yZy5qqJ0ByzY0UaOZZ53FNVWof+IgWseHORKNZ88X/vYXe8VpGHj3ocPlTUwUTgTEUyePp6OumG9ciDE0MhqR76CyU7hUaIAQC4v//QfrkZ7HvmuVWEmI95B7vvQQ1D1bEuj4Jcl9SHNR5Q+V6Lyhj3vBiy2SGzWDaltMp128l8pAnHtymflpYPf6auO7bPGZZ5/mWH4TxIWM2rLF0qZ14AAr0UKki/bxIT/KTP5p23ovHSkpYJH+6akR/hjJLBGUAeWxOGSlu/YQ+j/KRysN/11lWHS4JJ379z9w9/X/8ulNHb1tBt/TEuMDcfU1COUiJjmzodgP6YHh0TB2hcf6z09f5Y/BCvBQp7oQmgqLWLuWS1F5ABxmCyuqcwNVChiEefNDZKIbdOTEXol3mbPRGhNWTy0TbUJam3wjFNskvifxoweEZZXPYsn7UZaqhAImvKt0dibrTig4nyiOluFWFKDjj07yLnomDZg5UogCycHkDr2Fs9L+XYRGiyrhF0LpcJ/F9rAyyhtIu8BhVs3MWNOPB96vqoCd5dhXLzA1xkobCJUObiEU0WhwDO//CGegrMSuAZM9ij0jHFGKnVUJbsOPn1HRV2h2DP718jPDF5fDumJaScdPjvLLY0CM/kgO5sGryC9KxT251FcXErzfP7L3k2MqqRzlh78aY2z50RVxYg3Rf33mYUZ0DuY3K62RcxdyJTT6thJ6OJ7P8EHY/DQgfyvLjk9EYAjPUgUYQijvTfg+HXno/Gr41lTAKnHptwN8/nSZBx6INUF626DR8TexePQiFCsfhhFSP1LVCERcoxTF8HKc35QCUZHnfzfCE48KCkkL2i6oWJyoOgulQwgZGMzPSFqf5VA5inXKhhSwCC/zapD5LQGn8pGkxZGDlrt37Jul9+/ys7Nods7Sp4ansAHZsAJBrCKoDTGdTvMVDocFwNgWyaBwXku74gWYVL5ZbBh4HB4fgujL4/zzFB8S1+x/t+Ff9DHAjwcSeLaw+WnI/DcbxSWsLibQwsXNgpbyPm5KRR1oYhAQAAAAAElFTkSuQmCC",Q9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQvSURBVHgBzZhNbBtVEMdndjf+SAi244Y6lShJqnLkUKggBUHhmEqc4FSVgoQq8SHFbdMmCFQhJOTa0NS9FKRwoYVLD5yKuZZK/aAHTomQqGjNoaydNorjpHVs775hnhMb3KzttTdx/JPW3uc3tv5+O29m3iC0yFPj2RFU6EVAfA0BdwPQNkIIAoHC4wc8vkMAKQS4ASbeSn3dewVaAJsx9ocX/B6XNgZIH/GwH5ojyaJ/ARSx1OlA0u6XbAmUwrxu7QShCANhNzhD8MpOK4YZ0c8E/m5k3FBg6OTCYUI1zoZ+2FiSqCin9MgTF+sZ1RU4MLF0loDCsImwgCk9+uTxOvPr8Yfv+j3uvh94+gC0A4LESsE8mIkHMo9PKVb2Hk/fj20TJ0EY9bjUi9ZTjzEwkT3DTnwMHNLdBbQjoELAC2bRJOX+MtA/i0Ihqu1WHJ7ierT3aPVn/xf3yfIhEuICOODlXSqF33DT8ztV8HZVPyEhQNy4a9Bb0zm19i/Q4VTUd2GdwIFPc8+QUbzCt4PQAnLFzr7tEW8+16XWs9MXSeyJLCu15llQJpc3h8r+WDGkojHZqjjJZ6NuaiTODuxefq9LPVkelwSGJhcGOTscgRbZN6ya7424FNggCHFMJgeAygpqJ6DGjrbD+6+4mkqZjaFuj0spxV9tdUyj4IA9T6tUa+6bq3lKzAqRzYmSTVHYXAjED/n1cy00vrSfFQ5CiwR70Njei5rV3HfXCuYXiYL0y1Z8s19WTIrQcC84oK+79tP9ecZw9OhVLucUJLEPNon5hyTAAYJrTQURQ9Ch8PI/q/AG2QWdS1DuqCB0LkEMTS4VeRU1O9Yjwyr8dMRZQX3p94IYu5S3G3MFG9I8tJGZe2A2YT4v/0lbBc7qRlcT5n/J+uxPaCNLeTDs2vJxIy138a/QJoom0Mw903ZW4QL2ukbC+A1Ve6uezRFcv1PtQi4NxQs7FUunn9UFLOb+S9O350xZTtnPLmjeKhmHJrJz0PxBvMTufsW4erzHMgq8OvXQuD0nbEWI9VCSK+uh1X9OdB46DVQS8q0kcKUg4lzePIIOgd2Ac7jxlbwvCZT1Pwo6B52CENPl/k3FuXMFM8bKM7DlUFJxuSPlUUVgaRWBxmCL4br7lP6lt9JUqgoP8jzKIrfyUU/NxXxVHYZ18UuP+rjFRpeh3SAlUhZNJMsAy7v6EItMQLtAuLyyIg5aTVkG0bVT/YHtE4tTnG6OwibC+fZc+rSvZouvbl2WjvqOIdE7cmfBBsPCMkDmu+mor27/sWHhqEunRfE6H/e/hVIAdQjSI0SI5PNiKBULfN/I3FaeXAuaH3CLJAqojXMg5d4hDkJz3Gdx59nX4laNSkcCy6wJ/VheLHa/AHVvjxtf4vEOvob52garqyyL4AeGwD+I6Brf30zHfDehBf4Fv4iPj7juTSoAAAAASUVORK5CYII=",$9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAkYSURBVHgBtVh7cFRXGf+du4+8SLIhgQ4PIeE9WCAFrOK0EuoUsQMUqNMZp4ymI9opVBOsrTqjhoz1D9RpllaB0mqxakecVihUKh2BzVjFjjy2BcqrlaRK6VBCNmR3s5vdPcfvnPu+u5ukmfHbubPnfud7/M53vu+7516GUdLi/keawESjxthSCNEowEIMCMk5AcRo3AVGF8dbHIgcr/xFBKMg9nGEG3tbQ8FgtkUItJpgRu5JdDGhRdKZTHu0ZmfXiNVGIiSB+f2ZNhJutbREEWsmn9GNEDYfzjnszmRyIwI6LMBF8Y0tjGMLSYZMBEIpFkNpkyknDDmnDhPoygHtJ6u278ZoAS7sf7iD7LV6Q6acyugwpwlRYDyUjhXd8MnKHZvxcQDKLYUvtZdW2TS8uPDMiSLywr3tjnliRSFKlkVrwjGvdT8KuWQDRxlnjdy1UKH2BcIJyd5ya+sYMzAIXccE4VBkZMeUMXSoCwzspeEyL5a8kMzvfaiDFFvt6UIrz6carRLVKIef+RETcVwXN4fVccMgWQ3ht6t3bfbOWDTv+teb4WPPu3SFDVDFg+m5JP8/5Z+FVcElWOybicm+cS61D3gPLuauYF/6DRzJvmXbUSaFkYrMxZfEOTafrd0VzgM452pzva8kcJSG9Q50BdYhsJiAbSpbTQBnO7gCvRQ5KVnDKl1gr/Dr2JrcgyOZqG2WeSFYzFiAZRqiNbtVPlo5qAV9bbSy+sJJb2/VV0rvRmvZOpSwAPpFEgfSb6KTInQ2241eHleycm6+fzqWBxaiKbgAk7Q6PDVmE3anXkdH8mVkkXOYFG68EKGM8LfRYLOFQkaPBbTLnk4LODqYHH+zfA02lq1SnNfTJ/Cj5Avo43FHf7P1hTGWudlcuhzfKLtH8Q+lj+OxxLPIiqwhnu9T0oCP13RRFH3ypu77CzsoFRqFAUkYzVU4QDaXLcfm8nVK+cnkS3gi8SJSIqNsCmHH2R1vqk2RxrHMO7iQ/S/uDN6Kuf6pqGTl6Bw8XVDP9OvLsnTPz09FNGmGc9EkE5fTFBe6kPznQm8Hk7RabCrXI/dUch+eSR60jHHKai64YVgoHV1PWE65Ebnv9f9K3a8v/TxuD8yGqaX+Pf4FEy0q9WZcXd9Et/VcThuOlAPDvOS0lq9Vqz6euYinE68oQBO0sfhj9Q9weOxP0eCbYADjVgzk2A1WUFqcxHPJ19RCv11+n2qrSkeBy/MfmnG1uUnj0JosI4aCMC7Jl9FbXbpEGW3v/60l93jF/VgQmIZPUHtZWXK7oWNGneuRs2wJi78jsV8VV2NgumpTtk4B/yzXqNEyFugrtbeUK+P6vdwKSW8OnsfZTLfhjFM+zbMy7ctld1E78Btb5LHliKLkx3gSewY6ld660jut+UL+KRdlBKm1WCswLm6PV5V8Rq/a1AnHCoGMrEKDBmnsFz6XnnBExcv7Z/qc0pM7IHSBYv4XaOSvPgdu5Z29Ij3/yrRSZexMpsvFPzl4yQL4aN9O9FNkzDwsbAsqz+T822RL0lT/eIq7D0X9CxGSEQwJawusmtJ/ZKyOVSljDq7iP5M4SL2MqznZOuwW4bQl7Do1Ii/nruViiivBVVHxFfUPHtKsbXAYVhe3+QqgI1ck/1jqHeyMH1BzLWPWYrZvMpy2nNE0dVRLgn4oYsazI029dCj/BJDyVjj7F1w9rYffVIbG0hPBvVLg6fh+nKCtrtLK8bu676qcMu0sCc7B1uoNdIio03W4XtlyPMs/SdlMiUH05uIo5p9kY7TFPGYnKM8rkvOZ/yhjC4Mz8pK9P5fEhp4OdGev4RatBvvHteOJ6mZ8oXQRttd8Cw9U3IWj43+GH1Y9gAAdw0y9af4JyuapwXdtnwX801+XRtsQdbcH7lrRoYETyti91At99HNGVxq5mr2BtdfaqTLP03FOw4NjluPXtY9inK9a6ZWxIDZUrkDOLB667i9fquakjvJZzD/n3Rp1w05rBdbzw74/ljpHB4IkJvprsYIiI3ND5YcD5JXcddx7rQ3fubEL71M0vfR8/yEM8qzSkdFbVrpA8f+QiLh3Jd9/1J/juSg047AjPCc/uu8TCfw+fhgbq1bhSxWfw77EMV1IZTscrwTAC/G/4jd03VH6Sdxdtgi1lLd7E3/H4VRUyfkowr+sfUTJv5x4A5czH1p+CvrnIuK/3vBSpLbrPjocMvOrQB5VaxXq/3jqot5YvYLCfar728AZdXmpLbQejcHp+IjazE9iLxrPbvep2jbLunoIm6avQGxzVahnXO+/Ran8K33B+TAf9olh6leyMjw59iE8XLVS6T3W8xy6M9dsHSBPRzAekT7ViZrSMgyhtZlbZq3CWJwJ8MNsTBmYGZiIxpLpqjL3xDtVAZjyzsjSdxt8tmQuttZ+DXODU1Vjf7znWbwi0wQFVJz+OW83WYqq3lsbJnst+k7Zb3GT/XU4M2WXGkvDi0tmYRIVjEmyKP5BTftIMooPcjeUh/G+GiwqmYkvli/GtIDeUnpyN7HhozCOJqNwoXPuqwlQY7tvNvzpQRfA0OU1Ieqll4XxUYgZGjLh/zzxx3BSL+/HmXQ3pgbGYwo9T4eiPp7A9r4D2NH3Kj0REjYm6w1Bf0M0ccqvYoMalqUa9nVJnvXSFGvYF6u4tKadDvsdSpjpKlP843Bu8H1E0/9WiX8qfQkXMles08wdpbdiZcWnMb+kgWqUjurMhxRP473sVRXVzoHTCqTp3VWEZr0JB5ez9tR0HZwrgiaNeXd1mORbLAGmGdVmKwjkv14VI1FEx2tL3Qu+LT7r1VZ4ZPKo7NKqo8j7LvP/JTo8RJOz9t/m5WuFhAf8vrX0+Il620beBc9/oTkXD8X0I8GEtqww8CEocH5lmHKypZi0keN60cOxhd59dJJnjlEPTs852IoiNCRABfLcPc1kpY2qpt77NW3Y5PN6cSYtYzE6zren57wWHsLK8AAllZ5bUZ8TbAtV9le9uMQQGPJlrE68LZse2ILbIjEMQyMCaBEB9QlsIRdL4frI5LRY7FMdo3O+2MYHU+GRABsdQCedXtGkaWgSjNHZidcTp55ZBw4RU4CoMunpSs9CFsW8v0QwCvoff5QWtguU/9wAAAAASUVORK5CYII=",J9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAWhSURBVHgBzVldbBRVFP7u/HTY0tptaGtEbFobAvIjo2gMJsaFBxMTlKAJPMhfo4m+AdFnaX3TBynG9wI1xsQHTIyRN+qLiTE2i0Jpok3XQFro77Zrd7u7M/d67p3d7W67P7PtUviazs7O/fvmnHPPOfcswxph998NQddtMO11MGFDiCA9Dmaao2CIQGgRcPcmOB8Mdz8ziDWAVdPZ7h8Lwth0FhDn8sj4XSlC4waRTvWGuzsj/of5JaZbF6j3OdQCTFz2S7QiQXvgPkmM96BaiVVemdTPe8Ontl0u360M7KvjF2smtdIM+sIntp4v3VwEGVu7RjYTwkaAiTCp/CCpPLqySSs6wKy7sWHkJASzYVjXijWtIqjUKgdsPEL2N7T2ChSo2L567wz5tX48SgicD5/a2pf9miNo9090wBQ3qEMHHi2icJKdWXtcVrGJC48BOYkgTPK5GSgJKukZYgwPCYIJqTq1mBAafcov6lvpQU6yWUrRk6CUXi0JQXoOoe4kmfYAw/t7NuOrUAM+3m/RM7ccNQ9anfK/RmbKEGoIScoyGV5tA47tegJ2mwVL85Z6MS1w6Y8FcOjlJ9EYRTD0GPYAZSXrtD2RuWp081SA4+0uE+8814wtlqE0ybJ7kaQ6ubiU6V9BxWSLMmMywLVQCXddkgxbca9zF/tbGU7YzXi5haRlyN2nZeyscOxkwiXpWZ4JVMoEKJ0zSJT7UAU8Qydp0V2j6eLw9nocbrews7VeSUqqlwuOhOtifH4JXVsacmM5/U0uSWIVLTCLkDSMjsr9hDJ3pUb6bG8EjnSaOLqjBU2WnhGUp0iHyN9+kMClm4t4rdUtICh7jMyk4Bsa9hnK/iomXQwG59j/pI73nm/EK20BmDpTZPMRS6Zw5c4ivr0Tx5lddTi1t6VwFnqT0dk0fEMgSFZcIs/zfAUaSMZvPhvAkQ4TO1rqYWhaXgdPbRJ/TSbw+e8L+GeW4yM7gNN7gqtewBVSxagGQaN0G8fOJoav3yA1mtJU5c5nefw9lSbSJLVbMQyMcKQcjk9eqsexHU3kRLRVm2CBXMzd+SQ9r4NfSBVHi0uR9iH5jRhNGqzL0slbUdradBxfDMVwa4qTZDk+PbAZh7uIHCvuFsZm4nCYiSoQlaKJZk5khSAuw3PAuz9MwW418db2APaSC2lvMIm0i+9vR3HlbwfxFEO9KfDZgUYcam9Y9nlFML7khTnh/6wWIQlSNltyJzPl8YemBYam4uSIY2i2OOJcR8JREZUSIAe9B5qIHLkZppUl+CcZoBC6fzcj8K9Gl18qd/TiKicCMymTyGlARg672upwaNsmUoRehpr0jS4i866XOPgFCY9e2Q2jKgjkx5ORWQc/jv5Hkha5kFcMaeo/Fk15mYxf0IHfS7eujs+VdDc+6Opc4PhuCx/urkfjJssLcwV9BPm/BI7/HCVJ+rQ/gQhl1p3eTExcwhohl3PJB303nMIH12cQiTnk7xwVDnN9iNT9pLTnKgoZGlUhkM2onVQf1gEVBOkyGtPRfX2OyM557ltknTltsok4GK+CIFUecgS9/J+vWYpZSJLzSYEvh9Lo+XUO00spZQNSxb9NpPxbH5VGsmWR5UjipHuo/nJ6rbaYm1vtdoafxpIYmkziSFcADxICw1H4cy9ke6TR3uX58kDHznN07LyIWoLir2Caf+sTvDu/XlOw3aihrxaqLkA15GjtlcWk4rWZgXEqfSCEDYUIh08+/cLKp8WjupM8StcqHfi6MEh2d7BYQ/ny28A9Url2Fg8VpNaT20qW+Moel9RAMlq1s2oNL807X46cRMXznDJal5H4xRXUDLQRXaq/nNhaMUBUWUSXJRIqBwtGlf0qz9JKYhRSKWoVK1TWhGA+1IFfnanVsbUjc/gK5sho9C9oo8l0jjKm8Mm1/QzxPzYLM6L+K3QzAAAAAElFTkSuQmCC",X9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAokSURBVHgBtVh7cFRnFf/de/feze4m2ZtNgzQJYROSNqltk1ha+oBxg1VRW6U41dZ2xnY6U7XTkUCt/cOOELX/OLUEHBhq6zTYOkPFsXVw9A+hhKKEIo+FAmEgkOWRUMjrJpt93pfnu3uzbJK7IcTxZLL39X3n+53zndd3OMyRuhc/EuLOnG0y1PgXfXKgyUwkZMkwZRMmVJeoiCYi8VQiwldWHhuOJzvvvXyoE3Mg7mYGH0VQ9krGatHraxWjY7LLYHBMi4lpTrAzrcvEO3bVeR4pUYyI9Ys6+y70tT2gnI7Mds1ZAdwjB+Uad9E6VzLZKoyNwzBvSq5Jq2m+AqgBueOat7jtgdOdkVlMmZn6Q4+vjnUdXO9NqTJPow02ycSciE3jmc450iiPSLJmYVvD2f0dmCvAE56qDSVpvZXTDdykNdyQOJJSJYlVv7990XD3mrzjnF4eDa2U5Z4LH0hXroQ4ncf/lQQT+p2fDw+WFLY0d36oTP3suHrgmrLH3Xd1duA487qY1pU9G6ShnCEzTDdpc4TjJ5tKe/s+cGQ/9cW5QMMGj6K00hq2fzqytabqtEVc5ecg3NNI13IIlbdCcEtQR6MweiIwL15G6sARuFOaPcd0XJaj94YADEme9rsT59fkBdhdd/8zhecvvuPSr7OaNJjLxA+tRIb7+SfhXvl1FDXfBU50IR/FLvYh9c+9iL2+Ba4zvbSjJJjp7GWGQN+WLVmzsPMv7dMAdtWHghXnzu8R1XTQnLLzLNbxXEZj4vNPI/CLn4IrlWkUb3GwvJN+TG5Ct9cZG2YmUnKqisFNb0H7Ja1NoYrZwLRoQC/iklu55EF1ixKx7DGLpCyurBM1Yxo4W3Uw5CL4/rAJpb99Da5bAhAoVNgKJZMzoKWTSA8MwBwZga6mLaGsBWgQKQa8JCLw0g9Ruu9D6FXlzsZDEnpSabnKLa+bpMEuuT5YoaV7hfEEk3UqNqiSBO/7mxH45oqsTCZpxhgaxtDWbVD/sRs41QNjPMZ0DS5QAldjA7xPrUTx498C5/GAs+U2WCo8cw5Xl66ENKhYfCatx8b4C3FtNF3SjIhiTSuvmL/OFU9OA2cBoW31tK2F/KgNjm2jrmPgN1tw9falMNe9DqErDGF0HKJuQqJv4sAg+N37EH9uLSJNy5E6dDTHPchMamsR6NiENO+wHv2zbFXgMlqzGuyRFvR603oQDqQ2NaDy4N/BixLZEwsLGoZ//CrUre+yaHJDYjugycXw73gbvuUPWlvOSKfgf+2pF4D3dzrOUwMBZeHwiRK+a35TyKNpQSfGDL6/7SeAS7Sl1zH42uZJ4Ng4kzzEYCHHIQeyHRRGRjHy9AvQRtiW2hPJMIte/hF0gXfMnYIyLHcvXhHi5xV6Q04xhTHWaipRuOJL2Y1Pnb8E7Y3NWXDMa/XHvoLCXX9C0f6dkH62GoY43cnYtkrXBhFtf4tEzHxnmDyNdwL3UQx1KD4E5v3dvU282d/fyDvYHnvjuu8LECTRBmxC2bIN3FjMBmfC/YOnUL7j9yhuWYriJc2Q214GVn51urDIZIzkuzvAG5r1zvJul4CC0INwKo6sJMGlQrxbkoJwIDbJs/whGy3FerIZ46N92SCkFxfC/cqL5J05GiPQRaseQT4yLl1BkjJMLkl332FlkqnENOwr8jfyOi8EnZixOCZVVdmD6SkWQ/rkWUxEBf7eZnirFkxhSloRReQjVuAanw1NnnNLKXSOd1zfSCZk3pVKyY55jcklZFIY02aCDF3QjexQ6Y46GFPc2CRNRz8+iHxkBW99qusLlIUcNMjsVjOoBuXhWG6w13osNsEZos8Hk2xmYqim6tOdjz0fDiM/QB6Ge7KGhUQcjpnfzlK8yvGK4YCQ6Sp98nR2sFhSDCysoNuMBszL/ZniIYfi53qhHTiKfMQCs7SoavKcs2fzpD0TKUlUeM7rVXgHCZhnpz/6F1UeRqbkc7ng/TY5gG0v6f2HoEWjOQxJq12HyEtV5CPP3fUQ55VODLciQ3LvJ3nLOpduRPjk2GjYdLABljXw7/9AJ88zbBb+F74PvcSfGZBIEBguR2ATiT/+lewpf3mqL7s/q3XLc1UKOcdOOXoxY5NMpy/QFgt7nXhaiSSRQvSNrdnqWKicD+GZJ6z7gsXNQLHP1gYtkE5BO3Y8jzaoQCDbKyEBOTtQ6fQ3zsLWhT4SzlkovrIizAsLasLGDDV5eut7iO7+OFO90LNGlYh15r23KetczATiyhj0oZHp8OgjR2bhW/0cCupqYNqFGGfwiLW/PUPNzoEd+PmG07s6taJiJT/CFEa/9yJie7vAa7QlJ09ZLu5/eBldhCwzzy0ypPvvsTLMZDWQhT/SAv/PX7K2l2UQKyvt3AV91968yybooM+6EZa+47HERo53LsNZ8BUHFAw9/F1cCq2ytiRJid51Vz0mqiWrcKWCovTNXyNVv4gKB7Jh4pcs80N4dQ3mbf8dBK8HE7aSvETHgLXrJ9nwpDVJSLGuutO6Zz+91NJwF4sjiI4DMxh5plohLSxuRNmBv1lpLuNfmffWraYieuQ4RCpyXXVBuHyFmSjANEd/GpnB5RVPwnP4ZLbqziVrDHUf+nV39QPJ0xFLg9VUuY67xY24QUuDGTM7Y+gULia0wTw8eeg4UqfOWux5SnX+JffAS4cpqbAos6U8cwoDifAJXFm+Cp4jJ2Agz46RvWoBfwcDx56zSbBPja9PiILC3aivQQvKj345V2SMvLMdQ197AqPv/RlmWrVqPgbAoCurvtXuHoy+8iuMhb4D16c92abSdNZ0tpHEyDWf3JZ9lzvgwkOrWvkDn2wQ9PwgWbui7OQeFNxea22bQQemgSXfgHn4UwuUHqyAWV8LqZQCcpTOKD29ME73UH2nW+bjfOK0zn3WqTFaveDZhnMHOhwBMjrhCbYHUimqPB1qRKbd2+tQdmo33QtWtomdj2DwtmV0FplF/Z+HMgd3ylx+/8bq4e7W3G/T6pw7E5HWdPn8TnNSJ2BCTqqqayooW/DXM0a4G25Dx9zR2SvV14WngnMEyGikduFjWkNdeOpXxsoTDGaKVBtfdMdOGP9D54vJqVWWdw6UlbQ4fXfsWdhdpuYeuaG9IDq2mjcMixPbUirBM4xZ7u37DCa1NXjTnKGPk4c4dtDiMeSSNjZePtyKy4cdh83YvqpVulsHysueVXkxYoFitpLOnCkYoHjHdur4KDAxuxYdZwOzCmCXW+GpD9OYirTONOeGnJsvhTvOLyhvGb913ra0pwAYz5RYqb4+aJSnYcOdFUDmZEVFSM4LbLzoQ3V5TpNozgAZtUQORG67En5mRCqojpbP30bxLTK24U0Y/Vey4Ey7UcPldo7s0oAF6qS/UBkSxLbUWLpk0dUTrRPNoRsKhTnSvtqloXIYIa2vv7HQ7QmqHIISO98QqRTwzYICJTk2FjZEYa9YUxOuC+/qxBzovw1oTOr3rvEJAAAAAElFTkSuQmCC",e8="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVRSURBVHgBxVhdbFRVEP7O2Z+2u5buUqg1i1AQGmKiRBNE+kIVEw3womKCIiC2GNEYiQoaH4wmJihGBI2E2NZGqJqY+CJaY+JPq9KmGMW/qm1DW0K3v9Tdbbttd7t7xjkrLf3Z3Xt3Ke33svfunTnnuzNzZuaOQJrIqxhYb1PRdSTFBgixShAtIiAXBCmkuMgirUTUDYF6FaUz3XvcNUgDIhVhV6XP5YB8Wih6km8XIzW0K4EvKUSHuve6280qmSKoiTlh2Q8V3ccqDlwZFO9aphQd7Cp1nzcSNiToKfftYhce0Twxu2jnYHjJuzvnZDKhpAQ9lYG3oGgfriLYnIe7SnKeTfQ8LkFXZZvLGXVVseU2Yy4gRHVQqO3+3W7/9EcynjyT+3DOyGkQbXIqGdfVMwh6KgJvMrlNmHPQllhITcMUF3vKAzsg6ATmFWKXtyRngsMEwevKR5ZJEarhywLML/xBScvH43HCxVKEX8D8k9NwOYkOjN/ELJhf6SuwKHEOCQ5NurjtWgvW5VuRbZdo7I+gviuK3hFlRnWYrejRVrTqO6nkfg7SpOTuut6KHzqjCEXJaHEssAu8vSGLdWyT/rXDG1R4pWEU3fy7cakNg2HC8T9C8ZZwOCLYxz5+OWZBT4W/DQbu/f7+bPzaF8H+06OGJI/f6cCWAltSmcZ+hYe+CiIQUojEW47Q5y115cn8Ml+xEblMq8CKHIn7VtpRdbcDS65JbOzb8y2G5PQL+phYxUYHnLYExUxgsaeif72U0rIWBogoQvDSa67nmPp0sxMPr45P4o4lNqPlkGERcGdK7P1uGIFwYm8oJddJSarIaMEIx/UvvdGJe49T4rUiB+oeyMaO1XaszLlsUVeGuQ5uzzdBdA0nPzDcV26w8tHIh3Hc4/DZEG7Ns8BpvUxgabbEwaKs2HXrgEIPb7g4y1wi6BsxsSmoUDK5G4zEdJw8WGjDR03hhDIrFsiY+ydbMxEG2K0jETMERa6VCeYadYXBMUKxx4Y8R0oNeEI0/hs1Jce75UoSMJU5q5pCmC00+0xtqSEls+w3I/nen2HUeiOYDXzWOmZWtF8SyBTBIXbzo18P4/WfR3Fh0LQFZuAvdm9Dj8kXJZzjNINmmMSNCyW2FdqxMDP9WHznN/OhwsbrkUSoNatwti+KHzsjibO/Ab7tiOBUm2n3MkSd5E6hIQUNvFg3gnd/D8FUlpiEjiEV000FbL0z/zcL5f5eXftSUdb1eBvnxqfWZMJiYFBfiLD1iyCa/ObSiwa/f3tniWt5LKvyiOIYUsCaRRY8flMGnrg5w5CcttzW6tTIafCy1fo31g/arTgypsA9IeJODYq5AbhnmRVurrOFLolVLovhBhzb+Lg5jFd/Go1VjlRAuk8I0xv6OmbBdt3/E44mUqjpGMMnLWH+hufu25G8lA2wO0/+E8a97NIDp0dSJqchSJWNz28mHFTA85cxJXTjmnTEoXvDW9jFy7nm6jjMYh8PcbtzYZDwN+e4loDCaCR1UuPQsUeUUdxVmnV+CkENT4VvJ//1AeYTUuycPK+Z4i9vifsEz/mOYr5A4vD0YVLcM+h5P3CKo3wL5hJE1d5S94xxS9yItwm1g9+mGnMG8XnQ4t8e90kyNR6F8JyGnsHVBIcUWy7hiC9pzvCW8tyOxE59sjD74NRGjyQjp2Gq6udXdvHkIet5zgGPscYVTh9omLvko4MWOhRvHpgWwXHoEQmXnueUEptFqnMc/hDnDHFsiKuWGWJpEZyMJfzBr6RYy/1kkS4wnL9WkKJFvKLSXToJcVEqauE6X6s7Jm9Jbj3SwH+CZAr8VovdSwAAAABJRU5ErkJggg==";function t8(){var C,B;const{slug:i}=Sj(),[s,l]=ne.useState([]),[u,f]=ne.useState(!0),[k,b]=ne.useState(""),[A,v]=ne.useState("");return ne.useEffect(()=>{(async()=>{try{const D=await ti.get(`/tourist-object/tourist-object/${i}`);l(D.data),b(D.data.location.coordinates[0]),v(D.data.location.coordinates[1]),f(!1)}catch{f(!1)}})()},[]),u?Y.jsx(Ab,{}):Y.jsxs("div",{className:"flex flex-col w-full items-center pt-20 pb-10",children:[Y.jsxs("div",{className:"flex flex-col gap-8 items-center",children:[Y.jsx("h1",{className:"text-4xl font-semibold",children:s==null?void 0:s.name}),Y.jsx("hr",{className:"border-4 border-orange-500 w-32 rounded-full"}),Y.jsx("img",{src:s==null?void 0:s.image,alt:"tourImg",className:"rounded-lg"})]}),Y.jsxs("div",{className:"flex flex-col mt-8 items-center w-full ",children:[Y.jsxs("div",{className:"flex gap-6 w-[45%] px-4",children:[Y.jsx("img",{src:s==null?void 0:s.image,alt:"alt",className:"w-16 rounded-full"}),Y.jsxs("div",{className:"flex flex-col justify-center gap-2",children:[Y.jsxs("h1",{className:"flex text-2xl font-medium items-center gap-6",children:[s==null?void 0:s.name,Y.jsx("span",{className:"px-4 py-1 mx-auto bg-orange-500/20 text-sm rounded-full text-orange-600",children:sd(s==null?void 0:s.category)})]}),Y.jsxs("p",{children:["Diposting pada ",m6(s==null?void 0:s.created)]})]})]}),Y.jsx("article",{className:"mt-10 w-1/2 px-4",children:(B=(C=g6(s==null?void 0:s.description))==null?void 0:C.body)==null?void 0:B.textContent}),Y.jsxs("div",{className:"flex mt-16 gap-8 w-1/2",children:[Y.jsxs("div",{className:"flex py-6 px-4 w-[400px] bg-white gap-4 rounded-2xl",children:[Y.jsx("img",{src:K9,alt:""}),Y.jsxs("div",{className:"flex flex-col justify-center",children:[Y.jsx("p",{children:"Harga"}),Y.jsx("h4",{className:"font-medium",children:Dp(s==null?void 0:s.price)})]})]}),Y.jsxs("div",{className:"flex py-6 px-4 w-[400px] bg-white gap-4 rounded-2xl",children:[Y.jsx("img",{src:Y9,alt:""}),Y.jsxs("div",{className:"flex flex-col justify-center",children:[Y.jsx("p",{children:"No. Telpon"}),Y.jsx("h4",{className:"font-medium",children:"0895103723237"})]})]})]}),Y.jsxs("div",{className:"flex flex-col justify-center w-1/2 gap-4 mt-10",children:[Y.jsx("p",{className:"font-medium text-lg",children:"Share wisata ini"}),Y.jsxs("div",{className:"flex gap-4",children:[Y.jsx("img",{src:Q9,alt:"fb",className:"w-10"}),Y.jsx("img",{src:$9,alt:"wa",className:"w-10"}),Y.jsx("img",{src:J9,alt:"tele",className:"w-10"}),Y.jsx("img",{src:X9,alt:"pint",className:"w-10"}),Y.jsx("img",{src:e8,alt:"tw",className:"w-10"})]})]}),Y.jsx("div",{className:"shadow bg-white rounded-lg w-1/2 mt-10",children:Y.jsxs(qD,{center:[-7.8672,110.3506],zoom:10,scrollWheelZoom:!1,className:"w-full h-[30vh]",children:[Y.jsx(YD,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Y.jsx(GD,{position:[-7.8672,110.3506],children:Y.jsxs(KD,{children:["A pretty CSS3 popup. ",Y.jsx("br",{})," Easily customizable."]})})]})})]})]})}function n8(){const{authenticated:i,setAuthenticated:s}=yl(),l=Pi.get("access");return ne.useEffect(()=>{s(!!(l&&l!==""))},[l,s]),Y.jsxs(hD,{children:[Y.jsx(rd,{path:"/",element:Y.jsx(G9,{})}),i&&Y.jsx(rd,{path:"/*",element:Y.jsx(w9,{})}),Y.jsx(rd,{path:"/wisata/:slug",element:Y.jsx(t8,{})})]})}function i8(){return Y.jsxs(Gz,{children:[Y.jsx(a7,{}),Y.jsxs("div",{className:"h-screen relative",children:[Y.jsx(l7,{}),Y.jsx(n8,{})]})]})}ak.createRoot(document.getElementById("root")).render(Y.jsx(qj,{children:Y.jsx(Xn.StrictMode,{children:Y.jsx(i8,{})})}));