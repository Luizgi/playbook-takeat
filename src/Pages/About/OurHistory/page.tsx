import React from 'react';

import Layout from '../../../Components/Layout/component.tsx';

import './style.css';

import { motion } from 'framer-motion';
import { Scroll, Calendar, Building, Award, Users, Star } from 'lucide-react';


const OurHistory = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },  
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const timelineItems = [
        {
            year: '2015',
            title: 'Fundação',
            subtitle: 'A Takeat foi fundada em 2015 por um grupo de amigos que se conheceram na faculdade.',
            icon: <Building className='icon'/>,
        },
        {
            year: '2016',
            title: 'Primeiro Cliente',
            subtitle: 'Em 2016, a Takeat fechou seu primeiro contrato com um restaurante local.',
            icon: <Users className='icon'/>,
        },
        {
            year: '2017',
            title: 'Expansão',
            subtitle: 'Em 2017, a Takeat expandiu para outras cidades do Brasil.',
            icon: <Award className='icon'/>,
        },
        {
            year: '2018',
            title: 'Lançamento do App',
            subtitle: 'Em 2018, a Takeat lançou seu aplicativo para Android e iOS.',
            icon: <Star className='icon'/>,
        },
        {
            year: '2019',
            title: 'Lançamento do Site',
            subtitle: 'Em 2019, a Takeat lançou seu site oficial.',
            icon: <Calendar className='icon'/>,
        },
        {
            year: '2020',
            title: '1 Milhão de Pedidos',
            subtitle: 'Em 2020, a Takeat atingiu a marca de 1 milhão de pedidos.',
            icon: <Scroll className='icon'/>,
        },
    ];

    return(
        <Layout>
            <motion.div className='motionDiv' initial="hidden" animate="visible" variants={fadeIn}>
                <span className="ticketPage">História da Companhia</span>
                    <h1 className='mainTitle'> Nossa História </h1>

                    <div className='pageDiv'>
                        <p className='pageDesc'> Desde 2015, Takeat tem a missão de transformar a operação dos restaurantes. </p>
                        <p className='pageDesc descBorder'> Aqui está uma visão da nossa jornada divididas por conquistas até o que somos hoje </p>
                    </div>
                    
                    <div className='timelineItems'>
                        {timelineItems.map((item, index) => (   
                            <motion.div key={index} initial={{ opacity:0 , x: -20}} animate={{ opacity:1 , x: 0}} transition={{ delay: index * .2 }} className='timelineItem'>
                                <div className='timelineIcon'>{item.icon}</div>    
                                <div className='timelineYear'>{item.year}</div>
                                <h3 className='timelineTitle'>{item.title}</h3>
                                <p className='timelineSubtitle'>{item.subtitle}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className='footerDiv'>
                        <div className='footerSubdiv'>
                            <Scroll className='footerIcon'/>
                            <h2 className='footerTitle'> Nossa História de fundamento: </h2>
                        </div>
                        <p className='footerDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perspiciatis aperiam, obcaecati unde, recusandae harum dolore consectetur optio veritatis, vel ab quis fuga commodi qui veniam officia iste similique mollitia.</p>
                        <p className='footerDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perspiciatis aperiam, obcaecati unde, recusandae harum dolore consectetur optio veritatis, vel ab quis fuga commodi qui veniam officia iste similique mollitia.</p>
                        <p className='footerDescEnd'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem modi laudantium amet facilis nisi, vitae dolor? Suscipit porro nulla minima corporis officia neque dolorum qui, aspernatur odio ducimus ullam? </p>
                    </div>

                    <div className='footerEndpage'>
                        <Calendar className='footerEndpageIcon'/>
                        <h2 className='footerEndpageTitle'> Olhando para trás </h2>
                        <p className='footerDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perspiciatis aperiam, obcaecati unde, recusandae harum dolore consectetur optio veritatis, vel ab quis fuga commodi qui veniam officia iste similique mollitia.</p> 
                    </div>

            </motion.div>
        </Layout>
    );
}

export default OurHistory;