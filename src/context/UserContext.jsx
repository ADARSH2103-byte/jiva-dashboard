import { createContext, useState } from "react";
import { users as initialUsers } from "../data/users";

export const UserContext =
  createContext();

export default function UserProvider({
  children,
}) {

  const [users, setUsers] =
    useState(initialUsers);

  const addUser = (newUser) => {

    setUsers([
      ...users,
      newUser,
    ]);

  };

  return (
    <UserContext.Provider
      value={{
        users,
        addUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}