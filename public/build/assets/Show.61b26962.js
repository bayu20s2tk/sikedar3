import{_ as k}from"./LandingLayout.c19e6b51.js";/* empty css                 */import"./carousel.es.05de7078.js";import{u as w,S as $,I as C,E as B}from"./tippy.2d1f8dcb.js";import{d as V,T as S,c as p,w as g,o as i,a as e,n as c,g as _,t as d,b as m,u as s,e as u,f as b,F as x,h as T}from"./app.c74fed23.js";import"./moment.9709ab41.js";import{_ as A}from"./InputError.ebdf4e93.js";import{_ as E}from"./TextAreaInput.a5acb246.js";import{_ as H}from"./InputLabel.4833fc38.js";import{_ as I}from"./PrimaryButton.91b1a268.js";import{_ as K}from"./CommentSection.7cd3bfbe.js";import"./helper.e9fc3b37.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DarkmodeToggle.be47bb32.js";import"./moment.7b8bcdf0.js";import"./DialogModal.d9973875.js";const L={class:"relative overflow-hidden py-16"},N={class:"relative px-6 lg:px-8"},M={class:"mx-auto max-w-prose text-center text-lg mt-20"},F={class:"block text-lg font-semibold text-indigo-600"},j={class:"mt-2 block text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl"},q={class:"prose prose-2xl prose-indigo mx-auto mt-6"},z={class:"max-w-4xl mx-auto border-t border-gray-300 mt-10 pt-10"},D={class:"border-b border-gray-300"},O={class:"-mb-px flex space-x-8","aria-label":"Tabs"},P={class:"my-5"},U={key:0,class:"mb-10"},G={class:""},J={key:1,class:"flex items-center"},Q={class:"flex-shrink-0"},R=["src"],W={class:"ml-3"},X={class:"text-sm font-medium text-gray-900"},Y={class:"hover:underline"},Z={class:"flex space-x-1 text-sm text-gray-500"},be={__name:"Show",props:{blog:Object},setup(n){const o=n,f=w({content:o.blog.content,editorProps:{attributes:{class:"prose prose-sm lg:prose-lg xl:prose-2xl"}},extensions:[$.configure({paragraph:{HTMLAttributes:{class:"text-base text-gray-600"}},Heading:{HTMLAttributes:{class:"text-gray-900"}}}),C.configure({inline:!0,allowBase64:!0,HTMLAttributes:{class:"max-w-5xl mx-auto rounded-3xl"}})],autofocus:!1,editable:!1}),r=V(1),t=S({id:null,comment:null,blog_id:o.blog.id}),v=()=>{console.log(t.comment),t.post(route("blogComment.store"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{t.reset()}})};return(h,a)=>(i(),p(k,{title:o.blog.name},{default:g(()=>[e("div",L,[e("div",N,[e("div",M,[e("h1",null,[e("span",F,[e("i",{class:c(["fa-regular mr-2",n.blog.category.icon])},null,2),_(d(o.blog.category.name),1)]),e("span",j,d(o.blog.name),1)])]),e("div",q,[m(s(B),{editor:s(f)},null,8,["editor"])]),e("div",z,[e("div",D,[e("nav",O,[e("button",{onClick:a[0]||(a[0]=l=>r.value=1),class:c([r.value==1?"border-primary-500 text-primary-600":"border-gray-300 text-gray-500 hover:text-gray-700 hover:border-gray-300","whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"])}," Komentar ",2),e("button",{onClick:a[1]||(a[1]=l=>r.value=2),class:c([r.value==2?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300","whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"])}," Author ",2)]),e("div",P,[r.value==1?(i(),u(x,{key:0},[h.$page.props.user?(i(),u("div",U,[m(H,{for:"desc",class:"ml-2",value:"Beri Komentar"}),m(E,{id:"comment",modelValue:s(t).comment,"onUpdate:modelValue":a[2]||(a[2]=l=>s(t).comment=l),class:"mt-1 block w-full",rows:"2",required:""},null,8,["modelValue"]),m(I,{as:"button",onClick:v,class:c(["mt-3",{"opacity-25":s(t).processing}]),disabled:s(t).processing},{default:g(()=>[_(" Kirim ")]),_:1},8,["class","disabled"]),m(A,{message:s(t).errors.comment,class:"mt-2"},null,8,["message"])])):b("",!0),e("div",G,[(i(!0),u(x,null,T(o.blog.comment,(l,y)=>(i(),p(K,{key:l.id,blog_id:o.blog.id,comment:l,comment_idx:y},null,8,["blog_id","comment","comment_idx"]))),128))])],64)):r.value==2?(i(),u("div",J,[e("div",Q,[e("img",{class:"h-10 w-10 rounded-full",src:n.blog.user.profile_photo_url,alt:""},null,8,R)]),e("div",W,[e("div",X,[e("span",Y,d(n.blog.user.name),1)]),e("div",Z,[e("span",null,d(n.blog.user.email),1)])])])):b("",!0)])])])])])]),_:1},8,["title"]))}};export{be as default};
