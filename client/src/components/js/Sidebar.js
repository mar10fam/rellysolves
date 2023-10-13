import '../css/Sidebar.css'
import { SidebarData } from './SidebarRows'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <div className="sidebar">
            <div id="sidebarTitle">RellySolves</div>
            <ul className="sidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li 
                        className="row" 
                        key={key} 
                        id={window.location.pathname === val.link ? "active" : ""}
                        onClick={() => {navigate(val.link)}}>
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                        </li>
                    )
                })}
            </ul>
        
        </div>
    )
}

export default Sidebar