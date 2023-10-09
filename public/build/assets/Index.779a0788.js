import{s as p,O as x,d as y,c as g,w as a,o as d,a as e,b as r,g as u,e as _,h as v,t as o,u as i,j as l,F as k,n as w}from"./app.d164d0a5.js";import{_ as V}from"./AppLayout.ef46d6b6.js";import{_ as b}from"./PrimaryButton.7b368c4c.js";import{_ as B}from"./TextInput.71f0c89a.js";import{h as D}from"./moment.9709ab41.js";import"./DarkmodeToggle.37ca7d2b.js";import"./helper.e9fc3b37.js";const M={class:"flex justify-between gap-3"},C={class:""},N={id:"search"},$={class:""},j={class:"mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"},A={class:w(["bg-primary-300 text-primary-900","inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"])},F={class:"text-xl font-semibold text-gray-900"},H={class:"mt-3 text-base text-gray-500"},O={class:"mt-6 flex items-center"},T={class:"flex-shrink-0"},q=["src"],z={class:"ml-3"},E={class:"text-sm font-medium text-gray-900"},I={class:"flex space-x-1 text-sm text-gray-500"},L=["datetime"],P={__name:"Index",props:{blog:void 0},setup(f){const h=f;p(()=>{x.reload({only:["blog"]})});function n(t){return D(t).format("DD MMM Y HH:mm")}const c=y("");return(t,m)=>(d(),g(V,{title:"Artikel",name:"Artikel",desc:"lorem ipsum"},{default:a(()=>[e("div",M,[e("div",C,[e("form",N,[r(B,{name:"query",modelValue:c.value,"onUpdate:modelValue":m[0]||(m[0]=s=>c.value=s),type:"text",class:"block w-full lg:w-96 mb-5 shadow",placeholder:"Cari disini"},null,8,["modelValue"])])]),e("div",$,[r(b,{as:"a",href:t.route("blog.create")},{default:a(()=>[u("Tambah")]),_:1},8,["href"])])]),e("div",j,[(d(!0),_(k,null,v(h.blog,s=>(d(),_("div",{key:s.name},[e("div",null,[r(i(l),{href:t.route("blog.edit",s),class:"inline-block"},{default:a(()=>[e("span",A,o(s.category.name),1)]),_:2},1032,["href"])]),r(i(l),{href:t.route("blog.edit",s),class:"mt-4 block"},{default:a(()=>[e("p",F,o(s.name),1),e("p",H,o(s.desc),1)]),_:2},1032,["href"]),e("div",O,[e("div",T,[r(i(l),{href:t.route("user.show",s.user)},{default:a(()=>[e("img",{class:"h-10 w-10 rounded-full",src:s.user.profile_photo_url,alt:""},null,8,q)]),_:2},1032,["href"])]),e("div",z,[e("p",E,[r(i(l),{href:t.route("user.show",s.user)},{default:a(()=>[u(o(s.user.name),1)]),_:2},1032,["href"])]),e("div",I,[e("time",{datetime:n(s.created_at)},o(n(s.created_at)),9,L)])])])]))),128))])]),_:1}))}};export{P as default};
