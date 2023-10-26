import { useSelector } from "react-redux"

export default function Test() {
    const user = useSelector((state: any) => state.user.value);
    return (
        <div>
            <h5>Iciii c'est le component Test</h5>
            <p>Email: {user.email}</p>
        </div>
    )
}