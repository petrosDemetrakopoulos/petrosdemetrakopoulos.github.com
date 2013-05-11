window.onLoad =  function main () {
    var lat=document.getElementById("lat");
    var longitude = document.getElementById("long");
    var alt=document.getElementById("alt");
if (navigator.geolocation) {
  var timeoutVal = 10 * 1000 * 1000;
  navigator.geolocation.getCurrentPosition(
    displayPosition, 
    displayError,
    { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
  );
} else {
  lat.innerHTML="Detrmining...";
  longitude.innerHTML = "Detrmining...";
  alt.innerHTML = "Detrmining...";
}
function displayPosition(position) {
  lat.innerHTML = position.coords.latitude;
   longitude.innerHTML = position.coords.longitude;
   alt.innerHTML = position.coords.altitude + "  m";
}
function displayError(error) {
  var errors = { 
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
    /*
WebActivities:

configure
costcontrol/balance
costcontrol/data_usage
costcontrol/telephony
dial
new (type: "websms/sms", "webcontacts/contact") (add-contact, compose-mail?)
open
pick (type: "image/png" etc)
record (capture?)
save-bookmark
share
test
view (type: "url" etc. "text/html"?)
*/

    

    var sendSMS = document.querySelector("#send-sms");
    if (sendSMS) {
        sendSMS.onclick = function () {
            var sms = new MozActivity({
                name: "new", // Possible compose-sms in future versions
                data: {
                    type: "websms/sms",
                    number: "+46777888999"
                }
            });
        }
    }


    var share = document.querySelector("#share");
    if (share) {
        share.onclick = function () {
            var sharing = new MozActivity({
                name: "share",
                data: {
                    //type: "url", // Possibly text/html in future versions,
                    number: 1,
                    url: "http://robertnyman.com"
                }
            });
        }
    }

    var viewURL = document.querySelector("#view-url");
    if (viewURL) {
        viewURL.onclick = function () {
            var openURL = new MozActivity({
                name: "view",
                data: {
                    type: "text/html", // Possibly text/html in future versions
                    text: "test"
                }
            });
        }
    }

    var composeEmail = document.querySelector("#mail");
    if (composeEmail) {
        composeEmail.onclick = function () {
            var createEmail = new MozActivity({
                name: "new", // Possibly compose-mail in future versions
                data: {
                    url: "mailto:?body=latitude,longitude"
                }
            });
        }
    }
}