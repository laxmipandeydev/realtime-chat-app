import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

function ChatBox({ messages, currentUser }) {

  const bottomRef = useRef();

  useEffect(() => {

    bottomRef.current?.scrollIntoView({

      behavior: "smooth",

    });

  }, [messages]);

  if (!messages.length) {

    return (

      <div className="empty">

        <h2>💬</h2>

        <h3>No Messages Yet</h3>

        <p>

          Start your first conversation.

        </p>

      </div>

    );

  }

  return (

    <div className="messages">

      <div className="today">

        Today

      </div>

      {messages.map((msg) => (

        <MessageBubble

          key={msg._id}

          message={msg}

          currentUser={currentUser}

        />

      ))}

      <div ref={bottomRef}></div>

    </div>

  );

}

export default ChatBox;