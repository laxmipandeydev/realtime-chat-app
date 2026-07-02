function Header({ username }) {
  const logout = () => {
    localStorage.removeItem("username");
    window.location.reload();
  };

  return (
    <header className="header">
      <div className="profile">
        <div className="avatar">
          {username.charAt(0).toUpperCase()}
        </div>

        <div>
          <h2>{username}</h2>
          <span>🟢 Online</span>
        </div>
      </div>

      <button className="logout" onClick={logout}>
        Logout
      </button>
    </header>
  );
}

export default Header;