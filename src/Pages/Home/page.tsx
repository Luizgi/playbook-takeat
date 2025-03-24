import './style.css';
import Layout from '../../Components/Layout/index.tsx';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const fadeIn = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stagger = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

    const playbooks = [
        { title: 'Engineering Practices', description: 'Code standards, workflows, and development guidelines.' },
        { title: 'Product Development', description: 'Process from ideation to launch and iteration.' },
        { title: 'Customer Success', description: 'Onboarding, support, and retention best practices.' },
        { title: 'Sales & Marketing', description: 'Strategies, templates, and processes for growth.' },
      ];

      return(
        <Layout>
          <motion.div
          className='motionDiv'
          initial='hidden'
          animate='visible'
          variants={fadeIn}>
            <h1 className="mainText"> Welcome to Takeat Playbook </h1>
            <p className="subText"> A guide to our process, principles, and policies.</p>

            <motion.div className="playbookGrid" variants={stagger}>
              {playbooks.map((playbook, index) => (
                  <motion.div
                  key={index}
                  className="playbookBlock"
                  variants={fadeIn}>
                    <h3 className="playbookTitle">{playbook.title}</h3>
                    <p className="playbookDesc">{playbook.description}</p>
                    <Link to="./page.tsx" className="playbookPage">Read more <ArrowRight size={16} className='arrowLink'/></Link>
                  </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Layout>

      );
};

export default Index;