
import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Mainpage(){
    const [entries, setEntries] = useState([]);
    useEffect (() => {
        axios.get("http://localhost:8080/studentdetails").then (res => setEntries(res.data));
    }, []);
    return (
        <>
            <p>Welcome to the Student Management Application</p>
            <p><Link to = "/students" >Students</Link> | <Link to = "/groups" >Groups</Link> </p>
        </>

    )
}

export default Mainpage;