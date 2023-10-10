import{_ as $}from"./LandingLayout.6cfb920d.js";import{d as y,T as C,c as k,w as g,o as t,a as e,b as d,n as u,g as p,t as i,e as r,h as b,F as _,f as h,u as x}from"./app.52827ccf.js";/* empty css                 */import"./carousel.es.572f2d4d.js";import{u as H,S as L,I as B}from"./tippy.d53606d7.js";import"./moment.9709ab41.js";import{_ as M}from"./InputError.0ab7e727.js";import{_ as V}from"./TextAreaInput.a02263a8.js";import{_ as S}from"./InputLabel.37b814a3.js";import{_ as A}from"./PrimaryButton.0a585a1e.js";import K from"./CommentSection.d9a15faa.js";import{_ as N}from"./Heading.591739d1.js";import"./helper.e9fc3b37.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DarkmodeToggle.1cee4b19.js";import"./moment.fe5632ee.js";import"./CommentChildSection.376114d8.js";const I={class:"relative pb-10 pt-32"},j={class:"lg:mx-auto lg:max-w-7xl lg:px-8 lg:items-start"},E={class:"px-4 sm:px-6 lg:px-0"},F={class:"text-lg text-primary-500 font-medium"},O={class:"relative mx-auto grid lg:grid-cols-6 gap-10 px-4 sm:px-6 lg:px-0"},q={class:"lg:col-span-2"},z={class:"mt-3 text-gray-500 space-y-6"},D={class:"bg-white bg-opacity-50 border border-gray-300 rounded-3xl shadow-lg"},P={class:"px-3 py-5 grid gap-3"},U={class:"font-semibold text-gray-900 ml-2"},G=["onClick"],J=e("i",{class:"fa-solid fa-play mr-1"},null,-1),Q={class:"lg:col-span-4 py-3"},R=["innerHTML"],W={class:"relative mx-auto px-4 sm:px-6 lg:px-0"},X={class:"mt-10"},Y={class:"-mb-px flex space-x-8","aria-label":"Tabs"},Z={class:"my-5 prose prose-sm"},ee=["innerHTML"],se={key:0,class:"mb-10"},te={class:""},oe={class:"mt-10 pt-10 flex items-center border-t border-gray-300"},re={class:"flex-shrink-0"},ae=["src"],le={class:"ml-3"},ie={class:"text-sm font-medium text-gray-900"},ne={class:"hover:underline"},ce={class:"flex space-x-1 text-sm text-gray-500"},Le={__name:"Show",props:{course:Object,comment:Object},setup(a){const o=a;H({content:o.course.content,editorProps:{attributes:{class:"prose prose-sm lg:prose-lg xl:prose-2xl"}},extensions:[L.configure({paragraph:{HTMLAttributes:{class:"text-base text-gray-600"}},Heading:{HTMLAttributes:{class:"text-gray-900"}}}),B.configure({inline:!0,allowBase64:!0,HTMLAttributes:{class:"max-w-5xl mx-auto rounded-3xl"}})],autofocus:!1,editable:!1});const f=y(0),n=y(1),l=C({id:null,comment:null,course_id:o.course.id}),w=()=>{l.post(route("courseComment.store"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{l.reset()}})};return(T,c)=>(t(),k($,{title:o.course.name},{default:g(()=>{var v;return[e("div",I,[e("div",j,[e("div",E,[d(N,null,{header:g(()=>[e("p",F,[e("i",{class:u(["fa-regular mr-2",a.course.category.icon])},null,2),p(" "+i(a.course.category.name),1)]),p(" "+i(o.course.name),1)]),desc:g(()=>[p(i(a.course.desc),1)]),_:1})]),e("div",O,[e("div",q,[e("div",z,[e("div",D,[e("div",P,[e("h3",U,i((v=o.course.item.length)!=null?v:"0")+" lessons ",1),(t(!0),r(_,null,b(o.course.item,(s,m)=>(t(),r("button",{key:s.id,onClick:me=>f.value=m},[e("div",{class:u(["rounded-3xl py-3 px-5 text-left",f.value==m?"bg-gray-900 text-white":"bg-gray-200 text-gray-900"])},[J,p(" "+i(s.name),1)],2)],8,G))),128))])])])]),e("div",Q,[(t(!0),r(_,null,b(o.course.item,(s,m)=>(t(),r(_,null,[f.value==m?(t(),r("p",{key:0,class:"prose prose-sm lg:prose-lg xl:prose-2xl",innerHTML:s.content},null,8,R)):h("",!0)],64))),256))])]),e("div",W,[e("div",X,[e("nav",Y,[e("button",{onClick:c[0]||(c[0]=s=>n.value=1),class:u([n.value==1?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300","whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"])}," About ",2),e("button",{onClick:c[1]||(c[1]=s=>n.value=2),class:u([n.value==2?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300","whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"])}," Komentar ",2)]),e("div",Z,[n.value==1?(t(),r("p",{key:0,class:"prose prose-sm lg:prose-lg xl:prose-2xl",innerHTML:o.course.about},null,8,ee)):n.value==2?(t(),r(_,{key:1},[T.$page.props.user?(t(),r("div",se,[d(S,{for:"desc",class:"ml-2",value:"Beri Komentar"}),d(V,{id:"comment",modelValue:x(l).comment,"onUpdate:modelValue":c[2]||(c[2]=s=>x(l).comment=s),class:"mt-1 block w-full",rows:"2",required:""},null,8,["modelValue"]),d(A,{as:"button",onClick:w,class:u(["mt-3",{"opacity-25":x(l).processing}]),disabled:x(l).processing},{default:g(()=>[p(" Kirim ")]),_:1},8,["class","disabled"]),d(M,{message:x(l).errors.comment,class:"mt-2"},null,8,["message"])])):h("",!0),e("div",te,[(t(!0),r(_,null,b(o.comment,(s,m)=>(t(),k(K,{key:s.id,course_id:o.course.id,comment:s,comment_idx:m},null,8,["course_id","comment","comment_idx"]))),128))])],64)):h("",!0)])]),e("div",oe,[e("div",re,[e("img",{class:"h-10 w-10 rounded-full",src:a.course.user.profile_photo_url,alt:""},null,8,ae)]),e("div",le,[e("div",ie,[e("span",ne,i(a.course.user.name),1)]),e("div",ce,[e("span",null,i(a.course.user.email),1)])])])])])])]}),_:1},8,["title"]))}};export{Le as default};
