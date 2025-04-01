import React, { useState } from 'react';
import { BookText, Search } from 'lucide-react';
import { motion } from 'framer-motion';

import Layout from '../../../Components/Layout/component.tsx';

import './style.css';

interface DictionaryItemProps {
  term: string;
  definition: string;
  category: string;
}

interface GroupedItemsProps {
  groupedItems: Record<string, DictionaryItemProps[]>;
  sortedKeys: string[];
}

const SearchBar = ({ searchTerm, setSearchTerm }: { searchTerm: string; setSearchTerm: (value: string) => void }) => (
  <div className="search-bar">
    <div className="search-icon">
      <Search size={18} />
    </div>
    <input
      type="text"
      placeholder="Search terms or definitions..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-input"
    />
  </div>
);

const CategoryFilter = ({
  categories,
  activeCategory,
  setActiveCategory,
}: {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}) => (
  <div className="category-filter">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => setActiveCategory(category)}
        className={`category-button ${activeCategory === category ? 'active' : ''}`}
      >
        {category}
      </button>
    ))}
  </div>
);

const DictionaryItem = ({ term, definition, category }: DictionaryItemProps) => (
  <motion.div
    className="dictionary-item"
    whileHover={{ x: 5 }}
    transition={{ duration: 0.2 }}
  >
    <div className="item-content">
      <div>
        <dt className="item-term">{term}</dt>
        <dd className="item-definition">{definition}</dd>
      </div>
      <span className="item-category">{category}</span>
    </div>
  </motion.div>
);

const GroupedDictionaryItems = ({ groupedItems, sortedKeys }: GroupedItemsProps) => (
  <div className="grouped-items">
    {sortedKeys.map((letter) => (
      <motion.div
        key={letter}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="group-title">{letter}</h2>
        <dl className="group-list">
          {groupedItems[letter].map((item, index) => (
            <DictionaryItem key={index} {...item} />
          ))}
        </dl>
      </motion.div>
    ))}
  </div>
);

const NoResults = () => (
  <div className="no-results">
    <BookText className="no-results-icon" />
    <h3 className="no-results-title">No terms found</h3>
    <p className="no-results-text">Try adjusting your search or filter criteria</p>
  </div>
);

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const dictionaryItems: DictionaryItemProps[] = [
    { term: 'AOV', definition: 'Average Order Value...', category: 'Business Metrics' },
    { term: 'CAC', definition: 'Customer Acquisition Cost...', category: 'Business Metrics' },
    // ... outros itens
  ];

  const categories = ['All', ...Array.from(new Set(dictionaryItems.map((item) => item.category)))];

  const filteredItems = dictionaryItems.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const groupedItems = filteredItems.reduce((groups, item) => {
    const firstLetter = item.term[0].toUpperCase();
    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }
    groups[firstLetter].push(item);
    return groups;
  }, {} as Record<string, DictionaryItemProps[]>);

  const sortedKeys = Object.keys(groupedItems).sort();

  return (
    <Layout>
      <div className="dictionary-container">
        <motion.div className="dictionary-header" initial="hidden" animate="visible" variants={fadeIn}>
          <span className="dictionary-tag">Terminology</span>
          <h1 className="dictionary-title">Company Dictionary</h1>
          <p className="dictionary-description">
            A comprehensive guide to the terms, acronyms, and jargon used within our company.
          </p>
        </motion.div>

        <div className="dictionary-controls">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>

        {sortedKeys.length > 0 ? (
          <GroupedDictionaryItems groupedItems={groupedItems} sortedKeys={sortedKeys} />
        ) : (
          <NoResults />
        )}
      </div>
    </Layout>
  );
};

export default Dictionary;