import React from "react";
import { motion } from 'framer-motion';

import Layout from '../../../Components/Layout/component.tsx';
import PartnerCard from '../../../Components/PartnerCard/component.tsx';

import './style.css';

const OurPartners = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20},
        visible: { opacity: 1, y: 20, transition: { duration: .6 }},
    };

    const partner = [
        { icon: "Lightbulb", title: "GlobeEats Ventures", description: "Strategic investor providing capital and industry expertise to fuel our global expansion.", },
        { icon: "Target", title: "PayQuick", description: "Payment processing partner enabling seamless transactions across our platform."},
        { icon: "Users", title: "Green Packaging Co.", description: "Sustainable packaging provider helping us reduce our environmental footprint."},
        { icon: "Heart", title: "RestaurantOS", description: "Restaurant management software integrating with our platform for streamlined operations." },
        { icon: "Star", title: "FoodTech", description: "Industry accelerator that supported our early growth and development."}
    ];

    return( 
        <Layout>
            <motion.div className="page-container" initial="hidden" animate="visible" variants={fadeIn}>
                <span className="page-tag"> Alianças Estratégicas </span>
                <h1 className="page-title"> Nossos Parceiros </h1>

                <div className="partners-grid">
                    {partner.map((partner, index) => (
                        <PartnerCard 
                        key={index} 
                        icon={partner.icon} 
                        title={partner.title} 
                        description={partner.description}/>
                    ))}
                </div>
            </motion.div>
        </Layout>
    );
};

export default OurPartners;