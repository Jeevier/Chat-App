import React from "react";
import { NewMessageForm } from "react-chat-engine";
import {PlayCircleOutlined} from '@ant-design/icons';
const ChatSetter = () => {
  return (
    <>
      <NewMessageForm></NewMessageForm>
      <form  className="form__video-button" action="https://viochat.tech/" method="get" target="_blank">
        <button className="button-video"><PlayCircleOutlined /> Video Call</button>
      </form>
    </>
  );
};

export default ChatSetter;
