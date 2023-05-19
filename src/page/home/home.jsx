import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import { Button } from "@mui/material";

function Home() {
    return (
        <>
        <Header></Header>
        Home Page
        <br></br>
        <Link to="/login"> <div className="button"><Button variant="contained">Login</Button></div> </Link>
        <br></br>
        <Link to="/register"> <div className="button"><Button variant="contained">Register</Button></div></Link>
        </>
    );
    
} 

export default Home