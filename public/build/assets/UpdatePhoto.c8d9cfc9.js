import{T as m,d as p,e as r,F as v,h as b,a as e,D as i,M as y,b as _,u as k,o as a,w as x,O as w}from"./app.cb98be3b.js";import"./helper.e9fc3b37.js";import{_ as C}from"./InputError.d612fa12.js";import{_ as P}from"./DangerButton.0cd30ca6.js";const F={role:"list",class:"grid sm:grid-cols-3 lg:grid-cols-4 gap-3 list-none"},S={class:"relative"},B=["src"],I={class:"absolute bottom-0 left-0 right-0 flex justify-end"},$=e("i",{class:"fa-duotone fa-trash"},null,-1),N=e("span",{class:"ml-3"},"Hapus",-1),j={class:""},D={class:"block"},L=["onClick"],M=["onClick"],O=e("i",{class:"fa-duotone fa-image text-gray-400 text-5xl"},null,-1),R=e("span",{class:"mt-2 block text-sm font-medium text-gray-900"},"Tambah Foto",-1),T=[O,R],q={__name:"UpdatePhoto",setup(U){const n=m({photo:null}),t=p(null),s=p(null),h=()=>{console.log("halo"),s.value&&(n.photo=s.value.files[0]),n.post(route("gallery.store"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{t.value=null,d(),n.reset()}})},u=()=>{s.value.click()},f=()=>{const o=s.value.files[0];if(!o)return;const c=new FileReader;c.onload=l=>{t.value=l.target.result},c.readAsDataURL(o),h()},g=o=>{w.delete(route("gallery.destroy",o),{preserveScroll:!0,onSuccess:()=>{t.value=null,d()}})},d=()=>{var o;(o=s.value)!=null&&o.value&&(s.value.value=null)};return(o,c)=>(a(),r("ul",F,[(a(!0),r(v,null,b(o.$page.props.gallery,l=>(a(),r("li",{key:l.name,class:""},[e("div",S,[e("img",{class:"shadow-lg rounded-3xl w-full aspect-video object-cover",src:l.media[0].original_url,alt:""},null,8,B),e("div",I,[_(P,{onClick:i(V=>g(l.id),["prevent"]),class:"rounded-none py-4 bg-opacity-50 inline-flex rounded-br-3xl rounded-tl-3xl"},{default:x(()=>[$,N]),_:2},1032,["onClick"])])])]))),128)),e("li",j,[e("input",{ref_key:"photoInput",ref:s,type:"file",class:"hidden",onChange:f},null,544),e("div",D,[t.value?(a(),r("div",{key:0,class:"",onClick:i(u,["prevent"])},[e("span",{class:"block rounded-3xl w-full aspect-video px-2 bg-cover bg-no-repeat bg-center border border-gray-300",style:y("background-image: url('"+t.value+"');")},null,4)],8,L)):(a(),r("button",{key:1,onClick:i(u,["prevent"]),type:"button",class:"relative block w-full aspect-video p-12 text-center border-2 border-gray-400 border-dashed focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl shadow-sm"},T,8,M))]),_(C,{message:k(n).errors.photo,class:"mt-2"},null,8,["message"])])]))}};export{q as default};
