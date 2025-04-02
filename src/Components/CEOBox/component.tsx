import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

import './style.css';

const CEOBox = () => (
  <div className="ceo-box">
    <motion.div 
      className="ceo-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="ceo-icon">
        <User className="icon" />
      </div>
      <h3>Sarah Johnson</h3>
      <p>CEO & Founder</p>
    </motion.div>
  </div>
);

export default CEOBox;