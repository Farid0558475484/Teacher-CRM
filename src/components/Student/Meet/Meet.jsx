import { useState } from "react";
import ZoomMtgEmbedded from "@zoom/meetingsdk/embedded";
import "./Meeting.css";

const Meet = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const client = ZoomMtgEmbedded.createClient();

  var authEndpoint = "http://localhost:4000/";
  var sdkKey = "vf_4kQ9uRHSRE0qljfpysA";
  var meetingNumber = "74322338024";
  var passWord = "A5Mh3j9xyXrbYifCaxg6PPebwnzjBY.1";
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
    })
      .then((res) => res.json())
      .then((response) => {
        startMeeting(response.signature);
        setIsButtonClicked(true);
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
    <div className="App">
      <main>
        <h1>Zoom Meeting </h1>

        {/* For Component View */}
        <div id="meetingSDKElement">
          {/* Zoom Meeting SDK Component View Rendered Here */}
        </div>

        {!isButtonClicked && (
          <button onClick={getSignature}>Join Meeting</button>
        )}
      </main>
    </div>
  );
};

export default Meet;
