import { useEffect, useState } from "react";
import API from "../services/api";
import Header from "../components/Header";
import Login from "../components/Login";
import ChatBox from "../components/ChatBox";
import MessageInput from "../components/MessageInput";

function Chat() {
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const res = await API.get("/messages");
      setMessages(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();

    const interval = setInterval(() => {
      fetchMessages();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const sendMessage = async (text) => {
    try {
      await API.post("/messages", {
        sender: username,
        text,
      });

      fetchMessages();
    } catch (err) {
      console.log(err);
    }
  };

  if (!username) {
    return <Login onLogin={setUsername} />;
  }

  return (
    <div className="chatContainer">

      <Header username={username} />

      {loading ? (
        <div className="loading">
          Loading...
        </div>
      ) : (
        <ChatBox
          messages={messages}
          currentUser={username}
        />
      )}

      <MessageInput onSend={sendMessage} />

    </div>
  );
}

export default Chat;