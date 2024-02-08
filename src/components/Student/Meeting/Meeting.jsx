import "./Meeting.css";
import ZoomMtgEmbedded from "@zoom/meetingsdk/embedded";

function Meeting() {
  const client = ZoomMtgEmbedded.createClient();

  var authEndpoint = "http://localhost:4000/";
  var sdkKey = "vf_4kQ9uRHSRE0qljfpysA";
  var meetingNumber = "77397044793";
  var passWord = "8nwQTjIXIdqRHNEaSA94nRHKz6y8mR.1";
  var role = 0;
  var userName = "Hajizada Farid";
  var userEmail = "";
  var registrantToken = "";
  var zakToken = "";

  function getSignature(e) {
    e.preventDefault();

    fetch(authEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        meetingNumber: meetingNumber,
        role: role,
      }),
      credentials: true,
    })
      .then((res) => res.json())
      .then((response) => {
        startMeeting(response.signature);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function startMeeting(signature) {
    let meetingSDKElement = document.getElementById("meetingSDKElement");

    client
      .init({
        zoomAppRoot: meetingSDKElement,
        language: "en-US",
        patchJsMedia: true,
      })
      .then(() => {
        client
          .join({
            signature: signature,
            sdkKey: sdkKey,
            meetingNumber: meetingNumber,
            password: passWord,
            userName: userName,
            userEmail: userEmail,
            tk: registrantToken,
            zak: zakToken,
          })
          .then(() => {
            console.log("joined successfully");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <div className="zoom">
        <div id="meetingSDKElement">
          {/* Zoom Meeting SDK Component View Rendered Here */}
        </div>
        <button className="zoom-btn" onClick={getSignature}>
          Join Meeting
        </button>
      </div>
    </>
  );
}

export default Meeting;
