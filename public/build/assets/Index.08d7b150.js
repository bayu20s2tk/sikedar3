import{d as p,k as u,c as h,w as i,o as l,a as e,b as o,u as n,A as x,g,e as _,h as y,n as v,t as r,j as b,F as w,O as k}from"./app.d2247b8a.js";import{_ as j}from"./AppLayout.1e3ded83.js";import{_ as C}from"./PrimaryButton.1dce702a.js";import{_ as V}from"./TextInput.617d0da9.js";import{h as B}from"./moment.9709ab41.js";import{_ as D}from"./Pagination.52d09138.js";import"./DarkmodeToggle.0d49f119.js";import"./helper.e9fc3b37.js";import"./transition.925c0aa6.js";const M={class:"flex justify-between gap-3"},N={class:""},O={class:""},$={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},z={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},F={class:"pl-4 sm:pl-6"},H={class:"px-4 py-4 sm:px-6 grow"},K={class:"flex items-center justify-between"},P={class:"font-medium truncate capitalize text-gray-900"},S={class:"ml-2 flex-shrink-0 flex"},T={class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-gray-900"},A={class:"flex justify-between"},E={class:"flex"},I={class:"flex items-center text-sm text-gray-600"},L={class:"flex items-center text-sm text-gray-600"},Z={__name:"Index",props:{category:{type:Object,default:()=>({})}},setup(f){const d=f;let a=p("");u(a,s=>{k.get(route("projectCategory.index"),{search:s},{preserveState:!0})});function m(s){return B(s).format("DD MMM Y HH:mm")}return(s,c)=>(l(),h(j,{title:"Kategori Proyek",name:"Kategori Proyek",desc:"lorem ipsum"},{default:i(()=>[e("div",M,[e("div",N,[o(V,{type:"text",modelValue:n(a),"onUpdate:modelValue":c[0]||(c[0]=t=>x(a)?a.value=t:a=t),placeholder:"Cari disini",class:"block w-full lg:w-96 mb-5 shadow"},null,8,["modelValue"])]),e("div",O,[o(C,{as:"a",href:s.route("projectCategory.create")},{default:i(()=>[g("Tambah")]),_:1},8,["href"])])]),e("div",$,[e("ul",z,[(l(!0),_(w,null,y(d.category.data,t=>(l(),_("li",{key:t.id},[o(n(b),{"preserve-scroll":"",href:s.route("projectCategory.edit",t),class:"flex items-center hover:bg-primary-50"},{default:i(()=>[e("div",F,[e("i",{class:v(["fa-duotone text-primary-600 text-2xl",t.icon])},null,2)]),e("div",H,[e("div",K,[e("p",P,r(t.name),1),e("div",S,[e("p",T,r(t.status),1)])]),e("div",A,[e("div",E,[e("p",I,r(t.desc),1)]),e("div",L,r(m(t.updated_at)),1)])])]),_:2},1032,["href"])]))),128))])]),o(D,{pagination:d.category},null,8,["pagination"])]),_:1}))}};export{Z as default};
