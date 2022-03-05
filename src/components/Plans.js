import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { NetflixButton } from "../styled/styledcomponents";
import { useDispatch } from "react-redux";
import { setPrice } from "../features/PriceSlice";
import { useNavigate } from "react-router-dom";

const Plans = ({cost, children, color="red", wide}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (cost) => {
        dispatch(setPrice(cost));
        navigate("/checkout");
    }

    return (
        <div className={classes.root}>
            <Typography
            variant="h5"
            className={classes.standard}
            >
                {children}
                <p style={{
                    textAlign: "center",
                    marginTop: ".4rem",
                }}>
                    {cost}
                </p>
            </Typography>
            <NetflixButton wide={wide} color={color}
            onClick={() => handleClick(cost)}
            >Subscribe</NetflixButton>
            
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& button": {
            marginBottom: theme.spacing(2),
        },
    },
    standard: {
        fontSize: "1.2rem",
    },
    
  })) 
export default Plans;