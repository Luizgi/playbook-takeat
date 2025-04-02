import React from 'react';
import { motion } from 'framer-motion';
import { Network } from 'lucide-react';
import { User, Code, Briefcase, BarChart, ShoppingCart, Headphones, Users } from 'lucide-react';

import Layout from '../../../Components/Layout/component.tsx';
import CEOBox from '../../../Components/CEOBox/component.tsx';
import DepartmentSection from '../../../Components/DepartmentSection/component.tsx';
import ExecutiveTeam from '../../../Components/ExecutiveTeam/component.tsx';

import './style.css';

const OrgChart = () => {
    const fadeIn = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };
  
  const departments = [
    { 
      name: "Equipe Executiva",
      lead: "Sarah Johnson",
      role: "CEO & Fundadora",
      teams: [
        { name: "Conselho de Administração", count: 5 },
        { name: "Assistentes Executivos", count: 2 },
      ],
      icon: <User className="icon" />
    },
    { 
      name: "Produto & Engenharia",
      lead: "Michael Chen",
      role: "CTO",
      teams: [
        { name: "Desenvolvimento Mobile", count: 12 },
        { name: "Desenvolvimento Web", count: 8 },
        { name: "QA & Testes", count: 6 },
        { name: "DevOps", count: 4 },
        { name: "Gestão de Produto", count: 5 },
        { name: "Design UX/UI", count: 7 },
      ],
      icon: <Code className="icon" />
    },
    { 
      name: "Operações",
      lead: "David Kim",
      role: "COO",
      teams: [
        { name: "Rede de Entregas", count: 14 },
        { name: "Operações de Restaurantes", count: 9 },
        { name: "Suporte ao Cliente", count: 18 },
        { name: "Logística", count: 6 },
        { name: "Controle de Qualidade", count: 4 },
      ],
      icon: <Briefcase className="icon" />
    },
    { 
      name: "Marketing & Crescimento",
      lead: "Emma Rodriguez",
      role: "CMO",
      teams: [
        { name: "Marketing de Marca", count: 6 },
        { name: "Marketing de Performance", count: 8 },
        { name: "Conteúdo & Social", count: 5 },
        { name: "SEO & SEM", count: 3 },
        { name: "Crescimento & Aquisição", count: 7 },
      ],
      icon: <BarChart className="icon" />
    },
    { 
      name: "Vendas & Parcerias",
      lead: "Noah Thompson",
      role: "Diretor de Vendas",
      teams: [
        { name: "Aquisição de Restaurantes", count: 12 },
        { name: "Contas Estratégicas", count: 5 },
        { name: "Sucesso de Parceiros", count: 7 },
        { name: "Desenvolvimento de Negócios", count: 4 },
      ],
      icon: <ShoppingCart className="icon" />
    },
    { 
      name: "Sucesso do Cliente",
      lead: "Olivia Martinez",
      role: "Diretora de Experiência do Cliente",
      teams: [
        { name: "Suporte ao Cliente", count: 15 },
        { name: "Pesquisa de Usuários", count: 3 },
        { name: "Gestão de Comunidade", count: 4 },
        { name: "Retenção de Clientes", count: 6 },
      ],
      icon: <Headphones className="icon" />
    },
    { 
      name: "Finanças & Jurídico",
      lead: "James Wilson",
      role: "CFO",
      teams: [
        { name: "Contabilidade", count: 5 },
        { name: "Planejamento Financeiro", count: 4 },
        { name: "Jurídico", count: 3 },
        { name: "Conformidade", count: 2 },
      ],
      icon: <Briefcase className="icon" />
    },
    { 
      name: "Pessoas & Cultura",
      lead: "Aisha Patel",
      role: "Chefe de Pessoas",
      teams: [
        { name: "Recrutamento", count: 6 },
        { name: "Operações de RH", count: 4 },
        { name: "Aprendizado & Desenvolvimento", count: 3 },
        { name: "Cultura & Engajamento", count: 2 },
      ],
      icon: <Users className="icon" />
    },
  ];;
  
    return (
      <Layout>
        <motion.div 
          className="org-chart-container"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <span className="org-chart-tagline">Estrutura da Empresa</span>
          <h1 className="org-chart-title">Organograma</h1>
          
          <div className="org-chart-description">
            <p>
              A estrutura organizacional da Takeat foi projetada para fomentar a inovação, 
              promover uma tomada de decisão ágil e manter nosso foco no cliente enquanto escalamos.
            </p>
          </div>
  
          <CEOBox />
          <div className="org-chart-line"></div>
          <ExecutiveTeam />
          <div className="org-chart-departments">
            {departments.map((dept, index) => (
              <DepartmentSection key={index} department={dept} />
            ))}
          </div>
  
          <div className="org-chart-growth">
            <Network className="growth-icon" />
            <h2>Crescimento da Equipe</h2>
            <p>
              A Takeat atualmente emprega mais de 180 membros de equipe em tempo integral em 8 departamentos, 
              com planos de crescer 25% no próximo ano para apoiar nossa expansão.
            </p>
            <a href="/about/careers" className="growth-link">
              Ver Vagas Abertas
            </a>
          </div>
        </motion.div>
      </Layout>
    );
  };
  
  export default OrgChart;