function MessageBubble({ message, currentUser }) {

  const own = currentUser === message.sender;

  return (

    <div

      className={`bubble ${own ? "own" : "other"}`}

    >

      {!own && (

        <div className="sender">

          {message.sender}

        </div>

      )}

      <p>

        {message.text}

      </p>

      <span>

        {new Date(message.createdAt).toLocaleTimeString([], {

          hour: "2-digit",

          minute: "2-digit",

        })}

      </span>

    </div>

  );

}

export default MessageBubble;