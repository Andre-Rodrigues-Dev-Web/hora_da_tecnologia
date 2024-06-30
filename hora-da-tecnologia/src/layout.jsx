import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
      <section className="theme">
        <Outlet />
      </section>
    );
}

export default Layout;