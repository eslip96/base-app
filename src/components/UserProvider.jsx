import { useState, createContext } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});

  const userState = {
    user,
    setUser,
  };

  return (
    <UserContext.provider value={userState}>{children}</UserContext.provider>
  );
}
