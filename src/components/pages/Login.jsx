import { useState, useContext } from "react";
import { InfoContext } from "./UserProvider";

export default function Login() {
  const { user, setUser } = useContext(InfoContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => setUser({ username: username, email: email }), 3000);
  }

  return (
    <div>
      <h1>Login Heading</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="username"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" value="Add User Info" />
      </form>
    </div>
  );
}
