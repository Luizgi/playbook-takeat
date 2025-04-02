import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const DepartmentSection = ({ department }) => (
  <div className="department-section">
    <div className="department-header">
      {department.icon}
      <div>
        <h2>{department.name}</h2>
        <p>Led by {department.lead}, {department.role}</p>
      </div>
    </div>
    <div className="department-teams">
      {department.teams.map((team, index) => (
        <motion.div 
          key={index}
          className="team-card"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
        >
          <h3>{team.name}</h3>
          <div className="team-info">
            <Users className="team-icon" />
            <span>{team.count} team members</span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default DepartmentSection;