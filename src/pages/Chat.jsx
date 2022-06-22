import React, { useRef } from "react";
import styled from "styled-components";
import SockJsClient from "react-stomp";

const Chat = () => {
  const $websocket = useRef(null);

  const handleMsg = (msg) => {
    console.log(msg);
  };

  const handleClickSendTo = () => {
    // console.log("bb");
    $websocket.current.sendMessage("/sendTo");
  };

  const handleClickSendTemplate = () => {
    // console.log("aa");
    $websocket.current.sendMessage("/Template");
  };

  return (
    <WrapChat>
      {/* <SockJsClient
        url="http://localhost:3000/start"
        topics={["/topics/sendTo", "/topics/template", "/topics/api"]}
        onMessage={(msg) => {
          console.log(msg);
        }}
        ref={$websocket}
      /> */}
      <div>
        <YouChat>
          <p>보낸 내용</p>
          <span>날짜</span>
        </YouChat>
        <MyChat>
          <p>보낸 내용</p>
          <span>날짜</span>
        </MyChat>
      </div>
      <TextArea name="text" id="" cols="30" rows="3"></TextArea>
      <button>전송</button>
      {/* <button onClick={handleClickSendTo}>SendTo</button> */}
      {/* <button onClick={handleClickSendTemplate}>SendTemplate</button> */}
    </WrapChat>
  );
};

export default Chat;

const WrapChat = styled.div`
  width: 50%;
  margin: 0 auto;
`;
const YouChat = styled.div`
  border: 1px solid #000;
`;
const MyChat = styled.div`
  border: 1px solid #000;
  display: flex;
  flex-direction: row-reverse;
`;
const TextArea = styled.textarea`
  padding: 10px;
  width: 100%;
  resize: none;
  overflow: hidden;
`;
