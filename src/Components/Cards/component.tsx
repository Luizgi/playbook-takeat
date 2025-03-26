import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import './style.css';

interface PlaybookCardProps {
  title: string;
  description: string;
  path: string;
}

const PlaybookCard: React.FC<PlaybookCardProps> = ({ title, description, path }) => {
  return (
    <div className="playbookBlock">
      <h3 className="playbookTitle">{title}</h3>
      <p className="playbookDesc">{description}</p>
      <Link to={path} className="playbookPage"> Ler mais <ArrowRight size={16} className="arrowLink" /></Link>
    </div>
  );
};

export default PlaybookCard;