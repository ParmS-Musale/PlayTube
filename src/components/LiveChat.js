import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");

  const chatMessages = useSelector((store) => store?.chat?.messages);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("API Polling Started");

      dispatch(
        addChat({
          name: generateRandomName(),
          message: "ShoutOut For The Parm Dev..!!",
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, [dispatch]);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-4 border border-gray-300 bg-slate-50 rounded-lg overflow-y-scroll shadow-lg flex flex-col-reverse">
        <div>
          {chatMessages?.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="flex items-center mt-4 p-4 ml-2 border border-gray-300 rounded-lg shadow-md bg-white"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addChat({
              name: "Parm Dev",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Type your message..."
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button
          type="submit"
          className="ml-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 ease-in-out shadow-md"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
