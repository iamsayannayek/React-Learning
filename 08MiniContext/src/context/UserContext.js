import React from "react";

const UserContext = React.createContext();

export default UserContext;

/*
! Context
^ Here you have to also make UserContextProvider because this provider acts like a
^ Wrapper on other components, we make it because whatever components we make the all
^ Components have the access of the all states which is provide by the UserContext
*/
