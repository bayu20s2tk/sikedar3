import{i as y,o as i,e as p,a as e,n as h,r as _,c as g,w as s,g as a,u as l,j as O,d as j,k as K,Z as B,b as o,t as c,l as M,f as v,m as P,O as L}from"./app.5fe5a492.js";import{_ as V}from"./Banner.04ef7bcd.js";import{_ as C,a as D,b as x,c as W}from"./DarkmodeToggle.ffa32471.js";import{M as I,S as J,h as z,A as T,W as E,j as H,y as Z}from"./transition.8816b452.js";const q={class:"flex items-center gap-2 truncate"},F={class:"flex items-center gap-2 truncate"},u={__name:"NavLinkAlt",props:{href:String|void 0,active:Boolean,icon:String},setup(r){const f=r,n=y(()=>f.active?" text-primary-700 text-sm font-medium rounded-3xl bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10":" text-gray-900 text-sm font-medium rounded-3xl bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10");return(d,b)=>r.href==null?(i(),p("button",{key:0,class:h(n.value)},[e("span",q,[e("i",{class:h(["fa-duotone",r.icon])},null,2),_(d.$slots,"default")])],2)):(i(),g(l(O),{key:1,href:r.href,class:h(n.value)},{default:s(()=>[e("span",F,[e("i",{class:h(["fa-duotone",r.icon])},null,2),a(),_(d.$slots,"default")])]),_:3},8,["href","class"]))}},G={class:"sticky top-0 z-50"},Q={class:"min-h-screen bg-gray-100 bg-glass bg-fixed"},R={class:"max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8"},U={class:"relative flex flex-wrap items-center justify-center lg:justify-between"},X={class:"absolute left-0 py-5 flex-shrink-0 lg:static flex items-center"},Y={key:1,class:"sm:flex sm:space-x-5"},ee={class:"mt-4 sm:mt-0 sm:pt-1 text-left"},te={key:0,class:"text-2xl font-bold text-gray-900 sm:text-2xl capitalize"},se=e("span",{class:"font-medium text-gray-600"},"Halo,",-1),oe={key:1,class:"text-2xl font-bold text-gray-900 sm:text-2xl capitalize"},ae={class:"text-sm font-medium text-gray-600"},ie={class:"hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5"},le={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},ne=["src","alt"],re={key:1,class:"inline-flex rounded-3xl"},de={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-3xl text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"},ce=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ue=e("div",{class:"border-t border-gray-100"},null,-1),pe=["onSubmit"],fe={class:"w-full py-10 lg:py-5 lg:border-t lg:border-gray-300"},ge={class:"lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center"},he={class:"hidden lg:block lg:col-span-2"},me={class:"flex space-x-4"},ve=e("div",{class:"px-12 lg:px-0"},[e("div",{class:"flex justify-end"})],-1),_e=e("div",{class:"absolute right-0 flex-shrink-0 lg:hidden"},null,-1),xe={class:"lg:hidden"},ye={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-200"},be={class:"pt-3 pb-2"},ke={class:"flex items-center justify-between px-4"},we={class:"-mr-2"},$e={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Se=e("div",{class:"mt-3 px-2 space-y-1"},null,-1),je={class:"pt-4 pb-2"},Be={class:"flex items-center px-5"},Me={class:"flex-shrink-0"},Pe=["src","alt"],Ce={class:"ml-3 min-w-0 flex-1"},We={class:"text-base font-medium text-gray-800 truncate capitalize"},ze={class:"text-sm font-medium text-gray-500 truncate"},Ne={class:"mt-3 px-2 space-y-1"},Ae=["onSubmit"],Oe={class:""},Ke={class:"max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},Le={class:""},Ve={class:"max-w-7xl mx-auto py-5 space-y-5 relative"},De={class:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl"},Ie=e("div",{class:"py-10 block lg:hidden"},null,-1),Je={class:"border-t border-gray-300 py-5 text-sm text-gray-500 text-center sm:text-left hidden lg:block"},Te={class:"block sm:inline capitalize"},Ee=e("span",{class:"block sm:inline"},"All rights reserved.",-1),Ge={__name:"AppLayout",props:{title:String,darkMode:Boolean,greeting:String,name:String,desc:String,avatar:String},setup(r){var w;const f=r,n=j((w=JSON.parse(localStorage.getItem("darkmode")))!=null?w:!1);K(n,t=>{console.log(`darkmode is ${t}`),localStorage.setItem("darkmode",JSON.stringify(t))});const d=j(!1);y(()=>!!P().action);const b=y(()=>!!P().previous),N=f.name.split(" "),k=()=>{L.post(route("logout"))};return(t,m)=>{var $;return i(),p("div",{class:h(["transition duration-1000",n.value?"nightwind dark":"nightwind"])},[t.$page.props.appSetting?(i(),g(l(B),{key:0,title:r.title+" - "+t.$page.props.appSetting.name},null,8,["title"])):(i(),g(l(B),{key:1,title:r.title},null,8,["title"])),e("div",G,[o(V)]),e("div",Q,[o(l(Z),{as:"header",class:""},{default:s(({open:A})=>[e("div",R,[e("div",U,[e("div",X,[b.value?_(t.$slots,"previous",{key:0}):(i(),p("div",Y,[e("div",ee,[f.greeting?(i(),p("p",te,[se,a(" "+c(l(N)[0])+". ",1)])):(i(),p("p",oe,c(f.name)+c(f.name?".":""),1)),e("p",ae,c(f.desc),1)])]))]),e("div",ie,[o(C,{darkMode:n.value,onClick:m[0]||(m[0]=S=>n.value=!n.value)},null,8,["darkMode"]),o(l(I),{as:"div",class:"ml-4 relative flex-shrink-0"},{default:s(()=>[o(D,{align:"right",width:"48"},{trigger:s(()=>[t.$page.props.jetstream.managesProfilePhotos?(i(),p("button",le,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,ne)])):(i(),p("span",re,[e("button",de,[a(c(t.$page.props.user.name)+" ",1),ce])]))]),content:s(()=>[o(x,{href:t.route("landing.welcome")},{default:s(()=>[a(" Beranda ")]),_:1},8,["href"]),o(x,{href:t.route("profile.show")},{default:s(()=>[a(" Profil ")]),_:1},8,["href"]),ue,e("form",{onSubmit:M(k,["prevent"])},[o(x,{as:"button"},{default:s(()=>[a(" Keluar ")]),_:1})],40,pe)]),_:1})]),_:1})]),e("div",fe,[e("div",ge,[e("div",he,[e("nav",me,[o(u,{href:t.route("dashboard"),active:t.$page.component.startsWith("Dashboard"),icon:"fa-house",replace:""},{default:s(()=>[a(" Dasbor ")]),_:1},8,["href","active"]),o(u,{href:t.route("course.index"),active:t.$page.component.startsWith("Course/"),icon:"fa-book"},{default:s(()=>[a(" Kelas ")]),_:1},8,["href","active"]),t.$page.props.user.role_id==1?(i(),g(u,{key:0,href:t.route("courseSubscribe.index"),active:t.$page.component.startsWith("CourseSubscribe"),icon:"fa-book"},{default:s(()=>[a(" Billing Kelas ")]),_:1},8,["href","active"])):v("",!0),o(u,{href:t.route("project.index"),active:t.$page.component.startsWith("Project/"),icon:"fa-umbrella-beach"},{default:s(()=>[a(" Proyek ")]),_:1},8,["href","active"]),t.$page.props.user.role_id==1?(i(),g(u,{key:1,href:t.route("projectBilling.index"),active:t.$page.component.startsWith("ProjectBilling"),icon:"fa-umbrella-beach"},{default:s(()=>[a(" Billing Proyek ")]),_:1},8,["href","active"])):v("",!0),t.$page.props.user.role_id==1?(i(),g(u,{key:2,href:t.route("complaint.index"),active:t.$page.component.startsWith("Complaint"),icon:"fa-triangle-exclamation"},{default:s(()=>[a(" Pengaduan ")]),_:1},8,["href","active"])):v("",!0),t.$page.props.user.role_id==1?(i(),g(u,{key:3,href:t.route("blog.index"),active:t.$page.component.startsWith("Blog/"),icon:"fa-blog"},{default:s(()=>[a(" Artikel ")]),_:1},8,["href","active"])):v("",!0),o(u,{href:t.route("profile.index"),active:t.$page.component.startsWith("Profile"),icon:"fa-user"},{default:s(()=>[a(" Pengaturan ")]),_:1},8,["href","active"])])]),ve])]),_e])]),o(l(J),{as:"template",show:A},{default:s(()=>[e("div",xe,[o(l(z),{as:"template",enter:"duration-150 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-150 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[o(l(T),{class:"z-20 fixed inset-0 bg-black bg-opacity-50"})]),_:1}),o(l(z),{as:"template",enter:"duration-150 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-150 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:s(()=>[o(l(E),{focus:"",class:"z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"},{default:s(()=>[e("div",ye,[e("div",be,[e("div",ke,[e("div",null,[o(C,{darkMode:n.value,onClick:m[1]||(m[1]=S=>n.value=!n.value)},null,8,["darkMode"])]),e("div",we,[o(l(H),{class:"bg-white rounded-3xl inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"},{default:s(()=>[e("button",{class:"inline-flex items-center justify-center p-2 rounded-3xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:m[2]||(m[2]=S=>d.value=!d.value)},[(i(),p("svg",$e,[e("path",{class:h({hidden:d.value,"inline-flex":!d.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:h({hidden:!d.value,"inline-flex":d.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])]),_:1})])]),Se]),e("div",je,[e("div",Be,[e("div",Me,[e("img",{class:"h-12 w-12 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Pe)]),e("div",Ce,[e("div",We,c(t.$page.props.user.name),1),e("div",ze,c(t.$page.props.user.email),1)])]),e("div",Ne,[o(W,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:s(()=>[a(" Profil ")]),_:1},8,["href","active"]),e("form",{method:"POST",onSubmit:M(k,["prevent"])},[o(W,{as:"button"},{default:s(()=>[a(" Keluar ")]),_:1})],40,Ae)])])])]),_:1})]),_:1})])]),_:2},1032,["show"])]),_:3}),e("main",Oe,[e("div",Ke,[e("div",Le,[e("main",Ve,[_(t.$slots,"default")])])])]),e("footer",null,[e("div",De,[Ie,e("div",Je,[e("span",Te,"\xA9 2023 "+c(($=t.$page.props.appSetting)==null?void 0:$.name)+". ",1),Ee])])])])],2)}}};export{Ge as _};