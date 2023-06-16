import {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";

function AddGroups(){

    const [group_name, setGname] = useState("");

    let navigate = useNavigate();

    const onSubmit = function(e){
        e.preventDefault();
        axios.post("http://localhost:8080/groupdetails", {
            group_name
        }).then (() => navigate("/groups/"));
    };

    return (
        <div>
            <form onSubmit = {onSubmit}>
                <table border='1'>
                    <tr>
                        <td>Name:</td> 
                        <td><input type = "text" name = "name" value={group_name} 
                        onChange={e => setGname(e.target.value)}/></td>
                    </tr>
                    <button>Add</button>
                </table>
            </form>
            <p><Link to = "/groups/">Go back to Group View</Link></p>
        </div>
    )
}

export default AddGroups;