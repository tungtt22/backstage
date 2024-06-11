/*! For license information please see ef566c1a.d9bba8fb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[701476],{317844:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var t=r(824246),o=r(511151);const i={id:"plugin-auth-backend-module-onelogin-provider.oneloginsigninresolvers",title:"oneLoginSignInResolvers",description:"API reference for oneLoginSignInResolvers"},u=void 0,s={id:"reference/plugin-auth-backend-module-onelogin-provider.oneloginsigninresolvers",title:"oneLoginSignInResolvers",description:"API reference for oneLoginSignInResolvers",source:"@site/../docs/reference/plugin-auth-backend-module-onelogin-provider.oneloginsigninresolvers.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend-module-onelogin-provider.oneloginsigninresolvers",permalink:"/docs/reference/plugin-auth-backend-module-onelogin-provider.oneloginsigninresolvers",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-backend-module-onelogin-provider.oneloginsigninresolvers.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-backend-module-onelogin-provider.oneloginsigninresolvers",title:"oneLoginSignInResolvers",description:"API reference for oneLoginSignInResolvers"}},c={},a=[{value:"Variables",id:"variables",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend-module-onelogin-provider",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-auth-backend-module-onelogin-provider"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend-module-onelogin-provider.oneloginsigninresolvers",children:(0,t.jsx)(n.code,{children:"oneLoginSignInResolvers"})})]}),"\n",(0,t.jsx)(n.p,{children:"Available sign-in resolvers for the OneLogin auth provider."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"namespace oneLoginSignInResolvers \n"})}),"\n",(0,t.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Variable"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend-module-onelogin-provider.oneloginsigninresolvers.usernamematchinguserentityname",children:"usernameMatchingUserEntityName"})}),(0,t.jsx)(n.td,{children:"Looks up the user by matching their OneLogin username to the entity name."})]})})]})]})}function f(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},371426:(e,n,r)=>{var t=r(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var t,i={},a=null,l=null;for(t in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)u.call(n,t)&&!c.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:o,type:e,key:a,ref:l,props:i,_owner:s.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},541535:(e,n)=>{var r=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,g={};function v(e,n,r){this.props=e,this.context=n,this.refs=g,this.updater=r||h}function m(){}function b(e,n,r){this.props=e,this.context=n,this.refs=g,this.updater=r||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=v.prototype;var _=b.prototype=new m;_.constructor=b,y(_,v.prototype),_.isPureReactComponent=!0;var k=Array.isArray,S=Object.prototype.hasOwnProperty,j={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function R(e,n,t){var o,i={},u=null,s=null;if(null!=n)for(o in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(u=""+n.key),n)S.call(n,o)&&!x.hasOwnProperty(o)&&(i[o]=n[o]);var c=arguments.length-2;if(1===c)i.children=t;else if(1<c){for(var a=Array(c),l=0;l<c;l++)a[l]=arguments[l+2];i.children=a}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:r,type:e,key:u,ref:s,props:i,_owner:j.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var w=/\/+/g;function C(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function $(e,n,o,i,u){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case t:c=!0}}if(c)return u=u(c=e),e=""===i?"."+C(c,0):i,k(u)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),$(u,n,o,"",(function(e){return e}))):null!=u&&(E(u)&&(u=function(e,n){return{$$typeof:r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(w,"$&/")+"/")+e)),n.push(u)),1;if(c=0,i=""===i?".":i+":",k(e))for(var a=0;a<e.length;a++){var l=i+C(s=e[a],a);c+=$(s,n,o,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(s=e.next()).done;)c+=$(s=s.value,n,o,l=i+C(s,a++),u);else if("object"===s)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function I(e,n,r){if(null==e)return e;var t=[],o=0;return $(e,t,"","",(function(e){return n.call(r,e,o++)})),t}function O(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},L={transition:null},A={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:L,ReactCurrentOwner:j};n.Children={map:I,forEach:function(e,n,r){I(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return I(e,(function(){n++})),n},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=v,n.Fragment=o,n.Profiler=u,n.PureComponent=b,n.StrictMode=i,n.Suspense=l,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,n.cloneElement=function(e,n,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),i=e.key,u=e.ref,s=e._owner;if(null!=n){if(void 0!==n.ref&&(u=n.ref,s=j.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(a in n)S.call(n,a)&&!x.hasOwnProperty(a)&&(o[a]=void 0===n[a]&&void 0!==c?c[a]:n[a])}var a=arguments.length-2;if(1===a)o.children=t;else if(1<a){c=Array(a);for(var l=0;l<a;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:r,type:e.type,key:i,ref:u,props:o,_owner:s}},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=R,n.createFactory=function(e){var n=R.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:a,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},n.memo=function(e,n){return{$$typeof:f,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=L.transition;L.transition={};try{e()}finally{L.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return P.current.useCallback(e,n)},n.useContext=function(e){return P.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return P.current.useDeferredValue(e)},n.useEffect=function(e,n){return P.current.useEffect(e,n)},n.useId=function(){return P.current.useId()},n.useImperativeHandle=function(e,n,r){return P.current.useImperativeHandle(e,n,r)},n.useInsertionEffect=function(e,n){return P.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return P.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return P.current.useMemo(e,n)},n.useReducer=function(e,n,r){return P.current.useReducer(e,n,r)},n.useRef=function(e){return P.current.useRef(e)},n.useState=function(e){return P.current.useState(e)},n.useSyncExternalStore=function(e,n,r){return P.current.useSyncExternalStore(e,n,r)},n.useTransition=function(){return P.current.useTransition()},n.version="18.2.0"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>u});var t=r(667294);const o={},i=t.createContext(o);function u(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);