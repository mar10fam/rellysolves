import '../css/Sidebar.css'
import { SidebarData } from './SidebarData'
const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li 
                        className="row" 
                        key={key} 
                        onClick={() => {window.location.pathname = val.link}}>
                            <div>{val.icon}</div>
                            <div>{val.title}</div>
                        </li>
                    )
                })}

            </ul>
            
        </div>
    )
}

export default Sidebar