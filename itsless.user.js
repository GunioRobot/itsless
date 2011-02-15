// ==UserScript==
// @name           It's Less
// @namespace      com.fredrikohlin.itsless
// @include        http*://*.itslearning.com/main.aspx*
// @include        http*://*.itslearning.com/mainframe.aspx*
// @include        http*://*.itslearning.com/main/mainmenu.aspx*
// @include        http*://*.itslearning.com/ContentArea/ContentArea.aspx*
// ==/UserScript==

(function(){
    // main.aspx = main container of all framesets:
    if (String(window.location).indexOf("main.aspx") != -1 ){
        // Minimize the stupid top frame:
    	document.getElementsByTagName("frameset")[0].rows = "26,*,0";
    }
    
    // mainframe.aspx = top navigation frame
    if (String(window.location).indexOf("mainframe.aspx") != -1 ){
        GM_addStyle("\
            #banner div{ background-image: none; } \
            div.logo, ul.links, div.area, #menu_portfolio, #menu_library, \
                #menu_mylibrary, #menu_search, #menu_admin { display:none !important; } \
        ");
    }
    
    // mainmenu.aspx = main content of homepage (?!)
    if (String(window.location).indexOf("/main/mainmenu.aspx") != -1 ){
        GM_addStyle("\
            h1.skin, #toplevel, #mynews, #TaskListSection, #ActivitiesSection \
             { display:none !important; } \
            .splitscreenleft, .splitscreenright { float: none; width: auto; padding:0; } \
            .minilisting td:first-child{ width: 56%; max-width: 400px; } \
            #InternalMessagesSection td:nth-child(2) { width:20%; } \
        ");
    }
    // When on the homepage, hide left navigation
    if (String(window.location).indexOf("/ContentArea/ContentArea.aspx?Content=main") != -1 ){
       var mainFrameset = document.getElementsByTagName("frameset")[0].cols = "0,*";
    }
}())
