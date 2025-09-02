import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"

export default function UserEdit(){
    const {id} = useParams();

    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [email,setEmail] = useState('');
    const url = "http://localhost:3000/users/"+id;
    const navigate = useNavigate();
    useEffect(()=>{
        getUserData();
    },[])

    const getUserData=async()=>{
        let response = await fetch(url);
        response = await response.json();

        setName(response.name);
        setAge(response.age);
        setEmail(response.email);
    }

    const updateUserData =async()=>{
        let response = await fetch(url,{
            method:'Put',
            body:JSON.stringify({name,age,email})
        });
        response =await response.json();
        console.log(response);
        if(response){
            alert("User Data Updated");
            navigate('/');
        }

    }
    return(
        <div style={{textAlign:'center'}}>
            <h1>Edit User Detail</h1>
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter user name"/>
            <br /><br />
            <input type="text" value = {age} onChange={(event)=>setAge(event.target.value)} placeholder="Enter user age"/>
            <br /><br />
            <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)}  placeholder="Enter user email"/>
            <br /><br />
            <button onClick={updateUserData}>Update User</button>
        </div>
    )
}