import styled from 'styled-components';
export const Url = styled.input`
  width: 100%;
  display: none;
`;

export const Container = styled.main`
  height: 100vh;
  overflow: hidden;
`;
export const ContainerVideo = styled.div`
  display: flex;
  height: 100%;
  /* border: 1px solid red; */
`;
export const Video = styled.video`
  width: 85vw;
  height: 100%;
`;
export const Chat = styled.div`
  width: 15vw;
  height: 100%;
  position: relative;
`;
export const ChatTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  padding: 10px 0 16px 0;
`;

export const ChatMesseges = styled.div`
  /* background-color: red; */
  overflow-y: scroll;
  height: 90%;
`;
export const Message = styled.div`
  font-size: 1.4rem;

  /* background-color: red; */
  margin: 0 0 8px 8px;

  max-width: 100%;
  word-break: break-all;

  & > p {
    padding-top: 6px;
  }
`;
export const ContainerChatInput = styled.form`
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  height: 40px;
`;
export const ChatInput = styled.input`
  width: 80%;
  height: 100%;
`;
export const ChatButton = styled.button`
  width: 20%;
  height: 100%;
`;
