import React from "react";

export const UserContext = React.createContext();

export const ChannleContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

const ChannleProvider = ChannleContext.Provider
const ChannleConsumer = ChannleContext.Consumer

export {UserProvider,UserConsumer,ChannleConsumer,ChannleProvider}
export default UserContext

