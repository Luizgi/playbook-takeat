import React from "react";

import Layout from '../../../Components/Layout/component.tsx';
import './style.css';

import { motion } from 'framer-motion';
import { Lightbulb, Target, Users, Heart, Star } from "lucide-react";

const OurCulture = () => {
    const fadeIn = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: { duration: .6 }}
    };

    return(
        <Layout>
            <motion.div className="motionPage" initial="hidden" animate="visible" variants={fadeIn}>
                <span className="blockTitle"> Cultura da Companhia </span>

                <h1 className="title"> Nossa Cultura </h1>

                <div className="pageContentDiv">
                    <p className="pageContent">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, optio. Aspernatur unde nam distinctio sed velit officiis laboriosam, ad dignissimos quae aperiam nulla vitae id aliquid rem assumenda. Velit, laudantium.
                    </p>

                    <div className="contentDiv">
                        <motion.div className="motionContent" whileHover={{ y: -5}} transition={{ duration: .2}}>
                            <div className="divIcon">
                                <Lightbulb className="icon"/>
                                <h2 className="titleIcon"> Nossa Missão </h2>
                            </div>
                            <p className="contentSubtitle"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur quidem tenetur numquam rerum, et eligendi, beatae eveniet ipsa quibusdam nesciunt labore dolor, non dignissimos quam totam eius repudiandae itaque? Quisquam? </p>

                        </motion.div>
                    </div>

                    <div className="contentDiv">
                        <motion.div className="motionContent" whileHover={{ y: -5}} transition={{ duration: .2}}>
                            <div className="divIcon">
                                <Lightbulb className="icon"/>
                                <h2 className="titleIcon"> Nossa Visão </h2>
                            </div>
                            <p className="contentSubtitle"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur quidem tenetur numquam rerum, et eligendi, beatae eveniet ipsa quibusdam nesciunt labore dolor, non dignissimos quam totam eius repudiandae itaque? Quisquam? </p>

                        </motion.div>
                    </div>

                    
                </div>

            </motion.div>
        </Layout>
    );
}

export default OurCulture;