import React from 'react';

import './style.css';
import Layout from '../../Components/Layout/component.tsx';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const fadeIn = { hidden: {opacity: 0, y: 20}, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const stagger = { hidden: {opacity: 0}, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

    const playbooks = [
        { title: 'Automações',  description: 'Padrões de código, fluxos de trabalho e diretrizes para desenvolvimento de automações eficientes.', path: '/' },
        { title: 'Comercial',   description: 'Modelos de propostas, etapas de vendas e estratégias para fechamento de negócios.',                 path: '/'  },
        { title: 'Marketing',   description: 'Templates de campanhas, guias de posicionamento e métricas de performance.',                        path: '/'  },
        { title: 'Onboarding',  description: 'Checklists e roteiros para integração de novos colaboradores ou clientes.',                         path: '/'  },
        { title: 'Parcerias',   description: 'Critérios de avaliação, modelos de contrato e gestão de relacionamento com parceiros.',             path: '/'  },
        { title: 'Pessoas',     description: 'Políticas de RH, modelos de avaliação e programas de desenvolvimento de equipes.',                  path: '/'  },
        { title: 'Produto',     description: 'Documentação de features, roadmap e processos de validação de ideias.',                             path: '/'  },
        { title: 'Sucesso',     description: 'Indicadores de satisfação, playbooks de retenção e gestão de contas estratégicas.',                 path: '/'  },
        { title: 'Suporte',     description: 'Protocolos de atendimento, bases de conhecimento e escalonamento de tickets.',                      path: '/'  },
        { title: 'Tecnologia',  description: 'Padrões de código, políticas de infraestrutura e decisões de arquitetura.',                         path: '/'  },
      ];

      return(
        <Layout>
          <div className="pageDiv">
          <motion.div className='motionDiv' initial='hidden' animate='visible' variants={fadeIn}>

            <span className="pageTitle"> Takeat Playbook </span>
            <h1 className="mainText"> Bem vindo ao Playbook da Takeat</h1>
            <p className="subText"> Um guia para nossos processos, principios e políticas.</p>

            <motion.div className="playbookAbout" variants={stagger}>

            <motion.div variants={fadeIn}>
              <h2 className="playbookTitleReference"> Playbooks </h2>
              <div className="playbookContainer">
              {playbooks.map((playbook, index) => (
                  <motion.div key={index} className="playbookBlock" variants={fadeIn}>

                    <h3 className="playbookTitle">{playbook.title}</h3>
                    <p className="playbookDesc">{playbook.description}</p>
                    <Link to={playbook.path} className="playbookPage">Ler mais<ArrowRight size={16} className='arrowLink'/></Link>
                  </motion.div>
              ))}
              </div>
              </motion.div>

              <motion.div variants={fadeIn} className="footerBlock">

                <hr className="footer"/>
                <h2 className="footerTitle"> Começando: </h2>
                <p className="footerAsk"> Novo na companhia? Tente começar explorando essas seções: </p>

                <div className="footerLinks">
                  <Link to='/' className="footerLink"> Overview dos Benefícios </Link>
                  <Link to='/' className="footerLink"> Políticas </Link>
                  <Link to='/' className="footerLink"> Sobre Equipes </Link>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
          </div>
        </Layout>
      );
};

export default Index;