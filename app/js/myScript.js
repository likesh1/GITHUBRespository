/**
 * Created by manoj on 2/16/16.
 */
function accessToken(){
    var url = window.location.href;
    console.log(window.location.href);
    var code=url.split("=")[1];
    console.log(code);
    var urlRedirect='https://github.com/login/oauth/access_token?client_id=8b267bfce95eb323ea3d&redirect_uri=http://localhost:63342/ESODP/main.tmpl.html&client_secret=7fe49d28bfb3be9e575cf4ba49a850bbf8e7da67&code='+code;
    var response = "";
    $.ajax({ type: "GET",
        url: urlRedirect,
        success : function(text)
        {
            response = text;
        }
    });

    var accessTokenPart = response.match("access_token=(.*)&scope=admin");
    var accessTokenCode= accessTokenPart[1];
    console.log(response);
    console.log(accessTokenPart);
    return accessTokenCode;
}

$(document).ready(function () {
    $('.dropdown-toggle').dropdown();
});