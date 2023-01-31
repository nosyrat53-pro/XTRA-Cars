import './Layout.css';

import Sidebar from "./Sidebar/Sidebar";

const Layout = ({children}) => {

    return <div className="layout-container">
            <Sidebar />
            <div className="box-container">
                {children}
            </div>
    </div>  

}

export default Layout;