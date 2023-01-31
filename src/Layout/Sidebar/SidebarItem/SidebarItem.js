
import { Link } from 'react-router-dom';
import './SidebarItem.css';

const SidebarItem = ({icon,title,route}) => {

    return <Link to={route} className="sidebar-item">
          
                <span>{title}</span>
                <img loading='lazy' src={icon} width={35} height={35} alt={`XTRA CARS ${title}`} />
           
    </Link>
}

export default SidebarItem;