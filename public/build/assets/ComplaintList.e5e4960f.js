import{T as b,d as k,e,a as t,g as n,t as o,b as w,n as p,F as c,f as d,l as h,o as a}from"./app.3d0755d6.js";import{_ as C}from"./Badge.dae04226.js";import{m as B}from"./moment.158a90ac.js";const j={class:""},D={class:"font-medium text-gray-900"},L=t("i",{class:"fa-regular fa-triangle-exclamation text-red-600 mr-2"},null,-1),M={class:""},N={key:0,class:""},T=t("div",{class:"px-4 py-5 sm:px-6"},[t("h3",{class:"text-lg font-medium leading-6 text-gray-900"},"Informasi Pengaduan"),t("p",{class:"mt-1 max-w-2xl text-sm text-gray-500"},"Lorem ipsum dolor sit amet.")],-1),V={class:"px-4 py-5 sm:px-6"},$={class:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"},A={class:"sm:col-span-1"},I=t("dt",{class:"text-sm font-medium text-gray-500"},"Tanggal",-1),K={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},S={class:"sm:col-span-1"},F=t("dt",{class:"text-sm font-medium text-gray-500"},"Kategori",-1),H={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},P={class:"sm:col-span-1"},z=t("dt",{class:"text-sm font-medium text-gray-500"},"Pelapor",-1),E={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},O={class:"sm:col-span-1"},U=t("dt",{class:"text-sm font-medium text-gray-500"},"Terdakwa",-1),Y={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},q={class:"sm:col-span-2"},G=t("dt",{class:"text-sm font-medium text-gray-500"},"Komentar",-1),J={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},Q={class:"sm:col-span-2"},R=t("dt",{class:"text-sm font-medium text-gray-500"},"Aksi",-1),W={class:"mt-1 text-sm text-gray-900"},X={role:"list",class:"divide-y divide-gray-300 rounded-3xl border border-gray-300"},Z={class:"flex items-center justify-between py-3 pl-3 pr-4 text-sm"},tt=t("div",{class:"flex w-0 flex-1 items-center"},null,-1),st={class:"ml-4 flex-shrink-0"},et=["href"],ot=["href"],at={class:"flex items-center justify-between py-3 pl-3 pr-4 text-sm"},it=t("div",{class:"flex w-0 flex-1 items-center"},null,-1),mt={class:"ml-4 flex-shrink-0 space-x-5"},ct={__name:"ComplaintList",props:{item:Object},setup(y){var u,x,g;const s=y,l=b({id:s.item.id,user_id:(g=(u=s.item.course_comment)==null?void 0:u.user.id)!=null?g:(x=s.item.blog_comment)==null?void 0:x.user.id,status_id:null}),_=i=>{i?l.status_id=!0:l.status_id=!1,l.put(route("complaint.update",s.item),{errorBag:"updateInformation",preserveScroll:!0,onSuccess:()=>{l.reset()}})},r=k(!1);function v(i){return B(i).format("DD MMM Y HH:mm")}return(i,m)=>(a(),e("li",null,[t("button",{onClick:m[0]||(m[0]=f=>r.value=!r.value),class:"flex w-full justify-between px-6 py-4"},[t("div",j,[t("p",D,[L,n(" "+o(s.item.user.name),1)])]),t("div",M,[w(C,{name:s.item.status,class:p(["mr-5",s.item.color])},null,8,["name","class"]),t("i",{class:p(["fa-regular text-gray-900 w-5",r.value?"fa-angle-down":"fa-angle-right"])},null,2)])]),r.value?(a(),e("div",N,[T,t("div",V,[t("dl",$,[t("div",A,[I,t("dd",K,o(v(s.item.created_at)),1)]),t("div",S,[F,t("dd",H,o(s.item.category),1)]),t("div",P,[z,t("dd",E,o(s.item.user.name),1)]),t("div",O,[U,t("dd",Y,[s.item.course?(a(),e(c,{key:0},[n(o(s.item.course_comment.user.name),1)],64)):s.item.blog?(a(),e(c,{key:1},[n(o(s.item.blog_comment.user.name),1)],64)):d("",!0)])]),t("div",q,[G,t("dd",J,[s.item.course?(a(),e(c,{key:0},[n(o(s.item.course_comment.content),1)],64)):s.item.blog?(a(),e(c,{key:1},[n(o(s.item.blog_comment.content),1)],64)):d("",!0)])]),t("div",Q,[R,t("dd",W,[t("ul",X,[t("li",Z,[tt,t("div",st,[s.item.course?(a(),e("a",{key:0,target:"_blank",href:i.route("landing.course.show",s.item.course),class:"font-medium text-primary-600 hover:text-indigo-500"}," Lihat Kelas ",8,et)):s.item.blog?(a(),e("a",{key:1,target:"_blank",href:i.route("landing.blog.show",s.item.blog),class:"font-medium text-primary-600 hover:text-indigo-500"}," Lihat Artikel ",8,ot)):d("",!0)])]),t("li",at,[it,t("div",mt,[t("button",{onClick:m[1]||(m[1]=h(f=>_(!1),["prevent"])),class:"font-medium text-green-600"},"Abaikan"),t("button",{onClick:m[2]||(m[2]=h(f=>_(!0),["prevent"])),class:"font-medium text-red-600"},"Blokir User")])])])])])])])])):d("",!0)]))}};export{ct as default};