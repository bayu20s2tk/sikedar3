import{i as k,o,e as f,a as e,n as h,g as r,r as x,c,w as s,u as l,j as N,b as a,t as d,k as F,F as T,h as G,d as j,l as I,Z as P,m as B,f as _,p as W,O as J}from"./app.c8c93927.js";import{_ as E,a as z,b as H,c as b,d as C}from"./DarkmodeToggle.e01a0cae.js";import{j as K,W as O,y as L,M as U,S as Z,h as A,A as q}from"./transition.d5e6da16.js";const Q={class:"flex items-center gap-2"},R={class:"flex items-center gap-2"},g={__name:"NavLinkAlt",props:{href:String,active:Boolean,icon:String,flyout:{type:Boolean,default:!1}},setup(n){const u=n,i=k(()=>u.active?" text-primary-700 text-sm font-medium rounded-3xl bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10":" text-gray-900 text-sm font-medium rounded-3xl bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10");return(p,y)=>n.flyout?(o(),f("button",{key:0,class:h(i.value)},[e("div",Q,[e("i",{class:h(["fa-duotone",n.icon])},null,2),r(),x(p.$slots,"default")])],2)):(o(),c(l(N),{key:1,href:n.href,class:h(i.value)},{default:s(()=>[e("div",R,[e("i",{class:h(["fa-duotone",n.icon])},null,2),r(),x(p.$slots,"default")])]),_:3},8,["href","class"]))}},X=e("i",{class:"ml-2 fa-regular fa-angle-down"},null,-1),Y={class:"overflow-hidden rounded-3xl shadow-lg border border-gray-300"},ee={class:"relative grid gap-8 bg-white bg-opacity-50 backdrop-blur p-7 lg:grid-cols-2"},te={class:"ml-4 text-left"},se={class:"text-sm font-medium text-gray-900"},ae={class:"text-sm text-gray-500"},oe=e("div",{class:"bg-gray-50 p-4"},[e("a",{href:"#",class:"flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"},[e("span",{class:"flex items-center"},[e("span",{class:"text-sm font-medium text-gray-900"}," Documentation ")]),e("span",{class:"block text-sm text-gray-500"}," Start integrating products and tools ")])],-1),re={__name:"FlyoutMenu",props:{title:String,data:Object},setup(n){const u=n;return(i,p)=>(o(),c(l(L),{class:"relative"},{default:s(({open:y})=>[a(l(K),{class:h(["","group inline-flex items-center"])},{default:s(()=>[e("span",null,d(u.title),1),X]),_:2},1032,["class"]),a(F,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-y-1 opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"translate-y-1 opacity-0"},{default:s(()=>[a(l(O),{class:"absolute left-0 z-10 mt-5 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl"},{default:s(()=>[e("div",Y,[e("div",ee,[(o(!0),f(T,null,G(u.data,m=>(o(),c(l(N),{key:m.name,href:m.href,class:"-m-3 flex items-center rounded-3xl p-2 transition duration-150 ease-in-out hover:bg-gray-300 hover:bg-opacity-50"},{default:s(()=>[e("i",{class:h(["fa-regular text-primary-700 text-2xl ml-2",m.icon])},null,2),e("div",te,[e("p",se,d(m.name),1),e("p",ae,d(m.desc),1)])]),_:2},1032,["href"]))),128))]),oe])]),_:1})]),_:1})]),_:1}))}},le={class:"sticky top-0 z-50"},ie={class:"min-h-screen bg-gray-100 bg-glass bg-fixed"},ne={class:"max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8"},ce={class:"relative flex flex-wrap items-center justify-center lg:justify-between"},de={class:"absolute left-0 py-5 flex-shrink-0 lg:static flex items-center"},ue={key:1,class:"sm:flex sm:space-x-5"},pe={class:"mt-4 sm:mt-0 sm:pt-1 text-left"},ge={key:0,class:"text-2xl font-bold text-gray-900 sm:text-2xl capitalize"},fe=e("span",{class:"font-medium text-gray-600"},"Halo,",-1),he={key:1,class:"text-2xl font-bold text-gray-900 sm:text-2xl capitalize"},me={class:"text-sm font-medium text-gray-600"},ve={class:"hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5"},_e={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},ye=["src","alt"],xe={key:1,class:"inline-flex rounded-3xl"},be={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-3xl text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"},ke=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),we=e("div",{class:"border-t border-gray-100"},null,-1),$e=["onSubmit"],Se={class:"w-full py-10 lg:py-5 lg:border-t lg:border-gray-300"},Me={class:"lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center"},je={class:"hidden lg:block lg:col-span-2"},Pe={class:"flex space-x-4"},Be=e("div",{class:"px-12 lg:px-0"},[e("div",{class:"flex justify-end"})],-1),We=e("div",{class:"absolute right-0 flex-shrink-0 lg:hidden"},null,-1),ze={class:"lg:hidden"},Ce={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-200"},Ae={class:"pt-3 pb-2"},Ne={class:"flex items-center justify-between px-4"},Ke={class:"-mr-2"},Oe={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Le=e("div",{class:"mt-3 px-2 space-y-1"},null,-1),De={class:"pt-4 pb-2"},Ve={class:"flex items-center px-5"},Fe={class:"flex-shrink-0"},Te=["src","alt"],Ge={class:"ml-3 min-w-0 flex-1"},Ie={class:"text-base font-medium text-gray-800 truncate capitalize"},Je={class:"text-sm font-medium text-gray-500 truncate"},Ee={class:"mt-3 px-2 space-y-1"},He=["onSubmit"],Ue={class:""},Ze={class:"max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},qe={class:""},Qe={class:"max-w-7xl mx-auto py-5 space-y-5 relative"},Re={class:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl"},Xe=e("div",{class:"py-10 block lg:hidden"},null,-1),Ye={class:"border-t border-gray-300 py-5 text-sm text-gray-500 text-center sm:text-left hidden lg:block"},et={class:"block sm:inline capitalize"},tt=e("span",{class:"block sm:inline"},"All rights reserved.",-1),rt={__name:"AppLayout",props:{title:String,darkMode:Boolean,greeting:String,name:String,desc:String,avatar:String},setup(n){var $;const u=n,i=j(($=JSON.parse(localStorage.getItem("darkmode")))!=null?$:!1);I(i,t=>{console.log(`darkmode is ${t}`),localStorage.setItem("darkmode",JSON.stringify(t))});const p=j(!1);k(()=>!!W().action);const y=k(()=>!!W().previous),m=u.name.split(" "),D=[{name:"Aplikasi",desc:"Measure actions your users take",href:"/setting",icon:"fa-screwdriver-wrench"},{name:"Kategori Proyek",desc:"Measure actions your users take",href:"/project-category",icon:"fa-umbrella-beach"},{name:"Kategori Kelas",desc:"Measure actions your users take",href:"/course-category",icon:"fa-book"},{name:"Kategori Artikel",desc:"Measure actions your users take",href:"/blog-category",icon:"fa-blog"}],w=()=>{J.post(route("logout"))};return(t,v)=>{var S;return o(),f("div",{class:h(["transition duration-1000",i.value?"nightwind dark":"nightwind"])},[t.$page.props.appSetting?(o(),c(l(P),{key:0,title:n.title+" - "+t.$page.props.appSetting.name},null,8,["title"])):(o(),c(l(P),{key:1,title:n.title},null,8,["title"])),e("div",le,[a(E)]),e("div",ie,[a(l(L),{as:"header",class:""},{default:s(({open:V})=>[e("div",ne,[e("div",ce,[e("div",de,[y.value?x(t.$slots,"previous",{key:0}):(o(),f("div",ue,[e("div",pe,[u.greeting?(o(),f("p",ge,[fe,r(" "+d(l(m)[0])+". ",1)])):(o(),f("p",he,d(u.name)+d(u.name?".":""),1)),e("p",me,d(u.desc),1)])]))]),e("div",ve,[a(z,{darkMode:i.value,onClick:v[0]||(v[0]=M=>i.value=!i.value)},null,8,["darkMode"]),a(l(U),{as:"div",class:"ml-4 relative flex-shrink-0"},{default:s(()=>[a(H,{align:"right",width:"48"},{trigger:s(()=>[t.$page.props.jetstream.managesProfilePhotos?(o(),f("button",_e,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,ye)])):(o(),f("span",xe,[e("button",be,[r(d(t.$page.props.user.name)+" ",1),ke])]))]),content:s(()=>[a(b,{href:t.route("landing.welcome")},{default:s(()=>[r(" Beranda ")]),_:1},8,["href"]),a(b,{href:t.route("profile.show")},{default:s(()=>[r(" Profil ")]),_:1},8,["href"]),we,e("form",{onSubmit:B(w,["prevent"])},[a(b,{as:"button"},{default:s(()=>[r(" Keluar ")]),_:1})],40,$e)]),_:1})]),_:1})]),e("div",Se,[e("div",Me,[e("div",je,[e("nav",Pe,[a(g,{href:t.route("dashboard"),active:t.$page.component.startsWith("Dashboard"),icon:"fa-house",replace:""},{default:s(()=>[r(" Dasbor ")]),_:1},8,["href","active"]),a(g,{href:t.route("course.index"),active:t.$page.component.startsWith("Course/"),icon:"fa-book"},{default:s(()=>[r(" Kelas ")]),_:1},8,["href","active"]),t.$page.props.user.role_id==1?(o(),c(g,{key:0,href:t.route("courseSubscribe.index"),active:t.$page.component.startsWith("CourseSubscribe"),icon:"fa-book"},{default:s(()=>[r(" Subscribe ")]),_:1},8,["href","active"])):_("",!0),t.$page.props.user.role_id==1?(o(),c(g,{key:1,href:t.route("project.index"),active:t.$page.component.startsWith("Project/"),icon:"fa-umbrella-beach"},{default:s(()=>[r(" Proyek ")]),_:1},8,["href","active"])):_("",!0),t.$page.props.user.role_id==1?(o(),c(g,{key:2,href:t.route("blog.index"),active:t.$page.component.startsWith("Blog/"),icon:"fa-blog"},{default:s(()=>[r(" Artikel ")]),_:1},8,["href","active"])):_("",!0),t.$page.props.user.role_id==1?(o(),c(g,{key:3,href:t.route("gallery.index"),active:t.$page.component.startsWith("Gallery"),icon:"fa-image"},{default:s(()=>[r(" Galeri ")]),_:1},8,["href","active"])):_("",!0),t.$page.props.user.role_id==1?(o(),c(g,{key:4,href:t.route("user.index"),active:t.$page.component.startsWith("User"),icon:"fa-person"},{default:s(()=>[r(" Pengguna ")]),_:1},8,["href","active"])):_("",!0),t.$page.props.user.role_id==1?(o(),c(g,{key:5,href:"#",active:t.$page.url.startsWith("/setting"),icon:"fa-gear"},{default:s(()=>[a(re,{title:"Pengaturan",data:D})]),_:1},8,["active"])):_("",!0),a(g,{href:t.route("profile.index"),active:t.$page.component.startsWith("Profile"),icon:"fa-user"},{default:s(()=>[r(" Saya ")]),_:1},8,["href","active"])])]),Be])]),We])]),a(l(Z),{as:"template",show:V},{default:s(()=>[e("div",ze,[a(l(A),{as:"template",enter:"duration-150 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-150 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[a(l(q),{class:"z-20 fixed inset-0 bg-black bg-opacity-50"})]),_:1}),a(l(A),{as:"template",enter:"duration-150 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-150 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:s(()=>[a(l(O),{focus:"",class:"z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"},{default:s(()=>[e("div",Ce,[e("div",Ae,[e("div",Ne,[e("div",null,[a(z,{darkMode:i.value,onClick:v[1]||(v[1]=M=>i.value=!i.value)},null,8,["darkMode"])]),e("div",Ke,[a(l(K),{class:"bg-white rounded-3xl inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"},{default:s(()=>[e("button",{class:"inline-flex items-center justify-center p-2 rounded-3xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:v[2]||(v[2]=M=>p.value=!p.value)},[(o(),f("svg",Oe,[e("path",{class:h({hidden:p.value,"inline-flex":!p.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:h({hidden:!p.value,"inline-flex":p.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])]),_:1})])]),Le]),e("div",De,[e("div",Ve,[e("div",Fe,[e("img",{class:"h-12 w-12 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Te)]),e("div",Ge,[e("div",Ie,d(t.$page.props.user.name),1),e("div",Je,d(t.$page.props.user.email),1)])]),e("div",Ee,[a(C,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:s(()=>[r(" Profil ")]),_:1},8,["href","active"]),e("form",{method:"POST",onSubmit:B(w,["prevent"])},[a(C,{as:"button"},{default:s(()=>[r(" Keluar ")]),_:1})],40,He)])])])]),_:1})]),_:1})])]),_:2},1032,["show"])]),_:3}),e("main",Ue,[e("div",Ze,[e("div",qe,[e("main",Qe,[x(t.$slots,"default")])])])]),e("footer",null,[e("div",Re,[Xe,e("div",Ye,[e("span",et,"\xA9 2023 "+d((S=t.$page.props.appSetting)==null?void 0:S.name)+". ",1),tt])])])])],2)}}};export{rt as _};