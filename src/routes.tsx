import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Users } from "./pages/users";
import { Wallet } from "./pages/wallet";
import { Login } from "./pages/login";
import { LayoutAdmin } from "./layouts/admin";
import { LayoutAuth } from "./layouts/auth";
import { Sobre } from "./pages/sobre";

const router = createBrowserRouter([
    {
        element: <LayoutAdmin />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/usuarios", element: <Users /> },
            { path: "/carteira", element: <Wallet /> },
            { path: "/sobre", element: <Sobre /> },
        ]
    },
    {
        element: <LayoutAuth />,
        children: [
            { path: "/login", element: <Login /> }
        ]
    }

])

export { router };