import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core";
import Login from "./Pages/Login";
import Paypal from "./Pages/Paypal";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Header from "./components/Header";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/UserSlice";

function App() {
  const user = useSelector(selectUser);
  const classes = useStyles();
  const dispatch = useDispatch();


  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        dispatch(logout);
      }
    })
    return unsubscribe;
  }, [dispatch]);

   return (
    <div className={classes.root}>    

    <Router>
           <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<Paypal />} />
            <Route path="/" element={<Home />} />
          </Routes>
    </Router>
    </div>  
    );   
}

const useStyles = makeStyles((theme) => ({
  root: {
     minHeight: "100vh",
     backgroundColor: "#111"
  },
})) 

export default App;

/*
    backgroundColor: "#111",
    minHeight: "100vh",
*/