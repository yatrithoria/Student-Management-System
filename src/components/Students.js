import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Students(){

    var currentTime= new Date();
    var year = parseInt(currentTime.getFullYear());
    const [entries, setEntries] = useState([]);
    useEffect (() => {
        axios.get("http://localhost:8080/studentdetails").then (res => setEntries(res.data));
    }, []);
    return (
        <>
            <p><Link to = "/addstudents" >Add Students</Link></p>
            <p><Link to = "/">Go back to main page</Link></p>
            <h2>Students list</h2>
            <table border = "1">
                <thead><tr><th>Student</th><th>Age</th><th>Parent</th><th>Email</th><th>Group</th></tr></thead>
                <tbody>
                    {entries.map(entry => (
                        <tr key={entry.stu_id}>
                            <td>{entry.stu_name}</td>
                            <td>{year-entry.stu_birthyear}</td>
                            <td>{entry.stuparent_name}</td>
                            <td>{entry.stuparent_email}</td>
                            <td>{entry.group_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Students;