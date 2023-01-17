import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="shadow w-screen dark:bg-slate-600">

            </div>
            <Outlet />
        </>
    )
};

export default Layout;