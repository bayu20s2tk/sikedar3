import{_ as n}from"./AppLayout.3831ff0a.js";import c from"./DeleteUserForm.b973cd20.js";import u from"./LogoutOtherBrowserSessionsForm.922701ec.js";import{S as a}from"./SectionBorder.56a38710.js";import f from"./TwoFactorAuthenticationForm.d5900f90.js";import l from"./UpdatePasswordForm.481996ab.js";import $ from"./UpdateProfileInformationForm.6e8cfcc2.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.c66173a4.js";import{_ as g}from"./PreviousButton.ed915f40.js";import"./Banner.517fcbee.js";import"./DarkmodeToggle.fb1b0a00.js";import"./helper.e9fc3b37.js";import"./transition.6c7c35ad.js";import"./ActionSection.e8d8a41d.js";import"./SectionTitle.658b2d17.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.b0ef2b0a.js";import"./DialogModal.e71578ca.js";import"./InputError.6f56a6d9.js";import"./SecondaryButton.415c187e.js";import"./TextInput.cc0ffd6a.js";import"./ActionMessage.4871f961.js";import"./PrimaryButton.a2108093.js";import"./InputLabel.9b9d421d.js";import"./FormSection.ac2c6bbc.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};