import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";
import style from "./admin.module.css"

export function LayoutAdmin() {
    return (
        <>
            <Header />
            <div className={style.bodyContainer}>
                <Outlet />
            </div>
        </>
    )
}