import{d as n,T as l,c as d,w as e,o as i,g as a,a as t,b as m}from"./app.c66173a4.js";import{_ as p}from"./ActionSection.e8d8a41d.js";import{_ as u}from"./DangerButton.b0ef2b0a.js";import"./SectionTitle.658b2d17.js";import"./_plugin-vue_export-helper.cdc0426e.js";const _=t("div",{class:"max-w-xl text-sm text-gray-600"}," Setelah kelas dihapus, semua sumber daya dan datanya akan dihapus secara permanen. ",-1),f={class:"mt-5"},w={__name:"DeleteForm",props:{course:Object},setup(r){const s=r;n(null);const o=l({id:s.course.id}),c=()=>{o.delete(route("course.destroy",s.course),{preserveScroll:!0})};return(k,x)=>(i(),d(p,null,{title:e(()=>[a(" Hapus kelas ")]),description:e(()=>[a(" Hapus kelas secara permanen ")]),content:e(()=>[_,t("div",f,[m(u,{class:"",onClick:c},{default:e(()=>[a(" Hapus kelas ")]),_:1})])]),_:1}))}};export{w as default};