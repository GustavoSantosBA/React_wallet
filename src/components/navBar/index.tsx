import { Link } from 'react-router-dom'
import './navBar.module.css'

export function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/usuarios">Usuários</Link>
            <Link to="/carteira">Carteiras</Link>
            <Link to="/sobre">Sobre</Link>
        </nav>
    )
}