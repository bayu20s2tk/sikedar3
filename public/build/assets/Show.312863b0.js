import{_ as n}from"./AppLayout.cf533c91.js";import c from"./DeleteUserForm.bdc1ec9d.js";import u from"./LogoutOtherBrowserSessionsForm.e43140e9.js";import{S as a}from"./SectionBorder.16f062af.js";import f from"./TwoFactorAuthenticationForm.37dff95c.js";import l from"./UpdatePasswordForm.39d8e3a5.js";import $ from"./UpdateProfileInformationForm.bff61986.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.b44434b9.js";import{_ as g}from"./PreviousButton.c093ffdf.js";import"./Banner.28fc10df.js";import"./DarkmodeToggle.691d3b32.js";import"./helper.e9fc3b37.js";import"./transition.18991863.js";import"./ActionSection.5ff11b8e.js";import"./SectionTitle.d9297e6b.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.8de2f7b2.js";import"./DialogModal.2955a47c.js";import"./InputError.65d2c089.js";import"./SecondaryButton.d36b33db.js";import"./TextInput.01a29fd5.js";import"./ActionMessage.ab30a8b8.js";import"./PrimaryButton.a320146e.js";import"./InputLabel.6bc61b6c.js";import"./FormSection.bd3c7940.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};