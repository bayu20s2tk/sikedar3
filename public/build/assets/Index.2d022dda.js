import{d as m,c as u,w as l,o as _,a as e,b as t,g as f}from"./app.87bf308e.js";import{_ as p}from"./AppLayout.cf87c8e5.js";import{_ as g}from"./PrimaryButton.721e85db.js";import{_ as b}from"./TextInput.5f42d168.js";import{_ as h}from"./Table.ccab5a4c.js";import"./DarkmodeToggle.5e233903.js";const v={class:"flex justify-between gap-3"},w={class:""},x={id:"search"},y={class:""},T={__name:"Index",props:{blog:Object|String},setup(r){const s=r,a=m(""),i=["Nama","Keterangan"],n=["name","desc"];return(c,o)=>(_(),u(p,{title:"Blog",name:"Blog",desc:"lorem ipsum"},{default:l(()=>[e("div",v,[e("div",w,[e("form",x,[t(b,{name:"query",modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=d=>a.value=d),type:"text",class:"block w-full lg:w-96 mb-5 shadow",placeholder:"Cari disini"},null,8,["modelValue"])])]),e("div",y,[t(g,{as:"a",href:c.route("blog.create")},{default:l(()=>[f("Tambah")]),_:1},8,["href"])])]),t(h,{title:i,data:s.blog.data,paginate:s.blog,columns:n,"filter-key":a.value,routes:"blog",slug:!0,view:!0,edit:!0},null,8,["data","paginate","filter-key"])]),_:1}))}};export{T as default};