import { useDispatch } from "react-redux"
import { TUser, login, logout } from "../redux/features/user";

export default function Login() {

    const dispatch = useDispatch();
    const user: TUser = {
        nom: 'Ben Falten',
        prenom: 'Foulen',
        address: 'Sousse, Tunisie',
        email: 'foulenbenfalten@gmail.com'
    };

    return (
        <div>
            <button onClick={() => dispatch(login(user))}>Se connecter !</button>
            <button onClick={() => dispatch(logout())}>Se déconnecter !</button>
        </div>
    )
}