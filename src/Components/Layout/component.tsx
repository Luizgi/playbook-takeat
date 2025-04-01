import React, { useState } from 'react';

import './style.css';
import Sidebar  from '../Sidebar/component.tsx';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="layout-container">
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar}/>
            <main className={`layout-main ${sidebarOpen ? 'expanded' : 'collapsed'}`}>
            <header className='layout-header'>

                <div className='logo-container'> 
                    <img width='64' height='64' src={require("../../Assets/Images/logo.png")} alt="Logo Takeat"/>
                </div>
            </header>
            <div className="layout-content">{children}</div>
            </main>
        </div>
    );
};

export default Layout;