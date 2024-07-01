import { Outlet } from "react-router-dom";
import Menu from './Shared/Components/Menu'
import Footer from './Shared/Components/Footer'
const Layout = () => {
    return (
      <section className="theme">
        <Menu />
        <Outlet />
        <Footer />
      </section>
    );
}

export default Layout;