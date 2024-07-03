import { IoSend } from 'react-icons/io5';
import { useEffect, useRef, useState } from 'react';

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import { Socket } from 'socket.io-client';

interface IPropsChat {
  socket: Socket;
  username: string;
}

interface IMessage {
  author: string;
  slug: string;
}

export default function Chat(props: IPropsChat) {
  const [messageList, setMessageList] = useState<IMessage[]>([]);
  const inputMessegeRef = useRef<HTMLInputElement>(null);
  const [visibleChat, setVisibleChat] = useState<boolean>(true);
  const [slug, setSlug] = useState('');
  const { socket, username: author } = props;

  useEffect(() => {
    // console.log("EU")
    socket.on('receivedMessage', (message: IMessage) => {
      console.log();
      setMessageList([...messageList, message]);
      // messageList.current.push(message);
      setVisibleChat(true);
      setSlug('');
    });

    return () => {
      socket.off('receivedMessage');
    };
  }, [socket, messageList]);

  const handleSendMessege = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputMessegeRef) inputMessegeRef.current?.focus();
    setSlug('');

    socket.emit('sendMessage', { author, slug });
  };

  return (
    <div
      className={`${
        visibleChat ? 'translate-x-[0]' : 'translate-x-[calc(100%+1rem)]'
      } right-0 fixed w-80 h-[calc(100vh-4rem)] transition duration-500 bg-black z-40`}
    >
      <div
        className={`absolute min-w-9 h-9 rounded-full bg-white hover:bg-darkGreen hover:text-white cursor-pointer transition ${
          visibleChat ? '-translate-x-[50%]' : '-translate-x-[calc(100%+2rem)]'
        } top-2 flex items-center justify-center`}
        onClick={() => setVisibleChat(!visibleChat)}
      >
        {visibleChat ? <FaArrowRight /> : <FaArrowLeft />}
      </div>
      <div className="overflow-y-auto h-[calc(100vh-4rem-2rem)]">
        <h2 className="text-center text-white text-[1.5rem] font-bold py-2">
          Chat
        </h2>
        <div className="ml-4">
          {messageList?.map((message, i: number) => (
            <div className="flex mb-4" key={i}>
              <div className="min-w-9 h-9 rounded-full bg-red mr-3"></div>
              <div className="bg-white text-black w-[77%] p-1.5 rounded-[5px_20px_20px_20px]">
                <h4 className="font-bold">{message.author}</h4>
                <p className="text-sm px-1.5">{message.slug}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <form className="grid grid-cols-[85%_15%] absolute bottom-0 w-full">
        <input
          type="text"
          placeholder="Digite uma mensagem..."
          name="chat"
          className=" p-2 w-full text-xs text-black border-2 border-transparent focus:border-darkGreen outline-0"
          onChange={(e) => setSlug(e.target.value)}
          value={slug}
          ref={inputMessegeRef}
        />
        <button
          className="bg-lightBlack flex items-center justify-center hover:bg-darkGreen transition"
          onClick={handleSendMessege}
        >
          <IoSend className="text-white" />
        </button>
      </form>
    </div>
  );
}
