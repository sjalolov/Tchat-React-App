import React from "react";
import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./Components/ChatFeed";

export function App() {
  return (
      <ChatEngine
        height="100vh"
        userName="jalolovshohrukh"
        userSecret="123456789"
        projectID="edde62fe-c1c6-416d-bd07-7ed7d964b352"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
  );
}

export default App;
