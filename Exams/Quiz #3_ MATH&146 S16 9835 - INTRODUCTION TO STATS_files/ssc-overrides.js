/* South Seattle College JavaScript - uses the CanUt Canvas library - http://www.waol.org/javascript
 * Edited: 9/19/2015
 * Sara & Bill Newman
*/

(function(n,t,i){var r=document.URL,u,f;if(n.student=!1,n.teacher=!1,n.admin=!1,n.loginPage=!1,n.profilePage=!1,n.wikiPage="",n.courseId="",n.userId="",n.mobile=i,n.SetUsernamePrompt=function(i){n.loginPage&&(n.mobile?t("input[name='pseudonym_session[unique_id]']").attr("placeholder",i):t("label[for='pseudonym_session_unique_id'] span").length==0?setTimeout(n.SetUsernamePrompt,20,i):t("label[for='pseudonym_session_unique_id'] span").text(i))},n.SetPasswordPrompt=function(i){n.loginPage&&(n.mobile?t("input[name='pseudonym_session[password]']").attr("placeholder",i):t("label[for='pseudonym_session_password'] span").length==0?setTimeout(n.SetPasswordPrompt,20,i):t("label[for='pseudonym_session_password'] span").text(i))},n.SetLostPasswordPrompt=function(i){n.loginPage&&(n.mobile?t("input[name='pseudonym_session[unique_id_forgot]']").attr("placeholder",i):t("label[for='pseudonym_session_unique_id_forgot'] span").length==0?setTimeout(n.SetLostPasswordPrompt,20,i):t("label[for='pseudonym_session_unique_id_forgot'] span").text(i))},n.FlagNumericUsernameForMobile=function(){n.loginPage&&n.mobile&&(t('form#login_form input[name|="pseudonym_session[unique_id]"]').get(0).type="number")},n.AddAdminMenu=function(){if(n.admin){var i=t("#domain_root_account_id").html();t("#menu").append("<li id='admincustom_menu_item' class='menu-item'> <a href='/accounts/"+i+"' class='menu-item-no-drop'><\/a><\/li>")}},n.HideGradesMenu=function(){t("#grades_menu_item").hide()},n.HideAssignmentsMenu=function(){t("#assignments_menu_item").hide()},n.HideAccountDelete=function(){n.profilePage&&t("a:contains('Delete My Account')").hide()},n.HideResetCourse=function(){n.teacher&&!n.admin&&r.indexOf("/settings")>0&&t("a.reset_course_content_button").hide()},n.RemoveAllFooterLinks=function(){try{t("a[href='http://www.instructure.com/images/footer-logo.png']").remove();t("a[href='http://www.instructure.com/policies/privacy-policy-instructure']").remove();t("a[href='http://www.instructure.com/policies/terms-of-use']").remove();t("a[href='http://facebook.com/instructure']").remove();t("a[href='http://twitter.com/instructure']").remove()}catch(n){}},n.HideConcludeCourse=function(){n.teacher&&!n.admin&&r.indexOf("/settings")>0&&t("a:contains('Conclude this Course')").hide()},n.LoadCanvabadgesScript=function(){n.loginPage||t.ajax({url:"https://d1la9j37oq1fed.cloudfront.net/canvas_shared/canvabadges_052014.min.js",dataType:"script",cache:!0})},n.LoadJavascriptFile=function(n){try{t.ajax({url:n,dataType:"script",cache:!0})}catch(i){}},r.indexOf("/login")>0&&(n.loginPage=!0,n.mobile=t("label[for='pseudonym_session_unique_id']").length?!1:!0),(r.indexOf("/about")>0||r.indexOf("/profile")>0)&&(n.profilePage=!0),r.indexOf("/wiki")>0&&(n.wikiPage=!0),u=r.match(/\/(courses)\/(\d+)$/)||[],typeof u!="undefined"&&u.length>0&&(n.courseId=u[2]),ENV.hasOwnProperty("current_user_roles"))try{for(n.userId=ENV.current_user_id,f=ENV.current_user_roles.length-1;f>-1;f--){switch(ENV.current_user_roles[f]){case"admin":n.admin=!0;break;case"teacher":n.teacher=!0}if(n.teacher)break}n.student=!0}catch(e){}})(window.CanUt=window.CanUt||{},jQuery);
//# sourceMappingURL=canut_base_canvas_050714.min.js.map


    
$(function () {
	// **************************************
	//
	//  College custom javascript - 
	//     Place below this comment block
	//
	// **************************************
       
    // Add the simple Admin menu link
    CanUt.AddAdminMenu();

    // Customize the logon form prompts:
    CanUt.SetUsernamePrompt('Student=SID, Emp.=Email');
    //CanUt.FlagNumericUsernameForMobile();
    CanUt.SetPasswordPrompt('First 6 letters of last name');
    CanUt.SetLostPasswordPrompt('Enter Your Email');
    

    // Hide items we don't want:
    CanUt.HideAccountDelete();
    CanUt.HideResetCourse();
    CanUt.HideConcludeCourse();
    //CanUt.RemoveAllFooterLinks();
    //CanUt.HideGradesMenu();
    //CanUt.HideAssignmentsMenu();
    
    
    
    // **************************************
	  //  South Seattle College Canvas javascript - 
	  //  Updates desktop web page login page/footer
	  // **************************************
    
    $('div.ic-Form-control--login .ic-Label').first().html('Login: Students use SID, Employees use college email'); //replace "Email" with "Login"
    $('#pseudonym_session_unique_id').attr("placeholder","Type your login information here");//text inside login boxID
    $('#pseudonym_session_password').attr("placeholder","1st 6 letters of last name - until you change it");//text inside password box
    $('.Button--login').html('Enter'); //replace "Log in" with "Enter"
    $('.ic-Login__forgot-text').html('<strong>Enter the email you provided when you registered with the college into the input field below and we will email you a link to change your Canvas password.</strong><p style=font-size:90%;>To update the email you registered with the college, visit <a href=http://tinyurl.com/updatecollegeprofile target=_blank style=text-decoration:underline;>http://tinyurl.com/updatecollegeprofile</a> and select South Seattle College (link) Update Your Address, <b>Email</b> or Phone.</p>'); //replace "Forgot Email message" with "Clearer instructions"

	
	 $('#footer').html('<table style="color:#000; width:100%; max-width:400px; margin:auto; font-size:95%;"><tr style="vertical-align:top; text-align:center; height:30px;"><td colspan="2">South Seattle College (SSC) Canvas Resources</td></tr><tr style="vertical-align:top;"><td style="width:50%;"><ol><li style="padding-bottom:4px;"><a href="https://www.youtube.com/watch?v=-j6qNnHnVno" target="_blank">Introduction (video)</a></li><li style="padding-bottom:4px;"><span><a href="https://southseattle.instructure.com/courses/800181" target="_blank">Student Resources</a></span></li><li style="padding-bottom:4px;"><span><a href="https://sites.google.com/a/seattlecolleges.edu/canvas/student-login" target="_blank">Login and Password Help</a></span></li><li style="padding-bottom:4px;"><a href="http://guides.instructure.com/" target="blank">Canvas Guides</a></li></ol></td><td style="width:50%;"><ol start="5"><li style="padding-bottom:4px;"><a href="https://southseattle.instructure.com/courses/800181/wiki/get-help-the-many-ways" target="_blank">Support &amp; Help</a></li><li style="padding-bottom:4px;"><a href="http://sites.southseattle.edu/online/" target="_blank">SSC eLearning</a></li><li style="padding-bottom:4px;"><a href="http://tinyurl.com/sccd-canvas/" target="_blank">SCD Canvas Resources</a></li><li style="padding-bottom:4px;"><a href="http://seattlecolleges.edu/district/currentstudents/profile.aspx" target="_blank" title="Your campus email address MUST be current for you to receive a Canvas course invitation and/or request a change of Canvas password">Update college contact info.</a></li></ol></td></tr></table>');		
// ***********************************************************  
//  Place all custom college script above this comment block
// ***********************************************************
});