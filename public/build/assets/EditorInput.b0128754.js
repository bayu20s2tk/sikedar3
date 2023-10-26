import{o as b,e as y,r as S,i as Y,n as R,x as K,O as U,k as O,T as N,d as I,a as r,b as n,w as l,u as d,g as c,F as V,h as j,l as H,M as G}from"./app.1bf55bfc.js";import{N as z,n as X,m as q,u as D,S as W,I as J,E as Q}from"./tippy.fec08c97.js";import{_ as Z}from"./_plugin-vue_export-helper.cdc0426e.js";import{a as ee}from"./DialogModal.a48eb93f.js";import{_ as oe}from"./PrimaryButton.5363aa0a.js";import{_ as te}from"./DangerButton.21ffa77c.js";import{_ as se}from"./InputError.5542e51b.js";const ne={},le={class:"relative z-0 inline-flex shadow-sm rounded-3xl"};function ie(s,u){return b(),y("span",le,[S(s.$slots,"default")])}const T=Z(ne,[["render",ie]]),p={__name:"GroupButtonLink",setup(s){const u=Y(()=>"-ml-px relative disabled:opacity-50 inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500");return(v,a)=>(b(),y("button",{type:"button",class:R(u.value)},[S(v.$slots,"default")],2))}},ae=/^(https?:\/\/)?(www\.|music\.)?(youtube\.com|youtu\.be)(?!.*\/channel\/)(?!\/@)(.+)?$/,re=/^(https?:\/\/)?(www\.|music\.)?(youtube\.com|youtu\.be)(?!.*\/channel\/)(?!\/@)(.+)?$/g,ue=s=>s.match(ae),M=s=>s?"https://www.youtube-nocookie.com/embed/":"https://www.youtube.com/embed/",de=s=>{const{url:u,allowFullscreen:v,autoplay:a,ccLanguage:g,ccLoadPolicy:m,controls:f,disableKBcontrols:$,enableIFrameApi:x,endTime:w,interfaceLanguage:k,ivLoadPolicy:_,loop:C,modestBranding:B,nocookie:h,origin:L,playlist:t,progressBarColor:e,startAt:o}=s;if(u.includes("/embed/"))return u;if(u.includes("youtu.be")){const E=u.split("/").pop();return E?`${M(h)}${E}`:null}const P=/v=([-\w]+)/gm.exec(u);if(!P||!P[1])return null;let A=`${M(h)}${P[1]}`;const i=[];return v===!1&&i.push("fs=0"),a&&i.push("autoplay=1"),g&&i.push(`cc_lang_pref=${g}`),m&&i.push("cc_load_policy=1"),f||i.push("controls=0"),$&&i.push("disablekb=1"),x&&i.push("enablejsapi=1"),w&&i.push(`end=${w}`),k&&i.push(`hl=${k}`),_&&i.push(`iv_load_policy=${_}`),C&&i.push("loop=1"),B&&i.push("modestbranding=1"),L&&i.push(`origin=${L}`),t&&i.push(`playlist=${t}`),o&&i.push(`start=${o}`),e&&i.push(`color=${e}`),i.length&&(A+=`?${i.join("&")}`),A},ce=z.create({name:"youtube",addOptions(){return{addPasteHandler:!0,allowFullscreen:!0,autoplay:!1,ccLanguage:void 0,ccLoadPolicy:void 0,controls:!0,disableKBcontrols:!1,enableIFrameApi:!1,endTime:0,height:480,interfaceLanguage:void 0,ivLoadPolicy:0,loop:!1,modestBranding:!1,HTMLAttributes:{},inline:!1,nocookie:!1,origin:"",playlist:"",progressBarColor:void 0,width:640}},inline(){return this.options.inline},group(){return this.options.inline?"inline":"block"},draggable:!0,addAttributes(){return{src:{default:null},start:{default:0},width:{default:this.options.width},height:{default:this.options.height}}},parseHTML(){return[{tag:"div[data-youtube-video] iframe"}]},addCommands(){return{setYoutubeVideo:s=>({commands:u})=>ue(s.src)?u.insertContent({type:this.name,attrs:s}):!1}},addPasteRules(){return this.options.addPasteHandler?[X({find:re,type:this.type,getAttributes:s=>({src:s.input})})]:[]},renderHTML({HTMLAttributes:s}){const u=de({url:s.src,allowFullscreen:this.options.allowFullscreen,autoplay:this.options.autoplay,ccLanguage:this.options.ccLanguage,ccLoadPolicy:this.options.ccLoadPolicy,controls:this.options.controls,disableKBcontrols:this.options.disableKBcontrols,enableIFrameApi:this.options.enableIFrameApi,endTime:this.options.endTime,interfaceLanguage:this.options.interfaceLanguage,ivLoadPolicy:this.options.ivLoadPolicy,loop:this.options.loop,modestBranding:this.options.modestBranding,nocookie:this.options.nocookie,origin:this.options.origin,playlist:this.options.playlist,progressBarColor:this.options.progressBarColor,startAt:s.start||0});return s.src=u,["div",{"data-youtube-video":""},["iframe",q(this.options.HTMLAttributes,{width:this.options.width,height:this.options.height,allowfullscreen:this.options.allowFullscreen,autoplay:this.options.autoplay,ccLanguage:this.options.ccLanguage,ccLoadPolicy:this.options.ccLoadPolicy,disableKBcontrols:this.options.disableKBcontrols,enableIFrameApi:this.options.enableIFrameApi,endTime:this.options.endTime,interfaceLanguage:this.options.interfaceLanguage,ivLoadPolicy:this.options.ivLoadPolicy,loop:this.options.loop,modestBranding:this.options.modestBranding,origin:this.options.origin,playlist:this.options.playlist,progressBarColor:this.options.progressBarColor},s)]]}}),pe={class:"space-y-3"},fe=r("i",null,"Italic",-1),ge=r("b",null,"Bold",-1),me={role:"list",class:"grid sm:grid-cols-3 lg:grid-cols-4 gap-3 list-none mt-5"},he={class:"relative"},be=["src"],ye={class:"absolute bottom-0 left-0 right-0 flex justify-between"},ve=r("i",{class:"fa-duotone fa-pen"},null,-1),_e=r("span",{class:"ml-3"},"Pilih",-1),xe=r("i",{class:"fa-duotone fa-trash"},null,-1),we=r("span",{class:"ml-3"},"Hapus",-1),ke={class:""},Le={class:"block"},$e=["onClick"],Ce=["onClick"],Be=r("i",{class:"fa-duotone fa-image text-gray-400 text-5xl"},null,-1),Pe=r("span",{class:"mt-2 block text-sm font-medium text-gray-900"},"Tambah Foto",-1),Ie=[Be,Pe],Me={__name:"EditorInput",props:{modelValue:{type:String,default:""},gallery:Object},emits:["update:modelValue"],setup(s,{emit:u}){const v=s;K(()=>{U.reload({only:["modelValue"]})});const a=D({editorProps:{attributes:{class:"prose prose-sm sm:prose lg:prose-lg xl:prose-2xl p-3 mt-3 focus:outline-none bg-white border border-gray-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl shadow-sm"}},extensions:[W.configure({paragraph:{HTMLAttributes:{class:"text-base text-gray-600"}},Heading:{HTMLAttributes:{class:"text-gray-900"}}}),J.configure({inline:!0,allowBase64:!0,HTMLAttributes:{class:" rounded-3xl "}}),ce.configure({inline:!1,ccLanguage:"id",interfaceLanguage:"id",enableIFrameApi:"true",modestBranding:"true",HTMLAttributes:{class:"w-full rounded-3xl "}})],onUpdate:({editor:t})=>{let e=t.getHTML();u("update:modelValue",e)},content:v.modelValue});O(()=>v.modelValue,(t,e)=>{t!==e&&a.value.commands.setContent(t,!1,{preserveWhitespace:"full"})});const g=N({photo:null}),m=I(null),f=I(null),$=()=>{f.value&&(g.photo=f.value.files[0]),g.post(route("gallery.store"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{m.value=null,_(),g.reset()}})},x=()=>{f.value.click()},w=()=>{const t=f.value.files[0];if(!t)return;const e=new FileReader;e.onload=o=>{m.value=o.target.result},e.readAsDataURL(t),$()},k=t=>{U.delete(route("gallery.destroy",t),{preserveScroll:!0,onSuccess:()=>{m.value=null,_()}})},_=()=>{var t;(t=f.value)!=null&&t.value&&(f.value.value=null)};function C(t){a.value.chain().focus().setImage({src:t}).run(),h.value=!1}function B(){const t=prompt("Enter YouTube URL");a.value.commands.setYoutubeVideo({src:t})}const h=I(!1),L=()=>{h.value=!1};return(t,e)=>(b(),y(V,null,[r("div",pe,[n(T,null,{default:l(()=>[n(p,{onClick:e[0]||(e[0]=o=>d(a).chain().focus().toggleHeading({level:1}).run()),class:"rounded-l-3xl"},{default:l(()=>[c("H1")]),_:1}),n(p,{onClick:e[1]||(e[1]=o=>d(a).chain().focus().toggleHeading({level:2}).run())},{default:l(()=>[c("H2")]),_:1}),n(p,{onClick:e[2]||(e[2]=o=>d(a).chain().focus().toggleHeading({level:3}).run())},{default:l(()=>[c("H3")]),_:1}),n(p,{onClick:e[3]||(e[3]=o=>d(a).chain().focus().toggleHeading({level:4}).run())},{default:l(()=>[c("H4")]),_:1}),n(p,{onClick:e[4]||(e[4]=o=>d(a).chain().focus().toggleHeading({level:5}).run())},{default:l(()=>[c("H5")]),_:1}),n(p,{onClick:e[5]||(e[5]=o=>d(a).chain().focus().setParagraph().run()),class:"rounded-r-3xl mr-2"},{default:l(()=>[c("P")]),_:1})]),_:1}),n(T,null,{default:l(()=>[n(p,{onClick:e[6]||(e[6]=o=>h.value=!0),class:"rounded-l-3xl rounded"},{default:l(()=>[c("Image")]),_:1}),n(p,{onClick:B},{default:l(()=>[c("Youtube")]),_:1}),n(p,{onClick:e[7]||(e[7]=o=>d(a).chain().focus().toggleCodeBlock().run()),class:"rounded-r-3xl mr-2"},{default:l(()=>[c("Code")]),_:1})]),_:1}),n(T,null,{default:l(()=>[n(p,{onClick:e[8]||(e[8]=o=>d(a).chain().focus().toggleItalic().run()),class:"rounded-l-3xl"},{default:l(()=>[fe]),_:1}),n(p,{onClick:e[9]||(e[9]=o=>d(a).chain().focus().toggleBold().run())},{default:l(()=>[ge]),_:1}),n(p,{onClick:e[10]||(e[10]=o=>d(a).chain().focus().toggleBulletList().run()),class:"rounded-r-3xl mr-2"},{default:l(()=>[c("List")]),_:1})]),_:1})]),n(d(Q),{ref:"input",onInput:e[11]||(e[11]=o=>t.$emit("update:modelValue",o.target.value)),editor:d(a),required:""},null,8,["editor"]),n(ee,{"max-width":"7xl",show:h.value,onClose:L},{title:l(()=>[c(" Tambah Image ")]),content:l(()=>[c(" Klik foto "),r("ul",me,[(b(!0),y(V,null,j(t.$page.props.gallery,o=>(b(),y("li",{key:o.name,class:""},[r("div",he,[r("img",{class:"shadow-lg rounded-3xl w-full aspect-video object-cover",src:o.media[0].original_url,alt:""},null,8,be),r("div",ye,[n(oe,{class:"rounded-none py-4 bg-opacity-50 inline-flex rounded-bl-3xl rounded-tr-3xl",onClick:F=>C(o.media[0].original_url)},{default:l(()=>[ve,_e]),_:2},1032,["onClick"]),n(te,{onClick:H(F=>k(o.id),["prevent"]),class:"rounded-none py-4 bg-opacity-50 inline-flex rounded-br-3xl rounded-tl-3xl"},{default:l(()=>[xe,we]),_:2},1032,["onClick"])])])]))),128)),r("li",ke,[r("input",{ref_key:"photoInput",ref:f,type:"file",class:"hidden",onChange:w},null,544),r("div",Le,[m.value?(b(),y("div",{key:0,class:"",onClick:H(x,["prevent"])},[r("span",{class:"block rounded-3xl w-full aspect-video px-2 bg-cover bg-no-repeat bg-center border border-gray-300",style:G("background-image: url('"+m.value+"');")},null,4)],8,$e)):(b(),y("button",{key:1,onClick:H(x,["prevent"]),type:"button",class:"relative block w-full aspect-video p-12 text-center border-2 border-gray-400 border-dashed focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl shadow-sm"},Ie,8,Ce))]),n(se,{message:d(g).errors.photo,class:"mt-2"},null,8,["message"])])])]),footer:l(()=>[c(" Lorem ipsum ")]),_:1},8,["show"])],64))}};export{Me as _};
