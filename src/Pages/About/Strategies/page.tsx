import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Globe } from 'lucide-react';

import Layout from '../../../Components/Layout/component.tsx';
import Card from '../../../Components/Card/component.tsx';
import ListItem from '../../../Components/ListItem/component.tsx'

import './style.css';

const Strategies = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Layout>
      <motion.div
        className="container"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <span className="tag">Company Strategy</span>
        <h1 className="title">2024 Strategy</h1>

        <div className="section">
          <p className="paragraph">
            This document outlines Takeat's strategic priorities and objectives for 2024, focusing on growth, 
            customer experience, operational efficiency, and team development.
          </p>
          <div className="confidentialBox">
            <p className="confidentialTitle">Confidential Information</p>
            <p className="confidentialText">
              This document contains confidential business information. Please do not share outside the company.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="iconWrapper">
            <Target className="icon" />
            <h2 className="subtitle">Our Vision for 2024</h2>
          </div>
          <p className="paragraph">
            By the end of 2024, Takeat aims to be the market leader in food delivery across our operating regions, 
            while maintaining profitability and scaling our infrastructure to support future growth.
          </p>

          <Card title="Key Strategic Targets">
            <ul className="list">
              <ListItem
                icon={<TrendingUp />}
                text="Increase total revenue by 35% compared to 2023, through customer acquisition and increased order frequency."
              />
              <ListItem
                icon={<Users />}
                text="Grow our active customer base by 25% while improving retention rates by 15%."
              />
              <ListItem
                icon={<Globe />}
                text="Launch in 10 new cities across 2 new countries, establishing strong initial market share."
              />
            </ul>
          </Card>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Strategies;