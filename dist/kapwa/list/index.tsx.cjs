"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const s=require("../../jsx-runtime-KWq1EBG2.cjs"),j=require("../button/index.tsx.cjs"),c=require("../card/index.tsx.cjs"),i=require("react");/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),y=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,n)=>n?n.toUpperCase():r.toLowerCase()),l=t=>{const e=y(t);return e.charAt(0).toUpperCase()+e.slice(1)},d=(...t)=>t.filter((e,r,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===r).join(" ").trim(),E=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var R={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:o="",children:a,iconNode:m,...x},u)=>i.createElement("svg",{ref:u,...R,width:e,height:e,stroke:t,strokeWidth:n?Number(r)*24/Number(e):r,className:d("lucide",o),...!a&&!E(x)&&{"aria-hidden":"true"},...x},[...m.map(([p,h])=>i.createElement(p,h)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=(t,e)=>{const r=i.forwardRef(({className:n,...o},a)=>i.createElement(f,{ref:a,iconNode:e,className:d(`lucide-${g(l(t))}`,`lucide-${t}`,n),...o}));return r.displayName=l(t),r};/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],C=w("external-link",b),v=({headerTitle:t,headerSubtitle:e,externalLinkText:r,listItems:n,title:o})=>s.jsxRuntimeExports.jsxs(c.Card,{className:"mb-8",children:[s.jsxRuntimeExports.jsxs(c.CardHeader,{children:[s.jsxRuntimeExports.jsx("h2",{className:"text-2xl font-semibold",children:t}),e&&s.jsxRuntimeExports.jsx("p",{className:"text-gray-800",children:e})]}),s.jsxRuntimeExports.jsx(c.CardContent,{children:s.jsxRuntimeExports.jsx("div",{className:"space-y-8",children:s.jsxRuntimeExports.jsxs("div",{children:[s.jsxRuntimeExports.jsx("h3",{className:"font-medium mb-4",children:o}),s.jsxRuntimeExports.jsx("div",{className:"space-y-4",children:n.map(a=>s.jsxRuntimeExports.jsx("div",{className:"p-4 bg-white border border-gray-200 rounded-lg hover:border-primary-500 transition-colors",children:s.jsxRuntimeExports.jsxs("div",{className:"flex items-start justify-between",children:[s.jsxRuntimeExports.jsxs("div",{children:[s.jsxRuntimeExports.jsx("h4",{className:"text-lg font-medium text-gray-900",children:a.title}),s.jsxRuntimeExports.jsx("span",{className:"inline-block px-2 py-1 mt-2 text-xs font-medium rounded-sm bg-gray-100 text-gray-800",children:a.category})]}),r&&s.jsxRuntimeExports.jsxs(j.Button,{variant:"ghost",size:"sm",children:[r,s.jsxRuntimeExports.jsx(C,{className:"ml-2 h-4 w-4"})]})]})},a.id))})]})})})]});exports.List=v;
//# sourceMappingURL=index.tsx.cjs.map
