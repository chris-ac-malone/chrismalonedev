import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul className="flex justify-center text-center py-5 shadow">
                    <li className="flex-1">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="flex-1">
                        <Link to="/">Portfolio</Link>
                    </li>
                    <li className="flex-1">
                        <Link to="/">Contact Me</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;