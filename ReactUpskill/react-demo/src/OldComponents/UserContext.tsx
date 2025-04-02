import { createContext, useState } from "react";

interface UserContextType {
  user: UserProfileProps;
  updateUser: (name: string) => void;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

interface UserProfileProps {
  name: string;
}

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserProfileProps>({ name: "John Doe" });

  const updateUser = (newName: string) => {
    setUser({ name: newName });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
