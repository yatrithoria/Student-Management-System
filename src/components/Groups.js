import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Groups(){
    const [entries, setEntries] = useState([]);
    useEffect (() => {
        axios.get("http://localhost:8080/groupdetails").then (res => setEntries(res.data));
    }, []);
    return (
        <>
            <p><Link to = "/addgroups" >Add Groups</Link></p>
            <p><Link to = "/">Go back to main page</Link></p>
            <h2>Groups list</h2>
            <table border = "1">
                <thead><tr><th>Group</th><th>Group Members</th></tr></thead>
                <tbody>
                    {entries.map(entry => (
                        <tr key={entry.group_id}>
                            <td>{entry.group_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Groups;