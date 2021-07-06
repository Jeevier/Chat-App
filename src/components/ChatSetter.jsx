import React from "react";
import { NewMessageForm } from "react-chat-engine";
import { PlayCircleOutlined, LogoutOutlined } from "@ant-design/icons";
const ChatSetter = () => {
  const logoutHandler = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    document.location.reload();
  };
  return (
    <>
      <NewMessageForm />
      <form
        className="form__video-button"
        action="https://viochat.tech/"
        method="get"
        target="_blank"
      >
        <LogoutOutlined
          style={{ color: "red", fontSize: "1.3rem" }}
          onClick={logoutHandler}
        />
        <button className="button-video">
          <PlayCircleOutlined /> Video Call
        </button>
      </form>
    </>
  );
};

export default ChatSetter;
