import { useSelector } from "react-redux"

export default function Profile() {
    const user = useSelector((state: any) => state.user.value);
    return (
        <div>
            <p>Email: {user.email}</p>
            <p>Nom:  {user.nom}</p>
            <p>Prenom:  {user.prenom}</p>
            <p>Address:  {user.address}</p>
        </div>
    )
}