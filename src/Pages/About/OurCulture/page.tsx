import React from "react";
import { motion } from 'framer-motion';
import { Lightbulb, Target, Users, Heart, Star } from 'lucide-react';

import CultureCard from "../../../Components/CultureCard/component.tsx";
import Layout  from "../../../Components/Layout/component.tsx";

import './style.css';

const OurCulture = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {opacity: 1, y: 0, transition: { duration: .6 }}
    };

    return(
        <Layout>
            <motion.div className="culture-container" initial="hidden" animate="visible" variants={fadeIn}>
                <span className="culture-badge">Nossa Cultura</span>
                <p className="culture-description"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum corporis magni suscipit delectus dicta reprehenderit quod culpa, sed quia minima provident molestias aliquid, similique iure vitae corrupti est a magnam! </p>

                <div className="culture-grid">
                    <CultureCard icon={Lightbulb} title={"Nossa Missão"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia excepturi similique illum nobis non maiores animi sequi, facere possimus alias asperiores dignissimos voluptate magnam. Nemo recusandae rerum ut error optio.
                    </CultureCard>
                    <CultureCard icon={Target} title={"Nossa Visão"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusamus nesciunt alias assumenda atque optio, vitae, nobis temporibus corrupti nisi cupiditate quisquam maiores explicabo perspiciatis in nihil odio ab. Laboriosam!
                    </CultureCard>
                </div>

                <h2 className="culture-subtitle"> Nossos Valores </h2>
                <div className="culture-grid">
                    <CultureCard icon={Heart} title={"Obsessão do Cliente"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam inventore fugit perspiciatis sunt id. Eum quae illum pariatur, perspiciatis sint harum similique voluptas unde, natus possimus nihil! Culpa, quos!
                    </CultureCard>
                    <CultureCard icon={Users} title={"Uma Equipe"}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quo cumque nostrum eveniet quibusdam nemo adipisci. Earum sint doloremque magni voluptates quae animi voluptatem, cum repudiandae tenetur. Quis, odit autem?
                    </CultureCard>
                    <CultureCard icon={Star} title={"Excelencia na execução"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus modi nihil a laboriosam perspiciatis saepe, quaerat debitis distinctio dolorem ipsa error beatae ad nostrum labore reiciendis corrupti qui tempore at?
                    </CultureCard>
                </div>

                <div className="culture-experience">
                    <h2>Como se parece trabalhar aqui: </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nostrum consequatur cumque neque magni eaque quod ratione quos optio velit enim vel omnis odio, corrupti suscipit dolores praesentium voluptates.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eius fugiat quasi. Vel, animi, a corrupti illum eos sint quod itaque optio numquam esse officia sunt quos, eveniet earum quaerat.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, illo odit fugiat dolor id quos nam alias maxime dignissimos quis, eius exercitationem eveniet dolores cum labore sunt, reiciendis distinctio amet.</p>
                </div>
            </motion.div>
        </Layout>
    );
}

export default OurCulture;