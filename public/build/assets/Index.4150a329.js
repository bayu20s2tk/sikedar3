import{x as _,O as p,d as f,c as h,w as r,o as a,a as e,b as t,e as l,g,f as x,h as y,t as n,u as b,j as v,F as w}from"./app.c8c93927.js";import{_ as V}from"./AppLayout.36368527.js";import{_ as k}from"./PrimaryButton.a52668c4.js";import{_ as $}from"./TextInput.bdbad600.js";import"./moment.99fa77a6.js";import"./DarkmodeToggle.e01a0cae.js";import"./helper.e9fc3b37.js";import"./transition.d5e6da16.js";const j={class:"flex justify-between gap-3"},B={class:""},N={id:"search"},C={key:0,class:""},F={class:"mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"},K={class:"bg-white bg-opacity-50 h-full border border-gray-300 rounded-3xl shadow-lg"},O={class:"h-52 w-full overflow-hidden rounded-t-3xl"},T=["src","alt"],q={class:"py-3 px-5 items-end"},D={class:"text-lg font-semibold text-gray-900"},E={class:"mt-1 text-sm text-gray-500"},G={__name:"Index",props:{course:void 0},setup(u){const m=u;_(()=>{p.reload({only:["course"]})});const d=f("");return(o,i)=>(a(),h(V,{title:"Kelas",name:"Kelas",desc:"lorem ipsum"},{default:r(()=>[e("div",j,[e("div",B,[e("form",N,[t($,{name:"query",modelValue:d.value,"onUpdate:modelValue":i[0]||(i[0]=s=>d.value=s),type:"text",class:"block w-full lg:w-96 mb-5 shadow",placeholder:"Cari disini"},null,8,["modelValue"])])]),o.$page.props.user.role_id!==3?(a(),l("div",C,[t(k,{as:"a",href:o.route("course.create")},{default:r(()=>[g("Tambah")]),_:1},8,["href"])])):x("",!0)]),e("div",F,[(a(!0),l(w,null,y(m.course,s=>(a(),l("div",{key:s.id},[t(b(v),{href:o.$page.props.user.role_id!==3?o.route("course.edit",s):o.route("landing.course.show",s)},{default:r(()=>{var c;return[e("div",K,[e("div",O,[e("img",{src:(c=s.media[0])==null?void 0:c.original_url,alt:s.name,class:"rounded-t-3xl h-full w-full object-cover object-center"},null,8,T)]),e("div",q,[e("h3",D,n(s.name),1),e("p",E,n(s.desc),1)])])]}),_:2},1032,["href"])]))),128))])]),_:1}))}};export{G as default};