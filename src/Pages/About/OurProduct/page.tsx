import React from 'react';
import Layout from '../../../Components/Layout/component.tsx';

import './style.css';

import { motion } from 'framer-motion';
import { Rocket, Target, Sparkles, Users} from 'lucide-react';


const OurProduct = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },  
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const staggerItems = {
        hidden: { opacity: 0 },  
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    return(
        <Layout>
            <motion.div className='motionDiv' initial='hidden' animate='visible' variants={fadeIn}>

                <span className='pageTitle'> Nosso Produto </span>
                <h1 className='pageSubtitle'> Takeat: Um Sistema para substituir todos os outros </h1>
                
                
                <div className='contentDiv'>
                    <p className='pageDesc'> Utilizamos tecnologia de ponta para melhorar a jornada gastronômica, priorizando qualidade e conveniência. </p>
                </div>
                
            
                 {/* Nossa Missão */}
                <motion.div className='conteinerMotionDiv' variants={staggerItems}>
                    <motion.div className='subConteinerMotionDiv'>
                        <div className='subConteinerDiv'>
                            <div className='iconDiv'>
                                <Rocket className='icon'/>
                            </div>

                            <h3 className='iconText'> Nossa Missão: </h3>
                        </div>
                        <p className='iconSubtitle'> Transformar a experiência de todos nos restaurantes. </p>
                    </motion.div>
                </motion.div>

                 {/* Nossa Visão */}
                <motion.div className='conteinerMotionDiv' variants={staggerItems}>
                    <motion.div className='subConteinerMotionDiv'>
                        <div className='subConteinerDiv'>
                            <div className='iconDiv'>
                                <Target className='icon'/>
                            </div>

                            <h3 className='iconText'> Nossa Visão: </h3>
                        </div>
                        <p className='iconSubtitle'> Ser a principal referência em tecnologia para restaurantes, com 100 mil parceiros até 2030.</p>
                    </motion.div>
                </motion.div>
                
                {/* Nossos Valores */}
                <motion.div className='conteinerMotionDiv' variants={staggerItems}>
                    <motion.div className='subConteinerMotionDiv'>
                        <div className='subConteinerDiv'>
                            <div className='iconDiv'>
                                <Sparkles className='icon'/>
                            </div>

                            <h3 className='iconText'> Nossos Valores: </h3>
                        </div>
                        <p className='iconSubtitle'> Empreendedorismo, excelência, autonomia, valorização das pessoas e superação de limites.</p>
                    </motion.div>
                </motion.div>

                <h2 className='footerTitle'> Diferenciais </h2>
                    
                <motion.div className="footerMotionDiv" variants={staggerItems}>
                    {/* Recomendações Inteligentes */}
                    <motion.div className="footerSubMotionDiv" variants={fadeIn}>
                        <div className="footerDiv">
                            <Sparkles className="iconFooter" />
                        </div>
                        <h3 className="footerTitle">Recomendações Inteligentes</h3>
                        <p className="footerSubtitle"> Algoritmo avançado que personaliza sugestões conforme o perfil do usuário.</p>
                    </motion.div>

                    {/* Parcerias Estratégicas */}
                    <motion.div className="footerSubMotionDiv" variants={fadeIn}>
                        <div className="footerDiv">
                            <Users className="iconFooter" />
                        </div>
                        <h3 className="footerTitle">Parcerias Estratégicas</h3>
                        <p className="footerSubtitle">Colaboração com diversos restaurantes, do pequeno negócio ao grande player do mercado.</p>
                    </motion.div>

                    {/* Rastreamento em Tempo Real */}
                    <motion.div className="footerSubMotionDiv" variants={fadeIn}>
                        <div className="footerDiv">
                            <Users className="iconFooter" />
                        </div>
                        <h3 className="footerTitle">Rastreamento em Tempo Real</h3>
                        <p className="footerSubtitle">Monitoramento contínuo desde o preparo até a entrega do pedido.</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </Layout>
    );

}

export default OurProduct;
