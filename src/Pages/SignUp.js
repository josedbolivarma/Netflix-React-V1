import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { NetflixButton, NetflixInput } from "../styled/styledcomponents";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const signIn = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log("Login email and password", user);
            navigate("/");
        } catch(error) {
            console.log(error);
        }
    }

    const register = async (e) => {
        console.log("auth 1");
        e.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
        }

    return (
        <div className={classes.root}>
            <Typography 
            variant="h5"
            align="left"
            >
                Sign In
            </Typography>
            <form className={classes.form}>
                <NetflixInput onChange={(e) => setEmail(e.target.value)} value={ email } placeholder="Email" className={classes.email} 
                type="email"
                />
                <NetflixInput onChange={(e) => setPassword(e.target.value)} value={ password } placeholder="Password" className={classes.password} 
                type="password"
                />
                <NetflixButton
                type="submit"
                wide="medium"
                
                onClick={signIn}
                >
                    Sign In
                </NetflixButton>
                <Typography
                variant="subtitle2"
                >
                    New to Netflix ?{" "}
                    <span className={classes.signupLink}
                    onClick={register}>
                        Sign Up now.{" "}
                    </span>
                </Typography>
            </form>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "350px",
        width: "20rem",
        height: "25rem",
        background: "rgba(0, 0, 0, 0.65)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        "& h5": {
            marginTop: theme.spacing(2),
            width: "70%",
        }
    },
    form: {
        width: "80%",
    },
    email: {
        marginBottom: theme.spacing(2),
    },
    password: {
        marginBottom: theme.spacing(4),
    },
    signupLink: {
        color: "#fff",
        cursor: "pointer",
        "&:hover": {
            textDecoration: "underline",
        }
    }
  })) 

export default SignUp;