import TopNav from "./top-nav";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <div id="root">
            <TopNav />
            <Outlet />
        </div>
    );
}