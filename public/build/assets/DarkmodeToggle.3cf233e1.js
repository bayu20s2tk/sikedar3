import{d as x,i as g,J as U,A as q,o as m,e as b,u as l,n as y,a as f,f as M,t as le,B as ie,s as L,x as B,r as j,H as P,D as V,E as K,b as ue,w as O,T as de,c as A,j as F,K as ce,y as T,F as G,l as pe,q as $,p as H,k as R}from"./app.285d111a.js";const fe={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},me={class:"flex items-center justify-between flex-wrap"},he={class:"w-0 flex-1 flex items-center min-w-0"},ge={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},ve=f("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),be=[ve],ye={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},we=f("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1),ke=[we],xe={class:"ml-3 font-medium text-sm text-white truncate"},Se={class:"shrink-0 sm:ml-3"},Ee=f("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1),je=[Ee],qe={__name:"Banner",setup(e){const n=x(!0),t=g(()=>{var o;return((o=U().props.jetstream.flash)==null?void 0:o.bannerStyle)||"success"}),r=g(()=>{var o;return((o=U().props.jetstream.flash)==null?void 0:o.banner)||""});return q(r,async()=>{n.value=!0}),(o,s)=>(m(),b("div",null,[n.value&&l(r)?(m(),b("div",{key:0,class:y({"bg-green-500":l(t)=="success","bg-red-700":l(t)=="danger"})},[f("div",fe,[f("div",me,[f("div",he,[f("span",{class:y(["flex p-2 rounded-3xl",{"bg-green-600":l(t)=="success","bg-red-600":l(t)=="danger"}])},[l(t)=="success"?(m(),b("svg",ge,be)):M("",!0),l(t)=="danger"?(m(),b("svg",ye,ke)):M("",!0)],2),f("p",xe,le(l(r)),1)]),f("div",Se,[f("button",{type:"button",class:y(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-green-600 focus:bg-green-600":l(t)=="success","hover:bg-red-600 focus:bg-red-600":l(t)=="danger"}]),"aria-label":"Dismiss",onClick:s[0]||(s[0]=ie(a=>n.value=!1,["prevent"]))},[(m(),b("svg",{class:y(["h-5 w-5 text-white dark:text-gray-900",{"text-green-600":l(t)=="success","text-red-600":l(t)=="danger"}]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},je,2))],2)])])])],2)):M("",!0)]))}},Le={class:"relative"},Fe={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","px-1","bg-white","bg-opacity-50","backdrop-blur"]}},setup(e){const n=e;let t=x(!1);const r=a=>{t.value&&a.key==="Escape"&&(t.value=!1)};L(()=>document.addEventListener("keydown",r)),B(()=>document.removeEventListener("keydown",r));const o=g(()=>({48:"w-48"})[n.width.toString()]),s=g(()=>n.align==="left"?"origin-top-left left-0":n.align==="right"?"origin-top-right right-0":"origin-top");return(a,u)=>(m(),b("div",Le,[f("div",{onClick:u[0]||(u[0]=p=>P(t)?t.value=!l(t):t=!l(t))},[j(a.$slots,"trigger")]),V(f("div",{class:"fixed inset-0 z-50",onClick:u[1]||(u[1]=p=>P(t)?t.value=!1:t=!1)},null,512),[[K,l(t)]]),ue(de,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:O(()=>[V(f("div",{class:y(["absolute z-50 mt-5 rounded-3xl shadow-lg",[l(o),l(s)]]),style:{display:"none"},onClick:u[2]||(u[2]=p=>P(t)?t.value=!1:t=!1)},[f("div",{class:y(["rounded-3xl border border-gray-300",e.contentClasses])},[j(a.$slots,"content")],2)],2),[[K,l(t)]])]),_:3})]))}},$e={key:0,type:"submit",class:"rounded-3xl block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-300 hover:bg-opacity-50 focus:outline-none transition"},_e=["href"],Ge={__name:"DropdownLink",props:{href:String,as:String},setup(e){return(n,t)=>(m(),b("div",null,[e.as==="button"?(m(),b("button",$e,[j(n.$slots,"default")])):e.as==="a"?(m(),b("a",{key:1,href:e.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-300 hover:bg-opacity-50 focus:outline-none transition"},[j(n.$slots,"default")],8,_e)):(m(),A(l(F),{key:2,href:e.href,class:"rounded-3xl block px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-300 hover:bg-opacity-50 focus:outline-none transition"},{default:O(()=>[j(n.$slots,"default")]),_:3},8,["href"]))]))}},We={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(e){const n=e,t=g(()=>n.active?"block pl-3 pr-4 py-2 border-l-4 border-primary-400 text-base font-medium text-primary-700 bg-primary-50 focus:outline-none focus:text-primary-800 focus:bg-primary-100 focus:border-primary-700 transition":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition");return(r,o)=>(m(),b("div",null,[e.as=="button"?(m(),b("button",{key:0,class:y([l(t),"w-full text-left"])},[j(r.$slots,"default")],2)):(m(),A(l(F),{key:1,href:e.href,class:y(l(t))},{default:O(()=>[j(r.$slots,"default")]),_:3},8,["href","class"]))]))}};function W(e,n,...t){if(e in n){let o=n[e];return typeof o=="function"?o(...t):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,W),r}var Ce=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Ce||{}),Oe=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Oe||{});function _({visible:e=!0,features:n=0,ourProps:t,theirProps:r,...o}){var s;let a=Y(r,t),u=Object.assign(o,{props:a});if(e||n&2&&a.static)return N(u);if(n&1){let p=(s=a.unmount)==null||s?0:1;return W(p,{[0](){return null},[1](){return N({...o,props:{...a,hidden:!0,style:{display:"none"}}})}})}return N(u)}function N({props:e,attrs:n,slots:t,slot:r,name:o}){var s,a;let{as:u,...p}=J(e,["unmount","static"]),c=(s=t.default)==null?void 0:s.call(t,r),h={};if(r){let v=!1,w=[];for(let[S,E]of Object.entries(r))typeof E=="boolean"&&(v=!0),E===!0&&w.push(S);v&&(h["data-headlessui-state"]=w.join(" "))}if(u==="template"){if(c=Q(c!=null?c:[]),Object.keys(p).length>0||Object.keys(n).length>0){let[v,...w]=c!=null?c:[];if(!Pe(v)||w.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(p).concat(Object.keys(n)).map(d=>d.trim()).filter((d,i,k)=>k.indexOf(d)===i).sort((d,i)=>d.localeCompare(i)).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));let S=Y((a=v.props)!=null?a:{},p),E=ce(v,S);for(let d in S)d.startsWith("on")&&(E.props||(E.props={}),E.props[d]=S[d]);return E}return Array.isArray(c)&&c.length===1?c[0]:c}return T(u,Object.assign({},p,h),{default:()=>c})}function Q(e){return e.flatMap(n=>n.type===G?Q(n.children):[n])}function Y(...e){if(e.length===0)return{};if(e.length===1)return e[0];let n={},t={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(t[o]!=null||(t[o]=[]),t[o].push(r[o])):n[o]=r[o];if(n.disabled||n["aria-disabled"])return Object.assign(n,Object.fromEntries(Object.keys(t).map(r=>[r,void 0])));for(let r in t)Object.assign(n,{[r](o,...s){let a=t[r];for(let u of a){if(o instanceof Event&&o.defaultPrevented)return;u(o,...s)}}});return n}function Me(e){let n=Object.assign({},e);for(let t in n)n[t]===void 0&&delete n[t];return n}function J(e,n=[]){let t=Object.assign({},e);for(let r of n)r in t&&delete t[r];return t}function Pe(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Ne=0;function Te(){return++Ne}function I(){return Te()}var D=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(D||{});function C(e){var n;return e==null||e.value==null?null:(n=e.value.$el)!=null?n:e.value}function z(e,n){if(e)return e;let t=n!=null?n:"button";if(typeof t=="string"&&t.toLowerCase()==="button")return"button"}function De(e,n){let t=x(z(e.value.type,e.value.as));return L(()=>{t.value=z(e.value.type,e.value.as)}),pe(()=>{var r;t.value||!C(n)||C(n)instanceof HTMLButtonElement&&!((r=C(n))!=null&&r.hasAttribute("type"))&&(t.value="button")}),t}var X=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(X||{});let Be=$({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:n,attrs:t}){return()=>{let{features:r,...o}=e,s={"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return _({ourProps:s,theirProps:o,slot:{},attrs:t,slots:n,name:"Hidden"})}}});function Ae(e){var n;let t=(n=e==null?void 0:e.form)!=null?n:e.closest("form");if(t){for(let r of t.elements)if(r.tagName==="INPUT"&&r.type==="submit"||r.tagName==="BUTTON"&&r.type==="submit"||r.nodeName==="INPUT"&&r.type==="image"){r.click();return}}}function He(e,n,t){let r=x(t==null?void 0:t.value),o=g(()=>e.value!==void 0);return[g(()=>o.value?e.value:r.value),function(s){return o.value||(r.value=s),n==null?void 0:n(s)}]}let Z=Symbol("DescriptionContext");function Re(){let e=R(Z,null);if(e===null)throw new Error("Missing parent");return e}function Ie({slot:e=x({}),name:n="Description",props:t={}}={}){let r=x([]);function o(s){return r.value.push(s),()=>{let a=r.value.indexOf(s);a!==-1&&r.value.splice(a,1)}}return H(Z,{register:o,slot:e,name:n,props:t}),g(()=>r.value.length>0?r.value.join(" "):void 0)}let Qe=$({name:"Description",props:{as:{type:[Object,String],default:"p"},id:{type:String,default:()=>`headlessui-description-${I()}`}},setup(e,{attrs:n,slots:t}){let r=Re();return L(()=>B(r.register(e.id))),()=>{let{name:o="Description",slot:s=x({}),props:a={}}=r,{id:u,...p}=e,c={...Object.entries(a).reduce((h,[v,w])=>Object.assign(h,{[v]:l(w)}),{}),id:u};return _({ourProps:c,theirProps:p,slot:s.value,attrs:n,slots:t,name:o})}}}),ee=Symbol("LabelContext");function te(){let e=R(ee,null);if(e===null){let n=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,te),n}return e}function Ue({slot:e={},name:n="Label",props:t={}}={}){let r=x([]);function o(s){return r.value.push(s),()=>{let a=r.value.indexOf(s);a!==-1&&r.value.splice(a,1)}}return H(ee,{register:o,slot:e,name:n,props:t}),g(()=>r.value.length>0?r.value.join(" "):void 0)}let Ye=$({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-label-${I()}`}},setup(e,{slots:n,attrs:t}){let r=te();return L(()=>B(r.register(e.id))),()=>{let{name:o="Label",slot:s={},props:a={}}=r,{id:u,passive:p,...c}=e,h={...Object.entries(a).reduce((v,[w,S])=>Object.assign(v,{[w]:l(S)}),{}),id:u};return p&&(delete h.onClick,delete c.onClick),_({ourProps:h,theirProps:c,slot:s,attrs:t,slots:n,name:o})}}}),ne=Symbol("GroupContext");$({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:n,attrs:t}){let r=x(null),o=Ue({name:"SwitchLabel",props:{onClick(){!r.value||(r.value.click(),r.value.focus({preventScroll:!0}))}}}),s=Ie({name:"SwitchDescription"});return H(ne,{switchRef:r,labelledby:o,describedby:s}),()=>_({theirProps:e,ourProps:{},slot:{},slots:n,attrs:t,name:"SwitchGroup"})}});let Ve=$({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:()=>`headlessui-switch-${I()}`}},inheritAttrs:!1,setup(e,{emit:n,attrs:t,slots:r,expose:o}){let s=R(ne,null),[a,u]=He(g(()=>e.modelValue),i=>n("update:modelValue",i),g(()=>e.defaultChecked));function p(){u(!a.value)}let c=x(null),h=s===null?c:s.switchRef,v=De(g(()=>({as:e.as,type:t.type})),h);o({el:h,$el:h});function w(i){i.preventDefault(),p()}function S(i){i.key===D.Space?(i.preventDefault(),p()):i.key===D.Enter&&Ae(i.currentTarget)}function E(i){i.preventDefault()}let d=g(()=>{var i,k;return(k=(i=C(h))==null?void 0:i.closest)==null?void 0:k.call(i,"form")});return L(()=>{q([d],()=>{if(!d.value||e.defaultChecked===void 0)return;function i(){u(e.defaultChecked)}return d.value.addEventListener("reset",i),()=>{var k;(k=d.value)==null||k.removeEventListener("reset",i)}},{immediate:!0})}),()=>{let{id:i,name:k,value:re,...oe}=e,se={checked:a.value},ae={id:i,ref:h,role:"switch",type:v.value,tabIndex:0,"aria-checked":a.value,"aria-labelledby":s==null?void 0:s.labelledby.value,"aria-describedby":s==null?void 0:s.describedby.value,onClick:w,onKeyup:S,onKeypress:E};return T(G,[k!=null&&a.value!=null?T(Be,Me({features:X.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:a.value,name:k,value:re})):null,_({ourProps:ae,theirProps:{...t,...J(oe,["modelValue","defaultChecked"])},slot:se,attrs:t,slots:r,name:"Switch"})])}}});var Ke={exports:{}};(function(e){e.exports={init:()=>`
      (function() {
        function getInitialColorMode() {
                const persistedColorPreference = window.localStorage.getItem('nightwind-mode');
                const hasPersistedPreference = typeof persistedColorPreference === 'string';
                if (hasPersistedPreference) {
                  return persistedColorPreference;
                }
                const mql = window.matchMedia('(prefers-color-scheme: dark)');
                const hasMediaQueryPreference = typeof mql.matches === 'boolean';
                if (hasMediaQueryPreference) {
                  return mql.matches ? 'dark' : 'light';
                }
                return 'light';
        }
        getInitialColorMode() == 'light' ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark');
      })()
    `,beforeTransition:()=>{const n=document.documentElement,t=()=>{n.classList.remove("nightwind"),n.removeEventListener("transitionend",t)};n.addEventListener("transitionend",t),n.classList.contains("nightwind")||n.classList.add("nightwind")},toggle:()=>{e.exports.beforeTransition(),document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),window.localStorage.setItem("nightwind-mode","light")):(document.documentElement.classList.add("dark"),window.localStorage.setItem("nightwind-mode","dark"))},enable:n=>{const t=n?"dark":"light",r=n?"light":"dark";e.exports.beforeTransition(),document.documentElement.classList.contains(r)&&document.documentElement.classList.remove(r),document.documentElement.classList.add(t),window.localStorage.setItem("nightwind-mode",t)},checkNightMode:()=>window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,watchNightMode:()=>{!window.matchMedia||window.matchMedia("(prefers-color-scheme: dark)").addListener(e.exports.addNightModeSelector())},addNightModeSelector:()=>{e.exports.checkNightMode()?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},addNightTransitions:()=>{document.documentElement.classList.contains("nightwind")||document.documentElement.classList.add("nightwind")},initNightwind:()=>{e.exports.watchNightMode(),e.exports.addNightModeSelector(),e.exports.addNightTransitions()},toggleNightMode:()=>{document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),window.localStorage.setItem("nightwind-mode","light")):(document.documentElement.classList.add("dark"),window.localStorage.setItem("nightwind-mode","dark"))}}})(Ke);const Je={__name:"DarkmodeToggle",props:{darkMode:Boolean},setup(e){return(n,t)=>(m(),A(l(Ve),{class:y([e.darkMode?"bg-primary-600":"bg-gray-200","block inline-flex items-center h-10 w-16 rounded-full cursor-pointer transition-colors ease-in-out duration-200 hover:bg-primary-700 active:bg-primary-900 focus:outline-none focus:border-primary-900 focus:ring focus:ring-primary-300"])},{default:O(()=>[f("span",{class:y([e.darkMode?"translate-x-6":"translate-x-0","flex justify-center items-center pointer-events-none inline-block h-8 w-8 m-1 rounded-full bg-white shadow transform transition ease-in-out duration-500"])},[f("i",{class:y(["fa-light text-black",e.darkMode?"fa-moon":"fa-sun-bright"])},null,2)],2)]),_:1},8,["class"]))}};export{_ as H,Ce as N,Oe as S,J as T,qe as _,D as a,De as b,X as c,Je as d,Fe as e,Be as f,Ge as g,We as h,C as o,I as t,W as u};
