import{d as m,c as d,w as r,o as _,a as e,b as s,g as f}from"./app.cb98be3b.js";import{_ as p}from"./AppLayout.c15b4da9.js";import{_ as h}from"./PrimaryButton.f86f349a.js";import{_ as g}from"./TextInput.e8766ef5.js";import{_ as v}from"./Table.9907bc73.js";import"./DarkmodeToggle.414fcd08.js";import"./helper.e9fc3b37.js";const w={class:"flex justify-between gap-3"},b={class:""},x={id:"search"},y={class:""},T={__name:"Index",props:{course:Object|String},setup(i){const t=i,a=m(""),l=["Nama","Keterangan"],c=["name","desc"];return(u,o)=>(_(),d(p,{title:"Kursus",name:"Kursus",desc:"lorem ipsum"},{default:r(()=>[e("div",w,[e("div",b,[e("form",x,[s(g,{name:"query",modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=n=>a.value=n),type:"text",class:"block w-full lg:w-96 mb-5 shadow",placeholder:"Cari disini"},null,8,["modelValue"])])]),e("div",y,[s(h,{as:"a",href:u.route("course.create")},{default:r(()=>[f("Tambah")]),_:1},8,["href"])])]),s(v,{title:l,data:t.course.data,paginate:t.course,columns:c,"filter-key":a.value,routes:"course",slug:!0,view:!0,edit:!0},null,8,["data","paginate","filter-key"])]),_:1}))}};export{T as default};
