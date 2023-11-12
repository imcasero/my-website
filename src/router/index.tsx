import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderComponent from "../components/header/header.component";

export default function AppRouter(): ReactElement {
    return (
        <Routes>
            <Route path="/" element={<HeaderComponent />}>

            </Route>
        </Routes>
    )
}
