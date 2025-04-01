import React from 'react';
import './style.css';

interface ListItemProps {
  icon: React.ReactNode;
  text: string;
}

const ListItem: React.FC<ListItemProps> = ({ icon, text }) => {
  return (
    <li className="listItem">
      <div className="listItemIcon">{icon}</div>
      <span>{text}</span>
    </li>
  );
};

export default ListItem;