// UserProvider.jsx
import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');  // 🔄 store token as string
  const [email, setEmail] = useState(''); // 🔄 store email as string

  // Load from localStorage on startup
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedEmail = localStorage.getItem("userEmail");

    if (storedToken) setUser(storedToken);
    if (storedEmail) setEmail(storedEmail);
  }, []);

  // Save token and email when they change
  useEffect(() => {
    if (user) {
      localStorage.setItem("token", user);
    } else {
      localStorage.removeItem("token");
    }
  }, [user]);

  useEffect(() => {
    if (email) {
      localStorage.setItem("userEmail", email);
    } else {
      localStorage.removeItem("userEmail");
    }
  }, [email]);

  // Call on login
  const addUser = (token, email) => {
    setUser(token);
    setEmail(email);
  };

  // Call on logout
  const removeUser = () => {
    setUser('');
    setEmail('');
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
  };
  

  // Auth check
  const isUser = () => !!user;

  return (
    <UserContext.Provider value={{ user, email, addUser, removeUser, isUser}}>
      {children}
    </UserContext.Provider>
  );
};
