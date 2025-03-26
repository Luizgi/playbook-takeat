import React, { useState } from 'react';

import './style.css';
import { cn } from '../../lib/utils.ts';

import { NavLink } from 'react-router-dom';

// eslint-disable-next-line
import {
    BookOpen, Award, Users, Shield, ChevronLeft, ChevronRight,
    ChevronDown, ChevronUp, Briefcase, Calendar,
    Home, Info, ShoppingCart, User, Headphones,
    Coffee, Star,
    Landmark, History,  Lightbulb, BookText, Palette,
    LineChart, Network,  FileImage, HardDrive, Crown,
    DoorOpen
  } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface NavItem {
  title: string;
  path?: string;
  icon: React.ReactNode;
  children?: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    company: false,
    personal: false,
    benefits: true,
    work: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const navItems: NavItem[] = [
    { title: 'Home', path: '/', icon: <Home size={20}/>, children: [] },
    { title: 'Sobre', icon: <Info size={20}/>, 
    children: [
      { title: 'Nosso Produto',  path: '/', icon: <Star size={18} />}, 
      { title: 'Nossa História', path: '/', icon: <History size={18} />},
      { title: 'Nossa Cultura',  path: '/', icon: <Lightbulb size={18}/>},
      { title: 'Parceiros',      path: '/', icon: <Landmark size={18}/>},
      { title: 'Dicionario da Empresa', path: '/', icon: <BookText size={18}/>},
      { title: 'Nossos Valores', path: '/', icon: <Palette size={18}/>},
      { title: 'Estratégia 2025', path: '/', icon: <LineChart size={18}/>},
      { title: 'Quadro de Organização', path: '/', icon: < Network/>}
    ]
  },
  { title: 'Para você', path: '/', icon: <User size={20}/>, children: []},
  {
    title: 'Benefícios', icon: <Award size={20}/>,
    children: [
      { title: 'Vale Refeição', path: '/', icon: <Coffee size={18}/>},
    ]
  },
  { title: 'Para seu Trabalho', icon: <Briefcase size={20}/>,
  children: [
    { title: 'Trilhas', path: '/', icon: <BookOpen size={18}/>},
    { title: 'Tom de Voz', path: '/', icon: <Headphones size={18}/>},
    { title: 'Compras', path: '/', icon: <ShoppingCart size={18}/>},
    { title: 'Salas', path: '/', icon: <DoorOpen size={18}/>},
    { title: 'Escritório e Regras', path: '/', icon: <FileImage size={18}/>},
    { title: 'Calendário e Eventos', path: '/', icon: <Calendar size={18}/>},
    { title: 'Políticas', path: '/', icon: <Shield size={18}/>},
    { title: 'Suporte de Equipamentos', path: '/', icon: <HardDrive size={18}/>},
    { title: 'Portal de Líderes', path: '/', icon: <Crown size={18}/>}, 
  ]
},
{ title: 'Membros', path:'/', icon: <Users size={20}/>}
  ];

  const renderNavItem = (item: NavItem, index: number) => {
    if(item.children && item.children.length > 0)
    {
      const isExpanded = expandedSections[item.title.toLowerCase()];

      return (

        <li key={`${item.title}-${index}`} className="nav-item">

          <button onClick={() => toggleSection(item.title.toLowerCase())} className={cn("nav-button", !isOpen && "nav-button-collapsed")}>
            <span className="nav-icon">{item.icon}</span>

            {isOpen && (
              <>
                <span className="nav-title">{item.title}</span>
                <span className="nav-chevron"> {isExpanded ? <ChevronUp size={16}/>: <ChevronDown size={16}/>} </span>
              </>
            )}
          </button>

          {isOpen && isExpanded && (
            <ul className="nav-submenu">{item.children.map((child, childIndex) => (
                <li key={`${child.title}-${childIndex}`}>
                  {child.path ? (
                    <NavLink to={child.path} className={({ isActive }) => cn("nav-sublink", isActive ? "nav-sublink-active": "nav-sublink-hover")}>
                      <span className="nav-icon">{child.icon}</span>
                      <span className="nav-subtitle">{child.title}</span>
                    </NavLink>
                  ) : (
                    <div className="nav-sublink-static">
                      <span className="nav-icon">{child.icon}</span>
                      <span className="nav-icon">{child.title}</span>
                    </div>

                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      );
    }

        if(item.path){
          return(
            <li key={`${item.title}-${index}`} className="nav-item">
              <NavLink to= {item.path} className={({ isActive }) => cn("nav-link", isActive ? "nav-link-active" : "nav-link-hover", !isOpen && "nav-link-collapsed")}>
                <span className="nav-icon">{item.icon}</span>
                <span className={cn("nav-title", isOpen ? "nav-title-visible" : "nav-title-hidden")}>{item.title}</span>
              </NavLink>
            </li>
          );
      }
      return null;
    };

    return(
      <aside className={cn("sidebar", isOpen ? "sidebar-expanded" : "sidebar-collapsed")}>
        <div className="sidebar-container">

          <div className="sidebar-header">
            <h1 className={cn("sidebar-title", isOpen ? "sidebar-title-visible" : "sidebar-title-hidden")}>Takeat Handbook</h1>
            <button onClick={toggleSidebar} className="sidebar-toggle" aria-label={isOpen ? "Close sidebar" : "Open sidebar"}>{isOpen ? <ChevronLeft size={20} className='chevronText'/> : <ChevronRight size={20} className='chevronText'/>}</button>
          </div>

          <nav className="sidebar-nav">
            <ul className="sidebar-list">{navItems.map((item, index) => renderNavItem(item, index))}</ul>
          </nav>

          <div className={cn("sidebar-footer", isOpen ? "sidebar-footer-visible" : "sidebar-footer-hidden")}>
            <p className="sidebar-footer-text">© {new Date().getFullYear()} Takeat Inc.</p>
          </div>

        </div>
      </aside>
    );
  };


export default Sidebar;