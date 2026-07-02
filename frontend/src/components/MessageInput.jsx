import { useState } from "react";

function MessageInput({ onSend }) {

  const [text, setText] = useState("");

  const send = () => {

    if (!text.trim()) return;

    onSend(text);

    setText("");

  };

  return (

    <div className="inputContainer">

      <button className="emoji">

        😊

      </button>

      <input

        placeholder="Type a message..."

        value={text}

        onChange={(e) => setText(e.target.value)}

        onKeyDown={(e) => {

          if (e.key === "Enter") {

            send();

          }

        }}

      />

      <button

        className="sendBtn"

        onClick={send}

      >

        ➜

      </button>

    </div>

  );

}

export default MessageInput;