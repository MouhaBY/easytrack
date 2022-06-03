import React from "react";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import { useSelector } from "react-redux";
import { selectToken } from "./store/selectors";


function App() {
   const token = useSelector(selectToken());
   
   if(!token){
       return <Login />
   }

   return <Main />
}

export default App;
