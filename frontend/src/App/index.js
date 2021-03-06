// import "./App.css";
// import Box from "@material-ui/core/Box";
import CreateRequest from "../Components/CreateRequests";
import BrowseRequest from "../Components/BrowseRequests";
import Request from "../Components/Request";
import LoginButton from "../Components/LoginButton";
import LogoutButton from "../Components/LogoutButton";
import Profile from "../Components/Profile";
import { useEffect, useState } from "react";
import "./index.css";

import { useAuth0 } from "@auth0/auth0-react";

import { baseBackendURL } from "../config.js";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [requestList, setRequestList] = useState([]);
  const [submittedRequest, setSubmittedRequest] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null); //change to implement authentication!

  useEffect(() => {
    if (isAuthenticated) {
      setCurrentUserId(user.sub);
    }
  }, [user, isAuthenticated]);

  useEffect(() => {
    async function getData() {
      const result = await fetch(`${baseBackendURL}/requests`);
      const data = await result.json();
      setRequestList(data.Payload);
    }
    getData();

    async function authenticateUser() {
      const result = await fetch(`${baseBackendURL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user.sub,
          first_name: user.given_name || user.name,
          last_name: user.family_name || null,
          email: user.email,
        }),
      });
      const data = await result.json();
      console.log(data);
    }
    if (isAuthenticated && user.sub) {
      authenticateUser();
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    if (submittedRequest) {
      async function postRequest() {
        var today = new Date();
        var date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();

        const result = await fetch(`${baseBackendURL}/requests`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: currentUserId,
            title: submittedRequest.problemTitle,
            category: submittedRequest.category,
            room: submittedRequest.room,
            body: submittedRequest.help + ": " + submittedRequest.description,
            request_date: date,
          }),
        });
        const json = await result.json();

        setRequestList((requestList) => [json.Payload[0], ...requestList]);
      }
      postRequest();
    }
  }, [submittedRequest, currentUserId]);

  function handleRequestSubmit(request) {
    setSubmittedRequest(request);
  }

  return (
    <div className="myApp">
      <h1 className="App-header">In The Loop</h1>
      {!isAuthenticated ? (
        <LoginButton />
      ) : (
        <>
          <LogoutButton />
          <Profile user={user} />
          <div className="topContainer">
            <div className="row">
              <div className="col" id="createRequest">
                <CreateRequest setSubmittedRequest={handleRequestSubmit} />
              </div>

              <div className="col" id="searchRequest">
                <BrowseRequest />
              </div>
            </div>
          </div>

          <div className="row">
            {requestList.map((request) => {
              return (
                <div
                  key={request["request_id"]}
                  className="col"
                  id="displayedRequest"
                >
                  <Request
                    id={request["request_id"]}
                    title={request.title}
                    body={request.body}
                    category={request.category}
                    date={request["request_date"]}
                    room={request.room}
                    userId={request["user_id"]}
                    currentUserId={currentUserId}
                    userName={request["first_name"]}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
      {isLoading && <div>Loading ...</div>}
    </div>
  );
}

export default App;
