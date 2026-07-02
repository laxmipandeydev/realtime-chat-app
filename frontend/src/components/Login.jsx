import { useState } from "react";

function Login({ onLogin }) {
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (!name.trim()) return;

    localStorage.setItem("username", name.trim());
    onLogin(name.trim());
  };

  return (
    <div className="login">

      <div className="loginCard">

        <div className="logoCircle">
          💬
        </div>

        <h1>ChatFlow</h1>

        <p>
          A modern real-time messaging app
        </p>

        <div className="inputGroup">

          <label>
            Display Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
          />

        </div>

        <button
          className="loginBtn"
          onClick={handleLogin}
        >
          Continue →
        </button>

      </div>

    </div>
  );
}

export default Login;