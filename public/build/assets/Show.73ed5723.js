import{_ as n}from"./AppLayout.6e496fb5.js";import c from"./DeleteUserForm.c7c9b1fd.js";import u from"./LogoutOtherBrowserSessionsForm.50f4529c.js";import{S as a}from"./SectionBorder.d36670dc.js";import f from"./TwoFactorAuthenticationForm.da86e88f.js";import l from"./UpdatePasswordForm.b7870388.js";import $ from"./UpdateProfileInformationForm.a08998fc.js";import{c as _,w as p,o,b as e,e as t,F as s,f as i}from"./app.285d111a.js";import{_ as g}from"./PreviousButton.1af31eaf.js";import"./DarkmodeToggle.3cf233e1.js";import"./ActionSection.9f89ad70.js";import"./SectionTitle.d9367e58.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.855ac74c.js";import"./DialogModal.408657fb.js";import"./InputError.2c148750.js";import"./SecondaryButton.2d5a2b12.js";import"./TextInput.7fa7aec3.js";import"./ActionMessage.233322b4.js";import"./PrimaryButton.07a22510.js";import"./InputLabel.185cd220.js";import"./FormSection.1df4f7c9.js";const z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(r,d)=>(o(),_(n,{title:r.$page.props.user.name,name:r.$page.props.user.name,desc:r.$page.props.user.email,avatar:r.$page.props.user.profile_photo_url},{previous:p(()=>[e(g)]),default:p(()=>[r.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[e($,{user:r.$page.props.user},null,8,["user"]),e(a)],64)):i("",!0),r.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[e(l),e(a)],64)):i("",!0),r.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[e(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),e(a)],64)):i("",!0),e(u,{sessions:m.sessions},null,8,["sessions"]),r.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[e(a),e(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{z as default};