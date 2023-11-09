import{T as D,d as y,c as o,w as n,o as s,b as g,a as t,t as p,e as u,g as c,f as l,F as _,u as k,j as v,h as P,n as f}from"./app.3d0755d6.js";import{h as w}from"./moment.9709ab41.js";import{_ as x}from"./PrimaryButton.8c5a12ca.js";import{_ as I}from"./AppLayout.ca43d050.js";import{_ as N}from"./PreviousButton.43cddadb.js";import T from"./BidList.d048f0c1.js";import V from"./ChatSection.ff049701.js";import H from"./MediaSection.3dadfbc2.js";import{_ as M}from"./DangerButton.a173cace.js";import O from"./ProgressSection.aedf5a01.js";import $ from"./SummarySection.3fbe7b1a.js";import z from"./PaymentModal.c78800e6.js";import F from"./WorkerAlert.20c11dc5.js";import"./Banner.6056804a.js";import"./DarkmodeToggle.cf9637d5.js";import"./helper.e9fc3b37.js";import"./transition.86e7637a.js";import"./Badge.dae04226.js";import"./moment.158a90ac.js";import"./InputError.91000fae.js";import"./TextInput.854ca256.js";import"./InputLabel.45ae82fe.js";import"./TextAreaInput.17394640.js";import"./ActionSection.42dc7ad0.js";import"./SectionTitle.f56442b2.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DialogModal.209936f2.js";import"./SecondaryButton.45d04e80.js";const R={class:"max-w-7xl mx-auto items-start"},A={class:"flex justify-between gap-3"},E={class:""},L={class:"text-xl font-medium leading-6 text-gray-900"},U={class:"flex items-center gap-2"},W=t("i",{class:"fa-duotone fa-check mr-2"},null,-1),Y=t("i",{class:"fa-duotone fa-paper-plane mr-2"},null,-1),q={class:"mt-5 grid grid-cols-1 divide-y divide-gray-300 dark:divide-gray-600 border border-gray-300 overflow-hidden rounded-3xl bg-white bg-opacity-50 shadow-lg md:grid-cols-4 md:divide-y-0 md:divide-x"},G={class:"px-4 py-5 sm:p-6"},J=t("dt",{class:"text-base font-normal text-gray-900"},"Status",-1),K={class:"mt-1 flex items-baseline justify-between md:block lg:flex"},Q={class:"flex items-baseline text-2xl font-semibold text-primary-600"},X=t("span",{class:"ml-2 text-sm font-medium text-gray-500"},null,-1),Z={class:"px-4 py-5 sm:p-6"},ee=t("dt",{class:"text-base font-normal text-gray-900"},"Deadline",-1),te={class:"mt-1 flex items-baseline justify-between md:block lg:flex"},se={class:"flex items-baseline text-2xl font-semibold text-primary-600"},oe={class:"ml-2 text-sm font-medium text-gray-500"},re={class:"px-4 py-5 sm:p-6"},ae=t("dt",{class:"text-base font-normal text-gray-900"},"Worker",-1),ie={class:"mt-1 flex items-baseline justify-between md:block lg:flex"},de={class:"flex items-baseline text-2xl font-semibold text-primary-600"},le={key:1},ne=t("span",{class:"ml-2 text-sm font-medium text-gray-500"},null,-1),ce={class:"px-4 py-5 sm:p-6"},me=t("dt",{class:"text-base font-normal text-gray-900"},"Owner",-1),pe={class:"mt-1 flex items-baseline justify-between md:block lg:flex"},ue={class:"flex items-baseline text-2xl font-semibold text-primary-600"},_e=t("span",{class:"ml-2 text-sm font-medium text-gray-500"},null,-1),fe={class:"mt-10 text-sm font-medium leading-6 text-gray-900"},ye={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"},xe={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},be={key:4,class:"my-10"},je={class:"sticky top-0 z-40 backdrop-blur border-b border-gray-200 mb-10"},he={class:"-mb-px flex","aria-label":"Tabs"},Je={__name:"Show",props:{project:Object,chat:Object},setup(C){const e=C,m=D({status_id:null,deadline_date:null}),b=d=>{e.project.status_id==2&&(m.deadline_date=w().add(e.project.finish_day,"days").format()),m.status_id=d,m.patch(route("project.update",e.project),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{m.reset()}})},S=()=>{m.status_id=0,m.patch(route("project.update",e.project),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{m.reset()}})};y(null);function B(d){return w(d).format("DD MMM Y HH:mm")}const a=y(1);return y(!1),(d,i)=>(s(),o(I,{title:"Proyek",name:"Proyek",desc:"lorem ipsum"},{previous:n(()=>[g(N)]),default:n(()=>{var j,h;return[t("div",R,[t("div",A,[t("div",E,[t("h1",L,p(e.project.name),1)]),t("div",U,[e.project.user_id==d.$page.props.user.id?(s(),u(_,{key:0},[e.project.status_id==0||e.project.status_id==1?(s(),o(M,{key:0,onClick:S},{default:n(()=>[c(" Cancel ")]),_:1})):l("",!0),e.project.status_id==0||e.project.status_id==1?(s(),o(x,{key:1,as:"a",href:d.route("project.edit",e.project)},{default:n(()=>[c(" Ubah Data ")]),_:1},8,["href"])):l("",!0),e.project.status_id==3?(s(),o(x,{key:2,onClick:i[0]||(i[0]=r=>b(4))},{default:n(()=>[W,c(" Proyek Selesai ")]),_:1})):l("",!0)],64)):l("",!0),d.$page.props.user.role_id==1?(s(),u(_,{key:1},[e.project.status_id==0?(s(),o(x,{key:0,onClick:i[1]||(i[1]=r=>b(1))},{default:n(()=>[Y,c(" Approve ")]),_:1})):l("",!0)],64)):l("",!0)])]),t("div",null,[t("dl",q,[t("div",G,[J,t("dd",K,[t("div",Q,[c(p(e.project.status)+" ",1),X])])]),t("div",Z,[ee,t("dd",te,[t("div",se,[c(p(e.project.finish_day)+" Hari ",1),t("span",oe," / "+p(B((j=e.project)==null?void 0:j.deadline_date)),1)])])]),t("div",re,[ae,t("dd",ie,[t("div",de,[e.project.worker?(s(),o(k(v),{key:0,href:d.route("user.show",e.project.worker)},{default:n(()=>{var r;return[c(p((r=e.project.worker)==null?void 0:r.name),1)]}),_:1},8,["href"])):(s(),u("span",le," - ")),ne])])]),t("div",ce,[me,t("dd",pe,[t("div",ue,[g(k(v),{href:d.route("user.show",e.project.user)},{default:n(()=>{var r;return[c(p((r=e.project.user)==null?void 0:r.name),1)]}),_:1},8,["href"]),_e])])])])]),e.project.status_id==2&&e.project.user.id==d.$page.props.user.id?(s(),o(z,{key:0,project:e.project},null,8,["project"])):l("",!0),e.project.status_id==2&&((h=e.project.worker)==null?void 0:h.id)==d.$page.props.user.id?(s(),o(F,{key:1})):l("",!0),e.project.status_id==0?(s(),o($,{key:2,class:"mt-10",project:e.project},null,8,["project"])):e.project.status_id==1?(s(),u(_,{key:3},[t("h1",fe,"Total bids "+p(e.project.bid.length),1),t("div",ye,[t("ul",xe,[(s(!0),u(_,null,P(e.project.bid,r=>(s(),o(T,{bid:r},null,8,["bid"]))),256))])])],64)):(s(),u("div",be,[t("div",je,[t("nav",he,[t("button",{class:f(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",a.value==1?"border-primary-600 text-primary-600":"text-gray-500 border-gray-300"]),onClick:i[2]||(i[2]=r=>a.value=1)}," Ringkasan ",2),t("button",{class:f(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",a.value==2?"border-cyan-600 text-cyan-600":"text-gray-500 border-gray-300 "]),onClick:i[3]||(i[3]=r=>a.value=2)}," Resources ",2),t("button",{class:f(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",a.value==3?"border-green-600 text-green-600":"text-gray-500 border-gray-300 "]),onClick:i[4]||(i[4]=r=>a.value=3)}," Conversation ",2),e.project.status_id!=2?(s(),u("button",{key:0,class:f(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",a.value==4?"border-sky-600 text-sky-600":"text-gray-500 border-gray-300 "]),onClick:i[5]||(i[5]=r=>a.value=4)}," Progress ",2)):l("",!0)])]),a.value==1?(s(),o($,{key:0,project:e.project},null,8,["project"])):a.value==2?(s(),o(H,{key:1,project:e.project},null,8,["project"])):a.value==3?(s(),o(V,{key:2,project:e.project,chat:e.chat},null,8,["project","chat"])):a.value==4?(s(),o(O,{key:3,project:e.project},null,8,["project"])):l("",!0)]))])]}),_:1}))}};export{Je as default};