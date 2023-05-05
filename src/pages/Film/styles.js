import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.main`
  overflow: hidden;
  position: relative;
  height: calc(100vh - 62px);
  top: 62px;
`;
export const ContainerVideo = styled.div`
  height: 100%;
  iframe {
    height: 100%;
    width: 100%;
    /* position: absolute; */
  }
`;

export const Chat = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background-color: ${colors.black};
  z-index: 222;
  height: calc(100vh - 62px);
  width: 300px;
`;
export const ChatTitle = styled.h2`
  font-size: 2.8rem;
  color: ${colors.white};
  text-align: center;
  margin-top: 16px;
`;

export const ChatMesseges = styled.div`
  width: 100%;
  height: 85%;
  margin: 16px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;


&::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
&::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
&::-webkit-scrollbar-thumb {
  background: #333333;
  border: 0px none #ffffff;
  border-radius: 50px;
}
&::-webkit-scrollbar-thumb:hover {
  background: #4f4f4f;
}
&::-webkit-scrollbar-thumb:active {
  background: #111111;
}
&::-webkit-scrollbar-track {
  background: #ffffff;
  border: 0px none #ffffff;
  border-radius: 50px;
}
&::-webkit-scrollbar-track:hover {
  background: #ffffff;
}
&::-webkit-scrollbar-track:active {
  background: #ffffff;
}
&::-webkit-scrollbar-corner {
  background: transparent;
}

`;
export const Message = styled.div`
  margin-left: 12px;
  width: 80%;

  span {
    display: inline-block;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    background-color: red;
    transform: translate(-24px, 70px);
  }

  div {
    border-radius: 20px 20px 20px 5px;
    padding: 12px 8px;
    background-color: ${colors.white};
    width: 90%;
    margin-left: 6px;
  }
  strong {
    font-size: 1.4rem;
  }
  p {
    font-size: 1.2rem;
    color: ${colors.dark_grey};
    margin-top: 8px;
    word-wrap: break-word;
  }
`;
export const ContainerChatInput = styled.form`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: flex-end;
`;
export const ChatInput = styled.input`
  width: 70%;
  height: 40px;
  font-size: 1.2rem;
  border: none;
  padding-left: 6px;
  &::placeholder {
    color: ${colors.light_grey};
  }
`;
export const ChatButton = styled.button`
  border: none;
  height: 42px;
  width: 27%;
  background-color: ${colors.dark_grey};

  svg {
    fill: ${colors.white};
    width: 20px;
    height: 20px;
  }
`;
