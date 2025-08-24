import { Link } from "react-router"

export default function UserList() {
    const userData = [
        { id: 1, name: 'Anil' },
        { id: 2, name: 'Shivam' },
        { id: 3, name: 'Gupta' },
        { id: 4, name: 'Sunny' },
        { id: 5, name: 'Pratik' },
        { id: 6, name: 'Rishu' },
    ]
    return (
        <div style={{ marginLeft: "20px" }}>
            <h1>User List Page</h1>
            {
                userData.map((item) => (
                    <div>
                        <h4><Link to={"/users/" + item.id}>{item.name}</Link></h4>
                    </div>
                ))
            }
        </div>
    )
}