import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import { Button } from "@mui/material";

function Register () {
    return (
        <>
        <Header></Header>
        Registration page
        <br></br>        
        <Link to="/login"><div className="button"><Button variant="contained">Login</Button></div> </Link>
        <br />
        <Link to="/"><div className="button"><Button variant="contained">Home page</Button></div> </Link>

        </>
    );
    
} 

export default Register