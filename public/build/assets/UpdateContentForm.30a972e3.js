import{o as p,e as m,r as _,i as $,n as b,B as v,b as n,w as o,u as t,g as a,F as y,a as f,T as B,c as C}from"./app.87bf308e.js";import{_ as H}from"./ActionMessage.26e66072.js";import{_ as k}from"./FormSection.b75286e1.js";import{_ as S}from"./InputError.c844044c.js";import{_ as V}from"./PrimaryButton.721e85db.js";import{u as w,S as h,E as L}from"./index.dc9a40c9.js";import{_ as E}from"./_plugin-vue_export-helper.cdc0426e.js";import"./SectionTitle.d5ba94fd.js";const I={},T={class:"relative z-0 inline-flex shadow-sm rounded-3xl"};function P(c,u){return p(),m("span",T,[_(c.$slots,"default")])}const U=E(I,[["render",P]]),i={__name:"GroupButtonLink",setup(c){const u=$(()=>"-ml-px relative disabled:opacity-50 inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500");return(l,r)=>(p(),m("button",{type:"button",class:b(u.value)},[_(l.$slots,"default")],2))}},z=f("i",null,"Italic",-1),F=f("b",null,"Bold",-1),M={__name:"EditorInput",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(c,{emit:u}){const l=c,r=w({editorProps:{attributes:{class:"prose prose-sm sm:prose lg:prose-lg xl:prose-2xl p-3 mt-3 focus:outline-none bg-white border border-gray-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl shadow-sm"}},extensions:[h.configure({paragraph:{HTMLAttributes:{class:"text-base text-gray-600"}},Heading:{HTMLAttributes:{class:"text-gray-900"}}})],onUpdate:({editor:d})=>{let e=d.getHTML();u("update:modelValue",e)},content:l.modelValue});return v(()=>l.modelValue,(d,e)=>{const s=d===e;console.log(`Same: ${s}`)}),(d,e)=>(p(),m(y,null,[n(U,null,{default:o(()=>[n(i,{onClick:e[0]||(e[0]=s=>t(r).chain().focus().toggleHeading({level:1}).run()),class:"rounded-l-2xl"},{default:o(()=>[a("H1")]),_:1}),n(i,{onClick:e[1]||(e[1]=s=>t(r).chain().focus().toggleHeading({level:2}).run())},{default:o(()=>[a("H2")]),_:1}),n(i,{onClick:e[2]||(e[2]=s=>t(r).chain().focus().toggleHeading({level:3}).run())},{default:o(()=>[a("H3")]),_:1}),n(i,{onClick:e[3]||(e[3]=s=>t(r).chain().focus().toggleHeading({level:4}).run())},{default:o(()=>[a("H4")]),_:1}),n(i,{onClick:e[4]||(e[4]=s=>t(r).chain().focus().toggleHeading({level:5}).run())},{default:o(()=>[a("H5")]),_:1}),n(i,{onClick:e[5]||(e[5]=s=>t(r).chain().focus().setParagraph().run()),class:"rounded-r-2xl mr-2"},{default:o(()=>[a("P")]),_:1}),n(i,{onClick:e[6]||(e[6]=s=>t(r).chain().focus().toggleItalic().run()),class:"rounded-l-2xl"},{default:o(()=>[z]),_:1}),n(i,{onClick:e[7]||(e[7]=s=>t(r).chain().focus().toggleBold().run())},{default:o(()=>[F]),_:1}),n(i,{onClick:e[8]||(e[8]=s=>t(r).chain().focus().toggleBulletList().run()),class:"rounded-r-2xl mr-2"},{default:o(()=>[a("List")]),_:1})]),_:1}),n(t(L),{ref:"input",onInput:e[9]||(e[9]=s=>d.$emit("update:modelValue",s.target.value)),editor:t(r),required:""},null,8,["editor"])],64))}},N={class:"col-span-6 sm:col-span-6"},Q={__name:"UpdateContentForm",props:{blog:Object|String},setup(c){var e;const u=c,l=B({id:u.blog.id,content:(e=u.blog.content)!=null?e:""}),r=()=>{l.put(route("blog.update",u.blog),{errorBag:"updateBlogInformation",preserveScroll:!0,onSuccess:()=>d()})},d=()=>{};return(s,g)=>(p(),C(k,{onSubmitted:r},{title:o(()=>[a(" Konten ")]),description:o(()=>[a(" Update your account's profile information and email address. ")]),form:o(()=>[f("div",N,[n(M,{modelValue:t(l).content,"onUpdate:modelValue":g[0]||(g[0]=x=>t(l).content=x)},null,8,["modelValue"]),n(S,{message:t(l).errors.content,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[n(H,{on:t(l).recentlySuccessful,class:"mr-3"},{default:o(()=>[a(" Berhasil disimpan. ")]),_:1},8,["on"]),n(V,{class:b({"opacity-25":t(l).processing}),disabled:t(l).processing},{default:o(()=>[a(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{Q as default};