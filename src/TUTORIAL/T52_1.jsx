import { useParams } from "react-router"

export default function UserDetails(){
    const paramData = useParams();
    console.log(paramData);

    return(
        <div>
            <h1>
                User Detail Page
            </h1>
            <h2>User id is : {paramData.id} </h2>
        </div>
    )
}