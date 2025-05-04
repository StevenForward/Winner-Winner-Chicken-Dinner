//This file is not a component, but supposed to be the 
//state manager for our favorite movies
//We wrapped the APP inside the App.jsx

import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext()

export const useUserContext = () => useContext(UserContext)

//Movie Provider will provide a state to any components wrapped inside it
//We will wrap our entire app inside the MovieProvider, so our entire app has 
// access to these states defined here

//Children is a reserved prompt used to take in any components wrapped inside this component
export const UserProvider = ({children}) => {
    const [user, setUser] = useState([])

    //Checks once whenever the context is new, if there were
    //favorite movies stored inside the local storage, and to restore them
    //Because whenever the page changes, the context is changed meaning all states are
    //lost
    useEffect(() => {
        const storedUser = localStorage.getItem("user")

        if (storedUser) {
            //Reconverts the string '[1, 2, 3, etc]' back into a list
            setUser(JSON.parse(storedUser))
        }
    }, [])

    //Anytime we add or remove a favorite movie, we will restore the local
    //storage by converting the favorites list [1, 2, 3, etc] into a string
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    const addUser = (user) => {
        setUser([user])
    }

    const removeUser = () => {
        setUser([])
    }

    //This function will return true or false if the given movie is in our favorites
    const isUser = () => {
        return user.length != 0
    }

    const value = {
        user,
        addUser,
        removeUser,
        isUser
    }

    //The value={value} makes it so any children has access to the values we made,
    //which are the favorites functions and the favorite variable itself
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}
