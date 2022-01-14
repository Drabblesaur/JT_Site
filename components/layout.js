import Footer from "./footer.js";
import Navbar from "./navbar.js";

const Layout = ({children}) => {
    return(
        <div className="bg-background flex flex-col min-h-screen">
            <Navbar/>
            <div className="flex-grow">
            {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;