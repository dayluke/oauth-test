var client_id = "b09de778857c4347b605eb0711117530";
var client_secret = "d6715f2338944a2ca3e931a502535063";
var redirect_url = "https://dayluke.github.io/oauth-test/";
var auth_url = "https://accounts.spotify.com/authorize";
var scopes = "user-read-private";

window.onload = start();

function start()
{
    if(window.href.indexOf('#access_token') > 0)
    {
        alert("Finished");
    }
}

function func()
{
    var url = auth_url + "?client_id=" + client_id + "&redirect_uri=" + encodeURI(redirect_url) + "&scope=" + scopes + "&response_type=token&state=123";
    // https://accounts.spotify.com/authorize?client_id=5fe01282e94241328a84e7c5cc169164&redirect_uri=http:%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123
    /*var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
    console.log(xmlHttp.responseText);*/
    window.location.href = url;
}

// https://www.google.com/#access_token=BQC7iJaL1ztP_Dua2hnuTak02VrCOssY90URG6c8i3ZVJ-KQ1YewwiTIGf3kGthq11dd0rIb2MqKepnYabMwoAappBXMiimYeYNwWipeqt8fJfO0VL2rTya6X0RPzAqH0TrityxCMxxXIBccF-NR7kwb8xUM&token_type=Bearer&expires_in=3600&state=123