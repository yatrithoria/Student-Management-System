import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";


function AddStudents(){

    const [stu_name, setName] = useState("");
    const [stu_birthyear, setByear] = useState("");
    const [stuparent_name, setPname] = useState("");
    const [stuparent_email, setPemail] = useState("");
    const [group_name, setGname] = useState("");
    const [entries, setEntries] = useState([]);

    useEffect (() => {
        axios.get("http://localhost:8080/groupdetails").then (res => setEntries(res.data));
    }, []);

    let navigate = useNavigate();
    const onSubmit = function(e){
        
        e.preventDefault();
        axios.post("http://localhost:8080/studentdetails", {
            stu_name,
            stu_birthyear,
            stuparent_name,
            stuparent_email,
            group_name
        }).then (() => navigate("/students/"));

    };
    
    return (
        <div>
            <form onSubmit = {onSubmit}>
                <table border='1'>
                    <tr>
                        <td>Name:</td> 
                        <td><input type = "text" name = "name" value={stu_name} 
                        onChange={e => setName(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>Birth Year:</td>
                        <td><input type = "text" name = "birthyear" value={stu_birthyear}
                        onChange={e => setByear(e.target.value)}/></td> 
                    </tr>
                    <tr>
                        <td>Parent Name:</td>
                        <td><input type = "text" name = "pname" value={stuparent_name}
                        onChange={e => setPname(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>Parent Email:</td>
                        <td><input type = "text" name = "pemail" value={stuparent_email}
                        onChange={e => setPemail(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Group:</td>
                        <td><select name = "gname" value={group_name}
                        onChange={(e) => setGname(e.target.value)}>
                        <option></option>
                        {entries.map((entry) => (

                            <option key={entry.group_id}>
                            {entry.group_name}
                            </option>))}
                    </select></td>
                    </tr>
                    <button>Add</button>
                </table>
            </form>
            <p><Link to = "/students/">Go back to Student View</Link></p>
        </div>
    )
}

export default AddStudents;