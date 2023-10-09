import{m as k}from"./moment.8b5bdb1f.js";import{T as S,d as w,S as B,e as n,a as t,n as a,g as u,t as d,F as _,f as h,b as p,u as c,w as V,h as N,o as i,c as $}from"./app.d164d0a5.js";import{_ as M}from"./PrimaryButton.7b368c4c.js";import{_ as D}from"./TextAreaInput.74b1898c.js";import{_ as H}from"./InputError.e6f5db7d.js";const T={class:"flex space-x-4 text-sm text-gray-500 ml-10"},j={class:"flex-none py-0"},L=["src"],F={class:"font-medium text-sm text-gray-900"},I=t("i",{class:"fa-regular fa-angle-right"},null,-1),O=["innerHTML"],q={class:"text-xs"},z=["datetime"],E={class:"flex justify-between items-start gap-5 mt-2"},K={class:""},U={key:0,class:""},Y={class:"flex-none flex space-x-5 mr-5"},A={class:"space-x-2"},G={class:"space-x-2"},X={__name:"CommentChildSection",props:{course_id:Number,comment:Object,child:Object,child_idx:Number,mother:{type:Boolean,default:!1}},setup(x){const e=x,s=S({id:null,comment:null,course_id:e.course_id,parent_id:e.child.id}),g=()=>{s.post(route("blogComment.store"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{s.reset(),m.value=!1}})},v=l=>{s.post(route("blogComment.like",l),{preserveScroll:!0,onSuccess:()=>{}})},b=l=>{s.post(route("blogComment.dislike",l),{preserveScroll:!0,onSuccess:()=>{}})},m=w(!1);function f(l){return k(l).format("DD MMM Y HH:mm")}return(l,o)=>{const y=B("CommentChildSection",!0);return i(),n(_,null,[t("div",T,[t("div",j,[t("img",{src:e.child.user.profile_photo_url,alt:"",class:"h-10 w-10 rounded-full bg-gray-100"},null,8,L)]),t("div",{class:a([(e.child_idx===0,""),"flex-1 pb-3"])},[t("h3",F,[u(d(e.child.user.name)+" ",1),e.child.mother_name&&e.mother?(i(),n(_,{key:0},[I,u(" "+d(e.child.mother_name),1)],64)):h("",!0)]),t("div",{class:"prose prose-sm max-w-none text-gray-500",innerHTML:e.child.content},null,8,O),t("p",q,[t("time",{datetime:f(e.child.created_at)},d(f(e.child.created_at)),9,z)]),t("div",E,[t("div",K,[t("button",{onClick:o[0]||(o[0]=r=>m.value=!m.value),class:"font-medium text-primary-600"},"Balas"),m.value?(i(),n("div",U,[p(D,{id:"comment",modelValue:c(s).comment,"onUpdate:modelValue":o[1]||(o[1]=r=>c(s).comment=r),class:"mt-1 block w-full",rows:"2",autofocus:"",required:""},null,8,["modelValue"]),p(M,{as:"button",onClick:g,class:a(["mt-3",{"opacity-25":c(s).processing}]),disabled:c(s).processing},{default:V(()=>[u(" Kirim ")]),_:1},8,["class","disabled"]),p(H,{message:c(s).errors.comment,class:"mt-2"},null,8,["message"])])):h("",!0)]),t("div",Y,[t("div",A,[t("button",{type:"button",onClick:o[2]||(o[2]=r=>v(e.child.id))},[t("i",{class:a(["text-lg fa-heart",e.child.has_upvoted?"fa-solid text-red-600":"fa-regular text-primary-600"])},null,2)]),e.child.likes!=0?(i(),n("span",{key:0,class:a(e.child.has_upvoted?"text-red-600":"text-primary-600")},d(e.child.likes),3)):h("",!0)]),t("div",G,[t("button",{type:"button",onClick:o[3]||(o[3]=r=>b(e.child.id))},[t("i",{class:a(["text-lg fa-thumbs-down",e.child.has_downvoted?"fa-solid text-primary-600":"fa-regular text-primary-600"])},null,2)])])])])],2)]),(i(!0),n(_,null,N(e.child.child,(r,C)=>(i(),$(y,{course_id:e.course_id,comment:e.comment,child:r,child_idx:C,mother:!0},null,8,["course_id","comment","child","child_idx"]))),256))],64)}}};export{X as default};
