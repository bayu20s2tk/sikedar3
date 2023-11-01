const Ziggy = {"url":"https:\/\/sikedar.tech","port":null,"defaults":{},"routes":{"login":{"uri":"login","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["POST"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.update":{"uri":"reset-password","methods":["POST"]},"register":{"uri":"register","methods":["GET","HEAD"]},"verification.notice":{"uri":"email\/verify","methods":["GET","HEAD"]},"verification.verify":{"uri":"email\/verify\/{id}\/{hash}","methods":["GET","HEAD"]},"verification.send":{"uri":"email\/verification-notification","methods":["POST"]},"user-profile-information.update":{"uri":"user\/profile-information","methods":["PUT"]},"user-password.update":{"uri":"user\/password","methods":["PUT"]},"password.confirmation":{"uri":"user\/confirmed-password-status","methods":["GET","HEAD"]},"password.confirm":{"uri":"user\/confirm-password","methods":["POST"]},"terms.show":{"uri":"terms-of-service","methods":["GET","HEAD"]},"policy.show":{"uri":"privacy-policy","methods":["GET","HEAD"]},"profile.show":{"uri":"user\/profile","methods":["GET","HEAD"]},"other-browser-sessions.destroy":{"uri":"user\/other-browser-sessions","methods":["DELETE"]},"current-user-photo.destroy":{"uri":"user\/profile-photo","methods":["DELETE"]},"current-user.destroy":{"uri":"user","methods":["DELETE"]},"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"landing.welcome":{"uri":"\/","methods":["GET","HEAD"]},"landing.course":{"uri":"kelas","methods":["GET","HEAD"]},"landing.project":{"uri":"proyek","methods":["GET","HEAD"]},"landing.blog":{"uri":"artikel","methods":["GET","HEAD"]},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},"landing.course.show":{"uri":"kelas\/{course}","methods":["GET","HEAD"],"bindings":{"course":"slug"}},"landing.project.show":{"uri":"proyek\/{project}","methods":["GET","HEAD"],"bindings":{"project":"slug"}},"landing.blog.show":{"uri":"artikel\/{blog}","methods":["GET","HEAD"],"bindings":{"blog":"slug"}},"course.index":{"uri":"course","methods":["GET","HEAD"]},"course.create":{"uri":"course\/create","methods":["GET","HEAD"]},"course.store":{"uri":"course","methods":["POST"]},"course.show":{"uri":"course\/{course}","methods":["GET","HEAD"],"bindings":{"course":"slug"}},"course.edit":{"uri":"course\/{course}\/edit","methods":["GET","HEAD"],"bindings":{"course":"slug"}},"course.update":{"uri":"course\/{course}","methods":["PUT","PATCH"],"bindings":{"course":"slug"}},"course.destroy":{"uri":"course\/{course}","methods":["DELETE"],"bindings":{"course":"slug"}},"course.addHero":{"uri":"course\/add-hero","methods":["POST"]},"course.deleteHero":{"uri":"course\/delete-hero\/{id}","methods":["DELETE"]},"courseSubscribe.index":{"uri":"course-subscribe","methods":["GET","HEAD"]},"courseSubscribe.create":{"uri":"course-subscribe\/create","methods":["GET","HEAD"]},"courseSubscribe.store":{"uri":"course-subscribe","methods":["POST"]},"courseSubscribe.show":{"uri":"course-subscribe\/{course_subscribe}","methods":["GET","HEAD"]},"courseSubscribe.edit":{"uri":"course-subscribe\/{course_subscribe}\/edit","methods":["GET","HEAD"]},"courseSubscribe.update":{"uri":"course-subscribe\/{course_subscribe}","methods":["PUT","PATCH"]},"courseSubscribe.destroy":{"uri":"course-subscribe\/{course_subscribe}","methods":["DELETE"]},"courseItem.index":{"uri":"course-item","methods":["GET","HEAD"]},"courseItem.create":{"uri":"course-item\/create","methods":["GET","HEAD"]},"courseItem.store":{"uri":"course-item","methods":["POST"]},"courseItem.show":{"uri":"course-item\/{course_item}","methods":["GET","HEAD"]},"courseItem.edit":{"uri":"course-item\/{course_item}\/edit","methods":["GET","HEAD"]},"courseItem.update":{"uri":"course-item\/{course_item}","methods":["PUT","PATCH"]},"courseItem.destroy":{"uri":"course-item\/{course_item}","methods":["DELETE"]},"courseCategory.index":{"uri":"course-category","methods":["GET","HEAD"]},"courseCategory.create":{"uri":"course-category\/create","methods":["GET","HEAD"]},"courseCategory.store":{"uri":"course-category","methods":["POST"]},"courseCategory.show":{"uri":"course-category\/{course_category}","methods":["GET","HEAD"]},"courseCategory.edit":{"uri":"course-category\/{course_category}\/edit","methods":["GET","HEAD"]},"courseCategory.update":{"uri":"course-category\/{course_category}","methods":["PUT","PATCH"]},"courseCategory.destroy":{"uri":"course-category\/{course_category}","methods":["DELETE"]},"courseComment.index":{"uri":"course-comment","methods":["GET","HEAD"]},"courseComment.create":{"uri":"course-comment\/create","methods":["GET","HEAD"]},"courseComment.store":{"uri":"course-comment","methods":["POST"]},"courseComment.show":{"uri":"course-comment\/{course_comment}","methods":["GET","HEAD"]},"courseComment.edit":{"uri":"course-comment\/{course_comment}\/edit","methods":["GET","HEAD"]},"courseComment.update":{"uri":"course-comment\/{course_comment}","methods":["PUT","PATCH"]},"courseComment.destroy":{"uri":"course-comment\/{course_comment}","methods":["DELETE"]},"courseComment.like":{"uri":"course-comment\/like\/{courseComment}","methods":["POST"],"bindings":{"courseComment":"id"}},"courseComment.dislike":{"uri":"course-comment\/dislike\/{courseComment}","methods":["POST"],"bindings":{"courseComment":"id"}},"project.index":{"uri":"project","methods":["GET","HEAD"]},"project.create":{"uri":"project\/create","methods":["GET","HEAD"]},"project.store":{"uri":"project","methods":["POST"]},"project.show":{"uri":"project\/{project}","methods":["GET","HEAD"],"bindings":{"project":"slug"}},"project.edit":{"uri":"project\/{project}\/edit","methods":["GET","HEAD"],"bindings":{"project":"slug"}},"project.update":{"uri":"project\/{project}","methods":["PUT","PATCH"],"bindings":{"project":"slug"}},"project.destroy":{"uri":"project\/{project}","methods":["DELETE"],"bindings":{"project":"slug"}},"project.indexMe":{"uri":"project-me","methods":["GET","HEAD"]},"project.addMedia":{"uri":"project\/add-media","methods":["POST"]},"project.deleteMedia":{"uri":"project\/delete-media\/{id}","methods":["DELETE"]},"projectChat.index":{"uri":"project-chat","methods":["GET","HEAD"]},"projectChat.create":{"uri":"project-chat\/create","methods":["GET","HEAD"]},"projectChat.store":{"uri":"project-chat","methods":["POST"]},"projectChat.show":{"uri":"project-chat\/{project_chat}","methods":["GET","HEAD"]},"projectChat.edit":{"uri":"project-chat\/{project_chat}\/edit","methods":["GET","HEAD"]},"projectChat.update":{"uri":"project-chat\/{project_chat}","methods":["PUT","PATCH"]},"projectChat.destroy":{"uri":"project-chat\/{project_chat}","methods":["DELETE"]},"projectCategory.index":{"uri":"project-category","methods":["GET","HEAD"]},"projectCategory.create":{"uri":"project-category\/create","methods":["GET","HEAD"]},"projectCategory.store":{"uri":"project-category","methods":["POST"]},"projectCategory.show":{"uri":"project-category\/{project_category}","methods":["GET","HEAD"]},"projectCategory.edit":{"uri":"project-category\/{project_category}\/edit","methods":["GET","HEAD"]},"projectCategory.update":{"uri":"project-category\/{project_category}","methods":["PUT","PATCH"]},"projectCategory.destroy":{"uri":"project-category\/{project_category}","methods":["DELETE"]},"projectBid.index":{"uri":"project-bid","methods":["GET","HEAD"]},"projectBid.create":{"uri":"project-bid\/create","methods":["GET","HEAD"]},"projectBid.store":{"uri":"project-bid","methods":["POST"]},"projectBid.show":{"uri":"project-bid\/{project_bid}","methods":["GET","HEAD"]},"projectBid.edit":{"uri":"project-bid\/{project_bid}\/edit","methods":["GET","HEAD"]},"projectBid.update":{"uri":"project-bid\/{project_bid}","methods":["PUT","PATCH"]},"projectBid.destroy":{"uri":"project-bid\/{project_bid}","methods":["DELETE"]},"projectBilling.index":{"uri":"project-billing","methods":["GET","HEAD"]},"projectBilling.create":{"uri":"project-billing\/create","methods":["GET","HEAD"]},"projectBilling.store":{"uri":"project-billing","methods":["POST"]},"projectBilling.show":{"uri":"project-billing\/{project_billing}","methods":["GET","HEAD"]},"projectBilling.edit":{"uri":"project-billing\/{project_billing}\/edit","methods":["GET","HEAD"]},"projectBilling.update":{"uri":"project-billing\/{project_billing}","methods":["PUT","PATCH"]},"projectBilling.destroy":{"uri":"project-billing\/{project_billing}","methods":["DELETE"]},"blog.index":{"uri":"blog","methods":["GET","HEAD"]},"blog.create":{"uri":"blog\/create","methods":["GET","HEAD"]},"blog.store":{"uri":"blog","methods":["POST"]},"blog.show":{"uri":"blog\/{blog}","methods":["GET","HEAD"],"bindings":{"blog":"slug"}},"blog.edit":{"uri":"blog\/{blog}\/edit","methods":["GET","HEAD"],"bindings":{"blog":"slug"}},"blog.update":{"uri":"blog\/{blog}","methods":["PUT","PATCH"],"bindings":{"blog":"slug"}},"blog.destroy":{"uri":"blog\/{blog}","methods":["DELETE"],"bindings":{"blog":"slug"}},"blogComment.like":{"uri":"blog-comment\/like\/{blogComment}","methods":["POST"],"bindings":{"blogComment":"id"}},"blogComment.dislike":{"uri":"blog-comment\/dislike\/{blogComment}","methods":["POST"],"bindings":{"blogComment":"id"}},"blogCategory.index":{"uri":"blog-category","methods":["GET","HEAD"]},"blogCategory.create":{"uri":"blog-category\/create","methods":["GET","HEAD"]},"blogCategory.store":{"uri":"blog-category","methods":["POST"]},"blogCategory.show":{"uri":"blog-category\/{blog_category}","methods":["GET","HEAD"]},"blogCategory.edit":{"uri":"blog-category\/{blog_category}\/edit","methods":["GET","HEAD"]},"blogCategory.update":{"uri":"blog-category\/{blog_category}","methods":["PUT","PATCH"]},"blogCategory.destroy":{"uri":"blog-category\/{blog_category}","methods":["DELETE"]},"blogComment.index":{"uri":"blog-comment","methods":["GET","HEAD"]},"blogComment.create":{"uri":"blog-comment\/create","methods":["GET","HEAD"]},"blogComment.store":{"uri":"blog-comment","methods":["POST"]},"blogComment.show":{"uri":"blog-comment\/{blog_comment}","methods":["GET","HEAD"]},"blogComment.edit":{"uri":"blog-comment\/{blog_comment}\/edit","methods":["GET","HEAD"]},"blogComment.update":{"uri":"blog-comment\/{blog_comment}","methods":["PUT","PATCH"]},"blogComment.destroy":{"uri":"blog-comment\/{blog_comment}","methods":["DELETE"]},"gallery.index":{"uri":"gallery","methods":["GET","HEAD"]},"gallery.create":{"uri":"gallery\/create","methods":["GET","HEAD"]},"gallery.store":{"uri":"gallery","methods":["POST"]},"gallery.show":{"uri":"gallery\/{gallery}","methods":["GET","HEAD"],"bindings":{"gallery":"id"}},"gallery.edit":{"uri":"gallery\/{gallery}\/edit","methods":["GET","HEAD"],"bindings":{"gallery":"id"}},"gallery.update":{"uri":"gallery\/{gallery}","methods":["PUT","PATCH"],"bindings":{"gallery":"id"}},"gallery.destroy":{"uri":"gallery\/{gallery}","methods":["DELETE"],"bindings":{"gallery":"id"}},"information.index":{"uri":"information","methods":["GET","HEAD"]},"information.create":{"uri":"information\/create","methods":["GET","HEAD"]},"information.store":{"uri":"information","methods":["POST"]},"information.show":{"uri":"information\/{information}","methods":["GET","HEAD"],"bindings":{"information":"id"}},"information.edit":{"uri":"information\/{information}\/edit","methods":["GET","HEAD"],"bindings":{"information":"id"}},"information.update":{"uri":"information\/{information}","methods":["PUT","PATCH"],"bindings":{"information":"id"}},"information.destroy":{"uri":"information\/{information}","methods":["DELETE"],"bindings":{"information":"id"}},"user.index":{"uri":"user","methods":["GET","HEAD"]},"user.create":{"uri":"user\/create","methods":["GET","HEAD"]},"user.store":{"uri":"user","methods":["POST"]},"user.show":{"uri":"user\/{user}","methods":["GET","HEAD"],"bindings":{"user":"id"}},"user.edit":{"uri":"user\/{user}\/edit","methods":["GET","HEAD"]},"user.update":{"uri":"user\/{user}","methods":["PUT","PATCH"],"bindings":{"user":"id"}},"user.destroy":{"uri":"user\/{user}","methods":["DELETE"]},"user.passwordReset":{"uri":"users\/reset-password\/{user}","methods":["POST"],"bindings":{"user":"id"}},"profile.index":{"uri":"profile","methods":["GET","HEAD"]},"setting.index":{"uri":"setting","methods":["GET","HEAD"]},"setting.create":{"uri":"setting\/create","methods":["GET","HEAD"]},"setting.store":{"uri":"setting","methods":["POST"]},"setting.show":{"uri":"setting\/{setting}","methods":["GET","HEAD"]},"setting.edit":{"uri":"setting\/{setting}\/edit","methods":["GET","HEAD"]},"setting.update":{"uri":"setting\/{setting}","methods":["PUT","PATCH"]},"setting.destroy":{"uri":"setting\/{setting}","methods":["DELETE"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
