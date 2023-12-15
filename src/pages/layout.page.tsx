import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/header/header.component";

export function Layout(): ReactElement {
    return (
        <>
            <HeaderComponent />
            <Outlet />
        </>

    )
}
