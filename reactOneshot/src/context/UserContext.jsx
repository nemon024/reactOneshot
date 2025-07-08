import React from "react";
import {createContext} from 'react'

export const DataContext = createContext()//Context api created


const UserContext = ({ children }) => {
  const userData = {
    username: "Naman",
    age: 88,
    city:"Uttarakand"
  }
  return (
    <div>
      <DataContext.Provider value={userData}>
      {children}
      </DataContext.Provider>
     </div>
)};

export default UserContext;
