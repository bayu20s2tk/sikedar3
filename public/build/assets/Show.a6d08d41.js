import{_ as T}from"./LandingLayout.58c8ff5e.js";import{d as y,T as C,c as k,w as g,o as t,a as e,b as u,n as d,g as p,t as c,e as r,h as v,F as x,f,u as _}from"./app.d164d0a5.js";/* empty css                 */import"./carousel.es.f4c22dd0.js";import{u as H,S as L,I as B}from"./tippy.6c5ad1fb.js";import"./moment.9709ab41.js";import{_ as M}from"./InputError.e6f5db7d.js";import{_ as V}from"./TextAreaInput.74b1898c.js";import{_ as S}from"./InputLabel.2c228429.js";import{_ as A}from"./PrimaryButton.7b368c4c.js";import K from"./CommentSection.5ccc9219.js";import{_ as N}from"./Heading.f7503fa3.js";import"./helper.e9fc3b37.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DarkmodeToggle.37ca7d2b.js";import"./moment.8b5bdb1f.js";import"./CommentChildSection.f04c4ffb.js";const I={class:"relative pb-10 pt-32"},j={class:"lg:mx-auto lg:max-w-7xl lg:px-8 lg:items-start"},E={class:"px-4 sm:px-6 lg:px-0"},F={class:"text-lg text-primary-500 font-medium"},O={class:"relative mx-auto grid lg:grid-cols-6 gap-10 px-4 sm:px-6 lg:px-0"},q={class:"lg:col-span-2"},z={class:"mt-3 text-gray-500 space-y-6"},D={class:"bg-white bg-opacity-50 border border-gray-300 rounded-3xl shadow-lg"},P={class:"px-3 py-5 grid gap-3"},R={class:"font-semibold text-gray-900 ml-2"},U=["onClick"],G=e("i",{class:"fa-solid fa-play mr-1"},null,-1),J={class:"lg:col-span-4 py-3"},Q=["innerHTML"],W={class:"relative mx-auto px-4 sm:px-6 lg:px-0"},X={class:"mt-10"},Y={class:"-mb-px flex space-x-8","aria-label":"Tabs"},Z={class:"my-5 prose prose-sm"},ee=["innerHTML"],se={key:0,class:"mb-10"},te={class:""},oe={key:2,class:"mt-10"},re=e("dl",{class:"grid grid-cols-2 gap-x-4 gap-y-8"},[e("div",{class:"pt-6"},[e("dt",{class:"text-base font-medium text-gray-500"},"Hahahaha"),e("dd",{class:"text-3xl font-extrabold tracking-tight text-gray-900"},"Lorem ipsum")])],-1),ae=[re],le={class:"mt-10 pt-10 flex items-center border-t border-gray-300"},ie={class:"flex-shrink-0"},ne=["src"],ce={class:"ml-3"},me={class:"text-sm font-medium text-gray-900"},de={class:"hover:underline"},ue={class:"flex space-x-1 text-sm text-gray-500"},Ve={__name:"Show",props:{course:Object,comment:Object},setup(n){const o=n;H({content:o.course.content,editorProps:{attributes:{class:"prose prose-sm lg:prose-lg xl:prose-2xl"}},extensions:[L.configure({paragraph:{HTMLAttributes:{class:"text-base text-gray-600"}},Heading:{HTMLAttributes:{class:"text-gray-900"}}}),B.configure({inline:!0,allowBase64:!0,HTMLAttributes:{class:"max-w-5xl mx-auto rounded-3xl"}})],autofocus:!1,editable:!1});const b=y(0),a=y(1),l=C({id:null,comment:null,course_id:o.course.id}),w=()=>{console.log(l.comment),l.post(route("courseComment.store"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{l.reset()}})};return($,i)=>(t(),k(T,{title:o.course.name},{default:g(()=>{var h;return[e("div",I,[e("div",j,[e("div",E,[u(N,null,{header:g(()=>[e("p",F,[e("i",{class:d(["fa-regular mr-2",n.course.category.icon])},null,2),p(" "+c(n.course.category.name),1)]),p(" "+c(o.course.name),1)]),desc:g(()=>[p(c(n.course.desc),1)]),_:1})]),e("div",O,[e("div",q,[e("div",z,[e("div",D,[e("div",P,[e("h3",R,c((h=o.course.item.length)!=null?h:"0")+" lessons ",1),(t(!0),r(x,null,v(o.course.item,(s,m)=>(t(),r("button",{key:s.id,onClick:pe=>b.value=m},[e("div",{class:d(["rounded-3xl py-3 px-5 text-left",b.value==m?"bg-gray-900 text-white":"bg-gray-200 text-gray-900"])},[G,p(" "+c(s.name),1)],2)],8,U))),128))])])])]),e("div",J,[(t(!0),r(x,null,v(o.course.item,(s,m)=>(t(),r(x,null,[b.value==m?(t(),r("p",{key:0,class:"prose prose-sm lg:prose-lg xl:prose-2xl",innerHTML:s.content},null,8,Q)):f("",!0)],64))),256))])]),e("div",W,[e("div",X,[e("nav",Y,[e("button",{onClick:i[0]||(i[0]=s=>a.value=1),class:d([a.value==1?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300","whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"])}," About ",2),e("button",{onClick:i[1]||(i[1]=s=>a.value=2),class:d([a.value==2?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300","whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"])}," Komentar ",2),e("button",{onClick:i[2]||(i[2]=s=>a.value=3),class:d([a.value==3?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300","whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"])}," Review ",2)]),e("div",Z,[a.value==1?(t(),r("p",{key:0,class:"prose prose-sm lg:prose-lg xl:prose-2xl",innerHTML:o.course.about},null,8,ee)):a.value==2?(t(),r(x,{key:1},[$.$page.props.user?(t(),r("div",se,[u(S,{for:"desc",class:"ml-2",value:"Beri Komentar"}),u(V,{id:"comment",modelValue:_(l).comment,"onUpdate:modelValue":i[3]||(i[3]=s=>_(l).comment=s),class:"mt-1 block w-full",rows:"2",required:""},null,8,["modelValue"]),u(A,{as:"button",onClick:w,class:d(["mt-3",{"opacity-25":_(l).processing}]),disabled:_(l).processing},{default:g(()=>[p(" Kirim ")]),_:1},8,["class","disabled"]),u(M,{message:_(l).errors.comment,class:"mt-2"},null,8,["message"])])):f("",!0),e("div",te,[(t(!0),r(x,null,v(o.comment,(s,m)=>(t(),k(K,{key:s.id,course_id:o.course.id,comment:s,comment_idx:m},null,8,["course_id","comment","comment_idx"]))),128))])],64)):a.value==3?(t(),r("div",oe,ae)):f("",!0)])]),e("div",le,[e("div",ie,[e("img",{class:"h-10 w-10 rounded-full",src:n.course.user.profile_photo_url,alt:""},null,8,ne)]),e("div",ce,[e("div",me,[e("span",de,c(n.course.user.name),1)]),e("div",ue,[e("span",null,c(n.course.user.email),1)])])])])])])]}),_:1},8,["title"]))}};export{Ve as default};
