import{d as f,c as p,w as t,o as n,a as e,b as s,u as o,j as r,t as c,n as g,e as m,f as h,g as _,D as y,O as b}from"./app.cb98be3b.js";import{_ as x}from"./AppLayout.c15b4da9.js";import{_ as v}from"./MobileMenu.50d7d87d.js";import"./helper.e9fc3b37.js";import{_ as w}from"./DangerButton.0cd30ca6.js";import"./moment.29a2dbbe.js";import"./DarkmodeToggle.414fcd08.js";const k={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"},$={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},S=e("p",{class:"text-sm font-medium text-gray-900"},"Ubah data profil",-1),j=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),N={class:"block lg:hidden"},B={class:"text-sm font-medium text-gray-900"},C={key:0,class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"},O={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},V=e("p",{class:"text-sm font-medium text-gray-900"},"Pengaturan aplikasi",-1),D=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),K=e("p",{class:"text-sm font-medium text-gray-900"},"Data pengguna",-1),M=e("i",{class:"fa-regular fa-angle-right text-gray-900"},null,-1),P={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"},I={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},T=e("p",{class:"text-sm font-medium text-gray-900"},"Ketentuan Layanan",-1),z=e("p",{class:"text-sm font-medium text-gray-900"},"Kebijakan Privasi",-1),E=["onSubmit"],R={__name:"Index",props:{},setup(J){var i;const l=f((i=JSON.parse(localStorage.getItem("darkmode")))!=null?i:!1),u=()=>{b.post(route("logout"))};return(a,d)=>(n(),p(x,{title:"Saya",name:a.$page.props.user.name,desc:a.$page.props.user.email,avatar:a.$page.props.user.profile_photo_url},{default:t(()=>[e("div",k,[e("ul",$,[e("li",null,[s(o(r),{href:a.route("profile.show"),class:"flex justify-between px-6 py-4"},{default:t(()=>[S,j]),_:1},8,["href"])]),e("li",N,[s(o(r),{href:a.route("profile.index"),onClick:d[0]||(d[0]=L=>l.value=!l.value),class:"flex justify-between px-6 py-4"},{default:t(()=>[e("p",B,"Mode "+c(l.value?"gelap":"terang"),1),e("i",{class:g(["fa-regular text-gray-900",l.value?"fa-moon":"fa-sun-bright"])},null,2)]),_:1},8,["href"])])])]),a.$page.props.user.role_id==1?(n(),m("div",C,[e("ul",O,[e("li",null,[s(o(r),{href:a.route("setting.index"),class:"flex justify-between px-6 py-4"},{default:t(()=>[V,D]),_:1},8,["href"])]),e("li",null,[s(o(r),{href:a.route("user.index"),class:"flex justify-between px-6 py-4"},{default:t(()=>[K,M]),_:1},8,["href"])])])])):h("",!0),e("div",P,[e("ul",I,[e("li",null,[s(o(r),{href:a.route("terms.show"),class:"block px-6 py-4"},{default:t(()=>[T]),_:1},8,["href"])]),e("li",null,[s(o(r),{href:a.route("policy.show"),class:"block px-6 py-4"},{default:t(()=>[z]),_:1},8,["href"])])])]),e("form",{method:"POST",onSubmit:y(u,["prevent"])},[s(w,{type:"submit",class:"w-full"},{default:t(()=>[_(" Keluar ")]),_:1})],40,E),s(v)]),_:1},8,["name","desc","avatar"]))}};export{R as default};
