import{T as d,c as u,w as e,o as _,g as s,a as f,b as a,u as t,n as g}from"./app.cb98be3b.js";import{_ as b}from"./ActionMessage.2955c445.js";import{_ as S}from"./FormSection.a3ccb6d4.js";import{_ as V}from"./InputError.d612fa12.js";import{_ as B}from"./PrimaryButton.f86f349a.js";import{_ as $}from"./EditorInput.b1e5946a.js";import"./SectionTitle.0ed37d12.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./index.36b05666.js";import"./tippy.6c80af0c.js";import"./DialogModal.f2cba59f.js";import"./DangerButton.0cd30ca6.js";const x={class:"col-span-6 sm:col-span-6"},I={__name:"UpdateContentForm",props:{blog:Object|String,gallery:Object},setup(i){var r;const n=i,o=d({id:n.blog.id,content:(r=n.blog.content)!=null?r:""}),m=()=>{o.put(route("blog.update",n.blog),{errorBag:"updateInformation",preserveScroll:!0,onSuccess:()=>l()})},l=()=>{};return(y,c)=>(_(),u(S,{onSubmitted:m},{title:e(()=>[s(" Konten ")]),description:e(()=>[s(" Update your account's profile information and email address. ")]),form:e(()=>[f("div",x,[a($,{modelValue:t(o).content,"onUpdate:modelValue":c[0]||(c[0]=p=>t(o).content=p)},null,8,["modelValue"]),a(V,{message:t(o).errors.content,class:"mt-2"},null,8,["message"])])]),actions:e(()=>[a(b,{on:t(o).recentlySuccessful,class:"mr-3"},{default:e(()=>[s(" Berhasil disimpan. ")]),_:1},8,["on"]),a(B,{class:g({"opacity-25":t(o).processing}),disabled:t(o).processing},{default:e(()=>[s(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{I as default};
