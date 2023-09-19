import{c as H,l as y,p as F,_ as W}from"./AppLayout.6e496fb5.js";import{q as S,d as f,p as E,i as k,s as K,x as L,l as z,k as T,c as Q,w as b,o as _,a as t,e as w,h as I,F as P,b as h,t as c,n as j,f as R,u as D}from"./app.285d111a.js";import{_ as U}from"./MobileMenu.87e04b5d.js";import{u as C,o as m,H as O,t as A,b as X,N as $,a as g}from"./DarkmodeToggle.3cf233e1.js";var J=(s=>(s[s.Open=0]="Open",s[s.Closed=1]="Closed",s))(J||{});let M=Symbol("DisclosureContext");function B(s){let i=T(M,null);if(i===null){let u=new Error(`<${s} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,B),u}return i}let q=Symbol("DisclosurePanelContext");function Y(){return T(q,null)}let Z=S({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(s,{slots:i,attrs:u}){let r=f(s.defaultOpen?0:1),e=f(null),a=f(null),n={buttonId:f(null),panelId:f(null),disclosureState:r,panel:e,button:a,toggleDisclosure(){r.value=C(r.value,{[0]:1,[1]:0})},closeDisclosure(){r.value!==1&&(r.value=1)},close(l){n.closeDisclosure();let d=(()=>l?l instanceof HTMLElement?l:l.value instanceof HTMLElement?m(l):m(n.button):m(n.button))();d==null||d.focus()}};return E(M,n),H(k(()=>C(r.value,{[0]:y.Open,[1]:y.Closed}))),()=>{let{defaultOpen:l,...d}=s,p={open:r.value===0,close:n.close};return O({theirProps:d,ourProps:{},slot:p,slots:i,attrs:u,name:"Disclosure"})}}}),ee=S({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-disclosure-button-${A()}`}},setup(s,{attrs:i,slots:u,expose:r}){let e=B("DisclosureButton");K(()=>{e.buttonId.value=s.id}),L(()=>{e.buttonId.value=null});let a=Y(),n=k(()=>a===null?!1:a.value===e.panelId.value),l=f(null);r({el:l,$el:l}),n.value||z(()=>{e.button.value=l.value});let d=X(k(()=>({as:s.as,type:i.type})),l);function p(){var o;s.disabled||(n.value?(e.toggleDisclosure(),(o=m(e.button))==null||o.focus()):e.toggleDisclosure())}function v(o){var x;if(!s.disabled)if(n.value)switch(o.key){case g.Space:case g.Enter:o.preventDefault(),o.stopPropagation(),e.toggleDisclosure(),(x=m(e.button))==null||x.focus();break}else switch(o.key){case g.Space:case g.Enter:o.preventDefault(),o.stopPropagation(),e.toggleDisclosure();break}}function N(o){switch(o.key){case g.Space:o.preventDefault();break}}return()=>{let o={open:e.disclosureState.value===0},{id:x,...V}=s,G=n.value?{ref:l,type:d.value,onClick:p,onKeydown:v}:{id:x,ref:l,type:d.value,"aria-expanded":s.disabled?void 0:e.disclosureState.value===0,"aria-controls":m(e.panel)?e.panelId.value:void 0,disabled:s.disabled?!0:void 0,onClick:p,onKeydown:v,onKeyup:N};return O({ourProps:G,theirProps:V,slot:o,attrs:i,slots:u,name:"DisclosureButton"})}}}),te=S({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-disclosure-panel-${A()}`}},setup(s,{attrs:i,slots:u,expose:r}){let e=B("DisclosurePanel");K(()=>{e.panelId.value=s.id}),L(()=>{e.panelId.value=null}),r({el:e.panel,$el:e.panel}),E(q,e.panelId);let a=F(),n=k(()=>a!==null?(a.value&y.Open)===y.Open:e.disclosureState.value===0);return()=>{let l={open:e.disclosureState.value===0,close:e.close},{id:d,...p}=s,v={id:d,ref:e.panel};return O({ourProps:v,theirProps:p,slot:l,attrs:i,slots:u,features:$.RenderStrategy|$.Static,visible:n.value,name:"DisclosurePanel"})}}});const se={role:"list",class:"grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"},ae={class:"flex w-full items-center justify-between space-x-6 p-6"},le={class:"flex-1 truncate"},ne={class:"flex items-center space-x-3"},oe={class:"truncate text-sm font-medium text-gray-900"},re={class:"inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800"},ie={class:"mt-1 truncate text-sm text-gray-500"},ue={class:"-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"},de={class:"flex w-0 flex-1"},ce=["href"],pe={class:"ml-3"},fe={key:0,class:"-ml-px flex w-0 flex-1"},me=["href"],ge={class:"ml-3"},ve={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"},xe={class:"divide-y divide-gray-300 dark:divide-gray-600"},be={class:"text-sm font-medium text-gray-900"},_e={class:"ml-6 flex items-center"},he={class:"text-sm text-gray-500"},Se={__name:"Index",props:{users:Object,history:Object},setup(s){const i=[{name:"Kontak Admin",title:"Online 08.30 - 22.00",role:"Aktif",icon:"fa-whatsapp text-green-500",btn:"Admin 1",btn2:"Admin 2",link:"https://wa.me/6285156875180",link2:"https://wa.me/6285156875180"},{name:"Grup Whatsapp",title:"Gabung grup whatsapp",role:"Aktif",icon:"fa-whatsapp text-green-500",btn:"Grup Whatsapp",link:"https://wa.me/6285156875180"}],u=[{question:"Mengalami Kendala Transaksi?",answer:"Lorem ipsum dolor sit amet."},{question:"Mengalami Kendala Deposit?",answer:"Lorem ipsum dolor sit amet."}];return(r,e)=>(_(),Q(W,{title:"Informasi",name:"Informasi",desc:"Lorem ipsum dolor sit amet"},{default:b(()=>[t("ul",se,[(_(),w(P,null,I(i,a=>t("li",{key:a.email,class:"col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"},[t("div",ae,[t("div",le,[t("div",ne,[t("h3",oe,c(a.name),1),t("span",re,c(a.role),1)]),t("p",ie,c(a.title),1)]),t("i",{class:j(["fa-brands text-3xl flex-shrink-0",a.icon])},null,2)]),t("div",null,[t("div",ue,[t("div",de,[t("a",{href:a.link,target:"_blank",class:"relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"},[t("span",pe,c(a.btn),1)],8,ce)]),a.btn2?(_(),w("div",fe,[t("a",{href:a.link2,target:"_blank",class:"relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"},[t("span",ge,c(a.btn2),1)],8,me)])):R("",!0)])])])),64))]),t("div",ve,[t("div",xe,[(_(),w(P,null,I(u,a=>h(D(Z),{as:"div",key:a.question,class:""},{default:b(({open:n})=>[t("dt",null,[h(D(ee),{class:"flex w-full items-start justify-between text-left px-6 py-4"},{default:b(()=>[t("span",be,c(a.question),1),t("span",_e,[t("i",{class:j(["fa-regular text-gray-900",n?"fa-minus":"fa-chevron-down"])},null,2)])]),_:2},1024)]),h(D(te),{as:"dd",class:"px-6 pt-0 pb-4"},{default:b(()=>[t("p",he,c(a.answer),1)]),_:2},1024)]),_:2},1024)),64))])]),h(U)]),_:1}))}};export{Se as default};
