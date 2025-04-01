import React from "react";
import { Lightbulb, Target, Users, Heart, Star } from "lucide-react";
import { motion } from 'framer-motion';

import './style.css';

interface PartnerCardProps {
    icon: string;
    title: string;
    description: string;
}

const icons = {
    Lightbulb: <Lightbulb className="partner-icon"/>,
    Target: <Target className="partner-icon"/>,
    Users: <Users className="partner-icon"/>,
    Heart: <Heart className="partner-icon"/>,
    Star: <Star className="partner-icon"/>,
};

const PartnerCard: React.FC<PartnerCardProps> = ({ icon, title, description }) => {
    return(
        <motion.div className="partner-card" whileHover={{ y: -5 }} transition={{ duration: .2}}>
            <div className="partner-card-header">
                {icons[icon]}
                <h2>{title}</h2>
            </div>
            <p>{description}</p>
        </motion.div>
    );
};

export default PartnerCard;