import { NavBar } from "../navBar";
import styles from './header.module.css';
import logo from "../../assets/Logo SGF.png"

export function Header() {
    return (
        <div>
            <header className={styles.headerConteiner}>
                <div>
                    <img src={logo} alt="" height={60} />
                </div>
                <div className={styles.navBarContainer}>
                    <NavBar />
                </div>
            </header>
        </div>
    )
}