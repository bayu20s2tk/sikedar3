import{_ as n}from"./AppLayout.cf87c8e5.js";import{c as _,w as o,o as a,b as r,a as e,e as p,f as u,t as l,g as m}from"./app.87bf308e.js";import{_ as g}from"./PrimaryButton.721e85db.js";import{_ as f}from"./PreviousButton.06fbc2b4.js";import"./moment.c063cb3c.js";import"./DarkmodeToggle.5e233903.js";const h={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},x={class:"py-4 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between"},b={class:"tracking-tight flex gap-5 items-center"},v={class:""},y=["src","alt"],w={class:""},k={class:"block text-xl font-bold text-gray-900 sm:text-2xl capitalize"},B={class:"block text-lg font-extrabold text-primary-600"},N={class:"mt-5 flex lg:mt-0 lg:flex-shrink-0 gap-x-2"},S=e("div",{class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},[e("ul",{role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"})],-1),z={__name:"Show",props:{users:Object|String},setup(i){const t=i;function c(s){return(s/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(s,d)=>(a(),_(n,{title:"Pengguna",name:"Pengguna",desc:"lorem ipsum"},{previous:o(()=>[r(f)]),default:o(()=>[e("div",h,[e("div",x,[e("div",b,[e("div",v,[t.users.profile_photo_url?(a(),p("img",{key:0,class:"mx-auto h-20 w-20 object-cover rounded-full",src:t.users.profile_photo_url,alt:t.users.name},null,8,y)):u("",!0)]),e("div",w,[e("span",k,l(t.users.name),1),e("span",B," Rp "+l(c(t.users.wallet_balance)),1)])]),e("div",N,[r(g,{as:"a",href:s.route("user.edit",t.users)},{default:o(()=>[m(" Ubah Data ")]),_:1},8,["href"])])])]),S]),_:1}))}};export{z as default};