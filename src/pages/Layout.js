import { Outlet, Link } from "react-router-dom";

const Layout = (props) => {
    return (
        <>
            <div className="shadow w-screen dark:bg-slate-600">TESTING
                <button onClick={props.setDarkMode} >Dark Mode</button>
            </div>
            <Outlet />
        </>
    )
};

export default Layout;