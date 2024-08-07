import { useContext } from "react";
import { UserContext } from "../UserProvider";

export default function Second() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>{user.email}</h1>
      <h1>{user.username}</h1>
    </div>
  );
}
