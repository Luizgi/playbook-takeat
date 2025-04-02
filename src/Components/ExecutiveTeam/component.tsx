import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, BarChart } from 'lucide-react';

const ExecutiveTeam = () => (
  <div className="executive-team">
    <motion.div 
      className="executive-card purple"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="executive-icon">
        <Code className="icon" />
      </div>
      <h3>Michael Chen</h3>
      <p>CTO</p>
    </motion.div>

    <motion.div 
      className="executive-card green"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="executive-icon">
        <Briefcase className="icon" />
      </div>
      <h3>David Kim</h3>
      <p>COO</p>
    </motion.div>

    <motion.div 
      className="executive-card red"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="executive-icon">
        <BarChart className="icon" />
      </div>
      <h3>Emma Rodriguez</h3>
      <p>CMO</p>
    </motion.div>
  </div>
);

export default ExecutiveTeam;