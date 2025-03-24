import React, { useState } from 'react';

import './style.css';

import { cn } from '../../Lib/utils.ts';

import { NavLink } from 'react-router-dom';
import {
    BookOpen, Award, Users, Shield, ChevronLeft, ChevronRight,
    ChevronDown, ChevronUp, Briefcase, Calendar, FileText,
    Home, Info, MessageCircle, ShoppingCart, User, Headphones,
    Heart, Coffee, Sparkles, Clock, BedDouble, Leaf, Star,
    Landmark, History, Building, Lightbulb, BookText, Palette,
    LineChart, Network, Mic, FileImage, HardDrive, Crown,
    Rocket, DoorOpen, Receipt, PiggyBank
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
    { title: 'Home', path: '/', icon: <Home size={20}/>},
    // HERE TO ADD MORE THINGS ON NAVIGATION BAR
  ];

  const renderNavItem = (item: NavItem, index: number) => {
    if(item.children && item.children.length > 0)
    {
      const isExpanded = expandedSections[item.title.toLowerCase()];

      return (
        <li key={`${item.title}-${index}`} className="nav-item">
          <button
          onClick={() => toggleSection(item.title.toLowerCase())}
          className={cn(
            "nav-button",
            !isOpen && "nav-button-collapsed"
          )}>
            <span className="nav-icon">{item.icon}</span>
            {isOpen && (
              <>
                <span className="nav-title">{item.title}</span>
                <span className="nav-chevron">
                  {isExpanded ? <ChevronUp size={16}/>: <ChevronDown size={16}/>}
                </span>
              </>
            )}
          </button>

          {isOpen && isExpanded && (
            <ul className="nav-submenu">
              {item.children.map((child, childIndex) => (
                <li key={`${child.title}-${childIndex}`} className="nav-subitem">
                  {child.path ? (
                    <NavLink
                    to={child.path}
                    className={({ isActive }) => cn(
                      "nav-sublink",
                      isActive ? "nav-sublink-active": "nav-sublink-hover"
                    )}>
                      <span className="nav-subicon">{child.icon}</span>
                      <span className="nav-subtitle">{child.title}</span>
                    </NavLink>
                  ) : (
                    <div className="nav-sublink-static">
                      <span className="nav-subicon">{child.icon}</span>
                      <span className="nav-subtitle">{child.title}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      )
    }

        if(item.path){
          return(
            <li key={`${item.title}-${index}`}  className="nav-item">
              <NavLink
              to= {item.path}
              className={({ isActive }) => cn(
                "nav-link",
                isActive ? "nav-link-active" : "nav-link-hover",
                !isOpen && "nav-link-collapsed"
              )}>
                <span className="nav-icon">{item.icon}</span>
                <span className={cn(
                  "nav-title",
                  isOpen ? "nav-title-visible" : "nav-title-hidden"
                )}>
                  {item.title}
                </span>
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
            <h1 className={cn("sidebar-title", isOpen ? "sidebar-title-visible" : "sidebar-title-hidden")}>
              Startup Handbook
            </h1>
            <button
            onClick={toggleSidebar}
            className="sidebar-toggle"
            aria-label={isOpen ? "Close sidebar" : "Open sidebar"}>
              {isOpen ? <ChevronLeft size={20}/> : <ChevronRight size={20}/>}
            </button>
          </div>
          <nav className="sidebar-nav">
            <ul className="sidebar-list">
              {navItems.map((item, index) => renderNavItem(item, index))}
            </ul>
          </nav>
          <div className={cn("sidebar-footer", isOpen ? "sidebar-footer-visible" : "sidebar-footer-hidden")}>
            <p className="sidebar-footer-text">© {new Date().getFullYear()} Startup Inc.</p>
          </div>
        </div>
      </aside>
    );
  };


export default Sidebar;