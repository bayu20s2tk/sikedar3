import{T as x,d as p,e as o,a as t,g as f,t as e,b as g,n as d,l as h,f as r,o as i}from"./app.90e3577e.js";import{_ as y}from"./Badge.5e8a8656.js";import"./moment.90204969.js";const v={class:""},b={class:"font-medium text-gray-900"},k=t("i",{class:"fa-regular fa-umbrella-beach mr-2"},null,-1),w={class:""},B={key:0,class:""},P=t("div",{class:"px-4 py-5 sm:px-6"},[t("h3",{class:"text-lg font-medium leading-6 text-gray-900"},"Billing Information"),t("p",{class:"mt-1 max-w-2xl text-sm text-gray-500"},"Personal details and application.")],-1),S={class:"px-4 py-5 sm:px-6"},j={class:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"},C={class:"sm:col-span-1"},N=t("dt",{class:"text-sm font-medium text-gray-500"},"Proyek",-1),V={class:"mt-1 text-sm text-gray-900"},I={class:"sm:col-span-1"},T=t("dt",{class:"text-sm font-medium text-gray-500"},"Nominal Pembayaran",-1),$={class:"mt-1 text-sm text-gray-900"},L={class:"sm:col-span-1"},z=t("dt",{class:"text-sm font-medium text-gray-500"},"Status Proyek",-1),A={class:"mt-1 text-sm text-gray-900"},D={class:"sm:col-span-1"},E=t("dt",{class:"text-sm font-medium text-gray-500"},"Status Pembayaran",-1),F={class:"mt-1 text-sm text-gray-900"},M={key:0,class:"sm:col-span-2"},O=t("dt",{class:"text-sm font-medium text-gray-500"},"Aksi",-1),R={class:"mt-1 text-sm text-gray-900"},q={role:"list",class:"divide-y divide-gray-300 rounded-3xl border border-gray-300"},G={class:"flex items-center justify-between py-3 pl-3 pr-4 text-sm"},H=t("div",{class:"flex w-0 flex-1 items-center"},[t("i",{class:"fa-regular fa-cat"}),t("span",{class:"ml-2 w-0 flex-1 truncate"},"Lorem ipsum")],-1),J={class:"ml-4 flex-shrink-0"},K=["onClick"],Y={__name:"BillingList",props:{item:Object},setup(m){const s=m,l=x({project_id:s.item.id,status_id:5}),_=()=>{l.patch(route("projectBilling.update",s.item.id),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{},onFinish:()=>{l.reset()}})},a=p(!1);function u(n){return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}return(n,c)=>(i(),o("li",null,[t("button",{onClick:c[0]||(c[0]=Q=>a.value=!a.value),class:"flex w-full justify-between px-6 py-4"},[t("div",v,[t("p",b,[k,f(" "+e(s.item.name),1)])]),t("div",w,[g(y,{name:s.item.billing,class:d(["mr-5",s.item.color])},null,8,["name","class"]),t("i",{class:d(["fa-regular text-gray-900 w-5",a.value?"fa-angle-down":"fa-angle-right"])},null,2)])]),a.value?(i(),o("div",B,[P,t("div",S,[t("dl",j,[t("div",C,[N,t("dd",V,e(s.item.name),1)]),t("div",I,[T,t("dd",$,"Rp "+e(u(s.item.budget_from)),1)]),t("div",L,[z,t("dd",A,e(s.item.status),1)]),t("div",D,[E,t("dd",F,e(s.item.billing),1)]),s.item.status_id==4?(i(),o("div",M,[O,t("dd",R,[t("ul",q,[t("li",G,[H,t("div",J,[t("button",{onClick:h(_,["prevent"]),class:"font-medium text-primary-600"},"Tandai sudah dibayar",8,K)])])])])])):r("",!0)])])])):r("",!0)]))}};export{Y as default};
