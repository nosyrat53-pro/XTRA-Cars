
import './Sidebar.css';
import SidebarItem from './SidebarItem/SidebarItem';
import Tabs from './sidebarTabs';
import menu from '../../assets/icons/menu.svg'
import logo from '../../assets/XtraCarsWorkshop.png'
import React from 'react';

const Sidebar = () => {
    
    const [isOpen,setIsOpen] = React.useState(false);
    
    const handleToggleSidebar = () => {
        setIsOpen(prev => !prev);
    }

    return <aside className={`sidebar-container ${isOpen ? '' : 'hide-sidebar'}`}>

    <div className='top-sidebar-content'>
        <div className='sidebar-menu-icon' onClick={handleToggleSidebar}>
            <img src={menu} />
        </div>

        <div className={`sidebar-logo ${isOpen ? '' : 'hide-sidebar'}`}>
            <img src={logo} alt={`XTRA CARS LOGO`} />
        </div>
    </div>

        <div className={`sidebar-items-container ${isOpen ? 'show-items' : ''}`}>
        {
            Tabs.map((tab,index) => {
                return <SidebarItem 
                key={index} 
                icon={tab.icon} 
                title={tab.title} 
                route={tab.route} 
                />
            })
        }
        </div>
    </aside>

}

export default Sidebar;