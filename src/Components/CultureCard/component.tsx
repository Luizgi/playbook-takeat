import React from "react";
import { motion } from 'framer-motion';
import "./style.css";

const CultureCard = ({ icon: Icon, title, children }) => {
    return (
        <motion.div className="culture-card" whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
            <div className="culture-card-header">
                <Icon className="culture-icon"/>
                <h2>{title}</h2>
            </div>
            <p>{children}</p>
        </motion.div>
    );
};

export default CultureCard;