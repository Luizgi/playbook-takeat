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
      <motion.div className="container" initial="hidden" animate="visible" variants={fadeIn}>
        <span className="tag">Estrátegia da Companhia</span>
        <h1 className="title">Estrátegia 2025</h1>

        <div className="section">
          <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, corrupti tempora culpa atque quae nulla cum facere dicta adipisci pariatur voluptatibus reprehenderit commodi fugit rem illum voluptates eius possimus numquam.</p>
          <div className="confidentialBox">
            <p className="confidentialTitle">Informação Confidencial</p>
            <p className="confidentialText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit cumque, debitis ipsum facilis molestias laboriosam quam temporibus aspernatur id dolores alias adipisci commodi corporis quibusdam! At dolorem error inventore consequatur!</p>
          </div>
        </div>

        <div className="section">
          <div className="iconWrapper">
            <Target className="icon" />
            <h2 className="subtitle">Nossa Visão de 2025</h2>
          </div>
          <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, necessitatibus unde ullam distinctio fugiat minus atque, voluptas, amet earum illo ex dolor. Harum minus architecto nulla quis aliquam error praesentium.</p>

          <Card title="Estrátegias Chave">
            <ul className="list">
              <ListItem
                icon={<TrendingUp />}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
/>
              <ListItem
                icon={<Users />}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
              />
              <ListItem
                icon={<Globe />}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
              />
            </ul>
          </Card>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Strategies;